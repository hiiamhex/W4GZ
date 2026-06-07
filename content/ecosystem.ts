import type { Page } from "./model";

/** Chapter V · Ecosystem — The -4GZ Ecosystem (Master Spec Trang V). */

export const hero = {
  label: "The -4GZ Ecosystem",
  heading: "Viết là gốc. Mọi thứ khác mọc lên từ đó.",
  sub: "“-4GZ” là một protocol, không phải một nhãn: cho thế hệ này, do thế hệ này dựng, giữ theo một chuẩn mà chính thế hệ này định nghĩa và bảo vệ.",
};

export const richness = {
  label: "Sự giàu có chính là bằng chứng",
  body: "Bề rộng các hoạt động -4GZ là minh chứng sống cho sức mạnh của cộng đồng vừa nói tới: một cộng đồng viết khỏe thì sinh ra đời sống văn hóa phong phú quanh nó. Tinh thần các nhánh: thân mật, cozy, tăng vốn văn hóa và kết nối, lành mạnh và văn minh, đề cao kiến thức và sự thạo nghề.",
};

/** The -4GZ verticals (use exactly; never an investing-related vertical). */
export const verticals: { name: string; line: string }[] = [
  {
    name: "storytelling4genz · poetry4genz",
    line: "Kể chuyện trên sân khấu; đọc và làm thơ.",
  },
  {
    name: "english4genz · japanese4genz · chinese4genz",
    line: "Học và dùng các thứ tiếng — mỗi ngôn ngữ là một thế giới.",
  },
  {
    name: "workshop4genz · logic4genz",
    line: "Thực hành chuyên đề do thành viên dẫn; rèn lập luận mạch lạc.",
  },
  {
    name: "drawing4genz · chess4genz · gaming4genz",
    line: "Vẽ, cờ, game — mài giác quan, tư duy và sự nhập cuộc.",
  },
  {
    name: "weekend4genz",
    line: "Thể thao nói chung — running, trekking, hiking; thân thể là nền của trải nghiệm.",
  },
  {
    name: "communitybuilding4genz",
    line: "Nghề xây cộng đồng — để mô hình tự nhân rộng.",
  },
];

export const projects = {
  label: "Những dự án chiến lược",
  items: [
    {
      name: "W4GZ Living Dictionary",
      body: "Một từ điển sống, theo nhịp sống người Việt từ lịch sử đến hiện đại, không bỏ qua lối nói của Gen Z — củng cố hạ tầng chữ viết ở mức kí tự và từ ngữ. Bối cảnh: Việt Nam thuộc nhóm dùng internet đông nhất thế giới nhưng thiếu vắng từ điển tương xứng.",
    },
    {
      name: "Library4GenZ",
      body: "Hệ thư viện lưu trữ lượng kiến thức đồ sộ, dịch trực tiếp từ các nguồn mở uy tín nước ngoài — gồm các cấu phần như Psychology4GenZ, Communication4GenZ, Philosophy4GenZ — nhằm nâng hạ tầng tri thức cho người Việt.",
    },
  ],
  stat: {
    value:
      "Bối cảnh: ~80 triệu người dùng internet, nhưng trung bình mỗi người Việt đọc khoảng 1 cuốn sách/năm ngoài sách giáo khoa — thuộc nhóm thấp trong khu vực.",
    source: "DataReportal 2025 · ngành xuất bản VN 2016–2025",
    verify: true as const,
  },
  closing:
    "Các dự án này đánh thẳng vào lỗ hổng cấu trúc — đặc biệt trên môi trường internet và cho Gen Z — vốn đang khiến “narrative” của thế hệ này khó được viết tốt. W4GZ là một tập hợp leader hành động vào cấu trúc, không tự xem mình là thực thể thụ động.",
  art: {
    id: "ecosystem-map",
    brief:
      "Đồ họa khái niệm: bản đồ nhánh -4GZ tỏa ra từ một gốc “writing”, hai nhánh chiến lược (Dictionary, Library) tô đậm hơn.",
  },
};

export const collaborate = {
  heading: "Muốn cùng dựng?",
  body: "Tổ chức, định chế, hay người xây độc lập muốn hợp tác trong hệ sinh thái -4GZ — hãy liên hệ.",
  ctaLabel: "Liên hệ",
};

export const transition = {
  text: "Đằng sau tất cả là những con người — gặp họ.",
  href: "/people",
};

export const ecosystem: Page = {
  route: "/ecosystem",
  chapter: "V",
  title: "Ecosystem",
  description:
    "The -4GZ Ecosystem — viết là gốc. Sự giàu có là bằng chứng; mục tiêu là chuẩn hóa để lan tỏa. Living Dictionary, Library4GenZ, và W4GZ Media Team.",
  sectors: [
    {
      id: "V.3",
      kicker: "02",
      heading: "Mục tiêu lớn hơn: trao quyền & chuẩn hóa để lan tỏa",
      module: "ecosystem",
      body: [
        "Hệ sinh thái không chỉ phong phú. Nó hướng tới trao quyền, tăng vốn xã hội, củng cố trải nghiệm sống ý nghĩa — và quan trọng nhất, chuẩn hóa các hoạt động để có thể lan ra toàn xã hội.",
        "Một hoạt động hay nhưng không chuẩn hóa thì chết cùng người tổ chức. Chuẩn hóa biến nó thành thứ nhân rộng được.",
      ],
    },
    {
      id: "V.5",
      kicker: "04",
      heading: "W4GZ Media Team: tiếng nói & sự bền vững",
      sub: "Voice of W4GZ",
      module: "media",
      body: [
        "Lực lượng chủ chốt lan ảnh hưởng của W4GZ — các dự án và con người — ra toàn xã hội và liên kết với mạng lưới truyền thông lớn hơn. Họ đảm bảo social impact, đóng gói hoạt động và ấn phẩm theo cách bền vững, hợp xu hướng và có lợi nhuận; chuẩn hóa cách làm việc và monetization để các hoạt động ý nghĩa không trở thành gánh nặng tài nguyên cho thành viên, đồng thời hút nguồn lực phù hợp từ bên ngoài.",
      ],
    },
  ],
};
