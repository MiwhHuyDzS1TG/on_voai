# VAIO Study Lab 2026

Nền tảng tự học AI tương tác dành cho học sinh lớp 9 ôn VAIO 2026. Nội dung VAIO là phạm vi chính; tài liệu IAIO chỉ được dùng để bổ sung các khái niệm trong chương 3, 4 và 5.

## Chạy dự án

Yêu cầu Node.js 20 trở lên.

```powershell
npm.cmd install
npm.cmd run dev
```

Mở `http://127.0.0.1:5173/`.

## Kiểm tra và đóng gói

```powershell
npm.cmd test
npm.cmd run build
```

Bản build tĩnh được tạo trong `dist/`. Tiến độ học, câu sai, lịch ôn và kết quả thi được lưu trên thiết bị bằng `localStorage`; người học có thể xuất hoặc nhập tệp JSON tại trang **Nguồn & dữ liệu**.

## Phạm vi sản phẩm

- 17 bài học trong 5 mô-đun, kèm Quick Check và nguồn theo từng bài.
- Bài chẩn đoán 24 câu, luyện tập theo chủ đề và thi thử có giới hạn thời gian.
- 18 phòng thí nghiệm tương tác về dữ liệu, mô hình, deep learning và đánh giá.
- Sổ câu sai, thẻ ôn tập, công thức, bẫy thường gặp và kế hoạch học cá nhân.
- Giao diện sáng/tối, tìm kiếm toàn cục bằng `Ctrl+K`, điều hướng bàn phím và bố cục responsive.
- Trang hướng dẫn sử dụng và tài khoản đồng bộ tiến độ giữa nhiều thiết bị.

Xem [bản đồ nội dung](docs/curriculum-map.md) để biết cách từng chủ đề được đối chiếu với nguồn.

## Deploy Vercel và bật đồng bộ

1. Đưa project lên GitHub và import repository trong Vercel.
2. Trong project Vercel, mở **Storage/Marketplace**, tạo Upstash Redis và kết nối vào project. Vercel sẽ thêm `UPSTASH_REDIS_REST_URL` và `UPSTASH_REDIS_REST_TOKEN`.
3. Redeploy project để các Vercel Function nhận biến môi trường.
4. Mở **Tài khoản & đồng bộ** và đăng nhập trên từng thiết bị.

Tài khoản mặc định:

```text
Username: mh
Password: 123456
```

Mật khẩu mặc định khá dễ đoán. Sau khi kiểm tra deployment, nên thêm biến môi trường `APP_PASSWORD` trong Vercel với mật khẩu mạnh hơn rồi redeploy. Có thể đổi tên đăng nhập bằng `APP_USERNAME`. Nếu muốn dùng secret phiên riêng với Redis token, đặt thêm `SESSION_SECRET` là một chuỗi ngẫu nhiên dài ít nhất 32 ký tự.

Ứng dụng dùng cookie `HttpOnly`, `Secure`, `SameSite=Strict`; mật khẩu không được gửi xuống hoặc lưu trong frontend. Tiến độ vẫn được lưu trong `localStorage` và tự đẩy lên Redis sau khi đăng nhập.
