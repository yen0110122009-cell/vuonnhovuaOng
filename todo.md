# Todo — Mở rộng Vườn Nhỏ Chill

- [x] Thêm schema lưu/khôi phục toàn bộ trạng thái game bằng localStorage, có phiên bản dữ liệu và fallback an toàn.
- [x] Thêm lớp âm thanh Web Audio API tạo hiệu ứng nhẹ cho tưới cây, thu hoạch, vuốt ve thú cưng, gieo hạt và sang ngày; không tự phát âm thanh khi chưa có tương tác.
- [x] Thêm công tắc âm thanh và phản hồi aria-label để người chơi không cần đọc phụ đề nhanh.
- [x] Mở rộng danh mục hạt giống mới, hiển thị lựa chọn và trừ tài nguyên phù hợp.
- [x] Thêm vật phẩm trang trí có thể mở khóa và chọn đặt trong khu vườn.
- [x] Thêm mùa hiện tại, nhiệm vụ theo mùa và phần thưởng.
- [x] Kiểm thử thao tác, localStorage, build, responsive và các lỗi console.
- [ ] Commit và push thay đổi lên repository GitHub đã được người dùng chọn, sau đó tạo checkpoint mới để bàn giao.

## Phiên nâng cấp tiếp theo
- [ ] Sửa logic giữ/thả để Ong dừng hoàn toàn khi người chơi giữ nút và chỉ bay lại khi thao tác giữ lần nữa.
- [ ] Thêm âm thanh chân thực cho lau lá và chuông gió, có điều khiển theo ASMR/SFX.
- [ ] Tạo trang Nhật ký ngày với lịch chọn ngày, hiển thị cây, thú cưng, lời ước và quà mầm đã lưu.
- [ ] Kiểm tra trạng thái GitHub, xác thực lại nếu cần và đồng bộ mã nguồn lên repository đã chọn.
- [ ] Chạy typecheck, kiểm tra responsive, lưu checkpoint và ghi nhận các giới hạn còn lại.
- [ ] Thêm bụi/giọt sương trên lá, thao tác lau, ánh sáng vỡ và ong hứng năng lượng may mắn.
- [ ] Thêm chuông gió cỏ bốn lá phản hồi hover và ong xoay theo nhịp.
- [ ] Thêm góc viết lời ước, lưu theo ngày và cho phép mở lại với dấu mộc may mắn.
- [ ] Thêm lịch sử nhận quà giọt mầm theo từng ngày trong sổ lưu ký.
- [ ] Cho phép bật nhiều ambience cùng lúc và điều chỉnh âm lượng riêng theo theme.
- [ ] Thêm canvas doodle trên Polaroid và đưa nét vẽ vào file PNG xuất ra.
- [ ] Kiểm thử tương tác mới, localStorage, audio phối kênh, doodle và build.
- [ ] Thêm theme Tiệm Giặt Đồ Đêm Mùa Mưa với máy giặt xoay, bọt bóng và mèo ngủ trên nắp máy.
- [ ] Thêm theme Trạm Dò Sóng Vũ Trụ với núm radio, tần số âm thanh và sứa phát sáng ngoài cửa sổ.
- [ ] Thêm theme Tiệm Sửa Đồ Cổ với thao tác lau bụi, đánh bóng, tra dầu và hamster nhặt ốc vít.
- [ ] Thêm ảnh preview nhỏ cho từng theme trong bộ chọn giao diện.
- [ ] Lưu Polaroid vào localStorage, mở thư viện ảnh và lọc theo Nắng chiều/Mưa dịu/Đêm sao.
- [ ] Cho phép chọn sticker thay thế cho từng thú cưng và lưu lựa chọn theo theme.
- [ ] Kiểm thử theme mới, preview, thư viện Polaroid, bộ lọc và sticker thú cưng.
- [x] Thêm giọt mầm cỏ bốn lá mỗi ngày, click để ong rước về và nhận sticker/thông điệp chữa lành.
- [x] Thêm xoa đầu ong bằng rê chuột, tim bay và âm thanh rù rì; thêm nút cho ong ăn mật.
- [x] Thêm hiệu ứng ong đóng dấu lấp lánh sau mỗi lần đặt sticker mới.
- [x] Thêm nút ASMR riêng cho radio, máy giặt và dụng cụ phục chế theo từng theme.
- [x] Thêm xuất từng Polaroid đã lưu thành PNG tải về máy bằng canvas/blob.
- [x] Thêm ambience riêng cho laundromat, cosmic-radio và restoration, có fallback nhẹ.
- [x] Kiểm thử quà tặng, chăm ong, theme controls, export PNG, audio và build.
- [x] Mở rộng ThemeKey cho Scrapbook, Claymation, Terrarium, Diorama Gỗ, Tách Trà Matcha và Vải Nỉ.
- [x] Tạo bộ chọn theme toàn màn hình có mô tả và lưu lựa chọn bằng localStorage.
- [x] Thêm hiệu ứng riêng: băng dính/stamp, squishy, xoay terrarium, bóng đèn diorama, hơi trà và nút vải.
- [x] Giữ tương thích Polaroid, sổ lưu ký, ASMR cỏ/nước, ong pause và sticker thú cưng trong mọi theme.
- [x] Kiểm thử chuyển theme, mobile, localStorage và build.
- [x] Thêm bộ chọn theme toàn màn hình và lưu theme hiện tại bằng localStorage.
- [x] Tạo các theme visual khác nhau, ưu tiên ba phong cách đầu tiên: Papercraft, Tamagotchi pastel và Rainy Midnight Desk.
- [ ] Lưu Polaroid vào localStorage, hiển thị sổ lưu ký và bộ lọc ảnh theo thời tiết.
- [x] Thêm công tắc riêng cho ASMR cỏ và ASMR nước.
- [x] Thêm chế độ giữ ong đứng yên khi nhấn giữ, nhả ra thì bay theo lại.
- [ ] Cho phép dùng sticker thay thế cho các động vật trong khu vườn.
- [x] Kiểm thử theme toàn màn hình, Polaroid, ASMR, pointer hold, sticker và responsive.
- [x] Thời tiết chuyển giữa nắng chiều, mưa dịu và đêm sao chỉ để đổi không khí; cây không héo hoặc mất tiến trình.
- [x] Thêm giọt sương tương tác khi mưa, cỏ rung và hiệu ứng xột xạc dịu tai, tưới cây tạo giọt kim tuyến và lá rung.
- [x] Thêm nút máy ảnh, khung Polaroid, ghi chú ngày và gắn sticker vào ảnh kỷ niệm.
- [x] Hoàn thiện kéo-thả sticker bằng pointer capture trên điện thoại và lưu vị trí bền vững.
- [x] Thêm preset Pomodoro 25/5 và 50/10, giữ trạng thái ong ngủ khi đang tập trung.
- [x] Thêm lời chúc riêng cho Cáo Cỏ và biểu cảm khi nhấp Thỏ Bông.
- [x] Kiểm thử thời tiết, Polaroid, ASMR, touch drag, Pomodoro và build.
- [x] Thêm 4 cây kỳ ảo với hiệu ứng riêng: cỏ bốn lá, hoa mây, nấm đêm sao và bụi trà lofi.
- [x] Thêm Mèo Mây Matcha, Cáo Cỏ Nhút Nhát và Thỏ Bông Ngủ Gật với hành vi và thông điệp riêng.
- [x] Mở sổ sticker popup hiển thị toàn bộ sticker và thông điệp ong đã thu thập.
- [x] Cho phép kéo-thả sticker lên vị trí tùy ý trong giao diện và lưu vị trí.
- [x] Thêm audio asset thực tế cho tiếng ong và các loop lofi tùy chọn, có fallback Web Audio.
- [x] Thêm đồng hồ Pomodoro đơn giản, chuyển ong sang trạng thái ngủ khi đang tập trung.
- [x] Kiểm thử nội dung, âm thanh, kéo-thả, Pomodoro, responsive và build.
- [x] Thêm ong may mắn bay theo con trỏ/ngón tay, vệt sáng và biểu tượng cỏ bốn lá.
- [x] Thêm cơ chế thụ phấn làm cây tăng trưởng và tạo Giọt Sương May Mắn.
- [x] Thêm sticker ong sưu tầm và thông điệp ngẫu nhiên khi nhấp vào ong.
- [x] Tách thanh trượt âm lượng nhạc nền và hiệu ứng, lưu cùng tiến trình.
- [x] Chuyển tương tác thú cưng sang pointer events để vuốt chạm mượt trên mobile.
- [x] Thêm thời tiết nhẹ và màu ánh sáng thay đổi theo thời gian thực.
- [x] Kiểm thử desktop/mobile, build và cập nhật checkpoint.
- [x] Viết lớp mở đầu cốt truyện về chìa khóa bí mật và không gian túi riêng tư.
- [x] Bổ sung chế độ không áp lực: bỏ nhiệm vụ bắt buộc, bảng điểm, đếm ngược và ngôn ngữ thành tích.
- [x] Theo dõi con trỏ trong khu vườn để thú cưng nhìn theo, đi lại nhẹ hoặc ngủ cạnh vị trí con trỏ.
- [x] Thêm tương tác kéo rê trên thú cưng để xoa/chải lông, tăng thân thiết và phát âm thanh rừ rừ.
- [x] Đổi tưới cây sang tương tác từng giọt bằng click, có phản hồi cây lớn lên theo cấp độ.
- [x] Thêm âm thanh click gỗ, nước, chải lông và nền lofi tùy chọn, tôn trọng mute và prefers-reduced-motion.
- [x] Kiểm thử desktop/mobile và build; đồng bộ GitHub vẫn chờ kết nối xác thực hợp lệ.


## Phiên mở rộng tương tác và nhật ký
- [ ] Tự động ghi hành động lau lá, rung chuông gió, uống trà, gõ phím và hộp nhạc vào nhật ký ngày.
- [ ] Đồng bộ ánh sáng và hình nền theo buổi sáng, chiều, tối theo thời gian thực.
- [ ] Thêm xuất ảnh PNG cho trang nhật ký và từng lời ước.
- [ ] Thêm Trà Cỏ 4 Lá, hiệu ứng hơi trà và phản ứng của Ong.
- [ ] Thêm Keyboard Flower Sprouter khi người chơi gõ phím.
- [ ] Thêm Mini Music Box với thao tác vặn dây và âm thanh hộp nhạc.
- [ ] Kiểm tra typecheck, responsive, lưu checkpoint và đồng bộ tài liệu.


## Phiên Ong nhấn giữ và bộ sưu tập ký ức
- [ ] Chỉ cho Ong di chuyển theo con trỏ khi đang nhấn giữ trên vùng vườn; thả ra thì đứng yên tại vị trí cuối.
- [ ] Thêm timeline nhật ký theo thời gian với bộ lọc loại hành động.
- [ ] Bổ sung nhiều giai điệu hộp nhạc và bộ chọn giai điệu đang phát.
- [ ] Tạo bộ sưu tập hình hơi trà, mở khóa dần qua số lần Tea Time.
- [ ] Kiểm tra TypeScript, desktop/mobile và lưu checkpoint mới.


## Phiên góc bàn và nhật ký chi tiết
- [ ] Thêm Đồng Hồ Cát Mầm Cây với preset 15/25 phút, mầm theo hạt sáng và Ong ngủ trong lúc tập trung.
- [ ] Thêm Cây Cọ Bọt Bóng với kéo để tạo bóng, hiệu ứng vỡ và sticker sưu tầm.
- [ ] Thêm Tủ Kéo Bí Mật với món đồ thay đổi theo ngày và kéo thả ra bàn.
- [ ] Thêm bảng điều khiển hộp nhạc hiển thị tên bài và cho phép chọn giai điệu.
- [ ] Thêm giao diện trực quan cho bộ sưu tập hơi trà và chọn hình mặc định.
- [ ] Ghi timestamp và ghi chú tùy chọn cho từng sự kiện nhật ký tự động.
- [ ] Kiểm tra TypeScript, desktop/mobile và lưu checkpoint mới.


## Phiên âm thanh và đồ vật tương tác
- [ ] Thêm tiếng lách tách cho từng nhịp Đồng Hồ Cát và hiệu ứng chúc mừng khi hoàn thành.
- [ ] Cho phép kéo thả món đồ từ Tủ Kéo Bí Mật ra mặt bàn, lưu vị trí và trạng thái tương tác.
- [ ] Làm bong bóng bay lơ lửng, có thể chọc vỡ bằng Ong và phát tiếng bốp êm.
- [ ] Kiểm tra pointer events trên desktop/mobile, TypeScript và lưu checkpoint mới.


## Phiên Ong tương tác với đồ vật và bộ đếm sưu tầm
- [ ] Cho Ong tự bay đến món đồ đã đặt trên bàn, dừng lại và phản ứng đáng yêu theo từng loại đồ.
- [ ] Thêm bộ đếm trực quan số bong bóng đang bay và tổng sticker đã thu thập.
- [ ] Tạo âm thanh riêng cho kẹo đường, cúc áo gỗ, ngôi sao giấy và ruy-băng.
- [ ] Kiểm tra pointer events desktop/mobile, TypeScript và lưu checkpoint mới.


## Phiên nhiều đồ vật và Bộ sưu tập âm thanh
- [ ] Cho phép đặt nhiều món đồ từ ngăn kéo ra mặt bàn cùng lúc, mỗi món giữ vị trí và trạng thái riêng.
- [ ] Tạo trang Bộ sưu tập âm thanh để nghe lại các hiệu ứng đã mở khóa và hiển thị trạng thái khóa/mở.
- [ ] Thêm animation riêng cho Bé Ong khi chạm kẹo đường, cúc áo gỗ, ngôi sao giấy và ruy-băng.
- [ ] Kiểm tra pointer events desktop/mobile, TypeScript và lưu checkpoint mới.


## Phiên dọn bàn và bộ lọc âm thanh
- [ ] Thêm nút Dọn dẹp để cất tất cả món đồ đang đặt trên mặt bàn về ngăn kéo bí mật.
- [ ] Thêm chuỗi phản ứng liên hoàn khi Bé Ong tương tác với nhiều món đồ khác nhau liên tiếp.
- [ ] Thêm chủ đề âm thanh và bộ lọc trong Bộ sưu tập âm thanh.
- [ ] Kiểm tra trạng thái localStorage, TypeScript, responsive và lưu checkpoint mới.


## Phiên tìm kiếm, chuỗi Ong và chỉnh menu
- [ ] Thêm thanh tìm kiếm theo tên bài hát/âm thanh trong Bộ sưu tập âm thanh.
- [ ] Tự động ghi chi tiết từng chuỗi tương tác liên hoàn của Bé Ong vào Nhật ký ngày.
- [ ] Thêm huy hiệu thành tựu khi chuỗi đạt 3, 5 và 10 món đồ.
- [ ] Sửa menu “Hôm nay làm gì?” bị rộng, đồng thời liên kết các mục với đúng thao tác/modal.
- [ ] Kiểm tra GitHub, typecheck, responsive, lưu checkpoint và đồng bộ repository.
