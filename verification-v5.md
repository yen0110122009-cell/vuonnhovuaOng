# Kiểm thử phiên bản mở rộng

- `pnpm check`: thành công, không có lỗi TypeScript.
- `pnpm build`: thành công; Vite cảnh báo bundle Babylon lớn nhưng build hoàn tất.
- Preview desktop: hiển thị 4 luống, ong, ba thú cưng, hai thanh âm lượng, Pomodoro 25:00 và nút Sổ sticker.
- Popup Sổ sticker: mở được, hiển thị 6 mục sticker và trạng thái 0/6 khi chưa sưu tầm.
- Audio asset: đã tạo và upload `vuon-nho-bee-wings.wav` và `vuon-nho-lofi-focus.wav` vào Manus Storage.
- Cần kiểm tra thêm mobile screenshot sau khi checkpoint nếu có thay đổi CSS tiếp theo.

## Kiểm tra vòng thời tiết và điều khiển

Preview desktop xác nhận nút máy ảnh, hai preset 25/5 và 50/10, ba lựa chọn Nắng chiều–Mưa dịu–Đêm sao đều hiển thị. Khi chọn Mưa dịu, thông điệp đổi thành “Mưa rào dịu nhẹ. Bạn chỉ cần ngồi nghe.”, lớp mưa và nút giọt sương xuất hiện; tài nguyên cây vẫn giữ nguyên, không có trạng thái héo. Build sau patch đạt `tsc --noEmit` và `vite build` thành công.
