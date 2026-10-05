export type CaseStudy = {
  id: string;
  title: string;
  scenario: string;
  questions: string[];
  analysis: Array<{ label: string; answer: string }>;
};

const questions = [
  "X và y là gì? Có phải supervised learning không?",
  "Task type, split strategy và preprocessing phù hợp là gì?",
  "Baseline, model ban đầu và metric nào hợp lý?",
  "FP và FN mang ý nghĩa gì? Có class imbalance không?",
  "Leakage và generalization risk nằm ở đâu?",
  "Fairness, privacy, explainability và human oversight cần xử lý thế nào?",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "spam",
    title: "Spam detection",
    scenario: "Phân loại email đến thành Spam hoặc Không spam. Dữ liệu có nội dung, người gửi, thời điểm và nhãn do người dùng báo cáo. Tỷ lệ spam thay đổi theo chiến dịch của kẻ gửi.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là đặc trưng nội dung và metadata có trước quyết định; y là Spam/Không spam. Đây là supervised binary classification." },
      { label: "Split và preprocessing", answer: "Ưu tiên temporal split để mô phỏng email tương lai. Fit text/vector encoding trong training fold; tránh dùng cờ người dùng bấm sau khi đã nhận email làm feature." },
      { label: "Baseline, model, metric", answer: "Baseline lớp phổ biến hoặc keyword rule. Bắt đầu Logistic Regression/Naive Bayes. Theo dõi Precision, Recall, F1 và PR curve." },
      { label: "FP, FN, imbalance", answer: "FP đưa email thật vào Spam; FN để lọt spam. Lớp có thể lệch và chi phí FP thường cao vì mất thư quan trọng." },
      { label: "Leakage, generalization", answer: "User report sau sự kiện và template trùng giữa train-test gây leakage. Concept drift xảy ra khi chiến thuật spam đổi." },
      { label: "Responsible AI", answer: "Bảo vệ nội dung email, giải thích bằng tín hiệu chính, cho người dùng phục hồi thư và báo nhãn lại. Kiểm tra sai số theo ngôn ngữ/nhóm người dùng." },
    ],
  },
  {
    id: "cancer-screening",
    title: "Cancer screening",
    scenario: "Sàng lọc nguy cơ ung thư từ ảnh và thông tin lâm sàng. Ca bệnh hiếm; bỏ sót bệnh nghiêm trọng hơn yêu cầu xét nghiệm bổ sung.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là ảnh và thông tin có tại thời điểm sàng lọc; y là chẩn đoán xác nhận. Supervised binary classification." },
      { label: "Split và preprocessing", answer: "Group split theo bệnh nhân, stratify khi phù hợp. Chuẩn hóa ảnh và imputation chỉ fit trên train." },
      { label: "Baseline, model, metric", answer: "Baseline luôn Negative để thấy Accuracy đánh lừa. Model ảnh có thể là CNN; ưu tiên Recall/sensitivity, PR curve và kiểm tra Precision." },
      { label: "FP, FN, imbalance", answer: "FN bỏ sót bệnh; FP làm xét nghiệm thừa. Imbalance cao nên không dùng Accuracy một mình." },
      { label: "Leakage, generalization", answer: "Không dùng thông tin điều trị sau chẩn đoán. Tránh cùng bệnh nhân ở hai tập; đánh giá trên bệnh viện và thiết bị khác." },
      { label: "Responsible AI", answer: "Dữ liệu y tế cần bảo mật nghiêm ngặt. Báo hiệu năng theo nhóm, cung cấp evidence cho bác sĩ và giữ bác sĩ quyết định cuối." },
    ],
  },
  {
    id: "fraud",
    title: "Fraud detection",
    scenario: "Phát hiện giao dịch gian lận theo thời gian thực. Chỉ một tỷ lệ rất nhỏ là fraud và nhãn xác nhận có thể đến sau nhiều tuần.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là thông tin có trước/lúc giao dịch; y là fraud được xác nhận. Supervised binary classification." },
      { label: "Split và preprocessing", answer: "Temporal split. Encoding merchant và scaling fit trên quá khứ; cẩn thận category mới." },
      { label: "Baseline, model, metric", answer: "Baseline rule hoặc luôn hợp lệ. Dùng Logistic Regression/tree model ban đầu; PR-AUC, Recall tại mức Precision hoặc cost metric." },
      { label: "FP, FN, imbalance", answer: "FP chặn khách thật; FN mất tiền. Lệch lớp cực cao, cần threshold và class weight phù hợp." },
      { label: "Leakage, generalization", answer: "Chargeback xuất hiện sau giao dịch không thể là feature online. Fraud tactics gây concept drift." },
      { label: "Responsible AI", answer: "Bảo vệ dữ liệu tài chính, giải thích lý do giữ giao dịch, cho quy trình khiếu nại và human review cho ca rủi ro cao." },
    ],
  },
  {
    id: "loan-default",
    title: "Loan default",
    scenario: "Dự đoán người vay có vỡ nợ trong 12 tháng để hỗ trợ xét duyệt. Dữ liệu chứa thu nhập, lịch sử tín dụng và thông tin cá nhân nhạy cảm.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là dữ liệu có tại lúc nộp hồ sơ; y là default trong 12 tháng. Supervised binary classification." },
      { label: "Split và preprocessing", answer: "Temporal split theo ngày hồ sơ. Imputation/encoding fit trên train; group theo người nếu có nhiều hồ sơ." },
      { label: "Baseline, model, metric", answer: "Baseline majority hoặc scorecard đơn giản. Logistic Regression dễ giải thích; ROC-AUC, PR-AUC, calibration và cost theo threshold." },
      { label: "FP, FN, imbalance", answer: "Nếu Positive=default, FP từ chối người sẽ trả được; FN cấp khoản vay rủi ro. Cần định nghĩa cost và tỷ lệ default." },
      { label: "Leakage, generalization", answer: "Không dùng hành vi trả nợ sau phê duyệt. Kinh tế thay đổi gây shift; test theo cohort thời gian." },
      { label: "Responsible AI", answer: "Audit fairness theo nhóm, tối thiểu hóa dữ liệu nhạy cảm, cung cấp lý do quyết định và quyền khiếu nại; con người chịu trách nhiệm." },
    ],
  },
  {
    id: "house-price",
    title: "House price",
    scenario: "Ước lượng giá bán nhà từ diện tích, vị trí, số phòng và tuổi nhà. Một số biệt thự có giá rất cao so với phần còn lại.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là thuộc tính có trước giao dịch; y là giá bán. Supervised regression." },
      { label: "Split và preprocessing", answer: "Temporal hoặc spatial-group split nếu dự đoán khu vực/thời gian mới. Encode vị trí, impute và scale trong train." },
      { label: "Baseline, model, metric", answer: "Baseline median/mean training. Bắt đầu Linear Regression; so MAE và RMSE tùy mức phạt lỗi lớn." },
      { label: "FP, FN, imbalance", answer: "Không có FP/FN nhị phân. Phân tích overestimate và underestimate; outlier làm MSE/RMSE tăng mạnh." },
      { label: "Leakage, generalization", answer: "Không dùng thuế tính từ giá bán sau giao dịch. Thị trường đổi theo thời gian và khu vực." },
      { label: "Responsible AI", answer: "Tránh dùng proxy gây phân biệt khu vực, bảo vệ dữ liệu chủ nhà, giải thích đóng góp feature và để chuyên gia kiểm tra định giá lớn." },
    ],
  },
  {
    id: "churn",
    title: "Customer churn",
    scenario: "Dự đoán khách sẽ rời dịch vụ trong 30 ngày để gửi ưu đãi giữ chân. Dữ liệu có lịch sử sử dụng và tương tác hỗ trợ.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là hành vi trước cutoff; y là churn trong 30 ngày. Supervised binary classification." },
      { label: "Split và preprocessing", answer: "Temporal split theo cohort. Tạo rolling features chỉ từ quá khứ; fit preprocessing trên train." },
      { label: "Baseline, model, metric", answer: "Baseline churn rate hoặc majority. Logistic Regression/tree model; Precision, Recall, lift và business value." },
      { label: "FP, FN, imbalance", answer: "FP tặng ưu đãi không cần thiết; FN bỏ lỡ khách sắp rời. Churn thường là minority." },
      { label: "Leakage, generalization", answer: "Không dùng cuộc gọi hủy dịch vụ xảy ra sau prediction time. Chương trình khuyến mãi mới làm hành vi đổi." },
      { label: "Responsible AI", answer: "Bảo vệ hành vi cá nhân, tránh ưu đãi bất công, giải thích tín hiệu chính và cho nhân viên quyết định can thiệp." },
    ],
  },
  {
    id: "student-score",
    title: "Student score",
    scenario: "Dự đoán điểm cuối kỳ để phát hiện học sinh cần hỗ trợ sớm. Dữ liệu gồm chuyên cần, bài tập và điểm giữa kỳ.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là dữ liệu có trước thời điểm can thiệp; y là điểm cuối kỳ. Supervised regression, hoặc classification nếu dự đoán nguy cơ trượt." },
      { label: "Split và preprocessing", answer: "Split theo khóa học/thời gian hoặc group theo học sinh. Impute và scale trong train." },
      { label: "Baseline, model, metric", answer: "Baseline mean/median training. Linear Regression; MAE dễ diễn giải theo điểm." },
      { label: "FP, FN, imbalance", answer: "Với risk classification, FP hỗ trợ thừa; FN bỏ sót học sinh cần giúp. Với regression dùng residual." },
      { label: "Leakage, generalization", answer: "Không dùng điểm cuối kỳ hoặc dữ liệu tạo sau can thiệp. Giáo viên và chương trình khác gây shift." },
      { label: "Responsible AI", answer: "Không dùng dự đoán để dán nhãn cố định. Bảo vệ dữ liệu trẻ em, kiểm tra fairness và giữ giáo viên trong vòng quyết định." },
    ],
  },
  {
    id: "product-classification",
    title: "Product classification",
    scenario: "Gán mỗi sản phẩm vào một danh mục chính từ ảnh, tiêu đề và mô tả. Có 40 danh mục và một số danh mục ít mẫu.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là ảnh/text; y là một trong 40 category. Supervised multiclass classification." },
      { label: "Split và preprocessing", answer: "Group theo product family để tránh ảnh gần trùng. Fit vocabulary trên train; xử lý ảnh nhất quán." },
      { label: "Baseline, model, metric", answer: "Baseline majority hoặc keyword rule. Model text/ảnh đơn giản trước; macro F1 và confusion matrix theo class." },
      { label: "FP, FN, imbalance", answer: "FP/FN được xét one-vs-rest cho từng class. Class hiếm cần macro metric hoặc class weight." },
      { label: "Leakage, generalization", answer: "SKU/category code trong tên file có thể lộ label. Seller mới và sản phẩm mới tạo shift." },
      { label: "Responsible AI", answer: "Bảo vệ dữ liệu người bán, giải thích category gợi ý và cho người bán sửa; audit lỗi theo ngôn ngữ." },
    ],
  },
  {
    id: "segmentation",
    title: "Customer segmentation",
    scenario: "Doanh nghiệp muốn nhóm khách theo tần suất mua, giá trị đơn và loại sản phẩm, nhưng chưa có nhãn nhóm đúng.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là behavioral features; không có y. Unsupervised clustering." },
      { label: "Split và preprocessing", answer: "Không split như supervised để tính Accuracy, nhưng cần holdout/time stability. Scale feature, xử lý outlier trước K-means." },
      { label: "Baseline, model, metric", answer: "So với phân đoạn rule-based. K-means hoặc hierarchical; xem SSE, stability và usefulness, không chỉ một score." },
      { label: "FP, FN, imbalance", answer: "Không có FP/FN vì không có ground-truth class. Cluster size lệch cần diễn giải theo mục tiêu." },
      { label: "Leakage, generalization", answer: "Không dùng hành vi sau chiến dịch nếu phân nhóm để chọn người trước chiến dịch. Kiểm tra cluster ổn định theo thời gian." },
      { label: "Responsible AI", answer: "Không biến cluster thành nhãn bản chất con người. Bảo vệ hành vi mua, kiểm tra nhóm nhạy cảm và yêu cầu human interpretation." },
    ],
  },
  {
    id: "medical-image",
    title: "Medical image classification",
    scenario: "Phân loại ảnh X-quang thành Bình thường, Viêm phổi hoặc Bệnh khác. Mỗi bệnh nhân có nhiều ảnh và ảnh đến từ nhiều bệnh viện.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là ảnh và metadata hợp lệ; y là một trong ba nhãn. Supervised multiclass classification." },
      { label: "Split và preprocessing", answer: "Group theo patient, giữ một bệnh viện ngoài test nếu cần external validation. Chuẩn hóa ảnh từ train." },
      { label: "Baseline, model, metric", answer: "Baseline majority. CNN; macro Recall/F1, per-class confusion matrix và calibration." },
      { label: "FP, FN, imbalance", answer: "Mỗi lớp có FP/FN one-vs-rest. FN viêm phổi nguy hiểm; lớp Bệnh khác có thể đa dạng." },
      { label: "Leakage, generalization", answer: "Dấu bệnh viện hoặc thiết bị có thể là shortcut. Cùng bệnh nhân ở hai tập gây leakage." },
      { label: "Responsible AI", answer: "De-identify ảnh, audit theo nhóm/bệnh viện, cung cấp vùng bằng chứng có giới hạn và giữ bác sĩ quyết định." },
    ],
  },
  {
    id: "maintenance",
    title: "Predictive maintenance",
    scenario: "Dự đoán máy công nghiệp có hỏng trong 7 ngày từ cảm biến rung, nhiệt độ và lịch sử bảo trì. Mỗi máy tạo hàng nghìn bản ghi liên tiếp.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là cửa sổ cảm biến trước prediction time; y là hỏng trong 7 ngày. Supervised binary classification." },
      { label: "Split và preprocessing", answer: "Temporal split và group theo machine để đo generalization mong muốn. Fit scaling trên train; tạo rolling features chỉ từ quá khứ." },
      { label: "Baseline, model, metric", answer: "Baseline luôn không hỏng hoặc rule threshold. Logistic/tree model; Recall, Precision, lead time và cost." },
      { label: "FP, FN, imbalance", answer: "FP bảo trì thừa; FN gây dừng máy. Failure hiếm nên Accuracy không đủ." },
      { label: "Leakage, generalization", answer: "Báo cáo bảo trì sau hỏng và future sensor window là leakage. Máy mới và chế độ vận hành mới gây shift." },
      { label: "Responsible AI", answer: "Giải thích sensor bất thường, ghi log quyết định và để kỹ sư xác nhận; tránh tự dừng hệ thống an toàn chỉ dựa model." },
    ],
  },
  {
    id: "future-sales",
    title: "Future sales",
    scenario: "Dự báo doanh số tuần tới cho từng cửa hàng từ lịch sử bán, giá, khuyến mãi và ngày lễ. Mục tiêu dùng để lập tồn kho.",
    questions,
    analysis: [
      { label: "X, y, task", answer: "X là thông tin biết trước tuần dự báo; y là doanh số tuần tới. Supervised regression/time forecasting." },
      { label: "Split và preprocessing", answer: "Temporal split với rolling validation. Group hoặc đánh giá riêng theo store; encode và scale trong training window." },
      { label: "Baseline, model, metric", answer: "Baseline doanh số tuần trước hoặc cùng kỳ. Linear/tree model; MAE dễ hiểu, RMSE nếu stockout lớn đặc biệt đắt." },
      { label: "FP, FN, imbalance", answer: "Không có FP/FN nhị phân. Overforecast gây tồn kho; underforecast gây thiếu hàng." },
      { label: "Leakage, generalization", answer: "Không dùng khuyến mãi chưa chốt hay doanh số tương lai. Mùa vụ, cửa hàng mới và sự kiện bất thường gây shift." },
      { label: "Responsible AI", answer: "Giải thích holiday/promotion effects, bảo vệ dữ liệu giao dịch, cho planner điều chỉnh và theo dõi sai số theo cửa hàng." },
    ],
  },
];
