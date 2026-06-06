import type { Localized } from "@/lib/i18n";
import type { Quote, Sketch } from "./types";

export interface Movement {
  index: string;
  /** Movement theme (mono label). */
  theme: string;
  /** Serif heading (the COPY line). */
  heading: string;
  epigraph?: Quote;
  body: string[];
  pull?: string;
  sketch?: Sketch;
}

export interface WhyWritingContent {
  hero: { label: string; headline: string; subhead: string };
  movements: Movement[];
  transition: { text: string; href: string };
}

/** Chapter II · Why Writing — "Hành vi người cuối cùng" (brief 5, Trang II). */
export const whyWriting: Localized<WhyWritingContent> = {
  vi: {
    hero: {
      label: "Why Writing",
      headline: "Hành vi người cuối cùng mà máy không làm thay được.",
      subhead:
        "Một lập luận về viết, tự sự, và chủ quyền giữa thời đại thông tin.",
    },
    movements: [
      {
        index: "01",
        theme: "Tự sự và cái tôi",
        heading: "Ta là câu chuyện ta kể về mình",
        epigraph: {
          original:
            "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
          lang: "de",
          translation: "Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi.",
          attribution: "Ludwig Wittgenstein, Tractatus",
        },
        body: [
          "Con người không sống thành chuỗi khoảnh khắc rời rạc. Ta hiểu được mình qua việc kể lại mình thành chuyện — Ricoeur gọi đó là căn tính tự sự, MacIntyre gọi con người là sinh vật kể chuyện về bản chất.",
        ],
        pull: "Bạn là câu chuyện bạn kể về chính mình — với chính mình.",
        sketch: {
          caption: "một bàn tay đang viết, nét tối giản",
          alt: "Kí họa một bàn tay đang viết, nét mực tối giản",
          aspect: "4 / 5",
        },
      },
      {
        index: "02",
        theme: "Viết là kỉ luật",
        heading: "Viết ép suy nghĩ thành hình thức",
        body: [
          "Trong mọi cách tạo tự sự, viết là cách khắc nghiệt nhất. Nó buộc thứ hỗn mang trong đầu trở nên mạch lạc, tuần tự, và chịu trách nhiệm trước một người đọc. Người viết đều không phản ứng theo bản năng; họ dựng. Mỗi đoạn phục vụ một vòng cung, mỗi câu trả giá cho chỗ nó chiếm.",
        ],
        pull: "Hỗn mang là nguyên liệu. Tự sự là tay nghề áp lên nó.",
      },
      {
        index: "03",
        theme: "Thời đại nhiễu loạn",
        heading: "Khi chữ thành vô tận, nghĩa thành khan hiếm",
        body: [
          "Văn bản do máy sinh ra ở quy mô không giới hạn. Hệ quả kép: cái tôi bị dìm trong những tự sự nó không viết ra, và việc sản xuất chữ một cách cơ học mất sạch giá trị.",
          "Walter Benjamin đã thấy trước điều này: thông tin đòi được kiểm chứng và tiêu thụ tức thì rồi vứt bỏ; còn truyện thì gìn giữ nghĩa và nhả ra chậm rãi qua thời gian. Một xã hội ngập thông tin có thể đồng thời nghèo truyện đến cùng cực.",
        ],
        sketch: {
          caption: "dòng văn bản máy — các dòng chữ chồng lớp, trừu tượng",
          alt: "Kí họa trừu tượng các dòng chữ chồng lớp, gợi dòng văn bản do máy sinh ra",
          aspect: "4 / 5",
        },
      },
      {
        index: "04",
        theme: "Khủng hoảng tự sự",
        heading: "Câu chuyện bị thu về món hàng",
        body: [
          "Byung-Chul Han gọi đúng tên thời điểm của chúng ta: một cuộc khủng hoảng tự sự. Thông tin trôi vô tận, còn năng lực kể một câu chuyện thật — thứ neo con người vào nghĩa — thì teo lại. Phần lớn cái gọi là storytelling hôm nay chỉ là bán hàng đội lốt. Giành lại khả năng kể chuyện là giành lại một cái tôi.",
        ],
      },
      {
        index: "05",
        theme: "Chủ quyền",
        heading: "Tự sự là chủ quyền cuối cùng",
        epigraph: {
          original: "He who has a why to live for can bear almost any how.",
          lang: "en",
          translation:
            "Người có một lẽ để sống có thể chịu đựng gần như mọi cách sống.",
          attribution: "Friedrich Nietzsche",
        },
        body: [
          "Máy có thể viết câu thay bạn. Nó không thể sống đời bạn, và không thể quyết nghĩa của đời ấy. Năng lực tự viết tự sự của mình là phần chủ quyền máy không cầm được.",
        ],
        pull: "Làm chủ tự sự của mình là làm chủ trải nghiệm sống.",
      },
      {
        index: "06",
        theme: "Vì sao cộng đồng",
        heading: "Một kỉ luật cần một bầy",
        epigraph: {
          original:
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
          lang: "en",
          translation:
            "Ta là điều ta làm đi làm lại. Vậy nên xuất sắc là một tập tính, không phải một hành vi đơn lẻ.",
          attribution: "Aristotle, Nicomachean Ethics",
        },
        body: [
          "Aristotle gọi phẩm tính có được qua thực hành lặp lại đến mức thành bản năng là hexis. Hexis không nảy ra trong cô độc; nó cần một chuẩn mực và những người giữ chuẩn cùng mình. Người viết một mình tiến chậm và chông chênh; người viết giữa những đồng môn trung thực tiến nhanh hơn, vì ở đó có áp lực của chuẩn ngoài, ma sát của bất đồng, và tấm gương của một người khác đọc mình rồi nói thẳng trang viết thật sự đang nói gì.",
        ],
      },
    ],
    transition: {
      text: "Đây là điều chúng tôi dạy — xem dạy thế nào.",
      href: "/courses",
    },
  },
};
