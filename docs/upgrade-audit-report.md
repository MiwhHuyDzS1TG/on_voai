# Báo cáo audit và nâng cấp ONVOAI

## 1. Hiện trạng kỹ thuật

- Frontend: React 19, TypeScript và Vite; điều hướng dùng hash route để hoạt động ổn định trên Vercel static hosting.
- Backend: Vercel Functions tại `/api/auth/*` và `/api/sync`.
- Xác thực: một tài khoản cấu hình bằng biến môi trường; cookie phiên HMAC có `HttpOnly`, `Secure`, `SameSite=Strict` và hạn 30 ngày.
- Lưu trữ: localStorage giữ tiến độ cục bộ; Upstash Redis giữ bản đồng bộ nhiều thiết bị.
- Guest Mode: toàn bộ nội dung học vẫn truy cập được khi chưa đăng nhập.
- Dữ liệu học: curriculum, full lesson, coverage, questions, review, case study và lab được tách thành các module dữ liệu riêng.

## 2. Root cause lỗi đăng nhập Production

Endpoint Production cũ trả `500 FUNCTION_INVOCATION_FAILED`. Các file API dùng dạng export hàm không khớp Web Handler mà cấu hình Vite/Vercel hiện tại mong đợi. Bốn endpoint đã được chuyển sang `export default { fetch: handler }`, đồng thời vẫn export named handler để unit test trực tiếp.

Xử lý lỗi cũng được chuẩn hóa: server log mã lỗi nội bộ, còn client chỉ nhận mã ổn định như `AUTH_NOT_CONFIGURED`, `INVALID_CREDENTIALS` hoặc `LOGIN_FAILED`. Giao diện không hiển thị stack trace hay thông tin secret.

Production cần có:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `SESSION_SECRET` dài tối thiểu 32 ký tự
- `APP_USERNAME=mh` nếu muốn khai báo tường minh
- `APP_PASSWORD=123456` chỉ để kiểm thử; nên đổi sau khi nghiệm thu

Sau khi thêm biến môi trường phải redeploy Production rồi kiểm tra chuỗi: đăng nhập, mở Dashboard, refresh, đăng xuất và đăng nhập lại.

## 3. Audit bốn nguồn học liệu

| Nguồn | Vai trò | Cách sử dụng |
|---|---|---|
| `noi_dung_on_tap_SoLoaiVAIO_v2.pdf` | Curriculum chính | Xương sống của module, lesson và coverage checklist |
| `noi_dung_on_tap_VAIO.pdf` | Bản đối chiếu | Kiểm tra thuật ngữ nền tảng; bản v2 luôn được ưu tiên |
| `Trắc nghiệm ôn Theo nội dung.docx` | Question bank | Nhập 174 câu hợp lệ, không trùng, đúng phạm vi |
| `IAIO-Training-Eljakim-Schrijvers-vi.pdf` | Nguồn bổ trợ | Chỉ dùng Chương 3-5; phần mở rộng được gắn nhãn và ghi nguồn |

Các câu từ phần nâng cao ngoài VAIO như NLP, LLM, Reinforcement Learning và MLOps bị loại. Bộ nhập liệu có thể chạy lại bằng `npm run content:import-questions`.

## 4. Kết quả nâng cấp nội dung

- 5 mô-đun, 17 master lesson đầy đủ và 16 coverage row cho toàn bộ §1.1 đến §5.2.
- 202 câu hỏi tĩnh, trong đó 174 câu được chuẩn hóa từ DOCX.
- 16 numeric generator có tham số biến thiên và đáp án tính lại.
- 21 lab tương tác, bao gồm KNN, gradient descent và tính kích thước CNN mới.
- 26 công thức có ký hiệu, input/output, phạm vi và liên kết về bài học, bài luyện.
- 12 case study và 8 bài tư duy logic có đáp án ẩn để người học tự làm trước.
- Sổ câu sai liên kết trực tiếp về kiến thức và chế độ luyện liên quan.

## 5. Kiểm tra tự động

- `npm run content:audit`: kiểm tra lesson đầy đủ, coverage, số lượng câu, generator, công thức và case study.
- `npm test`: kiểm tra metric, mastery, auth, cookie phiên và Web Handler.
- `npm run build`: kiểm tra TypeScript và build Production.

## 6. Giới hạn còn lại

- Chưa có dữ liệu kết quả thi thật để hiệu chuẩn mastery thành dự báo điểm.
- Preset thi thử là công cụ luyện tập, không được mô tả là cấu trúc thi chính thức.
- Việc sửa endpoint chỉ có hiệu lực trên Production sau khi bản code mới được deploy và các biến môi trường được cấu hình đúng.
- Lần kiểm tra ngày 05/10/2026 cho thấy domain hiện vẫn chạy bản cũ: `/api/auth/me` trả `500 FUNCTION_INVOCATION_FAILED`. Workspace không có Vercel CLI, project link hoặc Vercel token nên chưa thể redeploy từ máy này.
- Mật khẩu `123456` đáp ứng yêu cầu nghiệm thu nhưng yếu; cần đổi bằng `APP_PASSWORD` sau khi kiểm thử đa thiết bị.
