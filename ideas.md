# Ý tưởng thiết kế — Vườn Nhỏ Chill

## Ba hướng phong cách ban đầu

### Theme Name: Nắng Trên Luống Đất
**Very Brief Intro:** Một khu vườn minh họa gouache ấm áp, nơi mỗi tương tác giống như chạm vào một trang sổ tay thiên nhiên. Nhịp chơi chậm, vui và giàu cảm giác chăm sóc.

**Probability:** 0.07

### Theme Name: Đồng Cỏ Sau Mưa
**Very Brief Intro:** Không gian xanh dịu với chất liệu giấy tái chế, sương mỏng và âm hưởng nhật ký đồng quê. Tập trung vào sự hồi phục, quan sát và những phần thưởng nhỏ.

**Probability:** 0.04

### Theme Name: Bếp Nhỏ Có Vườn
**Very Brief Intro:** Một góc sân sau thân mật, pha giữa minh họa sách thiếu nhi và giao diện nhật ký mùa vụ. Tông màu đất, những mẩu ghi chú và vật dụng thủ công tạo cảm giác gần gũi.

**Probability:** 0.09

## Hướng được chọn: Nắng Trên Luống Đất

### Design Movement
Minh họa gouache biên tập đương đại kết hợp với tinh thần **slow living** và sổ tay làm vườn thủ công. Hình ảnh có chiều sâu bằng lớp giấy, nét vẽ không quá hoàn hảo và ánh sáng tự nhiên thay cho hiệu ứng game bóng bẩy.

### Core Principles
1. **Chăm sóc trước cạnh tranh:** Mọi hành động đều đem lại cảm giác nuôi dưỡng, không có áp lực thất bại.
2. **Hữu cơ và có dấu vết con người:** Góc bo, đường nét và bố cục hơi lệch có chủ ý; không dùng các khối đồng nhất như dashboard doanh nghiệp.
3. **Khoảng thở:** UI chỉ xuất hiện khi cần, dành nhiều diện tích cho khu vườn và trạng thái của cây, thú.
4. **Phần thưởng nhỏ nhưng rõ ràng:** Hạt nảy mầm, thú cưng ngáp, giọt nước lấp lánh và nhật ký thay đổi là các tín hiệu tiến bộ chính.

### Color Philosophy
Nền kem ấm đóng vai trò như giấy vẽ, giúp sắc xanh của cây trở nên dịu mắt thay vì quá bão hòa. Sage và moss diễn tả sự sống đang lớn lên; clay orange là màu ký hiệu cho đất, nút hành động và vật dụng thủ công; butter yellow chỉ dành cho niềm vui và khoảnh khắc hoàn thành. Màu chữ là xanh than pha nâu để giữ cảm giác tự nhiên và bảo đảm tương phản.

### Layout Paradigm
Bố cục sân chơi bất đối xứng: khu vườn chiếm trọng tâm lệch trái, bảng trạng thái dạng mảnh giấy ghim ở bên phải, còn thanh công cụ nằm như một khay dụng cụ ở cạnh dưới. Không dùng hero căn giữa hoặc lưới thẻ đều nhau; mọi thành phần được neo theo logic của một góc vườn thật.

### Signature Elements
- Các mảnh giấy ghi chú có đường viền nét chì và góc hơi lệch.
- Đường dẫn chấm nhỏ mô phỏng nét vẽ tay, dùng để nối mục tiêu và tiến trình.
- Huy hiệu hình hạt giống/chiếc lá, xuất hiện trong các khoảnh khắc hoàn thành.

### Interaction Philosophy
Tương tác phải giống thao tác chăm vườn: click gieo hạt, kéo hoặc chạm để tưới, nhấn vào thú để vuốt ve. Phản hồi dùng chuyển động ngắn, âm thầm và có tính vật lý như đất rung nhẹ, giọt nước nảy lên, thú nhắm mắt. Không dùng popup dày đặc; thông tin quan trọng xuất hiện ngay cạnh đối tượng.

### Animation
Cây lớn lên theo các nấc rõ ràng với scale và opacity nhẹ, không xuất hiện từ scale bằng 0. Nút hành động nhún rất nhỏ khi nhấn. Hạt bụi và lá chỉ chuyển động chậm khi người dùng không thao tác. Các hiệu ứng vui như tim, giọt nước hoặc tia nắng kéo dài dưới 500ms, có hỗ trợ `prefers-reduced-motion`.

### Typography System
Tiêu đề dùng **Fraunces** với độ tương phản mềm, tạo cảm giác sách minh họa; nội dung dùng **DM Sans** để dễ đọc và thân thiện. Tiêu đề lớn 44–64px, line-height 0.95; tiêu đề khu vực 18–24px; nhãn và chỉ số dùng DM Sans 12–14px, chữ hoa vừa phải và giãn ký tự nhẹ.

### Brand Essence
Một khu vườn web nhỏ cho những lúc cần chậm lại, nơi người chơi gieo hạt, chăm bạn nhỏ và nhìn từng ngày trở nên xanh hơn. **Dịu dàng, tinh nghịch, thủ công.**

### Brand Voice
Headline và CTA nói ngắn, ấm, có hình ảnh cụ thể; microcopy ghi nhận hành động thay vì thúc ép hoàn thành.

> “Hôm nay mình chăm luống nào trước?”

> “Tưới một chút, xanh thêm một ngày.”

### Wordmark & Logo
Biểu tượng là một mầm cây mọc từ chậu đất nung bo tròn, với một chiếc lá nhỏ hình trái tim. Wordmark nếu cần sẽ dùng chữ viết tay riêng, hơi nghiêng, nhưng logo chính luôn là biểu tượng không chữ để dễ nhận diện ở header và favicon.

### Signature Brand Color
**Clay Sprout — #C9784B**, màu đất nung ấm dùng cho hành động chính và các điểm nhấn quan trọng. Đây là màu có tính sở hữu vì nó nối trực tiếp đất, chậu cây và sự chăm sóc bằng tay.

## Asset manifest sơ bộ

- Art direction: `/manus-storage/vuon-nho-art-direction_8bf0ca4b.png`
- Garden background: `/manus-storage/vuon-nho-garden_7d49ec97.png`
- Pet asset sheet: `/manus-storage/vuon-nho-pets_783c085a.png`
- Brand logo symbol: `/manus-storage/vuon-nho-logo_98aa6ada.png`

## Style Decisions

Phiên bản mở rộng tiếp tục theo hướng **Nắng Trên Luống Đất**: giao diện là một cuốn nhật ký vườn thủ công với giấy kem, gouache dịu, xanh sage và Clay Sprout #C9784B. Theo vòng rà soát gần nhất, các control được diễn giải như nhãn hạt giống, mảnh giấy ghim và dụng cụ làm vườn thay vì chrome SaaS; thanh bên dùng nét chì, tape và góc nghiêng nhẹ; khu vườn có texture chấm/nét vẽ, đường dẫn và các phần thưởng nhỏ để trở thành nhân vật chính. Clay Sprout chỉ dùng cho hành động chăm cây, progress và điểm nhấn cảm xúc. Logo/wordmark cần tiếp tục được phát triển theo hình chậu đất có mầm và lá hình tim, với nét chữ hơi nghiêng, có cảm giác được chạm tay.
