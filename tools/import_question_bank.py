from __future__ import annotations

import json
import re
import sys
from pathlib import Path


QUESTION_RE = re.compile(r"^\[P\d+\]\s+Câu\s+(\d+):\s*(.*)$", re.IGNORECASE)
PARAGRAPH_RE = re.compile(r"^\[P\d+\]\s*(.*)$")
ANSWER_RE = re.compile(r"^Đáp án:\s*([A-D](?:\s*[,;&]\s*[A-D])*)", re.IGNORECASE)
CHOICE_RE = re.compile(r"(?:^|\s)([A-D])\.\s+")


OUT_OF_SCOPE = re.compile(
    r"\b(?:RNN|LSTM|BERT|GPT|LLM|Transformer|Attention|NLP|TF-IDF|Word2Vec|Tokenization|"
    r"GAN|VAE|Autoencoder|Diffusion|Reinforcement|Q-Learning|SARSA|PPO|DQN|MLOps|Kubernetes|"
    r"RAG|LoRA|QLoRA|FlashAttention|Federated|GNN|Graph Neural|Recommendation|Collaborative|"
    r"ARIMA|DBSCAN|t-SNE|XGBoost|LightGBM|Random Forest|Gradient Boosting|BERT|Prompt|AudioLM|"
    r"VALL-E|Feature Store|Model Registry|Triton|A/B Testing|Multi-Armed|NDCG|BLEU|ROUGE)\b",
    re.IGNORECASE,
)

TOPIC_RULES: list[tuple[str, str, str, list[str]]] = [
    ("m3", "leakage", "Data Leakage", ["data leakage", "rò rỉ", "leakage", "trước khi chia", "future information", "thông tin tương lai"]),
    ("m4", "classification-metrics", "Classification metrics", ["confusion", "precision", "recall", "f1", "accuracy", "false positive", "false negative", "fpr", "roc", "auc", "threshold", "class imbalance", "mất cân bằng"]),
    ("m4", "regression-metrics", "Regression metrics", ["mae", "mse", "rmse", "residual", "prediction error", "baseline hồi quy"]),
    ("m4", "validation-tuning", "Cross-validation", ["cross-validation", "cross validation", "k-fold", "validation set", "hyperparameter tuning", "model selection", "test set"]),
    ("m4", "generalization", "Generalization", ["overfitting", "underfitting", "generalization", "bias-variance", "bias và variance", "regularization", "l1", "l2", "learning curve"]),
    ("m2", "cnn", "CNN", ["cnn", "convolution", "kernel", "filter", "feature map", "stride", "padding", "pooling", "receptive field", "weight sharing"]),
    ("m2", "activation-training", "Neural network training", ["relu", "sigmoid", "softmax", "tanh", "activation", "loss function", "gradient descent", "backpropagation", "chain rule", "learning rate", "epoch", "batch size", "dropout", "early stopping"]),
    ("m2", "neuron-network", "Neural network", ["nơ-ron", "neuron", "fully connected", "weight và bias", "ma trận trọng số", "parameter count"]),
    ("m1", "tree-bayes", "Decision Tree and Naive Bayes", ["decision tree", "cây quyết định", "entropy", "information gain", "pruning", "naive bayes", "prior", "likelihood", "posterior", "bayes"]),
    ("m1", "unsupervised", "Unsupervised learning", ["k-means", "k means", "centroid", "hierarchical", "dendrogram", "linkage", "pca", "principal component", "explained variance", "clustering", "phân cụm"]),
    ("m1", "supervised", "Supervised learning", ["knn", "k-nearest", "svm", "support vector", "hyperplane", "margin", "linear regression", "polynomial regression", "logistic regression", "regression", "classification", "multiclass", "multilabel"]),
    ("m3", "bias-shift", "Sampling and distribution shift", ["sampling bias", "selection bias", "representative", "distribution shift", "covariate shift", "label shift", "concept drift", "data drift"]),
    ("m3", "feature-split", "Feature engineering and splitting", ["feature engineering", "feature selection", "feature extraction", "interaction feature", "stratified", "temporal split", "time split", "group split", "train/validation/test"]),
    ("m3", "scaling-encoding", "Scaling and encoding", ["min-max", "normalization", "standardization", "z-score", "one-hot", "one hot", "label encoding", "ordinal encoding", "scaling", "feature scale"]),
    ("m3", "data-quality", "Data quality and statistics", ["mean", "median", "mode", "variance", "standard deviation", "outlier", "missing value", "imputation", "numerical", "categorical", "continuous", "discrete", "nominal", "ordinal"]),
    ("m5", "problem-solving", "AI problem solving", ["fairness", "privacy", "explainability", "human oversight", "counterexample", "phản ví dụ", "điều kiện cần", "điều kiện đủ", "and/or/not", "logic"]),
    ("m1", "foundations", "ML foundations", ["dataset", "sample", "feature", "label", "target", "training", "inference", "parameter", "hyperparameter", "supervised", "unsupervised"]),
]

# Model names are stronger signals than words that describe how a model is
# evaluated. For example, a Logistic Regression question may mention a
# classification threshold, but it still belongs in the supervised-model
# chapter rather than the metrics chapter.
MODEL_PRIORITY_RULES: list[tuple[str, str, str, list[str]]] = [
    ("m1", "supervised", "Supervised learning", [
        "logistic regression", "linear regression", "polynomial regression",
        "knn", "k-nearest", "svm", "support vector",
    ]),
]


def split_choices(text: str) -> tuple[str, dict[str, str]]:
    matches = list(CHOICE_RE.finditer(text))
    if not matches:
        return text.strip(), {}
    prompt = text[: matches[0].start()].strip()
    choices: dict[str, str] = {}
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        choices[match.group(1)] = text[match.end() : end].strip()
    return prompt, choices


def classify(text: str) -> tuple[str, str, str, list[str]] | None:
    if OUT_OF_SCOPE.search(text):
        return None
    folded = text.casefold()
    for module, lesson_id, topic, terms in MODEL_PRIORITY_RULES:
        hits = [term for term in terms if term.casefold() in folded]
        if hits:
            return module, lesson_id, topic, hits[:4]
    for module, lesson_id, topic, terms in TOPIC_RULES:
        hits = [term for term in terms if term.casefold() in folded]
        if hits:
            return module, lesson_id, topic, hits[:4]
    return None


def parse_blocks(lines: list[str]) -> list[tuple[int, list[str]]]:
    blocks: list[tuple[int, list[str]]] = []
    current_number: int | None = None
    current: list[str] = []
    for raw in lines:
        match = QUESTION_RE.match(raw)
        if match:
            if current_number is not None:
                blocks.append((current_number, current))
            current_number = int(match.group(1))
            current = [match.group(2).strip()]
            continue
        paragraph = PARAGRAPH_RE.match(raw)
        if current_number is not None and paragraph and paragraph.group(1).strip():
            current.append(paragraph.group(1).strip())
    if current_number is not None:
        blocks.append((current_number, current))
    return blocks


def convert(number: int, parts: list[str]) -> dict[str, object] | None:
    # The supplied document changes into an advanced AI/LLM bank after question 215.
    # VAIO v2 is the curriculum authority, so that later section is intentionally excluded.
    if number > 215:
        return None
    answer_index = next((index for index, value in enumerate(parts) if ANSWER_RE.match(value)), -1)
    if answer_index < 0:
        return None
    answer_match = ANSWER_RE.match(parts[answer_index])
    assert answer_match

    before_answer = " ".join(parts[:answer_index])
    prompt, choices = split_choices(before_answer)
    if not choices:
        prompt = parts[0]
        for part in parts[1:answer_index]:
            choice_match = re.match(r"^([A-D])\.\s*(.*)$", part)
            if choice_match:
                choices[choice_match.group(1)] = choice_match.group(2).strip()
    if len(choices) < 2:
        return None

    # Distractors deliberately mention unrelated concepts, so topic inference must
    # use the stem and explanation rather than every answer choice.
    context = " ".join([prompt, *parts[answer_index + 1 :]])
    classification = classify(context)
    if not classification:
        return None
    module, lesson_id, topic, skills = classification

    letters = re.findall(r"[A-D]", answer_match.group(1).upper())
    if not letters or any(letter not in choices for letter in letters):
        return None
    answer_values = [choices[letter] for letter in letters]
    explanation_parts = [re.sub(r"^Giải thích:\s*", "", part, flags=re.IGNORECASE) for part in parts[answer_index + 1 :]]
    explanation = " ".join(explanation_parts).strip()
    if not explanation:
        return None

    scenario = "[tình huống]" in prompt.casefold() or len(prompt) > 220
    calculation = bool(re.search(r"\b(?:tính|bao nhiêu|ma trận|công thức)\b", prompt, re.IGNORECASE))
    difficulty = "hard" if scenario or calculation else "medium"
    question_type = "multiple-choice" if len(answer_values) > 1 else ("scenario" if scenario else "single-choice")
    source = ["Trắc nghiệm ôn Theo nội dung.docx", "VAIO v2"]
    return {
        "id": f"docx-q{number}",
        "module": module,
        "lessonId": lesson_id,
        "topic": topic,
        "subtopic": skills[0],
        "difficulty": difficulty,
        "type": question_type,
        "prompt": re.sub(r"^\[Tình huống\]\s*", "", prompt, flags=re.IGNORECASE),
        "choices": list(choices.values()),
        "answer": answer_values if len(answer_values) > 1 else answer_values[0],
        "explanation": explanation,
        "hints": [
            f"Xác định khái niệm trọng tâm: {topic}.",
            f"Đối chiếu các lựa chọn với kỹ năng: {skills[0]}.",
            "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện.",
        ],
        "misconceptionTags": [re.sub(r"[^a-z0-9]+", "-", skill.casefold()).strip("-") for skill in skills],
        "source": source,
        "skills": skills,
    }


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: import_question_bank.py INPUT.txt OUTPUT.ts")
    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    questions: list[dict[str, object]] = []
    seen: set[str] = set()
    for number, parts in parse_blocks(source.read_text(encoding="utf-8").splitlines()):
        item = convert(number, parts)
        if not item:
            continue
        normalized = re.sub(r"\W+", "", str(item["prompt"]).casefold())
        if normalized in seen:
            continue
        seen.add(normalized)
        questions.append(item)

    payload = json.dumps(questions, ensure_ascii=False, indent=2)
    content = (
        'import type { Question } from "../types";\n\n'
        "// Generated from the supplied DOCX. Regenerate with npm run content:import-questions.\n"
        f"export const importedQuestions: Question[] = {payload};\n"
    )
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding="utf-8")
    print(f"Imported {len(questions)} in-scope, non-duplicate questions to {target}")


if __name__ == "__main__":
    main()
