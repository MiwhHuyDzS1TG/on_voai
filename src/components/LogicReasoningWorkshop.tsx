import { useState } from "react";

const items = [
  { claim: "Nếu training accuracy tăng thì test accuracy luôn tăng.", answer: false, explanation: "Training accuracy có thể tăng do overfitting trong khi test accuracy giảm.", counterexample: "Cây sâu thêm ghi nhớ train noise nhưng dự đoán validation kém hơn." },
  { claim: "Có thể tồn tại dataset mà scaling không đổi dự đoán của Decision Tree.", answer: true, explanation: "Tree dựa vào thứ tự và threshold; một phép scale tuyến tính đơn điệu có thể giữ nguyên cách chia.", counterexample: "x<10 tương đương z<0 sau standardization thích hợp." },
  { claim: "Model chỉ được đánh giá trên test nếu và chỉ nếu đã chọn xong pipeline.", answer: true, explanation: "Trong quy trình chuẩn của curriculum, test chỉ dùng sau khi các quyết định đã chốt.", counterexample: "Nhìn test để chọn threshold làm mất tính độc lập của test." },
  { claim: "Một model có Precision cao phải có Recall cao.", answer: false, explanation: "Hai metric có thể trade off theo threshold.", counterexample: "Chỉ cảnh báo một ca chắc chắn đúng cho Precision 100% nhưng bỏ sót nhiều ca nên Recall thấp." },
  { claim: "Nếu A là Positive thật AND model dự đoán Negative thì A là False Negative.", answer: true, explanation: "FN được định nghĩa bởi actual Positive kết hợp predicted Negative.", counterexample: "Đổi một trong hai điều kiện sẽ thành TP hoặc TN." },
  { claim: "PCA giữ 95% variance chỉ khi nó giữ 95% khả năng dự đoán.", answer: false, explanation: "Cụm từ only if biến predictive ability thành điều kiện cần, nhưng explained variance chỉ mô tả X.", counterexample: "Feature variance nhỏ có thể chứa tín hiệu y quan trọng." },
  { claim: "Tồn tại ít nhất một trường hợp Accuracy cao nhưng model vô dụng cho lớp hiếm.", answer: true, explanation: "Mệnh đề exists chỉ cần một ví dụ.", counterexample: "Dữ liệu 99% Negative; luôn đoán Negative đạt 99% Accuracy và Recall Positive bằng 0." },
  { claim: "Một feature phải dùng y trực tiếp mới có thể gây leakage.", answer: false, explanation: "Leakage còn đến từ future information hoặc global preprocessing statistics.", counterexample: "Tính scaler trên toàn bộ data không dùng y nhưng vẫn cho validation ảnh hưởng training pipeline." },
];

export function LogicReasoningWorkshop() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const item = items[index];
  const next = () => { setIndex((value) => (value + 1) % items.length); setSelected(null); setSubmitted(false); };
  return <section className="chapter-section logic-workshop" id="lesson-logic">
    <div className="chapter-kicker">Logic and reasoning mode</div>
    <div className="logic-progress">Mệnh đề {index + 1}/{items.length}</div>
    <h2>{item.claim}</h2>
    <div className="logic-actions"><button type="button" className={selected === true ? "button primary" : "button secondary"} disabled={submitted} onClick={() => setSelected(true)}>Đúng</button><button type="button" className={selected === false ? "button primary" : "button secondary"} disabled={submitted} onClick={() => setSelected(false)}>Sai</button><button type="button" className="button primary" disabled={selected === null || submitted} onClick={() => setSubmitted(true)}>Kiểm tra</button></div>
    {submitted && <div className={selected === item.answer ? "feedback correct" : "feedback incorrect"}><strong>{selected === item.answer ? "Chính xác" : "Chưa đúng"}</strong><p>{item.explanation}</p><p><strong>Phản ví dụ hoặc kiểm tra biên:</strong> {item.counterexample}</p><button type="button" className="button ghost" onClick={next}>Mệnh đề tiếp theo</button></div>}
  </section>;
}
