import type { Page } from "./model";

/** Chapter II · Why Writing — eight movements (Master Spec PART 5 · Trang II). */

export const hero = {
  label: "Why Writing",
  heading: "Hành vi người cuối cùng mà máy không làm thay được.",
  sub: "Một lập luận về narrative, viết, và chủ quyền giữa thời đại thông tin.",
};

export const whyWriting: Page = {
  route: "/why-writing",
  chapter: "II",
  title: "Why Writing",
  description:
    "Hành vi người cuối cùng mà máy không làm thay được — một lập luận về narrative, viết, và chủ quyền giữa thời đại thông tin.",
  sectors: [
    {
      id: "II.2",
      kicker: "01",
      heading: "Tự sự là cách một cái tôi trở thành thật",
      quote: {
        original: "We tell ourselves stories in order to live.",
        translation: "Ta tự kể chuyện để sống.",
        author: "Joan Didion",
        lang: "en",
      },
      body: [
        "Con người không sống thành chuỗi khoảnh khắc rời rạc. Ta hiểu được mình qua việc kể lại mình thành chuyện — Ricoeur gọi đó là căn tính tự sự, MacIntyre gọi con người là sinh vật kể chuyện về bản chất. Cách bạn kể về quá khứ quyết định bạn mang gì vào hiện tại; câu chuyện bạn tin về tương lai quyết định bạn dám làm gì hôm nay.",
        "Bạn là câu chuyện bạn kể về chính mình — với chính mình.",
      ],
      art: [
        {
          id: "ww-hand",
          kind: "sketch",
          brief: "Kí họa dọc: một bàn tay đang viết, nét tối giản.",
          ratio: "4 / 5",
        },
      ],
    },
    {
      id: "II.3",
      kicker: "02",
      heading: "Tự sự dựng nên cả thế giới chung",
      body: [
        "Tự sự không dừng ở cá nhân. Xã hội loài người được giữ với nhau bằng những câu chuyện nhiều người cùng tin: luật pháp, tiền tệ, quốc gia, niềm tin chung đều là tự sự. Một nền văn minh là một tập hợp narrative đủ mạnh để hàng triệu người phối hợp. Ai nắm được narrative chung nắm được hướng đi của tập thể.",
        "Lịch sử loài người là cuộc cạnh tranh giữa các câu chuyện.",
      ],
      art: [
        {
          id: "ww-converge",
          kind: "concept",
          brief:
            "Đồ họa khái niệm: nhiều nét cá nhân hội tụ thành một đường lớn chung.",
          ratio: "4 / 5",
          module: "community",
        },
      ],
    },
    {
      id: "II.4",
      kicker: "03",
      heading: "Viết là kỉ luật khiến tự sự có trách nhiệm",
      module: "writing",
      quote: {
        original: "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
        translation: "Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi.",
        author: "Ludwig Wittgenstein, Tractatus",
        lang: "de",
      },
      body: [
        "Nói thì trôi qua; viết thì ở lại và bị soi. Viết buộc thứ hỗn mang trong đầu thành mạch lạc, tuần tự, chịu trách nhiệm trước một người đọc. Mở rộng vốn chữ là mở rộng thế giới có thể nghĩ tới — không có chữ cho một điều, ta khó cầm nắm điều đó.",
      ],
    },
    {
      id: "II.5",
      kicker: "04",
      heading: "Mọi công cụ khuếch đại lời nói đều in dấu lên ta",
      module: "writing",
      body: [
        "Khi chữ viết xuất hiện, con người tạo được những tự sự mạnh hơn bao giờ hết — và cũng chịu ảnh hưởng mạnh hơn bởi tự sự người khác viết ra, từ khi ta còn chưa hiểu gì. Phần lớn câu chuyện ta mang theo về bản thân và thế giới được cài vào lúc ta chưa kịp lựa chọn.",
        "Trưởng thành là giành lại quyền kể câu chuyện của mình — và chọn câu chuyện lớn đáng sống.",
      ],
    },
    {
      id: "II.6",
      kicker: "05",
      heading: "Khi chữ thành vô tận, nghĩa thành khan hiếm",
      body: [
        "Máy giờ sinh văn bản ở quy mô không giới hạn. Hệ quả kép: cái tôi bị dìm trong những tự sự nó không viết ra, và việc sản xuất chữ một cách cơ học mất sạch giá trị. Walter Benjamin đã thấy trước: thông tin đòi kiểm chứng và tiêu thụ tức thì rồi vứt bỏ; truyện thì gìn giữ nghĩa và nhả ra chậm rãi. Một xã hội ngập thông tin có thể đồng thời nghèo truyện đến cùng cực.",
      ],
      stat: [
        {
          value:
            "Việt Nam: ~80 triệu người dùng internet, ~78.8% dân số, thuộc nhóm cao nhất thế giới.",
          source: "DataReportal/We Are Social, 2025",
          verify: true,
        },
      ],
      art: [
        {
          id: "ww-flood",
          kind: "concept",
          brief:
            "Đồ họa khái niệm: dòng văn bản máy chồng lớp, dày đặc, trôi nhanh — tương phản với một dòng chữ tĩnh được viết tay.",
          ratio: "4 / 5",
        },
      ],
    },
    {
      id: "II.7",
      kicker: "06",
      heading: "Khủng hoảng tự sự: nhận thức narrative thành sống còn",
      module: "writing",
      body: [
        "Byung-Chul Han gọi đúng tên thời điểm này: một cuộc khủng hoảng tự sự. Thông tin trôi vô tận; năng lực kể một câu chuyện thật — thứ neo con người vào nghĩa — thì teo lại. Trong thời đại AI, nhận thức về narrative (ai đang kể, kể gì, vì mục đích gì) không còn là kĩ năng tùy chọn; nó là điều kiện để không bị dắt mũi.",
      ],
    },
    {
      id: "II.8",
      kicker: "07",
      heading: "Thời đại viết-là-giao-diện: viết nghiêm chỉnh là lối thoát",
      module: "writing",
      body: [
        "Hôm nay con người giao tiếp với nhau và với máy móc chủ yếu bằng chữ viết — prompt, tin nhắn, tài liệu. Khả năng hiểu sâu và dùng chữ một cách nghiêm chỉnh là cách thoát khỏi cảm giác bất an trong những tự sự cũ vốn không còn vừa với thực tại mới. Ai viết rõ thì nghĩ rõ, và sống bớt hoang mang.",
      ],
    },
    {
      id: "II.9",
      kicker: "08",
      heading: "Tự sự chung là cách con người chạm tới nhau → cần một bầy",
      module: "community",
      quote: {
        original:
          "For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.",
        translation:
          "Sức mạnh của bầy nằm ở từng con sói, sức mạnh của con sói nằm ở cả bầy.",
        author: "Rudyard Kipling",
        lang: "en",
      },
      body: [
        "Ngôn ngữ viết và những tự sự chung là phương tiện hiệu quả nhất để con người hiểu chính mình và hiểu nhau. Nhưng viết là một kỉ luật, và kỉ luật cần một cộng đồng để sống. Đó là chương tiếp theo.",
      ],
      cta: [
        { label: "Học cách viết", href: "/courses", variant: "filled" },
        {
          label: "Bạn có phải là một W4GZ?",
          href: "/the-fit",
          variant: "outline",
        },
      ],
    },
  ],
};
