import type { Page, ArtItem } from "./model";
import type { Entry } from "./types";

/** Chapter IV · Community — "Community is the answer" (Master Spec Trang IV). */

export const hero = {
  label: "Community",
  heading: "Viết một mình là không đủ.",
  sub: "Vì ngôn ngữ là sản phẩm chung, ký ức là tập thể, và năng lực viết chỉ sống được khi có người nuôi nó cùng bạn. Community is the answer.",
};

export const community: Page = {
  route: "/community",
  chapter: "IV",
  title: "Community",
  description:
    "Community is the answer — viết một mình là không đủ. Ngôn ngữ là của chung, cô đơn là một khủng hoảng, và W4GZ là vòng tròn bạn bước vào qua một cổng.",
  sectors: [
    {
      id: "IV.2",
      kicker: "01",
      heading: "Ngôn ngữ và nghĩa vốn là của chung",
      module: "community",
      quote: {
        original:
          "For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.",
        translation:
          "Sức mạnh của bầy sói nằm ở từng con sói, và của con sói nằm ở cả bầy sói.",
        author: "Rudyard Kipling",
        lang: "en",
      },
      body: [
        "Không có ngôn ngữ riêng tư. Một chữ chỉ có nghĩa vì có một cộng đồng cùng dùng nó (luận điểm của Wittgenstein). Ký ức và ý nghĩa được kiến tạo tập thể — ta nhớ và hiểu bản thân trong một “chúng ta”, không thể hiểu mình giữa hư vô. Viết, ở tận cùng, là một hành vi hướng tới người khác.",
      ],
    },
    {
      id: "IV.3",
      kicker: "02",
      heading: "Đứt gãy hiện đại: vì sao người ta bỏ viết và từ bỏ ý nghĩa",
      body: [
        "Con người hiện đại khó viết không chỉ vì thiếu động lực cá nhân. Họ thiếu một cộng đồng nuôi dưỡng năng lực ấy một cách có ý nghĩa. Các vòng tròn quan hệ đang phân mảnh và đứt gãy đẩy việc viết — và việc tìm nghĩa — xuống chỗ bị đè nén, rồi biến mất khỏi thực hành được củng cố hằng ngày.",
      ],
      stat: [
        {
          value:
            "Cô đơn kéo dài gây hại cho sức khỏe tương đương hút tới 15 điếu thuốc mỗi ngày; sự biến mất của cộng đồng cũng làm mất đi động lực viết. Khoảng một nửa người trưởng thành (ở Mỹ) trải qua cô đơn.",
          source: "US Surgeon General, 2023",
          verify: true,
        },
        {
          value:
            "Riêng nhóm 15–24 tuổi: thời gian gặp bạn trực tiếp giảm khoảng 70% trong gần hai thập niên.",
          source: "US Surgeon General, 2023",
          verify: true,
        },
      ],
      art: [
        {
          id: "community-rings",
          kind: "concept",
          brief:
            "Đồ họa khái niệm: nhiều vòng tròn quan hệ rời rạc, đứt nét — rồi một đường luồn (module Community) nối chúng lại.",
          ratio: "4 / 5",
          module: "community",
        },
      ],
    },
    {
      id: "IV.4",
      kicker: "03",
      heading: "Vòng tròn chờ bạn bước vào, sau khóa học",
      body: [
        "W4GZ là cộng đồng đón người viết bước vào để xây câu chuyện ý nghĩa của mình — cùng người khác, một cách bền vững. Bạn bước vào qua một cổng duy nhất: khóa học viết. Bên trong có chuẩn mực để noi theo, ma sát để mài, và một feedback loop để ai cũng viết tốt hơn và hơn nữa qua thời gian.",
        "Một mình, bạn viết bằng ý chí. Trong cộng đồng, bạn viết bằng ý chí được phản hồi và nuôi dưỡng.",
      ],
      art: [
        {
          id: "community-table",
          kind: "sketch",
          brief:
            "Kí họa: vài người ngồi quanh một bàn dài, trang viết trải ra giữa — đọc và phản hồi cho nhau.",
          ratio: "4 / 5",
        },
      ],
      cta: [{ label: "Cổng vào W4GZ", href: "/courses", variant: "outline" }],
    },
    {
      id: "IV.5",
      kicker: "04",
      heading: "Rồi bạn học cách gieo lại nó",
      module: "community",
      body: [
        "Giá trị không bị nhốt lại ở W4GZ. Khi đã sống trong một feedback loop lành mạnh, bạn biết cách tái tạo nó cho các vòng tròn quan hệ khác của mình — gia đình, đồng nghiệp, bạn bè. Vốn xã hội nhân lên, bởi bạn mang chuẩn mực và sự nuôi dưỡng ra ngoài thay vì giữ riêng.",
      ],
    },
  ],
};

export const hub: {
  label: string;
  heading: string;
  body: string[];
  address: string;
  hours: string;
  ctaLabel: string;
  sketch: ArtItem;
} = {
  label: "W4GZ Hub · Hồ Chí Minh",
  heading: "Một không gian văn hóa sẽ được nhân rộng",
  body: [
    "W4GZ Hub là không gian vật lý ở HCMC, thiết kế để tác động tới con người theo cách truyền thống — buộc người ta đối mặt, gặp gỡ, va chạm, và cư xử dựa trên đó. Bên trong là vô số hoạt động nâng cao tri thức, có chiều sâu, được thiết kế bài bản, trong một không gian chung đòi hỏi nuôi dưỡng liên tục.",
    "Chúng ta mạnh dạn trên mạng nhưng bối rối khi đối mặt người khác — Hub tồn tại để vá vết nứt đó.",
  ],
  address: "[ Địa chỉ Hub — chỉ mở cho thành viên ]",
  hours: "[ Giờ mở cửa — 24/24 ]",
  ctaLabel: "Tìm Hub",
  sketch: {
    id: "hub",
    kind: "sketch",
    brief: "góc phòng có sách, bàn dài, người ngồi viết và trò chuyện",
    ratio: "4 / 3",
  },
};

export const online: { label: string; channels: Entry[]; note: string } = {
  label: "Cộng đồng online",
  channels: [
    {
      index: "Khởi nguyên của W4GZ",
      title: "Discord W4GZ",
      description: "Nơi các W hiện diện, viết lách, tâm sự, phản biện, thực hành và không ngừng tạo giá trị",
      status: "[link]",
    },
    {
      index: "Lưu trữ lâu dài",
      title: "Blog W4GZ",
      description: "Biên tập và lưu lại các ấn phẩm từ W4GZ.",
      status: "[link]",
    },
    {
      index: "Truyền thông và tin tức",
      title: "Fanpage",
      description: "Kiến thức, thông tin, và các thông báo quan trọng.",
      status: "[link]",
    },
  ],
  note: "Discord dành cho các W đã qua cổng; Blog và Fanpage là cửa sổ mở cho công chúng. Cần link thật: Discord, Blog, Fanpage.",
};

export const transition = {
  text: "Hãy xem cộng đồng này tạo ra điều gì.",
  href: "/ecosystem",
};
