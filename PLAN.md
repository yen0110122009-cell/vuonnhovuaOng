# PLAN — Vườn Nhỏ Chill

## Mục tiêu trải nghiệm
Xây dựng một game web một màn hình, chơi ngay trong trình duyệt, nơi người chơi quản lý một khu vườn nhỏ và chăm hai thú cưng. Trải nghiệm ưu tiên thư giãn, thao tác đơn giản, phản hồi đáng yêu và tiến trình nhìn thấy được.

## Risk slices

### Slice 1 — Vòng lặp chăm vườn
Người chơi chọn một luống, gieo hạt, tưới nước và thu hoạch khi cây trưởng thành. Trạng thái phải được hiển thị trực tiếp bằng sprite/mesh và nhãn trạng thái.

### Slice 2 — Chăm thú cưng
Hai thú cưng có chỉ số năng lượng và vui vẻ. Nút vuốt ve hoặc cho ăn tăng chỉ số, kèm phản hồi nhỏ ngay tại khu vực thú.

### Slice 3 — HUD và nhịp tiến trình
Thanh công cụ dưới cùng phải hiển thị hạt giống, nước, xu lá và các hành động chính. Bảng bên phải hiển thị ngày trong game, mục tiêu trong ngày và chỉ số của thú được chọn.

### Slice 4 — Tính ổn định canvas
Nếu dùng Babylon.js, canvas phải được khởi tạo đúng một lần dưới React StrictMode, xử lý resize, dọn listener và dispose scene khi unmount. Game phải có `?demo` để tạo trạng thái mẫu ổn định cho kiểm thử hình ảnh.

## Tiêu chí hoàn thành
- Trang chủ mở thẳng vào màn chơi, không có màn hình placeholder.
- Có ít nhất bốn ô đất với trạng thái trống, mới gieo, đang lớn và thu hoạch được.
- Có thể chọn hạt, gieo, tưới, thu hoạch; tài nguyên và điểm thay đổi theo hành động.
- Có ít nhất hai thú cưng, có thể chọn thú và thực hiện hành động chăm sóc.
- Giao diện responsive, có thể dùng trên màn hình nhỏ; các nút có focus rõ ràng.
- Asset art direction, nền khu vườn, thú cưng và logo được dùng thực tế.
- `pnpm check` và `pnpm build` chạy thành công.
- Screenshot ở trạng thái mặc định và `?demo` cho thấy vòng lặp chơi chính.
