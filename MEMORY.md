# MEMORY — Vườn Nhỏ Chill

## Đã hoàn thành

Game mở trực tiếp vào màn chơi toàn màn hình với bốn luống cây, hai thú cưng, bảng nhiệm vụ, tài nguyên và khay công cụ. Babylon.js khởi tạo canvas nền an toàn dưới React StrictMode; gameplay state nằm ở `GameCanvas.tsx`.

Các thao tác chính gồm chọn luống, gieo hạt, tưới cây, thu hoạch, chọn Miu/Bông, vuốt ve và sang ngày mới. URL `?demo` đặt lời nhắc và chọn luống trống để screenshot có trạng thái tương tác rõ.

## Ghi chú asset

Logo generated đã hiển thị tốt ở header và favicon. Một số ảnh nền/pet generated trả về placeholder lỗi trong phiên hiện tại, nên preview dùng nền gouache CSS và các hotspot vector/emoji để không hiển thị placeholder. Các URL vẫn được ghi trong `ASSETS.md` để có thể bật lại khi asset hoàn tất.

## Kiểm thử

`pnpm check` thành công. `pnpm build` thành công; Babylon làm bundle lớn và tạo warning chunk > 500 kB nhưng không làm build thất bại. Preview sau restart hiển thị không còn overlay lỗi.
