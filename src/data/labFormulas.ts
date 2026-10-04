export type LabFormulaGuide = {
  formulas: Array<{ label: string; latex: string }>;
  symbols: string;
  grade12: string;
  example: string;
  memory: string;
};

export const labFormulaGuides: Record<string, LabFormulaGuide> = {
  scaling: {
    formulas: [
      { label: "Min-Max", latex: "x' = \\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}}" },
      { label: "z-score", latex: "z = \\frac{x-\\mu}{\\sigma}" },
    ],
    symbols: "x là giá trị ban đầu; μ là trung bình; σ là độ lệch chuẩn.",
    grade12: "Min-Max giống đổi thang điểm về đoạn 0 đến 1. z-score cho biết x cách trung bình bao nhiêu lần độ lệch chuẩn.",
    example: "Nếu x = 30, min = 10, max = 50 thì Min-Max = (30 - 10)/(50 - 10) = 0,5.",
    memory: "Min-Max hỏi vị trí trong một đoạn. z-score hỏi khoảng cách tới trung bình.",
  },
  encoding: {
    formulas: [{ label: "One-hot", latex: "x_j = \\mathbf{1}[x = c_j]" }],
    symbols: "cⱼ là category thứ j; 𝟙[điều kiện] bằng 1 nếu đúng, bằng 0 nếu sai.",
    grade12: "Mỗi màu có một công tắc riêng. Chỉ công tắc của màu đang chọn bật lên 1, các công tắc còn lại bằng 0.",
    example: "Với [Đỏ, Xanh, Trắng], giá trị Xanh trở thành [0, 1, 0].",
    memory: "Một category, một bit sáng.",
  },
  split: {
    formulas: [{ label: "Bảo toàn số mẫu", latex: "N_{train}+N_{val}+N_{test}=N" }],
    symbols: "N là tổng số mẫu; ba số bên trái là số mẫu của từng tập.",
    grade12: "Giống chia một lớp học thành ba nhóm không trùng nhau. Cộng số bạn của ba nhóm phải bằng sĩ số ban đầu.",
    example: "1.000 mẫu với 70/15/15 tạo 700 train, 150 validation và 150 test.",
    memory: "Train để học, validation để chọn, test để chốt.",
  },
  leakage: {
    formulas: [{ label: "Pipeline an toàn", latex: "\\theta_{prep}=fit(X_{train}),\\quad X'_{val}=transform(X_{val};\\theta_{prep})" }],
    symbols: "θprep là mean, min, max hoặc tham số tiền xử lý chỉ học từ train.",
    grade12: "Khi ôn kiểm tra, bạn chỉ được học từ vở ôn tập. Nhìn đề thật trước rồi quay lại ôn chính là leakage.",
    example: "Tính mean trên train rồi dùng mean đó điền missing cho validation và test.",
    memory: "Mọi thứ có chữ fit chỉ được nhìn train.",
  },
  linear: {
    formulas: [
      { label: "Dự đoán", latex: "\\hat{y}=w^Tx+b" },
      { label: "Sai số bình phương", latex: "MSE=\\frac{1}{n}\\sum_{i=1}^{n}(y_i-\\hat{y}_i)^2" },
    ],
    symbols: "w là trọng số; x là feature; b là bias; ŷ là giá trị dự đoán.",
    grade12: "Đây là phương trình đường thẳng y = ax + b. Model tìm độ dốc và điểm cắt sao cho đường đi gần các điểm dữ liệu nhất.",
    example: "w = 1,5; x = 4; b = 1 thì ŷ = 1,5 × 4 + 1 = 7.",
    memory: "Linear regression là đường thẳng cộng sai số.",
  },
  logistic: {
    formulas: [
      { label: "Xác suất", latex: "p=\\sigma(z)=\\frac{1}{1+e^{-z}}" },
      { label: "Quyết định", latex: "\\hat{y}=\\mathbf{1}[p\\ge t]" },
    ],
    symbols: "z là điểm thô; p là xác suất; t là threshold.",
    grade12: "Sigmoid ép mọi số thực vào khoảng 0 đến 1. Threshold là vạch cắt để đổi xác suất thành nhãn Có hoặc Không.",
    example: "p = 0,72 và t = 0,60 thì dự đoán dương tính; nếu t = 0,80 thì âm tính.",
    memory: "Sigmoid tạo xác suất, threshold tạo quyết định.",
  },
  entropy: {
    formulas: [
      { label: "Entropy", latex: "H(S)=-\\sum_i p_i\\log_2 p_i" },
      { label: "Information Gain", latex: "IG=H(parent)-\\sum_k \\frac{|S_k|}{|S|}H(S_k)" },
    ],
    symbols: "pᵢ là tỷ lệ của lớp i; Sₖ là nhánh con thứ k.",
    grade12: "Entropy đo độ lẫn lộn. Một hộp toàn bi đỏ có entropy thấp; hộp nửa đỏ nửa xanh khó đoán hơn nên entropy cao.",
    example: "Split tốt tạo các nhánh thuần hơn, vì vậy entropy sau split giảm và information gain tăng.",
    memory: "Càng lẫn thì H càng lớn. Càng tách sạch thì gain càng cao.",
  },
  bayes: {
    formulas: [{ label: "Định lý Bayes", latex: "P(y|x)=\\frac{P(x|y)P(y)}{P(x)}" }],
    symbols: "P(y) là prior; P(x|y) là likelihood; P(y|x) là posterior.",
    grade12: "Bắt đầu bằng niềm tin ban đầu, nhân với mức bằng chứng phù hợp, rồi chia cho độ phổ biến chung của bằng chứng.",
    example: "0,8 × 0,1 / 0,2 = 0,4. Sau khi thấy x, xác suất y tăng từ 0,1 lên 0,4.",
    memory: "Posterior = likelihood × prior / evidence.",
  },
  kmeans: {
    formulas: [
      { label: "Gán cụm", latex: "c_i=\\arg\\min_k \\|x_i-\\mu_k\\|_2" },
      { label: "Cập nhật tâm", latex: "\\mu_k=\\frac{1}{|C_k|}\\sum_{x_i\\in C_k}x_i" },
    ],
    symbols: "μₖ là tâm cụm k; Cₖ là tập điểm đang thuộc cụm k.",
    grade12: "Mỗi điểm chọn tâm gần nhất. Sau đó tâm chuyển tới trung bình cộng của các điểm vừa chọn nó.",
    example: "Ba điểm 2, 4, 9 cùng một cụm thì tâm mới là (2 + 4 + 9)/3 = 5.",
    memory: "Gán về gần nhất, kéo tâm về trung bình.",
  },
  pca: {
    formulas: [{ label: "Thành phần chính", latex: "w_1=\\arg\\max_{\\|w\\|=1} Var(Xw)" }],
    symbols: "w là hướng chiếu có độ dài 1; Xw là dữ liệu sau khi chiếu lên hướng đó.",
    grade12: "Hãy xoay một đường thẳng qua đám mây điểm. PCA chọn góc làm bóng chiếu của các điểm trải rộng nhất.",
    example: "Nếu điểm nằm gần một đường chéo, trục PCA đầu tiên thường gần đường chéo đó chứ không phải trục x hoặc y.",
    memory: "PCA giữ hướng có độ phân tán lớn nhất.",
  },
  neuron: {
    formulas: [
      { label: "Tổng có trọng số", latex: "z=\\sum_i w_ix_i+b" },
      { label: "Đầu ra", latex: "a=f(z)" },
    ],
    symbols: "xᵢ là input; wᵢ là mức ảnh hưởng; b là bias; f là activation.",
    grade12: "Neuron giống tính tổng điểm có hệ số. Mỗi input được nhân hệ số, cộng lại với bias, rồi đi qua một quy tắc biến đổi.",
    example: "x₁ = 2, x₂ = 1, w₁ = 0,5, w₂ = -1 và b = 0,2 cho z = 0,2; ReLU(z) = 0,2.",
    memory: "Nhân, cộng, kích hoạt.",
  },
  activation: {
    formulas: [
      { label: "ReLU", latex: "ReLU(z)=\\max(0,z)" },
      { label: "Sigmoid", latex: "\\sigma(z)=\\frac{1}{1+e^{-z}}" },
      { label: "Tanh", latex: "tanh(z)=\\frac{e^z-e^{-z}}{e^z+e^{-z}}" },
    ],
    symbols: "z là giá trị trước activation; đầu ra ReLU không âm, sigmoid nằm trong 0 đến 1, tanh nằm trong -1 đến 1.",
    grade12: "Activation là hàm số quen thuộc nhưng được đặt giữa các lớp mạng để mô hình học quan hệ không phải đường thẳng.",
    example: "z = -2 cho ReLU = 0, sigmoid gần 0,119 và tanh gần -0,964.",
    memory: "ReLU cắt âm, sigmoid tạo 0-1, tanh tạo -1 đến 1.",
  },
  cnn: {
    formulas: [{ label: "Convolution", latex: "Y_{i,j}=\\sum_m\\sum_n X_{i+m,j+n}K_{m,n}+b" }],
    symbols: "X là ảnh; K là kernel; Y là feature map; i,j là vị trí kernel.",
    grade12: "Đặt bảng kernel lên một vùng ảnh, nhân từng ô tương ứng rồi cộng tất cả. Trượt bảng sang vị trí khác và lặp lại.",
    example: "Kernel phát hiện biên cho tổng lớn khi vùng ảnh có thay đổi mạnh giữa các ô lân cận.",
    memory: "Đặt, nhân từng ô, cộng, rồi trượt.",
  },
  confusion: {
    formulas: [
      { label: "Accuracy", latex: "Accuracy=\\frac{TP+TN}{TP+TN+FP+FN}" },
      { label: "Precision và Recall", latex: "Precision=\\frac{TP}{TP+FP},\\quad Recall=\\frac{TP}{TP+FN}" },
      { label: "F1", latex: "F_1=2\\cdot\\frac{Precision\\cdot Recall}{Precision+Recall}" },
    ],
    symbols: "TP, TN là dự đoán đúng; FP là báo động giả; FN là bỏ sót.",
    grade12: "Precision hỏi trong các ca model báo Có, bao nhiêu ca đúng. Recall hỏi trong các ca thật sự Có, model tìm được bao nhiêu.",
    example: "TP = 80, FP = 20 thì precision = 80/(80 + 20) = 80%.",
    memory: "Precision sợ báo nhầm. Recall sợ bỏ sót.",
  },
  "pr-threshold": {
    formulas: [{ label: "Cặp metric", latex: "Precision=\\frac{TP}{TP+FP},\\quad Recall=\\frac{TP}{TP+FN}" }],
    symbols: "TP là dương tính đúng; FP là báo nhầm; FN là dương tính bị bỏ sót.",
    grade12: "Hạ threshold thường bắt được nhiều ca thật hơn nhưng cũng kéo thêm ca giả vào nhóm dương tính.",
    example: "Trong sàng lọc bệnh, hạ threshold có thể tăng recall vì ít bỏ sót bệnh nhân hơn.",
    memory: "Threshold xuống: recall thường lên, precision có thể xuống.",
  },
  roc: {
    formulas: [
      { label: "Tọa độ ROC", latex: "TPR=\\frac{TP}{TP+FN},\\quad FPR=\\frac{FP}{FP+TN}" },
      { label: "Diện tích", latex: "AUC=\\int_0^1 TPR(FPR)\\,d(FPR)" },
    ],
    symbols: "Mỗi threshold tạo một điểm (FPR, TPR); AUC là diện tích dưới đường ROC.",
    grade12: "ROC là đồ thị y theo x: trục dọc là tỷ lệ bắt đúng, trục ngang là tỷ lệ báo nhầm. Đường càng gần góc trên-trái càng tốt.",
    example: "AUC = 0,5 gần với xếp hạng ngẫu nhiên; AUC càng gần 1 thì khả năng xếp ca dương cao hơn ca âm càng tốt.",
    memory: "ROC nhìn mọi threshold. AUC đo khả năng xếp hạng.",
  },
  "bias-variance": {
    formulas: [{ label: "Phân rã sai số", latex: "E[(y-\\hat f(x))^2]=Bias^2+Variance+Noise" }],
    symbols: "Bias là sai lệch có hệ thống; variance là độ nhạy với dữ liệu train; noise là nhiễu không tránh được.",
    grade12: "Model quá đơn giản sai theo một hướng. Model quá phức tạp học cả nhiễu. Điểm tốt nằm giữa hai cực.",
    example: "Đường thẳng cho dữ liệu cong dễ underfit; đa thức bậc rất cao có thể uốn qua mọi điểm train và overfit.",
    memory: "Quá đơn giản: bias cao. Quá phức tạp: variance cao.",
  },
  kfold: {
    formulas: [{ label: "Điểm trung bình", latex: "Score_{CV}=\\frac{1}{K}\\sum_{k=1}^{K}Score_k" }],
    symbols: "K là số fold; mỗi Scoreₖ là điểm khi fold k làm validation.",
    grade12: "Chia dữ liệu thành K phần. Mỗi lượt lấy một phần làm bài kiểm tra nhỏ, các phần còn lại để học, rồi lấy trung bình K điểm.",
    example: "Năm điểm 0,78; 0,82; 0,80; 0,84; 0,81 có trung bình 0,81.",
    memory: "Mỗi fold được làm validation đúng một lần.",
  },
};
