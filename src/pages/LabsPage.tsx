import { useState, type ComponentType } from "react";
import { Beaker, ChevronRight } from "lucide-react";
import { EncodingLab, KMeansLab, LeakageLab, PCALab, ScalingLab, SplitLab } from "../components/labs/DataLabs";
import { BayesLab, BiasVarianceLab, EntropyLab, GradientDescentLab, KNNLab, LinearRegressionLab, LogisticThresholdLab } from "../components/labs/ModelLabs";
import { ActivationLab, CNNDimensionLab, CNNLab, NeuronLab } from "../components/labs/DeepLabs";
import { ConfusionLab, KFoldLab, PrecisionRecallLab, RocLab } from "../components/labs/EvaluationLabs";
import { LabFormulaPanel } from "../components/LabFormulaPanel";
import { labFormulaGuides } from "../data/labFormulas";

type LabEntry = { id: string; title: string; group: string; description: string; source: string; component: ComponentType };

const labs: LabEntry[] = [
  { id: "scaling", title: "Scaling Visualizer", group: "Dữ liệu", description: "So sánh Min-Max và z-score khi x thay đổi.", source: "VAIO §3.2 + IAIO Ch.3", component: ScalingLab },
  { id: "encoding", title: "One-hot Encoding Demo", group: "Dữ liệu", description: "Biến category nominal thành vector nhị phân.", source: "VAIO §3.2 + IAIO Ch.3", component: EncodingLab },
  { id: "split", title: "Train/Validation/Test Split", group: "Dữ liệu", description: "Thay tỷ lệ và xem vai trò ba tập.", source: "VAIO §3.4 + IAIO Ch.3", component: SplitLab },
  { id: "leakage", title: "Leakage Detector", group: "Dữ liệu", description: "Mini-game leak hay không leak.", source: "VAIO §3.4 + IAIO Ch.3", component: LeakageLab },
  { id: "linear", title: "Linear Regression Playground", group: "Mô hình", description: "Điều chỉnh x, weight và bias trên đường hồi quy.", source: "VAIO §1.2 + IAIO Ch.4", component: LinearRegressionLab },
  { id: "knn", title: "KNN Playground", group: "Mô hình", description: "Chọn k, test point, scaling và xem từng khoảng cách.", source: "VAIO v2 §1.2", component: KNNLab },
  { id: "logistic", title: "Logistic Threshold Playground", group: "Mô hình", description: "Xem probability trở thành prediction qua threshold.", source: "VAIO §1.2 + IAIO Ch.4", component: LogisticThresholdLab },
  { id: "entropy", title: "Decision Tree / Entropy", group: "Mô hình", description: "Tính entropy và information gain động.", source: "VAIO §1.2 + IAIO Ch.4", component: EntropyLab },
  { id: "bayes", title: "Naive Bayes Calculator", group: "Mô hình", description: "Kết hợp prior, likelihood và evidence.", source: "VAIO §1.2 + IAIO Ch.4", component: BayesLab },
  { id: "kmeans", title: "K-means Step-by-step", group: "Mô hình", description: "Chạy assignment và update centroid từng vòng.", source: "VAIO §1.3", component: KMeansLab },
  { id: "pca", title: "PCA Intuition", group: "Mô hình", description: "Xoay trục chiếu để cảm nhận explained variance.", source: "VAIO §1.3 + §3.3", component: PCALab },
  { id: "neuron", title: "Artificial Neuron", group: "Deep Learning", description: "Tính weighted sum và ReLU từng bước.", source: "VAIO §2.1", component: NeuronLab },
  { id: "activation", title: "Activation Visualizer", group: "Deep Learning", description: "So sánh ReLU, Tanh, Sigmoid và Softmax.", source: "VAIO §2.2", component: ActivationLab },
  { id: "gradient", title: "Gradient Descent Stepper", group: "Deep Learning", description: "Quan sát learning rate nhỏ, vừa và quá lớn trên loss curve.", source: "VAIO v2 §2.3", component: GradientDescentLab },
  { id: "cnn", title: "CNN Convolution Demo", group: "Deep Learning", description: "Đặt kernel 3x3 lên ma trận ảnh 5x5.", source: "VAIO §2.4", component: CNNLab },
  { id: "cnn-dimensions", title: "CNN Dimension Calculator", group: "Deep Learning", description: "Tính output shape và số parameter từ K, S, P, C_in, C_out.", source: "VAIO v2 §2.4", component: CNNDimensionLab },
  { id: "confusion", title: "Confusion Matrix Calculator", group: "Đánh giá", description: "Thay TP, TN, FP, FN và tính năm metric.", source: "VAIO §4.2 + IAIO Ch.5", component: ConfusionLab },
  { id: "pr-threshold", title: "Precision/Recall Threshold", group: "Đánh giá", description: "Theo dõi precision và recall khi threshold đổi.", source: "VAIO §4.2 + IAIO Ch.5", component: PrecisionRecallLab },
  { id: "roc", title: "ROC / AUC Visualization", group: "Đánh giá", description: "Di chuyển operating point trên đường ROC.", source: "VAIO §4.2 + IAIO Ch.5", component: RocLab },
  { id: "bias-variance", title: "Bias-Variance Visualizer", group: "Đánh giá", description: "Tìm vùng underfit, tốt và overfit.", source: "VAIO §4.3 + IAIO Ch.5", component: BiasVarianceLab },
  { id: "kfold", title: "K-fold Animation", group: "Đánh giá", description: "Luân phiên fold validation và lấy score trung bình.", source: "VAIO §4.3 + IAIO Ch.5", component: KFoldLab },
];

export function LabsPage() {
  const [activeId, setActiveId] = useState(labs[0].id);
  const active = labs.find((lab) => lab.id === activeId) ?? labs[0];
  const ActiveLab = active.component;
  const groups = [...new Set(labs.map((lab) => lab.group))];
  return <div className="page labs-page">
    <header className="page-header"><div><p className="eyebrow">Interactive Labs</p><h1>Thay đổi một biến. Nhìn concept phản ứng.</h1><p>Toàn bộ mô phỏng chạy trong browser, không cần ML backend.</p></div><div className="lab-count"><Beaker /><strong>{labs.length}</strong><span>lab hoạt động</span></div></header>
    <div className="labs-layout">
      <aside className="lab-menu">{groups.map((group) => <section key={group}><h2>{group}</h2>{labs.filter((lab) => lab.group === group).map((lab) => <button type="button" key={lab.id} className={lab.id === activeId ? "active" : ""} onClick={() => setActiveId(lab.id)}><span>{lab.title}</span><ChevronRight size={16} /></button>)}</section>)}</aside>
      <section className="lab-stage">
        <header><div><span>{active.group}</span><h2>{active.title}</h2><p>{active.description}</p></div><em>{active.source}</em></header>
        <LabFormulaPanel key={active.id} guide={labFormulaGuides[active.id]} />
        <ActiveLab />
      </section>
    </div>
  </div>;
}
