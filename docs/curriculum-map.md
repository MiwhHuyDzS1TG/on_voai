# VAIO 2026 curriculum map

## Nguyên tắc nguồn

- `noi_dung_on_tap_VAIO.pdf` là phạm vi chính thức và là xương sống của toàn bộ khóa học.
- `IAIO-Training-Eljakim-Schrijvers-vi.pdf` chỉ được dùng ở Chương 3 (trang PDF 65-80), Chương 4 (81-102) và Chương 5 (103-118).
- Nội dung IAIO ngoài phạm vi VAIO chỉ xuất hiện dưới nhãn `Mở rộng IAIO`.
- Tỷ lệ 70/15/15 được trình bày như ví dụ phổ biến, không phải quy tắc bắt buộc.
- Website không tuyên bố preset thi thử là cấu trúc thi VAIO chính thức.
- Tài liệu IAIO ghi tác giả Eljakim Schrijvers, năm 2026 và giấy phép CC BY-NC 4.0. Nội dung diễn giải có ghi công, phục vụ mục đích học tập phi thương mại.

## Mapping

| Module VAIO | Phạm vi VAIO | IAIO liên quan | Cách dùng |
|---|---|---|---|
| 1. Học có/không giám sát | VAIO 1.1-1.3 | IAIO Ch.4 | Trực giác supervised, regression/classification, linear/logistic regression, tree, entropy, Naive Bayes. SVM và ensemble chỉ là mở rộng. |
| 2. Neural Network và Deep Learning | VAIO 2.1-2.4 | Không có trong IAIO Ch.3-5 | Dựa trên VAIO, thêm diễn giải chuẩn về neuron, activation, loss, gradient và CNN nhưng không mở rộng quá syllabus. |
| 3. Data Preparation | VAIO 3.1-3.4 | IAIO Ch.3 | Scaling, encoding, split, feature engineering, leakage, sampling bias, distribution shift và test-set validity. |
| 4. Model Evaluation | VAIO 4.1-4.3 | IAIO Ch.5 và phần regularization IAIO Ch.4 | Metrics, threshold, ROC/AUC, calibration, generalization, regularization, CV, tuning và evaluation traps. R² là mở rộng IAIO. |
| 5. Bài toán AI thực tế | VAIO 5.1-5.14 | Ví dụ và practice problems IAIO Ch.3-5 | Framework 24 câu hỏi từ X/y đến human oversight, áp dụng cho các case y tế, spam, fraud, tín dụng, churn, giá nhà, ảnh và phân nhóm. |

## Khoảng trống IAIO Ch.3-5 không bao phủ trực tiếp

- Unsupervised learning: K-means, hierarchical clustering và PCA ở mức VAIO.
- Neural networks, activation functions, training loop và CNN.
- Multiclass so với multilabel.
- Các khía cạnh fairness, privacy, explainability và human oversight được giữ đúng mức khái quát của VAIO §5; không lấy chi tiết từ IAIO Ch.2.

## Data architecture

- `src/data/curriculum.ts`: module, topic, lesson và metadata nguồn.
- `src/data/questions.ts`: câu hỏi tĩnh theo schema `Question`.
- `src/utils/generators.ts`: câu tính toán sinh theo tham số và tự tính đáp án.
- `src/data/review.ts`: công thức, flashcard, thẻ so sánh và bẫy ôn nhanh.
- `src/state/ProgressContext.tsx`: mastery, lịch ôn, câu sai, thi thử và kế hoạch.
- `src/utils/metrics.ts`, `mastery.ts`: logic thuần có unit test.

## Mastery model

Điểm mới được cập nhật theo bằng chứng gần nhất, có trọng số theo độ khó và confidence. Câu sai tạo mức phạt mạnh hơn câu dễ; câu đúng khó có confidence hợp lý tăng điểm nhiều hơn. Trạng thái: Yếu (0-39), Đang học (40-59), Khá (60-79), Vững (80-89), Thành thạo (90-100).

## Attribution

Nội dung mở rộng được diễn giải từ *Eljakim Schrijvers, IAIO Training, 2026*, Chương 3-5, theo điều kiện giấy phép ghi trong tài liệu nguồn. Website dùng diễn giải phục vụ học tập, không sao chép dài nguyên văn.
