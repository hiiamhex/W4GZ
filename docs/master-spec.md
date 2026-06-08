W4GZ
WRITING4GENZ

Landing Page — Master Spec
Bản đặc tả hợp nhất toàn bộ mô tả landing page tới thời điểm hiện tại
Motto:  “Creates narratives worth living.”
Phiên bản: Master Spec v2 — hợp nhất và thay thế Script v1
Ba trụ thông điệp: Narrative · Writing · Community
Kiến trúc: 7 trang funnel + 1 trang deep-read độc lập (/power-of-narrative, ngoài nav) · Next.js + View Transitions + Lenis + GSAP
Cập nhật: xem Addendum v2.1 ở cuối (The Power of Narrative · Symbol System v2 · Wave motif · Auto-link)

### Mục lục
PART 0 · Cách đọc · những gì đã thay đổi so với v1
PART 1 · Luận đề (đã đào sâu): Narrative × Writing × Community
PART 2 · Hệ thống thiết kế · chuyển động · bộ biểu tượng
PART 3 · Thành phần toàn cục
PART 4 · Bản đồ meta-narrative
PART 5 · Kịch bản từng trang (I–VII), đã đào sâu
PART 6 · Phụ lục: quote bank · số liệu · glossary · dữ liệu cần cung cấp

# PART 0 · Cách đọc & những gì đã thay đổi
Tài liệu này hợp nhất toàn bộ mô tả landing page tới hiện tại và thay thế Script v1. Quy ước nhãn giữ nguyên, bổ sung hai nhãn mới cho yêu cầu mới.
### Quy ước nhãn
FORM   Bố cục, lưới, kiểu chữ, xử lý thị giác.
COPY   Chữ thật cho web (khung tô nền) — dùng trực tiếp.
ART   Tác phẩm/đồ họa cần xuất hiện, khớp nội dung (mới).
IMAGE   Kí họa/ảnh minh họa và art direction.
MOTION   Chuyển động, hiệu ứng, hành vi cuộn.
STAT   Số liệu dẫn chứng (mới) — cần xác minh trước khi publish.
CTA   Nút hành động và đích.
NOTE   Dữ liệu/quyết định cần Hex cung cấp, hoặc điểm chừa cho dev.
### Thay đổi lớn so với v1
- Con trỏ chuột trở lại bình thường (native). Bỏ custom cursor — nó gây nhiễu.
- Bổ sung lớp ART và một BỘ BIỂU TƯỢNG modular (PART 2) làm xương sống thị giác, để hiệu ứng diễn trên element biểu tượng chứ không chỉ trên chữ và trang.
- Hiệu ứng mới: dấu mực loang ngẫu nhiên khi click bất kì điểm nào trên trang, dùng chung từ vựng “ink node” với bộ biểu tượng.
- Mỗi trang được đào sâu thêm ít nhất một sector, dùng trích dẫn, câu chuyện nhỏ, số liệu, và liên kết với nhau.
- Nâng tầm sức mạnh của narrative; lập luận “Community is the answer”; định vị Ecosystem là chuẩn-hóa-để-lan-tỏa, không thụ động.
- Mở rộng Ecosystem: dự án chiến lược (W4GZ Living Dictionary, Library4GenZ), danh sách vertical cập nhật, và W4GZ Media Team.
- Một số phần v1 bị phá bỏ/di dời cho khớp narrative mới: các chiều phát triển toàn diện (chạy bộ, vẽ, cờ, sport…) chuyển từ Community sang Ecosystem dưới dạng vertical; Community tập trung vào lập luận + Hub + cơ chế kết nối.
- Làm rõ CỔNG VÀO DUY NHẤT: chỉ vào cộng đồng qua khóa học (Introduction + bài luận tốt nghiệp, hoặc Advanced); onboarding theo quý, bốn kì/năm. Bỏ mọi diễn đạt ngụ ý có thể vào cộng đồng mà không qua khóa học.
### Giả định đang áp dụng (đảo được)
- Bảy trang đầy đủ; tiếng Việt làm lớp tự sự, tiếng Anh ở nav/label/motto/tên vertical/CTA; quote để nguyên ngữ kèm dịch.
- Stack: Next.js App Router + View Transitions + Lenis + GSAP; WebGL chỉ ở vài điểm có chủ đích, đơn sắc.
- W4GZ Media Team đặt ở Ecosystem (lớp khuếch đại/Voice), cross-ref nhẹ ở People — xem lý giải tại V.4.

# PART 1 · Luận đề (đã đào sâu)
Toàn site phục vụ một luận đề ba trụ. Narrative là cái con người sống bên trong; Writing là kỉ luật để làm chủ nó; Community là điều kiện để kỉ luật ấy tồn tại và lan ra. Bỏ một trụ, hai trụ kia sụp.
“impose narrative order on chaos so that meaning becomes visible”
áp trật tự tự sự lên hỗn mang để nghĩa hiện ra
— W4GZ Manifesto · Pillar 1
### Trụ 1 — Narrative dựng nên con người và thế giới của họ
Một đời chỉ khả niệm dưới dạng tự sự (Ricoeur). Xã hội loài người được giữ với nhau bằng những câu chuyện chung — luật pháp, tiền tệ, quốc gia, tôn giáo đều là tự sự được nhiều người cùng tin (luận điểm trung tâm của Harari). Tự sự định hình cách một người chọn, cách họ hiểu quá khứ và hình dung tương lai — của chính họ và của thế giới quanh họ — và cách họ hiểu rồi biểu đạt chính mình.
### Trụ 2 — Writing là kỉ luật làm chủ tự sự
Trong mọi cách tạo tự sự, viết là cách khắc nghiệt và có trách nhiệm nhất: nó buộc thứ hỗn mang trong đầu thành mạch lạc, tuần tự, chịu trách nhiệm trước người đọc. Làm chủ được việc viết là làm chủ được tự sự của mình; làm chủ tự sự là làm chủ trải nghiệm sống.
### Trụ 3 — Community là điều kiện sống còn của kỉ luật ấy
Ngôn ngữ là sản phẩm chung; nghĩa được kiến tạo tập thể; ký ức là tập thể. Một người viết cô độc tiến chậm và dễ bỏ cuộc. Năng lực viết cần một cộng đồng nuôi dưỡng — chuẩn mực, ma sát, và feedback loop. Đây là vì sao “Community is the answer”.
### Tầng civilizational — vì sao điều này khẩn cấp ở Việt Nam, lúc này
Việt Nam thuộc nhóm dùng internet đông nhất thế giới nhưng hạ tầng chữ viết và tri thức còn mỏng. Đây là một lỗ hổng cấu trúc khiến tự sự của thế hệ này khó được viết tốt. W4GZ tự định vị là một tập hợp leader hành động vào cấu trúc đó, không xem mình là thực thể thụ động — để “creates narratives worth living” một cách triệt để.
### Một cổng duy nhất vào cộng đồng
Có đúng một cổng để trở thành một phần của W4GZ, và sẽ luôn như vậy: mọi thành viên đi qua khóa học viết trước khi vào cộng đồng. Đây là điều giữ cho W4GZ là cộng đồng của những người biết viết.
- Lối A — hoàn tất W4GZ Introduction và nộp bài luận tốt nghiệp, rồi được duyệt theo kì onboarding của cộng đồng.
- Lối B — hoàn tất W4GZ Advanced.
- Người đủ điều kiện qua một trong hai lối được onboarding theo quý — bốn kì mỗi năm. Ngoài hai lối này, không có đường nào khác vào W4GZ.

# PART 2 · Hệ thống thiết kế, chuyển động & bộ biểu tượng
Thương hiệu: giấy trắng mực đen, có lớp công nghệ, phá cách Gen Z ở cấu trúc và hiệu ứng. Đen trắng tuyệt đối; phá cách ở lưới, typography, và bộ biểu tượng động — không ở màu.
### 2.1 · Bảng màu & kiểu chữ

[TABLE]
| Vai trò | HEX | Dùng cho |
| Mực | #141414 | Chữ chính, nền nghịch |
| Giấy | #F4F1EB | Nền chủ đạo |
| Giấy đậm | #EDE9E0 | Nền phụ, hover, card |
| Xám chữ | #7A7872 | Body phụ, caption |
| Hairline | rgba(20,20,20,.12) | Đường kẻ 0.5px |
[/TABLE]


[TABLE]
| Vai trò | Font | Dùng cho |
| Display/tự sự | Cormorant Garamond (italic) | Headline lớn, quote |
| Body | Outfit (variable) | Đoạn văn, nội dung đọc |
| Mono/kỹ thuật | DM Mono | Label, số, nav, microcopy |
[/TABLE]

### 2.2 · Con trỏ chuột
MOTION   Con trỏ TRỞ LẠI BÌNH THƯỜNG (native cursor). Bỏ hoàn toàn custom cursor đã đề xuất trước đây — gây nhiễu. Chỉ giữ pointer mặc định; hover state thể hiện qua chính element (đổi nền, giãn chữ), không qua con trỏ.
### 2.3 · Hiệu ứng dấu mực loang khi click
FORM   Click vào bất kì điểm nào trên trang sinh một vệt mực loang tại đúng tọa độ con trỏ. Hiệu ứng dùng chung từ vựng “ink node” với bộ biểu tượng (mục 2.6) — mỗi cú click như một nét mực đặt lên giấy.
- Ngẫu nhiên để trông thật: mỗi vệt khác nhau về kích thước (ví dụ 24–80px), số tia/giọt bắn (3–7), góc lệch, độ mờ, và một vi-xoay; có thể randomize qua một seed theo thời điểm click.
- Hình thái: một blob trung tâm bleed nhanh rồi mờ dần, kèm vài giọt vệ tinh nhỏ bắn ra theo hướng ngẫu nhiên; bo nhữu cơ (không tròn hoàn hảo) bằng feTurbulence/displacement hoặc path méo ngẫu nhiên.
- Đơn sắc mực #141414, opacity thấp (~.12–.22) để không che nội dung; tự dọn sau ~600–900ms.
- Hiệu năng: pool tối đa N vệt đồng thời (ví dụ 6), tái dùng node, render trên một canvas/overlay tách biệt; tắt khi prefers-reduced-motion hoặc lite-mode.
- Loại trừ: không kích hoạt khi click vào nút/link/input (tránh nuốt tương tác); chỉ trên vùng nền.
IMAGE   Tham chiếu thị giác: vệt mực tàu loang trên giấy dó — không phải splash màu nước sặc sỡ.
### 2.4 · Hệ chuyển động (kế thừa, bỏ con trỏ)
Luận đề chuyển động: “trang web như một bản thảo sống”. Công nghệ hiện ra như bộ máy của việc viết — sắp chữ, giải mã monospace, mực trên giấy, lưới tái hợp — không phải WebGL generic.
- Preloader một lần/session, skippable: counter 0→100 (DM Mono) trong khi wordmark W4GZ lắp ráp từ glyph rải rác và khóa lại như forme chữ (GSAP + SplitText).
- Route morph: View Transitions API — số chương / section label / một headline trụ morph vị trí+cỡ qua route (GSAP Flip); phủ lớp “ink wipe / column collapse” tách giấy theo hairline rồi tái hợp.
- Scroll choreography (Lenis): velocity điều khiển trục weight/nghiêng của Outfit; Why-Writing pin + scrub, quote tự giải mã/sắp chữ theo cuộn (ScrollTrigger + ScrambleText); panel horizontal scroll cho Ecosystem/People; ghost words parallax, nét tự vẽ bằng stroke-dashoffset.
- Kí họa và biểu tượng “ink in” bằng stroke-draw như đang được vẽ; node bleed như mực.
- Hero kinetic type: mask-reveal theo dòng + một-lần decode monospace cho từ khóa.
- WebGL có chủ đích, đơn sắc: paper-grain + ink-diffusion sau hero, hoặc displacement xám + halftone giữa các kí họa. OGL (nhẹ) ưu tiên.
NOTE   Guardrails bắt buộc: prefers-reduced-motion + toggle “giảm chuyển động” tắt cứng Lenis/scrub/decode/morph/WebGL về cut tĩnh; lite-mode trên mobile/low-power/Save-Data; nội dung SSR độc lập, motion chỉ là progressive enhancement; Enroll luôn chạm được.
### 2.5 · Art direction — tác phẩm khớp nội dung
Giấy trắng mực đen vẫn là nền, nhưng art phải hiện diện và khớp từng phần nội dung. Ba nguồn art, cùng một ngôn ngữ mực-trên-giấy:
- Bộ biểu tượng modular (2.6) — ngôn ngữ thị giác chủ đạo, hiện diện ở mọi trang và là nơi diễn các hiệu ứng đồ họa.
- Kí họa thành viên — chân dung và minh họa nội dung (Hub, các hoạt động, People). Đồng thời phô bày chính chiều “drawing4genz”.
- Đồ họa khái niệm theo từng sector — ví dụ: dòng văn bản máy chồng lớp (Why Writing · thời đại AI), các vòng tròn quan hệ đứt gãy rồi nối lại (Community), bản đồ nhánh -4GZ (Ecosystem). Mỗi slot art có mô tả riêng trong PART 5.
ART   Nguyên tắc: mỗi art phải minh họa đúng luận điểm tại chỗ nó đứng, không trang trí chung chung. Nếu chưa vẽ được, dùng biểu tượng tạm + mô tả (đã đánh dấu).
### 2.6 · BỘ BIỂU TƯỢNG W4GZ (modular)
Một hệ ký hiệu dựng từ hai nguyên tử: NÉT (line = narrative — đường đi xuyên qua, câu chuyện tiếp tục ngoài khung) và NODE (ink dot = community — nơi các nét gặp nhau). Master mark là một đường liền duy nhất luồn qua các node; nó tách được thành các module, mỗi module đại diện một trang, vẫn nhận diện được khi tách lẻ nhưng có đầu nét mở cho thấy chỗ nối lại. Yếu tố liên kết — đường luồn (narrative) và node chung (community) — chính là thông điệp.

Bộ biểu tượng W4GZ (bản specimen tạm để designer tinh chỉnh) — atoms, modules theo trang, the weave, master mark.
### Ánh xạ module → trang

[TABLE]
| Module | Trang | Ý nghĩa hình |
| Writing | Why Writing | Nét ngòi bút buông xuống một node mực — ý nghĩ thành dấu |
| Community | Community | Nhiều nét hội tụ về một node chung — đồng-hiện-diện |
| Ecosystem | Ecosystem | Một thân nhánh ra nhiều đầu mở — cột sống nuôi cơ thể |
| People | People | Hàng nét cao thấp nối nhau ở chân — cá nhân trong một bầy |
| Hub | Community · Hub | Khung không gian có cửa mở, nét hướng vào tâm |
| Media Team | Ecosystem · Media | Node phát các cung sóng — tiếng nói lan ra |
[/TABLE]

MOTION   Biểu tượng là sân khấu hiệu ứng: nét draw-on khi vào khung nhìn; node bleed như mực (chung từ vựng với click ink-blot); khi chuyển trang, các module tách khỏi master rồi đường luồn re-weave để ráp lại — đây là cách phô diễn “narrative nối cộng đồng” bằng đồ họa, không chỉ bằng chữ. Pattern tile được dùng làm hoa văn nền mảnh ở footer/hero.
NOTE   Đây là specimen tạm. Cần designer chuẩn hóa lưới, độ dày nét, bo góc, và xuất bộ SVG sản xuất (kèm biến thể animate). File nguồn: W4GZ_Symbol_System.svg.
### 2.7 · Hệ kí họa & hệ trích dẫn
FORM   Kí họa: SketchSlot khung trống có chủ đích (nền giấy đậm, hairline, đúng tỉ lệ) + caption mono mô tả bức cần vẽ, đến khi có asset thật. Quote: nguyên ngữ serif nghiêng lớn + bản dịch xám + tên tác giả mono; đặt làm đề từ mở mỗi chương. Quote bank ở Phụ lục.

# PART 3 · Thành phần toàn cục
### 3.1 · Nav
FORM   Cố định, nền giấy mờ, hairline dưới; wordmark W4GZ trái; mục giữa; nút Enroll phải luôn hiện (lối tắt); thu gọn thành menu trên mobile.
COPY
W4GZ
Home · Why Writing · Courses · Community · Ecosystem · People · Join
Nút phải: Enroll →
### 3.2 · Footer
COPY
Writing4GenZ
© 2026 W4GZ · The -4GZ Ecosystem · Ho Chi Minh City · Est. 2022
### 3.3 · CTA & đề từ
- Filled (mực đặc): hành động chính. Outline: phụ. Inverse: trong card tối.
- Mỗi trang (trừ Home) mở bằng một quote đề từ — sợi chỉ nối bảy chương.
### 3.4 · Lớp canvas biểu tượng + mực
FORM   Một lớp overlay/canvas toàn cục (hoist ở root layout, không unmount khi đổi route) lo: dấu mực loang khi click, và animation re-weave của bộ biểu tượng khi chuyển trang. Chạy chung với một instance Lenis duy nhất.

# PART 4 · Bản đồ meta-narrative
Người truy cập là nhân vật chính. Bảy chương, một arc. Câu xuyên suốt:
Một người bước vào giữa nhiễu loạn thông tin, hiểu ra vì sao narrative là sống còn, thấy được một đời được tự viết cùng người khác trông ra sao, và cầm lấy cây bút cho trang đầu tiên của mình.

[TABLE]
| Ch. | Trang | Câu hỏi nó mở | Beat |
| I | Home | Điều gì đang xảy ra với tôi? | Nhận diện |
| II | Why Writing | Vì sao narrative & viết là sống còn? | Khai sáng |
| III | Courses | Tôi thành người viết bằng cách nào? | Phương pháp |
| IV | Community | Vì sao một mình là không đủ? | Thuộc về |
| V | Ecosystem | Sức mạnh ấy lớn và lan tới đâu? | Tầm vóc |
| VI | People | Ai đã đi con đường này? | Đồng nhất |
| VII | Join | Tôi bắt đầu từ đâu? | Cam kết |
[/TABLE]


# PART 5 · Kịch bản từng trang (đã đào sâu)
## Trang I · Home
Hook. Mở “Điều gì đang xảy ra với tôi?”. Gieo ba trụ Narrative · Writing · Community. Đẩy sang Why Writing.
### I.1 · Hero
FORM   Hai cột chia hairline dọc, cao gần trọn màn; nội dung dồn đáy. Trái: đề từ mono, headline serif khổng lồ, subhead, hai CTA. Phải: ticker + bốn ô số liệu. Lớp biểu tượng mờ ở nền.
COPY
CREATES NARRATIVES WORTH LIVING
Một đời là một văn bản.
Câu hỏi duy nhất: ai cầm bút?
Mỗi ngày, thuật toán viết hộ bạn hàng nghìn câu — điều cần xem, cần muốn, cần sợ. W4GZ trả cây bút về tay người viết, và cho họ một cộng đồng để viết tiếp.
CTA   Filled “Bắt đầu với Introduction →” · Outline “Con đường vào cộng đồng →”
MOTION   Hero reveal theo bậc; ticker chạy; số liệu đếm nhẹ. Master mark biểu tượng draw-on rất mảnh ở góc.
### I.2 · Ba trụ (sector gieo luận đề)
FORM   Ba khối ngang chia hairline, mỗi khối gắn một module biểu tượng (Writing · Community), liên kết bằng đường luồn chạy qua cả ba — phô diễn the weave ngay tại Home.
COPY
Narrative — bạn là câu chuyện bạn kể về mình.
Writing — kỉ luật để tự viết câu chuyện ấy.
Community — điều kiện để giữ và lan kỉ luật đó.
Bỏ một trụ, hai trụ kia sụp. W4GZ dựng cả ba.
### I.3 · Bốn cửa vào
FORM   Lưới bốn ô chia hairline, hover đổi nền, mỗi ô số mono + tiêu đề serif + một dòng + mũi tên.
COPY
01 — Vì sao Viết
Lập luận về narrative, viết, và chủ quyền trong thời đại AI.
02 — Học viết
Introduction online và Advanced offline — cổng duy nhất vào cộng đồng.
03 — Cộng đồng
Vì sao một mình là không đủ, và bước vào bằng cách nào.
04 — Hệ sinh thái
Các nhánh -4GZ và những dự án chiến lược cho người Việt.
CTA   Mỗi ô liên kết tới trang tương ứng. Dòng chuyển: “Trước khi học cách viết, cần hiểu vì sao phải viết. →”

## Trang II · Why Writing
Trái tim trí tuệ. Tám movement. Đã đào sâu theo các luận điểm nâng tầm narrative + thời đại AI + viết như kết nối. Beat: khai sáng.
### II.1 · Hero
COPY
WHY WRITING
Hành vi người cuối cùng mà máy không làm thay được.
Một lập luận về narrative, viết, và chủ quyền giữa thời đại thông tin.
### II.2 · 01 — Tự sự là cách một cái tôi trở thành thật
“We tell ourselves stories in order to live.”
Ta tự kể chuyện để sống.
— Joan Didion
COPY
Con người không sống thành chuỗi khoảnh khắc rời rạc. Ta hiểu được mình qua việc kể lại mình thành chuyện — Ricoeur gọi đó là căn tính tự sự, MacIntyre gọi con người là sinh vật kể chuyện về bản chất. Cách bạn kể về quá khứ quyết định bạn mang gì vào hiện tại; câu chuyện bạn tin về tương lai quyết định bạn dám làm gì hôm nay.
Bạn là câu chuyện bạn kể về chính mình — với chính mình.
IMAGE   Kí họa dọc: một bàn tay đang viết, nét tối giản.
### II.3 · 02 — Tự sự dựng nên cả thế giới chung
COPY
Tự sự không dừng ở cá nhân. Xã hội loài người được giữ với nhau bằng những câu chuyện nhiều người cùng tin: luật pháp, tiền tệ, quốc gia, niềm tin chung đều là tự sự. Một nền văn minh là một tập hợp narrative đủ mạnh để hàng triệu người phối hợp. Ai nắm được narrative chung nắm được hướng đi của tập thể.
Lịch sử loài người là cuộc cạnh tranh giữa các câu chuyện.
NOTE   Diễn giải luận điểm “shared fictions” của Yuval Noah Harari (Sapiens) — paraphrase, không trích nguyên văn (sách còn bản quyền).
ART   Đồ họa khái niệm: nhiều nét cá nhân hội tụ thành một đường lớn chung — dùng module Community phóng to.
### II.4 · 03 — Viết là kỉ luật khiến tự sự có trách nhiệm
“Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.”
Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi.
— Ludwig Wittgenstein, Tractatus
COPY
Nói thì trôi qua; viết thì ở lại và bị soi. Viết buộc thứ hỗn mang trong đầu thành mạch lạc, tuần tự, chịu trách nhiệm trước một người đọc. Mở rộng vốn chữ là mở rộng thế giới có thể nghĩ tới — không có chữ cho một điều, ta khó cầm nắm điều đó.
### II.5 · 04 — Mọi công cụ khuếch đại lời nói đều in dấu lên ta
COPY
Khi chữ viết xuất hiện, con người tạo được những tự sự mạnh hơn bao giờ hết — và cũng chịu ảnh hưởng mạnh hơn bởi tự sự người khác viết ra, từ khi ta còn chưa hiểu gì. Phần lớn câu chuyện ta mang theo về bản thân và thế giới được cài vào lúc ta chưa kịp lựa chọn.
Trưởng thành là giành lại quyền kể câu chuyện của mình — và chọn câu chuyện lớn đáng sống.
NOTE   Có thể neo Walter Ong (orality/literacy) hoặc Plato (Phaedrus) — dạng khái niệm, không trích.
### II.6 · 05 — Khi chữ thành vô tận, nghĩa thành khan hiếm
COPY
Máy giờ sinh văn bản ở quy mô không giới hạn. Hệ quả kép: cái tôi bị dìm trong những tự sự nó không viết ra, và việc sản xuất chữ một cách cơ học mất sạch giá trị. Walter Benjamin đã thấy trước: thông tin đòi kiểm chứng và tiêu thụ tức thì rồi vứt bỏ; truyện thì gìn giữ nghĩa và nhả ra chậm rãi. Một xã hội ngập thông tin có thể đồng thời nghèo truyện đến cùng cực.
STAT   Việt Nam: ~80 triệu người dùng internet, ~78.8% dân số, thuộc nhóm cao nhất thế giới (DataReportal/We Are Social, 2025).
ART   Đồ họa khái niệm: dòng văn bản máy chồng lớp, dày đặc, trôi nhanh — tương phản với một dòng chữ tĩnh được viết tay.
### II.7 · 06 — Khủng hoảng tự sự: nhận thức narrative thành sống còn
COPY
Byung-Chul Han gọi đúng tên thời điểm này: một cuộc khủng hoảng tự sự. Thông tin trôi vô tận; năng lực kể một câu chuyện thật — thứ neo con người vào nghĩa — thì teo lại. Trong thời đại AI, nhận thức về narrative (ai đang kể, kể gì, vì mục đích gì) không còn là kĩ năng tùy chọn; nó là điều kiện để không bị dắt mũi.
NOTE   Diễn giải Han (Die Krise der Narration, 2023) — paraphrase.
### II.8 · 07 — Thời đại viết-là-giao-diện: viết nghiêm chỉnh là lối thoát
COPY
Hôm nay con người giao tiếp với nhau và với máy móc chủ yếu bằng chữ viết — prompt, tin nhắn, tài liệu. Khả năng hiểu sâu và dùng chữ một cách nghiêm chỉnh là cách thoát khỏi cảm giác bất an trong những tự sự cũ vốn không còn vừa với thực tại mới. Ai viết rõ thì nghĩ rõ, và sống bớt hoang mang.
### II.9 · 08 — Tự sự chung là cách con người chạm tới nhau → cần một bầy
“For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.”
Sức mạnh của bầy nằm ở từng con sói, sức mạnh của con sói nằm ở cả bầy.
— Rudyard Kipling
COPY
Ngôn ngữ viết và những tự sự chung là phương tiện hiệu quả nhất để con người hiểu chính mình và hiểu nhau. Nhưng viết là một kỉ luật, và kỉ luật cần một cộng đồng để sống. Đó là chương tiếp theo.
CTA   Filled “Học cách viết →” (Courses) · Outline “Vì sao cần một cộng đồng →” (Community)

## Trang III · Courses
Cơ chế chuyển hóa và cổng vào duy nhất. Beat: phương pháp.
### III.1 · Hero
COPY
THE PRACTICE
Viết không đợi cảm hứng. Viết là một kỉ luật có thể học.
Không ai bước vào W4GZ mà không đi qua khóa nền: một ngôn ngữ chung, một bộ nguyên tắc chung, một hiểu biết chung về thực hành sáng tạo có kỉ luật.
### III.2 · Sáu trụ cột
FORM   Lưới sáu ô / danh sách dọc chia hairline; mỗi trụ: số mono, tên song ngữ, một câu cốt lõi.
COPY
01 Narrative Structure — Cấu trúc tự sự
Áp trật tự tự sự lên hỗn mang để nghĩa hiện ra.
02 Honesty — Sự trung thực
Lời nguy hiểm nhất là lời ta tự dối mình.
03 Conciseness — Sự cô đọng
Cắt gọn chính mình là một dạng trưởng thành.
04 Referencing — Sự dẫn chiếu
Độc đáo đến từ tổng hợp, không từ cô lập.
05 Loop — Vòng lặp
Làm một lần là thử nghiệm; lặp đều mới là thành tựu.
06 Specificity & the Right Term — Cụ thể và chữ đúng
Tìm được đúng chữ là hoàn tất ý nghĩ.
### III.3 · Vì sao W4GZ dạy theo cohort
COPY
Một khóa quay sẵn dạy bạn thông tin. Một cohort dạy bạn thành người viết.
Viết tiến bộ nhờ ma sát: có người đọc bạn và nói thẳng trang viết thật sự đang nói gì; có một nhịp chung buộc bạn không bỏ cuộc; có những người cùng vật lộn để bạn soi mình vào. Đó là thứ video không cho được, và là lý do W4GZ dạy theo cohort và cộng đồng.
### III.4 · Cổng duy nhất vào W4GZ
COPY
Một cổng. Luôn luôn.
Để trở thành một phần của W4GZ, bắt buộc đi qua khóa học viết. Đây là cổng duy nhất, và sẽ luôn như vậy — để W4GZ là cộng đồng của những người biết viết.
Lối A — W4GZ Introduction + bài luận tốt nghiệp
Hoàn tất khóa Introduction và nộp bài luận tốt nghiệp; được duyệt theo kì onboarding của cộng đồng.
Lối B — W4GZ Advanced
Hoàn tất khóa Advanced.
Cộng đồng onboarding theo quý — bốn kì mỗi năm. Ngoài hai lối trên, không có đường nào khác vào W4GZ.
NOTE   Cần: lịch bốn kì onboarding/năm; tiêu chí bài luận tốt nghiệp; cơ chế xét duyệt Advanced.
### III.5 · Hai lối qua cổng
FORM   Hai card: Introduction (giấy), Advanced (mực nghịch) — hai lối qua cùng một cổng. Mỗi card: nhãn trạng thái, tên serif, một dòng định vị, bảng thông số, CTA.
COPY
Online · Self-paced
W4GZ Introduction
Nền tảng. Hơn 10 khóa đã dạy, nay đóng gói thành chương trình online tự học hoàn toàn.

[TABLE]
| Thông số | Introduction |
| Hình thức | 100% online, tự học |
| Đối tượng | Người mới → trung cấp |
| Ngôn ngữ | Tiếng Việt |
| Truy cập | Trọn đời |
| Tốt nghiệp | Bài luận tốt nghiệp (bắt buộc) |
| Vai trò | Lối A vào cộng đồng — duyệt theo kì onboarding |
[/TABLE]

CTA   Filled “Enroll online →”
COPY
Offline · HCMC · Sắp mở
W4GZ Advanced
Chuyên sâu, trực tiếp, số chỗ giới hạn — cho người viết sẵn sàng đi xa hơn trang giấy.

[TABLE]
| Thông số | Advanced |
| Hình thức | Offline tại HCMC |
| Nhịp | Hằng tuần, theo cohort |
| Đối tượng | Đã có nền tảng |
| Tuyển sinh | Xét đơn |
| Vai trò | Lối B vào cộng đồng |
[/TABLE]

CTA   Inverse “Apply for Advanced →”
NOTE   Cần: thời lượng, học phí, lịch khai giảng, cách nộp đơn Advanced; 3 testimonial đã ẩn danh.
### III.6 · Từ người đã viết
FORM   Lưới ba ô chia hairline; câu trích serif nghiêng + định danh ẩn danh mono (Law III).
COPY
“…”
— Học viên · Khóa __ · Online
CTA   Outline “Học là bước đầu — vì sao một mình là không đủ →” (Community)

## Trang IV · Community — “Community is the answer”
Đào sâu mạnh. Lập luận cộng đồng gắn với narrative & writing, số liệu cô đơn, feedback loop, gieo lại cho vòng tròn khác, Hub chống disconnect. Beat: thuộc về.
### IV.1 · Hero
COPY
COMMUNITY
Viết một mình là không đủ.
Vì ngôn ngữ là sản phẩm chung, ký ức là tập thể, và năng lực viết chỉ sống được khi có người nuôi nó cùng bạn. Cộng đồng chính là lời đáp.
### IV.2 · 01 — Ngôn ngữ và nghĩa vốn là của chung
“For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.”
Sức mạnh của bầy nằm ở từng con sói, và của con sói nằm ở cả bầy.
— Rudyard Kipling
COPY
Không có ngôn ngữ riêng tư. Một chữ chỉ có nghĩa vì có một cộng đồng cùng dùng nó (luận điểm của Wittgenstein). Ký ức và ý nghĩa được kiến tạo tập thể — ta nhớ và hiểu trong một “chúng ta”, không trong chân không. Viết, tận cùng, là một hành vi hướng tới người khác.
NOTE   Neo: Wittgenstein (private language argument); Maurice Halbwachs (ký ức tập thể) — dạng khái niệm.
### IV.3 · 02 — Đứt gãy hiện đại: vì sao người ta bỏ viết và bỏ nghĩa
COPY
Con người hiện đại khó viết không chỉ vì thiếu động lực cá nhân. Họ thiếu một cộng đồng nuôi dưỡng năng lực ấy một cách có ý nghĩa. Các vòng tròn quan hệ đang phân mảnh và đứt gãy đẩy việc viết — và việc tìm nghĩa — xuống tầng ẩn, rồi biến mất khỏi thực hành được củng cố hằng ngày.
STAT   Cô đơn kéo dài gây hại cho sức khỏe tương đương hút tới 15 điếu thuốc mỗi ngày; khoảng một nửa người trưởng thành (ở Mỹ) trải qua cô đơn (US Surgeon General, 2023).
STAT   Riêng nhóm 15–24 tuổi: thời gian gặp bạn trực tiếp giảm khoảng 70% trong gần hai thập niên (dẫn trong báo cáo US Surgeon General, 2023).
ART   Đồ họa khái niệm: nhiều vòng tròn quan hệ rời rạc, đứt nét — rồi một đường luồn (module Community) nối chúng lại.
### IV.4 · 03 — Vòng tròn bạn bước vào, qua một cổng
COPY
W4GZ là vòng tròn người viết bước vào để xây câu chuyện ý nghĩa của mình — cùng người khác, một cách bền vững. Bạn bước vào qua một cổng duy nhất: khóa học viết. Bên trong có chuẩn mực để noi theo, ma sát để mài, và một feedback loop để mỗi vòng viết tốt hơn vòng trước.
Một mình, bạn viết bằng ý chí. Trong một bầy, bạn viết bằng một hệ.
NOTE   Liên kết tới Courses — cổng vào (Introduction + bài luận tốt nghiệp, hoặc Advanced).
IMAGE   Kí họa: vài người ngồi quanh một bàn dài, trang viết trải ra giữa — đọc và phản hồi cho nhau.
### IV.5 · 04 — Rồi bạn học cách gieo lại nó
COPY
Giá trị không dừng ở W4GZ. Khi đã sống trong một feedback loop lành mạnh, bạn biết cách tái tạo nó cho các vòng tròn quan hệ khác của mình — gia đình, đồng nghiệp, bạn bè. Vốn xã hội nhân lên: bạn mang chuẩn mực và sự nuôi dưỡng ra ngoài, thay vì giữ riêng.
### IV.6 · 05 — W4GZ Hub: không gian buộc người ta gặp nhau thật
FORM   Lưới hai cột: trái slot kí họa lớn (Hub), phải chữ; địa chỉ mono.
IMAGE   Kí họa Hub: góc phòng có sách, bàn dài, người ngồi viết và trò chuyện.
COPY
Một không gian văn hóa sẽ được nhân rộng
W4GZ Hub là không gian vật lý ở HCMC, thiết kế để tác động tới con người theo cách truyền thống — buộc người ta đối mặt, gặp gỡ, va chạm, và cư xử dựa trên đó. Bên trong là vô số hoạt động nâng cao tri thức, có chiều sâu, được thiết kế bài bản, trong một không gian chung đòi hỏi nuôi dưỡng liên tục.
Vui trên mạng nhưng bối rối khi đối mặt người khác — Hub tồn tại để chữa đúng vết nứt đó.
CTA   Outline “Tìm Hub →”. Dòng chuyển: “Hãy xem cộng đồng này tạo ra gì →” (Ecosystem)
### IV.7 · Cộng đồng online
COPY
Discord — không gian thành viên, thực hành tiếp diễn giữa các buổi.
Blog W4GZ — lưu trữ dài, sản phẩm biên tập.
Fanpage — sự kiện, thông báo, lời mời mở.
Discord dành cho thành viên đã qua cổng; Blog và Fanpage là cửa sổ mở cho công chúng.
NOTE   Cần link thật: Discord (thành viên), Blog, (các) Fanpage.

## Trang V · Ecosystem — The -4GZ Ecosystem
Đào sâu. Sự giàu có = minh chứng sức mạnh cộng đồng; mục tiêu là trao quyền + vốn xã hội + chuẩn hóa để lan tỏa; dự án chiến lược; Media Team. Beat: tầm vóc.
### V.1 · Hero
COPY
THE -4GZ ECOSYSTEM
Viết là gốc. Mọi thứ khác mọc lên từ đó.
“-4GZ” là một protocol, không phải một nhãn: cho thế hệ này, do thế hệ này dựng, giữ theo một chuẩn mà chính thế hệ này định nghĩa và bảo vệ.
### V.2 · 01 — Sự giàu có chính là bằng chứng
COPY
Bề rộng các hoạt động -4GZ là minh chứng sống cho sức mạnh của cộng đồng vừa nói tới: một cộng đồng viết khỏe thì sinh ra đời sống văn hóa phong phú quanh nó. Tinh thần các nhánh: thân mật, cozy, tăng vốn văn hóa và kết nối, lành mạnh và văn minh, đề cao kiến thức và sự thạo nghề.
FORM   Lưới card chia hairline; mỗi card: tên nhánh, một dòng Việt, nhãn trạng thái, mũi tên; module Ecosystem (nhánh) làm motif.
COPY
storytelling4genz · poetry4genz
Kể chuyện trên sân khấu; đọc và làm thơ.
english4genz · japanese4genz · chinese4genz
Học và dùng các thứ tiếng — mỗi ngôn ngữ là một thế giới.
workshop4genz · logic4genz
Thực hành chuyên đề do thành viên dẫn; rèn lập luận mạch lạc.
drawing4genz · chess4genz · gaming4genz
Vẽ, cờ, game — mài giác quan, tư duy và sự nhập cuộc.
weekend4genz
Thể thao nói chung — running, trekking, hiking; thân thể là nền của trải nghiệm.
communitybuilding4genz
Nghề xây cộng đồng — để mô hình tự nhân rộng.
### V.3 · 02 — Mục tiêu lớn hơn: trao quyền & chuẩn hóa để lan tỏa
COPY
Hệ sinh thái không chỉ phong phú. Nó hướng tới trao quyền, tăng vốn xã hội, củng cố trải nghiệm sống ý nghĩa — và quan trọng nhất, chuẩn hóa các hoạt động để có thể lan ra toàn xã hội.
Một hoạt động hay nhưng không chuẩn hóa thì chết cùng người tổ chức. Chuẩn hóa biến nó thành thứ nhân rộng được.
### V.4 · 03 — Những dự án chiến lược (đánh vào lỗ hổng cấu trúc)
COPY
W4GZ Living Dictionary
Một từ điển sống, theo nhịp sống người Việt từ lịch sử đến hiện đại, không bỏ qua lối nói của Gen Z — củng cố hạ tầng chữ viết ở mức kí tự và từ ngữ. Bối cảnh: Việt Nam thuộc nhóm dùng internet đông nhất thế giới nhưng thiếu vắng từ điển tương xứng.
Library4GenZ
Hệ thư viện lưu trữ lượng kiến thức đồ sộ, dịch trực tiếp từ các nguồn mở uy tín nước ngoài — gồm các cấu phần như Psychology4GenZ, Communication4GenZ, Philosophy4GenZ — nhằm nâng hạ tầng tri thức cho người Việt.
STAT   Bối cảnh: ~80 triệu người dùng internet (DataReportal, 2025), nhưng trung bình mỗi người Việt đọc khoảng 1 cuốn sách/năm ngoài sách giáo khoa — thuộc nhóm thấp trong khu vực (số liệu ngành xuất bản VN, 2016–2025).
COPY
Các dự án này đánh thẳng vào lỗ hổng cấu trúc — đặc biệt trên môi trường internet và cho Gen Z — vốn đang khiến “narrative” của thế hệ này khó được viết tốt. W4GZ là một tập hợp leader hành động vào cấu trúc, không tự xem mình là thực thể thụ động.
ART   Đồ họa khái niệm: bản đồ nhánh -4GZ tỏa ra từ một gốc “writing”, hai nhánh chiến lược (Dictionary, Library) tô đậm hơn.
### V.5 · 04 — W4GZ Media Team: tiếng nói & sự bền vững
COPY
Voice of W4GZ
Lực lượng chủ chốt lan ảnh hưởng của W4GZ — các dự án và con người — ra toàn xã hội và liên kết với mạng lưới truyền thông lớn hơn. Họ đảm bảo social impact, đóng gói hoạt động và ấn phẩm theo cách bền vững, hợp xu hướng và có lợi nhuận; chuẩn hóa cách làm việc và monetization để các hoạt động ý nghĩa không trở thành gánh nặng tài nguyên cho thành viên, đồng thời hút nguồn lực phù hợp từ bên ngoài.
NOTE   Quyết định vị trí: đặt Media Team ở Ecosystem (lớp hạ tầng khuếch đại/chuẩn hóa/monetization của cả hệ), cross-ref một dòng ở People (vì cũng là một nhóm người). Lý do: chức năng của họ là cấu trúc-hệ, không phải vinh danh cá nhân. Đảo được nếu bạn muốn dồn về People.
### V.6 · Hợp tác & chuyển chương
COPY
Muốn cùng dựng?
Tổ chức, định chế, hay người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ — hãy liên hệ.
CTA   Outline “Liên hệ →” · “Đằng sau tất cả là những con người — gặp họ →” (People)

## Trang VI · People
Softer hall of fame, ràng buộc Law III. Thêm cross-ref tới leader/Media Team. Beat: đồng nhất.
### VI.1 · Hero
COPY
THE PEOPLE
Những người đã cầm lấy cây bút.
Một sự tôn vinh giữ ở tông trầm — qua tác phẩm, qua cột mốc, qua bí danh.
### VI.2 · Về sự ẩn danh
COPY
Vì sao bạn thấy kí họa, không phải ảnh
Trong W4GZ, bảo vệ riêng tư là một luật. Sau khóa học, thành viên giữ ẩn danh. Vì thế trang này tôn vinh bằng chân dung vẽ và bằng bí danh — sự kín đáo ấy là một phần đạo đức của cộng đồng, không phải giới hạn kĩ thuật.
### VI.3 · Những chân dung (softer hall of fame)
FORM   Lưới chân dung kí họa; mỗi mục: bức vẽ (module People làm khung-motif), bí danh, một cột mốc/câu của chính người đó. Tông trầm, không xếp hạng.
COPY
M. — Khóa 12
Full marathon đầu tiên ở tuổi ba mươi tư.
H. — Khóa 9
“…” (một câu của thành viên)
L. — Khóa 7
Từ người chưa từng viết, thành người viết đều mỗi tuần.
IMAGE   Mỗi chân dung là một kí họa riêng; phong cách nhất quán: mực, nét thưa.
NOTE   Cần dữ liệu thật đã ẩn danh: 6–9 bí danh + cột mốc/câu, kèm kí họa.
### VI.4 · Những người dựng hệ
COPY
Phía sau các dự án và nhánh là những người dẫn dắt — gồm W4GZ Media Team, tiếng nói đưa W4GZ ra ngoài. Họ cũng ẩn danh theo cùng nguyên tắc.
CTA   Outline “Trang tiếp theo của cộng đồng này có thể mang tên bạn →” (Join)

## Trang VII · Join — The Covenant
Đóng arc, hội tụ hành động. Beat: cam kết.
### VII.1 · Hero
COPY
THE COVENANT
Trang đầu tiên của bạn.
Tham gia W4GZ là nhận một chuẩn mực vào trong mình — một lời tuyên với chính mình, có cộng đồng làm chứng.
### VII.2 · Lời tuyên
FORM   Khối văn bản trang trọng, serif, khoảng trắng rộng; module biểu tượng re-weave nhẹ phía sau.
COPY
Tôi hiểu W4GZ là một chuẩn tôi gìn giữ, không phải một nhóm tôi gia nhập.
Tôi viết với sự trung thực và công bố với tay nghề. Tôi nhận phản hồi không phòng thủ, và đưa phản hồi cụ thể, hướng vào trang viết. Tôi chọn nhịp đều thay vì những đợt bùng cháy rồi tắt.
Tôi không xem mình là người thụ động trước thời đại. Tôi giành lại quyền kể câu chuyện của mình, và góp phần dựng những câu chuyện đáng sống cho cả những người quanh tôi.
### VII.3 · Một cổng, hai lối qua
FORM   Hai khối: hai lối qua cùng một cổng. Không có lối thứ ba.
COPY
Lối A — Introduction + bài luận tốt nghiệp
Hoàn tất Introduction online và nộp bài luận tốt nghiệp; được duyệt theo kì onboarding của cộng đồng — bốn kì mỗi năm.
Lối B — Advanced
Hoàn tất W4GZ Advanced tại HCMC (xét đơn).
Hai lối đều đi qua một cổng duy nhất: viết. Đó là cách W4GZ giữ mình là cộng đồng của những người biết viết.
CTA   Filled “Enroll Introduction →” · Filled “Apply for Advanced →”
### VII.4 · Dòng đóng
COPY
Creates narratives worth living.
“Does this make us better writers, and more complete human beings — together?”

# PART 6 · Phụ lục
### Phụ lục A · Quote bank

[TABLE]
| Tác giả | Câu / ý | Trang | Bản quyền |
| Wittgenstein | Giới hạn ngôn ngữ là giới hạn thế giới; không có ngôn ngữ riêng tư | WhyWriting 03 · Community 01 | Tractatus công cộng; private-language paraphrase |
| Joan Didion | We tell ourselves stories in order to live | Home · WhyWriting 01 | Trích ngắn, một lần |
| MacIntyre / Ricoeur | Con người là sinh vật kể chuyện; căn tính tự sự | WhyWriting 01–02 | Khái niệm, không trích |
| Yuval Noah Harari | Xã hội gắn nhau bằng câu chuyện chung | WhyWriting 02 | Paraphrase (bản quyền) |
| Walter Benjamin | Thông tin vs truyện | WhyWriting 05 | Paraphrase |
| Byung-Chul Han | Khủng hoảng tự sự (2023) | WhyWriting 06 | Paraphrase |
| Kipling | Sức mạnh của bầy và của sói | WhyWriting 08 · Community 01 | Công cộng |
| Halbwachs | Ký ức tập thể | Community 01 | Khái niệm |
| Thành viên W4GZ | Câu trích ẩn danh | People | Nội bộ, ẩn danh |
[/TABLE]

### Phụ lục B · Số liệu (cần xác minh trước khi publish)

[TABLE]
| Số liệu | Dùng ở | Nguồn |
| ~80tr người dùng internet VN, ~78.8% dân số, nhóm cao nhất TG | WhyWriting · Ecosystem | DataReportal/We Are Social 2025 |
| Người Việt đọc ~1 sách/năm (ngoài SGK), thấp trong khu vực | Ecosystem V.4 | Ngành xuất bản VN, 2016–2025 |
| Cô đơn ≈ hút 15 điếu/ngày; ~50% người lớn cô đơn | Community 02 | US Surgeon General 2023 |
| Nhóm 15–24: gặp bạn trực tiếp giảm ~70% | Community 02 | US Surgeon General 2023 |
[/TABLE]

NOTE   Mọi con số cần Hex xác minh và cập nhật nguồn chính danh trước khi lên production; có thể bổ sung số liệu nội bộ W4GZ (số cohort, thành viên).
### Phụ lục C · Glossary -4GZ & dự án

[TABLE]
| Hạng mục | Một dòng |
| writing4genz (W4GZ) | Cột sống: viết như kỉ luật nền tảng |
| storytelling4genz · poetry4genz | Kể chuyện sân khấu; thơ |
| english/japanese/chinese4genz | Ngôn ngữ |
| workshop4genz · logic4genz | Thực hành chuyên đề; lập luận |
| drawing4genz · chess4genz · gaming4genz | Vẽ; cờ; game |
| weekend4genz | Thể thao: running/trekking/hiking… |
| communitybuilding4genz | Nghề xây cộng đồng |
| W4GZ Living Dictionary | Từ điển sống — hạ tầng chữ viết cho người Việt |
| Library4GenZ | Thư viện tri thức dịch từ nguồn mở (Psychology/Communication/Philosophy4GenZ) |
| W4GZ Media Team | Voice & chuẩn hóa/monetization/khuếch đại của hệ |
| W4GZ Hub | Không gian văn hóa vật lý, chống disconnect, sẽ nhân rộng |
[/TABLE]

### Phụ lục D · Dữ liệu & quyết định cần cung cấp
- Số liệu công khai ở hero Home (hoặc giữ “10+”); số liệu nội bộ W4GZ.
- Courses: thời lượng, học phí, lịch, cách nộp đơn Advanced; 3 testimonial ẩn danh.
- Cổng vào: lịch bốn kì onboarding cộng đồng/năm; tiêu chí bài luận tốt nghiệp (Introduction); cơ chế xét duyệt Advanced.
- Hub: địa chỉ, giờ mở (hoặc cách thể hiện).
- Link: Discord, Blog, Fanpage.
- Ecosystem: trạng thái từng vertical; chi tiết Living Dictionary & Library4GenZ; phạm vi Media Team muốn công khai.
- People: 6–9 bí danh + cột mốc/câu + kí họa.
- Bộ biểu tượng: chuẩn hóa & xuất SVG sản xuất; kho kí họa sẵn có hay cần vẽ.
- Xác nhận đặt Media Team ở Ecosystem hay People.
- Chốt: 7 trang hay 5; Việt-primary hay song ngữ toggle đầy đủ; mức độ WebGL.

# Addendum v2.1 · The Power of Narrative · Symbol System v2 · Wave motif · Auto-link
Bản cập nhật này bổ sung lên Master Spec v2 (không thay thế) và đã được triển khai trong code. Nguồn nội dung chi tiết của trang mới: `docs/power-of-narrative.md`. Bộ biểu tượng nguồn: `assets/W4GZ_Symbol_System_v2.svg`.

### A · Trang deep-read mới — The Power of Narrative (`/power-of-narrative`)
- Một trang "đọc sâu" độc lập, KHÔNG nằm trong top nav. Vào bằng hai đường: (1) auto-link mọi heading chứa "narrative" trên toàn site; (2) một link "Bài đọc sâu" cố định ở cuối Why Writing.
- Ba chương, hiện MỘT chương tại một thời điểm (không phải one-long-scroll). Chuyển chương bằng nút Next/Prev, các dot `I · II · III` trên top bar, và phím `←` / `→`. Thanh progress mảnh dưới top bar chạy `33% → 66% → 100%`.
- Khi chuyển: ẩn chương cũ, chương mới chơi một "rise" reveal, cuộn về đầu trang; coi như một section transition (symbol module re-weave qua nó).
- Mỗi chương: một GHOST Roman numeral mờ khổng lồ, các subhead, prose dày (nội dung đầy đủ, không rút gọn), và các figure slot `HÌNH` (khung hairline + hatch chéo + caption mono — placeholder thật, không bao giờ ảnh giả).
- Chương III kết bằng MOTTO CLIMAX: panel mực nghịch (nền mực, chữ giấy) với weave paper-on-ink hoạt họa ngay trên dòng **"Creates narratives worth living."**; kicker `Ba chương · một kết luận`; sub định khung motto là **hệ điều hành**, không phải khẩu hiệu; endnav `← Chương II · Bắt đầu viết →`.
- Breadcrumb trên-trái `↩ {nguồn}` là ĐỘNG — phản ánh trang người xem vừa rời (qua `document.referrer`, không dùng storage).
- Tiến bộ hóa: SSR render cả ba chương (copy server-rendered, chọn được, đọc được khi tắt JS); sau hydrate mới hiện một-chương-một-lần.

### B · Symbol System v2 (sửa bất đối xứng + animate)
- Thêm glyph còn thiếu: **Narrative** (spine — đường luồn qua các node, the weave thu nhỏ), **Home**, **The Fit**, **Courses**, **Join**. Giữ: Writing, Community, Ecosystem, People, Hub, Media Team.
- Sửa defect: spine ba trụ (Narrative × Writing × Community) nay cả ba đều mang glyph (trước đây Narrative thiếu).
- Mọi page/section header mang glyph module: Home, Why Writing→Writing, Courses, Community, Ecosystem, People, Join; Hub + Media Team trong section của chúng. The Fit value-cards mang glyph (chờ trang The Fit từ Copy v5 — xem GAPS.md).
- Quy tắc: không list/set icon nào được bất đối xứng — đã có icon ở một item thì mọi item phải có.
- Chính sách animation (event-driven, KHÔNG loop vĩnh viễn):
  1. Reveal ONE-SHOT: nét draw-on (stroke-dashoffset) + node bleed-in chạy MỘT lần khi glyph vào viewport (IntersectionObserver) hoặc khi mount; xong giữ trạng thái đã vẽ.
  2. Re-trigger khi transition: đổi route/section → module re-weave (chơi lại one-shot một lần) qua `replayKey`/route key.
  3. Ambient loop CHỈ ở the weave: node "traveller" chạy liên tục (chậm, mờ). Không gì khác loop.
  4. Hover (tùy chọn): một node pulse cho icon tương tác, một lần mỗi hover.
  - Pause off-screen (`IntersectionObserver` → `animation-play-state: paused`); `prefers-reduced-motion`/toggle off → chỉ render trạng thái đã vẽ. Ưu tiên CSS/SVG; JS chỉ bật/tắt attr trigger. Implement: `components/symbols/SymbolModule.tsx` + `app/globals.css` (keyed `[data-motion]` + `data-drawn`).

### C · Wave / Weave motif
- Component sản xuất dùng chung: `components/symbols/Weave.tsx` (một đường luồn qua nhiều node, thoát hai mép, tile vô hạn).
- Tại motto (chính): weave paper-on-ink ngay trên dòng motto — draw-on, node bleed-in, rồi một node travel liên tục; pause khi off-screen.
- Toàn trang (mảnh): một weave ink-on-paper mờ dưới breadcrumb làm signature của trang.
- Site-wide: `components/motion/SymbolLayer.tsx` là weave cố định ở chân trang, re-weave mỗi lần đổi route, với node traveller ambient (loop duy nhất của site — "đường không bao giờ kết thúc").

### D · Auto-link rule cho heading "narrative"
- Toàn site: mọi heading mà text chứa `narrative` / `narratives` (không phân biệt hoa thường) được bọc trong link tới `/power-of-narrative`. Implement như một heading transform (`lib/narrativeLink.tsx`) cắm vào renderer heading dùng chung (PageHero h1, SectorView h2) + các anchor đã biết (trụ Narrative ở Home, "Narrative Structure" ở Courses) → heading tương lai tự được phủ.

### E · Design-system additions
- Inverted-ink **motto-climax panel** (điểm nghịch đảo duy nhất của trang).
- **Ghost chapter numeral** (số La Mã mờ khổng lồ phá lưới).
- **Chapter mechanic**: one-at-a-time + dots + arrows + progress bar.
- **HÌNH figure-slot**: khung hairline + hatch chéo + caption mono (placeholder thật).
- **Font stack** (đã chốt trong build): Cormorant Garamond (display) / Plus Jakarta Sans (body — thay Outfit vì Outfit thiếu subset tiếng Việt) / IBM Plex Mono (mono — thay DM Mono cùng lý do).

### F · Guardrails (giữ nguyên)
Mọi STAT/anchor lịch sử: verify-before-publish. Không nhắc nhánh đầu tư `-4GZ` công khai. Tư liệu wellbeing (anomie, distress Gen Z, TRC) xử lí điềm tĩnh, khái niệm, không chi tiết.

Hết Master Spec v2 + Addendum v2.1. Bản này là nguồn chân lý hợp nhất; phần triển khai (Claude Code brief / README) tham chiếu tài liệu này.