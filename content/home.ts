import type { Page } from "./model";
import type { ModuleName } from "@/components/symbols/SymbolModule";

/** Chapter I · Home (Master Spec PART 5 · Trang I). Bespoke layout reads these. */

export const heroStats = [
  { value: "15+", label: "Số khóa đã dạy" },
  { value: "Gen Z", label: "Thế hệ trọng tâm" },
  { value: "HCMC", label: "Không gian văn hóa" },
  { value: "Est. 2022", label: "Năm khởi lập" },
];

export const tickerItems = [
  "Creates narratives worth living",
  "Writing4GenZ",
  "Est. 2022",
  "Ho Chi Minh City",
  "The -4GZ Ecosystem",
];

export const pillars: { name: string; line: string; module?: ModuleName }[] = [
  { name: "Narrative", line: "câu chuyện về bạn kể bạn là ai.", module: "narrative" },
  { name: "Writing", line: "kỉ luật để tự viết câu chuyện ấy.", module: "writing" },
  {
    name: "Community",
    line: "điều kiện để duy trì và lan tỏa kỉ luật đó.",
    module: "community",
  },
];
export const pillarsClosing = "W4GZ dựng cả ba trụ cột cho bạn.";

export const doors = [
  {
    index: "01",
    title: "Vì sao Viết",
    description: "Sức mạnh của câu chuyện, viết, và chủ quyền trong thời đại AI.",
    href: "/why-writing",
  },
  {
    index: "02",
    title: "Học viết",
    description:
      "W4GZ Introduction (online) và W4GZ Advanced (offline) — cổng duy nhất vào cộng đồng.",
    href: "/courses",
  },
  {
    index: "03",
    title: "Cộng đồng",
    description: "Vì sao một mình là không đủ, và vì sao bạn cần ở trong W4GZ.",
    href: "/community",
  },
  {
    index: "04",
    title: "Hệ sinh thái",
    description: "Các nhánh -4GZ và những dự án chiến lược cho người Việt.",
    href: "/ecosystem",
  },
];

export const transition = {
  text: "Trước khi học cách viết, cần hiểu vì sao phải viết.",
  href: "/why-writing",
};

export const home: Page = {
  route: "/",
  chapter: "I",
  title: "W4GZ — Writing4GenZ",
  description:
    "Một đời là một văn bản. W4GZ trả cây bút về tay người viết — và cho họ một cộng đồng để viết tiếp. Creates narratives worth living.",
  sectors: [
    {
      id: "I.1",
      kicker: "Creates narratives worth living",
      heading: "Cuộc đời ta là câu chuyện của ta.",
      sub: "Nhưng ai đang viết nó?",
      body: [
        "Mỗi ngày, thuật toán viết hộ bạn hàng nghìn câu — cần xem gì, cần muốn gì, và cần sợ gì. W4GZ mang cây bút về tay người viết, và cho họ một cộng đồng để viết tiếp.",
      ],
      cta: [
        { label: "Bắt đầu với Introduction", href: "/courses", variant: "filled" },
        {
          label: "Con đường vào cộng đồng",
          href: "/community",
          variant: "outline",
        },
      ],
    },
  ],
};
