W4GZ
WRITING4GENZ

Website Narrative Script & Build Brief
Bản kịch bản tự sự toàn site + brief hiện thực hóa cho team phát triển
Motto:  “Creates narratives worth living.”
Phiên bản: Script v1 (draft để review & chỉnh sửa)
Ngôn ngữ: Tiếng Việt (lớp tự sự) · English (lớp cấu trúc & thương hiệu)
Kiến trúc: 7 trang · Single-page React (client-side routing)

### Mục lục
PART 0  ·  Cách đọc brief này
PART 1  ·  Luận đề mà team cần thấm
PART 2  ·  Hệ thống thiết kế (visual language)
PART 3  ·  Thành phần toàn cục
PART 4  ·  Bản đồ meta-narrative (7 chương)
PART 5  ·  Kịch bản từng trang (I–VII)
PART 6  ·  Phụ lục: quote bank · glossary · dữ liệu cần cung cấp

# PART 0 · Cách đọc brief này
Tài liệu này là kịch bản tự sự của toàn site, viết để một team thiết kế và phát triển dựng được website mà không cần hỏi thêm. Mỗi trang được bóc thành các section theo đúng thứ tự cuộn. Trong mỗi section, nội dung được tách thành hai lớp: chữ thật sẽ xuất hiện trên web, và mô tả hình thức thể hiện.
### Quy ước nhãn
FORM   Bố cục, lưới, kiểu chữ, xử lý thị giác — thứ team dựng.
COPY   Chữ thật cho web, trong khung tô nền. Dùng trực tiếp, chỉnh trên đây.
IMAGE   Vị trí và art direction cho ảnh / kí họa.
MOTION   Chuyển động, micro-interaction, hành vi cuộn.
CTA   Nút hành động và đích đến.
NOTE   Dữ liệu hoặc quyết định cần Hex cung cấp trước khi lên production.
### Giả định đang áp dụng
Năm điểm dưới đây tôi tự quyết để không chặn tiến độ. Mỗi điểm có thể đảo nếu bạn muốn.
- Bảy trang, giữ The People và The Covenant thành trang riêng — chọn bản tự sự đầy đủ thay vì bản gọn năm trang.
- Tiếng Việt làm lớp tự sự chính; tiếng Anh giữ ở nav, section label, motto, tên các vertical, và CTA; quote để nguyên ngữ kèm bản dịch.
- Trục thời đại AI gợi nhẹ ở Home, dồn toàn bộ lập luận vào trang Why Writing.
- Hệ hình ảnh là kí họa do thành viên vẽ — giả định cần sản xuất/biên tập song song, mọi slot đã đánh dấu.
- Phơi bày các vertical đã có hoạt động thật; loại nhánh đầu tư khỏi nội dung công khai theo standing preference của bạn.

# PART 1 · Luận đề mà team cần thấm
Trước khi dựng một pixel, cả team cần hiểu site này đang lập luận điều gì. Toàn bộ thẩm mỹ phục vụ một luận đề duy nhất.
“impose narrative order on chaos so that meaning becomes visible”
áp trật tự tự sự lên hỗn mang để nghĩa hiện ra
— W4GZ Manifesto, Pillar 1: Narrative Structure
Bốn bước của lập luận:
- Một đời người chỉ trở nên khả niệm dưới dạng tự sự. Ta hiểu được mình qua việc kể lại mình thành chuyện (Ricoeur — narrative identity; MacIntyre — con người là sinh vật kể chuyện).
- Viết nên tự sự của mình tức là viết nên chính mình. Mức độ định hình được câu chuyện đời quyết định mức độ sở hữu trải nghiệm của mình.
- Viết là kỉ luật nghiêm ngặt nhất của việc tạo tự sự. Manifesto đã định nghĩa: viết ép suy nghĩ thành hình thức, buộc thứ hỗn mang trong đầu trở nên mạch lạc, tuần tự, và có trách nhiệm với người đọc.
- Thời đại văn bản do máy sinh ở quy mô vô hạn làm hai việc: dìm cái tôi trong tự sự không do mình viết, và khiến việc sản xuất chữ cơ học mất giá trong khi con người tạo nghĩa trở nên khan hiếm.
Kết luận vận hành: ở thời đại này, năng lực tự viết tự sự của mình là hình thức chủ quyền cuối cùng máy không làm thay được. “Creates narratives worth living” nghĩa là xây những con người tự viết nên một đời đáng sống. Người truy cập là nhân vật chính; site là hành trình họ đi từ giữa nhiễu loạn tới chỗ cầm lấy cây bút.

# PART 2 · Hệ thống thiết kế
Thương hiệu: giấy trắng mực đen, có yếu tố công nghệ, phá cách theo tinh thần Gen Z ở cấu trúc và hiệu ứng thị giác — không rơi vào lối chữ viết cổ. Đen trắng giữ chủ đạo tuyệt đối; mọi “phá cách” nằm ở lưới và typography, không ở màu.
### 2.1 Bảng màu

[TABLE]
| Vai trò | HEX | Dùng cho |
| Mực (ink) | #141414 | Chữ chính, nền các khối nghịch đảo |
| Giấy (paper) | #F4F1EB | Nền chủ đạo toàn site |
| Giấy đậm | #EDE9E0 | Nền phụ, hover, card |
| Xám chữ | #7A7872 | Body phụ, mô tả, caption |
| Hairline | rgba(20,20,20,.12) | Mọi đường kẻ 0.5px chia lưới |
[/TABLE]

Không gradient. Không shadow màu. Không màu nhấn. Tương phản đến từ đen–trắng và từ khoảng trắng, không từ sắc độ.
### 2.2 Kiểu chữ

[TABLE]
| Vai trò | Font đề xuất | Dùng cho |
| Display / tự sự | Cormorant Garamond (italic) | Headline lớn, quote, câu mang sức nặng |
| Body | Outfit | Đoạn văn, mô tả, nội dung đọc |
| Mono / kỹ thuật | DM Mono | Section label, số, nav, microcopy — lớp công nghệ |
[/TABLE]

Ba register tách bạch: cảm xúc (serif nghiêng) · đọc được (sans) · công nghệ (mono). Yếu tố Gen Z đến từ tương phản cỡ chữ cực lớn cạnh mono cực nhỏ, và từ việc bẻ lưới. Đây là điểm có thể điều chỉnh nếu brand đã chốt bộ chữ khác.
### 2.3 Lưới & khoảng trắng
- Khoảng âm là “trang chưa viết” — không phải chỗ trống cần lấp, mà lời mời viết. Hero và các chuyển cảnh để hở rộng.
- Lưới chia bằng hairline 0.5px, không bằng card có đổ bóng. Các khối phân nhau bằng đường kẻ mảnh.
- Cho phép bẻ lưới có chủ đích: chữ ghost cỡ khổng lồ tràn lề, số thứ tự lệch khỏi cột, một dòng chạy chéo.
- Padding section dọc rộng (gấp rưỡi thường) để mỗi chương có nhịp thở của một trang sách.
### 2.4 Chuyển động
- Một lần page-load dàn cảnh tốt hơn nhiều micro-interaction rải rác: hero reveal theo bậc (staggered fade-up), delay 0.05–0.3s.
- Cuộn kích hoạt: quote và headline lớn mờ-hiện khi vào khung nhìn.
- Hover tinh: giãn letter-spacing của mũi tên, đổi nền sang giấy đậm. Không bounce, không scale mạnh.
- Chuyển trang: cuộn mượt về đầu trang, fade nhẹ nội dung mới (đã có trong prototype).
### 2.5 Hệ hình ảnh — kí họa
Toàn bộ minh họa là kí họa do thành viên vẽ. Quyết định này làm ba việc cùng lúc: giữ thẩm mỹ mực-trên-giấy, phô bày chính một hoạt động của cộng đồng, và giải bài toán ẩn danh (Law III) ở trang People bằng chân dung vẽ thay ảnh chụp.
MOTION   Ảnh xuất hiện như được dán/cắt lên giấy: viền thẳng, đổ bóng cực nhẹ hoặc không, đôi chỗ hơi lệch trục như ảnh dán tay.
NOTE   Cần xác nhận kho kí họa sẵn có, hay đây là hạng mục sản xuất song song. Mọi slot ảnh trong PART 5 đều ghi rõ nội dung cần vẽ.
### 2.6 Hệ trích dẫn
Quote là một thành phần lặp, mở mỗi chương như đề từ. Hai nguồn đặt ngang hàng nhau:
- Kinh điển — Wittgenstein, Benjamin, Han, Ricoeur, Didion, Aristotle, Kipling.
- Chữ của chính thành viên, ẩn danh. Đặt một câu của thành viên cạnh một câu của Wittgenstein là một luận điểm tự thân: cộng đồng này sản sinh chữ thật.
FORM   Quote nguyên ngữ đặt lớn bằng serif nghiêng; bản dịch Việt nhỏ phía dưới màu xám; tên tác giả nhỏ hơn nữa bằng mono. Toàn bộ quote bank ở Phụ lục A.

# PART 3 · Thành phần toàn cục
### 3.1 Thanh điều hướng (Nav)
FORM   Cố định trên cùng, nền giấy mờ, hairline dưới. Bên trái wordmark “W4GZ”. Giữa là các mục. Bên phải nút Enroll luôn hiện diện — lối tắt cho người đã quyết, song song với hành trình tự sự.
COPY
W4GZ
Home · Why Writing · Courses · Community · Ecosystem · People · Join
Nút phải: Enroll →
NOTE   Nhãn nav để tiếng Anh cho gọn và đúng thương hiệu. Bản Việt nếu cần: Trang chủ · Vì sao Viết · Khóa học · Cộng đồng · Hệ sinh thái · Con người · Tham gia.
### 3.2 Chân trang (Footer)
FORM   Hairline trên. Trái: wordmark đầy đủ. Giữa: lại các mục điều hướng. Phải: dòng bản quyền bằng mono.
COPY
Writing4GenZ
© 2026 W4GZ · The -4GZ Ecosystem · Ho Chi Minh City · Est. 2022
### 3.3 Kiểu nút CTA
- Filled (mực đặc, chữ giấy): hành động chính — Enroll, Apply.
- Outline (viền mảnh, nền trong): hành động phụ — Explore, Find the Hub.
- Inverse (trên nền mực): nút trong card tối ở trang Courses.
- Mọi nhãn nút bằng mono, in hoa, giãn chữ; hover đảo nền/chữ.
### 3.4 Đề từ chương
FORM   Mỗi trang (trừ Home) mở bằng một quote đề từ căn lề trái, theo hệ ở 2.6. Đây là sợi chỉ nối bảy chương thành một văn bản.

# PART 4 · Bản đồ meta-narrative
Người truy cập là nhân vật chính. Bảy trang là bảy chương của một arc. Câu xuyên suốt:
Một người bước vào giữa nhiễu loạn thông tin, thấy được một đời được tự viết trông ra sao, và cầm lấy cây bút cho trang đầu tiên của mình.

[TABLE]
| Chương | Trang | Câu hỏi nó mở | Beat cảm xúc |
| I | Home | Điều gì đang xảy ra với tôi? | Nhận diện — bất an |
| II | Why Writing | Vì sao viết cứu được điều đó? | Khai sáng — lập luận |
| III | Courses | Tôi thành người viết bằng cách nào? | Phương pháp — quyết tâm |
| IV | Community | Một đời như thế trông ra sao? | Bằng chứng — khát khao |
| V | Ecosystem | Việc viết lớn tới đâu? | Tầm vóc — tin tưởng |
| VI | People | Ai đã đi con đường này? | Người thật — đồng nhất |
| VII | Join / Covenant | Tôi bắt đầu từ đâu? | Cam kết — hành động |
[/TABLE]

Mỗi trang tự đứng được như một chương trọn vẹn, đồng thời để hở câu hỏi mà chương sau trả lời. Đây là cơ chế giữ người đọc đi hết.

# PART 5 · Kịch bản từng trang
## Trang I · Home — “Narratives Worth Living”
Vai trò: cú hook. · Mở: “Điều gì đang xảy ra với tôi?” · Đóng: đẩy sang Why Writing. · Beat: nhận diện, bất an. · Độ dài: 4 màn cuộn.
### I.1 · Hero
FORM   Lưới hai cột chia bằng hairline dọc, cao gần trọn màn hình, nội dung dồn xuống đáy cột. Trái: đề từ mono, headline serif khổng lồ, subhead, hai CTA. Phải: ticker chạy ngang + lưới bốn ô số liệu.
COPY
CREATES NARRATIVES WORTH LIVING
Một đời là một văn bản.
Câu hỏi duy nhất: ai cầm bút?
Mỗi ngày, thuật toán viết hộ bạn hàng nghìn câu — điều cần xem, điều cần muốn, điều cần sợ. W4GZ tồn tại để trả cây bút về tay người viết.
CTA   Filled “Bắt đầu với Introduction →”  ·  Outline “Vào cộng đồng”
IMAGE   Không có ảnh ở hero. Khoảng trắng là chủ đích — màn hình mở ra như một trang chưa viết.
MOTION   Hero reveal theo bậc: đề từ → headline dòng 1 → dòng 2 → subhead → CTA. Ticker chạy vô tận. Bốn số liệu đếm nhẹ khi hiện.
FORM   Bốn ô số liệu (mono nhỏ + serif lớn): xem COPY.
COPY
10+ — Số khóa đã dạy
Gen Z — Thế hệ trọng tâm
HCMC — Không gian vật lý
Est. 2022 — Năm khởi lập
NOTE   Bốn con số có thể thay bằng số thật (tổng đăng ký / số cá nhân / số cohort). Cần bạn chốt bộ số hiển thị công khai.
### I.2 · Bối cảnh thời đại
FORM   Khối một cột rộng, căn trái, nhiều khoảng trắng. Một quote đề từ, một headline vừa, hai đoạn ngắn. Gợi nhẹ trục AI — chưa lập luận đầy đủ.
“We tell ourselves stories in order to live.”
Ta tự kể chuyện để sống.
— Joan Didion
COPY
Chữ chưa bao giờ rẻ đến thế. Nghĩa chưa bao giờ khan đến thế.
Máy giờ sinh ra văn bản nhanh hơn con người đọc kịp. Giữa dòng chảy đó, điều hiếm hoi không còn là khả năng tạo ra chữ, mà khả năng dựng nên nghĩa — sắp những mảnh rời thành một câu chuyện đứng vững.
Một đời không được tự kể sẽ bị kể hộ. Feed kể. Quảng cáo kể. Đám đông kể. Mỗi câu chuyện vay mượn ấy lấy đi một phần quyền tác giả với chính cuộc đời mình.
### I.3 · Lời đáp: W4GZ
FORM   Chuyển nền hoặc giữ giấy, một câu lớn nghịch đậm (mực đặc, chữ giấy) làm điểm dừng mắt, rồi đoạn giới thiệu ngắn.
COPY
W4GZ dạy bạn viết. Sâu hơn thế: dạy bạn tự viết lấy đời mình.
Khởi lập 2022, W4GZ là cộng đồng đầu tiên ở Việt Nam coi viết là một thực hành nghiêm túc và bền bỉ — thứ định hình cách một người nghĩ, quyết, và sống. Viết là cột sống. Mọi điều còn lại là cơ thể nó giữ cho đứng thẳng.
MOTION   Câu lớn mờ-hiện khi cuộn tới; nền nghịch đậm trượt vào.
### I.4 · Bốn cửa vào
FORM   Lưới bốn ô ngang, chia hairline, hover đổi nền. Mỗi ô: số thứ tự mono, tiêu đề serif, một dòng mô tả, mũi tên. Dẫn tới bốn đích theo ý định người đọc.
COPY
01 — Vì sao Viết
Lập luận về viết, tự sự, và chủ quyền trong thời đại thông tin.
02 — Học viết
Hai con đường: Introduction online và Advanced offline tại HCMC.
03 — Vào cộng đồng
Một không gian vật lý ở HCMC và một đời sống quanh việc viết.
04 — Khám phá hệ sinh thái
Các nhánh -4GZ và những dự án cộng đồng quy mô lớn.
CTA   Mỗi ô là một liên kết: Why Writing · Courses · Community · Ecosystem.
### I.5 · Chuyển sang chương sau
FORM   Một dòng đơn, căn giữa hoặc trái, nhiều khoảng trắng — mở câu hỏi cho trang Why Writing.
COPY
Trước khi học cách viết, cần hiểu vì sao phải viết. →

## Trang II · Why Writing — “Hành vi người cuối cùng”
Vai trò: trái tim trí tuệ, trang dài nhất, nặng quote. · Mở: “Vì sao viết cứu được điều đó?” · Đóng: dẫn sang Courses. · Beat: khai sáng. · Độ dài: 7–8 màn, sáu movement.
### II.1 · Hero
FORM   Đề từ mono, headline serif lớn một-hai dòng, subhead. Khoảng trắng rộng, không ảnh.
COPY
WHY WRITING
Hành vi người cuối cùng mà máy không làm thay được.
Một lập luận về viết, tự sự, và chủ quyền giữa thời đại thông tin.
### II.2 · Movement 01 — Tự sự và cái tôi
FORM   Mỗi movement theo một khuôn: số thứ tự + nhãn mono, quote đề từ lớn, một-hai đoạn lập luận ngắn, một câu pull cỡ lớn. Xen khoảng trắng làm chỗ cho kí họa.
“Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.”
Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi.
— Ludwig Wittgenstein, Tractatus
COPY
01 · Ta là câu chuyện ta kể về mình
Con người không sống thành chuỗi khoảnh khắc rời rạc. Ta hiểu được mình qua việc kể lại mình thành chuyện — Ricoeur gọi đó là căn tính tự sự, MacIntyre gọi con người là sinh vật kể chuyện về bản chất.
Bạn là câu chuyện bạn kể về chính mình — với chính mình.
IMAGE   Slot kí họa dọc bên phải movement: một bàn tay đang viết, nét tối giản.
### II.3 · Movement 02 — Viết là kỉ luật
COPY
02 · Viết ép suy nghĩ thành hình thức
Trong mọi cách tạo tự sự, viết là cách khắc nghiệt nhất. Nó buộc thứ hỗn mang trong đầu trở nên mạch lạc, tuần tự, và chịu trách nhiệm trước một người đọc. Người viết đều không phản ứng theo bản năng; họ dựng. Mỗi đoạn phục vụ một vòng cung, mỗi câu trả giá cho chỗ nó chiếm.
Hỗn mang là nguyên liệu. Tự sự là tay nghề áp lên nó.
### II.4 · Movement 03 — Thời đại nhiễu loạn
FORM   Đây là nơi trục AI hiện đầy đủ. Có thể chèn một mảng thị giác diễn tả dòng văn bản máy (kí họa trừu tượng các dòng chữ chồng lớp).
COPY
03 · Khi chữ thành vô tận, nghĩa thành khan hiếm
Văn bản do máy sinh ra ở quy mô không giới hạn. Hệ quả kép: cái tôi bị dìm trong những tự sự nó không viết ra, và việc sản xuất chữ một cách cơ học mất sạch giá trị.
Walter Benjamin đã thấy trước điều này: thông tin đòi được kiểm chứng và tiêu thụ tức thì rồi vứt bỏ; còn truyện thì gìn giữ nghĩa và nhả ra chậm rãi qua thời gian. Một xã hội ngập thông tin có thể đồng thời nghèo truyện đến cùng cực.
NOTE   Diễn giải Benjamin (The Storyteller) bằng lời, không trích nguyên văn — tránh dùng bản dịch còn bản quyền.
### II.5 · Movement 04 — Khủng hoảng tự sự
COPY
04 · Câu chuyện bị thu về món hàng
Byung-Chul Han gọi đúng tên thời điểm của chúng ta: một cuộc khủng hoảng tự sự. Thông tin trôi vô tận, còn năng lực kể một câu chuyện thật — thứ neo con người vào nghĩa — thì teo lại. Phần lớn cái gọi là storytelling hôm nay chỉ là bán hàng đội lốt. Giành lại khả năng kể chuyện là giành lại một cái tôi.
NOTE   Diễn giải Han (Die Krise der Narration, 2023) bằng lời — sách còn bản quyền, không trích trực tiếp.
### II.6 · Movement 05 — Chủ quyền
“He who has a why to live for can bear almost any how.”
Người có một lẽ để sống có thể chịu đựng gần như mọi cách sống.
— Friedrich Nietzsche
COPY
05 · Tự sự là chủ quyền cuối cùng
Máy có thể viết câu thay bạn. Nó không thể sống đời bạn, và không thể quyết nghĩa của đời ấy. Năng lực tự viết tự sự của mình là phần chủ quyền máy không cầm được.
Làm chủ tự sự của mình là làm chủ trải nghiệm sống.
### II.7 · Movement 06 — Vì sao cộng đồng
“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”
Ta là điều ta làm đi làm lại. Vậy nên xuất sắc là một tập tính, không phải một hành vi đơn lẻ.
— Aristotle, Nicomachean Ethics
COPY
06 · Một kỉ luật cần một bầy
Aristotle gọi phẩm tính có được qua thực hành lặp lại đến mức thành bản năng là hexis. Hexis không nảy ra trong cô độc; nó cần một chuẩn mực và những người giữ chuẩn cùng mình. Người viết một mình tiến chậm và chông chênh; người viết giữa những đồng môn trung thực tiến nhanh hơn, vì ở đó có áp lực của chuẩn ngoài, ma sát của bất đồng, và tấm gương của một người khác đọc mình rồi nói thẳng trang viết thật sự đang nói gì.
CTA   Outline “Đây là điều chúng tôi dạy — xem dạy thế nào →” dẫn sang Courses.

## Trang III · Courses — The Practice
Vai trò: cơ chế chuyển hóa. · Mở: “Tôi thành người viết bằng cách nào?” · Đóng: dẫn sang Community. · Beat: phương pháp, quyết tâm. · Độ dài: 5 màn.
### III.1 · Hero
COPY
THE PRACTICE
Viết không đợi cảm hứng. Viết là một kỉ luật có thể học.
Không ai bước vào W4GZ mà không đi qua khóa nền. Đây không phải rào chắn — đây là việc đặt móng: một ngôn ngữ chung, một bộ nguyên tắc chung, một hiểu biết chung về thế nào là thực hành sáng tạo có kỉ luật.
### III.2 · Sáu trụ cột
FORM   Lưới sáu ô hoặc danh sách dọc chia hairline. Mỗi trụ: số mono, tên song ngữ, một câu cốt lõi. Đây là lời hứa chuyển hóa của khóa học.
COPY
01 · Narrative Structure — Cấu trúc tự sự
Áp trật tự tự sự lên hỗn mang để nghĩa hiện ra. Người viết dựng, không phản ứng.
02 · Honesty — Sự trung thực
Lời nguy hiểm nhất là lời ta tự dối mình. Viết thật trước khi viết hay.
03 · Conciseness — Sự cô đọng
Cắt gọn chính mình là một dạng trưởng thành. Cắt để buộc mình sáng rõ.
04 · Referencing — Sự dẫn chiếu
Đừng ngồi một mình nghĩ lại từ đầu. Độc đáo đến từ tổng hợp, không từ cô lập.
05 · Loop — Vòng lặp
Làm một lần là thử nghiệm. Thành tựu là khả năng lặp đều và giữ nhịp.
06 · Specificity & the Right Term — Sự cụ thể và chữ đúng
Tìm được đúng chữ là hoàn tất ý nghĩ. Ai chưa gọi tên chính xác một vật thì chưa hiểu nó.
### III.3 · Hai con đường
FORM   Hai card cạnh nhau: Introduction nền giấy, Advanced nền mực nghịch đậm (nổi bật vì sắp ra mắt và giới hạn chỗ). Mỗi card: nhãn trạng thái, tên serif, một dòng định vị, bảng thông số, một CTA.
COPY
Online · Self-paced
W4GZ Introduction
Nền tảng. Hơn 10 khóa đã dạy, nay đóng gói thành chương trình online tự học hoàn toàn.

[TABLE]
| Thông số | Introduction |
| Hình thức | 100% online, tự học theo nhịp riêng |
| Đối tượng | Người mới đến trình trung cấp |
| Ngôn ngữ | Tiếng Việt |
| Truy cập | Trọn đời, theo nhịp riêng |
[/TABLE]

CTA   Filled “Enroll online →”

COPY
Offline · HCMC · Sắp mở
W4GZ Advanced
Chuyên sâu. Trực tiếp. Số chỗ giới hạn. Dành cho người viết sẵn sàng đi xa hơn trang giấy.

[TABLE]
| Thông số | Advanced |
| Hình thức | Offline tại Hồ Chí Minh |
| Nhịp | Hằng tuần, theo cohort |
| Đối tượng | Người viết đã có nền tảng |
| Tuyển sinh | Giới hạn — xét đơn đăng ký |
[/TABLE]

CTA   Inverse (trên nền mực) “Apply for Advanced →”
NOTE   Cần bạn cung cấp: thời lượng cụ thể, học phí, lịch khai giảng, hình thức nộp đơn Advanced.
### III.4 · Từ người đã viết (Testimonials)
FORM   Lưới ba ô chia hairline. Mỗi ô: một câu trích serif nghiêng, dòng định danh ẩn danh bằng mono (theo Law III).
COPY
“…”
— Học viên · Khóa __ · Online
NOTE   Cần testimonial thật, đã ẩn danh hóa, từ 3 học viên. Giữ đúng định dạng bí danh.
CTA   Outline “Học là bước đầu — đời sống quanh việc viết mới là phần lớn →” dẫn sang Community.

## Trang IV · Community — The Living Community
Vai trò: bằng chứng kỉ luật viết tỏa vào toàn bộ đời sống. · Mở: “Một đời như thế trông ra sao?” · Đóng: dẫn sang Ecosystem. · Beat: khát khao. · Trang ảnh nặng nhất. · Độ dài: 6–7 màn.
### IV.1 · Hero
COPY
THE LIVING COMMUNITY
Viết là cột sống. Đây là cơ thể.
W4GZ không dừng ở một khóa học. Quanh việc viết, một đời sống đầy đủ được dựng lên — thân thể, tâm trí, giác quan, giọng nói, và những thứ tiếng khác.
### IV.2 · Không gian vật lý: W4GZ Hub
FORM   Lưới hai cột: trái là slot ảnh lớn (kí họa không gian Hub), phải là chữ. Địa chỉ bằng mono.
IMAGE   Kí họa Hub: góc phòng có sách, bàn dài, người ngồi viết. Nét mực tối giản.
COPY
Không gian vật lý · Hồ Chí Minh
W4GZ Hub
Một không gian dành riêng để viết, đọc, và gặp nhau tại HCMC. Buổi viết hằng tuần, giờ mở tự do, và những sự kiện định kì. Nơi cộng đồng gặp nhau ngoài đời thật.
CTA   Outline “Tìm Hub →”
NOTE   Cần địa chỉ Hub (hoặc cách thể hiện nếu chưa công khai), giờ mở cửa.
### IV.3 · Phát triển toàn diện — cơ thể mà cột sống giữ thẳng
FORM   Chuỗi khối luân phiên trái–phải, mỗi chiều một slot ảnh lớn và một đoạn ngắn kèm neo triết học. Đây là phần phô bày trọn vẹn chiều rộng của cộng đồng.
“For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.”
Sức mạnh của bầy nằm ở từng con sói, sức mạnh của con sói nằm ở cả bầy.
— Rudyard Kipling, The Law of the Jungle
COPY
Thân thể
Chạy bộ là một thực hành thường trực ở W4GZ; nhiều thành viên đã hoàn thành full và half marathon. Cùng đó là những chuyến trekking, cắm trại, leo núi. Thân thể là phương tiện đầu tiên ta có một thế giới — rèn nó là rèn chính nền của trải nghiệm (Merleau-Ponty).
IMAGE   Kí họa: dáng người chạy lúc rạng sáng; hoặc đoàn người trên sống núi.
COPY
Tâm trí
Cộng đồng chăm sóc sức khỏe tinh thần như một phần của thực hành, và rèn tư duy mạch lạc qua logic. Một đời có nghĩa là một đời chịu đựng được mọi cách sống (Frankl, nối tiếp Nietzsche).
IMAGE   Kí họa: một người ngồi tĩnh bên cửa sổ; nét thưa, nhiều khoảng trống.
COPY
Giác quan
Đọc thơ và làm thơ; vẽ kí họa. Hai thực hành mài lại cách nhìn và cách nghe — và chính kí họa của thành viên là ngôn ngữ thị giác của trang web này.
IMAGE   Kí họa: bàn tay phác họa; vài trang thơ chép tay.
COPY
Giọng nói
Kể chuyện trên sân khấu và làm podcast — đưa chữ rời trang giấy, thử nó trước một người nghe thật, trong một thân thể và một giọng.
IMAGE   Kí họa: một người kể chuyện dưới ngọn đèn, vài bóng người nghe.
COPY
Những thứ tiếng khác
Anh, Nhật, Trung. Mỗi ngôn ngữ mới là một thế giới mới — đúng như giới hạn ngôn ngữ là giới hạn thế giới.
IMAGE   Kí họa: vài hệ chữ đan nhau — Latin, kana, Hán.
### IV.4 · Cộng đồng online
FORM   Danh sách card dọc chia hairline; mỗi card có nhãn, tên kênh, một dòng mô tả, mũi tên ngoài.
COPY
Kênh chính
Discord
Nơi thực hành tiếp diễn giữa các buổi — chia sẻ, phản hồi, bàn luận.
Lưu trữ dài
Blog W4GZ
Bài viết cộng đồng và sản phẩm biên tập.
Cập nhật
Fanpage
Sự kiện, thông báo, lời mời mở.
NOTE   Cần link thật: Discord, Blog, (các) Fanpage.
CTA   Outline “Mỗi nhánh trên đã lớn thành một cộng đồng riêng →” dẫn sang Ecosystem.

## Trang V · Ecosystem — The -4GZ Ecosystem
Vai trò: cho thấy tầm vóc. · Mở: “Việc viết lớn tới đâu?” · Đóng: dẫn sang People. · Beat: tin tưởng. · Độ dài: 5 màn.
### V.1 · Hero
COPY
THE -4GZ ECOSYSTEM
Viết là gốc. Mọi thứ khác mọc lên từ đó.
“-4GZ” là một protocol, không phải một nhãn: cho thế hệ này, do thế hệ này dựng, giữ theo một chuẩn mực mà chính thế hệ này định nghĩa và bảo vệ.
### V.2 · -4GZ nghĩa là gì
COPY
Một chuẩn, nhiều địa hạt
Mỗi nhánh trong hệ sinh thái chia chung một nền: viết như một kỉ luật nghiêm túc, không phải thú vui. Chúng khác nhau ở hình thức, đối tượng, chất liệu — nhưng cùng kế thừa Chín Luật và Sáu Trụ Cột, cùng một đòi hỏi về sự nghiêm túc và tay nghề.
### V.3 · Các nhánh
FORM   Lưới card chia hairline, mỗi card: chỉ số mono, tên nhánh, một dòng mô tả Việt, nhãn trạng thái, mũi tên (trừ nhánh đang ấp).
COPY
storytelling4genz (S4GZ)
Kể chuyện trên sân khấu: giọng, thân thể, sự đồng-hiện-diện. Club Night và đêm flagship định kì.
poetry4genz
Đọc thơ, làm thơ, brainstorm và phương pháp riêng cho thơ.
english4genz · chinese4genz
Học và dùng tiếng Anh, tiếng Trung trong cộng đồng. (Tiếng Nhật trong lộ trình.)
podcast4genz
Đưa tư duy cộng đồng thành tiếng nói, phát theo nhịp đều.
workshop4genz
Các buổi thực hành chuyên đề, do thành viên dẫn dắt.
logic4genz
Rèn lập luận mạch lạc và tư duy phản biện.
dictionary4genz · privatedinner4genz
Một dự án ngôn ngữ chung, và những bữa tối riêng tư cho đối thoại sâu.
NOTE   Đã loại nhánh đầu tư khỏi nội dung công khai theo standing preference. Xác nhận nhánh nào đủ chín để hiện công khai, nhánh nào để ở trạng thái “đang ấp”.
### V.4 · Dự án lớn & fanpage (Building layer)
FORM   Khối điểm nhấn cho các sản phẩm quy mô lớn: sách, dự án xuất bản, các fanpage cộng đồng. Lưới ảnh + tên + một dòng.
COPY
Những gì cộng đồng đang dựng
[Mô tả các dự án lớn và fanpage — chờ nội dung từ bạn.]
NOTE   Cần danh sách dự án lớn và fanpage muốn nêu, kèm một dòng mô tả mỗi mục và link.
### V.5 · Hợp tác + chuyển chương
COPY
Muốn cùng dựng?
Nếu bạn là một tổ chức, một định chế, hay một người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ, hãy liên hệ.
CTA   Outline “Liên hệ →”  ·  và “Đằng sau mỗi nhánh là những con người — gặp họ →” dẫn sang People.

## Trang VI · People — softer Hall of Fame
Vai trò: kết tinh chiều con người. · Mở: “Ai đã đi con đường này?” · Đóng: dẫn sang Join. · Beat: đồng nhất. · Độ dài: 4–5 màn. · Ràng buộc lõi: Law III.
### VI.1 · Hero
COPY
THE PEOPLE
Những người đã cầm lấy cây bút.
Một sự tôn vinh, giữ ở tông trầm — qua tác phẩm, qua cột mốc, qua bí danh.
### VI.2 · Về sự ẩn danh
FORM   Một khối ngắn giải thích lựa chọn thiết kế, biến ràng buộc thành đạo đức. Đặt sớm để người đọc hiểu vì sao thấy kí họa thay vì ảnh.
COPY
Vì sao bạn thấy kí họa, không phải ảnh
Trong W4GZ, bảo vệ sự riêng tư là một luật. Sau khóa học, thành viên giữ ẩn danh. Đây là lý do trang này tôn vinh bằng chân dung vẽ và bằng bí danh — sự kín đáo ấy là một phần đạo đức của cộng đồng, không phải một giới hạn kĩ thuật.
### VI.3 · Những chân dung (softer hall of fame)
FORM   Lưới chân dung kí họa. Mỗi mục: bức vẽ, bí danh, một cột mốc hoặc một câu của chính người đó. Tông trầm, nhiều khoảng trắng, không xếp hạng.
COPY
M. — Khóa 12
Full marathon đầu tiên ở tuổi ba mươi tư.
H. — Khóa 9
“…” (một câu thơ hoặc một câu văn của thành viên)
L. — Khóa 7
Từ người chưa từng viết, thành người viết đều mỗi tuần.
IMAGE   Mỗi chân dung là một kí họa riêng. Phong cách nhất quán: mực, nét thưa, không tô bóng nặng.
NOTE   Cần dữ liệu thật đã ẩn danh: bí danh + một cột mốc/câu cho mỗi người, và kí họa tương ứng. Số lượng đề xuất: 6–9.
### VI.4 · Chữ thành viên cạnh kinh điển
FORM   Một khối đặt một câu của thành viên cạnh một câu kinh điển, cùng cỡ chữ — khẳng định bằng hình thức rằng cộng đồng này sản sinh chữ thật.
COPY
Một câu của Wittgenstein. Một câu của thành viên Khóa __. Cùng một khổ chữ.
CTA   Outline “Trang tiếp theo của cộng đồng này có thể mang tên bạn →” dẫn sang Join.

## Trang VII · Join — The Covenant
Vai trò: đóng arc, hội tụ hành động. · Mở: “Tôi bắt đầu từ đâu?” · Beat: cam kết. · Độ dài: 2–3 màn.
### VII.1 · Hero
COPY
THE COVENANT
Trang đầu tiên của bạn.
Tham gia W4GZ không phải mua một dịch vụ. Đó là nhận một chuẩn mực vào trong mình — một lời tuyên với chính mình, có cộng đồng làm chứng.
### VII.2 · Lời tuyên
FORM   Một khối văn bản trang trọng, căn trái hoặc giữa, khoảng trắng rộng, serif. Phỏng theo tinh thần Covenant trong Manifesto, viết lại thành lời web ngôi thứ nhất.
COPY
Tôi hiểu W4GZ là một chuẩn tôi gìn giữ, không phải một nhóm tôi gia nhập.
Tôi viết với sự trung thực và công bố với tay nghề. Tôi chỉ chia sẻ điều tôi thật sự đã ngẫm, và chỉ dựng điều tôi đủ sức giữ một cách nghiêm túc.
Tôi nhận phản hồi mà không phòng thủ, và đưa phản hồi cụ thể, hướng vào trang viết. Tôi chọn nhịp đều thay vì những đợt bùng cháy rồi tắt.
Tôi hiểu cộng đồng này là kỉ luật đầu tiên trong một kiến trúc lớn hơn — và khi giữ chuẩn ở đây, tôi đang đặt nền cho mọi thứ tiếp theo.
NOTE   Bản Covenant gốc trong Manifesto khá dài; bản web nên cô lại như trên. Xác nhận có muốn dùng nguyên văn đầy đủ ở đâu đó không.
### VII.3 · Hai cánh cửa
FORM   Hai khối hành động cân nhau, không thiên một bên (đúng yêu cầu hai mục tiêu ngang hàng).
COPY
Học viết
Bắt đầu với Introduction online, hoặc nộp đơn cho Advanced tại HCMC.
Vào cộng đồng
Bước vào đời sống quanh việc viết — Hub, các nhánh, và những người đang viết bên nhau.
CTA   Filled “Enroll / Apply →”  ·  Filled “Join the community →” (hai nút ngang hàng).
### VII.4 · Dòng đóng
FORM   Một dòng cuối, lớn, serif nghiêng — lặp lại motto và câu Commander's Intent của Manifesto như lời chốt.
COPY
Creates narratives worth living.
“Does this make us better writers, and more complete human beings — together?”

# PART 6 · Phụ lục
### Phụ lục A · Quote bank
Đặt theo hệ ở 2.6. Cột bản quyền ghi cách dùng an toàn.

[TABLE]
| Tác giả | Câu / ý | Trang | Bản quyền |
| Wittgenstein | Giới hạn ngôn ngữ là giới hạn thế giới | Why Writing 01 | Công cộng — trích nguyên |
| Joan Didion | We tell ourselves stories in order to live | Home I.2 | Trích ngắn, một lần |
| Walter Benjamin | Thông tin vs truyện (The Storyteller) | Why Writing 03 | Diễn giải, không trích |
| Byung-Chul Han | Khủng hoảng tự sự (2023) | Why Writing 04 | Diễn giải, không trích |
| Nietzsche | Người có một lẽ để sống… | Why Writing 05 | Công cộng — trích nguyên |
| Aristotle | Hexis; ta là điều ta làm lặp lại | Why Writing 06 | Trích ngắn (qua Manifesto) |
| Kipling | Sức mạnh của bầy và của sói | Community IV.3 | Công cộng — trích nguyên |
| Thành viên W4GZ | Câu trích ẩn danh | People · rải rác | Nội bộ, đã ẩn danh |
[/TABLE]

Ricoeur, MacIntyre, Merleau-Ponty, Frankl được dùng ở dạng khái niệm trong body, không trích trực tiếp.
### Phụ lục B · Glossary các nhánh -4GZ

[TABLE]
| Nhánh | Một dòng |
| writing4genz (W4GZ) | Cột sống: viết như kỉ luật nền tảng |
| storytelling4genz (S4GZ) | Kể chuyện trên sân khấu — giọng, thân thể, đồng-hiện-diện |
| poetry4genz | Đọc và làm thơ, phương pháp riêng cho thơ |
| english4genz / chinese4genz | Học và dùng tiếng Anh / Trung (Nhật trong lộ trình) |
| podcast4genz | Tư duy cộng đồng thành tiếng nói, phát đều |
| workshop4genz | Thực hành chuyên đề do thành viên dẫn |
| logic4genz | Lập luận mạch lạc, tư duy phản biện |
| dictionary4genz | Dự án ngôn ngữ chung |
| privatedinner4genz | Bữa tối riêng tư cho đối thoại sâu |
[/TABLE]

NOTE   Một nhánh thuộc địa hạt đầu tư đã được loại khỏi tài liệu công khai theo standing preference của bạn.
### Phụ lục C · Dữ liệu & quyết định cần bạn cung cấp
- Bộ số liệu hiển thị công khai ở hero Home (tổng đăng ký / số cá nhân / số cohort) — hoặc giữ “10+”.
- Thông số Courses: thời lượng, học phí, lịch khai giảng, cách nộp đơn Advanced.
- Ba testimonial đã ẩn danh hóa cho trang Courses.
- Địa chỉ và giờ mở của W4GZ Hub (hoặc cách thể hiện nếu chưa công khai).
- Link: Discord, Blog, (các) Fanpage.
- Danh sách dự án lớn & fanpage cho Ecosystem, kèm mô tả và link.
- Dữ liệu People đã ẩn danh: 6–9 bí danh + cột mốc/câu, và kí họa tương ứng.
- Xác nhận kho kí họa sẵn có hay cần sản xuất.
- Chốt cuối: bảy trang hay năm; tiếng Việt-primary hay song ngữ toggle đầy đủ.

Hết bản script v1. Sau khi bạn rà và chỉnh trực tiếp trên tài liệu này, tôi dựng wireframe chi tiết hoặc bắt tay code, tùy bạn chọn.