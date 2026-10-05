import type { Question } from "../types";

// Generated from the supplied DOCX. Regenerate with npm run content:import-questions.
export const importedQuestions: Question[] = [
  {
    "id": "docx-q1",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "clustering",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong học máy, đặc điểm nào sau đây phân biệt rõ nhất giữa học có giám sát và học không giám sát?",
    "choices": [
      "Học có giám sát sử dụng khoảng cách Euclidean, trong khi học không giám sát sử dụng gradient descent.",
      "Học có giám sát yêu cầu tập dữ liệu phải có sẵn nhãn (giá trị mục tiêu y), trong khi học không giám sát làm việc với dữ liệu không có nhãn.",
      "Học có giám sát chỉ giải quyết bài toán giảm chiều dữ liệu (dimensionality reduction).",
      "Học có giám sát không cần quá trình huấn luyện (training)."
    ],
    "answer": "Học có giám sát yêu cầu tập dữ liệu phải có sẵn nhãn (giá trị mục tiêu y), trong khi học không giám sát làm việc với dữ liệu không có nhãn.",
    "explanation": "Trong học có giám sát, dữ liệu đầu vào X đi kèm với giá trị mục tiêu y (nhãn), giúp mô hình học cách đưa ra dự đoán yˆ. Học không giám sát giải quyết các bài toán trên dữ liệu chưa gán nhãn, ví dụ như clustering (phân cụm) hoặc dimensionality reduction (giảm chiều).",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: clustering.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "clustering",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "clustering",
      "phân cụm"
    ]
  },
  {
    "id": "docx-q2",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "logistic regression",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật toán Logistic Regression đưa ra dự đoán nhãn cho bài toán phân loại (classification) dựa trên yếu tố nào?",
    "choices": [
      "Xác suất có điều kiện và định lý Bayes.",
      "Số lượng cụm K và vị trí của centroid.",
      "Mức độ information gain và entropy tại các node.",
      "Xác suất dự đoán và một ngưỡng phân loại."
    ],
    "answer": "Xác suất dự đoán và một ngưỡng phân loại.",
    "explanation": "Thuật toán Logistic Regression là một mô hình phân loại sử dụng xác suất dự đoán kết hợp với một ngưỡng phân loại (threshold) cụ thể để quyết định nhãn đầu ra.",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: logistic regression.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "logistic-regression"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "logistic regression"
    ]
  },
  {
    "id": "docx-q3",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "tanh",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Đâu là nhược điểm chính của hàm kích hoạt Tanh khi được sử dụng trong mạng nơ-ron?",
    "choices": [
      "Chỉ trả về các giá trị dương, không có tâm tại 0.",
      "Khi giá trị đầu vào có độ lớn cao, đầu ra tiến gần -1 hoặc 1 làm gradient trở nên rất nhỏ, khiến quá trình học bị chậm lại.",
      "Không thể tạo ra tính phi tuyến cho mạng nơ-ron.",
      "Chỉ áp dụng được cho lớp đầu ra của bài toán phân loại nhiều lớp (multiclass)."
    ],
    "answer": "Khi giá trị đầu vào có độ lớn cao, đầu ra tiến gần -1 hoặc 1 làm gradient trở nên rất nhỏ, khiến quá trình học bị chậm lại.",
    "explanation": "Hàm kích hoạt Tanh có miền giá trị từ −1 đến 1 và đầu ra có tâm tại 0. Tuy nhiên, khi độ lớn của giá trị đầu vào cao, gradient sẽ trở nên rất nhỏ, dẫn đến hiện tượng quá trình học của mô hình bị chậm lại.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: tanh.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "tanh"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "tanh"
    ]
  },
  {
    "id": "docx-q4",
    "module": "m3",
    "lessonId": "leakage",
    "topic": "Data Leakage",
    "subtopic": "data leakage",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hiện tượng \"Data leakage\" (rò rỉ dữ liệu) trong quá trình tiền xử lý thường xảy ra do nguyên nhân nào?",
    "choices": [
      "Áp dụng kỹ thuật điền bù dữ liệu thiếu (imputation) bằng mean hoặc median.",
      "Sử dụng tập validation set thay vì test set để đánh giá cuối cùng.",
      "Học các tham số tiền xử lý (như imputation, scaling, PCA, feature selection) từ toàn bộ dữ liệu thay vì chỉ từ training data.",
      "Xóa bỏ các mẫu chứa outlier khỏi tập dữ liệu."
    ],
    "answer": "Học các tham số tiền xử lý (như imputation, scaling, PCA, feature selection) từ toàn bộ dữ liệu thay vì chỉ từ training data.",
    "explanation": "Rò rỉ dữ liệu có thể xảy ra trong các bước như imputation, scaling, PCA và feature selection nếu không tách biệt dữ liệu. Nguyên tắc cốt lõi để ngăn ngừa data leakage là chỉ được phép học các tham số tiền xử lý từ tập dữ liệu huấn luyện (training data).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data Leakage.",
      "Đối chiếu các lựa chọn với kỹ năng: data leakage.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "data-leakage",
      "r-r",
      "leakage"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "data leakage",
      "rò rỉ",
      "leakage"
    ]
  },
  {
    "id": "docx-q5",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "accuracy",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong quá trình đánh giá mô hình phân loại (Classification), tại sao chỉ số Accuracy thường bộc lộ hạn chế?",
    "choices": [
      "Vì Accuracy không thể tính toán dựa trên Confusion matrix.",
      "Vì Accuracy có những hạn chế lớn khi áp dụng trên tập dữ liệu mất cân bằng (class imbalance).",
      "Vì Accuracy luôn đánh đổi nghịch biến với Recall.",
      "Vì Accuracy không đo lường được số lượng True Positive (TP) và True Negative (TN)."
    ],
    "answer": "Vì Accuracy có những hạn chế lớn khi áp dụng trên tập dữ liệu mất cân bằng (class imbalance).",
    "explanation": "Chỉ số Accuracy (độ chính xác tổng thể) gặp hạn chế nghiêm trọng khi làm việc với tập dữ liệu mất cân bằng (class imbalance). Trong những trường hợp này, cần ưu tiên lựa chọn các metric khác dựa trên chi phí thực tế của các lỗi False Positive và False Negative.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: accuracy.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "accuracy",
      "false-positive",
      "false-negative",
      "class-imbalance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "accuracy",
      "false positive",
      "false negative",
      "class imbalance"
    ]
  },
  {
    "id": "docx-q6",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "decision tree",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thuật toán cây quyết định (Decision Tree), chỉ số \"Information Gain\" được sử dụng nhằm mục đích chính nào?",
    "choices": [
      "Đo lường chiều sâu tối đa (depth) của cây.",
      "Đánh giá hiệu quả của việc chọn một đặc trưng để phân tách (split) dữ liệu tại các node.",
      "Cắt tỉa (pruning) các lá (leaf) bị dư thừa.",
      "Tính toán xác suất hậu nghiệm (posterior) cho các mẫu dữ liệu."
    ],
    "answer": "Đánh giá hiệu quả của việc chọn một đặc trưng để phân tách (split) dữ liệu tại các node.",
    "explanation": "Trong Decision Tree, phép phân tách (split) tại các node được thực hiện dựa trên các chỉ số như entropy và Information Gain. Information Gain đo lường độ giảm độ bất định (entropy) sau khi chia, giúp chọn ra đặc trưng phân tách tốt nhất.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: decision tree.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "decision-tree",
      "c-y-quy-t-nh",
      "entropy",
      "information-gain"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "decision tree",
      "cây quyết định",
      "entropy",
      "information gain"
    ]
  },
  {
    "id": "docx-q7",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "naive bayes",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Giả định quan trọng nhất và mang tính cốt lõi của mô hình Naive Bayes là gì?",
    "choices": [
      "Dữ liệu đầu vào bắt buộc phải tuân theo phân phối chuẩn.",
      "Tất cả các đặc trưng (features) hoàn toàn độc lập có điều kiện với nhau khi biết nhãn/giá trị mục tiêu y.",
      "Mô hình luôn đưa ra giá trị dự đoán dạng số thực liên tục.",
      "Số lượng mẫu dữ liệu của các lớp phải luôn bằng nhau."
    ],
    "answer": "Tất cả các đặc trưng (features) hoàn toàn độc lập có điều kiện với nhau khi biết nhãn/giá trị mục tiêu y.",
    "explanation": "Thuật toán Naive Bayes dựa trên định lý Bayes (kết hợp prior, likelihood và posterior) và đưa ra giả định đơn giản hóa rằng các đặc trưng là độc lập có điều kiện với nhau khi biết nhãn.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: naive bayes.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "naive-bayes",
      "prior",
      "likelihood",
      "posterior"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "naive bayes",
      "prior",
      "likelihood",
      "posterior"
    ]
  },
  {
    "id": "docx-q8",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "k-means",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thuật toán phân cụm K-means, bước nào sau đây diễn ra ngay sau bước khởi tạo K tâm cụm (centroid) ban đầu?",
    "choices": [
      "Cập nhật vị trí centroid mới bằng trung bình cộng các điểm.",
      "Gán từng mẫu dữ liệu vào cụm có centroid gần nhất.",
      "Vẽ biểu đồ dạng cây dendrogram để xác định khoảng cách.",
      "Giảm chiều dữ liệu xuống còn 2 chiều bằng PCA."
    ],
    "answer": "Gán từng mẫu dữ liệu vào cụm có centroid gần nhất.",
    "explanation": "Thuật toán K-means hoạt động lặp qua 2 bước chính: bước gán cụm (gán mẫu vào centroid gần nhất dựa trên khoảng cách Euclidean) và bước cập nhật (tính lại vị trí centroid). Do đó, sau bước khởi tạo centroid, mô hình tiến hành bước gán cụm.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: k-means.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "k-means",
      "centroid",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "k-means",
      "centroid",
      "phân cụm"
    ]
  },
  {
    "id": "docx-q9",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "hierarchical",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Cấu trúc liên kết và quá trình gom cụm tích tụ trong Hierarchical Clustering thường được trực quan hóa bằng biểu đồ dạng cây nào?",
    "choices": [
      "Confusion matrix.",
      "ROC curve.",
      "Dendrogram.",
      "Feature map."
    ],
    "answer": "Dendrogram.",
    "explanation": "Trong Hierarchical Clustering (phân cụm tích tụ), kết quả khoảng cách linkage và thứ tự phân cụm được biểu diễn trực quan qua biểu đồ dạng cây gọi là dendrogram.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: hierarchical.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "hierarchical",
      "dendrogram",
      "linkage",
      "clustering"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "hierarchical",
      "dendrogram",
      "linkage",
      "clustering"
    ]
  },
  {
    "id": "docx-q10",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "pca",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Phương pháp PCA (Principal Component Analysis) thực hiện nhiệm vụ gì trong xử lý dữ liệu?",
    "choices": [
      "Mã hóa các thuộc tính categorical dạng chuỗi thành dạng số nhị phân.",
      "Tìm các thành phần chính (principal component) để trích xuất đặc trưng và giảm chiều dữ liệu.",
      "Điền bù dữ liệu thiếu (imputation) bằng giá trị median.",
      "Chia dữ liệu thành 3 tập training, validation và test set."
    ],
    "answer": "Tìm các thành phần chính (principal component) để trích xuất đặc trưng và giảm chiều dữ liệu.",
    "explanation": "PCA là kỹ thuật học không giám sát dùng để trích xuất đặc trưng và giảm chiều dữ liệu bằng cách chiếu dữ liệu lên các thành phần chính (principal component) giúp giữ lại phương sai (explained variance) tối đa.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: pca.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "pca",
      "principal-component",
      "explained-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "pca",
      "principal component",
      "explained variance"
    ]
  },
  {
    "id": "docx-q11",
    "module": "m2",
    "lessonId": "neuron-network",
    "topic": "Neural network",
    "subtopic": "nơ-ron",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Trong nơ-ron nhân tạo, mối quan hệ giữa tổng có trọng số z và đầu ra a qua hàm kích hoạt f được biểu diễn bằng công thức nào?",
    "choices": [
      "z = wT x + b và a = f(z).",
      "z = w + x + b và a = z * z.",
      "z = x / w + b và a = log(z).",
      "z = wT + x + b và a = f(w)."
    ],
    "answer": "z = wT x + b và a = f(z).",
    "explanation": "Cấu trúc cơ bản của một nơ-ron nhân tạo nhận đầu vào x, tính tổng có trọng số z = wT x + b (với w là weight, b là bias) và đưa qua hàm kích hoạt để thu được đầu ra a = f(z).",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network.",
      "Đối chiếu các lựa chọn với kỹ năng: nơ-ron.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "n-ron"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "nơ-ron"
    ]
  },
  {
    "id": "docx-q12",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "softmax",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm kích hoạt Softmax thường được sử dụng ở lớp nào của mạng nơ-ron và cho bài toán nào?",
    "choices": [
      "Lớp ẩn (hidden layer) cho bài toán hồi quy (regression).",
      "Lớp đầu ra (output layer) cho bài toán phân loại nhiều lớp (multiclass classification).",
      "Lớp đầu vào (input layer) cho bài toán phân cụm (clustering).",
      "Lớp tích chập (convolution layer) để giảm tham số."
    ],
    "answer": "Lớp đầu ra (output layer) cho bài toán phân loại nhiều lớp (multiclass classification).",
    "explanation": "Hàm Softmax được sử dụng ở output layer trong bài toán phân loại nhiều lớp (multiclass) để chuyển đổi các giá trị dự đoán thành dạng phân phối xác suất.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: softmax.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "softmax"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "softmax"
    ]
  },
  {
    "id": "docx-q13",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "activation",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Vai trò cốt lõi của các hàm kích hoạt (Activation function) trong mạng nơ-ron sâu là gì?",
    "choices": [
      "Giảm dung lượng bộ nhớ khi lưu trữ ma trận trọng số.",
      "Cung cấp tính phi tuyến, giúp mạng nơ-ron học được các hàm và mối quan hệ phức tạp.",
      "Đảm bảo số lượng tham số ở hidden layer luôn bằng input layer.",
      "Tự động loại bỏ các outlier trước khi tính forward propagation."
    ],
    "answer": "Cung cấp tính phi tuyến, giúp mạng nơ-ron học được các hàm và mối quan hệ phức tạp.",
    "explanation": "Nhờ tính phi tuyến của các hàm kích hoạt, mạng nơ-ron mới có khả năng biểu diễn và học các bài toán phức tạp mà các mô hình tuyến tính đơn thuần không giải quyết được.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: activation.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "activation"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "activation"
    ]
  },
  {
    "id": "docx-q14",
    "module": "m4",
    "lessonId": "regression-metrics",
    "topic": "Regression metrics",
    "subtopic": "mae",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm mất mát (Loss function) nào sau đây là lựa chọn tiêu chuẩn cho bài toán Hồi quy (Regression)?",
    "choices": [
      "Binary cross-entropy.",
      "Categorical cross-entropy.",
      "Mean Squared Error (MSE).",
      "Accuracy."
    ],
    "answer": "Mean Squared Error (MSE).",
    "explanation": "Bài toán hồi quy tính toán mức độ sai số dự đoán liên tục, do đó MSE (Mean Squared Error) hoặc MAE thường được áp dụng làm loss function. Binary và Categorical cross-entropy dùng cho phân loại.",
    "hints": [
      "Xác định khái niệm trọng tâm: Regression metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mae.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mae",
      "mse"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mae",
      "mse"
    ]
  },
  {
    "id": "docx-q15",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mạng nơ-ron tích chập (CNN), khái niệm \"weight sharing\" (chia sẻ trọng số) mang lại lợi ích gì?",
    "choices": [
      "Giúp các lớp fully connected không cần sử dụng hàm kích hoạt.",
      "Dùng cùng một bộ trọng số của kernel tại mọi vị trí trên ảnh, giúp giảm số tham số và nhận diện cùng một đặc trưng ở nhiều vị trí.",
      "Tự động chia sẻ dữ liệu từ tập test sang tập train để mô hình học nhanh hơn.",
      "Giảm chiều sâu của tensor đầu vào về dạng 1 chiều."
    ],
    "answer": "Dùng cùng một bộ trọng số của kernel tại mọi vị trí trên ảnh, giúp giảm số tham số và nhận diện cùng một đặc trưng ở nhiều vị trí.",
    "explanation": "Weight sharing trong CNN nghĩa là một kernel (filter) quét qua toàn bộ ảnh sử dụng chung một ma trận trọng số, giúp tiết kiệm số lượng tham số và phát hiện đặc trưng đồng nhất bất kể vị trí của nó trên ảnh.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "kernel",
      "filter",
      "weight-sharing"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "kernel",
      "filter",
      "weight sharing"
    ]
  },
  {
    "id": "docx-q16",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Vùng trên ảnh đầu vào có thể ảnh hưởng trực tiếp đến một giá trị cụ thể trên feature map của lớp CNN được gọi là gì?",
    "choices": [
      "Stride.",
      "Padding.",
      "Receptive field.",
      "Centroid."
    ],
    "answer": "Receptive field.",
    "explanation": "Receptive field là miền không gian trên ảnh đầu vào tác động tới một giá trị trên feature map. Kích thước receptive field thường có xu hướng tăng dần khi đi qua các lớp convolution sâu hơn.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution",
      "feature-map",
      "receptive-field"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution",
      "feature map",
      "receptive field"
    ]
  },
  {
    "id": "docx-q17",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "one-hot",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật mã hóa One-hot Encoding thích hợp nhất đối với loại dữ liệu nào?",
    "choices": [
      "Dữ liệu số liên tục (continuous numerical).",
      "Dữ liệu phân loại định danh (nominal categorical) không có thứ tự tự nhiên.",
      "Dữ liệu phân loại thứ bậc (ordinal categorical) có thứ tự rõ ràng.",
      "Dữ liệu ảnh dạng tensor."
    ],
    "answer": "Dữ liệu phân loại định danh (nominal categorical) không có thứ tự tự nhiên.",
    "explanation": "One-hot Encoding biến đổi từng danh mục thành một cột nhị phân riêng biệt, rất thích hợp cho dữ liệu nominal để tránh việc mô hình hiểu lầm là có mối quan hệ thứ tự giữa các lớp.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: one-hot.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "one-hot"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "one-hot"
    ]
  },
  {
    "id": "docx-q18",
    "module": "m4",
    "lessonId": "regression-metrics",
    "topic": "Regression metrics",
    "subtopic": "mae",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi tập dữ liệu có chứa các giá trị ngoại lai (outlier) cực đoan, chỉ số đánh giá mô hình Hồi quy nào ít bị ảnh hưởng nhất?",
    "choices": [
      "MSE (Mean Squared Error).",
      "RMSE (Root Mean Squared Error).",
      "MAE (Mean Absolute Error).",
      "Variance."
    ],
    "answer": "MAE (Mean Absolute Error).",
    "explanation": "MSE và RMSE sử dụng bình phương sai số nên các lỗi lớn từ outlier sẽ bị nhân phồng lên rất nhiều. Trong khi đó, MAE dùng giá trị tuyệt đối nên bền vững (robust) hơn trước tác động của outlier.",
    "hints": [
      "Xác định khái niệm trọng tâm: Regression metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mae.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mae",
      "mse",
      "rmse"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mae",
      "mse",
      "rmse"
    ]
  },
  {
    "id": "docx-q19",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "label encoding",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hạn chế lớn nhất khi dùng Label Encoding cho biến categorical định danh (nominal) là gì?",
    "choices": [
      "Tạo ra \"thứ tự giả\" giữa các giá trị (ví dụ: gán Đỏ=1, Xanh=2 vô tình làm mô hình hiểu Xanh lớn hơn Đỏ).",
      "Làm gia tăng số lượng chiều dữ liệu lên quá nhiều lần.",
      "Làm mất dữ liệu do bị gán thành missing value.",
      "Gây hiện tượng rò rỉ dữ liệu (data leakage) trực tiếp vào tập test."
    ],
    "answer": "Tạo ra \"thứ tự giả\" giữa các giá trị (ví dụ: gán Đỏ=1, Xanh=2 vô tình làm mô hình hiểu Xanh lớn hơn Đỏ).",
    "explanation": "Label Encoding chuyển biến chuỗi thành các số nguyên (1, 2, 3,...), vô tình gán cho các danh mục không có thứ tự một thứ tự giả định, làm sai lệch cách toán tử tính toán của mô hình.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: label encoding.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "label-encoding"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "label encoding"
    ]
  },
  {
    "id": "docx-q20",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật Regularization L1 và L2 được đưa vào quá trình huấn luyện nhằm mục đích chính nào?",
    "choices": [
      "Tăng tốc độ tính toán cho các lớp pooling.",
      "Kiểm soát độ phức tạp của trọng số để ngăn ngừa hiện tượng Overfitting.",
      "Tự động mã hóa các dữ liệu dạng chuỗi thành dạng số.",
      "Điền giá trị trung bình vào các mẫu bị thiếu dữ liệu."
    ],
    "answer": "Kiểm soát độ phức tạp của trọng số để ngăn ngừa hiện tượng Overfitting.",
    "explanation": "Regularization (L1, L2) bổ sung một thành phần phạt dựa trên độ lớn trọng số vào hàm mất mát, từ đó giữ cho trọng số nhỏ gọn, giảm khả năng học học vẹt và chống overfitting.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting",
      "regularization",
      "l1",
      "l2"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting",
      "regularization",
      "l1",
      "l2"
    ]
  },
  {
    "id": "docx-q21",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Chỉ số F1-score trong đánh giá bài toán Phân loại (Classification) được tính dựa trên hai đại lượng nào?",
    "choices": [
      "Accuracy và Specificity.",
      "Precision và Recall.",
      "True Positive và True Negative.",
      "MAE và MSE."
    ],
    "answer": "Precision và Recall.",
    "explanation": "F1-score là trung bình điều hòa của Precision và Recall, giúp đánh giá toàn diện hiệu năng của mô hình phân loại khi hai chỉ số này có sự đánh đổi.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "recall",
      "f1"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "recall",
      "f1"
    ]
  },
  {
    "id": "docx-q22",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hiện tượng Quá khớp (Overfitting) được nhận diện qua dấu hiệu nào sau đây?",
    "choices": [
      "Training error cao và Validation error cũng cao.",
      "Training error rất thấp nhưng Validation error/Test error lại rất cao.",
      "Training error và Validation error đều thấp xấp xỉ bằng 0.",
      "Mô hình không thể học được các góc và cạnh đơn giản của ảnh đầu vào."
    ],
    "answer": "Training error rất thấp nhưng Validation error/Test error lại rất cao.",
    "explanation": "Overfitting xảy ra khi mô hình học quá mức chi tiết và nhiễu trên tập huấn luyện (training error rất thấp), dẫn đến khả năng tổng quát hóa kém trên dữ liệu chưa từng gặp (validation/test error cao).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting"
    ]
  },
  {
    "id": "docx-q23",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "cross-validation",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Quy trình K-fold Cross-validation thực hiện bước chia dữ liệu như thế nào?",
    "choices": [
      "Sử dụng toàn bộ test set chia thành K phần để học tham số tiền xử lý.",
      "Chia tập dữ liệu huấn luyện thành K phần bằng nhau, lặp K lần dùng K-1 phần để train và 1 phần để validate.",
      "Giữ lại 1 phần để train và dùng K-1 phần còn lại để test duy nhất một lần.",
      "Chia dữ liệu thành K cụm bằng thuật toán K-means."
    ],
    "answer": "Chia tập dữ liệu huấn luyện thành K phần bằng nhau, lặp K lần dùng K-1 phần để train và 1 phần để validate.",
    "explanation": "K-fold Cross-validation chia tập train/val thành K phần, luân phiên dùng K-1 phần để huấn luyện và 1 phần còn lại để kiểm tra nhằm lựa chọn mô hình và tinh chỉnh siêu tham số.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: cross-validation.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cross-validation",
      "k-fold"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cross-validation",
      "k-fold"
    ]
  },
  {
    "id": "docx-q24",
    "module": "m5",
    "lessonId": "problem-solving",
    "topic": "AI problem solving",
    "subtopic": "fairness",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Trong thiết kế hệ thống AI thực tế, khía cạnh \"Fairness\" (Tính công bằng) đề cập đến nội dung nào?",
    "choices": [
      "Đảm bảo mô hình chạy với tốc độ như nhau trên mọi thiết bị phần cứng.",
      "Hạn chế việc mô hình tạo ra kết quả thiên lệch hoặc bất công đối với một nhóm người.",
      "Đảm bảo dữ liệu tập train và tập test có kích thước hoàn toàn bằng nhau.",
      "Công khai toàn bộ thuật toán ra công cộng."
    ],
    "answer": "Hạn chế việc mô hình tạo ra kết quả thiên lệch hoặc bất công đối với một nhóm người.",
    "explanation": "Fairness yêu cầu hệ thống AI phải đảm bảo tính khách quan, hạn chế tối đa việc đưa ra các quyết định thiên lệch hoặc gây bất công cho bất kỳ nhóm người hay đối tượng nhạy cảm nào.",
    "hints": [
      "Xác định khái niệm trọng tâm: AI problem solving.",
      "Đối chiếu các lựa chọn với kỹ năng: fairness.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "fairness"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "fairness"
    ]
  },
  {
    "id": "docx-q25",
    "module": "m5",
    "lessonId": "problem-solving",
    "topic": "AI problem solving",
    "subtopic": "human oversight",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Nguyên tắc \"Human oversight\" (Giám sát của con người) trong ứng dụng AI thực tế có nghĩa là gì?",
    "choices": [
      "Con người hoàn toàn giao phó trách nhiệm pháp lý cho mô hình AI.",
      "Con người giám sát, có thể can thiệp và chịu trách nhiệm đối với quyết định của hệ thống AI.",
      "AI có thể tự ý sửa đổi code hệ thống mà không cần thông báo cho con người.",
      "Con người phải trực tiếp tính toán bước Backpropagation bằng tay."
    ],
    "answer": "Con người giám sát, có thể can thiệp và chịu trách nhiệm đối với quyết định của hệ thống AI.",
    "explanation": "Human oversight đảm bảo con người duy trì quyền kiểm soát, có khả năng can thiệp khi hệ thống AI đưa ra quyết định sai sót và chịu trách nhiệm pháp lý/đạo đức cuối cùng.",
    "hints": [
      "Xác định khái niệm trọng tâm: AI problem solving.",
      "Đối chiếu các lựa chọn với kỹ năng: human oversight.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "human-oversight"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "human oversight"
    ]
  },
  {
    "id": "docx-q26",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "decision tree",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thuật toán Cây quyết định (Decision Tree), kỹ thuật \"cắt tỉa\" (pruning) được sử dụng nhằm mục đích gì?",
    "choices": [
      "Làm cho cây sâu hơn để học được nhiều chi tiết hơn.",
      "Loại bỏ bớt các nhánh hoặc lá (leaf) để tránh hiện tượng mô hình quá khớp (overfitting) với dữ liệu huấn luyện.",
      "Tính toán lại giá trị Entropy tại nút gốc (root).",
      "Gộp các nút lá thành một nút nhánh (node) duy nhất."
    ],
    "answer": "Loại bỏ bớt các nhánh hoặc lá (leaf) để tránh hiện tượng mô hình quá khớp (overfitting) với dữ liệu huấn luyện.",
    "explanation": "Trong Decision Tree, nếu cây phân tách (split) quá sâu (depth lớn) sẽ dễ dẫn đến quá khớp. Do đó, kỹ thuật pruning (cắt tỉa) được áp dụng để loại bỏ bớt các nhánh không cần thiết, giúp mô hình tổng quát hóa tốt hơn.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: decision tree.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "decision-tree",
      "c-y-quy-t-nh",
      "pruning"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "decision tree",
      "cây quyết định",
      "pruning"
    ]
  },
  {
    "id": "docx-q27",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "classification",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Bài toán phân loại mà trong đó một mẫu dữ liệu (sample) có thể được gán đồng thời nhiều nhãn khác nhau cùng lúc được gọi là gì?",
    "choices": [
      "Binary classification.",
      "Multiclass classification.",
      "Multilabel classification.",
      "Polynomial Regression."
    ],
    "answer": "Multilabel classification.",
    "explanation": "Multilabel classification cho phép một mẫu dữ liệu sở hữu nhiều nhãn/giá trị mục tiêu y cùng lúc (ví dụ: một bộ phim vừa thuộc thể loại hành động, vừa là khoa học viễn tưởng), khác với multiclass (mỗi mẫu chỉ có 1 nhãn trong số nhiều nhãn).",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: classification.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "classification",
      "multiclass",
      "multilabel"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "classification",
      "multiclass",
      "multilabel"
    ]
  },
  {
    "id": "docx-q28",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "sigmoid",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm kích hoạt Sigmoid phù hợp nhất khi được đặt ở lớp đầu ra (output layer) của loại bài toán nào?",
    "choices": [
      "Hồi quy tuyến tính (Linear Regression).",
      "Phân loại nhị phân (Binary classification).",
      "Phân loại nhiều lớp (Multiclass classification).",
      "Phân cụm (Clustering)."
    ],
    "answer": "Phân loại nhị phân (Binary classification).",
    "explanation": "Hàm Sigmoid nén giá trị đầu ra vào khoảng (0, 1), rất lý tưởng để thể hiện xác suất dự đoán trong các bài toán phân loại nhị phân (chỉ có 2 lớp).",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: sigmoid.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "sigmoid"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "sigmoid"
    ]
  },
  {
    "id": "docx-q29",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "backpropagation",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong quá trình huấn luyện mạng nơ-ron, quy tắc chuỗi (chain rule) được ứng dụng trong bước nào?",
    "choices": [
      "Lan truyền xuôi (Forward propagation) để tính toán loss function.",
      "Khởi tạo ma trận trọng số ngẫu nhiên ban đầu.",
      "Lan truyền ngược (Backpropagation) để tính toán đạo hàm ngược.",
      "Chia dữ liệu thành các tập training và test set."
    ],
    "answer": "Lan truyền ngược (Backpropagation) để tính toán đạo hàm ngược.",
    "explanation": "Backpropagation (lan truyền ngược) là quá trình tính toán gradient của hàm mất mát theo từng trọng số trong mạng, và nó dựa trên quy tắc chuỗi (chain rule) của vi phân để truyền đạo hàm từ lớp đầu ra ngược về lớp đầu vào.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: backpropagation.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "backpropagation",
      "chain-rule"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "backpropagation",
      "chain rule"
    ]
  },
  {
    "id": "docx-q30",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mạng nơ-ron tích chập (CNN), đặc điểm tự học đặc trưng (feature learning) diễn ra theo trình tự nào?",
    "choices": [
      "Học từ các bộ phận phức tạp trước, sau đó mới chia nhỏ thành cạnh và góc.",
      "Chỉ học duy nhất các họa tiết có màu sắc rực rỡ.",
      "Học theo tầng, từ các đặc trưng đơn giản như cạnh và góc, tiến tới họa tiết, hình dạng và cuối cùng là các bộ phận của đối tượng.",
      "Sử dụng PCA để trích xuất ngay lập tức tất cả các đặc trưng."
    ],
    "answer": "Học theo tầng, từ các đặc trưng đơn giản như cạnh và góc, tiến tới họa tiết, hình dạng và cuối cùng là các bộ phận của đối tượng.",
    "explanation": "CNN có khả năng tự học các đặc trưng theo không gian phân cấp (tầng). Các lớp đầu sẽ nhận diện các chi tiết cơ bản như cạnh, góc; các lớp sâu hơn sẽ kết hợp chúng lại thành họa tiết, hình dạng và các bộ phận của đối tượng.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn"
    ]
  },
  {
    "id": "docx-q31",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Phép toán Pooling trong kiến trúc mạng CNN có tác động trực tiếp như thế nào?",
    "choices": [
      "Làm tăng kích thước của feature map đầu ra.",
      "Giảm bớt số lượng tham số bằng cách giảm kích thước không gian của feature map.",
      "Khôi phục lại các giá trị bị mất do missing value.",
      "Thay thế hoàn toàn cho lớp Fully connected layer."
    ],
    "answer": "Giảm bớt số lượng tham số bằng cách giảm kích thước không gian của feature map.",
    "explanation": "Cùng với stride và padding, toán tử pooling (gộp) có ảnh hưởng trực tiếp đến kích thước feature map, thường giúp thu nhỏ kích thước không gian, từ đó giảm số lượng tính toán và tham số của mạng.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "feature-map",
      "stride",
      "padding"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "feature map",
      "stride",
      "padding"
    ]
  },
  {
    "id": "docx-q32",
    "module": "m4",
    "lessonId": "regression-metrics",
    "topic": "Regression metrics",
    "subtopic": "mse",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm mất mát (Loss function) Categorical cross-entropy được sử dụng phổ biến nhất cho bài toán nào sau đây?",
    "choices": [
      "Linear Regression.",
      "Binary classification.",
      "Multiclass classification.",
      "Dimensionality reduction."
    ],
    "answer": "Multiclass classification.",
    "explanation": "Trong khi MSE dùng cho Regression và Binary cross-entropy dùng cho phân loại nhị phân, thì Categorical cross-entropy là hàm mất mát tiêu chuẩn cho bài toán phân loại nhiều lớp (multiclass).",
    "hints": [
      "Xác định khái niệm trọng tâm: Regression metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mse.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mse"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mse"
    ]
  },
  {
    "id": "docx-q33",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "pca",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Sự khác biệt cốt lõi giữa kỹ thuật \"Feature selection\" và \"Feature extraction\" là gì?",
    "choices": [
      "Không có sự khác biệt, cả hai đều là một.",
      "Feature selection loại bỏ dữ liệu thiếu, còn Feature extraction điền bù dữ liệu thiếu.",
      "Feature selection chọn ra tập con các đặc trưng ban đầu tốt nhất; trong khi Feature extraction (như PCA) biến đổi và tạo ra các đặc trưng hoàn toàn mới để giảm chiều dữ liệu.",
      "Feature selection chỉ dùng cho dữ liệu hình ảnh, còn Feature extraction dùng cho dữ liệu văn bản."
    ],
    "answer": "Feature selection chọn ra tập con các đặc trưng ban đầu tốt nhất; trong khi Feature extraction (như PCA) biến đổi và tạo ra các đặc trưng hoàn toàn mới để giảm chiều dữ liệu.",
    "explanation": "Chọn đặc trưng (feature selection) là lọc lại các biến sẵn có (bỏ đi các biến dư thừa, không liên quan), còn trích xuất đặc trưng (feature extraction) tạo ra các biến mới mang thông tin tóm tắt từ các biến cũ, điển hình như PCA.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: pca.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "pca"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "pca"
    ]
  },
  {
    "id": "docx-q34",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "knn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Việc khác biệt về thang đo (feature scale) giữa các đặc trưng có thể gây ảnh hưởng tiêu cực đến nhóm thuật toán nào sau đây?",
    "choices": [
      "Chỉ ảnh hưởng đến thuật toán Decision Tree.",
      "Chỉ ảnh hưởng đến Naive Bayes.",
      "Các thuật toán dựa trên tính toán khoảng cách và tối ưu bằng gradient.",
      "Không ảnh hưởng đến bất kỳ thuật toán nào."
    ],
    "answer": "Các thuật toán dựa trên tính toán khoảng cách và tối ưu bằng gradient.",
    "explanation": "Sự chênh lệch về tỷ lệ/thang đo (feature scale) giữa các biến (ví dụ tuổi tính bằng chục, thu nhập tính bằng triệu) sẽ làm sai lệch các thuật toán đo khoảng cách (như K-means, KNN) và làm chậm quá trình hội tụ của thuật toán dùng gradient (như mạng nơ-ron, hồi quy). Do đó cần chuẩn hóa (normalization/standardization).",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: knn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "knn"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "knn"
    ]
  },
  {
    "id": "docx-q35",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "validation set",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Tại sao không được sử dụng tập dữ liệu kiểm tra (test set) để thực hiện lựa chọn mô hình (model selection) hoặc điều chỉnh siêu tham số (hyperparameter tuning)?",
    "choices": [
      "Vì test set luôn chứa nhiều outlier hơn training set.",
      "Vì sẽ gây ra rò rỉ dữ liệu (data leakage) và làm mất đi tính khách quan khi đánh giá khả năng tổng quát hóa cuối cùng.",
      "Vì test set không chứa nhãn y.",
      "Vì test set quá lớn để đưa vào tính toán."
    ],
    "answer": "Vì sẽ gây ra rò rỉ dữ liệu (data leakage) và làm mất đi tính khách quan khi đánh giá khả năng tổng quát hóa cuối cùng.",
    "explanation": "Test set phải được giữ nguyên vẹn và hoàn toàn \"mới\" đối với mô hình để đánh giá test error một cách chính xác nhất. Việc tinh chỉnh siêu tham số hoặc lựa chọn mô hình phải được thực hiện trên validation set.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: validation set.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "validation-set",
      "hyperparameter-tuning",
      "model-selection",
      "test-set"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "validation set",
      "hyperparameter tuning",
      "model selection",
      "test set"
    ]
  },
  {
    "id": "docx-q36",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "confusion",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Trong ma trận nhầm lẫn (Confusion Matrix), khái niệm False Negative (FN) có nghĩa là gì?",
    "choices": [
      "Mô hình dự đoán là lớp Negative, và thực tế đúng là lớp Negative.",
      "Mô hình dự đoán là lớp Positive, nhưng thực tế là lớp Negative.",
      "Mô hình dự đoán là lớp Negative, nhưng thực tế lại là lớp Positive.",
      "Mô hình dự đoán là lớp Positive, và thực tế đúng là lớp Positive."
    ],
    "answer": "Mô hình dự đoán là lớp Negative, nhưng thực tế lại là lớp Positive.",
    "explanation": "Các thành phần của Confusion matrix gồm TP, TN, FP và FN. FN (Âm tính giả) là trường hợp mô hình bỏ sót, dự đoán nhãn là Negative nhưng sự thật (nhãn thực tế) lại là Positive.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: confusion.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "confusion",
      "false-negative"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "confusion",
      "false negative"
    ]
  },
  {
    "id": "docx-q37",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi đánh giá một mô hình phân loại (Classification), việc điều chỉnh ngưỡng phân loại (classification threshold) sẽ dẫn đến hệ quả tất yếu nào?",
    "choices": [
      "Thay đổi giá trị thực tế của biến mục tiêu y.",
      "Tạo ra sự đánh đổi (trade-off) trực tiếp giữa hai chỉ số Precision và Recall.",
      "Tăng đồng thời cả MAE và RMSE.",
      "Làm cho tập dữ liệu bị mất cân bằng (class imbalance)."
    ],
    "answer": "Tạo ra sự đánh đổi (trade-off) trực tiếp giữa hai chỉ số Precision và Recall.",
    "explanation": "Threshold là ngưỡng quyết định nhãn đầu ra dựa trên xác suất. Việc nâng hoặc hạ threshold sẽ khiến mô hình trở nên khắt khe hoặc dễ dãi hơn trong việc dự đoán Positive, tạo ra sự đánh đổi nghịch biến giữa Precision (độ chuẩn xác) và Recall (độ phủ).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "recall",
      "threshold"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "recall",
      "threshold"
    ]
  },
  {
    "id": "docx-q38",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "test set",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khái niệm \"Khả năng tổng quát hóa\" (Generalization) của một mô hình học máy được hiểu là:",
    "choices": [
      "Khả năng mô hình ghi nhớ chính xác 100% tập dữ liệu huấn luyện.",
      "Khả năng mô hình hoạt động và dự đoán tốt trên các dữ liệu mới chưa từng gặp.",
      "Khả năng tự động điền bù tất cả missing value.",
      "Khả năng sinh ra dữ liệu giả từ tập dữ liệu thật."
    ],
    "answer": "Khả năng mô hình hoạt động và dự đoán tốt trên các dữ liệu mới chưa từng gặp.",
    "explanation": "Một mô hình có khả năng tổng quát hóa tốt nghĩa là nó không bị quá khớp (overfitting) hay chưa khớp (underfitting), mà học được quy luật chung để áp dụng hiệu quả trên dữ liệu mới (test set hoặc dữ liệu thực tế).",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: test set.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "test-set"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "test set"
    ]
  },
  {
    "id": "docx-q39",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi giải quyết một bài toán AI thực tế, tiêu chí lựa chọn metric (chỉ số đánh giá) cho mô hình phân loại thường phụ thuộc vào yếu tố nào?",
    "choices": [
      "Kích thước file của bộ dữ liệu gốc.",
      "Mức độ nghiêm trọng và chi phí thực tế do các lỗi False Positive và False Negative gây ra.",
      "Tổng số lượng các nơ-ron trong mạng.",
      "Việc mô hình dùng hàm kích hoạt ReLU hay Tanh."
    ],
    "answer": "Mức độ nghiêm trọng và chi phí thực tế do các lỗi False Positive và False Negative gây ra.",
    "explanation": "Khi đối mặt với class imbalance, việc chọn metric (Precision, Recall hay F1) phải bám sát vào rủi ro thực tế: bài toán nào phạt nặng lỗi đoán sai thành có (FP), bài toán nào phạt nặng lỗi bỏ sót (FN).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "recall",
      "f1",
      "class-imbalance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "recall",
      "f1",
      "class imbalance"
    ]
  },
  {
    "id": "docx-q40",
    "module": "m3",
    "lessonId": "leakage",
    "topic": "Data Leakage",
    "subtopic": "rò rỉ",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Để đảm bảo nguyên tắc \"Privacy\" (Quyền riêng tư) khi triển khai hệ thống AI, kỹ sư cần thực hiện điều gì?",
    "choices": [
      "Công khai toàn bộ quá trình Backpropagation.",
      "Bảo vệ an toàn cho dữ liệu cá nhân và các dữ liệu nhạy cảm trong suốt vòng đời thu thập, huấn luyện và sử dụng mô hình.",
      "Yêu cầu mô hình phải luôn có khả năng tự giải thích.",
      "Cung cấp bộ trọng số mô hình cho tất cả người dùng."
    ],
    "answer": "Bảo vệ an toàn cho dữ liệu cá nhân và các dữ liệu nhạy cảm trong suốt vòng đời thu thập, huấn luyện và sử dụng mô hình.",
    "explanation": "Khía cạnh Privacy đặt ra yêu cầu pháp lý và đạo đức về việc bảo vệ thông tin nhạy cảm của người dùng (như hồ sơ y tế, tài chính) không bị rò rỉ trong bất kỳ khâu nào của quy trình AI.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data Leakage.",
      "Đối chiếu các lựa chọn với kỹ năng: rò rỉ.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "r-r"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "rò rỉ"
    ]
  },
  {
    "id": "docx-q41",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "k-means",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thuật toán K-means, yếu tố nào sau đây có thể gây ảnh hưởng rất lớn đến chất lượng của kết quả phân cụm cuối cùng?",
    "choices": [
      "Cách khởi tạo vị trí ban đầu của các centroid.",
      "Kích thước receptive field của các ảnh đầu vào.",
      "Mức độ information gain ở các nút lá.",
      "Hệ số regularization L2."
    ],
    "answer": "Cách khởi tạo vị trí ban đầu của các centroid.",
    "explanation": "Kết quả của thuật toán K-means phụ thuộc rất nhiều vào vị trí khởi tạo ban đầu của các tâm cụm (centroid). Nếu khởi tạo kém, mô hình có thể hội tụ ở các cực tiểu cục bộ (local optima) mang lại kết quả gom cụm không tốt.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: k-means.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "k-means",
      "centroid",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "k-means",
      "centroid",
      "phân cụm"
    ]
  },
  {
    "id": "docx-q42",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "recall",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong đánh giá mô hình phân loại, đường cong ROC (ROC curve) được vẽ dựa trên mối quan hệ giữa hai tỷ lệ nào?",
    "choices": [
      "Precision và Recall.",
      "True Positive Rate (Recall) và False Positive Rate.",
      "Accuracy và Error Rate.",
      "MAE và MSE."
    ],
    "answer": "True Positive Rate (Recall) và False Positive Rate.",
    "explanation": "Đường cong ROC minh họa khả năng phân biệt của mô hình ở các ngưỡng phân loại (threshold) khác nhau, được biểu diễn bằng đồ thị với trục tung là True Positive Rate (Recall) và trục hoành là False Positive Rate (FPR).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: recall.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "recall",
      "false-positive",
      "fpr",
      "roc"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "recall",
      "false positive",
      "fpr",
      "roc"
    ]
  },
  {
    "id": "docx-q43",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Sự cân bằng Bias-Variance (Bias-Variance trade-off) đề cập đến vấn đề gì trong huấn luyện mô hình?",
    "choices": [
      "Sự đánh đổi giữa tốc độ học (learning rate) và số lần cập nhật trọng số.",
      "Sự đánh đổi giữa hiện tượng Underfitting (Bias cao, mô hình quá đơn giản) và Overfitting (Variance cao, mô hình quá phức tạp).",
      "Sự đánh đổi giữa việc dùng hàm Tanh và hàm ReLU.",
      "Sự đánh đổi giữa Fairness và Privacy."
    ],
    "answer": "Sự đánh đổi giữa hiện tượng Underfitting (Bias cao, mô hình quá đơn giản) và Overfitting (Variance cao, mô hình quá phức tạp).",
    "explanation": "Bias đại diện cho sai số do mô hình quá đơn giản (dẫn đến underfitting), còn Variance đại diện cho sai số do mô hình nhạy cảm với nhiễu trong dữ liệu huấn luyện (dẫn đến overfitting). Thiết kế mô hình luôn phải tìm điểm cân bằng giữa hai thái cực này (generalization).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting",
      "underfitting",
      "generalization",
      "bias-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting",
      "underfitting",
      "generalization",
      "bias-variance"
    ]
  },
  {
    "id": "docx-q44",
    "module": "m5",
    "lessonId": "problem-solving",
    "topic": "AI problem solving",
    "subtopic": "explainability",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Yêu cầu \"Explainability\" (Khả năng giải thích) trong một ứng dụng AI thực tế đòi hỏi điều gì?",
    "choices": [
      "Hệ thống có khả năng tự sửa lỗi mã nguồn.",
      "Có thể giải thích cơ sở hoặc các yếu tố chính đã dẫn đến dự đoán cụ thể của hệ thống mô hình.",
      "Hệ thống phải sử dụng duy nhất mô hình Linear Regression.",
      "Dữ liệu huấn luyện phải được chú thích bởi chuyên gia."
    ],
    "answer": "Có thể giải thích cơ sở hoặc các yếu tố chính đã dẫn đến dự đoán cụ thể của hệ thống mô hình.",
    "explanation": "Khi AI được áp dụng vào các lĩnh vực nhạy cảm (như y tế, tài chính), khả năng giải thích (Explainability) là bắt buộc để con người hiểu được tại sao AI lại đưa ra quyết định dự đoán đó, tăng độ tin cậy và minh bạch.",
    "hints": [
      "Xác định khái niệm trọng tâm: AI problem solving.",
      "Đối chiếu các lựa chọn với kỹ năng: explainability.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "explainability"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "explainability"
    ]
  },
  {
    "id": "docx-q45",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "mean",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi xử lý dữ liệu bị thiếu (Missing value), phương pháp thay thế (imputation) thường dùng các giá trị thống kê nào?",
    "choices": [
      "Outlier và Variance.",
      "Mean, Median, và Mode.",
      "Precision và Recall.",
      "Stride và Padding."
    ],
    "answer": "Mean, Median, và Mode.",
    "explanation": "Để điền dữ liệu bị thiếu mà không làm hụt số lượng mẫu, kỹ sư thường sử dụng phương pháp thay thế (imputation) bằng các đại lượng thống kê mô tả trung tâm như giá trị trung bình (mean), trung vị (median) hoặc yếu vị (mode).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: mean.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mean",
      "median",
      "mode",
      "missing-value"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mean",
      "median",
      "mode",
      "missing value"
    ]
  },
  {
    "id": "docx-q46",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "numerical",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Chiều cao của con người đo bằng đơn vị mét (ví dụ: 1.65m, 1.72m) được xếp vào loại dữ liệu nào sau đây?",
    "choices": [
      "Categorical và Nominal.",
      "Numerical và Continuous.",
      "Numerical và Discrete.",
      "Categorical và Ordinal."
    ],
    "answer": "Numerical và Continuous.",
    "explanation": "Chiều cao là dữ liệu dạng số (numerical) và có thể nhận bất kỳ giá trị nào trong một khoảng (ví dụ số thập phân), do đó nó là dữ liệu liên tục (continuous).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: numerical.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "numerical",
      "continuous"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "numerical",
      "continuous"
    ]
  },
  {
    "id": "docx-q47",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mạng nơ-ron tích chập (CNN), để kiểm soát kích thước của feature map đầu ra sao cho không bị thu hẹp quá nhanh sau các lớp convolution, người ta thường dùng kỹ thuật nào?",
    "choices": [
      "Pooling.",
      "Padding.",
      "Stride.",
      "ReLU."
    ],
    "answer": "Padding.",
    "explanation": "Padding là kỹ thuật thêm các giá trị (thường là 0) vào xung quanh viền của ảnh/tensor đầu vào, điều này tác động trực tiếp giúp bảo toàn hoặc điều chỉnh kích thước không gian của feature map sau khi đi qua lớp convolution.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution",
      "feature-map",
      "padding"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution",
      "feature map",
      "padding"
    ]
  },
  {
    "id": "docx-q48",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "gradient descent",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Siêu tham số (hyperparameter) nào quyết định mức độ điều chỉnh/bước nhảy của trọng số trong quá trình tối ưu hóa bằng Gradient Descent?",
    "choices": [
      "Learning rate (Tốc độ học).",
      "K-fold.",
      "Threshold (Ngưỡng phân loại).",
      "Variance."
    ],
    "answer": "Learning rate (Tốc độ học).",
    "explanation": "Trong thuật toán Gradient Descent, learning rate là hệ số quyết định bước nhảy để cập nhật trọng số, ảnh hưởng đến tốc độ và khả năng hội tụ của mạng nơ-ron.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: gradient descent.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "gradient-descent",
      "learning-rate"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "gradient descent",
      "learning rate"
    ]
  },
  {
    "id": "docx-q49",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "loss function",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm mất mát (Loss function) Binary cross-entropy được thiết kế chuyên biệt để đánh giá sai số cho dạng bài toán nào?",
    "choices": [
      "Hồi quy (Regression).",
      "Phân loại nhị phân (Binary classification).",
      "Phân loại nhiều lớp (Multiclass classification).",
      "Giảm chiều dữ liệu (Dimensionality reduction)."
    ],
    "answer": "Phân loại nhị phân (Binary classification).",
    "explanation": "Binary cross-entropy là hàm mất mát tiêu chuẩn được sử dụng khi giá trị mục tiêu y chỉ có hai lớp (phân loại nhị phân).",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: loss function.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "loss-function"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "loss function"
    ]
  },
  {
    "id": "docx-q50",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "validation set",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Vai trò quan trọng nhất của Validation set trong quy trình học máy là gì?",
    "choices": [
      "Để mô hình tính toán cập nhật trọng số và bias.",
      "Để điền bù các giá trị bị thiếu (missing value).",
      "Để đánh giá mô hình trong quá trình huấn luyện, phục vụ cho việc lựa chọn mô hình và tinh chỉnh siêu tham số (hyperparameter tuning).",
      "Để báo cáo đánh giá khả năng tổng quát hóa cuối cùng cho khách hàng."
    ],
    "answer": "Để đánh giá mô hình trong quá trình huấn luyện, phục vụ cho việc lựa chọn mô hình và tinh chỉnh siêu tham số (hyperparameter tuning).",
    "explanation": "Tập dữ liệu được chia làm 3 phần, trong đó Validation set dùng làm thước đo trung gian giúp kỹ sư điều chỉnh siêu tham số và lựa chọn mô hình tốt nhất trước khi test cuối cùng trên Test set.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: validation set.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "validation-set",
      "test-set"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "validation set",
      "test set"
    ]
  },
  {
    "id": "docx-q51",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "naive bayes",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong định lý Bayes sử dụng bởi thuật toán Naive Bayes, \"Prior\" (Xác suất tiên nghiệm) thể hiện điều gì?",
    "choices": [
      "Xác suất có điều kiện của đặc trưng khi biết nhãn (Likelihood).",
      "Xác suất hậu nghiệm sau khi tính toán (Posterior).",
      "Xác suất ban đầu của nhãn/lớp mục tiêu trước khi quan sát bất kỳ đặc trưng nào của dữ liệu.",
      "Sự độc lập có điều kiện giữa các đặc trưng."
    ],
    "answer": "Xác suất ban đầu của nhãn/lớp mục tiêu trước khi quan sát bất kỳ đặc trưng nào của dữ liệu.",
    "explanation": "Prior là xác suất nền tảng (tỷ lệ phần trăm) của một lớp xuất hiện trong tập dữ liệu tổng, được dùng làm cơ sở kết hợp với Likelihood để tính ra Posterior trong định lý Bayes.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: naive bayes.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "naive-bayes",
      "prior",
      "likelihood",
      "posterior"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "naive bayes",
      "prior",
      "likelihood",
      "posterior"
    ]
  },
  {
    "id": "docx-q52",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "generalization",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi hệ thống AI hoạt động rất tốt trên tập Test nhưng hiệu năng lại giảm mạnh khi triển khai vào môi trường thực tế, nguyên nhân cốt lõi thường là gì?",
    "choices": [
      "Mô hình chưa áp dụng Regularization L2.",
      "Mô hình bị underfitting trên tập huấn luyện.",
      "Dữ liệu trong thực tế có phân phối hoàn toàn khác biệt so với dữ liệu huấn luyện.",
      "Mức độ nghiêm trọng của False Positive quá cao."
    ],
    "answer": "Dữ liệu trong thực tế có phân phối hoàn toàn khác biệt so với dữ liệu huấn luyện.",
    "explanation": "Khả năng tổng quát hóa (Generalization) đảm bảo mô hình chạy tốt trên dữ liệu mới chưa từng gặp. Tuy nhiên, nếu môi trường thực tế tạo ra dữ liệu có đặc tính/phân phối khác (Data drift), hiệu năng của mô hình sẽ suy giảm.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: generalization.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "generalization"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "generalization"
    ]
  },
  {
    "id": "docx-q53",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Dữ liệu hình ảnh (ví dụ: ảnh màu RGB) đưa vào mạng chập CNN cơ bản được biểu diễn dưới dạng cấu trúc dữ liệu nào?",
    "choices": [
      "Scalar (Vô hướng).",
      "Vector 1 chiều.",
      "Tensor nhiều chiều.",
      "Cây quyết định (Tree)."
    ],
    "answer": "Tensor nhiều chiều.",
    "explanation": "Ảnh màu thường có chiều rộng, chiều cao và kênh màu (RGB), do đó để đưa vào mạng CNN, ảnh cần được biểu diễn dưới dạng các tensor nhiều chiều.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn"
    ]
  },
  {
    "id": "docx-q54",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Để đánh giá mức độ sai số của bài toán Hồi quy (Regression), bạn KHÔNG NÊN sử dụng chỉ số (metric) nào dưới đây?",
    "choices": [
      "MAE.",
      "MSE.",
      "RMSE.",
      "F1-score."
    ],
    "answer": "F1-score.",
    "explanation": "F1-score là chỉ số dùng cho bài toán Phân loại (Classification) (tính từ Precision và Recall), trong khi MAE, MSE, RMSE là các metric dành cho đánh giá Hồi quy dựa trên residual và prediction error.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "recall",
      "f1"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "recall",
      "f1"
    ]
  },
  {
    "id": "docx-q55",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "decision tree",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong cấu trúc Cây quyết định (Decision Tree), các quyết định cuối cùng được đưa ra tại thành phần nào?",
    "choices": [
      "Root (Nút gốc).",
      "Leaf (Nút lá).",
      "Split (Phép tách).",
      "Edge (Cạnh)."
    ],
    "answer": "Leaf (Nút lá).",
    "explanation": "Dữ liệu đi từ nút gốc (root), qua các nút trung gian (node) thực hiện các phép tách (split) và kết thúc tại các nút lá (leaf), nơi nhãn dự đoán hoặc giá trị cuối cùng được ấn định.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: decision tree.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "decision-tree",
      "c-y-quy-t-nh"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "decision tree",
      "cây quyết định"
    ]
  },
  {
    "id": "docx-q56",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "relu",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm kích hoạt (Activation function) ReLU được khuyến nghị sử dụng phổ biến nhất ở lớp nào của mạng nơ-ron?",
    "choices": [
      "Lớp đầu vào (Input layer).",
      "Lớp ẩn (Hidden layer).",
      "Lớp đầu ra (Output layer).",
      "Lớp Fully connected layer cuối cùng để phân loại nhị phân."
    ],
    "answer": "Lớp ẩn (Hidden layer).",
    "explanation": "ReLU là hàm kích hoạt tiêu chuẩn mang lại hiệu quả cao khi đặt tại các lớp ẩn (hidden layer), giúp quá trình huấn luyện nhanh chóng và tránh được hiện tượng triệt tiêu đạo hàm (vanishing gradient).",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: relu.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "relu",
      "activation"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "relu",
      "activation"
    ]
  },
  {
    "id": "docx-q57",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "linear regression",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật toán Hồi quy đa thức (Polynomial Regression) thuộc loại bài toán nào trong học máy?",
    "choices": [
      "Học không giám sát.",
      "Học có giám sát (Supervised Learning).",
      "Giảm chiều dữ liệu.",
      "Phân loại (Classification)."
    ],
    "answer": "Học có giám sát (Supervised Learning).",
    "explanation": "Cùng với Linear Regression, Polynomial Regression là mô hình thuộc nhánh Học có giám sát (cần có nhãn y) chuyên giải quyết các bài toán Hồi quy (dự đoán biến số liên tục).",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: linear regression.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "linear-regression",
      "polynomial-regression"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "linear regression",
      "polynomial regression"
    ]
  },
  {
    "id": "docx-q58",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "underfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Mô hình có trạng thái Bias cao (High Bias) thường đồng nghĩa với hiện tượng nào sau đây?",
    "choices": [
      "Overfitting (Quá khớp).",
      "Generalization (Tổng quát hóa tốt).",
      "Underfitting (Chưa khớp, mô hình quá đơn giản).",
      "Data Leakage (Rò rỉ dữ liệu)."
    ],
    "answer": "Underfitting (Chưa khớp, mô hình quá đơn giản).",
    "explanation": "Trong bài toán đánh đổi bias-variance trade-off, Bias đại diện cho các giả định sai lầm hoặc quá đơn giản hóa của mô hình, dẫn đến việc mô hình không học được dữ liệu tốt, tức là Underfitting (lỗi cao trên cả train và test).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: underfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "underfitting",
      "bias-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "underfitting",
      "bias-variance"
    ]
  },
  {
    "id": "docx-q59",
    "module": "m3",
    "lessonId": "feature-split",
    "topic": "Feature engineering and splitting",
    "subtopic": "feature engineering",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Việc nhân diện tích nhà với số phòng ngủ để tạo ra một cột dữ liệu mới giúp tăng khả năng biểu diễn của mô hình được gọi là kỹ thuật gì?",
    "choices": [
      "Standardization (Chuẩn hóa).",
      "Tạo Interaction feature (Đặc trưng tương tác).",
      "Label Encoding.",
      "Feature selection."
    ],
    "answer": "Tạo Interaction feature (Đặc trưng tương tác).",
    "explanation": "Việc tính toán toán học giữa các đặc trưng hiện có để tạo ra các đặc trưng mới mang ý nghĩa tổng hợp gọi là kỹ thuật tạo interaction feature trong bước kỹ thuật đặc trưng (Feature engineering).",
    "hints": [
      "Xác định khái niệm trọng tâm: Feature engineering and splitting.",
      "Đối chiếu các lựa chọn với kỹ năng: feature engineering.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "feature-engineering",
      "interaction-feature"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "feature engineering",
      "interaction feature"
    ]
  },
  {
    "id": "docx-q60",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "hierarchical",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khái niệm \"Linkage\" trong thuật toán Hierarchical Clustering đóng vai trò gì?",
    "choices": [
      "Xác định tốc độ học của thuật toán.",
      "Xác định tiêu chí đo khoảng cách để quyết định cách gộp các cụm lại với nhau.",
      "Xác định số lượng tham số trong mạng nơ-ron sâu.",
      "Tính toán Information Gain tại nút gốc."
    ],
    "answer": "Xác định tiêu chí đo khoảng cách để quyết định cách gộp các cụm lại với nhau.",
    "explanation": "Trong phân cụm tích tụ (Hierarchical Clustering), linkage là phương pháp/tiêu chí để tính khoảng cách giữa hai cụm (ví dụ: khoảng cách xa nhất, gần nhất, hoặc trung bình) nhằm quyết định bước gộp tiếp theo trên dendrogram.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: hierarchical.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "hierarchical",
      "dendrogram",
      "linkage",
      "clustering"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "hierarchical",
      "dendrogram",
      "linkage",
      "clustering"
    ]
  },
  {
    "id": "docx-q61",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "roc",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Diện tích nằm bên dưới đường cong ROC biểu diễn hiệu năng của mô hình phân loại được gọi tắt là chỉ số gì?",
    "choices": [
      "MAE.",
      "MSE.",
      "AUC.",
      "F1-score."
    ],
    "answer": "AUC.",
    "explanation": "AUC (Area Under the Curve) là diện tích nằm dưới ROC curve, chỉ số này cung cấp một thước đo tổng quát về khả năng phân tách của mô hình trên tất cả các ngưỡng phân loại (threshold) có thể có.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: roc.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "roc",
      "auc",
      "threshold"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "roc",
      "auc",
      "threshold"
    ]
  },
  {
    "id": "docx-q62",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "\"Sự gia tăng kích thước không gian của một bộ phận trên ảnh gốc có thể tác động đến một điểm pixel cụ thể trên feature map.\" Điều này đang mô tả khái niệm nào trong CNN?",
    "choices": [
      "Receptive field.",
      "Mean imputation.",
      "Principal component.",
      "Entropy."
    ],
    "answer": "Receptive field.",
    "explanation": "Receptive field là một khái niệm cốt lõi trong CNN, thể hiện vùng không gian cụ thể trên ảnh đầu vào có sự ảnh hưởng hay \"đóng góp\" vào việc tính toán ra một điểm giá trị trên feature map.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "feature-map",
      "receptive-field"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "feature map",
      "receptive field"
    ]
  },
  {
    "id": "docx-q63",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "mean",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Xóa bỏ đi toàn bộ một mẫu (sample) hoặc một đặc trưng (feature) là cách thô sơ nhất để giải quyết vấn đề nào về chất lượng dữ liệu?",
    "choices": [
      "Outlier (Ngoại lai).",
      "Missing value (Dữ liệu thiếu).",
      "Class imbalance (Mất cân bằng lớp).",
      "Data Leakage (Rò rỉ dữ liệu)."
    ],
    "answer": "Missing value (Dữ liệu thiếu).",
    "explanation": "Khi đối mặt với Missing value, nếu không thể hoặc không muốn sử dụng các kỹ thuật điền bù (mean, median imputation), người ta có thể chọn cách xóa bỏ hẳn các mẫu hoặc cột đặc trưng bị khuyết để làm sạch dữ liệu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: mean.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mean",
      "median",
      "missing-value",
      "imputation"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mean",
      "median",
      "missing value",
      "imputation"
    ]
  },
  {
    "id": "docx-q64",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "ordinal encoding",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Biến dữ liệu 'Thứ hạng học lực' (Giỏi, Khá, Trung bình, Yếu) thuộc dạng dữ liệu Categorical nào?",
    "choices": [
      "Nominal (Định danh).",
      "Ordinal (Thứ bậc).",
      "Binary (Nhị phân).",
      "Continuous (Liên tục)."
    ],
    "answer": "Ordinal (Thứ bậc).",
    "explanation": "Dữ liệu phân loại (categorical) có mang ý nghĩa thứ tự tự nhiên rõ ràng (Giỏi > Khá > Trung bình) được xếp vào loại dữ liệu thứ bậc (Ordinal). Khi xử lý, có thể áp dụng Ordinal Encoding.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: ordinal encoding.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "ordinal-encoding"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "ordinal encoding"
    ]
  },
  {
    "id": "docx-q65",
    "module": "m2",
    "lessonId": "neuron-network",
    "topic": "Neural network",
    "subtopic": "nơ-ron",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Đâu là công thức biểu diễn đúng một Nơ-ron nhân tạo cơ bản?",
    "choices": [
      "a = wT z + b và z = f(a).",
      "z = wT x + b và a = f(z).",
      "a = xT b + w và z = f(x).",
      "z = f(w) + x và a = z + b."
    ],
    "answer": "z = wT x + b và a = f(z).",
    "explanation": "Nơ-ron nhận đầu vào x, trọng số w, độ lệch b. Đầu tiên tính tổng có trọng số z = wT x + b, sau đó truyền z qua một hàm kích hoạt f để lấy kết quả đầu ra a = f(z).",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network.",
      "Đối chiếu các lựa chọn với kỹ năng: nơ-ron.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "n-ron"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "nơ-ron"
    ]
  },
  {
    "id": "docx-q66",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "mean",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thống kê mô tả, đại lượng \"Range\" (Khoảng) được dùng để đánh giá yếu tố nào của bộ dữ liệu?",
    "choices": [
      "Giá trị xuất hiện với tần suất cao nhất.",
      "Giá trị nằm ở vị trí trung tâm khi sắp xếp dữ liệu.",
      "Sự chênh lệch giữa giá trị lớn nhất và giá trị nhỏ nhất, thể hiện mức độ trải rộng của dữ liệu.",
      "Trung bình cộng của tất cả các giá trị."
    ],
    "answer": "Sự chênh lệch giữa giá trị lớn nhất và giá trị nhỏ nhất, thể hiện mức độ trải rộng của dữ liệu.",
    "explanation": "Các đại lượng thống kê như Mean, Median, Mode đo lường xu hướng trung tâm, trong khi Range, Variance (phương sai) và Standard deviation (độ lệch chuẩn) dùng để đánh giá mức độ phân tán hoặc trải rộng của dữ liệu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: mean.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mean",
      "median",
      "mode",
      "variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mean",
      "median",
      "mode",
      "variance"
    ]
  },
  {
    "id": "docx-q67",
    "module": "m4",
    "lessonId": "regression-metrics",
    "topic": "Regression metrics",
    "subtopic": "mae",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi đánh giá mô hình Hồi quy (Regression), thuật ngữ \"Residual\" (Phần dư) được hiểu là gì?",
    "choices": [
      "Khoảng cách giữa hai tâm cụm (centroid) trong K-means.",
      "Phần sai số giữa giá trị mà mô hình dự đoán (prediction) và giá trị thực tế của biến mục tiêu y.",
      "Giá trị của siêu tham số learning rate.",
      "Số lượng các đặc trưng (features) bị loại bỏ do chứa nhiều nhiễu."
    ],
    "answer": "Phần sai số giữa giá trị mà mô hình dự đoán (prediction) và giá trị thực tế của biến mục tiêu y.",
    "explanation": "Đánh giá mô hình regression dựa chủ yếu vào việc tính toán residual và prediction error, tức là độ chênh lệch giữa những gì mô hình dự đoán và thực tế, từ đó hình thành nên các chỉ số MAE, MSE, RMSE.",
    "hints": [
      "Xác định khái niệm trọng tâm: Regression metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mae.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mae",
      "mse",
      "rmse",
      "residual"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mae",
      "mse",
      "rmse",
      "residual"
    ]
  },
  {
    "id": "docx-q68",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "min-max",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Mục đích chính của kỹ thuật \"Min-Max normalization\" (Chuẩn hóa Min-Max) là gì?",
    "choices": [
      "Thay thế các giá trị ngoại lai (outlier) bằng giá trị trung bình (mean).",
      "Đưa các giá trị của một biến số (đặc trưng) về cùng một khoảng thang đo nhất định (thường là từ 0 đến 1).",
      "Biến đổi dữ liệu dạng chuỗi thành dữ liệu dạng số nhị phân.",
      "Trích xuất đặc trưng mới bằng thuật toán PCA."
    ],
    "answer": "Đưa các giá trị của một biến số (đặc trưng) về cùng một khoảng thang đo nhất định (thường là từ 0 đến 1).",
    "explanation": "Kỹ thuật Min-Max normalization hoặc Standardization được áp dụng để đồng nhất thang đo (feature scale) cho các biến số, giúp các thuật toán tính khoảng cách và tối ưu gradient hoạt động chính xác và hiệu quả hơn.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: min-max.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "min-max",
      "normalization",
      "standardization",
      "feature-scale"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "min-max",
      "normalization",
      "standardization",
      "feature scale"
    ]
  },
  {
    "id": "docx-q69",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Lý do nào sau đây làm cho kiến trúc Mạng nơ-ron chập (CNN) ưu việt hơn trong việc xử lý hình ảnh?",
    "choices": [
      "Vì CNN không cần trải qua bước huấn luyện bằng Backpropagation.",
      "Vì CNN sử dụng cơ chế weight sharing (chia sẻ trọng số), dùng chung một kernel tại mọi vị trí, giúp giảm số tham số và nhận diện cùng một đặc trưng ở nhiều vị trí trên ảnh.",
      "Vì CNN tự động biến đổi bài toán phân loại thành bài toán phân cụm.",
      "Vì CNN loại bỏ hoàn toàn các lớp Fully connected layer."
    ],
    "answer": "Vì CNN sử dụng cơ chế weight sharing (chia sẻ trọng số), dùng chung một kernel tại mọi vị trí, giúp giảm số tham số và nhận diện cùng một đặc trưng ở nhiều vị trí trên ảnh.",
    "explanation": "Cơ chế weight sharing trong quá trình Convolution giúp CNN vừa tiết kiệm số lượng ma trận trọng số, vừa mang lại khả năng bất biến với dịch chuyển (nhận diện được con mèo dù nó nằm ở góc nào của bức ảnh).",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution",
      "weight-sharing"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution",
      "weight sharing"
    ]
  },
  {
    "id": "docx-q70",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "regularization",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong kỹ thuật điều chuẩn (Regularization) L1 và L2, vai trò của \"hệ số regularization\" là gì?",
    "choices": [
      "Quyết định số lượng cụm K trong thuật toán học không giám sát.",
      "Quyết định mức độ phạt (penalty) đối với độ lớn của các trọng số mạng, giúp hạn chế Overfitting.",
      "Tăng tốc độ tính toán cho hàm kích hoạt ReLU.",
      "Xác định xác suất tiên nghiệm (prior) trong Naive Bayes."
    ],
    "answer": "Quyết định mức độ phạt (penalty) đối với độ lớn của các trọng số mạng, giúp hạn chế Overfitting.",
    "explanation": "Hệ số regularization (còn gọi là lambda) điều chỉnh cường độ của thành phần phạt được cộng thêm vào hàm mất mát. Hệ số này càng lớn thì trọng số càng bị ép về nhỏ, giúp mô hình bớt phức tạp và tăng khả năng tổng quát hóa.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: regularization.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "regularization",
      "l1",
      "l2"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "regularization",
      "l1",
      "l2"
    ]
  },
  {
    "id": "docx-q71",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "sigmoid",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Tại sao hàm kích hoạt Sigmoid lại đặc biệt phù hợp khi đặt ở lớp đầu ra (Output layer) của bài toán phân loại nhị phân (Binary classification)?",
    "choices": [
      "Vì nó đẩy giá trị đầu ra về đúng các số nguyên âm.",
      "Vì nó nén đầu ra vào khoảng (0, 1), cho phép diễn giải kết quả đó như một xác suất để phân loại.",
      "Vì đạo hàm của nó không bao giờ bị triệt tiêu (vanishing gradient).",
      "Vì nó kết nối trực tiếp với hàm mất mát MSE."
    ],
    "answer": "Vì nó nén đầu ra vào khoảng (0, 1), cho phép diễn giải kết quả đó như một xác suất để phân loại.",
    "explanation": "Trong phân loại nhị phân, chúng ta cần một xác suất dự đoán (từ 0% đến 100%). Hàm Sigmoid ép tổng có trọng số z (từ -vô cực đến +vô cực) về đúng miền giá trị (0, 1), phù hợp với yêu cầu này.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: sigmoid.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "sigmoid"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "sigmoid"
    ]
  },
  {
    "id": "docx-q72",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "k-means",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thuật toán phân cụm K-means, đại lượng \"K\" đại diện cho yếu tố nào cần được người kỹ sư xác định trước?",
    "choices": [
      "Số lượng chiều của dữ liệu đầu vào.",
      "Số lượng cụm K cần phân chia.",
      "Số vòng lặp (epoch) tối đa.",
      "Số lượng các đặc trưng dư thừa."
    ],
    "answer": "Số lượng cụm K cần phân chia.",
    "explanation": "K-means yêu cầu người dùng phải xác định trước tham số K, tương ứng với số cụm (clusters) mong muốn và hệ thống sẽ bắt đầu bằng việc khởi tạo K tâm cụm (centroid) đó.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: k-means.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "k-means",
      "centroid",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "k-means",
      "centroid",
      "phân cụm"
    ]
  },
  {
    "id": "docx-q73",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "clustering",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong phân tích thực tế, bài toán phân nhóm khách hàng dựa trên hành vi mua sắm mà hoàn toàn chưa có nhãn phân loại từ trước thuộc nhóm học máy nào?",
    "choices": [
      "Học có giám sát - Regression.",
      "Học có giám sát - Classification.",
      "Học không giám sát - Clustering.",
      "Học không giám sát - Dimensionality reduction."
    ],
    "answer": "Học không giám sát - Clustering.",
    "explanation": "Gom nhóm dữ liệu không có nhãn/giá trị mục tiêu y để tìm ra các mẫu chung (pattern) thuộc về bài toán phân cụm (Clustering) trong phương pháp Học không giám sát.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: clustering.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "clustering",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "clustering",
      "phân cụm"
    ]
  },
  {
    "id": "docx-q74",
    "module": "m3",
    "lessonId": "leakage",
    "topic": "Data Leakage",
    "subtopic": "data leakage",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hành động nào sau đây vi phạm nghiêm trọng nguyên tắc ngăn ngừa rò rỉ dữ liệu (Data leakage)?",
    "choices": [
      "Huấn luyện mô hình chỉ bằng dữ liệu trên Training set.",
      "Sử dụng Test set chỉ duy nhất một lần ở bước đánh giá cuối cùng.",
      "Tính toán tham số tiền xử lý (như mean để imputation, min/max để scaling) dựa trên toàn bộ dữ liệu (cả tập train và tập test).",
      "Tạo các đặc trưng mới (interaction feature) bằng cách nhân chia các cột trong tập train."
    ],
    "answer": "Tính toán tham số tiền xử lý (như mean để imputation, min/max để scaling) dựa trên toàn bộ dữ liệu (cả tập train và tập test).",
    "explanation": "Nguyên tắc cốt lõi để tránh data leakage là chỉ được phép học các tham số tiền xử lý từ tập huấn luyện (training data). Nếu lấy thông tin từ validation/test set, kết quả đánh giá sẽ bị ảo (ảo tưởng sức mạnh mô hình).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data Leakage.",
      "Đối chiếu các lựa chọn với kỹ năng: data leakage.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "data-leakage",
      "r-r",
      "leakage"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "data leakage",
      "rò rỉ",
      "leakage"
    ]
  },
  {
    "id": "docx-q75",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "learning rate",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong quá trình \"Huấn luyện\" (Training), mô hình học máy liên tục điều chỉnh và cập nhật các giá trị nào?",
    "choices": [
      "Đặc trưng (Feature) và Nhãn (Label).",
      "Tập dữ liệu kiểm tra (Test set).",
      "Tham số (Parameter).",
      "Siêu tham số (Hyperparameter)."
    ],
    "answer": "Tham số (Parameter).",
    "explanation": "Quá trình training là quá trình mô hình tự học và tự cập nhật các tham số (ví dụ: weight và bias trong mạng nơ-ron). Còn siêu tham số (như learning rate) là các cấu hình phải do con người thiết lập trước khi chạy.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: learning rate.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "learning-rate"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "learning rate"
    ]
  },
  {
    "id": "docx-q76",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "gradient descent",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật toán Gradient Descent hoạt động dựa trên cơ chế nào để tối ưu hóa mô hình?",
    "choices": [
      "Tăng dần giá trị của hàm mất mát.",
      "Tính toán gradient (độ dốc) và cập nhật trọng số dựa trên learning rate để giảm dần hàm mất mát (loss function).",
      "Tạo ra một cây quyết định mới sau mỗi vòng lặp.",
      "Biến đổi dữ liệu categorical thành dữ liệu numerical."
    ],
    "answer": "Tính toán gradient (độ dốc) và cập nhật trọng số dựa trên learning rate để giảm dần hàm mất mát (loss function).",
    "explanation": "Gradient descent là thuật toán tối ưu hóa lặp lại các bước: tìm độ dốc của đường cong mất mát (gradient) và bước ngược chiều dốc với kích thước bước bằng learning rate, liên tục cập nhật trọng số để tìm cực tiểu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: gradient descent.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "gradient-descent",
      "learning-rate"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "gradient descent",
      "learning rate"
    ]
  },
  {
    "id": "docx-q77",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "confusion",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong bài toán phân loại Email (Spam/Not Spam), nếu mô hình coi \"Spam\" là lớp Positive, lỗi False Positive (FP) sẽ xảy ra khi nào?",
    "choices": [
      "Email Spam bị dự đoán nhầm thành Email thường.",
      "Email thường bị dự đoán nhầm thành Email Spam.",
      "Email Spam được dự đoán đúng là Spam.",
      "Email thường được dự đoán đúng là Email thường."
    ],
    "answer": "Email thường bị dự đoán nhầm thành Email Spam.",
    "explanation": "Theo cấu trúc Confusion matrix, FP (Dương tính giả) xảy ra khi sự thật (nhãn) là Negative (Email thường) nhưng mô hình lại cảnh báo nhầm là Positive (Email Spam).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: confusion.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "confusion",
      "false-positive"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "confusion",
      "false positive"
    ]
  },
  {
    "id": "docx-q78",
    "module": "m3",
    "lessonId": "feature-split",
    "topic": "Feature engineering and splitting",
    "subtopic": "feature selection",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật \"Feature selection\" cần được thực hiện để loại bỏ dạng đặc trưng nào sau đây?",
    "choices": [
      "Đặc trưng mang tính quyết định đến nhãn mục tiêu y.",
      "Đặc trưng có ý nghĩa giải thích (Explainability) cao.",
      "Đặc trưng không liên quan và đặc trưng dư thừa (trùng lặp thông tin).",
      "Đặc trưng mới được tạo ra (interaction feature)."
    ],
    "answer": "Đặc trưng không liên quan và đặc trưng dư thừa (trùng lặp thông tin).",
    "explanation": "Dữ liệu đầu vào thường chứa nhiễu. Feature selection giúp chọn lọc lại các biến quan trọng, bỏ đi các biến không mang lại giá trị phân loại (không liên quan) hoặc các biến tương quan quá chặt chẽ với nhau (dư thừa) để mô hình gọn nhẹ hơn.",
    "hints": [
      "Xác định khái niệm trọng tâm: Feature engineering and splitting.",
      "Đối chiếu các lựa chọn với kỹ năng: feature selection.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "feature-selection"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "feature selection"
    ]
  },
  {
    "id": "docx-q79",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "sigmoid",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Trong kiến trúc mạng nơ-ron sâu, lớp nào làm nhiệm vụ tính toán và xuất ra dự đoán cuối cùng yˆ?",
    "choices": [
      "Lớp đầu vào (Input layer).",
      "Lớp ẩn (Hidden layer).",
      "Lớp đầu ra (Output layer).",
      "Lớp Convolution."
    ],
    "answer": "Lớp đầu ra (Output layer).",
    "explanation": "Dữ liệu di chuyển từ input layer, qua các bước xử lý phi tuyến tại hidden layer, và cuối cùng dừng lại ở output layer (nơi thường dùng hàm Sigmoid, Softmax) để xuất ra dự đoán.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: sigmoid.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "sigmoid",
      "softmax"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "sigmoid",
      "softmax"
    ]
  },
  {
    "id": "docx-q80",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "decision tree",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "\"Entropy\" là một khái niệm quan trọng được sử dụng để quyết định phép chia cắt (split) trong thuật toán nào?",
    "choices": [
      "K-means Clustering.",
      "Logistic Regression.",
      "Decision Tree (Cây quyết định).",
      "Principal Component Analysis (PCA)."
    ],
    "answer": "Decision Tree (Cây quyết định).",
    "explanation": "Cây quyết định (Decision Tree) chia nhỏ dữ liệu thông qua các phép tách tại các node. Phép tách này được tính toán sao cho giảm thiểu độ bất định/hỗn loạn của dữ liệu, và độ bất định đó được đo bằng Entropy hoặc Gini impurity để tối đa hóa Information Gain.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: decision tree.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "decision-tree",
      "c-y-quy-t-nh",
      "entropy",
      "information-gain"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "decision tree",
      "cây quyết định",
      "entropy",
      "information gain"
    ]
  },
  {
    "id": "docx-q81",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "\"Kernel\" hay \"Filter\" trong kiến trúc Mạng nơ-ron chập (CNN) có bản chất là gì?",
    "choices": [
      "Là một hàm kích hoạt phi tuyến.",
      "Là một bộ ma trận trọng số nhỏ dùng để trượt qua và trích xuất đặc trưng trên ảnh hoặc feature map trước đó.",
      "Là quá trình làm giảm kích thước của ảnh.",
      "Là phương pháp chia tập dữ liệu thành Train và Test."
    ],
    "answer": "Là một bộ ma trận trọng số nhỏ dùng để trượt qua và trích xuất đặc trưng trên ảnh hoặc feature map trước đó.",
    "explanation": "Kernel/Filter chứa các trọng số thực hiện phép tính tích chập (Convolution) lên ảnh đầu vào để phát hiện các mẫu như cạnh, góc, kết cấu và tạo ra các feature map.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution",
      "kernel",
      "filter"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution",
      "kernel",
      "filter"
    ]
  },
  {
    "id": "docx-q82",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "mean",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Đại lượng thống kê mô tả \"Mode\" (Yếu vị) thể hiện giá trị nào trong tập dữ liệu?",
    "choices": [
      "Giá trị xuất hiện với tần suất nhiều nhất.",
      "Giá trị trung bình cộng của toàn bộ tập dữ liệu.",
      "Giá trị nằm chính giữa tập dữ liệu đã được sắp xếp.",
      "Giá trị bằng bình phương của độ lệch chuẩn."
    ],
    "answer": "Giá trị xuất hiện với tần suất nhiều nhất.",
    "explanation": "Cùng với Mean (Trung bình) và Median (Trung vị), Mode là giá trị có tần số xuất hiện cao nhất trong phân phối dữ liệu, rất thường được sử dụng cho mode imputation đối với dữ liệu phân loại (categorical).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: mean.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mean",
      "median",
      "mode",
      "imputation"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mean",
      "median",
      "mode",
      "imputation"
    ]
  },
  {
    "id": "docx-q83",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "underfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Một mô hình mắc hội chứng \"Underfitting\" (Chưa khớp) thường bộc lộ biểu hiện nào sau đây?",
    "choices": [
      "Training error rất thấp và Test error rất thấp.",
      "Training error rất thấp nhưng Validation/Test error rất cao.",
      "Training error và Validation error đều ở mức rất cao.",
      "Mô hình dự đoán hoàn hảo trên dữ liệu mới."
    ],
    "answer": "Training error và Validation error đều ở mức rất cao.",
    "explanation": "Underfitting xảy ra khi mô hình quá đơn giản (Bias cao) để có thể nắm bắt quy luật của dữ liệu. Kết quả là nó học kém trên chính dữ liệu huấn luyện (Training error cao) và tất nhiên cũng dự đoán kém trên dữ liệu kiểm tra (Validation error cao).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: underfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "underfitting"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "underfitting"
    ]
  },
  {
    "id": "docx-q84",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "logistic regression",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật toán nào sau đây thuộc nhóm học có giám sát và được dùng để giải quyết bài toán dự đoán một giá trị liên tục (Regression)?",
    "choices": [
      "Naive Bayes.",
      "Logistic Regression.",
      "Linear Regression.",
      "K-means Clustering."
    ],
    "answer": "Linear Regression.",
    "explanation": "Linear Regression (Hồi quy tuyến tính) và Polynomial Regression (Hồi quy đa thức) là hai thuật toán tiêu biểu trong học có giám sát dùng để giải quyết bài toán dự đoán số lượng, giá cả (liên tục). Chú ý: Logistic Regression mặc dù có chữ Regression nhưng lại dùng cho phân loại (Classification).",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: logistic regression.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "logistic-regression",
      "linear-regression",
      "polynomial-regression"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "logistic regression",
      "linear regression",
      "polynomial regression"
    ]
  },
  {
    "id": "docx-q85",
    "module": "m5",
    "lessonId": "problem-solving",
    "topic": "AI problem solving",
    "subtopic": "fairness",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Khi xây dựng giải pháp AI áp dụng vào tuyển dụng nhân sự, yêu cầu mô hình không được ưu ái hay phân biệt đối xử dựa trên giới tính là việc đáp ứng tiêu chuẩn nào?",
    "choices": [
      "Privacy (Quyền riêng tư).",
      "Fairness (Tính công bằng).",
      "Explainability (Tính giải thích).",
      "Data leakage (Rò rỉ dữ liệu)."
    ],
    "answer": "Fairness (Tính công bằng).",
    "explanation": "Nguyên tắc Fairness yêu cầu kỹ sư phải thiết kế và đánh giá hệ thống sao cho hạn chế tối đa việc mô hình tạo ra các quyết định hoặc kết quả thiên lệch, bất công đối với bất kỳ một nhóm người nào.",
    "hints": [
      "Xác định khái niệm trọng tâm: AI problem solving.",
      "Đối chiếu các lựa chọn với kỹ năng: fairness.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "fairness"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "fairness"
    ]
  },
  {
    "id": "docx-q86",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "logistic regression",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong bài toán phân loại nhị phân sử dụng mô hình Logistic Regression, nếu chúng ta tăng ngưỡng phân loại (classification threshold) từ 0.5 lên 0.8, số lượng mẫu được dự đoán là lớp Positive sẽ biến đổi như thế nào?",
    "choices": [
      "Tăng lên.",
      "Giảm đi.",
      "Giữ nguyên không đổi.",
      "Luôn bằng 0."
    ],
    "answer": "Giảm đi.",
    "explanation": "Logistic Regression đưa ra xác suất dự đoán và so sánh với ngưỡng (threshold). Khi tăng ngưỡng phân loại lên cao hơn (từ 0.5 lên 0.8), mô hình đòi hỏi xác suất phải rất cao mới gán nhãn Positive, do đó số lượng mẫu được dự đoán là Positive sẽ giảm đi (dẫn đến Precision thường tăng và Recall giảm).",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: logistic regression.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "logistic-regression"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "logistic regression"
    ]
  },
  {
    "id": "docx-q87",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "pca",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khái niệm \"Explained Variance\" (Phương sai được giải thích) trong phương pháp PCA có ý nghĩa gì?",
    "choices": [
      "Đo lường tỷ lệ thông tin/độ biến động của dữ liệu gốc được giữ lại bởi mỗi thành phần chính (principal component).",
      "Đo lường số lượng missing value đã được điền bù thành công.",
      "Đo lường mức độ quá khớp (overfitting) của mô hình PCA.",
      "Đo lường khoảng cách Euclidean giữa các tâm cụm (centroid)."
    ],
    "answer": "Đo lường tỷ lệ thông tin/độ biến động của dữ liệu gốc được giữ lại bởi mỗi thành phần chính (principal component).",
    "explanation": "PCA thực hiện giảm chiều bằng cách tìm các thành phần chính. Phương sai được giải thích (explained variance) cho biết lượng thông tin (độ biến động) mà các thành phần chính này đại diện so với toàn bộ dữ liệu ban đầu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: pca.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "pca",
      "explained-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "pca",
      "explained variance"
    ]
  },
  {
    "id": "docx-q88",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong lớp tích chập (Convolution) của mạng CNN, tham số \"Stride\" quy định điều gì?",
    "choices": [
      "Số lượng giá trị 0 được thêm vào xung quanh viền ảnh.",
      "Bước trượt của kernel/filter khi quét qua ảnh đầu vào.",
      "Kích thước chiều sâu của tensor đầu ra.",
      "Số lượng nơ-ron ở lớp fully connected."
    ],
    "answer": "Bước trượt của kernel/filter khi quét qua ảnh đầu vào.",
    "explanation": "Stride (bước trượt) quy định số pixel mà kernel di chuyển mỗi bước khi thực hiện phép tích chập. Stride càng lớn thì kích thước feature map thu được càng nhỏ.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution",
      "kernel",
      "feature-map"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution",
      "kernel",
      "feature map"
    ]
  },
  {
    "id": "docx-q89",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "entropy",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Điểm khác biệt cơ bản giữa hai hàm mất mát Binary cross-entropy và Categorical cross-entropy là gì?",
    "choices": [
      "Binary cross-entropy dùng cho bài toán Hồi quy, Categorical cross-entropy dùng cho Phân loại.",
      "Binary cross-entropy dùng cho phân loại nhị phân (2 lớp), trong khi Categorical cross-entropy dùng cho phân loại nhiều lớp (multiclass).",
      "Binary cross-entropy không cần tính gradient, Categorical cross-entropy cần tính gradient.",
      "Binary cross-entropy chỉ dùng ở lớp hidden layer."
    ],
    "answer": "Binary cross-entropy dùng cho phân loại nhị phân (2 lớp), trong khi Categorical cross-entropy dùng cho phân loại nhiều lớp (multiclass).",
    "explanation": "Cả hai đều là hàm mất mát dành cho bài toán phân loại, trong đó Binary cross-entropy tối ưu cho phân loại 2 lớp và Categorical cross-entropy tiêu chuẩn cho bài toán phân loại nhiều lớp độc lập.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: entropy.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "entropy"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "entropy"
    ]
  },
  {
    "id": "docx-q90",
    "module": "m3",
    "lessonId": "leakage",
    "topic": "Data Leakage",
    "subtopic": "data leakage",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Tình huống nào sau đây được coi là biểu hiện của \"Data leakage\" trong bước chuẩn hóa dữ liệu (scaling)?",
    "choices": [
      "Sử dụng Min-Max normalization trên tập train.",
      "Tính toán giá trị Min và Max từ toàn bộ bộ dữ liệu (bao gồm cả Train, Validation và Test set) để thực hiện scaling.",
      "Áp dụng các tham số Min, Max đã học từ tập train để chuẩn hóa cho tập test.",
      "Không thực hiện scaling cho dữ liệu dạng chuỗi."
    ],
    "answer": "Tính toán giá trị Min và Max từ toàn bộ bộ dữ liệu (bao gồm cả Train, Validation và Test set) để thực hiện scaling.",
    "explanation": "Nguyên tắc cốt lõi là chỉ học các tham số tiền xử lý từ tập dữ liệu huấn luyện (training data). Nếu tính Min/Max trên toàn bộ dữ liệu bao gồm cả test set, thông tin từ tập test đã lọt vào mô hình, gây ra data leakage.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data Leakage.",
      "Đối chiếu các lựa chọn với kỹ năng: data leakage.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "data-leakage",
      "leakage"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "data leakage",
      "leakage"
    ]
  },
  {
    "id": "docx-q91",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "underfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi một mô hình học máy rơi vào trạng thái Underfitting, phương pháp nào sau đây có thể giúp cải thiện hiệu năng của mô hình?",
    "choices": [
      "Tăng hệ số phạt Regularization L1/L2 lên rất lớn.",
      "Giảm bớt số lượng nơ-ron trong các hidden layer.",
      "Tăng độ phức tạp của mô hình (ví dụ: bổ sung thêm đặc trưng, dùng mô hình phức tạp hơn hoặc tăng số lớp mạng).",
      "Loại bỏ toàn bộ tập dữ liệu validation."
    ],
    "answer": "Tăng độ phức tạp của mô hình (ví dụ: bổ sung thêm đặc trưng, dùng mô hình phức tạp hơn hoặc tăng số lớp mạng).",
    "explanation": "Underfitting xảy ra khi mô hình quá đơn giản (Bias cao). Do đó, giải pháp là gia tăng khả năng biểu diễn của mô hình bằng cách chọn kiến trúc phức tạp hơn hoặc tạo thêm các đặc trưng mới (interaction feature).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: underfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "underfitting"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "underfitting"
    ]
  },
  {
    "id": "docx-q92",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "one-hot",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Vì sao việc áp dụng Label Encoding trực tiếp cho thuộc tính 'Màu sắc' (Đỏ, Xanh, Vàng) trong bài toán phân loại lại có thể dẫn đến kết quả sai lệch?",
    "choices": [
      "Vì Label Encoding làm tăng số chiều của dữ liệu quá nhiều.",
      "Vì thuộc tính 'Màu sắc' là dạng định danh (nominal), việc gán số 1, 2, 3 vô tình tạo ra thứ tự giả giữa các màu sắc.",
      "Vì Label Encoding chỉ hoạt động trên dữ liệu số liên tục.",
      "Vì Label Encoding làm xuất hiện các giá trị missing value."
    ],
    "answer": "Vì thuộc tính 'Màu sắc' là dạng định danh (nominal), việc gán số 1, 2, 3 vô tình tạo ra thứ tự giả giữa các màu sắc.",
    "explanation": "Thuộc tính định danh (nominal) không có thứ tự tự nhiên. Nếu dùng Label Encoding (gán Đỏ=1, Xanh=2, Vàng=3), mô hình có thể hiểu lầm là Vàng > Xanh > Đỏ, tạo ra thứ tự giả gây sai lệch toán tử tính toán. Nên dùng One-hot Encoding cho trường hợp này.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: one-hot.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "one-hot",
      "label-encoding"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "one-hot",
      "label encoding"
    ]
  },
  {
    "id": "docx-q93",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "softmax",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Tổng các giá trị đầu ra của hàm kích hoạt Softmax tại lớp output layer trong bài toán phân loại multiclass luôn bằng bao nhiêu?",
    "choices": [
      "0.",
      "1.",
      "Bằng số lượng lớp của bài toán.",
      "Bằng giá trị hằng số bias b."
    ],
    "answer": "1.",
    "explanation": "Hàm Softmax biến đổi các giá trị dự đoán ở lớp đầu ra thành một phân phối xác suất, trong đó giá trị mỗi lớp nằm trong khoảng từ 0 đến 1 và tổng xác suất của tất cả các lớp luôn đúng bằng 1.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: softmax.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "softmax"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "softmax"
    ]
  },
  {
    "id": "docx-q94",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "k-means",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong thuật toán K-means, vai trò của khoảng cách Euclidean là gì?",
    "choices": [
      "Dùng để tính toán độ dốc gradient trong bước Backpropagation.",
      "Dùng làm tiêu chí đo lường mức độ tương đồng giữa mẫu dữ liệu và các centroid để thực hiện gán cụm.",
      "Dùng để xác định số lượng chiều cần giảm trong PCA.",
      "Dùng để cắt tỉa (pruning) các nhánh của Decision Tree."
    ],
    "answer": "Dùng làm tiêu chí đo lường mức độ tương đồng giữa mẫu dữ liệu và các centroid để thực hiện gán cụm.",
    "explanation": "K-means phụ thuộc vào khoảng cách Euclidean để đo khoảng cách không gian giữa điểm dữ liệu và từng centroid, từ đó gán điểm dữ liệu vào cụm có centroid gần nhất.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: k-means.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "k-means",
      "centroid"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "k-means",
      "centroid"
    ]
  },
  {
    "id": "docx-q95",
    "module": "m4",
    "lessonId": "regression-metrics",
    "topic": "Regression metrics",
    "subtopic": "mae",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong đánh giá mô hình Hồi quy, chỉ số MSE nghiêm khắc hơn MAE đối với các sai số lớn (outlier) là do nguyên nhân nào?",
    "choices": [
      "MSE sử dụng phép lấy giá trị tuyệt đối.",
      "MSE thực hiện phép bình phương sai số (residual), khiến các sai số lớn bị phóng đại lên rất nhiều.",
      "MSE không thể tính toán được khi có giá trị âm.",
      "MSE chỉ hoạt động trên dữ liệu categorical."
    ],
    "answer": "MSE thực hiện phép bình phương sai số (residual), khiến các sai số lớn bị phóng đại lên rất nhiều.",
    "explanation": "Do công thức của MSE chứa bình phương của prediction error (residual), nên nếu một mẫu có sai số là 10, đóng góp của nó vào MSE sẽ là 100, ảnh hưởng mạnh hơn hẳn so với MAE vốn chỉ lấy giá trị tuyệt đối (là 10).",
    "hints": [
      "Xác định khái niệm trọng tâm: Regression metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mae.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mae",
      "mse",
      "residual",
      "prediction-error"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mae",
      "mse",
      "residual",
      "prediction error"
    ]
  },
  {
    "id": "docx-q96",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "recall",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong chẩn đoán y tế (ví dụ: phát hiện bệnh hiểm nghèo), việc bỏ sót người có bệnh (False Negative) là cực kỳ nguy hiểm. Trong trường hợp này, chỉ số đánh giá nào nên được ưu tiên tối đa?",
    "choices": [
      "Precision.",
      "Recall.",
      "Accuracy.",
      "Range."
    ],
    "answer": "Recall.",
    "explanation": "Recall (Độ phủ) đo lường tỷ lệ các trường hợp thực tế là Positive mà mô hình bắt được (TP / (TP + FN)). Khi chi phí của lỗi False Negative (bỏ sót) rất cao, ta cần tối ưu chỉ số Recall để giảm FN xuống mức thấp nhất.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: recall.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "recall",
      "false-negative"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "recall",
      "false negative"
    ]
  },
  {
    "id": "docx-q97",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Chỉ số Precision (Độ chuẩn xác) trong ma trận nhầm lẫn phản ảnh điều gì?",
    "choices": [
      "Tỷ lệ các mẫu dự đoán Positive thực sự đúng là Positive (TP / (TP + FP)).",
      "Tỷ lệ các mẫu Negative thực tế được dự đoán đúng.",
      "Tỷ lệ tổng số mẫu được dự đoán đúng trên toàn bộ tập dữ liệu.",
      "Tỷ lệ chênh lệch giữa MAE và RMSE."
    ],
    "answer": "Tỷ lệ các mẫu dự đoán Positive thực sự đúng là Positive (TP / (TP + FP)).",
    "explanation": "Precision tập trung vào độ tin cậy của các dự đoán Positive, cho biết trong số những mẫu mà mô hình gán nhãn Positive, có bao nhiêu phần trăm là đúng thực tế (TP / (TP + FP)).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision"
    ]
  },
  {
    "id": "docx-q98",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "classification",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Một bài toán gắn thẻ hình ảnh (image tagging) trong đó một bức ảnh có thể vừa chứa nhãn \"Con mèo\", vừa chứa nhãn \"Trong nhà\" và \"Ban ngày\" thuộc loại bài toán nào?",
    "choices": [
      "Binary classification.",
      "Multiclass classification.",
      "Multilabel classification.",
      "Clustering."
    ],
    "answer": "Multilabel classification.",
    "explanation": "Multilabel classification là bài toán phân loại mà một mẫu dữ liệu (instance) có thể được gán đồng thời nhiều nhãn mục tiêu y khác nhau cùng một lúc.",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: classification.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "classification",
      "multilabel"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "classification",
      "multilabel"
    ]
  },
  {
    "id": "docx-q99",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Chiều sâu của cây (depth) trong Decision Tree đại diện cho yếu tố nào?",
    "choices": [
      "Số lượng đặc trưng đầu vào X.",
      "Độ dài của đường đi dài nhất từ nút gốc (root) đến một nút lá (leaf).",
      "Số lượng mẫu trong tập training set.",
      "Số lượng centroids trong K-means."
    ],
    "answer": "Độ dài của đường đi dài nhất từ nút gốc (root) đến một nút lá (leaf).",
    "explanation": "Depth (chiều sâu) của cây quyết định đo lường số cấp phân tách tính từ nút gốc đến nút lá xa nhất. Cây có depth càng lớn thì mô hình càng phức tạp và dễ bị overfitting.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting"
    ]
  },
  {
    "id": "docx-q100",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "naive bayes",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mô hình Naive Bayes, thuật ngữ \"Likelihood\" (Khả năng xảy ra) đại diện cho đại lượng nào?",
    "choices": [
      "Xác suất có điều kiện của tập đặc trưng X khi đã biết nhãn/lớp y.",
      "Xác suất xuất hiện của nhãn y trước khi có dữ liệu.",
      "Xác suất dự đoán y dự đoán sau khi đã tính xong toàn bộ công thức.",
      "Sai số MSE giữa dự đoán và thực tế."
    ],
    "answer": "Xác suất có điều kiện của tập đặc trưng X khi đã biết nhãn/lớp y.",
    "explanation": "Định lý Bayes tính toán posterior từ prior và likelihood. Trong đó, Likelihood thể hiện xác suất xuất hiện các đặc trưng quan sát được khi giả định thuộc tính nằm ở một lớp y cụ thể.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: naive bayes.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "naive-bayes",
      "prior",
      "likelihood",
      "posterior"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "naive bayes",
      "prior",
      "likelihood",
      "posterior"
    ]
  },
  {
    "id": "docx-q101",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "validation set",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Sự khác biệt cơ bản giữa \"Tham số\" (Parameter) và \"Siêu tham số\" (Hyperparameter) trong học máy là gì?",
    "choices": [
      "Tham số do con người đặt trước, siêu tham số do mô hình tự học.",
      "Tham số được mô hình học và cập nhật tự động từ dữ liệu huấn luyện (như weight, bias), trong khi siêu tham số do con người cài đặt trước khi huấn luyện (như learning rate, K trong K-means).",
      "Tham số dùng cho học không giám sát, siêu tham số dùng cho học có giám sát.",
      "Không có sự khác biệt giữa hai khái niệm này."
    ],
    "answer": "Tham số được mô hình học và cập nhật tự động từ dữ liệu huấn luyện (như weight, bias), trong khi siêu tham số do con người cài đặt trước khi huấn luyện (như learning rate, K trong K-means).",
    "explanation": "Tham số (parameters) là các giá trị nằm bên trong mô hình được tối ưu qua quá trình training. Siêu tham số (hyperparameters) là các cấu hình điều khiển quá trình học do người dùng lựa chọn và tinh chỉnh trên validation set.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: validation set.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "validation-set"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "validation set"
    ]
  },
  {
    "id": "docx-q102",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "standardization",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Phương pháp Standardization (Chuẩn hóa Z-score) biến đổi một đặc trưng dữ liệu số về phân phối có tính chất nào?",
    "choices": [
      "Miền giá trị cố định từ 0 đến 1.",
      "Giá trị trung bình (mean) bằng 0 và độ lệch chuẩn (standard deviation) bằng 1.",
      "Loại bỏ hoàn toàn tất cả các mẫu dữ liệu bị thiếu.",
      "Biến đổi dữ liệu liên tục thành dữ liệu rời rạc."
    ],
    "answer": "Giá trị trung bình (mean) bằng 0 và độ lệch chuẩn (standard deviation) bằng 1.",
    "explanation": "Standardization biến đổi đặc trưng bằng cách trừ đi mean và chia cho standard deviation, đưa dữ liệu về dạng có mean = 0 và std = 1, giúp thuật toán học ổn định hơn.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: standardization.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "standardization",
      "z-score"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "standardization",
      "z-score"
    ]
  },
  {
    "id": "docx-q103",
    "module": "m3",
    "lessonId": "feature-split",
    "topic": "Feature engineering and splitting",
    "subtopic": "interaction feature",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật tạo đặc trưng tương tác (interaction feature) bằng cách nhân hai đặc trưng \"Chiều rộng\" và \"Chiều dài\" để tạo thành đặc trưng \"Diện tích\" mang lại lợi ích gì?",
    "choices": [
      "Giúp giảm nguy cơ data leakage.",
      "Giúp mô hình học được mối quan hệ kết hợp phi tuyến giữa các đặc trưng mà các đặc trưng đơn lẻ chưa thể hiện được.",
      "Tự động mã hóa biến categorical thành biến numerical.",
      "Thay thế cho bước chia dữ liệu K-fold."
    ],
    "answer": "Giúp mô hình học được mối quan hệ kết hợp phi tuyến giữa các đặc trưng mà các đặc trưng đơn lẻ chưa thể hiện được.",
    "explanation": "Tạo đặc trưng mới và interaction feature giúp kết hợp các thông tin đơn lẻ lại với nhau, cung cấp thêm thông tin đầu vào hữu ích cho mô hình học các quy luật phức tạp.",
    "hints": [
      "Xác định khái niệm trọng tâm: Feature engineering and splitting.",
      "Đối chiếu các lựa chọn với kỹ năng: interaction feature.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "interaction-feature"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "interaction feature"
    ]
  },
  {
    "id": "docx-q104",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "regularization",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Đặc điểm nổi bật của Regularization L1 (Lasso) so với L2 (Ridge) trong quá trình phạt trọng số là gì?",
    "choices": [
      "L1 không bao giờ ép trọng số về đúng bằng 0.",
      "L1 có khả năng ép các trọng số của các đặc trưng không quan trọng về đúng bằng 0, từ đó đóng vai trò như một kỹ thuật Feature Selection tự động.",
      "L1 làm tăng kích thước của tập test.",
      "L1 chỉ áp dụng được cho bài toán phân cụm K-means."
    ],
    "answer": "L1 có khả năng ép các trọng số của các đặc trưng không quan trọng về đúng bằng 0, từ đó đóng vai trò như một kỹ thuật Feature Selection tự động.",
    "explanation": "Regularization L1 cộng giá trị tuyệt đối của trọng số vào hàm loss, có xu hướng triệt tiêu trọng số của các đặc trưng dư thừa/nhiễu về 0, giúp triệt tiêu biến và làm mỏng mô hình. Trong khi L2 chỉ ép trọng số về gần 0.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: regularization.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "regularization",
      "l1",
      "l2"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "regularization",
      "l1",
      "l2"
    ]
  },
  {
    "id": "docx-q105",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Một mô hình học máy có hiện tượng \"Variance cao\" (High Variance) thường gắn liền với trạng thái nào sau đây?",
    "choices": [
      "Underfitting.",
      "Overfitting (Quá khớp, nhạy cảm cao với nhiễu trong dữ liệu huấn luyện).",
      "Generalization tốt.",
      "Thiếu dữ liệu đầu vào X."
    ],
    "answer": "Overfitting (Quá khớp, nhạy cảm cao với nhiễu trong dữ liệu huấn luyện).",
    "explanation": "Trong sự đánh đổi bias-variance trade-off, Variance cao nghĩa là mô hình quá nhạy cảm với những biến động nhỏ hoặc nhiễu trong tập huấn luyện, dẫn đến dự đoán kém trên tập validation/test (chính là Overfitting).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting",
      "bias-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting",
      "bias-variance"
    ]
  },
  {
    "id": "docx-q106",
    "module": "m5",
    "lessonId": "problem-solving",
    "topic": "AI problem solving",
    "subtopic": "human oversight",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khái niệm \"Human oversight\" trong các nguyên tắc ứng dụng AI thực tế khẳng định điều gì?",
    "choices": [
      "Hệ thống AI hoạt động hoàn toàn tự chủ mà không cần sự kiểm soát của con người.",
      "Con người phải có khả năng giám sát, can thiệp và chịu trách nhiệm cho các quyết định của hệ thống AI.",
      "Con người chỉ đóng vai trò nhập dữ liệu đầu vào X.",
      "Con người phải tự tay tính toán hàm mất mát Loss function."
    ],
    "answer": "Con người phải có khả năng giám sát, can thiệp và chịu trách nhiệm cho các quyết định của hệ thống AI.",
    "explanation": "Human oversight (giám sát của con người) đảm bảo rằng AI chỉ là công cụ hỗ trợ, con người giữ quyền quyết định cuối cùng, có thể can thiệp xử lý khi hệ thống gặp sự cố và chịu trách nhiệm pháp lý/đạo đức.",
    "hints": [
      "Xác định khái niệm trọng tâm: AI problem solving.",
      "Đối chiếu các lựa chọn với kỹ năng: human oversight.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "human-oversight"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "human oversight"
    ]
  },
  {
    "id": "docx-q107",
    "module": "m5",
    "lessonId": "problem-solving",
    "topic": "AI problem solving",
    "subtopic": "explainability",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Tại sao yếu tố \"Explainability\" (Khả năng giải thích) lại đóng vai trò quan trọng khi triển khai mô hình AI trong xét duyệt tín dụng ngân hàng?",
    "choices": [
      "Vì giúp ngân hàng chạy mô hình với tốc độ nhanh hơn.",
      "Vì ngân hàng cần giải thích được lý do cụ thể và các yếu tố chính dẫn đến quyết định từ chối hoặc phê duyệt hồ sơ vay của khách hàng.",
      "Vì giúp chuyển đổi bài toán phân loại thành bài toán phân cụm.",
      "Vì loại bỏ hoàn toàn nguy cơ data leakage."
    ],
    "answer": "Vì ngân hàng cần giải thích được lý do cụ thể và các yếu tố chính dẫn đến quyết định từ chối hoặc phê duyệt hồ sơ vay của khách hàng.",
    "explanation": "Explainability đảm bảo minh bạch, giúp tổ chức giải thích được căn cứ dự đoán của AI (ví dụ: yếu tố nào làm giảm điểm tín dụng), đáp ứng quy định pháp lý và tạo sự tin tưởng cho người dùng.",
    "hints": [
      "Xác định khái niệm trọng tâm: AI problem solving.",
      "Đối chiếu các lựa chọn với kỹ năng: explainability.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "explainability"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "explainability"
    ]
  },
  {
    "id": "docx-q108",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khả năng tự học đặc trưng theo tầng của mạng CNN thể hiện như thế nào từ các lớp đầu đến các lớp sâu?",
    "choices": [
      "Học các bộ phận phức tạp trước, sau đó mới học góc và cạnh.",
      "Các lớp đầu học các đặc trưng đơn giản (cạnh, góc), các lớp sau kết hợp thành họa tiết, hình dạng và bộ phận của đối tượng.",
      "Tất cả các lớp đều học cùng một đặc trưng giống nhau do chia sẻ trọng số.",
      "Chỉ học duy nhất đặc trưng màu sắc của ảnh."
    ],
    "answer": "Các lớp đầu học các đặc trưng đơn giản (cạnh, góc), các lớp sau kết hợp thành họa tiết, hình dạng và bộ phận của đối tượng.",
    "explanation": "CNN học đặc trưng theo cấp bậc (tầng): các lớp convolution đầu tiên trích xuất các nét cơ bản như cạnh, góc; các lớp tiếp theo ghép nối chúng thành họa tiết, hình dạng và các bộ phận đối tượng hoàn chỉnh.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution"
    ]
  },
  {
    "id": "docx-q109",
    "module": "m1",
    "lessonId": "foundations",
    "topic": "ML foundations",
    "subtopic": "training",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong vòng đời của một mô hình học máy, giai đoạn \"Suy luận\" (Inference) được định nghĩa là gì?",
    "choices": [
      "Quá trình mô hình tính toán gradient để cập nhật weight và bias.",
      "Quá trình sử dụng mô hình đã huấn luyện để đưa ra dự đoán y dự đoán trên dữ liệu mới.",
      "Quá trình làm sạch và điền bù dữ liệu thiếu.",
      "Quá trình chia dữ liệu thành K phần trong K-fold."
    ],
    "answer": "Quá trình sử dụng mô hình đã huấn luyện để đưa ra dự đoán y dự đoán trên dữ liệu mới.",
    "explanation": "Sau quá trình huấn luyện (training) để tìm tham số, mô hình chuyển sang giai đoạn suy luận (inference) - tức là nhận dữ liệu đầu vào X thực tế và đưa ra dự đoán y dự đoán.",
    "hints": [
      "Xác định khái niệm trọng tâm: ML foundations.",
      "Đối chiếu các lựa chọn với kỹ năng: training.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "training",
      "inference"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "training",
      "inference"
    ]
  },
  {
    "id": "docx-q110",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "variance",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hai đại lượng thống kê mô tả \"Variance\" (Phương sai) và \"Standard Deviation\" (Độ lệch chuẩn) cùng dùng để đo lường yếu tố nào?",
    "choices": [
      "Xu hướng trung tâm của dữ liệu.",
      "Mức độ phân tán/biến động của các giá trị dữ liệu xung quanh giá trị trung bình.",
      "Tỷ lệ missing value trong tập dữ liệu.",
      "Tỷ lệ số mẫu giữa lớp Positive và Negative."
    ],
    "answer": "Mức độ phân tán/biến động của các giá trị dữ liệu xung quanh giá trị trung bình.",
    "explanation": "Phương sai và độ lệch chuẩn (là căn bậc hai của phương sai) là các thước đo tiêu chuẩn trong thống kê mô tả nhằm đánh giá mức độ trải rộng và phân tán của dữ liệu số.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: variance.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "variance",
      "standard-deviation"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "variance",
      "standard deviation"
    ]
  },
  {
    "id": "docx-q111",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "k-means",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong quy trình lặp của thuật toán K-means, \"Bước cập nhật\" (Update step) thực hiện công việc gì?",
    "choices": [
      "Gán các mẫu dữ liệu vào cụm gần nhất.",
      "Tính toán lại vị trí tâm cụm (centroid) mới bằng giá trị trung bình tọa độ của tất cả các điểm thuộc cụm đó.",
      "Tăng giá trị K lên 1 đơn vị.",
      "Loại bỏ các điểm dữ liệu bị xem là outlier."
    ],
    "answer": "Tính toán lại vị trí tâm cụm (centroid) mới bằng giá trị trung bình tọa độ của tất cả các điểm thuộc cụm đó.",
    "explanation": "K-means gồm 2 bước lặp chính: Bước gán cụm (assign) dựa trên centroid hiện tại, và Bước cập nhật (update) tính lại tọa độ centroid mới bằng trung bình cộng các điểm trong cụm.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: k-means.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "k-means",
      "centroid"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "k-means",
      "centroid"
    ]
  },
  {
    "id": "docx-q112",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "hierarchical",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Biểu đồ dạng cây Dendrogram trong thuật toán Phân cụm tích tụ (Hierarchical Clustering) giúp ích gì cho người phân tích?",
    "choices": [
      "Tính toán ngay lập tức các trọng số weight và bias.",
      "Trực quan hóa cấu trúc gom cụm và giúp quyết định số lượng cụm bằng cách cắt cây ở một độ cao (khoảng cách linkage) phù hợp.",
      "Dự đoán chính xác giá trị continuous cho bài toán Hồi quy.",
      "Kiểm tra xem dữ liệu có bị data leakage hay không."
    ],
    "answer": "Trực quan hóa cấu trúc gom cụm và giúp quyết định số lượng cụm bằng cách cắt cây ở một độ cao (khoảng cách linkage) phù hợp.",
    "explanation": "Dendrogram thể hiện toàn bộ quá trình gom cụm từ dưới lên (bottom-up). Bằng cách quan sát chiều cao khoảng cách linkage trên dendrogram, ta có thể đưa ra vạch cắt phù hợp để chọn số cụm tối ưu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: hierarchical.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "hierarchical",
      "dendrogram",
      "linkage",
      "clustering"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "hierarchical",
      "dendrogram",
      "linkage",
      "clustering"
    ]
  },
  {
    "id": "docx-q113",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Mối quan hệ giữa Bias và Variance trong bài toán lựa chọn mô hình (Bias-Variance trade-off) diễn ra như thế nào khi độ phức tạp của mô hình tăng lên?",
    "choices": [
      "Cả Bias và Variance đều tăng.",
      "Bias giảm xuống nhưng Variance tăng lên.",
      "Bias tăng lên nhưng Variance giảm xuống.",
      "Cả Bias và Variance đều giảm về 0."
    ],
    "answer": "Bias giảm xuống nhưng Variance tăng lên.",
    "explanation": "Khi làm mô hình phức tạp hơn (nhiều tham số hơn), mô hình khớp tốt hơn với tập train dẫn đến Bias giảm, nhưng đồng thời mô hình sẽ nhạy cảm hơn với nhiễu khiến Variance tăng lên (nguy cơ overfitting).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting",
      "bias-variance",
      "bias-v-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting",
      "bias-variance",
      "bias và variance"
    ]
  },
  {
    "id": "docx-q114",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "confusion",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Trong Ma trận nhầm lẫn (Confusion Matrix), thành phần True Negative (TN) đại diện cho nhóm mẫu nào?",
    "choices": [
      "Mẫu thực tế là Positive và mô hình dự đoán là Positive.",
      "Mẫu thực tế là Negative và mô hình dự đoán đúng là Negative.",
      "Mẫu thực tế là Positive nhưng mô hình dự đoán nhầm là Negative.",
      "Mẫu thực tế là Negative nhưng mô hình dự đoán nhầm là Positive."
    ],
    "answer": "Mẫu thực tế là Negative và mô hình dự đoán đúng là Negative.",
    "explanation": "True Negative (Âm tính thực) chỉ các trường hợp thực tế mang nhãn Âm (Negative) và mô hình đã đưa ra dự đoán chính xác là Âm (Negative).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: confusion.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "confusion"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "confusion"
    ]
  },
  {
    "id": "docx-q115",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "false positive",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Tỷ lệ Dương tính giả (False Positive Rate - FPR) được tính dựa trên số lượng mẫu thực tế thuộc lớp nào?",
    "choices": [
      "Lớp Positive thực tế.",
      "Lớp Negative thực tế (FPR = FP / (FP + TN)).",
      "Toàn bộ tập dữ liệu.",
      "Chỉ tính trên các mẫu bị missing value."
    ],
    "answer": "Lớp Negative thực tế (FPR = FP / (FP + TN)).",
    "explanation": "FPR đại diện cho tỷ lệ các trường hợp thực tế là Negative nhưng lại bị mô hình gắn nhãn nhầm thành Positive (FP / (FP + TN)). Chỉ số này cùng với TPR tạo nên đường cong ROC.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: false positive.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "false-positive",
      "fpr",
      "roc"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "false positive",
      "fpr",
      "roc"
    ]
  },
  {
    "id": "docx-q116",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Sự khác biệt về vai trò giữa \"Hàm mất mát\" (Loss function) và \"Chỉ số đánh giá\" (Metric) là gì?",
    "choices": [
      "Loss function dùng cho người dùng xem, Metric dùng cho máy tính.",
      "Loss function là hàm số toán học mà thuật toán tối ưu (như Gradient Descent) trực tiếp giảm thiểu để cập nhật trọng số; Metric là chỉ số con người dùng để đánh giá hiệu năng mô hình (như Accuracy, F1).",
      "Loss function chỉ áp dụng trên Test set, Metric áp dụng trên Training set.",
      "Không có sự khác biệt."
    ],
    "answer": "Loss function là hàm số toán học mà thuật toán tối ưu (như Gradient Descent) trực tiếp giảm thiểu để cập nhật trọng số; Metric là chỉ số con người dùng để đánh giá hiệu năng mô hình (như Accuracy, F1).",
    "explanation": "Loss function (như MSE, Cross-entropy) cần có đạo hàm để toán tử gradient descent dùng cập nhật trọng số trong quá trình train. Metric (như Accuracy, Precision, AUC) dùng để theo dõi, so sánh và đánh giá chất lượng mô hình dưới góc nhìn thực tế.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "accuracy",
      "auc"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "accuracy",
      "auc"
    ]
  },
  {
    "id": "docx-q117",
    "module": "m3",
    "lessonId": "bias-shift",
    "topic": "Sampling and distribution shift",
    "subtopic": "data drift",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hiện tượng \"Data drift\" (Sự dịch chuyển dữ liệu) trong triển khai AI thực tế làm suy giảm khả năng tổng quát hóa của mô hình vì lý do nào?",
    "choices": [
      "Do dung lượng ổ cứng lưu trữ mô hình bị quá tải.",
      "Do phân phối của dữ liệu thực tế phát sinh sau này thay đổi so với phân phối của dữ liệu huấn luyện ban đầu.",
      "Do mô hình tự động chuyển từ Logistic Regression sang Linear Regression.",
      "Do quá trình Backpropagation bị dừng lại."
    ],
    "answer": "Do phân phối của dữ liệu thực tế phát sinh sau này thay đổi so với phân phối của dữ liệu huấn luyện ban đầu.",
    "explanation": "Mô hình học máy giả định dữ liệu tương lai có phân phối giống dữ liệu quá khứ. Khi thực tế thay đổi (Data drift - ví dụ xu hướng tiêu dùng thay đổi sau dịch bệnh), phân phối dữ liệu mới khác biệt làm mô hình dự đoán kém đi.",
    "hints": [
      "Xác định khái niệm trọng tâm: Sampling and distribution shift.",
      "Đối chiếu các lựa chọn với kỹ năng: data drift.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "data-drift"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "data drift"
    ]
  },
  {
    "id": "docx-q118",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "mean",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Đối với thuộc tính phân loại (categorical) bị thiếu giá trị, phương pháp điền bù (imputation) thích hợp nhất là gì?",
    "choices": [
      "Mean imputation.",
      "Median imputation.",
      "Mode imputation (điền bằng giá trị xuất hiện thường xuyên nhất).",
      "Min-Max normalization."
    ],
    "answer": "Mode imputation (điền bằng giá trị xuất hiện thường xuyên nhất).",
    "explanation": "Dữ liệu categorical (như màu sắc, tên thành phố) không thể tính được trung bình (mean) hay trung vị (median). Do đó, giá trị yếu vị (mode - giá trị phổ biến nhất) là lựa chọn chuẩn xác để điền bù.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: mean.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mean",
      "median",
      "mode",
      "imputation"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mean",
      "median",
      "mode",
      "imputation"
    ]
  },
  {
    "id": "docx-q119",
    "module": "m2",
    "lessonId": "neuron-network",
    "topic": "Neural network",
    "subtopic": "nơ-ron",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Lớp kết nối đầy đủ (Fully connected layer) trong kiến trúc mạng nơ-ron có đặc điểm cấu tạo như thế nào?",
    "choices": [
      "Mỗi nơ-ron trong lớp này chỉ kết nối với đúng 1 nơ-ron ở lớp trước.",
      "Mỗi nơ-ron trong lớp này kết nối tới tất cả các nơ-ron ở lớp ngay trước đó.",
      "Không có ma trận trọng số weight và bias.",
      "Chỉ thực hiện phép toán pooling."
    ],
    "answer": "Mỗi nơ-ron trong lớp này kết nối tới tất cả các nơ-ron ở lớp ngay trước đó.",
    "explanation": "Fully connected layer (lớp FC) có đặc trưng là mọi nơ-ron trong lớp đều liên kết với toàn bộ các nơ-ron của lớp liền trước, giúp tổng hợp các đặc trưng đã trích xuất trước khi ra quyết định dự đoán.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network.",
      "Đối chiếu các lựa chọn với kỹ năng: nơ-ron.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "n-ron",
      "fully-connected"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "nơ-ron",
      "fully connected"
    ]
  },
  {
    "id": "docx-q120",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "linear regression",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi mối quan hệ giữa biến đầu vào X và biến mục tiêu y có dạng đường cong phức tạp, thuật toán Hồi quy nào mở rộng từ Linear Regression là lựa chọn phù hợp?",
    "choices": [
      "Binary Logistic Regression.",
      "Polynomial Regression (Hồi quy đa thức).",
      "K-means.",
      "Naive Bayes."
    ],
    "answer": "Polynomial Regression (Hồi quy đa thức).",
    "explanation": "Polynomial Regression bổ sung các số mũ cao hơn của đặc trưng (như X^2, X^3), cho phép mô hình khớp với các đường cong phi tuyến phức tạp thay vì chỉ là một đường thẳng như Linear Regression.",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: linear regression.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "linear-regression",
      "polynomial-regression"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "linear regression",
      "polynomial regression"
    ]
  },
  {
    "id": "docx-q122",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "validation set",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong quy trình tinh chỉnh siêu tham số (hyperparameter tuning), bộ dữ liệu nào được sử dụng để so sánh hiệu năng và chọn ra bộ siêu tham số tốt nhất?",
    "choices": [
      "Training set.",
      "Validation set.",
      "Test set.",
      "Toàn bộ bộ dữ liệu chưa chia."
    ],
    "answer": "Validation set.",
    "explanation": "Quá trình huấn luyện cập nhật tham số trên Training set, còn quá trình chọn mô hình và tinh chỉnh siêu tham số được đo đạc trên Validation set. Test set hoàn toàn được giữ nguyên cho đánh giá độc lập cuối cùng.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: validation set.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "validation-set",
      "hyperparameter-tuning",
      "test-set"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "validation set",
      "hyperparameter tuning",
      "test set"
    ]
  },
  {
    "id": "docx-q123",
    "module": "m3",
    "lessonId": "bias-shift",
    "topic": "Sampling and distribution shift",
    "subtopic": "representative",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Nếu bộ dữ liệu huấn luyện chứa thông tin \"không đại diện\" (non-representative data) cho tổng thể, hệ thống AI sẽ gặp phải nguy cơ nào?",
    "choices": [
      "Tốc độ suy luận (inference) bị chậm lại.",
      "Dự đoán sai lệch hoặc đưa ra kết quả không chính xác khi gặp dữ liệu thực tế thuộc nhóm chưa từng được học.",
      "Ma trận trọng số tự động bị xóa.",
      "Tự động gây ra hiện tượng overfitting ở ngay epoch đầu tiên."
    ],
    "answer": "Dự đoán sai lệch hoặc đưa ra kết quả không chính xác khi gặp dữ liệu thực tế thuộc nhóm chưa từng được học.",
    "explanation": "Chất lượng dữ liệu quyết định chất lượng AI. Nếu dữ liệu huấn luyện bị thiếu hụt hoặc không đại diện cho thực tế (ví dụ: chỉ thu thập dữ liệu của người trẻ để huấn luyện mô hình chẩn đoán y tế cho mọi lứa tuổi), mô hình sẽ dự đoán kém trên các nhóm còn lại.",
    "hints": [
      "Xác định khái niệm trọng tâm: Sampling and distribution shift.",
      "Đối chiếu các lựa chọn với kỹ năng: representative.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "representative"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "representative"
    ]
  },
  {
    "id": "docx-q124",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "gradient descent",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Quá trình Lan truyền ngược (Backpropagation) kết hợp với thuật toán Tối ưu Gradient Descent thực hiện nhiệm vụ gì trong mạng nơ-ron?",
    "choices": [
      "Chuyển đổi dữ liệu từ dạng tensor sang dạng vector 1 chiều.",
      "Tính toán đạo hàm sai số từ lớp đầu ra ngược về các lớp trước và cập nhật lại ma trận trọng số (weights) và độ lệch (bias) để giảm hàm mất mát.",
      "Điền giá trị trung bình vào các mẫu bị khuyết.",
      "Giảm số chiều dữ liệu bằng cách trích xuất thành phần chính."
    ],
    "answer": "Tính toán đạo hàm sai số từ lớp đầu ra ngược về các lớp trước và cập nhật lại ma trận trọng số (weights) và độ lệch (bias) để giảm hàm mất mát.",
    "explanation": "Backpropagation tính toán gradient của hàm loss đối với từng trọng số nhờ quy tắc chuỗi (chain rule), sau đó Gradient Descent dùng các gradient này để cập nhật trọng số nhằm giảm thiểu sai số của mô hình.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: gradient descent.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "gradient-descent",
      "backpropagation",
      "chain-rule"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "gradient descent",
      "backpropagation",
      "chain rule"
    ]
  },
  {
    "id": "docx-q125",
    "module": "m3",
    "lessonId": "leakage",
    "topic": "Data Leakage",
    "subtopic": "rò rỉ",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khía cạnh \"Privacy\" (Quyền riêng tư) trong phát triển mô hình AI yêu cầu phải thực hiện biện pháp nào?",
    "choices": [
      "Cung cấp mã nguồn mở cho toàn bộ cộng đồng.",
      "Bảo vệ dữ liệu cá nhân và thông tin nhạy cảm của người dùng trong suốt quá trình thu thập, lưu trữ, huấn luyện và triển khai mô hình.",
      "Loại bỏ hoàn toàn sự can thiệp của con người (Human oversight).",
      "Bắt buộc sử dụng thuật toán K-means."
    ],
    "answer": "Bảo vệ dữ liệu cá nhân và thông tin nhạy cảm của người dùng trong suốt quá trình thu thập, lưu trữ, huấn luyện và triển khai mô hình.",
    "explanation": "Nguyên tắc Privacy đòi hỏi việc thu thập và sử dụng dữ liệu phải tuân thủ nghiêm ngặt bảo mật thông tin cá nhân, mã hóa dữ liệu nhạy cảm để tránh bị rò rỉ hay khai thác trái phép trong mọi giai đoạn của dự án AI.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data Leakage.",
      "Đối chiếu các lựa chọn với kỹ năng: rò rỉ.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "r-r"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "rò rỉ"
    ]
  },
  {
    "id": "docx-q126",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "batch size",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong quá trình huấn luyện mạng nơ-ron, siêu tham số \"Batch size\" (Kích thước lô) có ý nghĩa gì?",
    "choices": [
      "Tổng số lần mô hình nhìn thấy toàn bộ tập dữ liệu huấn luyện.",
      "Số lượng mẫu dữ liệu được đưa vào mô hình để tính toán sai số và cập nhật trọng số trong một bước lặp (iteration).",
      "Số lượng nơ-ron ẩn trong một lớp.",
      "Kích thước của bộ lọc (kernel) trong mạng CNN."
    ],
    "answer": "Số lượng mẫu dữ liệu được đưa vào mô hình để tính toán sai số và cập nhật trọng số trong một bước lặp (iteration).",
    "explanation": "Thay vì cập nhật trọng số sau mỗi mẫu (stochastic) hoặc sau khi xem toàn bộ dữ liệu (batch), ta chia dữ liệu thành các lô nhỏ (mini-batch). Batch size quyết định số lượng mẫu trong mỗi lô này để cân bằng giữa tốc độ và độ ổn định khi huấn luyện.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: batch size.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "batch-size"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "batch size"
    ]
  },
  {
    "id": "docx-q127",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "cross validation",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật K-Fold Cross Validation (Xác thực chéo K-lần) mang lại ưu điểm lớn nhất nào so với việc chỉ chia Train/Test một lần duy nhất?",
    "choices": [
      "Làm cho mô hình chạy nhanh hơn K lần.",
      "Giảm thiểu rủi ro đánh giá sai hiệu năng do cách phân chia dữ liệu vô tình mang tính thiên lệch, tận dụng tối đa dữ liệu để vừa huấn luyện vừa đánh giá.",
      "Tự động điền bù các giá trị bị khuyết trong dữ liệu.",
      "Tránh được việc phải tính toán hàm mất mát Loss function."
    ],
    "answer": "Giảm thiểu rủi ro đánh giá sai hiệu năng do cách phân chia dữ liệu vô tình mang tính thiên lệch, tận dụng tối đa dữ liệu để vừa huấn luyện vừa đánh giá.",
    "explanation": "K-Fold chia dữ liệu thành K phần bằng nhau, huấn luyện và đánh giá K lần luân phiên. Điểm đánh giá cuối cùng là trung bình của K lần, giúp ta có cái nhìn khách quan và chính xác nhất về khả năng tổng quát hóa của mô hình.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: cross validation.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cross-validation",
      "k-fold"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cross validation",
      "k-fold"
    ]
  },
  {
    "id": "docx-q128",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mạng nơ-ron sâu (Deep Learning), kỹ thuật Dropout hoạt động như thế nào để giảm Overfitting?",
    "choices": [
      "Xóa bỏ vĩnh viễn các nơ-ron có trọng số âm.",
      "Tắt ngẫu nhiên một tỷ lệ các nơ-ron (kèm theo các kết nối của chúng) trong mỗi bước huấn luyện, buộc mạng phải học các đặc trưng phân tán và mạnh mẽ hơn.",
      "Tự động giảm learning rate khi hàm loss ngừng giảm.",
      "Thêm nhiễu ngẫu nhiên vào dữ liệu đầu vào."
    ],
    "answer": "Tắt ngẫu nhiên một tỷ lệ các nơ-ron (kèm theo các kết nối của chúng) trong mỗi bước huấn luyện, buộc mạng phải học các đặc trưng phân tán và mạnh mẽ hơn.",
    "explanation": "Dropout ngăn chặn hiện tượng các nơ-ron \"dựa dẫm\" quá nhiều vào nhau để đưa ra quyết định. Bằng cách tắt ngẫu nhiên, mạng nơ-ron buộc phải học cách đưa ra dự đoán chính xác dù thiếu hụt thông tin, từ đó giảm overfitting.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting"
    ]
  },
  {
    "id": "docx-q129",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Chỉ số F1-Score là sự kết hợp hài hòa (trung bình điều hòa) giữa hai chỉ số đánh giá nào?",
    "choices": [
      "Accuracy và Precision.",
      "Precision và Recall.",
      "TPR và FPR.",
      "MAE và MSE."
    ],
    "answer": "Precision và Recall.",
    "explanation": "F1-Score = 2 * (Precision * Recall) / (Precision + Recall). Nó đặc biệt hữu ích khi tập dữ liệu bị mất cân bằng (imbalanced) và bạn muốn tìm điểm cân bằng giữa việc dự đoán đúng mẫu Positive và không bỏ sót mẫu Positive.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "recall",
      "f1",
      "m-t-c-n-b-ng"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "recall",
      "f1",
      "mất cân bằng"
    ]
  },
  {
    "id": "docx-q130",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "pca",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong các thuật toán giảm chiều dữ liệu (Dimensionality Reduction), PCA (Principal Component Analysis) tìm kiếm các thành phần chính dựa trên tiêu chí nào?",
    "choices": [
      "Tối đa hóa khoảng cách giữa các lớp (nhãn y).",
      "Tối đa hóa phương sai (variance) của dữ liệu khi chiếu lên các trục tọa độ mới.",
      "Giảm thiểu số lượng các tâm cụm (centroid).",
      "Loại bỏ các giá trị ngoại lai (outliers)."
    ],
    "answer": "Tối đa hóa phương sai (variance) của dữ liệu khi chiếu lên các trục tọa độ mới.",
    "explanation": "PCA là thuật toán học không giám sát. Nó biến đổi các đặc trưng có độ tương quan cao thành một bộ các đặc trưng mới độc lập tuyến tính (thành phần chính), sao cho phương sai của dữ liệu trên các trục mới này là lớn nhất (giữ được nhiều thông tin nhất).",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: pca.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "pca",
      "principal-component"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "pca",
      "principal component"
    ]
  },
  {
    "id": "docx-q131",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "missing value",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong tiền xử lý dữ liệu, khi nào việc xóa bỏ hoàn toàn các hàng (rows) chứa giá trị khuyết (missing values) được xem là giải pháp có thể chấp nhận được?",
    "choices": [
      "Khi số lượng giá trị khuyết chiếm tỷ lệ rất lớn (ví dụ: > 80%).",
      "Khi tỷ lệ các hàng bị khuyết là rất nhỏ (ví dụ: < 1-2%) và việc xóa không làm thay đổi phân phối tổng thể của bộ dữ liệu.",
      "Khi đặc trưng bị khuyết là biến mục tiêu y.",
      "Không bao giờ được phép xóa hàng, phải luôn điền bù."
    ],
    "answer": "Khi tỷ lệ các hàng bị khuyết là rất nhỏ (ví dụ: < 1-2%) và việc xóa không làm thay đổi phân phối tổng thể của bộ dữ liệu.",
    "explanation": "Nếu lượng dữ liệu bị thiếu quá ít, việc xóa bỏ các dòng này sẽ nhanh gọn và không gây ảnh hưởng đáng kể đến mô hình. Tuy nhiên, nếu xóa quá nhiều, ta sẽ làm mất đi lượng lớn thông tin quý giá.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: missing value.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "missing-value"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "missing value"
    ]
  },
  {
    "id": "docx-q132",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "roc",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Diện tích dưới đường cong ROC (AUC - Area Under the Curve) có giá trị dao động trong khoảng nào, và giá trị nào thể hiện một mô hình hoàn hảo?",
    "choices": [
      "Từ 0 đến 100, hoàn hảo là 100.",
      "Từ 0 đến 1, hoàn hảo là 1.",
      "Từ -1 đến 1, hoàn hảo là 1.",
      "Từ 0 đến vô cực, càng lớn càng tốt."
    ],
    "answer": "Từ 0 đến 1, hoàn hảo là 1.",
    "explanation": "AUC đo lường khả năng phân biệt giữa các lớp của mô hình ở mọi ngưỡng phân loại. AUC = 0.5 tương đương với đoán mò (như tung đồng xu), trong khi AUC = 1.0 là một mô hình phân biệt hoàn hảo.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: roc.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "roc",
      "auc"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "roc",
      "auc"
    ]
  },
  {
    "id": "docx-q133",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "svm",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật toán Support Vector Machine (SVM) tìm kiếm \"Siêu mặt phẳng\" (Hyperplane) lý tưởng trong không gian đặc trưng dựa trên nguyên tắc nào?",
    "choices": [
      "Đi qua càng nhiều điểm dữ liệu càng tốt.",
      "Tối đa hóa lề (margin) - tức là khoảng cách từ siêu mặt phẳng đến các điểm dữ liệu gần nhất của cả hai lớp (Support vectors).",
      "Trùng với đường trung bình của toàn bộ dữ liệu.",
      "Tạo ra số lượng cụm K lớn nhất."
    ],
    "answer": "Tối đa hóa lề (margin) - tức là khoảng cách từ siêu mặt phẳng đến các điểm dữ liệu gần nhất của cả hai lớp (Support vectors).",
    "explanation": "SVM hoạt động bằng cách vẽ một ranh giới quyết định (hyperplane). Để ranh giới này tổng quát hóa tốt nhất, SVM tìm cách làm cho khoảng cách an toàn (margin) giữa ranh giới và các điểm dữ liệu gần nhất (support vectors) đạt mức lớn nhất có thể.",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: svm.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "svm",
      "support-vector"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "svm",
      "support vector"
    ]
  },
  {
    "id": "docx-q134",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "loss function",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Nếu thiết lập siêu tham số Tốc độ học (Learning rate) quá lớn trong thuật toán Gradient Descent, hiện tượng gì có khả năng xảy ra nhất?",
    "choices": [
      "Mô hình sẽ hội tụ về điểm cực tiểu (minimum) rất nhanh.",
      "Thuật toán có thể nhảy vượt qua (overshoot) điểm cực tiểu, hàm mất mát giao động mạnh và thậm chí phân kỳ (không thể hội tụ).",
      "Trọng số của mô hình tự động bị gán bằng 0.",
      "Mô hình tự động chuyển sang giải quyết bài toán phân cụm."
    ],
    "answer": "Thuật toán có thể nhảy vượt qua (overshoot) điểm cực tiểu, hàm mất mát giao động mạnh và thậm chí phân kỳ (không thể hội tụ).",
    "explanation": "Learning rate quyết định bước tiến dài hay ngắn. Bước tiến quá lớn sẽ khiến mô hình \"bước hụt\" qua điểm tối ưu, dẫn đến loss function nảy lên xuống bất thường và không thể tìm được trạng thái tốt nhất.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: loss function.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "loss-function",
      "gradient-descent",
      "learning-rate"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "loss function",
      "gradient descent",
      "learning rate"
    ]
  },
  {
    "id": "docx-q135",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "sigmoid",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khác biệt chính khi áp dụng hàm Softmax so với việc áp dụng nhiều hàm Sigmoid riêng lẻ ở lớp đầu ra (Output layer) là gì?",
    "choices": [
      "Softmax dùng cho Hồi quy, Sigmoid dùng cho Phân loại.",
      "Softmax đảm bảo tổng xác suất dự đoán của tất cả các lớp bằng 1 (thích hợp cho multiclass loại trừ nhau), trong khi Sigmoid tính xác suất độc lập cho từng lớp (thích hợp cho multilabel).",
      "Softmax có thể sinh ra xác suất âm.",
      "Sigmoid không cần tính toán hàm mũ."
    ],
    "answer": "Softmax đảm bảo tổng xác suất dự đoán của tất cả các lớp bằng 1 (thích hợp cho multiclass loại trừ nhau), trong khi Sigmoid tính xác suất độc lập cho từng lớp (thích hợp cho multilabel).",
    "explanation": "Trong bài toán phân loại nhiều lớp (ví dụ: ảnh chỉ là chó, mèo, hoặc chim), Softmax tạo ra một phân phối xác suất chung. Trong bài toán đa nhãn (ảnh có cả chó và mèo), các hàm Sigmoid độc lập sẽ cho phép dự đoán nhiều nhãn cùng lúc mà không bị ràng buộc tổng bằng 1.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: sigmoid.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "sigmoid",
      "softmax"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "sigmoid",
      "softmax"
    ]
  },
  {
    "id": "docx-q136",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "epoch",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Một \"Epoch\" trong huấn luyện mô hình học máy được hiểu đầy đủ là gì?",
    "choices": [
      "Là một lần mô hình cập nhật ma trận trọng số.",
      "Là quá trình chia tập dữ liệu thành Train và Test.",
      "Là một chu kỳ hoàn chỉnh khi toàn bộ tập dữ liệu huấn luyện đã được truyền qua mạng nơ-ron (truyền xuôi và truyền ngược) đúng một lần.",
      "Là quá trình làm sạch và chuẩn hóa dữ liệu đầu vào."
    ],
    "answer": "Là một chu kỳ hoàn chỉnh khi toàn bộ tập dữ liệu huấn luyện đã được truyền qua mạng nơ-ron (truyền xuôi và truyền ngược) đúng một lần.",
    "explanation": "Một epoch hoàn thành khi mô hình đã \"nhìn thấy\" và học từ tất cả các mẫu trong tập training data đúng một lần. Một quá trình training thường đòi hỏi nhiều epochs để mô hình tối ưu dần trọng số.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: epoch.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "epoch"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "epoch"
    ]
  },
  {
    "id": "docx-q140",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "relu",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Bài toán \"Vanishing Gradient\" (Tiêu biến gradient) thường xảy ra trong tình huống nào?",
    "choices": [
      "Huấn luyện các cây quyết định (Decision Tree) quá nông.",
      "Huấn luyện các mạng nơ-ron rất sâu, đặc biệt khi sử dụng hàm kích hoạt Sigmoid hoặc Tanh, khiến các gradient truyền ngược về các lớp đầu tiên trở nên vô cùng nhỏ, làm cho trọng số không thể cập nhật.",
      "Khi learning rate được đặt ở mức cực kỳ lớn.",
      "Khi thực hiện thuật toán K-means với K quá nhỏ."
    ],
    "answer": "Huấn luyện các mạng nơ-ron rất sâu, đặc biệt khi sử dụng hàm kích hoạt Sigmoid hoặc Tanh, khiến các gradient truyền ngược về các lớp đầu tiên trở nên vô cùng nhỏ, làm cho trọng số không thể cập nhật.",
    "explanation": "Đạo hàm của Sigmoid có giá trị tối đa chỉ là 0.25. Qua nhiều lớp của mạng sâu, các đạo hàm này nhân với nhau sẽ tiến dần về 0 (vanishing), làm cho các lớp đầu tiên không thể học được gì. Khắc phục bằng cách dùng hàm ReLU.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: relu.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "relu",
      "sigmoid"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "relu",
      "sigmoid"
    ]
  },
  {
    "id": "docx-q143",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "regularization",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật \"Early Stopping\" (Dừng sớm) kiểm soát quá trình huấn luyện bằng cách nào?",
    "choices": [
      "Dừng thuật toán ngay khi Training Loss đạt giá trị bằng 0.",
      "Theo dõi Validation Loss qua các epoch; nếu Validation Loss bắt đầu tăng lên (dấu hiệu của overfitting) trong một số epoch liên tiếp, quá trình huấn luyện sẽ bị buộc dừng lại.",
      "Dừng mô hình ngay sau khi chạy xong 1 epoch.",
      "Ngắt nguồn điện máy tính khi GPU quá nóng."
    ],
    "answer": "Theo dõi Validation Loss qua các epoch; nếu Validation Loss bắt đầu tăng lên (dấu hiệu của overfitting) trong một số epoch liên tiếp, quá trình huấn luyện sẽ bị buộc dừng lại.",
    "explanation": "Early stopping là một hình thức Regularization rất hiệu quả. Nó tự động tìm điểm dừng lý tưởng (Sweet spot) trước khi mô hình bắt đầu học vẹt dữ liệu huấn luyện và mất đi khả năng tổng quát hóa.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: regularization.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "regularization"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "regularization"
    ]
  },
  {
    "id": "docx-q144",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "clustering",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật ngữ \"Target variable\" (Biến mục tiêu) hoặc \"Label\" (Nhãn) hoàn toàn vắng mặt trong phương pháp học máy nào?",
    "choices": [
      "Supervised Learning.",
      "Unsupervised Learning.",
      "Classification.",
      "Regression."
    ],
    "answer": "Unsupervised Learning.",
    "explanation": "Học không giám sát (Unsupervised Learning) làm việc với các bộ dữ liệu hoàn toàn không có nhãn/biến mục tiêu. Hệ thống phải tự mò mẫm và phát hiện ra các cấu trúc ẩn bên trong dữ liệu (ví dụ qua phân cụm Clustering hoặc giảm chiều).",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: clustering.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "clustering",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "clustering",
      "phân cụm"
    ]
  },
  {
    "id": "docx-q145",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "accuracy",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Tình trạng \"Imbalanced Dataset\" (Dữ liệu mất cân bằng) phổ biến nhất trong bài toán nào sau đây?",
    "choices": [
      "Dự đoán giá nhà dựa trên diện tích.",
      "Phân cụm khách hàng.",
      "Phát hiện gian lận thẻ tín dụng (Credit Card Fraud Detection), nơi số lượng giao dịch lừa đảo chiếm tỷ lệ vô cùng nhỏ (<1%) so với giao dịch hợp lệ.",
      "Dự báo thời tiết."
    ],
    "answer": "Phát hiện gian lận thẻ tín dụng (Credit Card Fraud Detection), nơi số lượng giao dịch lừa đảo chiếm tỷ lệ vô cùng nhỏ (<1%) so với giao dịch hợp lệ.",
    "explanation": "Gian lận, phát hiện bệnh hiếm, hay phát hiện lỗi máy móc là các ví dụ điển hình của mất cân bằng dữ liệu lớp. Trong những trường hợp này, Accuracy là thước đo vô dụng (vì đoán tất cả đều bình thường cũng đạt Accuracy > 99%).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: accuracy.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "accuracy",
      "m-t-c-n-b-ng"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "accuracy",
      "mất cân bằng"
    ]
  },
  {
    "id": "docx-q146",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "mất cân bằng",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật SMOTE (Synthetic Minority Over-sampling Technique) dùng để giải quyết vấn đề dữ liệu mất cân bằng thông qua cơ chế nào?",
    "choices": [
      "Xóa bớt các mẫu thuộc lớp đa số (Majority class).",
      "Sao chép y hệt các mẫu hiện có của lớp thiểu số (Minority class).",
      "Tạo ra các mẫu dữ liệu nhân tạo mới cho lớp thiểu số bằng cách nội suy (tính toán tuyến tính) giữa một mẫu thực tế và các hàng xóm gần nhất của nó.",
      "Thay đổi trọng số hàm mất mát (Class weight)."
    ],
    "answer": "Tạo ra các mẫu dữ liệu nhân tạo mới cho lớp thiểu số bằng cách nội suy (tính toán tuyến tính) giữa một mẫu thực tế và các hàng xóm gần nhất của nó.",
    "explanation": "Không giống như random over-sampling (chỉ copy y chang dữ liệu cũ dễ gây overfitting), SMOTE sinh ra các dữ liệu tổng hợp mới nằm dọc theo đường nối giữa các điểm thiểu số hiện tại, làm phong phú thêm tập dữ liệu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mất cân bằng.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "m-t-c-n-b-ng"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mất cân bằng"
    ]
  },
  {
    "id": "docx-q147",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "pca",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khái niệm \"Curse of Dimensionality\" (Lời nguyền số chiều) ám chỉ vấn đề gì trong học máy?",
    "choices": [
      "Khi số lượng chiều/đặc trưng (features) quá lớn, dữ liệu trở nên cực kỳ thưa thớt, khoảng cách giữa các điểm đều na ná nhau, khiến mô hình (như KNN hay K-means) hoạt động kém hiệu quả và dễ bị overfitting.",
      "Quá trình tiền xử lý mất quá nhiều thời gian do lỗi mã nguồn.",
      "Không thể tính toán được đạo hàm của hàm ReLU.",
      "Quá nhiều điểm dữ liệu bị trùng lặp."
    ],
    "answer": "Khi số lượng chiều/đặc trưng (features) quá lớn, dữ liệu trở nên cực kỳ thưa thớt, khoảng cách giữa các điểm đều na ná nhau, khiến mô hình (như KNN hay K-means) hoạt động kém hiệu quả và dễ bị overfitting.",
    "explanation": "Khi số chiều tăng, thể tích của không gian dữ liệu tăng theo hàm mũ, đòi hỏi lượng dữ liệu khổng lồ để mô hình học được. PCA và Feature Selection là các công cụ đắc lực để hóa giải \"lời nguyền\" này.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: pca.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "pca"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "pca"
    ]
  },
  {
    "id": "docx-q148",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "median",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Đồ thị Boxplot cực kỳ hữu dụng trong việc phát hiện trực quan hiện tượng nào của tập dữ liệu?",
    "choices": [
      "Xu hướng tăng giảm của chuỗi thời gian.",
      "Sự tương quan (correlation) giữa hai biến số.",
      "Các giá trị ngoại lai (Outliers).",
      "Số lượng các giá trị bị khuyết."
    ],
    "answer": "Các giá trị ngoại lai (Outliers).",
    "explanation": "Boxplot thể hiện sự phân tán của dữ liệu qua các tứ phân vị (Q1, Median, Q3). Những điểm dữ liệu nằm ngoài \"râu\" (whiskers) của boxplot thường được đánh dấu là các điểm bất thường (outliers).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: median.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "median",
      "outlier"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "median",
      "outlier"
    ]
  },
  {
    "id": "docx-q149",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "relu",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Ưu điểm vượt trội của hàm kích hoạt ReLU (Rectified Linear Unit) khiến nó trở thành tiêu chuẩn cho các lớp ẩn (hidden layers) trong Deep Learning là gì?",
    "choices": [
      "Luôn giới hạn đầu ra trong khoảng (-1, 1).",
      "Tính toán rất đơn giản (chỉ lấy max(0, x)) và khắc phục được hiện tượng Vanishing Gradient ở vùng giá trị dương.",
      "Triệt tiêu hoàn toàn khả năng bị Overfitting.",
      "Giúp chuyển đổi trực tiếp bài toán từ hồi quy sang phân loại."
    ],
    "answer": "Tính toán rất đơn giản (chỉ lấy max(0, x)) và khắc phục được hiện tượng Vanishing Gradient ở vùng giá trị dương.",
    "explanation": "Với đạo hàm bằng 1 khi x > 0, ReLU cho phép gradient truyền ngược một cách mạnh mẽ qua nhiều lớp mạng mà không bị \"tiêu biến\". Nó cũng xử lý tính toán cực nhanh so với hàm mũ trong Sigmoid hay Tanh.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: relu.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "relu",
      "sigmoid",
      "tanh"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "relu",
      "sigmoid",
      "tanh"
    ]
  },
  {
    "id": "docx-q150",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mạng CNN, thao tác \"Padding\" (thêm đệm) có tác dụng gì?",
    "choices": [
      "Thu nhỏ kích thước ảnh đầu ra.",
      "Thêm các pixel (thường là giá trị 0) xung quanh viền ảnh đầu vào để bảo toàn kích thước không gian (chiều dài, chiều rộng) của ảnh sau khi tích chập (Convolution), đồng thời giữ lại thông tin ở mép ảnh.",
      "Tính toán sai số trung bình của mô hình.",
      "Tăng số lượng kênh màu từ ảnh xám (1 kênh) lên ảnh màu (3 kênh)."
    ],
    "answer": "Thêm các pixel (thường là giá trị 0) xung quanh viền ảnh đầu vào để bảo toàn kích thước không gian (chiều dài, chiều rộng) của ảnh sau khi tích chập (Convolution), đồng thời giữ lại thông tin ở mép ảnh.",
    "explanation": "Nếu không có padding (Valid padding), mỗi lần qua lớp convolution, ảnh sẽ bị nhỏ lại và thông tin ở rìa ảnh bị trích xuất ít hơn phần trung tâm. Same padding giúp khắc phục cả hai vấn đề này.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "convolution",
      "padding"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "convolution",
      "padding"
    ]
  },
  {
    "id": "docx-q151",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "cnn",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Vai trò của lớp \"Max Pooling\" trong mạng nơ-ron chập (CNN) là gì?",
    "choices": [
      "Làm tăng độ phân giải của hình ảnh.",
      "Giảm kích thước không gian (chiều rộng x chiều cao) của feature map bằng cách giữ lại giá trị lớn nhất trong một vùng nhỏ, giúp giảm số lượng tham số, tiết kiệm tính toán và tạo ra tính bất biến với dịch chuyển nhỏ.",
      "Tạo ra một bản sao ngược của hình ảnh.",
      "Điền giá trị 0 vào các vùng tối của ảnh."
    ],
    "answer": "Giảm kích thước không gian (chiều rộng x chiều cao) của feature map bằng cách giữ lại giá trị lớn nhất trong một vùng nhỏ, giúp giảm số lượng tham số, tiết kiệm tính toán và tạo ra tính bất biến với dịch chuyển nhỏ.",
    "explanation": "Pooling layer đóng vai trò cô đọng thông tin. Max Pooling nhặt ra đặc trưng \"nổi bật nhất\" (giá trị lớn nhất) trong một filter (thường là 2x2), bỏ đi các chi tiết thừa, làm cho mạng thấu hiểu ảnh ở quy mô rộng hơn.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: cnn.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cnn",
      "filter",
      "pooling"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cnn",
      "filter",
      "pooling"
    ]
  },
  {
    "id": "docx-q156",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "one-hot",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Một đặc trưng phân loại có 4 giá trị: (Bắc, Trung, Nam, Tây). Nếu áp dụng One-Hot Encoding, dữ liệu này sẽ được biến đổi thành gì?",
    "choices": [
      "1 cột chứa các số (0, 1, 2, 3).",
      "4 cột riêng biệt chứa các giá trị nhị phân (0 hoặc 1) đại diện cho từng vùng.",
      "1 cột duy nhất chứa text.",
      "2 cột số nguyên ngẫu nhiên."
    ],
    "answer": "4 cột riêng biệt chứa các giá trị nhị phân (0 hoặc 1) đại diện cho từng vùng.",
    "explanation": "One-Hot Encoding tháo dỡ một biến định danh thành các biến giả (dummy variables). Mỗi giá trị tạo thành một cột riêng, trong đó nếu mẫu ban đầu là \"Nam\", thì cột \"Nam\" sẽ có giá trị 1, 3 cột còn lại là 0.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: one-hot.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "one-hot"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "one-hot"
    ]
  },
  {
    "id": "docx-q159",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "accuracy",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Metric nào KHÔNG BAO GIỜ được sử dụng để đánh giá thuật toán K-means?",
    "choices": [
      "Inertia (Tổng bình phương khoảng cách trong cụm - WCSS).",
      "Silhouette Score.",
      "Accuracy (Độ chính xác).",
      "Davies-Bouldin Index."
    ],
    "answer": "Accuracy (Độ chính xác).",
    "explanation": "Accuracy đếm số mẫu dự đoán \"đúng nhãn\". Trong Clustering (học không giám sát), chúng ta vốn dĩ không hề có nhãn thực tế y, nên Accuracy không tồn tại.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: accuracy.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "accuracy"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "accuracy"
    ]
  },
  {
    "id": "docx-q160",
    "module": "m3",
    "lessonId": "scaling-encoding",
    "topic": "Scaling and encoding",
    "subtopic": "min-max",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Bộ chia tỷ lệ Robust Scaler xử lý dữ liệu tốt hơn Min-Max Scaler và Standard Scaler trong trường hợp tập dữ liệu có đặc điểm gì?",
    "choices": [
      "Dữ liệu hoàn toàn sạch sẽ, phân phối chuẩn hoàn hảo.",
      "Dữ liệu chứa rất nhiều giá trị ngoại lai (Outliers) cực đoan.",
      "Dữ liệu chỉ toàn là văn bản.",
      "Dữ liệu nhị phân."
    ],
    "answer": "Dữ liệu chứa rất nhiều giá trị ngoại lai (Outliers) cực đoan.",
    "explanation": "Min-Max Scaler phụ thuộc vào giá trị min/max, Standard phụ thuộc vào mean/std - cả thảy đều rất nhạy cảm với outlier. Robust Scaler sử dụng Median (Trung vị) và IQR (Khoảng tứ phân vị), giúp nó miễn nhiễm và cứng cáp hơn hẳn trước các điểm dị biệt.",
    "hints": [
      "Xác định khái niệm trọng tâm: Scaling and encoding.",
      "Đối chiếu các lựa chọn với kỹ năng: min-max.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "min-max"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "min-max"
    ]
  },
  {
    "id": "docx-q161",
    "module": "m3",
    "lessonId": "leakage",
    "topic": "Data Leakage",
    "subtopic": "rò rỉ",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Điều tối kỵ trong quá trình chia dữ liệu (Train/Test split) cho bài toán Dự báo chuỗi thời gian (Time Series Forecasting) là gì?",
    "choices": [
      "Chia dữ liệu thành 2 tập.",
      "Xáo trộn ngẫu nhiên (Shuffle) thứ tự các mẫu dữ liệu trước khi chia.",
      "Tiền xử lý dữ liệu missing value.",
      "Sử dụng mô hình RNN."
    ],
    "answer": "Xáo trộn ngẫu nhiên (Shuffle) thứ tự các mẫu dữ liệu trước khi chia.",
    "explanation": "Trong Time Series (như giá cổ phiếu, doanh số tháng), yếu tố thời gian là quan trọng nhất (quá khứ dự báo tương lai). Việc trộn ngẫu nhiên sẽ phá vỡ cấu trúc thời gian và gây rò rỉ dữ liệu (lấy tương lai để train và đoán quá khứ).",
    "hints": [
      "Xác định khái niệm trọng tâm: Data Leakage.",
      "Đối chiếu các lựa chọn với kỹ năng: rò rỉ.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "r-r"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "rò rỉ"
    ]
  },
  {
    "id": "docx-q162",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "logistic regression",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Sự khác biệt cốt lõi giữa mô hình Sinh (Generative models) và mô hình Phân biệt (Discriminative models) là gì?",
    "choices": [
      "Không có gì khác biệt.",
      "Mô hình Phân biệt học cách vẽ ranh giới giữa các lớp dữ liệu (như ranh giới chó-mèo), trong khi mô hình Sinh học bản chất phân phối của dữ liệu để có thể tự tạo ra dữ liệu mới (tạo ra ảnh một con mèo chưa từng tồn tại).",
      "Mô hình Sinh chỉ dùng cho văn bản, Phân biệt dùng cho hình ảnh.",
      "Mô hình Phân biệt không cần huấn luyện."
    ],
    "answer": "Mô hình Phân biệt học cách vẽ ranh giới giữa các lớp dữ liệu (như ranh giới chó-mèo), trong khi mô hình Sinh học bản chất phân phối của dữ liệu để có thể tự tạo ra dữ liệu mới (tạo ra ảnh một con mèo chưa từng tồn tại).",
    "explanation": "Mô hình phân biệt (Logistic Regression, SVM) trả lời câu hỏi \"Đây là gì?\". Mô hình sinh (GANs, Variational Autoencoders) trả lời câu hỏi \"Hãy vẽ/viết một thứ giống như thế này\".",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: logistic regression.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "logistic-regression",
      "svm"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "logistic regression",
      "svm"
    ]
  },
  {
    "id": "docx-q165",
    "module": "m1",
    "lessonId": "foundations",
    "topic": "ML foundations",
    "subtopic": "inference",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khái niệm \"Pipeline\" trong thư viện Scikit-learn đóng vai trò gì trong quy trình xây dựng mô hình?",
    "choices": [
      "Là một loại mạng nơ-ron sâu mới nhất.",
      "Là cơ chế kết nối chuỗi (chaining) các bước tiền xử lý dữ liệu (như Imputer, Scaler) và thuật toán dự đoán (Estimator) thành một quy trình khép kín duy nhất, giúp mã nguồn gọn gàng và tránh rò rỉ dữ liệu (data leakage).",
      "Là quá trình trích xuất dữ liệu từ Database.",
      "Là cơ chế hiển thị biểu đồ độ chính xác."
    ],
    "answer": "Là cơ chế kết nối chuỗi (chaining) các bước tiền xử lý dữ liệu (như Imputer, Scaler) và thuật toán dự đoán (Estimator) thành một quy trình khép kín duy nhất, giúp mã nguồn gọn gàng và tránh rò rỉ dữ liệu (data leakage).",
    "explanation": "Pipeline đảm bảo rằng tất cả các bước chuẩn bị dữ liệu áp dụng cho tập Train sẽ được áp dụng tự động, nguyên xi và chính xác lên tập Test/dữ liệu thực tế ở giai đoạn Inference.",
    "hints": [
      "Xác định khái niệm trọng tâm: ML foundations.",
      "Đối chiếu các lựa chọn với kỹ năng: inference.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "inference"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "inference"
    ]
  },
  {
    "id": "docx-q166",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "k-nearest",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thuật toán K-Nearest Neighbors (K-NN) được xếp vào nhóm \"Lazy Learning\" (Học lười biếng) vì lý do nào?",
    "choices": [
      "Thuật toán mất quá nhiều thời gian để tính toán hàm mất mát.",
      "Thuật toán không có giai đoạn huấn luyện (training) rõ ràng; nó chỉ lưu trữ dữ liệu và thực hiện tính toán ngay tại thời điểm dự đoán.",
      "Thuật toán chỉ sử dụng một nửa tập dữ liệu để học.",
      "Thuật toán tự động bỏ qua các đặc trưng không quan trọng."
    ],
    "answer": "Thuật toán không có giai đoạn huấn luyện (training) rõ ràng; nó chỉ lưu trữ dữ liệu và thực hiện tính toán ngay tại thời điểm dự đoán.",
    "explanation": "K-NN không xây dựng một mô hình toán học khái quát từ dữ liệu huấn luyện. Thay vào đó, nó ghi nhớ toàn bộ dữ liệu và chỉ tính toán khoảng cách để tìm hàng xóm khi có yêu cầu dự đoán mới.",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: k-nearest.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "k-nearest"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "k-nearest"
    ]
  },
  {
    "id": "docx-q167",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "false positive",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Đường cong ROC (Receiver Operating Characteristic) được vẽ bằng cách biểu diễn mối quan hệ giữa hai chỉ số nào ở các ngưỡng (thresholds) khác nhau?",
    "choices": [
      "Precision và Recall.",
      "Tỷ lệ Dương tính thật (TPR) và Tỷ lệ Dương tính giả (FPR).",
      "Accuracy và F1-Score.",
      "Bias và Variance."
    ],
    "answer": "Tỷ lệ Dương tính thật (TPR) và Tỷ lệ Dương tính giả (FPR).",
    "explanation": "ROC curve là đồ thị biểu diễn hiệu suất của mô hình phân loại nhị phân tại tất cả các ngưỡng phân loại, với trục tung là TPR (True Positive Rate) và trục hoành là FPR (False Positive Rate).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: false positive.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "false-positive",
      "fpr",
      "roc",
      "threshold"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "false positive",
      "fpr",
      "roc",
      "threshold"
    ]
  },
  {
    "id": "docx-q168",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "hyperparameter tuning",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "So với Grid Search, phương pháp Random Search trong tối ưu hóa siêu tham số (Hyperparameter tuning) có ưu điểm gì nổi bật?",
    "choices": [
      "Quét qua toàn bộ mọi tổ hợp siêu tham số có thể có.",
      "Hiệu quả hơn trong việc tìm ra bộ siêu tham số tốt khi ngân sách thời gian có hạn, vì nó thử nghiệm đa dạng các giá trị hơn thay vì bị kẹt trong lưới cố định.",
      "Đảm bảo 100% tìm ra nghiệm tối ưu toàn cục.",
      "Không yêu cầu tập Validation."
    ],
    "answer": "Hiệu quả hơn trong việc tìm ra bộ siêu tham số tốt khi ngân sách thời gian có hạn, vì nó thử nghiệm đa dạng các giá trị hơn thay vì bị kẹt trong lưới cố định.",
    "explanation": "Random Search lấy mẫu ngẫu nhiên từ không gian siêu tham số, giúp khám phá những giá trị quan trọng một cách nhanh chóng và tiết kiệm tài nguyên tính toán hơn so với việc quét cạn (Grid Search).",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: hyperparameter tuning.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "hyperparameter-tuning"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "hyperparameter tuning"
    ]
  },
  {
    "id": "docx-q169",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong Regularization L2 (Ridge Regression), thành phần phạt (penalty term) được cộng thêm vào hàm mất mát là gì?",
    "choices": [
      "Tổng giá trị tuyệt đối của các trọng số.",
      "Tổng bình phương của các trọng số.",
      "Số lượng các đặc trưng khác không.",
      "Tích của các trọng số."
    ],
    "answer": "Tổng bình phương của các trọng số.",
    "explanation": "L2 Regularization thêm tổng bình phương của các trọng số (nhân với hệ số lambda) vào hàm loss, giúp co hẹp các trọng số về gần 0 một cách đồng đều để tránh Overfitting.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting",
      "regularization",
      "l2"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting",
      "regularization",
      "l2"
    ]
  },
  {
    "id": "docx-q170",
    "module": "m2",
    "lessonId": "activation-training",
    "topic": "Neural network training",
    "subtopic": "sigmoid",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm kích hoạt Tanh (Hyperbolic Tangent) biến đổi dữ liệu đầu vào về khoảng giá trị nào?",
    "choices": [
      "(0, 1)",
      "(-1, 1)",
      "(0, +vô cực)",
      "(-vô cực, +vô cực)"
    ],
    "answer": "(-1, 1)",
    "explanation": "Tanh tương tự như Sigmoid nhưng có miền giá trị từ -1 đến 1. Điểm trung tâm bằng 0 giúp dữ liệu cân bằng hơn, thường làm cho quá trình tối ưu hóa (Gradient Descent) hội tụ nhanh hơn Sigmoid.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network training.",
      "Đối chiếu các lựa chọn với kỹ năng: sigmoid.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "sigmoid",
      "tanh",
      "gradient-descent"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "sigmoid",
      "tanh",
      "gradient descent"
    ]
  },
  {
    "id": "docx-q175",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong mạng nơ-ron chập (CNN), lớp \"Global Average Pooling\" thường được dùng để thay thế cho thành phần nào nhằm giảm thiểu lượng tham số?",
    "choices": [
      "Lớp Convolution.",
      "Lớp kích hoạt ReLU.",
      "Các lớp Fully Connected (Kết nối đầy đủ) ở cuối mạng.",
      "Hàm mất mát Softmax."
    ],
    "answer": "Các lớp Fully Connected (Kết nối đầy đủ) ở cuối mạng.",
    "explanation": "Global Average Pooling tính trung bình toàn bộ mỗi feature map thành một con số duy nhất. Việc này loại bỏ hoàn toàn các lớp Fully Connected khổng lồ, chống overfitting hiệu quả và giảm hàng triệu tham số dư thừa.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting"
    ]
  },
  {
    "id": "docx-q177",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "mất cân bằng",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Kỹ thuật \"Under-sampling\" (Lấy mẫu dưới) để xử lý dữ liệu mất cân bằng được thực hiện như thế nào?",
    "choices": [
      "Nhân bản các mẫu của lớp thiểu số (minority class).",
      "Bỏ bớt ngẫu nhiên các mẫu của lớp đa số (majority class) cho đến khi số lượng cân bằng với lớp thiểu số.",
      "Sinh ra các mẫu dữ liệu mới bằng thuật toán KNN.",
      "Thay đổi ngưỡng phân loại (threshold) của mô hình."
    ],
    "answer": "Bỏ bớt ngẫu nhiên các mẫu của lớp đa số (majority class) cho đến khi số lượng cân bằng với lớp thiểu số.",
    "explanation": "Under-sampling cắt giảm dữ liệu của nhóm chiếm ưu thế. Phương pháp này giúp cân bằng dữ liệu nhưng có nhược điểm là làm mất đi một lượng lớn thông tin hữu ích từ lớp đa số.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mất cân bằng.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "m-t-c-n-b-ng"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mất cân bằng"
    ]
  },
  {
    "id": "docx-q178",
    "module": "m2",
    "lessonId": "neuron-network",
    "topic": "Neural network",
    "subtopic": "nơ-ron",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Mục đích chính của lớp \"Batch Normalization\" trong mạng nơ-ron sâu là gì?",
    "choices": [
      "Chuyển đổi bài toán phân loại thành bài toán hồi quy.",
      "Chuẩn hóa dữ liệu đầu vào của mỗi lớp ẩn trong quá trình huấn luyện, giúp mạng hội tụ nhanh hơn và giảm sự phụ thuộc vào việc khởi tạo trọng số.",
      "Xóa các điểm dữ liệu dị biệt trong tập test.",
      "Tăng kích thước của batch size lên mức tối đa."
    ],
    "answer": "Chuẩn hóa dữ liệu đầu vào của mỗi lớp ẩn trong quá trình huấn luyện, giúp mạng hội tụ nhanh hơn và giảm sự phụ thuộc vào việc khởi tạo trọng số.",
    "explanation": "Batch Normalization giữ cho phân phối của các giá trị kích hoạt ở mỗi lớp ổn định (trung bình gần 0, phương sai gần 1), ngăn chặn hiện tượng \"internal covariate shift\" giúp việc huấn luyện Deep Learning sâu trở nên khả thi.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network.",
      "Đối chiếu các lựa chọn với kỹ năng: nơ-ron.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "n-ron"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "nơ-ron"
    ]
  },
  {
    "id": "docx-q179",
    "module": "m4",
    "lessonId": "validation-tuning",
    "topic": "Cross-validation",
    "subtopic": "cross-validation",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong đánh giá mô hình, thuật ngữ \"LOOCV\" (Leave-One-Out Cross-Validation) nghĩa là gì?",
    "choices": [
      "Bỏ qua một nửa tập dữ liệu khi huấn luyện.",
      "Chia tập dữ liệu thành K phần, trong đó K bằng đúng tổng số lượng mẫu dữ liệu (mỗi lần đánh giá chỉ dùng đúng 1 mẫu để test, phần còn lại để train).",
      "Loại bỏ đặc trưng (feature) có độ quan trọng thấp nhất sau mỗi epoch.",
      "Chỉ sử dụng duy nhất 1 mẫu dữ liệu để huấn luyện."
    ],
    "answer": "Chia tập dữ liệu thành K phần, trong đó K bằng đúng tổng số lượng mẫu dữ liệu (mỗi lần đánh giá chỉ dùng đúng 1 mẫu để test, phần còn lại để train).",
    "explanation": "LOOCV là trường hợp cực đoan của K-fold CV. Nó tốn rất nhiều thời gian tính toán vì phải huấn luyện mô hình N lần (N là số lượng mẫu), nhưng lại tận dụng tối đa dữ liệu để huấn luyện.",
    "hints": [
      "Xác định khái niệm trọng tâm: Cross-validation.",
      "Đối chiếu các lựa chọn với kỹ năng: cross-validation.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "cross-validation",
      "k-fold"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "cross-validation",
      "k-fold"
    ]
  },
  {
    "id": "docx-q180",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "precision",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong chỉ số $F_{\\beta}$ score, nếu ta đặt $\\beta = 2$ (tức là $F_2$ score), mô hình đang ưu tiên yếu tố nào hơn?",
    "choices": [
      "Precision được ưu tiên gấp đôi Recall.",
      "Recall được ưu tiên và có trọng số cao hơn Precision.",
      "Accuracy và Precision được đánh giá ngang nhau.",
      "Trọng số của thuật toán Gradient Descent."
    ],
    "answer": "Recall được ưu tiên và có trọng số cao hơn Precision.",
    "explanation": "Khi $\\beta > 1$ (như $F_2$), chỉ số này chú trọng hơn vào Recall (hạn chế bỏ sót). Ngược lại, $\\beta < 1$ (như $F_{0.5}$) sẽ chú trọng vào Precision (hạn chế báo động giả).",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: precision.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "precision",
      "recall"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "precision",
      "recall"
    ]
  },
  {
    "id": "docx-q187",
    "module": "m4",
    "lessonId": "regression-metrics",
    "topic": "Regression metrics",
    "subtopic": "mae",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Hàm mất mát \"Huber Loss\" thường được lựa chọn trong bài toán Hồi quy thay cho MSE (Mean Squared Error) khi nào?",
    "choices": [
      "Khi dữ liệu hoàn toàn không có nhiễu.",
      "Khi bộ dữ liệu chứa nhiều điểm ngoại lai (outliers) vì Huber Loss hoạt động giống MSE khi sai số nhỏ, nhưng chuyển sang giống MAE (tuyến tính) khi sai số lớn, giúp mô hình bớt nhạy cảm với outlier.",
      "Khi áp dụng cho bài toán phân loại hình ảnh.",
      "Khi biến mục tiêu y là các giá trị nhị phân 0 và 1."
    ],
    "answer": "Khi bộ dữ liệu chứa nhiều điểm ngoại lai (outliers) vì Huber Loss hoạt động giống MSE khi sai số nhỏ, nhưng chuyển sang giống MAE (tuyến tính) khi sai số lớn, giúp mô hình bớt nhạy cảm với outlier.",
    "explanation": "Huber loss kết hợp tính chất tốt nhất của cả MSE (dễ tối ưu ở điểm cực tiểu) và MAE (bền vững trước điểm dữ liệu dị biệt).",
    "hints": [
      "Xác định khái niệm trọng tâm: Regression metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: mae.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mae",
      "mse"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mae",
      "mse"
    ]
  },
  {
    "id": "docx-q188",
    "module": "m1",
    "lessonId": "supervised",
    "topic": "Supervised learning",
    "subtopic": "svm",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "\"Kernel Trick\" (Thủ thuật Kernel) trong thuật toán SVM (Support Vector Machine) có chức năng gì?",
    "choices": [
      "Giảm số chiều dữ liệu để thuật toán chạy nhanh hơn.",
      "Ánh xạ dữ liệu từ không gian ban đầu sang không gian nhiều chiều hơn, nơi dữ liệu phức tạp, phi tuyến có thể phân tách dễ dàng bằng một siêu mặt phẳng tuyến tính mà không cần tính toán tọa độ thực sự.",
      "Mã hóa dữ liệu chuỗi thành nhị phân.",
      "Tính toán tỷ lệ dương tính giả FPR."
    ],
    "answer": "Ánh xạ dữ liệu từ không gian ban đầu sang không gian nhiều chiều hơn, nơi dữ liệu phức tạp, phi tuyến có thể phân tách dễ dàng bằng một siêu mặt phẳng tuyến tính mà không cần tính toán tọa độ thực sự.",
    "explanation": "Nếu không thể kẻ một đường thẳng chia tách chó và mèo ở không gian 2D, Kernel trick tính toán tích vô hướng ở không gian 3D, 4D... giúp tìm ra mặt phẳng phân tách một cách khéo léo về mặt toán học.",
    "hints": [
      "Xác định khái niệm trọng tâm: Supervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: svm.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "svm",
      "support-vector"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "svm",
      "support vector"
    ]
  },
  {
    "id": "docx-q189",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "decision tree",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Chỉ số \"Gini Impurity\" (Độ vẩn đục Gini) trong Cây quyết định (Decision Tree) dùng để đo lường điều gì?",
    "choices": [
      "Độ dài của cây quyết định.",
      "Xác suất một điểm dữ liệu được chọn ngẫu nhiên trong một node bị phân loại sai (đo lường độ hỗn loạn). Nút càng đồng nhất, Gini càng gần 0.",
      "Thời gian cần thiết để huấn luyện cây.",
      "Khoảng cách Euclidean giữa các điểm dữ liệu."
    ],
    "answer": "Xác suất một điểm dữ liệu được chọn ngẫu nhiên trong một node bị phân loại sai (đo lường độ hỗn loạn). Nút càng đồng nhất, Gini càng gần 0.",
    "explanation": "Cùng với Entropy, Gini Impurity là tiêu chuẩn phổ biến để thuật toán (như CART) quyết định đặc trưng nào dùng để chia tách dữ liệu tốt nhất tại mỗi nút.",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: decision tree.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "decision-tree",
      "c-y-quy-t-nh",
      "entropy"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "decision tree",
      "cây quyết định",
      "entropy"
    ]
  },
  {
    "id": "docx-q190",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "overfitting",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Thao tác \"Pruning\" (Cắt tỉa cây) trong Decision Tree tác động như thế nào đến Bias và Variance của mô hình?",
    "choices": [
      "Tăng Variance, Giảm Bias.",
      "Giảm Variance, Tăng Bias (giúp mô hình bớt phức tạp, chống overfitting).",
      "Giảm cả Bias và Variance.",
      "Tăng cả Bias và Variance."
    ],
    "answer": "Giảm Variance, Tăng Bias (giúp mô hình bớt phức tạp, chống overfitting).",
    "explanation": "Cây quyết định mọc tự do rất dễ bị Overfitting (Variance cực cao). Tỉa bớt các nhánh nhỏ yếu (Pruning) làm cây đơn giản đi, chấp nhận sai số trên tập train (tăng Bias) để có khả năng tổng quát hóa tốt hơn (giảm Variance).",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: overfitting.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "overfitting",
      "bias-v-variance"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "overfitting",
      "bias và variance"
    ]
  },
  {
    "id": "docx-q197",
    "module": "m1",
    "lessonId": "tree-bayes",
    "topic": "Decision Tree and Naive Bayes",
    "subtopic": "naive bayes",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Định lý Xác suất có điều kiện $P(A\\vert{}B)$ mang ý nghĩa gì?",
    "choices": [
      "Xác suất cả hai sự kiện A và B cùng xảy ra đồng thời.",
      "Xác suất sự kiện A xảy ra, với điều kiện (hoặc thông tin đã biết trước) là sự kiện B đã xảy ra.",
      "Xác suất sự kiện A xảy ra chia cho xác suất sự kiện B không xảy ra.",
      "Tổng xác suất của A và B."
    ],
    "answer": "Xác suất sự kiện A xảy ra, với điều kiện (hoặc thông tin đã biết trước) là sự kiện B đã xảy ra.",
    "explanation": "Đây là nền tảng của thuật toán Naive Bayes. Ví dụ: Xác suất email là Spam (A) biết rằng nó chứa từ \"Miễn phí\" (B).",
    "hints": [
      "Xác định khái niệm trọng tâm: Decision Tree and Naive Bayes.",
      "Đối chiếu các lựa chọn với kỹ năng: naive bayes.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "naive-bayes",
      "bayes"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "naive bayes",
      "bayes"
    ]
  },
  {
    "id": "docx-q200",
    "module": "m2",
    "lessonId": "cnn",
    "topic": "CNN",
    "subtopic": "convolution",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Lớp \"1x1 Convolution\" trong mạng nơ-ron chập (như Inception/GoogleNet) có tác dụng gì dù kích thước cực nhỏ?",
    "choices": [
      "Tăng độ phân giải cho hình ảnh mờ.",
      "Giảm (hoặc tăng) số lượng các feature map (giảm chiều sâu của kênh) qua đó làm giảm đáng kể khối lượng tính toán mà không làm thay đổi kích thước chiều rộng/chiều dài của ảnh.",
      "Đóng vai trò như hàm Loss function.",
      "Trích xuất đặc trưng góc cạnh của hình ảnh."
    ],
    "answer": "Giảm (hoặc tăng) số lượng các feature map (giảm chiều sâu của kênh) qua đó làm giảm đáng kể khối lượng tính toán mà không làm thay đổi kích thước chiều rộng/chiều dài của ảnh.",
    "explanation": "1x1 Conv hoạt động như một lớp Fully Connected áp dụng cho từng pixel xuyên suốt các kênh (channels). Nó giúp \"nén\" độ sâu (ví dụ từ 256 kênh xuống 64 kênh) trước khi áp dụng các bộ lọc 3x3 hoặc 5x5 đắt đỏ.",
    "hints": [
      "Xác định khái niệm trọng tâm: CNN.",
      "Đối chiếu các lựa chọn với kỹ năng: convolution.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "convolution"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "convolution"
    ]
  },
  {
    "id": "docx-q202",
    "module": "m3",
    "lessonId": "data-quality",
    "topic": "Data quality and statistics",
    "subtopic": "mode",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong Transfer Learning (Học chuyển giao), quá trình \"Fine-tuning\" (Tinh chỉnh) là gì?",
    "choices": [
      "Giữ cố định 100% trọng số cũ và chỉ huấn luyện lớp phân loại mới.",
      "Sau khi huấn luyện lớp cuối, \"mở khóa\" (unfreeze) toàn bộ hoặc một vài lớp cuối của mô hình pre-trained và huấn luyện lại chúng với learning rate rất nhỏ trên tập dữ liệu mới để mô hình thích nghi tốt hơn.",
      "Tăng lượng RAM cho máy tính.",
      "Thay đổi hàm kích hoạt từ ReLU sang Sigmoid."
    ],
    "answer": "Sau khi huấn luyện lớp cuối, \"mở khóa\" (unfreeze) toàn bộ hoặc một vài lớp cuối của mô hình pre-trained và huấn luyện lại chúng với learning rate rất nhỏ trên tập dữ liệu mới để mô hình thích nghi tốt hơn.",
    "explanation": "Fine-tuning là bước đi sâu hơn của Transfer Learning. Thay vì chỉ dùng pre-trained model như một cỗ máy trích xuất đặc trưng cứng nhắc, ta điều chỉnh nhẹ các trọng số ở các lớp cao để nó bắt nhịp hoàn hảo với bài toán đặc thù của ta.",
    "hints": [
      "Xác định khái niệm trọng tâm: Data quality and statistics.",
      "Đối chiếu các lựa chọn với kỹ năng: mode.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "mode"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "mode"
    ]
  },
  {
    "id": "docx-q205",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "f1",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Khi đánh giá mô hình phân loại đa lớp (Multiclass classification) trên tập dữ liệu mất cân bằng, chỉ số \"Macro-average F1\" khác \"Micro-average F1\" ở điểm nào?",
    "choices": [
      "Micro ưu tiên lớp thiểu số, Macro ưu tiên lớp đa số.",
      "Macro tính F1 cho từng lớp độc lập rồi lấy trung bình cộng (mọi lớp quan trọng như nhau); Micro gộp tổng tất cả TP, FP, FN của mọi lớp rồi mới tính F1 (ảnh hưởng lớn bởi lớp đa số).",
      "Không có sự khác biệt về công thức toán học.",
      "Macro dùng cho bài toán Hồi quy."
    ],
    "answer": "Macro tính F1 cho từng lớp độc lập rồi lấy trung bình cộng (mọi lớp quan trọng như nhau); Micro gộp tổng tất cả TP, FP, FN của mọi lớp rồi mới tính F1 (ảnh hưởng lớn bởi lớp đa số).",
    "explanation": "Nếu bạn muốn mô hình phải làm tốt ở nhóm thiểu số (ví dụ chẩn đoán bệnh hiếm), hãy dùng Macro. Nếu bạn quan tâm đến tổng thể chung (đa số), hãy dùng Micro.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: f1.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "f1",
      "m-t-c-n-b-ng"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "f1",
      "mất cân bằng"
    ]
  },
  {
    "id": "docx-q206",
    "module": "m4",
    "lessonId": "generalization",
    "topic": "Generalization",
    "subtopic": "regularization",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Tại sao \"Data Augmentation\" (Tăng cường dữ liệu bằng cách lật, xoay ảnh) lại được coi là một dạng Regularization (Điều chuẩn)?",
    "choices": [
      "Vì nó thay đổi hàm loss sang L2.",
      "Vì nó tăng cường sự đa dạng của dữ liệu đầu vào, ép mô hình không được học thuộc lòng (memorize) từng pixel của ảnh gốc, từ đó tăng khả năng tổng quát hóa (chống overfitting).",
      "Vì nó giảm tốc độ huấn luyện mô hình.",
      "Vì nó loại bỏ các giá trị thiếu trong ảnh."
    ],
    "answer": "Vì nó tăng cường sự đa dạng của dữ liệu đầu vào, ép mô hình không được học thuộc lòng (memorize) từng pixel của ảnh gốc, từ đó tăng khả năng tổng quát hóa (chống overfitting).",
    "explanation": "Bản chất của Regularization là làm khó mô hình trong quá trình học trên tập train. Bằng cách liên tục biến tấu ảnh, mô hình bị ép phải học cái cốt lõi (hình dáng con mèo) thay vì nhiễu ngoại cảnh.",
    "hints": [
      "Xác định khái niệm trọng tâm: Generalization.",
      "Đối chiếu các lựa chọn với kỹ năng: regularization.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "regularization"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "regularization"
    ]
  },
  {
    "id": "docx-q207",
    "module": "m1",
    "lessonId": "foundations",
    "topic": "ML foundations",
    "subtopic": "label",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Phương pháp \"Semi-supervised Learning\" (Học bán giám sát) được ứng dụng khi nào?",
    "choices": [
      "Khi ta không có bất kỳ dữ liệu nào.",
      "Khi ta có một lượng khổng lồ dữ liệu không nhãn (Unlabeled data) và chỉ một lượng rất nhỏ dữ liệu đã được gán nhãn thủ công (Labeled data) đắt đỏ.",
      "Khi ta chỉ có nhãn nhưng không có đặc trưng X.",
      "Khi giải quyết bài toán Time Series."
    ],
    "answer": "Khi ta có một lượng khổng lồ dữ liệu không nhãn (Unlabeled data) và chỉ một lượng rất nhỏ dữ liệu đã được gán nhãn thủ công (Labeled data) đắt đỏ.",
    "explanation": "Semi-supervised learning dùng mô hình (hoặc các thuật toán gom cụm) kết hợp lượng dữ liệu có nhãn ít ỏi để mò mẫm, dự đoán (pseudo-labeling) và lan truyền nhãn sang hàng triệu dữ liệu chưa nhãn, tiết kiệm thời gian gán nhãn thủ công.",
    "hints": [
      "Xác định khái niệm trọng tâm: ML foundations.",
      "Đối chiếu các lựa chọn với kỹ năng: label.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "label",
      "supervised"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "label",
      "supervised"
    ]
  },
  {
    "id": "docx-q209",
    "module": "m4",
    "lessonId": "classification-metrics",
    "topic": "Classification metrics",
    "subtopic": "confusion",
    "difficulty": "hard",
    "type": "single-choice",
    "prompt": "Ma trận nhầm lẫn (Confusion Matrix) cho một bài toán phân loại có 3 nhãn (ví dụ: Ô tô, Xe máy, Xe đạp) sẽ có kích thước là bao nhiêu?",
    "choices": [
      "2x2.",
      "3x3.",
      "1x3.",
      "9x9."
    ],
    "answer": "3x3.",
    "explanation": "Confusion Matrix luôn là một ma trận vuông bậc N x N (với N là số lớp). Trục tung biểu diễn nhãn thực tế (3 nhãn), trục hoành biểu diễn nhãn dự đoán (3 nhãn), tạo thành lưới 9 ô hiển thị sự phân loại đúng và dự đoán chéo.",
    "hints": [
      "Xác định khái niệm trọng tâm: Classification metrics.",
      "Đối chiếu các lựa chọn với kỹ năng: confusion.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "confusion"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "confusion"
    ]
  },
  {
    "id": "docx-q211",
    "module": "m2",
    "lessonId": "neuron-network",
    "topic": "Neural network",
    "subtopic": "nơ-ron",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "\"Skip connections\" (Kết nối tắt / Kết nối dư) là đặc trưng tạo nên tiếng vang cho mạng nơ-ron nào và giải quyết vấn đề gì?",
    "choices": [
      "Mạng RNN, giải quyết quên dữ liệu.",
      "Mạng ResNet (Residual Networks), giải quyết bài toán Vanishing Gradient khi huấn luyện các mạng CNN cực kỳ sâu (hàng chục đến hàng trăm lớp).",
      "Mạng K-means, tăng tốc hội tụ.",
      "Mạng GAN, tăng chất lượng ảnh."
    ],
    "answer": "Mạng ResNet (Residual Networks), giải quyết bài toán Vanishing Gradient khi huấn luyện các mạng CNN cực kỳ sâu (hàng chục đến hàng trăm lớp).",
    "explanation": "Skip connection cho phép tín hiệu \"nhảy cóc\" qua một vài lớp. Nếu lớp đó không học được gì hữu ích, tín hiệu gốc vẫn được truyền thẳng lên lớp trên, giúp mạng ResNet sâu 152 lớp vẫn học tốt mà không bị thoái hóa.",
    "hints": [
      "Xác định khái niệm trọng tâm: Neural network.",
      "Đối chiếu các lựa chọn với kỹ năng: nơ-ron.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "n-ron"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "nơ-ron"
    ]
  },
  {
    "id": "docx-q212",
    "module": "m1",
    "lessonId": "unsupervised",
    "topic": "Unsupervised learning",
    "subtopic": "hierarchical",
    "difficulty": "medium",
    "type": "single-choice",
    "prompt": "Trong Phân cụm tích tụ (Hierarchical clustering), tiêu chí \"Complete Linkage\" xác định khoảng cách giữa 2 cụm như thế nào?",
    "choices": [
      "Khoảng cách ngắn nhất giữa hai điểm bất kỳ thuộc hai cụm.",
      "Khoảng cách giữa 2 tâm cụm (centroids).",
      "Khoảng cách lớn nhất (xa nhất) giữa hai điểm bất kỳ thuộc hai cụm.",
      "Trung bình khoảng cách của mọi điểm."
    ],
    "answer": "Khoảng cách lớn nhất (xa nhất) giữa hai điểm bất kỳ thuộc hai cụm.",
    "explanation": "Complete linkage định nghĩa khoảng cách giữa cụm A và B là khoảng cách giữa 2 điểm xa nhất của chúng. Phương pháp này thường tạo ra các cụm nhỏ, chặt chẽ (compact) và có hình dáng hình cầu.",
    "hints": [
      "Xác định khái niệm trọng tâm: Unsupervised learning.",
      "Đối chiếu các lựa chọn với kỹ năng: hierarchical.",
      "Loại phương án dùng sai định nghĩa hoặc khẳng định tuyệt đối không có điều kiện."
    ],
    "misconceptionTags": [
      "hierarchical",
      "linkage",
      "clustering",
      "ph-n-c-m"
    ],
    "source": [
      "Trắc nghiệm ôn Theo nội dung.docx",
      "VAIO v2"
    ],
    "skills": [
      "hierarchical",
      "linkage",
      "clustering",
      "phân cụm"
    ]
  }
];
