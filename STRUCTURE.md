# STRUCTURE — Vườn Nhỏ Chill

`client/src/components/GameCanvas.tsx` là lớp React duy nhất của màn chơi. Nó quản lý state giao diện, tài nguyên, hành động người chơi và các vùng hotspot có thể bấm.

`client/src/game/scene.ts` là module Babylon thuần TypeScript, sở hữu Engine scene, camera, ánh sáng và mặt đất nền. Module này không import React.

Các asset hình ảnh được tham chiếu bằng URL `/manus-storage/...` do hệ thống quản lý vòng đời dự án cung cấp. Nền vườn và pet sheet được dùng làm lớp minh họa, còn các đối tượng gameplay được điều khiển bởi state React để ưu tiên phản hồi rõ ràng và nhẹ.

Dòng dữ liệu chính là `plot state → hành động công cụ → cập nhật tài nguyên → thông báo ngữ cảnh`. Trạng thái thú cưng được chọn độc lập với luống cây, cho phép người chơi chuyển qua lại mà không mất tiến trình.
