import type { Localized } from "@/lib/i18n";

export interface Branch {
  index: string;
  name: string;
  description: string;
  status?: string;
}

export interface EcosystemContent {
  hero: { label: string; headline: string; subhead: string };
  meaning: { heading: string; body: string };
  branchesLabel: string;
  branches: Branch[];
  branchesNote: string;
  building: { heading: string; placeholder: string };
  buildingNote: string;
  collaborate: { heading: string; body: string; ctaLabel: string };
  transition: { text: string; href: string };
}

/** Chapter V · Ecosystem — "The -4GZ Ecosystem" (brief 5, Trang V). */
export const ecosystem: Localized<EcosystemContent> = {
  vi: {
    hero: {
      label: "The -4GZ Ecosystem",
      headline: "Viết là gốc. Mọi thứ khác mọc lên từ đó.",
      subhead:
        "“-4GZ” là một protocol, không phải một nhãn: cho thế hệ này, do thế hệ này dựng, giữ theo một chuẩn mực mà chính thế hệ này định nghĩa và bảo vệ.",
    },
    meaning: {
      heading: "Một chuẩn, nhiều địa hạt",
      body: "Mỗi nhánh trong hệ sinh thái chia chung một nền: viết như một kỉ luật nghiêm túc, không phải thú vui. Chúng khác nhau ở hình thức, đối tượng, chất liệu — nhưng cùng kế thừa Chín Luật và Sáu Trụ Cột, cùng một đòi hỏi về sự nghiêm túc và tay nghề.",
    },
    branchesLabel: "Các nhánh",
    branches: [
      {
        index: "01",
        name: "storytelling4genz (S4GZ)",
        description:
          "Kể chuyện trên sân khấu: giọng, thân thể, sự đồng-hiện-diện. Club Night và đêm flagship định kì.",
      },
      {
        index: "02",
        name: "poetry4genz",
        description: "Đọc thơ, làm thơ, brainstorm và phương pháp riêng cho thơ.",
      },
      {
        index: "03",
        name: "english4genz · chinese4genz",
        description:
          "Học và dùng tiếng Anh, tiếng Trung trong cộng đồng. (Tiếng Nhật trong lộ trình.)",
      },
      {
        index: "04",
        name: "podcast4genz",
        description: "Đưa tư duy cộng đồng thành tiếng nói, phát theo nhịp đều.",
      },
      {
        index: "05",
        name: "workshop4genz",
        description: "Các buổi thực hành chuyên đề, do thành viên dẫn dắt.",
      },
      {
        index: "06",
        name: "logic4genz",
        description: "Rèn lập luận mạch lạc và tư duy phản biện.",
      },
      {
        index: "07",
        name: "dictionary4genz · privatedinner4genz",
        description:
          "Một dự án ngôn ngữ chung, và những bữa tối riêng tư cho đối thoại sâu.",
      },
    ],
    branchesNote:
      "Đang xác nhận nhánh nào hiển thị công khai và nhánh nào ở trạng thái “đang ấp”.",
    building: {
      heading: "Những gì cộng đồng đang dựng",
      placeholder: "[ Mô tả các dự án lớn và fanpage — chờ nội dung từ bạn. ]",
    },
    buildingNote:
      "Cần: danh sách dự án lớn & fanpage, kèm một dòng mô tả mỗi mục và link.",
    collaborate: {
      heading: "Muốn cùng dựng?",
      body: "Nếu bạn là một tổ chức, một định chế, hay một người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ, hãy liên hệ.",
      ctaLabel: "Liên hệ",
    },
    transition: {
      text: "Đằng sau mỗi nhánh là những con người — gặp họ.",
      href: "/people",
    },
  },
};
