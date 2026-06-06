import type { Localized } from "@/lib/i18n";
import type { Quote, Stat, Entry } from "./types";

export interface HomeContent {
  hero: {
    label: string;
    headline: string[];
    subhead: string;
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
    tickerItems: string[];
    stats: Stat[];
  };
  era: {
    quote: Quote;
    headline: string;
    paragraphs: string[];
  };
  answer: {
    statement: string;
    body: string[];
  };
  doorsLabel: string;
  doors: Entry[];
  transition: { text: string; href: string };
}

/** Chapter I · Home — "Narratives Worth Living" (brief 5, Trang I). */
export const home: Localized<HomeContent> = {
  vi: {
    hero: {
      label: "Creates narratives worth living",
      headline: ["Một đời là một văn bản.", "Câu hỏi duy nhất: ai cầm bút?"],
      subhead:
        "Mỗi ngày, thuật toán viết hộ bạn hàng nghìn câu — điều cần xem, điều cần muốn, điều cần sợ. W4GZ tồn tại để trả cây bút về tay người viết.",
      ctas: {
        primary: { label: "Bắt đầu với Introduction", href: "/courses" },
        secondary: { label: "Vào cộng đồng", href: "/community" },
      },
      tickerItems: [
        "Creates narratives worth living",
        "Writing4GenZ",
        "Est. 2022",
        "Ho Chi Minh City",
        "The -4GZ Ecosystem",
      ],
      stats: [
        { value: "10+", label: "Số khóa đã dạy" },
        { value: "Gen Z", label: "Thế hệ trọng tâm" },
        { value: "HCMC", label: "Không gian vật lý" },
        { value: "Est. 2022", label: "Năm khởi lập" },
      ],
    },
    era: {
      quote: {
        original: "We tell ourselves stories in order to live.",
        lang: "en",
        translation: "Ta tự kể chuyện để sống.",
        attribution: "Joan Didion",
      },
      headline: "Chữ chưa bao giờ rẻ đến thế. Nghĩa chưa bao giờ khan đến thế.",
      paragraphs: [
        "Máy giờ sinh ra văn bản nhanh hơn con người đọc kịp. Giữa dòng chảy đó, điều hiếm hoi không còn là khả năng tạo ra chữ, mà khả năng dựng nên nghĩa — sắp những mảnh rời thành một câu chuyện đứng vững.",
        "Một đời không được tự kể sẽ bị kể hộ. Feed kể. Quảng cáo kể. Đám đông kể. Mỗi câu chuyện vay mượn ấy lấy đi một phần quyền tác giả với chính cuộc đời mình.",
      ],
    },
    answer: {
      statement: "W4GZ dạy bạn viết. Sâu hơn thế: dạy bạn tự viết lấy đời mình.",
      body: [
        "Khởi lập 2022, W4GZ là cộng đồng đầu tiên ở Việt Nam coi viết là một thực hành nghiêm túc và bền bỉ — thứ định hình cách một người nghĩ, quyết, và sống.",
        "Viết là cột sống. Mọi điều còn lại là cơ thể nó giữ cho đứng thẳng.",
      ],
    },
    doorsLabel: "Bốn cửa vào",
    doors: [
      {
        index: "01",
        title: "Vì sao Viết",
        description:
          "Lập luận về viết, tự sự, và chủ quyền trong thời đại thông tin.",
        href: "/why-writing",
      },
      {
        index: "02",
        title: "Học viết",
        description:
          "Hai con đường: Introduction online và Advanced offline tại HCMC.",
        href: "/courses",
      },
      {
        index: "03",
        title: "Vào cộng đồng",
        description:
          "Một không gian vật lý ở HCMC và một đời sống quanh việc viết.",
        href: "/community",
      },
      {
        index: "04",
        title: "Khám phá hệ sinh thái",
        description: "Các nhánh -4GZ và những dự án cộng đồng quy mô lớn.",
        href: "/ecosystem",
      },
    ],
    transition: {
      text: "Trước khi học cách viết, cần hiểu vì sao phải viết.",
      href: "/why-writing",
    },
  },
};
