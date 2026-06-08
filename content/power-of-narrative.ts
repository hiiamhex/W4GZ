/**
 * The Power of Narrative — standalone "deep read" (docs/power-of-narrative.md).
 * Three chapters shown one at a time. All prose is verbatim from the spec doc —
 * never paraphrased or shortened. `HÌNH` figure slots stay as captioned
 * placeholders until real, rights-cleared assets are sourced (see §8 of the doc).
 */

export type Block =
  | { kind: "para"; text: string; first?: boolean }
  | { kind: "subhead"; text: string }
  | { kind: "figure"; caption: string; tall?: boolean };

export interface Chapter {
  numeral: string;
  /** Mono chapter label in the klabel rule. */
  klabel: string;
  /** Headline, one entry per visual line. */
  title: string[];
  lead: string;
  blocks: Block[];
  /** Chapter close: an optional closing paragraph + the forward bridge line. */
  foot: { para?: string; bridge: string };
  prevLabel?: string;
  nextLabel?: string;
}

export const meta = {
  title: "The Power of Narrative",
  description:
    "Sức mạnh của tự sự, trong ba chương: narrative là gì, nó đã dệt nên những gì trong lịch sử, và vì sao nó là la bàn sống còn của Gen Z hôm nay.",
  brand: "The Power of Narrative",
};

/** Top-bar chapter dots. */
export const dotLabels = ["I", "II", "III"];

/** Breadcrumb: map a known source route → its label (the visitor's last page). */
export const sourceLabels: Record<string, string> = {
  "/": "Home",
  "/why-writing": "Why Writing",
  "/the-fit": "The Fit",
  "/courses": "Courses",
  "/community": "Community",
  "/ecosystem": "Ecosystem",
  "/people": "People",
  "/join": "Join",
};
export const defaultSource = { label: "W4GZ", href: "/" };

export const motto = {
  kicker: "Ba chương · một kết luận",
  line: "Creates narratives worth living.",
  /** "hệ điều hành" is emphasised in the sub (the OS framing, per the doc). */
  sub: "Đó là lí do W4GZ tồn tại — và là hệ điều hành của nó, không phải một khẩu hiệu: xây những con người tự viết nên một đời đáng sống.",
  subEmphasis: "hệ điều hành",
  prevLabel: "← Chương II",
  startLabel: "Bắt đầu viết →",
  startHref: "/courses",
};

export const chapters: Chapter[] = [
  {
    numeral: "I",
    klabel: "Chương I — Narrative dệt nên thế giới",
    title: ["Tự sự không mô tả thế giới.", "Nó dệt nên thế giới."],
    lead: "Năm 1688, trong một quán cà phê nhỏ trên phố Tower của London, người ta truyền tay nhau tin tức tàu bè: con tàu nào vừa rời cảng, vùng biển nào đang có bão, chuyến hàng nào chưa thấy về.",
    blocks: [
      {
        kind: "figure",
        caption:
          "Tranh khắc / ảnh tư liệu quán cà phê Lloyd's, hoặc toà nhà Lloyd's of London thời đầu (thế kỉ 17–18).",
      },
      {
        kind: "para",
        first: true,
        text: "Edward Lloyd không buôn tàu; ông chỉ bán cà phê và để khách kể cho nhau nghe. Nhưng từ những mẩu tin ấy, một việc chưa từng có đã thành hình: người ta bắt đầu đặt cược, rồi bảo đảm, cho những điều chưa xảy ra. Một con tàu chưa chìm vẫn được trả tiền nếu nó chìm. Quán cà phê đó trở thành Lloyd's of London, và cùng với nó, cả một nền kinh tế học được cách nắm giữ một tương lai nó không nhìn thấy.",
      },
      {
        kind: "para",
        text: "Điều khiến chuyện này khả dĩ không phải tiền, cũng không phải tàu. Đó là một câu chuyện chung đủ vững để nhiều người cùng đặt cược lên: một hình dung được chia sẻ về điều gì có thể xảy ra, và ai chịu phần nào nếu nó xảy ra. Tự sự đã làm một việc mà không công cụ vật chất nào làm được — biến một tương lai bất định thành thứ con người có thể cam kết.",
      },
      {
        kind: "para",
        text: "Ta quen nghĩ narrative là kĩ năng kể chuyện, một lớp trang trí cho nội dung. Đó là cách hiểu nhỏ nhất, và sai nhất, về nó. Narrative là cơ chế nhờ đó một cái tôi, một dòng thời gian, và một thế giới trở nên mạch lạc — đủ mạch lạc để sống được trong đó. Quyền lực thật của nó lộ ra ở những điều nó dệt.",
      },
      { kind: "subhead", text: "Trật tự là thứ ta áp vào, không phải thứ ta tìm thấy" },
      {
        kind: "para",
        text: "Đời sống đến với ta dưới dạng hỗn mang: những mảnh rời rạc, đứt đoạn, chồng chéo, phần lớn vô nghĩa khi đứng một mình. Cái khiến chuỗi mảnh ấy thành một đời — của tôi, đáng kể, đang đi đâu đó — là việc ta kể nó thành chuyện. Alasdair MacIntyre cho rằng con người về bản chất là một sinh vật kể chuyện; Paul Ricoeur gọi tính thống nhất của một đời chính là tính thống nhất của một tự sự.",
      },
      {
        kind: "para",
        text: "Bộ não không lưu kinh nghiệm như một kho dữ liệu trung tính. Nó không ngừng biên tập chúng thành cốt truyện — nhân quả, trước sau, ý nghĩa — kể cả khi ta không để ý. Vậy nên câu hỏi không phải bạn có sống bằng narrative hay không; bạn không có lựa chọn đó. Câu hỏi là narrative ấy do ai viết, và bạn có đọc lại được nó không.",
      },
      { kind: "subhead", text: "Cái tôi được dệt, không phải được tìm thấy" },
      {
        kind: "para",
        text: "Ta hình dung có một cái “tôi” cố định ngồi sẵn bên trong, rồi mới kể chuyện về nó. Trật tự thật gần với điều ngược lại: cái tôi phần lớn là sản phẩm của những câu chuyện, không phải một tác giả có trước chúng. Ludwig Wittgenstein lập luận rằng không tồn tại một ngôn ngữ riêng tư — mọi khái niệm ta dùng để hiểu chính mình đều mượn từ một cộng đồng đã có trước ta. Ta nghĩ về bản thân bằng những từ ta không tự đặt ra, trong những khuôn chuyện ta thừa hưởng.",
      },
      {
        kind: "para",
        text: "Điều này thoạt nghe như một sự tước đoạt, nhưng nó là tin tốt nhất ở đây: nếu cái tôi được viết nên, thì nó viết lại được. Tự sự không chạm vào con người ở bề mặt hành vi; nó chạm ở tầng con người là ai. Đó là lí do viết về đời mình không phải là tự biểu đạt một cái tôi có sẵn — nó là tự kiến tạo.",
      },
      { kind: "subhead", text: "Tương lai được dệt, không phải được tìm thấy" },
      {
        kind: "para",
        text: "Quay lại quán cà phê của Lloyd. Điều nó hé lộ không chỉ về bảo hiểm, mà về bản chất của tương lai. Ta nói về tương lai như một nơi phía trước đang chờ ta đi tới. Nhưng ta không bao giờ thấy một tương lai trống; ta chỉ thấy được những gì có thể lặp lại từ điều đã biết. Ta tin có “ngày mai” vì đêm và ngày đã quay vòng đủ lâu để tin được.",
      },
      {
        kind: "para",
        text: "Phần lớn bức tranh tương lai của một người được dệt từ những điều lặp đi lặp lại — và từ những điều nhiều người cùng cam kết sẽ giữ. Một hợp đồng, một lời thề, một thể chế, một loại tiền: tất cả đều là những tự sự chung đủ vững để dựa vào. Tương lai ổn định của một cá nhân, vì thế, phụ thuộc vào năng lực của tập thể quanh họ trong việc dệt một tương lai chung. Nơi câu chuyện chung rách, tương lai cá nhân cũng mỏng đi theo.",
      },
      { kind: "subhead", text: "Quá khứ được dệt lại, không phải được cất giữ" },
      {
        kind: "para",
        text: "Đền Ise ở Nhật được dỡ xuống và dựng lại y nguyên, trên mảnh đất bên cạnh, đều đặn mỗi hai mươi năm — đã hơn một nghìn ba trăm năm như thế. Cái “cổ” nhất ở đó chưa bao giờ quá hai mươi tuổi, mà cũng chưa bao giờ thật sự mới. Quá khứ, hóa ra, vận hành gần với điều đó: không phải một kho cố định nằm sau lưng, mà là vật liệu sống được dệt lại mỗi lần ta chạm vào.",
      },
      {
        kind: "figure",
        caption:
          "Ảnh đền Ise (Ise Jingū) và nghi thức Shikinen Sengū — dựng lại đền 20 năm một lần.",
      },
      {
        kind: "para",
        text: "Khoa học thần kinh về tái củng cố trí nhớ cho thấy mỗi lần một kí ức được gợi ra, nó được ghi lại một lần nữa, và có thể đổi đi trong chính lúc ấy. Một sang chấn là một câu chuyện lặp lại không mời, và nó cai trị tương lai: ai từng mang một nỗi đau đủ sâu đều biết nó tái diễn mỗi khi họ bước tới. Nhưng nếu quá khứ sống trong cách nó được kể lại, thì đó cũng là nơi duy nhất nó có thể được sửa. Quyền tác giả với đời mình vươn cả về phía sau.",
      },
      { kind: "subhead", text: "Một đời là một thực hành, không phải một hành trình" },
      {
        kind: "para",
        text: "Gộp ba điều lại — cái tôi, tương lai, và quá khứ đều được dệt chứ không được tìm thấy — và một hệ quả hiện ra. Thời gian không phải con đường ta đi trên đó; nó là tấm vải ta dệt. Đời không phải một hành trình từ điểm này tới điểm kia. Nó là một thực hành. Câu hỏi trung tâm đổi từ “tôi sẽ đi đâu” thành “tôi sẽ làm gì, lặp đi lặp lại”.",
      },
      {
        kind: "para",
        text: "Aristotle gọi phẩm chất có được qua lặp lại đến mức thành bản năng là hexis. Một đời được tự viết không phải là một quyết định lớn duy nhất; nó là một sợi chỉ được kéo đều mỗi ngày. Điều này nghe kém hùng tráng hơn một bước ngoặt, nhưng nó là cách thật sự một con người đổi khác.",
      },
      { kind: "subhead", text: "Trong thời đại máy viết, đây là chủ quyền cuối cùng" },
      {
        kind: "para",
        text: "Tất cả những điều trên đã đúng từ lâu trước khi có máy. Nhưng một điều kiện mới làm chúng thành cấp bách. Khi máy sinh ra văn bản ở quy mô vô hạn, hai việc xảy ra cùng lúc. Thứ nhất, cái tôi bị dìm trong những tự sự nó không viết: dòng feed chọn điều ta thấy, ta muốn, ta sợ, và lặng lẽ kể đời ta thay ta.",
      },
      {
        kind: "para",
        text: "Năm 1936, Walter Benjamin đã tách thông tin khỏi truyện — một thứ đòi tiêu thụ tức thì rồi vứt, một thứ giữ lại nghĩa và nhả ra chậm; Byung-Chul Han gọi thời ta là một cuộc khủng hoảng tự sự, nơi thông tin tràn bờ còn năng lực kể một câu chuyện thật thì teo lại. Thứ hai, việc sản xuất chữ một cách cơ học mất giá, trong khi việc con người dệt nghĩa trở nên khan hiếm.",
      },
      {
        kind: "para",
        text: "Giữa bối cảnh đó, năng lực tự viết tự sự của mình không còn là một kĩ năng mềm. Nó là hình thức chủ quyền cuối cùng mà máy không thực hiện thay được — vì máy có thể viết câu thay bạn, nhưng không thể sống đời bạn, và không thể quyết nghĩa của đời ấy.",
      },
      { kind: "subhead", text: "Tự sự là việc chung" },
      {
        kind: "para",
        text: "Có một lí do cuối khiến narrative không phải việc của riêng một người. Nếu cái tôi được dệt từ một ngôn ngữ chung, và nếu một tương lai ổn định cần một câu chuyện tập thể, thì tự viết đời mình không phải là một hành vi cô lập — nó là việc tham gia vào một tấm dệt lớn hơn. Trong mọi cách tạo tự sự, viết là kỉ luật khắc nghiệt nhất: nó buộc thứ hỗn mang trong đầu thành một thứ mạch lạc, tuần tự, và chịu trách nhiệm trước một người đọc.",
      },
      {
        kind: "para",
        text: "Đó là vì sao một cộng đồng người viết không phải một tiện nghi — nó là điều kiện. Người ta học cách cầm cây bút trên tấm vải chung bằng cách ngồi cạnh những người khác cũng đang cầm cây bút của họ.",
      },
    ],
    foot: {
      bridge:
        "Narrative dệt nên một cái tôi và một dòng thời gian. Nhưng quyền lực ấy chưa bao giờ dừng lại ở một con người — nhìn ra ngoài, vào lịch sử và văn hóa, sẽ thấy chính nó đã dệt nên những thứ lớn hơn rất nhiều.",
    },
    nextLabel: "Chương II — Công nghệ của thực tại →",
  },
  {
    numeral: "II",
    klabel: "Chương II — Narrative là công nghệ của thực tại",
    title: ["Bộ não không nhìn thấy sự vật.", "Nó nhìn thấy câu chuyện."],
    lead: "Năm 1944, hai nhà tâm lí học Fritz Heider và Marianne Simmel cho người xem một đoạn phim ngắn: vài hình tam giác và một vòng tròn di chuyển quanh một hình chữ nhật. Không có gì khác — chỉ những hình khối trượt trên màn hình.",
    blocks: [
      {
        kind: "figure",
        caption:
          "Vài khung hình từ phim hình khối chuyển động của Heider & Simmel (1944) — tam giác lớn, tam giác nhỏ, vòng tròn quanh một hình chữ nhật.",
      },
      {
        kind: "para",
        first: true,
        text: "Gần như tất cả người xem kể lại cùng một thứ: một kẻ bắt nạt, một cuộc rượt đuổi, một đôi trốn thoát, một kẻ ra tay nghĩa hiệp. Họ không thấy hình học. Họ thấy một câu chuyện, đầy đủ động cơ, phe phái, và một kết cục.",
      },
      {
        kind: "para",
        text: "Thí nghiệm ấy phơi bày một điều ta hiếm khi để ý: tâm trí con người không tiếp nhận thế giới như một chuỗi dữ kiện trung tính rồi mới gán nghĩa. Nó kể. Kể là chế độ mặc định, bật sẵn, chạy cả khi chẳng có gì để kể. Và nếu narrative là cách thế giới đến với ta, thì ai định hình được câu chuyện sẽ định hình được chính cái thực tại ta sống trong đó. Quyền lực ấy hiện ra rõ nhất khi nhìn nó vận hành ngoài đời — qua nhận thức, qua xã hội, qua lịch sử.",
      },
      { kind: "subhead", text: "Không ai có thể không kể" },
      {
        kind: "para",
        text: "Nhà tâm lí học Jerome Bruner dành phần lớn sự nghiệp để chỉ ra rằng con người có hai cách nghĩ tách biệt: một lối luận lí, dùng cho chứng minh và phân loại; và một lối tự sự, dùng để hiểu con người, ý định, và đời sống. Hầu hết những gì quan trọng với một người — họ là ai, vì sao họ làm điều họ làm, điều gì đáng — đều được xử lí bằng lối thứ hai.",
      },
      {
        kind: "para",
        text: "Ta không nhớ một ngày như một bảng số liệu; ta nhớ nó như một cảnh có mở đầu, khúc ngoặt, và một nghĩa. Những hình tam giác của Heider và Simmel chỉ làm lộ ra cơ chế vẫn luôn chạy ngầm. Vì thế câu hỏi chưa bao giờ là có nên sống bằng câu chuyện hay không. Câu hỏi là câu chuyện ấy được viết một cách tỉnh táo, hay bị bỏ mặc cho nó tự viết.",
      },
      { kind: "subhead", text: "Câu chuyện biến người lạ thành một “chúng ta”" },
      {
        kind: "para",
        text: "Năm 1983, Benedict Anderson đưa ra một ý đã đổi cách ta hiểu về quốc gia: một dân tộc là một cộng đồng tưởng tượng. Không phải tưởng tượng theo nghĩa giả, mà theo nghĩa nó sống nhờ một câu chuyện chung — hàng triệu người chưa bao giờ gặp nhau vẫn thấy mình thuộc về cùng một “chúng ta”, vì cùng đọc một thứ tiếng, cùng một mặt báo mỗi sáng, cùng một dòng kể về mình là ai và từ đâu tới. Anderson chỉ ra chính máy in, tờ báo và cuốn tiểu thuyết đã làm cái “chúng ta” ấy khả dĩ.",
      },
      {
        kind: "figure",
        caption:
          "Trang nhất một tờ báo cũ và/hoặc máy in thời đầu — biểu tượng của “cộng đồng tưởng tượng”.",
      },
      {
        kind: "para",
        text: "Tiền tệ, luật pháp, một thương hiệu, một tôn giáo cũng vận hành như thế: tất cả là những câu chuyện chung đủ vững để người lạ phối hợp với nhau ở một quy mô không bầy đàn sinh học nào đạt tới. Narrative không phải lớp sơn phủ trên nền văn minh. Nó là kết cấu chịu lực.",
      },
      { kind: "subhead", text: "Một câu chuyện đủ người tin sẽ tự thành sự thật" },
      {
        kind: "para",
        text: "Năm 1948, nhà xã hội học Robert Merton đặt tên cho một cơ chế: lời tiên tri tự ứng nghiệm. Ví dụ của ông là một ngân hàng vốn lành mạnh. Một tin đồn vô căn cứ rằng nó sắp vỡ nợ khiến người gửi đổ xô rút tiền; và chính việc rút tiền đồng loạt làm ngân hàng vỡ nợ thật. Câu chuyện sai đã tự biến mình thành sự thật.",
      },
      {
        kind: "figure",
        caption:
          "Ảnh tư liệu đám đông xếp hàng rút tiền trước một ngân hàng (bank run, thời Đại Khủng Hoảng những năm 1930).",
      },
      {
        kind: "para",
        text: "Nhà kinh tế học Robert Shiller, trong cái ông gọi là kinh tế học tự sự, cho thấy các cuộc suy thoái, bong bóng, và cơn sốt đầu tư phần lớn lan như những câu chuyện truyền từ người sang người, chứ không chỉ chạy theo con số. Đây là tầng quyền lực mà phần đầu chưa chạm tới: narrative không chỉ giúp ta hình dung tương lai — một câu chuyện được tin đủ rộng sẽ sản xuất ra chính tương lai đó.",
      },
      { kind: "subhead", text: "Một đời, và một dân tộc, có thể được kể lại" },
      {
        kind: "para",
        text: "Thập niên 1980, hai nhà trị liệu Michael White và David Epston dựng một trường phái trên một câu đơn giản: con người không phải là vấn đề; vấn đề mới là vấn đề. Họ giúp thân chủ tách mình khỏi câu chuyện đang giam mình — “tôi là kẻ thất bại”, “tôi là nỗi lo của mọi người” — rồi kể lại đời mình theo một cách khác, vẫn thật nhưng rộng hơn.",
      },
      {
        kind: "para",
        text: "Cùng một nguyên lí, ở quy mô một quốc gia: khi Nam Phi bước ra khỏi chế độ apartheid năm 1996, một trong những công cụ họ chọn cho sự chuyển tiếp là một ủy ban sự thật, nơi nạn nhân và cả người gây ra tội ác cùng kể công khai điều đã xảy ra. Một xã hội tự kể lại mình để có thể sống tiếp. Narrative, hóa ra, là dụng cụ để tái cấu trúc cả nỗi đau — của một người, và của một cộng đồng.",
      },
      {
        kind: "figure",
        caption:
          "Ảnh một phiên điều trần của Ủy ban Sự thật và Hoà giải Nam Phi (1996) — xử lí trang trọng, tiết chế.",
      },
      { kind: "subhead", text: "Câu chuyện là công nghệ đầu tiên của loài người" },
      {
        kind: "para",
        text: "Rất lâu trước máy in hay con chữ, đã có một công nghệ để giữ và truyền cả một nền văn hóa: kể. Thập niên 1930, học giả Milman Parry sang vùng Balkan ghi lại những người hát rong còn thuộc lòng các thiên sử thi dài hàng nghìn câu. Ông chứng minh rằng Iliad và Odyssey, trước khi được viết ra, đã sống và lưu truyền bằng một bộ khuôn tự sự cho phép trí nhớ con người mang theo cả một thế giới.",
      },
      {
        kind: "figure",
        tall: true,
        caption:
          "Chùm ảnh “sử thi & thần thoại đan vào văn hóa loài người”, trải nhiều nền văn minh: bản chép tay Iliad/Odyssey và bình gốm Hy Lạp vẽ cảnh sử thi; bảng đất sét sử thi Gilgamesh (Lưỡng Hà); tranh/phù điêu Mahabharata–Ramayana (Ấn Độ); tranh thần thoại từ các nền văn hóa khác (Bắc Âu, Tây Phi, bản địa châu Mỹ…). Mục đích thị giác: mọi nền văn hóa đều dựng mình quanh những câu chuyện lớn.",
      },
      {
        kind: "para",
        text: "Câu chuyện là ổ cứng đầu tiên của loài người. Và như mọi ổ cứng, ai ghi vào đó thì quyết định cái gì được nhớ và cái gì biến mất. Quyền kể, ngay từ buổi đầu, đã là quyền quyết định cái gì sống sót.",
      },
      { kind: "subhead", text: "Trong nền kinh tế chú ý, trận chiến thật là giành câu chuyện" },
      {
        kind: "para",
        text: "Năm 1922, Walter Lippmann viết rằng con người không phản ứng với thế giới, mà với những “bức tranh trong đầu” về thế giới — và những bức tranh ấy phần lớn do người khác đặt vào. Một thế kỉ sau, việc đặt tranh vào đầu người khác đã thành một ngành công nghiệp vận hành ở tốc độ máy.",
      },
      {
        kind: "figure",
        caption:
          "Áp phích tuyên truyền hoặc hình ảnh truyền thông đại chúng đầu thế kỉ 20 — minh hoạ “bức tranh trong đầu”.",
      },
      {
        kind: "para",
        text: "Dòng feed không đưa cho bạn sự kiện; nó đưa một phiên bản đã được dựng về điều đáng chú ý, đáng muốn, đáng sợ — và nó dựng phiên bản ấy hàng tỉ lần mỗi ngày. Khi câu chuyện có thể được chế tạo và phát tán ở quy mô đó, trận chiến thật không phải giành lấy sự thật, mà giành lấy việc ai kể. Trong một thế giới như thế, tự mình kể lấy đời mình một cách tỉnh táo không phải một thú chơi tinh thần — nó là cách duy nhất để cây bút viết nên bạn nằm trong tay bạn.",
      },
    ],
    foot: {
      bridge:
        "Hai chương đầu đúng với mọi thời đại. Chương cuối nói về một thời đại cụ thể — và về thế hệ đầu tiên phải lớn lên trọn vẹn bên trong nó.",
    },
    prevLabel: "← Chương I",
    nextLabel: "Chương III — La bàn để định hướng →",
  },
  {
    numeral: "III",
    klabel: "Chương III — Narrative là la bàn để định hướng",
    title: ["La bàn không được trao.", "Nó được viết."],
    lead: "Có một điều chưa từng xảy ra trong lịch sử loài người đang diễn ra mỗi sáng: hàng tỉ người mở điện thoại, và mỗi người thấy một thế giới khác nhau.",
    blocks: [
      {
        kind: "figure",
        caption:
          "Nhiều màn hình điện thoại đặt cạnh nhau, mỗi cái một feed khác hẳn — “thực tại chung” bị tách thành hàng tỉ thực tại riêng.",
      },
      {
        kind: "para",
        first: true,
        text: "Không còn một trang nhất chung, một bản tin chung, một câu chuyện chung mà cả một thế hệ cùng thức dậy bên trong. Thuật toán dệt cho mỗi người một dòng riêng, đo theo điều giữ được mắt họ lâu nhất — và không dòng nào giống dòng nào. Lần đầu tiên, “thực tại chung” của một xã hội bị tách thành hàng tỉ thực tại riêng tư, mỗi cái vừa khít một người.",
      },
      {
        kind: "para",
        text: "Thế hệ Z là thế hệ đầu tiên lớn lên trọn vẹn bên trong điều kiện đó: nhiều thông tin hơn bất kì thế hệ nào từng có, và ít câu chuyện chung hơn để hiểu nó. Họ trưởng thành đúng vào lúc nhiều người gọi là thời các đại tự sự sụp đổ. Và chính trong điều kiện ấy, narrative — câu chuyện một người tự dệt cho đời mình — trở thành thứ đáng tin cậy nhất còn lại để định hướng.",
      },
      { kind: "subhead", text: "Những tấm bản đồ chung đã tan" },
      {
        kind: "para",
        text: "Năm 1979, triết gia Jean-François Lyotard mô tả điều kiện hậu hiện đại bằng một câu ngắn: sự hoài nghi với các đại tự sự. Những câu chuyện lớn từng trao cho một đời phương hướng — một đức tin chung, vòng cung của một dân tộc, lời hứa rằng học hành rồi sẽ có một chỗ đứng, một cái thang rõ ràng dẫn tới trưởng thành, thậm chí niềm tin chung rằng ngày mai sẽ tốt hơn hôm nay — đều đã rạn và phân mảnh.",
      },
      {
        kind: "figure",
        caption:
          "Hình ý niệm: một tấm bản đồ cũ bị rách / phân mảnh — “các đại tự sự sụp đổ”.",
      },
      {
        kind: "para",
        text: "Lyotard viết điều này trước cả khi có internet. Nền tảng và thuật toán chỉ đẩy nó tới cực hạn: từ vài đại tự sự rạn nứt, tới hàng tỉ dòng feed riêng tư. Một thế hệ thừa hưởng không phải một tấm bản đồ sai, mà là không có tấm bản đồ mặc định nào cả.",
      },
      { kind: "subhead", text: "Mất câu chuyện chung không chỉ là tự do" },
      {
        kind: "para",
        text: "Việc không bị trói vào một câu chuyện áp đặt nghe như giải phóng, và phần nào đúng. Nhưng nhà xã hội học Émile Durkheim từ lâu đã đặt tên cho mặt còn lại: anomie — trạng thái mất phương hướng xảy ra khi cái khung chung cho biết điều gì đáng và mình đang đứng ở đâu trở nên mỏng đi.",
      },
      {
        kind: "para",
        text: "Khi câu chuyện chung tan, thứ thay vào chỗ nó không tự động là sự tự do sáng tạo; thường là sự hoang mang. Đó là điều kiện nền mà thế hệ này phải khởi hành từ đó — không phải vì họ yếu hơn, mà vì họ là những người đầu tiên phải tự định hướng giữa một khoảng trống mà các thế hệ trước được lấp sẵn.",
      },
      { kind: "subhead", text: "Nền tảng khiến tự kể khó hơn, không dễ hơn" },
      {
        kind: "para",
        text: "Thoạt nhìn, feed cho mọi người một sân khấu để kể câu chuyện của mình. Nhưng nó làm một việc tinh vi và ngược lại. Các nhà nghiên cứu gọi đó là sự sụp đổ ngữ cảnh: trên một nền tảng, mọi khán giả của bạn dồn vào làm một — cha mẹ, sếp, người lạ, người cũ, tất cả cùng nhìn một bài đăng. Trong điều kiện đó, người ta không kể một câu chuyện thật; người ta trình diễn một phiên bản phẳng, thủ thế, an toàn cho mọi ánh mắt cùng lúc.",
      },
      {
        kind: "figure",
        caption:
          "Sơ đồ “sụp đổ ngữ cảnh”: nhiều nhóm khán giả (gia đình, sếp, bạn bè, người lạ) dồn vào một điểm/một bài đăng.",
      },
      {
        kind: "para",
        text: "Sherry Turkle còn chỉ ra rằng sự kết nối thường trực bẻ vụn sự chú ý, để lại một cái tôi làm từ những phản ứng rời rạc thay vì một cái tôi giữ được một mạch xuyên suốt. Nền tảng cho bạn phương tiện phát sóng, không cho bạn quyền tác giả.",
      },
      {
        kind: "subhead",
        text: "Nhưng một câu chuyện tự dệt lại đúng là thứ dự báo việc đi qua được",
      },
      {
        kind: "para",
        text: "Đây là chỗ chẩn đoán biến thành quyền lực. Hàng chục năm nghiên cứu của Dan McAdams và nhiều người khác cho thấy những người dựng được một câu chuyện đời mạch lạc — một câu chuyện trong đó họ là tác giả, nơi vấp ngã trở thành một phần của vòng cung lớn hơn chứ không phải dấu chấm hết — cho thấy sức khỏe tinh thần và độ bền bỉ tốt hơn rõ rệt so với những người không có.",
      },
      {
        kind: "para",
        text: "Cái la bàn sống sót qua sự tan rã của các tấm bản đồ chung là cái la bàn người ta tự dựng. Narrative ở đây không phải nỗi nhớ về một thời chắc chắn đã mất; nó là một năng lực đo được, thứ giữ cho một người không lạc khi không còn gì bên ngoài là cố định.",
      },
      {
        kind: "subhead",
        text: "Khi máy biết kể chuyện, quyền tác giả của con người là thứ khan hiếm và quyết định",
      },
      {
        kind: "para",
        text: "Một điều kiện mới làm tất cả gấp gáp hơn. Máy giờ sinh ra được vô tận những câu chuyện nghe lọt tai, theo yêu cầu, trong vài giây. Điều đó khiến một thứ thành rẻ — việc tạo ra văn bản có hình hài câu chuyện — và một thứ thành quý: một con người quyết định câu chuyện nào là thật với đời mình, rồi cam kết sống theo nó.",
      },
      {
        kind: "para",
        text: "Với một thế hệ ngập trong nội dung do máy sinh, lằn ranh không còn nằm giữa người biết viết và người không. Nó nằm giữa người tự cầm bút và người để hệ thống cầm thay — giữa việc điều hướng và việc bị điều hướng.",
      },
      { kind: "subhead", text: "Vì sao là thế hệ này, và vì sao là bây giờ" },
      {
        kind: "para",
        text: "Thế hệ nào cũng phải tự tạo nghĩa. Nhưng thế hệ này là thế hệ đầu tiên phải làm điều đó với các tấm bản đồ đã tan sẵn và một cỗ máy đang làm ngập kênh truyền. Đó là cái khó đặc thù của họ — và cũng chính là lí do, với họ, tự dệt lấy tự sự không phải một kĩ năng mềm mà là năng lực sống còn cốt lõi. Người học được cách giữ một mạch riêng của mình sẽ đi qua được; người không, sẽ bị dòng chảy mang đi.",
      },
    ],
    foot: {
      para: "Narrative dệt nên một cái tôi, đã dệt nên cả một nền văn minh, và giờ là sợi dây đủ chắc duy nhất để một người trẻ bám vào giữa cơn lũ. Những thế hệ trước được trao sẵn một tấm bản đồ. Thế hệ này được trao một biển thông tin và không tấm bản đồ nào. Điều đó nghe như thiệt thòi, và phần nào đúng. Nhưng nó cũng có nghĩa: thứ duy nhất còn đáng tin không nằm ngoài kia, ở một thẩm quyền chung nào đó đã tan — nó nằm ở năng lực tự dệt một câu chuyện đủ vững để đứng lên trên.",
      bridge:
        "Thế giới sẽ kể rất nhiều câu chuyện về bạn, và sẽ kể chúng nhanh hơn bao giờ hết. Câu hỏi duy nhất là bạn có viết được câu của mình đủ rõ để không lạc giữa chúng.",
    },
    prevLabel: "← Chương II",
  },
];
