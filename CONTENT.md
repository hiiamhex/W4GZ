# W4GZ — Site Content (editable master)

This file gathers **every piece of editable copy on the site** into one place so you can
rewrite it freely. When you're done, hand it back and I'll push your edits into the right
source files for you.

## How to edit

- Edit the **text only**. Under each bold label you'll see the current copy — change it in place.
- **Leave the `` `key` `` tags alone.** The little monospace tag after each label (e.g. `home › I.1 › heading`)
  is how I locate that exact string in the code. Don't delete or renumber them.
- Labels tell you what each string is and where it shows. `[brief]` = an illustration/figure
  description (not visitor-facing text). `[note]` = an internal placeholder note (not shown on the page).
  `[stat — verify]` = a statistic that still needs source-checking before launch.
- Two blocks — **Privacy** and **Terms** — are full markdown documents shown inside ```` ```markdown ````
  fences. Edit everything inside the fence, headings included.
- Add a comment in **`«» double angle brackets»`** anywhere if you want to leave me an instruction
  (e.g. «delete this whole section»). I'll act on it and remove the note.

## Contents

- **A · Global** — navigation, footer, legal links
- **B · The funnel** — 1 Home · 2 Why Writing · 3 The Fit · 4 Courses · 5 Community · 6 Ecosystem · 7 W (People) · 8 Join
- **C · The deep read** — The Power of Narrative
- **D · Forms** — Apply · Graduation · Contact
- **E · Legal** — Privacy · Terms

---

# PART A · Global

*Shown on every page — top navigation and footer. Source: `content/site.ts`.*

### Navigation (funnel links, left→right)

**Nav 1** `site › nav[0]` → Home
**Nav 2** `site › nav[1]` → Why Writing
**Nav 3** `site › nav[2]` → The Fit
**Nav 4** `site › nav[3]` → Courses
**Nav 5** `site › nav[4]` → Community
**Nav 6** `site › nav[5]` → Ecosystem
**Nav 7** `site › nav[6]` → W

**Primary CTA button** `site › cta.label` → Join

### Deep-read link (set apart from the funnel)

**Essay label** `site › essay.label` → The Power of Narrative
**Essay tag** `site › essay.tag` → đọc sâu

### Footer

**Legal link 1** `site › legal[0]` → Quyền riêng tư
**Legal link 2** `site › legal[1]` → Điều khoản Sử dụng
**Legal link 3** `site › legal[2]` → Liên hệ
**Enroll label** `site › enrollLabel` → Enroll
**Footer wordmark** `site › footer.wordmark` → Writing4GenZ
**Footer copyright** `site › footer.copyright` → © 2026 W4GZ · The -4GZ Ecosystem · Ho Chi Minh City · Est. 2022

---

# PART B · The funnel

## 1 · Home — `/`

*Source: `content/home.ts`. Chapter I.*

**SEO description** `home › description`
Một đời là một văn bản. W4GZ trả cây bút về tay người viết — và cho họ một cộng đồng để viết tiếp. Creates narratives worth living.

### I.1 · Hero

**Kicker** `home › I.1 › kicker` → Creates narratives worth living
**Heading** `home › I.1 › heading` → Một đời là một văn bản.
**Sub-heading** `home › I.1 › sub` → Câu hỏi duy nhất: ai cầm bút?

**Body** `home › I.1 › body[0]`
Mỗi ngày, thuật toán viết hộ bạn hàng nghìn câu — điều cần xem, cần muốn, cần sợ. W4GZ trả cây bút về tay người viết, và cho họ một cộng đồng để viết tiếp.

**Button — filled → /courses** `home › I.1 › cta[0].label` → Bắt đầu với Introduction
**Button — outline → /community** `home › I.1 › cta[1].label` → Con đường vào cộng đồng

### Hero side panel — ticker

**Ticker 1** `home › tickerItems[0]` → Creates narratives worth living
**Ticker 2** `home › tickerItems[1]` → Writing4GenZ
**Ticker 3** `home › tickerItems[2]` → Est. 2022
**Ticker 4** `home › tickerItems[3]` → Ho Chi Minh City
**Ticker 5** `home › tickerItems[4]` → The -4GZ Ecosystem

### Hero side panel — stats

**Stat 1 value** `home › heroStats[0].value` → 10+
**Stat 1 label** `home › heroStats[0].label` → Số khóa đã dạy
**Stat 2 value** `home › heroStats[1].value` → Gen Z
**Stat 2 label** `home › heroStats[1].label` → Thế hệ trọng tâm
**Stat 3 value** `home › heroStats[2].value` → HCMC
**Stat 3 label** `home › heroStats[2].label` → Không gian vật lý
**Stat 4 value** `home › heroStats[3].value` → Est. 2022
**Stat 4 label** `home › heroStats[3].label` → Năm khởi lập

### I.2 · Ba trụ (Three pillars)

**Pillar 1 name** `home › pillars[0].name` → Narrative
**Pillar 1 line** `home › pillars[0].line` → bạn là câu chuyện bạn kể về mình.
**Pillar 2 name** `home › pillars[1].name` → Writing
**Pillar 2 line** `home › pillars[1].line` → kỉ luật để tự viết câu chuyện ấy.
**Pillar 3 name** `home › pillars[2].name` → Community
**Pillar 3 line** `home › pillars[2].line` → điều kiện để giữ và lan kỉ luật đó.

**Pillars closing line** `home › pillarsClosing`
Bỏ một trụ, hai trụ kia sụp. W4GZ dựng cả ba.

### I.3 · Bốn cửa vào (Four doors)

**Door 1 title** `home › doors[0].title` → Vì sao Viết
**Door 1 description** `home › doors[0].description` → Lập luận về narrative, viết, và chủ quyền trong thời đại AI.
**Door 2 title** `home › doors[1].title` → Học viết
**Door 2 description** `home › doors[1].description` → Introduction online và Advanced offline — cổng duy nhất vào cộng đồng.
**Door 3 title** `home › doors[2].title` → Cộng đồng
**Door 3 description** `home › doors[2].description` → Vì sao một mình là không đủ, và bước vào bằng cách nào.
**Door 4 title** `home › doors[3].title` → Hệ sinh thái
**Door 4 description** `home › doors[3].description` → Các nhánh -4GZ và những dự án chiến lược cho người Việt.

### Chapter transition (→ /why-writing)

**Transition line** `home › transition.text`
Trước khi học cách viết, cần hiểu vì sao phải viết.

---

## 2 · Why Writing — `/why-writing`

*Source: `content/why-writing.ts`. Chapter II — eight movements.*

**SEO description** `why › description`
Hành vi người cuối cùng mà máy không làm thay được — một lập luận về narrative, viết, và chủ quyền giữa thời đại thông tin.

### Hero

**Label** `why › hero.label` → Why Writing
**Heading** `why › hero.heading` → Hành vi người cuối cùng mà máy không làm thay được.
**Sub-heading** `why › hero.sub` → Một lập luận về narrative, viết, và chủ quyền giữa thời đại thông tin.

### II.2 · Movement 01

**Kicker** `why › II.2 › kicker` → 01
**Heading** `why › II.2 › heading` → Tự sự là cách một cái tôi trở thành thật
**Quote — original** `why › II.2 › quote.original` → We tell ourselves stories in order to live.
**Quote — Vietnamese** `why › II.2 › quote.translation` → Ta tự kể chuyện để sống.
**Quote — author** `why › II.2 › quote.author` → Joan Didion

**Body ¶1** `why › II.2 › body[0]`
Con người không sống thành chuỗi khoảnh khắc rời rạc. Ta hiểu được mình qua việc kể lại mình thành chuyện — Ricoeur gọi đó là căn tính tự sự, MacIntyre gọi con người là sinh vật kể chuyện về bản chất. Cách bạn kể về quá khứ quyết định bạn mang gì vào hiện tại; câu chuyện bạn tin về tương lai quyết định bạn dám làm gì hôm nay.

**Body ¶2** `why › II.2 › body[1]`
Bạn là câu chuyện bạn kể về chính mình — với chính mình.

**[brief] Sketch** `why › II.2 › art[0]` → Kí họa dọc: một bàn tay đang viết, nét tối giản.

### II.3 · Movement 02

**Kicker** `why › II.3 › kicker` → 02
**Heading** `why › II.3 › heading` → Tự sự dựng nên cả thế giới chung

**Body ¶1** `why › II.3 › body[0]`
Tự sự không dừng ở cá nhân. Xã hội loài người được giữ với nhau bằng những câu chuyện nhiều người cùng tin: luật pháp, tiền tệ, quốc gia, niềm tin chung đều là tự sự. Một nền văn minh là một tập hợp narrative đủ mạnh để hàng triệu người phối hợp. Ai nắm được narrative chung nắm được hướng đi của tập thể.

**Body ¶2** `why › II.3 › body[1]`
Lịch sử loài người là cuộc cạnh tranh giữa các câu chuyện.

**[brief] Concept** `why › II.3 › art[0]` → Đồ họa khái niệm: nhiều nét cá nhân hội tụ thành một đường lớn chung.

### II.4 · Movement 03

**Kicker** `why › II.4 › kicker` → 03
**Heading** `why › II.4 › heading` → Viết là kỉ luật khiến tự sự có trách nhiệm
**Quote — original** `why › II.4 › quote.original` → Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.
**Quote — Vietnamese** `why › II.4 › quote.translation` → Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi.
**Quote — author** `why › II.4 › quote.author` → Ludwig Wittgenstein, Tractatus

**Body** `why › II.4 › body[0]`
Nói thì trôi qua; viết thì ở lại và bị soi. Viết buộc thứ hỗn mang trong đầu thành mạch lạc, tuần tự, chịu trách nhiệm trước một người đọc. Mở rộng vốn chữ là mở rộng thế giới có thể nghĩ tới — không có chữ cho một điều, ta khó cầm nắm điều đó.

### II.5 · Movement 04

**Kicker** `why › II.5 › kicker` → 04
**Heading** `why › II.5 › heading` → Mọi công cụ khuếch đại lời nói đều in dấu lên ta

**Body ¶1** `why › II.5 › body[0]`
Khi chữ viết xuất hiện, con người tạo được những tự sự mạnh hơn bao giờ hết — và cũng chịu ảnh hưởng mạnh hơn bởi tự sự người khác viết ra, từ khi ta còn chưa hiểu gì. Phần lớn câu chuyện ta mang theo về bản thân và thế giới được cài vào lúc ta chưa kịp lựa chọn.

**Body ¶2** `why › II.5 › body[1]`
Trưởng thành là giành lại quyền kể câu chuyện của mình — và chọn câu chuyện lớn đáng sống.

### II.6 · Movement 05

**Kicker** `why › II.6 › kicker` → 05
**Heading** `why › II.6 › heading` → Khi chữ thành vô tận, nghĩa thành khan hiếm

**Body** `why › II.6 › body[0]`
Máy giờ sinh văn bản ở quy mô không giới hạn. Hệ quả kép: cái tôi bị dìm trong những tự sự nó không viết ra, và việc sản xuất chữ một cách cơ học mất sạch giá trị. Walter Benjamin đã thấy trước: thông tin đòi kiểm chứng và tiêu thụ tức thì rồi vứt bỏ; truyện thì gìn giữ nghĩa và nhả ra chậm rãi. Một xã hội ngập thông tin có thể đồng thời nghèo truyện đến cùng cực.

**[stat — verify] Value** `why › II.6 › stat[0].value`
Việt Nam: ~80 triệu người dùng internet, ~78.8% dân số, thuộc nhóm cao nhất thế giới.
**[stat — verify] Source** `why › II.6 › stat[0].source` → DataReportal/We Are Social, 2025

**[brief] Concept** `why › II.6 › art[0]` → Đồ họa khái niệm: dòng văn bản máy chồng lớp, dày đặc, trôi nhanh — tương phản với một dòng chữ tĩnh được viết tay.

### II.7 · Movement 06

**Kicker** `why › II.7 › kicker` → 06
**Heading** `why › II.7 › heading` → Khủng hoảng tự sự: nhận thức narrative thành sống còn

**Body** `why › II.7 › body[0]`
Byung-Chul Han gọi đúng tên thời điểm này: một cuộc khủng hoảng tự sự. Thông tin trôi vô tận; năng lực kể một câu chuyện thật — thứ neo con người vào nghĩa — thì teo lại. Trong thời đại AI, nhận thức về narrative (ai đang kể, kể gì, vì mục đích gì) không còn là kĩ năng tùy chọn; nó là điều kiện để không bị dắt mũi.

### II.8 · Movement 07

**Kicker** `why › II.8 › kicker` → 07
**Heading** `why › II.8 › heading` → Thời đại viết-là-giao-diện: viết nghiêm chỉnh là lối thoát

**Body** `why › II.8 › body[0]`
Hôm nay con người giao tiếp với nhau và với máy móc chủ yếu bằng chữ viết — prompt, tin nhắn, tài liệu. Khả năng hiểu sâu và dùng chữ một cách nghiêm chỉnh là cách thoát khỏi cảm giác bất an trong những tự sự cũ vốn không còn vừa với thực tại mới. Ai viết rõ thì nghĩ rõ, và sống bớt hoang mang.

### II.9 · Movement 08

**Kicker** `why › II.9 › kicker` → 08
**Heading** `why › II.9 › heading` → Tự sự chung là cách con người chạm tới nhau → cần một bầy
**Quote — original** `why › II.9 › quote.original` → For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.
**Quote — Vietnamese** `why › II.9 › quote.translation` → Sức mạnh của bầy nằm ở từng con sói, sức mạnh của con sói nằm ở cả bầy.
**Quote — author** `why › II.9 › quote.author` → Rudyard Kipling

**Body** `why › II.9 › body[0]`
Ngôn ngữ viết và những tự sự chung là phương tiện hiệu quả nhất để con người hiểu chính mình và hiểu nhau. Nhưng viết là một kỉ luật, và kỉ luật cần một cộng đồng để sống. Đó là chương tiếp theo.

**Button — filled → /courses** `why › II.9 › cta[0].label` → Học cách viết
**Button — outline → /the-fit** `why › II.9 › cta[1].label` → Bạn có phải là một W?

---

## 3 · The Fit — `/the-fit`

*Source: `content/the-fit.ts`. "Bạn có phải là một W không?" + six value cards.*

**SEO description** `fit › description`
Bạn có phải là một W không? Sáu giá trị của một người W: Narrative, Writing, Meaning over noise, Honesty, Craft, Community.

### Hero

**Label** `fit › hero.label` → The Fit
**Heading** `fit › hero.heading` → Bạn có phải là một W không?
**Sub-heading** `fit › hero.sub` → Sáu điều một người W mang trong mình. Nếu bạn thấy mình trong cả sáu, đây là nhà.

**Values section label** `fit › valuesLabel` → Sáu giá trị
**Tap hint** `fit › tapHint` → Chạm vào từng thẻ — xem điều hiện ra có giống bạn không.

### Six values

**Value 1 name** `fit › values[0].name` → Narrative
**Value 1 name (VI)** `fit › values[0].nameVi` → Tự sự
**Value 1 line** `fit › values[0].line`
Bạn tin đời mình là một câu chuyện bạn được quyền viết — không phải một kịch bản người khác giao.

**Value 2 name** `fit › values[1].name` → Writing
**Value 2 name (VI)** `fit › values[1].nameVi` → Viết
**Value 2 line** `fit › values[1].line`
Bạn coi viết là một kỉ luật để rèn, không phải một năng khiếu để ngồi chờ.

**Value 3 name** `fit › values[2].name` → Meaning over noise
**Value 3 name (VI)** `fit › values[2].nameVi` → Nghĩa hơn nhiễu
**Value 3 line** `fit › values[2].line`
Giữa dòng chữ vô tận, bạn chọn dựng nghĩa thay vì chạy theo tiếng ồn.

**Value 4 name** `fit › values[3].name` → Honesty
**Value 4 name (VI)** `fit › values[3].nameVi` → Trung thực
**Value 4 line** `fit › values[3].line`
Bạn viết thật trước khi viết hay; lời nguy hiểm nhất là lời ta tự dối mình.

**Value 5 name** `fit › values[4].name` → Craft
**Value 5 name (VI)** `fit › values[4].nameVi` → Tay nghề
**Value 5 line** `fit › values[4].line`
Bạn công bố với tay nghề: cắt cho gọn, tìm đúng chữ, chịu trách nhiệm trước người đọc.

**Value 6 name** `fit › values[5].name` → Community
**Value 6 name (VI)** `fit › values[5].nameVi` → Cộng đồng
**Value 6 line** `fit › values[5].line`
Bạn muốn giữ kỉ luật ấy giữa một bầy trung thực, không phải một mình.

**[note]** `fit › note` → Chữ chốt theo Copy v5; bản hiện nêu đúng sáu giá trị + tinh thần, chờ wording khóa từ tài liệu.

### Chapter transition (→ /courses)

**Transition line** `fit › transition.text` → Nếu đây là bạn — giờ học cách viết nó.

---

## 4 · Courses — `/courses`

*Source: `content/courses.ts`. Chapter III — "The Practice", the single gate.*

**SEO description** `courses › description`
The Practice — viết là một kỉ luật có thể học. Cổng duy nhất vào W4GZ: Introduction + bài luận tốt nghiệp, hoặc Advanced.

### Hero

**Label** `courses › hero.label` → The Practice
**Heading** `courses › hero.heading` → Viết không đợi cảm hứng. Viết là một kỉ luật có thể học.
**Sub-heading** `courses › hero.sub`
Không ai bước vào W4GZ mà không đi qua khóa nền: một ngôn ngữ chung, một bộ nguyên tắc chung, một hiểu biết chung về thực hành sáng tạo có kỉ luật.

### Six pillars of the practice

**Pillar 1 (EN)** `courses › pillars[0].nameEn` → Narrative Structure
**Pillar 1 (VI)** `courses › pillars[0].nameVi` → Cấu trúc tự sự
**Pillar 1 line** `courses › pillars[0].line` → Áp trật tự tự sự lên hỗn mang để nghĩa hiện ra.

**Pillar 2 (EN)** `courses › pillars[1].nameEn` → Honesty
**Pillar 2 (VI)** `courses › pillars[1].nameVi` → Sự trung thực
**Pillar 2 line** `courses › pillars[1].line` → Lời nguy hiểm nhất là lời ta tự dối mình.

**Pillar 3 (EN)** `courses › pillars[2].nameEn` → Conciseness
**Pillar 3 (VI)** `courses › pillars[2].nameVi` → Sự cô đọng
**Pillar 3 line** `courses › pillars[2].line` → Cắt gọn chính mình là một dạng trưởng thành.

**Pillar 4 (EN)** `courses › pillars[3].nameEn` → Referencing
**Pillar 4 (VI)** `courses › pillars[3].nameVi` → Sự dẫn chiếu
**Pillar 4 line** `courses › pillars[3].line` → Độc đáo đến từ tổng hợp, không từ cô lập.

**Pillar 5 (EN)** `courses › pillars[4].nameEn` → Loop
**Pillar 5 (VI)** `courses › pillars[4].nameVi` → Vòng lặp
**Pillar 5 line** `courses › pillars[4].line` → Làm một lần là thử nghiệm; lặp đều mới là thành tựu.

**Pillar 6 (EN)** `courses › pillars[5].nameEn` → Specificity & the Right Term
**Pillar 6 (VI)** `courses › pillars[5].nameVi` → Cụ thể và chữ đúng
**Pillar 6 line** `courses › pillars[5].line` → Tìm được đúng chữ là hoàn tất ý nghĩ.

### Why cohort

**Label** `courses › cohort.label` → Vì sao W4GZ dạy theo cohort
**Lead** `courses › cohort.lead` → Một khóa quay sẵn dạy bạn thông tin. Một cohort dạy bạn thành người viết.
**Body** `courses › cohort.body`
Viết tiến bộ nhờ ma sát: có người đọc bạn và nói thẳng trang viết thật sự đang nói gì; có một nhịp chung buộc bạn không bỏ cuộc; có những người cùng vật lộn để bạn soi mình vào. Đó là thứ video không cho được, và là lý do W4GZ dạy theo cohort và cộng đồng.

### The single gate

**Label** `courses › gate.label` → Cổng duy nhất vào W4GZ
**Lead** `courses › gate.lead` → Một cổng. Luôn luôn.
**Body** `courses › gate.body`
Để trở thành một phần của W4GZ, bắt buộc đi qua khóa học viết. Đây là cổng duy nhất, và sẽ luôn như vậy — để W4GZ là cộng đồng của những người biết viết.

**Path A — label** `courses › gate.paths[0].label` → Lối A — W4GZ Introduction + bài luận tốt nghiệp
**Path A — body** `courses › gate.paths[0].body`
Hoàn tất khóa Introduction và nộp bài luận tốt nghiệp; được duyệt theo kì onboarding của cộng đồng.

**Path B — label** `courses › gate.paths[1].label` → Lối B — W4GZ Advanced
**Path B — body** `courses › gate.paths[1].body` → Hoàn tất khóa Advanced.

**Gate closing** `courses › gate.closing`
Cộng đồng onboarding theo quý — bốn kì mỗi năm. Ngoài hai lối trên, không có đường nào khác vào W4GZ.

**[note]** `courses › gate.note` → Đang cập nhật: lịch bốn kì onboarding/năm; tiêu chí bài luận tốt nghiệp; cơ chế xét duyệt Advanced.

### Two tracks through the gate

**Tracks section label** `courses › tracksLabel` → Hai lối qua cổng

#### Track 1 — Introduction

**Status** `courses › tracks[0].status` → Online · Self-paced
**Title** `courses › tracks[0].title` → W4GZ Introduction
**Positioning** `courses › tracks[0].positioning`
Nền tảng. Hơn 10 khóa đã dạy, nay đóng gói thành chương trình online tự học hoàn toàn.
**Spec head** `courses › tracks[0].specHead` → Thông số · Introduction
**Spec — Hình thức** `courses › tracks[0].spec[0].value` → 100% online, tự học
**Spec — Đối tượng** `courses › tracks[0].spec[1].value` → Người mới → trung cấp
**Spec — Ngôn ngữ** `courses › tracks[0].spec[2].value` → Tiếng Việt
**Spec — Truy cập** `courses › tracks[0].spec[3].value` → Trọn đời
**Spec — Tốt nghiệp** `courses › tracks[0].spec[4].value` → Bài luận tốt nghiệp (bắt buộc)
**Spec — Vai trò** `courses › tracks[0].spec[5].value` → Lối A vào cộng đồng — duyệt theo kì onboarding
**Button → /dang-ky** `courses › tracks[0].cta.label` → Đăng ký

#### Track 2 — Advanced

**Status** `courses › tracks[1].status` → Offline · HCMC · Sắp mở
**Title** `courses › tracks[1].title` → W4GZ Advanced
**Positioning** `courses › tracks[1].positioning`
Chuyên sâu, trực tiếp, số chỗ giới hạn — cho người viết sẵn sàng đi xa hơn trang giấy.
**Spec head** `courses › tracks[1].specHead` → Thông số · Advanced
**Spec — Hình thức** `courses › tracks[1].spec[0].value` → Offline tại HCMC
**Spec — Nhịp** `courses › tracks[1].spec[1].value` → Hằng tuần, theo cohort
**Spec — Đối tượng** `courses › tracks[1].spec[2].value` → Đã có nền tảng
**Spec — Tuyển sinh** `courses › tracks[1].spec[3].value` → Xét đơn
**Spec — Vai trò** `courses › tracks[1].spec[4].value` → Lối B vào cộng đồng
**Button → /dang-ky** `courses › tracks[1].cta.label` → Đăng ký

**[note]** `courses › tracksNote` → Đang cập nhật: thời lượng, học phí, lịch khai giảng, cách nộp đơn Advanced.

### Testimonials

**Section label** `courses › testimonialsLabel` → Từ người đã viết
**Quote 1** `courses › testimonials[0].quote` → …
**Quote 1 attribution** `courses › testimonials[0].attribution` → Học viên · Khóa __ · Online
**Quote 2** `courses › testimonials[1].quote` → …
**Quote 2 attribution** `courses › testimonials[1].attribution` → Học viên · Khóa __ · Online
**Quote 3** `courses › testimonials[2].quote` → …
**Quote 3 attribution** `courses › testimonials[2].attribution` → Học viên · Khóa __ · Online
**[note]** `courses › testimonialsNote` → Trích dẫn thật, đã ẩn danh hóa, từ 3 học viên — đang thu thập.

### Chapter transition (→ /community)

**Transition line** `courses › transition.text` → Học là bước đầu — vì sao một mình là không đủ.

---

## 5 · Community — `/community`

*Source: `content/community.ts`. Chapter IV — "Community is the answer".*

**SEO description** `community › description`
Community is the answer — viết một mình là không đủ. Ngôn ngữ là của chung, cô đơn là một khủng hoảng, và W4GZ là vòng tròn bạn bước vào qua một cổng.

### Hero

**Label** `community › hero.label` → Community
**Heading** `community › hero.heading` → Viết một mình là không đủ.
**Sub-heading** `community › hero.sub`
Vì ngôn ngữ là sản phẩm chung, ký ức là tập thể, và năng lực viết chỉ sống được khi có người nuôi nó cùng bạn. Cộng đồng chính là lời đáp.

### IV.2 · 01

**Kicker** `community › IV.2 › kicker` → 01
**Heading** `community › IV.2 › heading` → Ngôn ngữ và nghĩa vốn là của chung
**Quote — original** `community › IV.2 › quote.original` → For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.
**Quote — Vietnamese** `community › IV.2 › quote.translation` → Sức mạnh của bầy nằm ở từng con sói, và của con sói nằm ở cả bầy.
**Quote — author** `community › IV.2 › quote.author` → Rudyard Kipling

**Body** `community › IV.2 › body[0]`
Không có ngôn ngữ riêng tư. Một chữ chỉ có nghĩa vì có một cộng đồng cùng dùng nó (luận điểm của Wittgenstein). Ký ức và ý nghĩa được kiến tạo tập thể — ta nhớ và hiểu trong một “chúng ta”, không trong chân không. Viết, tận cùng, là một hành vi hướng tới người khác.

### IV.3 · 02

**Kicker** `community › IV.3 › kicker` → 02
**Heading** `community › IV.3 › heading` → Đứt gãy hiện đại: vì sao người ta bỏ viết và bỏ nghĩa

**Body** `community › IV.3 › body[0]`
Con người hiện đại khó viết không chỉ vì thiếu động lực cá nhân. Họ thiếu một cộng đồng nuôi dưỡng năng lực ấy một cách có ý nghĩa. Các vòng tròn quan hệ đang phân mảnh và đứt gãy đẩy việc viết — và việc tìm nghĩa — xuống tầng ẩn, rồi biến mất khỏi thực hành được củng cố hằng ngày.

**[stat — verify] Value 1** `community › IV.3 › stat[0].value`
Cô đơn kéo dài gây hại cho sức khỏe tương đương hút tới 15 điếu thuốc mỗi ngày; khoảng một nửa người trưởng thành (ở Mỹ) trải qua cô đơn.
**[stat — verify] Source 1** `community › IV.3 › stat[0].source` → US Surgeon General, 2023

**[stat — verify] Value 2** `community › IV.3 › stat[1].value`
Riêng nhóm 15–24 tuổi: thời gian gặp bạn trực tiếp giảm khoảng 70% trong gần hai thập niên.
**[stat — verify] Source 2** `community › IV.3 › stat[1].source` → US Surgeon General, 2023

**[brief] Concept** `community › IV.3 › art[0]` → Đồ họa khái niệm: nhiều vòng tròn quan hệ rời rạc, đứt nét — rồi một đường luồn (module Community) nối chúng lại.

### IV.4 · 03

**Kicker** `community › IV.4 › kicker` → 03
**Heading** `community › IV.4 › heading` → Vòng tròn bạn bước vào, qua một cổng

**Body ¶1** `community › IV.4 › body[0]`
W4GZ là vòng tròn người viết bước vào để xây câu chuyện ý nghĩa của mình — cùng người khác, một cách bền vững. Bạn bước vào qua một cổng duy nhất: khóa học viết. Bên trong có chuẩn mực để noi theo, ma sát để mài, và một feedback loop để mỗi vòng viết tốt hơn vòng trước.

**Body ¶2** `community › IV.4 › body[1]`
Một mình, bạn viết bằng ý chí. Trong một bầy, bạn viết bằng một hệ.

**[brief] Sketch** `community › IV.4 › art[0]` → Kí họa: vài người ngồi quanh một bàn dài, trang viết trải ra giữa — đọc và phản hồi cho nhau.
**Button — outline → /courses** `community › IV.4 › cta[0].label` → Cổng vào W4GZ

### IV.5 · 04

**Kicker** `community › IV.5 › kicker` → 04
**Heading** `community › IV.5 › heading` → Rồi bạn học cách gieo lại nó

**Body** `community › IV.5 › body[0]`
Giá trị không dừng ở W4GZ. Khi đã sống trong một feedback loop lành mạnh, bạn biết cách tái tạo nó cho các vòng tròn quan hệ khác của mình — gia đình, đồng nghiệp, bạn bè. Vốn xã hội nhân lên: bạn mang chuẩn mực và sự nuôi dưỡng ra ngoài, thay vì giữ riêng.

### W4GZ Hub · Hồ Chí Minh

**Label** `community › hub.label` → W4GZ Hub · Hồ Chí Minh
**Heading** `community › hub.heading` → Một không gian văn hóa sẽ được nhân rộng
**Body ¶1** `community › hub.body[0]`
W4GZ Hub là không gian vật lý ở HCMC, thiết kế để tác động tới con người theo cách truyền thống — buộc người ta đối mặt, gặp gỡ, va chạm, và cư xử dựa trên đó. Bên trong là vô số hoạt động nâng cao tri thức, có chiều sâu, được thiết kế bài bản, trong một không gian chung đòi hỏi nuôi dưỡng liên tục.
**Body ¶2** `community › hub.body[1]`
Vui trên mạng nhưng bối rối khi đối mặt người khác — Hub tồn tại để chữa đúng vết nứt đó.
**[note] Address** `community › hub.address` → [ Địa chỉ Hub — đang cập nhật ]
**[note] Hours** `community › hub.hours` → [ Giờ mở cửa — đang cập nhật ]
**Button label** `community › hub.ctaLabel` → Tìm Hub
**[brief] Sketch** `community › hub.sketch` → góc phòng có sách, bàn dài, người ngồi viết và trò chuyện

### Online community

**Label** `community › online.label` → Cộng đồng online
**Channel 1 index** `community › online.channels[0].index` → Kênh các W
**Channel 1 title** `community › online.channels[0].title` → Discord
**Channel 1 desc** `community › online.channels[0].description` → Không gian của các W, thực hành tiếp diễn giữa các buổi.
**Channel 2 index** `community › online.channels[1].index` → Lưu trữ dài
**Channel 2 title** `community › online.channels[1].title` → Blog W4GZ
**Channel 2 desc** `community › online.channels[1].description` → Lưu trữ dài, sản phẩm biên tập.
**Channel 3 index** `community › online.channels[2].index` → Cập nhật
**Channel 3 title** `community › online.channels[2].title` → Fanpage
**Channel 3 desc** `community › online.channels[2].description` → Sự kiện, thông báo, lời mời mở.
**[note]** `community › online.note` → Discord dành cho các W đã qua cổng; Blog và Fanpage là cửa sổ mở cho công chúng. Cần link thật: Discord, Blog, Fanpage.

### Chapter transition (→ /ecosystem)

**Transition line** `community › transition.text` → Hãy xem cộng đồng này tạo ra gì.

---

## 6 · Ecosystem — `/ecosystem`

*Source: `content/ecosystem.ts`. Chapter V — The -4GZ Ecosystem.*

**SEO description** `eco › description`
The -4GZ Ecosystem — viết là gốc. Sự giàu có là bằng chứng; mục tiêu là chuẩn hóa để lan tỏa. Dictionary4GenZ, Library4GenZ, và W4GZ Media.

### Hero

**Label** `eco › hero.label` → The -4GZ Ecosystem
**Heading** `eco › hero.heading` → Viết là gốc. Mọi thứ khác mọc lên từ đó.
**Sub-heading** `eco › hero.sub`
“-4GZ” là một protocol, không phải một nhãn: cho thế hệ này, do thế hệ này dựng, giữ theo một chuẩn mà chính thế hệ này định nghĩa và bảo vệ.

### Richness is the proof

**Label** `eco › richness.label` → Sự giàu có chính là bằng chứng
**Body** `eco › richness.body`
Bề rộng các hoạt động -4GZ là minh chứng sống cho sức mạnh của cộng đồng vừa nói tới: một cộng đồng các W viết khỏe thì sinh ra đời sống văn hóa phong phú quanh nó. Tinh thần các nhánh: thân mật, cozy, tăng vốn văn hóa và kết nối, lành mạnh và văn minh, đề cao kiến thức và sự thạo nghề.

### The -4GZ verticals

**Vertical 1 name** `eco › verticals[0].name` → storytelling4genz · poetry4genz
**Vertical 1 desc** `eco › verticals[0].desc` → Kể chuyện trên sân khấu; đọc và làm thơ.
**Vertical 2 name** `eco › verticals[1].name` → english4genz · japanese4genz · chinese4genz
**Vertical 2 desc** `eco › verticals[1].desc` → Học và dùng các thứ tiếng — mỗi ngôn ngữ là một thế giới.
**Vertical 3 name** `eco › verticals[2].name` → workshop4genz · logic4genz
**Vertical 3 desc** `eco › verticals[2].desc` → Thực hành chuyên đề do các W dẫn; rèn lập luận mạch lạc.
**Vertical 4 name** `eco › verticals[3].name` → drawing4genz · chess4genz · gaming4genz
**Vertical 4 desc** `eco › verticals[3].desc` → Vẽ, cờ, game — mài giác quan, tư duy và sự nhập cuộc.
**Vertical 5 name** `eco › verticals[4].name` → weekend4genz
**Vertical 5 desc** `eco › verticals[4].desc` → Thể thao nói chung — running, trekking, hiking; thân thể là nền của trải nghiệm.
**Vertical 6 name** `eco › verticals[5].name` → communitybuilding4genz
**Vertical 6 desc** `eco › verticals[5].desc` → Nghề xây cộng đồng — để mô hình tự nhân rộng.

### Strategic projects

**Section label** `eco › projectsLabel` → Những dự án chiến lược

**Card 1 kind** `eco › ecoCards[0].kind` → Dự án
**Card 1 name** `eco › ecoCards[0].name` → Dictionary4GenZ
**Card 1 desc** `eco › ecoCards[0].desc`
Một từ điển sống, theo nhịp sống người Việt từ lịch sử đến hiện đại — củng cố hạ tầng chữ viết ở mức kí tự và từ ngữ.

**Card 2 kind** `eco › ecoCards[1].kind` → Dự án
**Card 2 name** `eco › ecoCards[1].name` → Library4GenZ
**Card 2 desc** `eco › ecoCards[1].desc`
Hệ thư viện dịch trực tiếp từ các nguồn mở uy tín nước ngoài (Psychology/Communication/Philosophy4GenZ) — nâng hạ tầng tri thức cho người Việt.

**Card 3 kind** `eco › ecoCards[2].kind` → Một W
**Card 3 name** `eco › ecoCards[2].name` → The Weaver
**Card 3 desc** `eco › ecoCards[2].desc` → Người dệt những mảnh rời rạc thành một mạch truyện liền.

**Card 4 kind** `eco › ecoCards[3].kind` → Một W
**Card 4 name** `eco › ecoCards[3].name` → The Witness
**Card 4 desc** `eco › ecoCards[3].desc` → Người ghi lại điều thật, không tô vẽ — trí nhớ của cộng đồng.

**[stat — verify] Value** `eco › projects.stat.value`
Bối cảnh: ~80 triệu người dùng internet, nhưng trung bình mỗi người Việt đọc khoảng 1 cuốn sách/năm ngoài sách giáo khoa — thuộc nhóm thấp trong khu vực.
**[stat — verify] Source** `eco › projects.stat.source` → DataReportal 2025 · ngành xuất bản VN 2016–2025

**Projects closing** `eco › projects.closing`
Các dự án này đánh thẳng vào lỗ hổng cấu trúc — đặc biệt trên môi trường internet và cho Gen Z — vốn đang khiến “narrative” của thế hệ này khó được viết tốt. W4GZ là một tập hợp leader hành động vào cấu trúc, không tự xem mình là thực thể thụ động.

### V.3 · 02 (Standardise to spread)

**Kicker** `eco › V.3 › kicker` → 02
**Heading** `eco › V.3 › heading` → Mục tiêu lớn hơn: trao quyền & chuẩn hóa để lan tỏa
**Body ¶1** `eco › V.3 › body[0]`
Hệ sinh thái không chỉ phong phú. Nó hướng tới trao quyền, tăng vốn xã hội, củng cố trải nghiệm sống ý nghĩa — và quan trọng nhất, chuẩn hóa các hoạt động để có thể lan ra toàn xã hội.
**Body ¶2** `eco › V.3 › body[1]`
Một hoạt động hay nhưng không chuẩn hóa thì chết cùng người tổ chức. Chuẩn hóa biến nó thành thứ nhân rộng được.

### Collaborate

**Heading** `eco › collaborate.heading` → Muốn cùng dựng?
**Body** `eco › collaborate.body`
Tổ chức, định chế, hay người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ — hãy liên hệ.
**Button label** `eco › collaborate.ctaLabel` → Liên hệ

### W4GZ Media panel

**Kicker** `eco › media.kicker` → Trong hệ sinh thái
**Wordmark** `eco › media.wordmark` → W4GZ MEDIA
**Tagline** `eco › media.tagline` → reality, disrupted.
**Body ¶1** `eco › media.body[0]`
W4GZ Media là cánh tay phát ngôn của cả mạng lưới — nơi câu chuyện rời trang giấy và bước vào dòng chảy hỗn loạn của hình ảnh, âm thanh, và sự chú ý.
**Body ¶2** `eco › media.body[1]`
Nếu phần còn lại của W4GZ là trật tự của mực và giấy, thì Media là thế lực được sinh ra để phá vỡ trật tự ấy: nhanh hơn, ồn hơn, và sắc hơn — đủ để một câu chuyện đáng sống chạm tới những người chưa từng nghe tên W4GZ.
**Body ¶3** `eco › media.body[2]`
Họ đảm bảo social impact, đóng gói hoạt động và ấn phẩm theo cách bền vững, hợp xu hướng và có lợi nhuận; chuẩn hóa cách làm việc và monetization để các hoạt động ý nghĩa không trở thành gánh nặng tài nguyên cho các W, đồng thời hút nguồn lực phù hợp từ bên ngoài.
**Button label** `eco › media.cta` → Tìm hiểu W4GZ Media →

### Chapter transition (→ /people)

**Transition line** `eco › transition.text` → Đằng sau tất cả là những W — gặp họ.

---

## 7 · W (People) — `/people`

*Source: `content/people.ts`. Chapter VI. Law III: sketch portraits + single-initial aliases + cohort only — never names, never photos.*

**SEO description** `people › description`
W — mỗi người trong cộng đồng W4GZ là một W. Bên dưới, một sự tôn vinh ở tông trầm: chân dung kí họa, bí danh, cột mốc (Law III: ẩn danh tuyệt đối).

### W-identity bloom hero

**Kicker** `people › wHero.kicker` → Bản sắc · W4GZ
**Heading (parts join as one line)** `people › wHero.headParts` → Mỗi người là một W.
**Lead ¶1** `people › wHero.leads[0]`
Mỗi người trong cộng đồng W4GZ đều có thể tự gọi mình là một W.
**Lead ¶2** `people › wHero.leads[1]`
Người dệt, người viết, người chứng, người dẫn đường — quanh một chữ, là mọi vai mà một người cầm bút có thể mang.

**[note] Orbiting "W-words"** `people › wWords`
Weaver, Writer, Watcher, Welder, Win, Wright, Whisperer, Witness, Walker, Wonderer, Wisdom-keeper, Web-keeper, What, Wordsmith, Wanderer, Waveform, Welcomer, Window, Wayfinder, Who, When, Would, Where, Why, Within

### Section hero

**Label** `people › hero.label` → The People
**Heading** `people › hero.heading` → Những người đã cầm lấy cây bút.
**Sub-heading** `people › hero.sub` → Một sự tôn vinh giữ ở tông trầm — qua tác phẩm, qua cột mốc, qua bí danh.

### On anonymity

**Label** `people › anonymity.label` → Về sự ẩn danh
**Heading** `people › anonymity.heading` → Vì sao bạn thấy kí họa, không phải ảnh
**Body** `people › anonymity.body`
Trong W4GZ, bảo vệ riêng tư là một luật. Sau khóa học, thành viên giữ ẩn danh. Vì thế trang này tôn vinh bằng chân dung vẽ và bằng bí danh — sự kín đáo ấy là một phần đạo đức của cộng đồng, không phải giới hạn kĩ thuật.

### Portraits (anonymised)

**Section label** `people › portraitsLabel` → Những chân dung
**Portrait 1 — initial** `people › portraits[0].initial` → M.
**Portrait 1 — cohort** `people › portraits[0].cohort` → Khóa 12
**Portrait 1 — line** `people › portraits[0].line` → Full marathon đầu tiên ở tuổi ba mươi tư.
**Portrait 2 — initial** `people › portraits[1].initial` → H.
**Portrait 2 — cohort** `people › portraits[1].cohort` → Khóa 9
**Portrait 2 — line** `people › portraits[1].line` → …
**Portrait 3 — initial** `people › portraits[2].initial` → L.
**Portrait 3 — cohort** `people › portraits[2].cohort` → Khóa 7
**Portrait 3 — line** `people › portraits[2].line` → Từ người chưa từng viết, thành người viết đều mỗi tuần.
**[note] Portraits 4–6** `people › portraits[3..5]` → ? · Khóa __ · "Cột mốc — đang cập nhật" (×3 placeholder cards)
**[note]** `people › portraitsNote` → Cần dữ liệu thật đã ẩn danh: 6–9 bí danh + cột mốc/câu, kèm kí họa.

### Builders

**Label** `people › builders.label` → Những người dựng hệ
**Body** `people › builders.body`
Phía sau các dự án và nhánh là những W dẫn dắt — gồm W4GZ Media, tiếng nói đưa W4GZ ra ngoài. Họ cũng ẩn danh theo cùng nguyên tắc.

### Chapter transition (→ /join)

**Transition line** `people › transition.text` → Trang tiếp theo của cộng đồng này có thể mang tên bạn.

---

## 8 · Join — `/join`

*Source: `content/join.ts`. Chapter VII — The Covenant.*

**SEO description** `join › description`
The Covenant — trang đầu tiên của bạn. Một cổng, hai lối qua: Introduction + bài luận tốt nghiệp, hoặc Advanced.

### Hero

**Label** `join › hero.label` → The Covenant
**Heading** `join › hero.heading` → Trang đầu tiên của bạn.
**Sub-heading** `join › hero.sub`
Tham gia W4GZ là nhận một chuẩn mực vào trong mình — một lời tuyên với chính mình, có cộng đồng làm chứng.

### The covenant

**Label** `join › covenant.label` → Lời tuyên
**Line 1** `join › covenant.lines[0]`
Tôi hiểu W4GZ là một chuẩn tôi gìn giữ, không phải một nhóm tôi gia nhập.
**Line 2** `join › covenant.lines[1]`
Tôi viết với sự trung thực và công bố với tay nghề. Tôi nhận phản hồi không phòng thủ, và đưa phản hồi cụ thể, hướng vào trang viết. Tôi chọn nhịp đều thay vì những đợt bùng cháy rồi tắt.
**Line 3** `join › covenant.lines[2]`
Tôi không xem mình là người thụ động trước thời đại. Tôi giành lại quyền kể câu chuyện của mình, và góp phần dựng những câu chuyện đáng sống cho cả những người quanh tôi.

### The gate

**Gate label** `join › gateLabel` → Một cổng, hai lối qua
**Path A — label** `join › paths[0].label` → Lối A — Introduction + bài luận tốt nghiệp
**Path A — body** `join › paths[0].body`
Hoàn tất Introduction online và nộp bài luận tốt nghiệp; được duyệt theo kì onboarding của cộng đồng — bốn kì mỗi năm.
**Path A — button** `join › paths[0].ctaLabel` → Enroll Introduction
**Path B — label** `join › paths[1].label` → Lối B — Advanced
**Path B — body** `join › paths[1].body` → Hoàn tất W4GZ Advanced tại HCMC (xét đơn).
**Path B — button** `join › paths[1].ctaLabel` → Apply for Advanced

**Gate closing** `join › gateClosing`
Hai lối đều đi qua một cổng duy nhất: viết. Đó là cách W4GZ giữ mình là cộng đồng của những người biết viết.

### Closing

**Motto** `join › closing.motto` → Creates narratives worth living.
**Intent** `join › closing.intent` → Does this make us better writers, and more complete human beings — together?

---

# PART C · The deep read

## The Power of Narrative — `/power-of-narrative`

*Source: `content/power-of-narrative.ts`. Three chapters, shown one at a time. All prose is verbatim — the deepest, slowest read on the site.*

**SEO title** `pon › meta.title` → The Power of Narrative
**SEO description** `pon › meta.description`
Sức mạnh của tự sự, trong ba chương: narrative là gì, nó đã dệt nên những gì trong lịch sử, và vì sao nó là la bàn sống còn của Gen Z hôm nay.

### Closing motto (after Chapter III)

**Kicker** `pon › motto.kicker` → Ba chương · một kết luận
**Line** `pon › motto.line` → Creates narratives worth living.
**Sub** `pon › motto.sub`
Đó là lí do W4GZ tồn tại — và là hệ điều hành của nó, không phải một khẩu hiệu: xây những con người tự viết nên một đời đáng sống.
**Start button → /courses** `pon › motto.startLabel` → Bắt đầu viết →

---

### Chapter I

**Chapter label** `pon › ch1.klabel` → Chương I — Narrative dệt nên thế giới
**Title line 1** `pon › ch1.title[0]` → Tự sự không mô tả thế giới.
**Title line 2** `pon › ch1.title[1]` → Nó dệt nên thế giới.

**Lead** `pon › ch1.lead`
Năm 1688, trong một quán cà phê nhỏ trên phố Tower của London, người ta truyền tay nhau tin tức tàu bè: con tàu nào vừa rời cảng, vùng biển nào đang có bão, chuyến hàng nào chưa thấy về.

**[brief] Figure** `pon › ch1.block[0]` → Tranh khắc / ảnh tư liệu quán cà phê Lloyd's, hoặc toà nhà Lloyd's of London thời đầu (thế kỉ 17–18).

**¶** `pon › ch1.block[1]`
Edward Lloyd không buôn tàu; ông chỉ bán cà phê và để khách kể cho nhau nghe. Nhưng từ những mẩu tin ấy, một việc chưa từng có đã thành hình: người ta bắt đầu đặt cược, rồi bảo đảm, cho những điều chưa xảy ra. Một con tàu chưa chìm vẫn được trả tiền nếu nó chìm. Quán cà phê đó trở thành Lloyd's of London, và cùng với nó, cả một nền kinh tế học được cách nắm giữ một tương lai nó không nhìn thấy.

**¶** `pon › ch1.block[2]`
Điều khiến chuyện này khả dĩ không phải tiền, cũng không phải tàu. Đó là một câu chuyện chung đủ vững để nhiều người cùng đặt cược lên: một hình dung được chia sẻ về điều gì có thể xảy ra, và ai chịu phần nào nếu nó xảy ra. Tự sự đã làm một việc mà không công cụ vật chất nào làm được — biến một tương lai bất định thành thứ con người có thể cam kết.

**¶** `pon › ch1.block[3]`
Ta quen nghĩ narrative là kĩ năng kể chuyện, một lớp trang trí cho nội dung. Đó là cách hiểu nhỏ nhất, và sai nhất, về nó. Narrative là cơ chế nhờ đó một cái tôi, một dòng thời gian, và một thế giới trở nên mạch lạc — đủ mạch lạc để sống được trong đó. Quyền lực thật của nó lộ ra ở những điều nó dệt.

**Subhead** `pon › ch1.block[4]` → Trật tự là thứ ta áp vào, không phải thứ ta tìm thấy

**¶** `pon › ch1.block[5]`
Đời sống đến với ta dưới dạng hỗn mang: những mảnh rời rạc, đứt đoạn, chồng chéo, phần lớn vô nghĩa khi đứng một mình. Cái khiến chuỗi mảnh ấy thành một đời — của tôi, đáng kể, đang đi đâu đó — là việc ta kể nó thành chuyện. Alasdair MacIntyre cho rằng con người về bản chất là một sinh vật kể chuyện; Paul Ricoeur gọi tính thống nhất của một đời chính là tính thống nhất của một tự sự.

**¶** `pon › ch1.block[6]`
Bộ não không lưu kinh nghiệm như một kho dữ liệu trung tính. Nó không ngừng biên tập chúng thành cốt truyện — nhân quả, trước sau, ý nghĩa — kể cả khi ta không để ý. Vậy nên câu hỏi không phải bạn có sống bằng narrative hay không; bạn không có lựa chọn đó. Câu hỏi là narrative ấy do ai viết, và bạn có đọc lại được nó không.

**Subhead** `pon › ch1.block[7]` → Cái tôi được dệt, không phải được tìm thấy

**¶** `pon › ch1.block[8]`
Ta hình dung có một cái “tôi” cố định ngồi sẵn bên trong, rồi mới kể chuyện về nó. Trật tự thật gần với điều ngược lại: cái tôi phần lớn là sản phẩm của những câu chuyện, không phải một tác giả có trước chúng. Ludwig Wittgenstein lập luận rằng không tồn tại một ngôn ngữ riêng tư — mọi khái niệm ta dùng để hiểu chính mình đều mượn từ một cộng đồng đã có trước ta. Ta nghĩ về bản thân bằng những từ ta không tự đặt ra, trong những khuôn chuyện ta thừa hưởng.

**¶** `pon › ch1.block[9]`
Điều này thoạt nghe như một sự tước đoạt, nhưng nó là tin tốt nhất ở đây: nếu cái tôi được viết nên, thì nó viết lại được. Tự sự không chạm vào con người ở bề mặt hành vi; nó chạm ở tầng con người là ai. Đó là lí do viết về đời mình không phải là tự biểu đạt một cái tôi có sẵn — nó là tự kiến tạo.

**Subhead** `pon › ch1.block[10]` → Tương lai được dệt, không phải được tìm thấy

**¶** `pon › ch1.block[11]`
Quay lại quán cà phê của Lloyd. Điều nó hé lộ không chỉ về bảo hiểm, mà về bản chất của tương lai. Ta nói về tương lai như một nơi phía trước đang chờ ta đi tới. Nhưng ta không bao giờ thấy một tương lai trống; ta chỉ thấy được những gì có thể lặp lại từ điều đã biết. Ta tin có “ngày mai” vì đêm và ngày đã quay vòng đủ lâu để tin được.

**¶** `pon › ch1.block[12]`
Phần lớn bức tranh tương lai của một người được dệt từ những điều lặp đi lặp lại — và từ những điều nhiều người cùng cam kết sẽ giữ. Một hợp đồng, một lời thề, một thể chế, một loại tiền: tất cả đều là những tự sự chung đủ vững để dựa vào. Tương lai ổn định của một cá nhân, vì thế, phụ thuộc vào năng lực của tập thể quanh họ trong việc dệt một tương lai chung. Nơi câu chuyện chung rách, tương lai cá nhân cũng mỏng đi theo.

**Subhead** `pon › ch1.block[13]` → Quá khứ được dệt lại, không phải được cất giữ

**¶** `pon › ch1.block[14]`
Đền Ise ở Nhật được dỡ xuống và dựng lại y nguyên, trên mảnh đất bên cạnh, đều đặn mỗi hai mươi năm — đã hơn một nghìn ba trăm năm như thế. Cái “cổ” nhất ở đó chưa bao giờ quá hai mươi tuổi, mà cũng chưa bao giờ thật sự mới. Quá khứ, hóa ra, vận hành gần với điều đó: không phải một kho cố định nằm sau lưng, mà là vật liệu sống được dệt lại mỗi lần ta chạm vào.

**[brief] Figure** `pon › ch1.block[15]` → Ảnh đền Ise (Ise Jingū) và nghi thức Shikinen Sengū — dựng lại đền 20 năm một lần.

**¶** `pon › ch1.block[16]`
Khoa học thần kinh về tái củng cố trí nhớ cho thấy mỗi lần một kí ức được gợi ra, nó được ghi lại một lần nữa, và có thể đổi đi trong chính lúc ấy. Một sang chấn là một câu chuyện lặp lại không mời, và nó cai trị tương lai: ai từng mang một nỗi đau đủ sâu đều biết nó tái diễn mỗi khi họ bước tới. Nhưng nếu quá khứ sống trong cách nó được kể lại, thì đó cũng là nơi duy nhất nó có thể được sửa. Quyền tác giả với đời mình vươn cả về phía sau.

**Subhead** `pon › ch1.block[17]` → Một đời là một thực hành, không phải một hành trình

**¶** `pon › ch1.block[18]`
Gộp ba điều lại — cái tôi, tương lai, và quá khứ đều được dệt chứ không được tìm thấy — và một hệ quả hiện ra. Thời gian không phải con đường ta đi trên đó; nó là tấm vải ta dệt. Đời không phải một hành trình từ điểm này tới điểm kia. Nó là một thực hành. Câu hỏi trung tâm đổi từ “tôi sẽ đi đâu” thành “tôi sẽ làm gì, lặp đi lặp lại”.

**¶** `pon › ch1.block[19]`
Aristotle gọi phẩm chất có được qua lặp lại đến mức thành bản năng là hexis. Một đời được tự viết không phải là một quyết định lớn duy nhất; nó là một sợi chỉ được kéo đều mỗi ngày. Điều này nghe kém hùng tráng hơn một bước ngoặt, nhưng nó là cách thật sự một con người đổi khác.

**Subhead** `pon › ch1.block[20]` → Trong thời đại máy viết, đây là chủ quyền cuối cùng

**¶** `pon › ch1.block[21]`
Tất cả những điều trên đã đúng từ lâu trước khi có máy. Nhưng một điều kiện mới làm chúng thành cấp bách. Khi máy sinh ra văn bản ở quy mô vô hạn, hai việc xảy ra cùng lúc. Thứ nhất, cái tôi bị dìm trong những tự sự nó không viết: dòng feed chọn điều ta thấy, ta muốn, ta sợ, và lặng lẽ kể đời ta thay ta.

**¶** `pon › ch1.block[22]`
Năm 1936, Walter Benjamin đã tách thông tin khỏi truyện — một thứ đòi tiêu thụ tức thì rồi vứt, một thứ giữ lại nghĩa và nhả ra chậm; Byung-Chul Han gọi thời ta là một cuộc khủng hoảng tự sự, nơi thông tin tràn bờ còn năng lực kể một câu chuyện thật thì teo lại. Thứ hai, việc sản xuất chữ một cách cơ học mất giá, trong khi việc con người dệt nghĩa trở nên khan hiếm.

**¶** `pon › ch1.block[23]`
Giữa bối cảnh đó, năng lực tự viết tự sự của mình không còn là một kĩ năng mềm. Nó là hình thức chủ quyền cuối cùng mà máy không thực hiện thay được — vì máy có thể viết câu thay bạn, nhưng không thể sống đời bạn, và không thể quyết nghĩa của đời ấy.

**Subhead** `pon › ch1.block[24]` → Tự sự là việc chung

**¶** `pon › ch1.block[25]`
Có một lí do cuối khiến narrative không phải việc của riêng một người. Nếu cái tôi được dệt từ một ngôn ngữ chung, và nếu một tương lai ổn định cần một câu chuyện tập thể, thì tự viết đời mình không phải là một hành vi cô lập — nó là việc tham gia vào một tấm dệt lớn hơn. Trong mọi cách tạo tự sự, viết là kỉ luật khắc nghiệt nhất: nó buộc thứ hỗn mang trong đầu thành một thứ mạch lạc, tuần tự, và chịu trách nhiệm trước một người đọc.

**¶** `pon › ch1.block[26]`
Đó là vì sao một cộng đồng người viết không phải một tiện nghi — nó là điều kiện. Người ta học cách cầm cây bút trên tấm vải chung bằng cách ngồi cạnh những người khác cũng đang cầm cây bút của họ.

**Closing bridge → Chapter II** `pon › ch1.foot.bridge`
Narrative dệt nên một cái tôi và một dòng thời gian. Nhưng quyền lực ấy chưa bao giờ dừng lại ở một con người — nhìn ra ngoài, vào lịch sử và văn hóa, sẽ thấy chính nó đã dệt nên những thứ lớn hơn rất nhiều.

---

### Chapter II

**Chapter label** `pon › ch2.klabel` → Chương II — Narrative là công nghệ của thực tại
**Title line 1** `pon › ch2.title[0]` → Bộ não không nhìn thấy sự vật.
**Title line 2** `pon › ch2.title[1]` → Nó nhìn thấy câu chuyện.

**Lead** `pon › ch2.lead`
Năm 1944, hai nhà tâm lí học Fritz Heider và Marianne Simmel cho người xem một đoạn phim ngắn: vài hình tam giác và một vòng tròn di chuyển quanh một hình chữ nhật. Không có gì khác — chỉ những hình khối trượt trên màn hình.

**[brief] Figure** `pon › ch2.block[0]` → Vài khung hình từ phim hình khối chuyển động của Heider & Simmel (1944) — tam giác lớn, tam giác nhỏ, vòng tròn quanh một hình chữ nhật.

**¶** `pon › ch2.block[1]`
Gần như tất cả người xem kể lại cùng một thứ: một kẻ bắt nạt, một cuộc rượt đuổi, một đôi trốn thoát, một kẻ ra tay nghĩa hiệp. Họ không thấy hình học. Họ thấy một câu chuyện, đầy đủ động cơ, phe phái, và một kết cục.

**¶** `pon › ch2.block[2]`
Thí nghiệm ấy phơi bày một điều ta hiếm khi để ý: tâm trí con người không tiếp nhận thế giới như một chuỗi dữ kiện trung tính rồi mới gán nghĩa. Nó kể. Kể là chế độ mặc định, bật sẵn, chạy cả khi chẳng có gì để kể. Và nếu narrative là cách thế giới đến với ta, thì ai định hình được câu chuyện sẽ định hình được chính cái thực tại ta sống trong đó. Quyền lực ấy hiện ra rõ nhất khi nhìn nó vận hành ngoài đời — qua nhận thức, qua xã hội, qua lịch sử.

**Subhead** `pon › ch2.block[3]` → Không ai có thể không kể

**¶** `pon › ch2.block[4]`
Nhà tâm lí học Jerome Bruner dành phần lớn sự nghiệp để chỉ ra rằng con người có hai cách nghĩ tách biệt: một lối luận lí, dùng cho chứng minh và phân loại; và một lối tự sự, dùng để hiểu con người, ý định, và đời sống. Hầu hết những gì quan trọng với một người — họ là ai, vì sao họ làm điều họ làm, điều gì đáng — đều được xử lí bằng lối thứ hai.

**¶** `pon › ch2.block[5]`
Ta không nhớ một ngày như một bảng số liệu; ta nhớ nó như một cảnh có mở đầu, khúc ngoặt, và một nghĩa. Những hình tam giác của Heider và Simmel chỉ làm lộ ra cơ chế vẫn luôn chạy ngầm. Vì thế câu hỏi chưa bao giờ là có nên sống bằng câu chuyện hay không. Câu hỏi là câu chuyện ấy được viết một cách tỉnh táo, hay bị bỏ mặc cho nó tự viết.

**Subhead** `pon › ch2.block[6]` → Câu chuyện biến người lạ thành một “chúng ta”

**¶** `pon › ch2.block[7]`
Năm 1983, Benedict Anderson đưa ra một ý đã đổi cách ta hiểu về quốc gia: một dân tộc là một cộng đồng tưởng tượng. Không phải tưởng tượng theo nghĩa giả, mà theo nghĩa nó sống nhờ một câu chuyện chung — hàng triệu người chưa bao giờ gặp nhau vẫn thấy mình thuộc về cùng một “chúng ta”, vì cùng đọc một thứ tiếng, cùng một mặt báo mỗi sáng, cùng một dòng kể về mình là ai và từ đâu tới. Anderson chỉ ra chính máy in, tờ báo và cuốn tiểu thuyết đã làm cái “chúng ta” ấy khả dĩ.

**[brief] Figure** `pon › ch2.block[8]` → Trang nhất một tờ báo cũ và/hoặc máy in thời đầu — biểu tượng của “cộng đồng tưởng tượng”.

**¶** `pon › ch2.block[9]`
Tiền tệ, luật pháp, một thương hiệu, một tôn giáo cũng vận hành như thế: tất cả là những câu chuyện chung đủ vững để người lạ phối hợp với nhau ở một quy mô không bầy đàn sinh học nào đạt tới. Narrative không phải lớp sơn phủ trên nền văn minh. Nó là kết cấu chịu lực.

**Subhead** `pon › ch2.block[10]` → Một câu chuyện đủ người tin sẽ tự thành sự thật

**¶** `pon › ch2.block[11]`
Năm 1948, nhà xã hội học Robert Merton đặt tên cho một cơ chế: lời tiên tri tự ứng nghiệm. Ví dụ của ông là một ngân hàng vốn lành mạnh. Một tin đồn vô căn cứ rằng nó sắp vỡ nợ khiến người gửi đổ xô rút tiền; và chính việc rút tiền đồng loạt làm ngân hàng vỡ nợ thật. Câu chuyện sai đã tự biến mình thành sự thật.

**[brief] Figure** `pon › ch2.block[12]` → Ảnh tư liệu đám đông xếp hàng rút tiền trước một ngân hàng (bank run, thời Đại Khủng Hoảng những năm 1930).

**¶** `pon › ch2.block[13]`
Nhà kinh tế học Robert Shiller, trong cái ông gọi là kinh tế học tự sự, cho thấy các cuộc suy thoái, bong bóng, và cơn sốt đầu tư phần lớn lan như những câu chuyện truyền từ người sang người, chứ không chỉ chạy theo con số. Đây là tầng quyền lực mà phần đầu chưa chạm tới: narrative không chỉ giúp ta hình dung tương lai — một câu chuyện được tin đủ rộng sẽ sản xuất ra chính tương lai đó.

**Subhead** `pon › ch2.block[14]` → Một đời, và một dân tộc, có thể được kể lại

**¶** `pon › ch2.block[15]`
Thập niên 1980, hai nhà trị liệu Michael White và David Epston dựng một trường phái trên một câu đơn giản: con người không phải là vấn đề; vấn đề mới là vấn đề. Họ giúp thân chủ tách mình khỏi câu chuyện đang giam mình — “tôi là kẻ thất bại”, “tôi là nỗi lo của mọi người” — rồi kể lại đời mình theo một cách khác, vẫn thật nhưng rộng hơn.

**¶** `pon › ch2.block[16]`
Cùng một nguyên lí, ở quy mô một quốc gia: khi Nam Phi bước ra khỏi chế độ apartheid năm 1996, một trong những công cụ họ chọn cho sự chuyển tiếp là một ủy ban sự thật, nơi nạn nhân và cả người gây ra tội ác cùng kể công khai điều đã xảy ra. Một xã hội tự kể lại mình để có thể sống tiếp. Narrative, hóa ra, là dụng cụ để tái cấu trúc cả nỗi đau — của một người, và của một cộng đồng.

**[brief] Figure** `pon › ch2.block[17]` → Ảnh một phiên điều trần của Ủy ban Sự thật và Hoà giải Nam Phi (1996) — xử lí trang trọng, tiết chế.

**Subhead** `pon › ch2.block[18]` → Câu chuyện là công nghệ đầu tiên của loài người

**¶** `pon › ch2.block[19]`
Rất lâu trước máy in hay con chữ, đã có một công nghệ để giữ và truyền cả một nền văn hóa: kể. Thập niên 1930, học giả Milman Parry sang vùng Balkan ghi lại những người hát rong còn thuộc lòng các thiên sử thi dài hàng nghìn câu. Ông chứng minh rằng Iliad và Odyssey, trước khi được viết ra, đã sống và lưu truyền bằng một bộ khuôn tự sự cho phép trí nhớ con người mang theo cả một thế giới.

**[brief] Figure (tall)** `pon › ch2.block[20]` → Chùm ảnh “sử thi & thần thoại đan vào văn hóa loài người”, trải nhiều nền văn minh: bản chép tay Iliad/Odyssey và bình gốm Hy Lạp vẽ cảnh sử thi; bảng đất sét sử thi Gilgamesh (Lưỡng Hà); tranh/phù điêu Mahabharata–Ramayana (Ấn Độ); tranh thần thoại từ các nền văn hóa khác (Bắc Âu, Tây Phi, bản địa châu Mỹ…). Mục đích thị giác: mọi nền văn hóa đều dựng mình quanh những câu chuyện lớn.

**¶** `pon › ch2.block[21]`
Câu chuyện là ổ cứng đầu tiên của loài người. Và như mọi ổ cứng, ai ghi vào đó thì quyết định cái gì được nhớ và cái gì biến mất. Quyền kể, ngay từ buổi đầu, đã là quyền quyết định cái gì sống sót.

**Subhead** `pon › ch2.block[22]` → Trong nền kinh tế chú ý, trận chiến thật là giành câu chuyện

**¶** `pon › ch2.block[23]`
Năm 1922, Walter Lippmann viết rằng con người không phản ứng với thế giới, mà với những “bức tranh trong đầu” về thế giới — và những bức tranh ấy phần lớn do người khác đặt vào. Một thế kỉ sau, việc đặt tranh vào đầu người khác đã thành một ngành công nghiệp vận hành ở tốc độ máy.

**[brief] Figure** `pon › ch2.block[24]` → Áp phích tuyên truyền hoặc hình ảnh truyền thông đại chúng đầu thế kỉ 20 — minh hoạ “bức tranh trong đầu”.

**¶** `pon › ch2.block[25]`
Dòng feed không đưa cho bạn sự kiện; nó đưa một phiên bản đã được dựng về điều đáng chú ý, đáng muốn, đáng sợ — và nó dựng phiên bản ấy hàng tỉ lần mỗi ngày. Khi câu chuyện có thể được chế tạo và phát tán ở quy mô đó, trận chiến thật không phải giành lấy sự thật, mà giành lấy việc ai kể. Trong một thế giới như thế, tự mình kể lấy đời mình một cách tỉnh táo không phải một thú chơi tinh thần — nó là cách duy nhất để cây bút viết nên bạn nằm trong tay bạn.

**Closing bridge → Chapter III** `pon › ch2.foot.bridge`
Hai chương đầu đúng với mọi thời đại. Chương cuối nói về một thời đại cụ thể — và về thế hệ đầu tiên phải lớn lên trọn vẹn bên trong nó.

---

### Chapter III

**Chapter label** `pon › ch3.klabel` → Chương III — Narrative là la bàn để định hướng
**Title line 1** `pon › ch3.title[0]` → La bàn không được trao.
**Title line 2** `pon › ch3.title[1]` → Nó được viết.

**Lead** `pon › ch3.lead`
Có một điều chưa từng xảy ra trong lịch sử loài người đang diễn ra mỗi sáng: hàng tỉ người mở điện thoại, và mỗi người thấy một thế giới khác nhau.

**[brief] Figure** `pon › ch3.block[0]` → Nhiều màn hình điện thoại đặt cạnh nhau, mỗi cái một feed khác hẳn — “thực tại chung” bị tách thành hàng tỉ thực tại riêng.

**¶** `pon › ch3.block[1]`
Không còn một trang nhất chung, một bản tin chung, một câu chuyện chung mà cả một thế hệ cùng thức dậy bên trong. Thuật toán dệt cho mỗi người một dòng riêng, đo theo điều giữ được mắt họ lâu nhất — và không dòng nào giống dòng nào. Lần đầu tiên, “thực tại chung” của một xã hội bị tách thành hàng tỉ thực tại riêng tư, mỗi cái vừa khít một người.

**¶** `pon › ch3.block[2]`
Thế hệ Z là thế hệ đầu tiên lớn lên trọn vẹn bên trong điều kiện đó: nhiều thông tin hơn bất kì thế hệ nào từng có, và ít câu chuyện chung hơn để hiểu nó. Họ trưởng thành đúng vào lúc nhiều người gọi là thời các đại tự sự sụp đổ. Và chính trong điều kiện ấy, narrative — câu chuyện một người tự dệt cho đời mình — trở thành thứ đáng tin cậy nhất còn lại để định hướng.

**Subhead** `pon › ch3.block[3]` → Những tấm bản đồ chung đã tan

**¶** `pon › ch3.block[4]`
Năm 1979, triết gia Jean-François Lyotard mô tả điều kiện hậu hiện đại bằng một câu ngắn: sự hoài nghi với các đại tự sự. Những câu chuyện lớn từng trao cho một đời phương hướng — một đức tin chung, vòng cung của một dân tộc, lời hứa rằng học hành rồi sẽ có một chỗ đứng, một cái thang rõ ràng dẫn tới trưởng thành, thậm chí niềm tin chung rằng ngày mai sẽ tốt hơn hôm nay — đều đã rạn và phân mảnh.

**[brief] Figure** `pon › ch3.block[5]` → Hình ý niệm: một tấm bản đồ cũ bị rách / phân mảnh — “các đại tự sự sụp đổ”.

**¶** `pon › ch3.block[6]`
Lyotard viết điều này trước cả khi có internet. Nền tảng và thuật toán chỉ đẩy nó tới cực hạn: từ vài đại tự sự rạn nứt, tới hàng tỉ dòng feed riêng tư. Một thế hệ thừa hưởng không phải một tấm bản đồ sai, mà là không có tấm bản đồ mặc định nào cả.

**Subhead** `pon › ch3.block[7]` → Mất câu chuyện chung không chỉ là tự do

**¶** `pon › ch3.block[8]`
Việc không bị trói vào một câu chuyện áp đặt nghe như giải phóng, và phần nào đúng. Nhưng nhà xã hội học Émile Durkheim từ lâu đã đặt tên cho mặt còn lại: anomie — trạng thái mất phương hướng xảy ra khi cái khung chung cho biết điều gì đáng và mình đang đứng ở đâu trở nên mỏng đi.

**¶** `pon › ch3.block[9]`
Khi câu chuyện chung tan, thứ thay vào chỗ nó không tự động là sự tự do sáng tạo; thường là sự hoang mang. Đó là điều kiện nền mà thế hệ này phải khởi hành từ đó — không phải vì họ yếu hơn, mà vì họ là những người đầu tiên phải tự định hướng giữa một khoảng trống mà các thế hệ trước được lấp sẵn.

**Subhead** `pon › ch3.block[10]` → Nền tảng khiến tự kể khó hơn, không dễ hơn

**¶** `pon › ch3.block[11]`
Thoạt nhìn, feed cho mọi người một sân khấu để kể câu chuyện của mình. Nhưng nó làm một việc tinh vi và ngược lại. Các nhà nghiên cứu gọi đó là sự sụp đổ ngữ cảnh: trên một nền tảng, mọi khán giả của bạn dồn vào làm một — cha mẹ, sếp, người lạ, người cũ, tất cả cùng nhìn một bài đăng. Trong điều kiện đó, người ta không kể một câu chuyện thật; người ta trình diễn một phiên bản phẳng, thủ thế, an toàn cho mọi ánh mắt cùng lúc.

**[brief] Figure** `pon › ch3.block[12]` → Sơ đồ “sụp đổ ngữ cảnh”: nhiều nhóm khán giả (gia đình, sếp, bạn bè, người lạ) dồn vào một điểm/một bài đăng.

**¶** `pon › ch3.block[13]`
Sherry Turkle còn chỉ ra rằng sự kết nối thường trực bẻ vụn sự chú ý, để lại một cái tôi làm từ những phản ứng rời rạc thay vì một cái tôi giữ được một mạch xuyên suốt. Nền tảng cho bạn phương tiện phát sóng, không cho bạn quyền tác giả.

**Subhead** `pon › ch3.block[14]` → Nhưng một câu chuyện tự dệt lại đúng là thứ dự báo việc đi qua được

**¶** `pon › ch3.block[15]`
Đây là chỗ chẩn đoán biến thành quyền lực. Hàng chục năm nghiên cứu của Dan McAdams và nhiều người khác cho thấy những người dựng được một câu chuyện đời mạch lạc — một câu chuyện trong đó họ là tác giả, nơi vấp ngã trở thành một phần của vòng cung lớn hơn chứ không phải dấu chấm hết — cho thấy sức khỏe tinh thần và độ bền bỉ tốt hơn rõ rệt so với những người không có.

**¶** `pon › ch3.block[16]`
Cái la bàn sống sót qua sự tan rã của các tấm bản đồ chung là cái la bàn người ta tự dựng. Narrative ở đây không phải nỗi nhớ về một thời chắc chắn đã mất; nó là một năng lực đo được, thứ giữ cho một người không lạc khi không còn gì bên ngoài là cố định.

**Subhead** `pon › ch3.block[17]` → Khi máy biết kể chuyện, quyền tác giả của con người là thứ khan hiếm và quyết định

**¶** `pon › ch3.block[18]`
Một điều kiện mới làm tất cả gấp gáp hơn. Máy giờ sinh ra được vô tận những câu chuyện nghe lọt tai, theo yêu cầu, trong vài giây. Điều đó khiến một thứ thành rẻ — việc tạo ra văn bản có hình hài câu chuyện — và một thứ thành quý: một con người quyết định câu chuyện nào là thật với đời mình, rồi cam kết sống theo nó.

**¶** `pon › ch3.block[19]`
Với một thế hệ ngập trong nội dung do máy sinh, lằn ranh không còn nằm giữa người biết viết và người không. Nó nằm giữa người tự cầm bút và người để hệ thống cầm thay — giữa việc điều hướng và việc bị điều hướng.

**Subhead** `pon › ch3.block[20]` → Vì sao là thế hệ này, và vì sao là bây giờ

**¶** `pon › ch3.block[21]`
Thế hệ nào cũng phải tự tạo nghĩa. Nhưng thế hệ này là thế hệ đầu tiên phải làm điều đó với các tấm bản đồ đã tan sẵn và một cỗ máy đang làm ngập kênh truyền. Đó là cái khó đặc thù của họ — và cũng chính là lí do, với họ, tự dệt lấy tự sự không phải một kĩ năng mềm mà là năng lực sống còn cốt lõi. Người học được cách giữ một mạch riêng của mình sẽ đi qua được; người không, sẽ bị dòng chảy mang đi.

**Closing ¶** `pon › ch3.foot.para`
Narrative dệt nên một cái tôi, đã dệt nên cả một nền văn minh, và giờ là sợi dây đủ chắc duy nhất để một người trẻ bám vào giữa cơn lũ. Những thế hệ trước được trao sẵn một tấm bản đồ. Thế hệ này được trao một biển thông tin và không tấm bản đồ nào. Điều đó nghe như thiệt thòi, và phần nào đúng. Nhưng nó cũng có nghĩa: thứ duy nhất còn đáng tin không nằm ngoài kia, ở một thẩm quyền chung nào đó đã tan — nó nằm ở năng lực tự dệt một câu chuyện đủ vững để đứng lên trên.

**Final bridge** `pon › ch3.foot.bridge`
Thế giới sẽ kể rất nhiều câu chuyện về bạn, và sẽ kể chúng nhanh hơn bao giờ hết. Câu hỏi duy nhất là bạn có viết được câu của mình đủ rõ để không lạc giữa chúng.

---

# PART D · Forms

## Apply form — `/dang-ky`

*Source: `content/apply.ts`. The primary CTA — a gentle, multi-step application. Every question is an invitation, never an interrogation.*

### Intro

**Kicker** `apply › intro.kicker` → Đăng ký · Trở thành một W
**Heading** `apply › intro.heading` → Hãy kể cho chúng tôi nghe về bạn.
**Lead** `apply › intro.lead`
Chúng tôi đọc từng đơn, bằng sự chú tâm. Không có câu trả lời đúng hay sai ở đây — chỉ có giọng của chính bạn. Cứ thong thả.

### Step 1 — basics

**Step heading** `apply › steps[0].heading` → Để chúng tôi biết bạn một chút
**Step note** `apply › steps[0].note` → Vài điều cơ bản thôi, để chúng tôi gọi đúng tên và hồi âm đúng chỗ.

**Field: name — label** `apply › steps[0].fields[0].label` → Chúng tôi nên gọi bạn là gì?
**Field: name — placeholder** `apply › steps[0].fields[0].placeholder` → Tên hoặc cách bạn muốn được gọi
**Field: name — error** `apply › steps[0].fields[0].errorMsg` → Cho chúng tôi một cái tên để xưng hô nhé.

**Field: email — label** `apply › steps[0].fields[1].label` → Email để chúng tôi hồi âm
**Field: email — placeholder** `apply › steps[0].fields[1].placeholder` → ban@email.com
**Field: email — error** `apply › steps[0].fields[1].errorMsg` → Một email hợp lệ giúp chúng tôi quay lại với bạn.

**Field: city — label** `apply › steps[0].fields[2].label` → Bạn đang sống ở thành phố nào?
**Field: city — placeholder** `apply › steps[0].fields[2].placeholder` → Ví dụ: TP. Hồ Chí Minh
**Field: city — hint** `apply › steps[0].fields[2].hint` → Hỏi để biết khi nào có buổi gặp gần bạn — hoàn toàn tuỳ bạn chia sẻ.

**Field: age — label** `apply › steps[0].fields[3].label` → Bạn thuộc nhóm tuổi nào?
**Field: age — options** `apply › steps[0].fields[3].options` → Dưới 18 · 18–22 · 23–27 · 28–34 · 35 trở lên · Mình không muốn nói

**Field: work — label** `apply › steps[0].fields[4].label` → Bạn đang làm trong lĩnh vực nào, hoặc giữ vai trò gì?
**Field: work — placeholder** `apply › steps[0].fields[4].placeholder` → Ví dụ: sinh viên Báo chí · luật sư · product manager · giáo viên · freelancer viết lách…
**Field: work — hint** `apply › steps[0].fields[4].hint`
Chúng tôi hỏi điều này chỉ để đón bạn vào đúng nhịp và kết nối bạn với những người hợp gu trong cộng đồng — không phải để đánh giá. Cứ trả lời thoải mái, ngắn gọn cũng được.

### Step 2 — what brought you

**Step heading** `apply › steps[1].heading` → Điều đưa bạn tới đây
**Step note** `apply › steps[1].note` → Không cần hoa mỹ. Cứ thành thật là đủ.

**Field: why — label** `apply › steps[1].fields[0].label` → Vì sao viết lại quan trọng với bạn, ngay lúc này?
**Field: why — placeholder** `apply › steps[1].fields[0].placeholder` → Vài câu thôi…
**Field: why — error** `apply › steps[1].fields[0].errorMsg` → Chia sẻ giúp chúng tôi một chút nhé — ngắn cũng được.

**Field: hopes — label** `apply › steps[1].fields[1].label` → Bạn mong điều gì khi đến với W4GZ?
**Field: hopes — optional label** `apply › steps[1].fields[1].optionalLabel` → (chọn bao nhiêu tuỳ bạn)
**Field: hopes — options** `apply › steps[1].fields[1].options` → Viết tốt hơn · Tư duy rõ ràng hơn · Tìm một cộng đồng · Kể được câu chuyện của mình · Sống có chủ đích hơn · Điều khác

**Field: level — label** `apply › steps[1].fields[2].label` → Bạn đang ở đâu trên hành trình viết?
**Field: level — options** `apply › steps[1].fields[2].options` → Mình mới bắt đầu · Mình viết thỉnh thoảng · Mình viết khá đều · Viết là việc/nghề của mình
**Field: level — error** `apply › steps[1].fields[2].errorMsg` → Chọn một mốc gần bạn nhất nhé.

**Field: heard — label** `apply › steps[1].fields[3].label` → Bạn biết tới W4GZ qua đâu?
**Field: heard — placeholder** `apply › steps[1].fields[3].placeholder` → Một người bạn, một bài viết, mạng xã hội…

### Step 3 — a little about you

**Step heading** `apply › steps[2].heading` → Một chút về bạn
**Step note** `apply › steps[2].note` → Bằng giọng của chính bạn. Đây không phải bài kiểm tra — chúng tôi đọc để hiểu, không để chấm.
**Field: about — label** `apply › steps[2].fields[0].label` → Bạn là ai, nếu kể bằng vài dòng?
**Field: about — placeholder** `apply › steps[2].fields[0].placeholder` → Điều gì làm nên bạn lúc này — một mối bận tâm, một niềm vui, một câu hỏi bạn đang mang theo…
**Field: about — hint** `apply › steps[2].fields[0].hint` → Khoảng 100–200 từ là vừa, nhưng cứ viết theo cách bạn thấy thoải mái.
**Field: about — error** `apply › steps[2].fields[0].errorMsg` → Chúng tôi rất muốn nghe — vài dòng thôi cũng được.

### Step 4 — a short story

**Step heading** `apply › steps[3].heading` → Kể một câu chuyện ngắn
**Step note** `apply › steps[3].note`
Bất kỳ điều gì thật với bạn: một khoảnh khắc, một thay đổi, một điều bạn từng tin rồi thôi không tin nữa. Chúng tôi không chấm văn phong — chúng tôi đọc để gặp bạn.
**Field: story — label** `apply › steps[3].fields[0].label` → Câu chuyện của bạn
**Field: story — placeholder** `apply › steps[3].fields[0].placeholder` → Bắt đầu từ chỗ nào bạn muốn…
**Field: story — hint** `apply › steps[3].fields[0].hint` → Vài đoạn là đủ. Không cần mở bài kết bài — chỉ cần thật.
**Field: story — error** `apply › steps[3].fields[0].errorMsg` → Một câu chuyện ngắn thôi cũng được — chúng tôi đang lắng nghe.

### Step 5 — review & send

**Step heading** `apply › steps[4].heading` → Xem lại và gửi
**Step note** `apply › steps[4].note` → Đọc lại nếu bạn muốn. Bạn luôn có thể quay lại sửa.

### Consent & confirmation

**Consent label** `apply › consent.label`
Mình đã đọc và đồng ý với cách W4GZ giữ gìn dữ liệu của mình. Dữ liệu này thuộc về W4GZ, được lưu an toàn và chỉ dùng để xét đơn.
**Consent error** `apply › consent.errorMsg` → Cần đồng ý điều này để chúng tôi tiếp nhận đơn nhé.
**Confirm heading** `apply › confirm.heading` → Cảm ơn bạn đã kể.
**Confirm line** `apply › confirm.lines[0]`
Chúng tôi đọc mọi đơn, bằng sự chú tâm, và sẽ hồi âm theo đợt xét mỗi quý. Hãy để mắt tới hộp thư của bạn.

### Post-submit — choose a path

**Choice heading** `apply › applyOutcome.choice.heading` → Cảm ơn bạn đã kể.
**Choice note** `apply › applyOutcome.choice.note` → Giờ, chọn lối bạn muốn bước vào W4GZ.
**Option Intro — title** `apply › applyOutcome.choice.options[0].title` → W4GZ Introduction
**Option Intro — desc** `apply › applyOutcome.choice.options[0].desc` → Khóa học online, tự học theo nhịp của bạn. Có thể bắt đầu ngay hôm nay.
**Option Intro — go** `apply › applyOutcome.choice.options[0].go` → Chọn lối này →
**Option Advanced — title** `apply › applyOutcome.choice.options[1].title` → W4GZ Advanced
**Option Advanced — desc** `apply › applyOutcome.choice.options[1].desc` → Lớp offline tại TP.HCM, nhóm nhỏ. Giữ chỗ bằng một khoản cọc.
**Option Advanced — go** `apply › applyOutcome.choice.options[1].go` → Chọn lối này →

### Post-submit — Introduction outcome

**Heading** `apply › applyOutcome.intro.heading` → Chào mừng tới W4GZ Introduction.
**Note** `apply › applyOutcome.intro.note` → Bạn sẽ học trên nền tảng khóa học của chúng tôi. Nhấn để tới đó và bắt đầu.
**[note] Placeholder button** `apply › applyOutcome.intro.placeholder` → Tới nền tảng học · đang cập nhật
**Email note** `apply › applyOutcome.intro.emailNote` → Chúng tôi cũng sẽ gửi đường dẫn vào khóa học qua email cho bạn.
**Back link** `apply › applyOutcome.intro.back` → ← Quay lại lựa chọn

### Post-submit — Advanced outcome

**Heading** `apply › applyOutcome.advanced.heading` → W4GZ Advanced
**Note** `apply › applyOutcome.advanced.note` → Lớp chuyên sâu gần nhất, và nơi bạn giữ chỗ.
**[note] Cohort — Khóa gần nhất** `apply › applyOutcome.advanced.cohort[0].v` → đang cập nhật
**[note] Cohort — Thời gian** `apply › applyOutcome.advanced.cohort[1].v` → đang cập nhật
**Cohort — Địa điểm** `apply › applyOutcome.advanced.cohort[2].v` → TP. Hồ Chí Minh
**Cohort — Quy mô** `apply › applyOutcome.advanced.cohort[3].v` → nhóm nhỏ
**Pay line (pre)** `apply › applyOutcome.advanced.payPre` → Để giữ chỗ, chuyển khoản
**Pay line (strong)** `apply › applyOutcome.advanced.payStrong` → cọc 50% học phí
**Pay line (post)** `apply › applyOutcome.advanced.payPost` → qua mã QR bên dưới. Phần còn lại đóng khi nhập học.
**[note] QR label** `apply › applyOutcome.advanced.qrLabel` → Mã QR thanh toán
**[note] QR sub** `apply › applyOutcome.advanced.qrSub` → đang cập nhật
**Transfer note** `apply › applyOutcome.advanced.transferNote`
Nội dung chuyển khoản: tên + email bạn vừa điền. Cần hỗ trợ gì, cứ trả lời email xác nhận của chúng tôi.
**Paid button** `apply › applyOutcome.advanced.paid` → Tôi đã thanh toán
**Back link** `apply › applyOutcome.advanced.back` → ← Quay lại lựa chọn

### Post-submit — final confirmation

**Heading** `apply › applyOutcome.confirm.heading` → Cảm ơn bạn. Chúng tôi đã nhận được.
**Note (pre)** `apply › applyOutcome.confirm.notePre`
Một chỗ trong W4GZ Advanced đang được giữ cho bạn. Chúng tôi sẽ kiểm tra khoản chuyển và gửi thông tin nhập học cụ thể qua email
**Note (strong)** `apply › applyOutcome.confirm.noteStrong` → trong vòng 48 giờ
**Small note** `apply › applyOutcome.confirm.small`
Nếu sau 48 giờ vẫn chưa thấy email, hãy ngó qua hộp thư spam hoặc trả lời email này để chúng tôi hỗ trợ.
**Home button** `apply › applyOutcome.confirm.homeLabel` → Về trang chủ
**Read button** `apply › applyOutcome.confirm.readLabel` → Đọc The Power of Narrative

---

## Graduation form — `/nop-bai-tot-nghiep`

*Source: `content/graduation.ts`. Submit the graduation essay after Introduction. Single page, gentle. (noindex)*

### Intro

**Kicker** `grad › intro.kicker` → Bước cuối · Trở thành một W
**Heading** `grad › intro.heading` → Nộp bài tốt nghiệp của bạn.
**Lead** `grad › intro.lead`
Bạn đã đi hết W4GZ Introduction. Đây là nơi bạn đặt xuống thứ mình đã viết. Chúng tôi sẽ đọc, và hồi âm theo đợt xét mỗi quý — thong thả, không vội.

### Step 1 — find you

**Step heading** `grad › steps[0].heading` → Để chúng tôi tìm đúng bạn
**Step note** `grad › steps[0].note` → Khớp với thông tin khi bạn tham gia khóa học.
**Field: name — label** `grad › steps[0].fields[0].label` → Tên bạn
**Field: name — placeholder** `grad › steps[0].fields[0].placeholder` → Tên bạn dùng khi học
**Field: name — error** `grad › steps[0].fields[0].errorMsg` → Cho chúng tôi tên của bạn nhé.
**Field: email — label** `grad › steps[0].fields[1].label` → Email
**Field: email — placeholder** `grad › steps[0].fields[1].placeholder` → ban@email.com
**Field: email — error** `grad › steps[0].fields[1].errorMsg` → Một email hợp lệ giúp chúng tôi quay lại với bạn.
**Field: cohort — label** `grad › steps[0].fields[2].label` → Bạn học khóa đợt nào?
**Field: cohort — optional label** `grad › steps[0].fields[2].optionalLabel` → (nếu bạn nhớ)
**Field: cohort — placeholder** `grad › steps[0].fields[2].placeholder` → Ví dụ: Đợt mùa xuân 2026

### Step 2 — the essay

**Step heading** `grad › steps[1].heading` → Bài tốt nghiệp
**Step note** `grad › steps[1].note` → Đặt tựa nếu bạn muốn, rồi dán bài viết của bạn vào. Cứ để nó là chính nó.
**Field: title — label** `grad › steps[1].fields[0].label` → Tựa bài
**Field: title — placeholder** `grad › steps[1].fields[0].placeholder` → Một cái tên cho điều bạn viết
**Field: essay — label** `grad › steps[1].fields[1].label` → Bài viết của bạn
**Field: essay — placeholder** `grad › steps[1].fields[1].placeholder` → Dán hoặc viết bài của bạn ở đây…
**Field: essay — error** `grad › steps[1].fields[1].errorMsg` → Đây là phần quan trọng nhất — hãy đặt bài của bạn vào đây.

### Step 3 — a few words after

**Step heading** `grad › steps[2].heading` → Đôi lời sau khi viết
**Step note** `grad › steps[2].note` → Nhẹ thôi — để chúng tôi đọc bài bạn bằng đúng tinh thần bạn viết nó.
**Field: reflect_about — label** `grad › steps[2].fields[0].label` → Bài này nói về điều gì với bạn?
**Field: reflect_about — placeholder** `grad › steps[2].fields[0].placeholder` → Vài câu…
**Field: reflect_about — error** `grad › steps[2].fields[0].errorMsg` → Một hai câu thôi cũng được nhé.
**Field: reflect_self — label** `grad › steps[2].fields[1].label` → Bạn nhận ra điều gì về chính mình khi viết nó?
**Field: reflect_self — placeholder** `grad › steps[2].fields[1].placeholder` → Nếu có điều gì hiện lên…
**Field: next — label** `grad › steps[2].fields[2].label` → Sau W4GZ, bạn muốn viết tiếp về điều gì?
**Field: next — placeholder** `grad › steps[2].fields[2].placeholder` → Một chủ đề, một dự định…

### Consent & confirmation

**Consent label** `grad › consent.label`
Mình đồng ý để W4GZ đọc và lưu giữ bài này cùng đôi lời trên một cách an toàn, chỉ phục vụ việc xét tốt nghiệp. Dữ liệu thuộc về W4GZ.
**Consent error** `grad › consent.errorMsg` → Cần đồng ý điều này để chúng tôi tiếp nhận bài nhé.
**Confirm heading** `grad › confirm.heading` → Bài của bạn đã tới tay chúng tôi.
**Confirm line** `grad › confirm.lines[0]`
Cảm ơn vì đã đi đến đây. Chúng tôi sẽ đọc bằng sự chú tâm và hồi âm theo đợt xét mỗi quý.

---

## Contact — `/lien-he`

*Source: `content/contact.ts`. Two audiences → a short 4-field form → a warm confirmation.*

**Kicker** `contact › kicker` → Liên hệ với W4GZ
**Motto** `contact › motto` → Creates narratives worth living.
**Lead** `contact › lead`
Bạn muốn nói chuyện với W4GZ? Cho chúng tôi biết bạn đến từ đâu — để chúng tôi trả lời đúng tinh thần của bạn.

### Audience 1 — Investor / Media

**Label** `contact › audiences[0].label` → Tổ chức
**Title** `contact › audiences[0].title` → Investor / Media
**Desc** `contact › audiences[0].desc` → Nhà đầu tư, đối tác, hoặc báo chí muốn tìm hiểu và đồng hành cùng W4GZ ở tầm tổ chức.
**Go** `contact › audiences[0].go` → Tôi thuộc nhóm này →

### Audience 2 — Supporter

**Label** `contact › audiences[1].label` → Cá nhân
**Title** `contact › audiences[1].title` → Supporter
**Desc** `contact › audiences[1].desc` → Bạn yêu điều W4GZ đang làm và muốn ủng hộ, góp sức, hay đơn giản là kết nối.
**Go** `contact › audiences[1].go` → Tôi thuộc nhóm này →

### Form

**Form heading** `contact › formHeading` → Gửi đôi lời cho chúng tôi.
**Field: name — label** `contact › fields.name.label` → Họ và tên
**Field: name — placeholder** `contact › fields.name.placeholder` → Tên của bạn
**Field: name — error** `contact › fields.name.err` → Cho chúng tôi biết tên bạn nhé.
**Field: email — label** `contact › fields.email.label` → Email
**Field: email — placeholder** `contact › fields.email.placeholder` → ban@email.com
**Field: email — error** `contact › fields.email.err` → Một email hợp lệ để chúng tôi hồi âm.
**Field: org — label** `contact › fields.org.label` → Đơn vị công tác & chức vụ
**Field: org — placeholder** `contact › fields.org.placeholder` → Ví dụ: Quỹ ABC · Nhà báo · Sinh viên…
**Field: message — label** `contact › fields.message.label` → Thông điệp của bạn
**Field: message — placeholder** `contact › fields.message.placeholder` → Bạn muốn nói gì với W4GZ?
**Field: message — error** `contact › fields.message.err` → Viết cho chúng tôi vài dòng nhé.
**Back link** `contact › back` → ← Quay lại
**Send button** `contact › send` → Gửi

### Confirmation

**Heading** `contact › confirm.heading` → Cảm ơn bạn đã ngỏ lời.
**Body** `contact › confirm.body`
Mỗi tin nhắn gửi tới W4GZ đều được đọc, bằng sự chú tâm. Chúng tôi sẽ hồi âm bạn sớm — bằng giọng của những người tin vào câu chuyện.
**Home button** `contact › confirm.home` → Về trang chủ

---

# PART E · Legal

## Privacy — `/privacy`

*Source: `docs/privacy.md`. This whole block is one markdown file — edit everything inside the fence, headings included. `[ngoặc]` placeholders are intentional and need your real values.*

```markdown
# Tuyên bố Quyền riêng tư — W4GZ

*Bản nháp để bạn rà soát và điều chỉnh. Đây không phải tư vấn pháp lý; nên nhờ luật sư kiểm tra trước khi công bố. Các chỗ trong [ngoặc] cần bạn điền/sửa.*

W4GZ tôn trọng quyền riêng tư của bạn. Tinh thần của chúng tôi: **thu thập ít nhất có thể, giữ an toàn, và minh bạch** về cách dùng dữ liệu. Dữ liệu bạn cung cấp thuộc về bạn; chúng tôi chỉ giữ vai trò trông coi.

## 1. Dữ liệu chúng tôi thu thập
- **Khi bạn đăng ký:** họ tên (hoặc tên bạn muốn được gọi), email, thành phố, nhóm tuổi (tuỳ chọn), chuyên môn/vai trò, lý do đến với W4GZ, đoạn tự thuật và câu chuyện ngắn bạn chia sẻ.
- **Khi bạn học:** bài tốt nghiệp, tiến độ học, kết quả trắc nghiệm và các phản hồi liên quan.
- **Khi bạn liên hệ:** họ tên, email, đơn vị công tác & chức vụ, nội dung tin nhắn.
- **Kỹ thuật tối thiểu:** dữ liệu vận hành cơ bản để trang chạy ổn định. Chúng tôi **không dùng trình theo dõi của bên thứ ba** và ưu tiên công cụ phân tích tôn trọng quyền riêng tư.

## 2. Vì sao chúng tôi thu thập
Để xét đơn, đón bạn vào đúng nhịp, vận hành khóa học, xây dựng cộng đồng, và liên hệ khi cần. Cơ sở chính là **sự đồng ý của bạn** khi gửi thông tin.

## 3. Lưu giữ & bảo mật
Dữ liệu được lưu trong hệ thống do W4GZ tự quản (cơ sở dữ liệu riêng), **mã hóa khi truyền và khi lưu**, và chỉ một số ít thành viên phụ trách mới được truy cập.

## 4. Chia sẻ dữ liệu
Chúng tôi **không bán** dữ liệu của bạn và không dùng nó cho quảng cáo. Chúng tôi chỉ chia sẻ ở mức tối thiểu cần thiết với các nhà cung cấp giúp vận hành (ví dụ dịch vụ gửi email, nền tảng lưu trữ video), và yêu cầu họ bảo mật tương ứng.

## 5. Cookie & phân tích
Chỉ ở mức tối thiểu để trang hoạt động. **Không có trình theo dõi quảng cáo** của bên thứ ba.

## 6. Lưu giữ trong bao lâu
Chúng tôi giữ dữ liệu chừng nào còn cần cho các mục đích trên (xét tuyển, vận hành khóa học, liên hệ). Bạn có thể yêu cầu xóa bất cứ lúc nào.

## 7. Quyền của bạn
Bạn có quyền **xem, sửa, hoặc yêu cầu xóa** dữ liệu của mình. Gửi yêu cầu tới [email liên hệ] và chúng tôi sẽ phản hồi trong thời gian hợp lý.

## 8. Ẩn danh trong cộng đồng
Theo nguyên tắc của W4GZ, danh tính thành viên trong không gian cộng đồng được giữ kín; chúng tôi dùng **chân dung kí-họa và bí danh** thay cho thông tin nhận dạng.

## 9. Người chưa đủ tuổi
[Điều chỉnh theo độ tuổi đối tượng của bạn — ví dụ: yêu cầu sự đồng ý của phụ huynh/người giám hộ với người dưới một độ tuổi nhất định.]

## 10. Thay đổi
Khi cập nhật tuyên bố này, chúng tôi sẽ ghi rõ ngày sửa đổi tại đây.

## 11. Liên hệ
Mọi câu hỏi về quyền riêng tư: **[email liên hệ]**.

*Cập nhật lần cuối: [ngày].*
```

---

## Terms — `/terms`

*Source: `docs/terms.md`. This whole block is one markdown file — edit everything inside the fence, headings included. `[ngoặc]` placeholders are intentional and need your real values.*

```markdown
# Điều khoản Sử dụng — W4GZ

*Bản nháp để bạn rà soát và điều chỉnh. Đây không phải tư vấn pháp lý; nên nhờ luật sư kiểm tra trước khi công bố. Các chỗ trong [ngoặc] cần bạn điền/sửa.*

Bằng việc dùng trang và các chương trình của W4GZ, bạn đồng ý với các điều khoản dưới đây.

## 1. Về W4GZ
W4GZ là một cộng đồng và một bộ chương trình về viết và tư duy — "một protocol, không phải một nhãn." Trang này giới thiệu, tiếp nhận đăng ký, và dẫn tới các khóa học của chúng tôi.

## 2. Tài khoản & đăng ký
Bạn cung cấp thông tin trung thực khi đăng ký, và chịu trách nhiệm giữ an toàn cho tài khoản của mình (nếu có).

## 3. Khóa học & thanh toán
- **W4GZ Introduction** là khóa học online, ghi danh dễ dàng và được xét theo cơ chế **hậu kiểm** (qua bài tốt nghiệp).
- **W4GZ Advanced** là chương trình theo nhóm nhỏ; giữ chỗ bằng khoản **cọc 50% học phí**, phần còn lại đóng khi nhập học.
- [Chính sách hoàn/hủy: điều chỉnh theo thực tế của bạn.]

## 4. Quy tắc cộng đồng
Thành viên W4GZ — gọi là **W** — tôn trọng nhau và giữ gìn không gian chung theo các nguyên tắc của cộng đồng (Nine Laws), bao gồm tôn trọng **quyền ẩn danh** của người khác và không quấy rối.

## 5. Sở hữu trí tuệ
Toàn bộ nội dung khóa học và nội dung trên trang thuộc về W4GZ (hoặc bên cấp phép). Bạn **không được sao chép, tải về, quay màn hình, phát tán hoặc bán lại** nội dung khi chưa được phép. Với nội dung bạn gửi (bài viết, câu chuyện, bài tốt nghiệp), bạn cấp cho W4GZ quyền sử dụng ở mức cần thiết để xét tuyển và vận hành chương trình; **quyền tác giả vẫn thuộc về bạn**.

## 6. Sử dụng được phép
Bạn đồng ý không dùng trang vào mục đích trái pháp luật, không xâm phạm quyền của người khác, và không can thiệp vào hoạt động kỹ thuật của trang.

## 7. Chấm dứt
Chúng tôi có thể tạm ngừng hoặc chấm dứt quyền truy cập nếu bạn vi phạm các điều khoản này hoặc quy tắc cộng đồng.

## 8. Miễn trừ & giới hạn trách nhiệm
Trang và chương trình được cung cấp "như hiện có". Trong phạm vi pháp luật cho phép, W4GZ không chịu trách nhiệm cho các thiệt hại gián tiếp phát sinh từ việc sử dụng.

## 9. Luật điều chỉnh
Các điều khoản này được điều chỉnh theo **pháp luật Việt Nam**. [Điều chỉnh nếu cần.]

## 10. Thay đổi
Chúng tôi có thể cập nhật điều khoản; ngày sửa đổi sẽ được ghi tại đây.

## 11. Liên hệ
Câu hỏi về điều khoản: **[email liên hệ]**.

*Cập nhật lần cuối: [ngày].*
```

---

*End of content. Hand this back with your edits and I'll push each change into its source file.*
