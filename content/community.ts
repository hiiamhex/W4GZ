import type { Localized } from "@/lib/i18n";
import type { Quote, Sketch, Entry } from "./types";

export interface Facet {
  title: string;
  body: string;
  sketch: Sketch;
}

export interface CommunityContent {
  hero: { label: string; headline: string; subhead: string };
  hub: {
    label: string;
    title: string;
    body: string;
    address: string;
    hours: string;
    ctaLabel: string;
    sketch: Sketch;
  };
  holistic: { label: string; epigraph: Quote; facets: Facet[] };
  online: { label: string; channels: Entry[]; note: string };
  transition: { text: string; href: string };
}

/** Chapter IV · Community — "The Living Community" (brief 5, Trang IV). */
export const community: Localized<CommunityContent> = {
  vi: {
    hero: {
      label: "The Living Community",
      headline: "Viết là cột sống. Đây là cơ thể.",
      subhead:
        "W4GZ không dừng ở một khóa học. Quanh việc viết, một đời sống đầy đủ được dựng lên — thân thể, tâm trí, giác quan, giọng nói, và những thứ tiếng khác.",
    },
    hub: {
      label: "Không gian vật lý · Hồ Chí Minh",
      title: "W4GZ Hub",
      body: "Một không gian dành riêng để viết, đọc, và gặp nhau tại HCMC. Buổi viết hằng tuần, giờ mở tự do, và những sự kiện định kì. Nơi cộng đồng gặp nhau ngoài đời thật.",
      address: "[ Địa chỉ Hub — đang cập nhật ]",
      hours: "[ Giờ mở cửa — đang cập nhật ]",
      ctaLabel: "Tìm Hub",
      sketch: {
        caption: "góc phòng có sách, bàn dài, người ngồi viết. Nét mực tối giản",
        alt: "Kí họa không gian W4GZ Hub: góc phòng có sách, bàn dài, người ngồi viết",
        aspect: "4 / 3",
      },
    },
    holistic: {
      label: "Phát triển toàn diện",
      epigraph: {
        original:
          "For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.",
        lang: "en",
        translation:
          "Sức mạnh của bầy nằm ở từng con sói, sức mạnh của con sói nằm ở cả bầy.",
        attribution: "Rudyard Kipling, The Law of the Jungle",
      },
      facets: [
        {
          title: "Thân thể",
          body: "Chạy bộ là một thực hành thường trực ở W4GZ; nhiều thành viên đã hoàn thành full và half marathon. Cùng đó là những chuyến trekking, cắm trại, leo núi. Thân thể là phương tiện đầu tiên ta có một thế giới — rèn nó là rèn chính nền của trải nghiệm (Merleau-Ponty).",
          sketch: {
            caption: "dáng người chạy lúc rạng sáng; hoặc đoàn người trên sống núi",
            alt: "Kí họa dáng người chạy lúc rạng sáng, hoặc đoàn người trên sống núi",
            aspect: "4 / 3",
          },
        },
        {
          title: "Tâm trí",
          body: "Cộng đồng chăm sóc sức khỏe tinh thần như một phần của thực hành, và rèn tư duy mạch lạc qua logic. Một đời có nghĩa là một đời chịu đựng được mọi cách sống (Frankl, nối tiếp Nietzsche).",
          sketch: {
            caption: "một người ngồi tĩnh bên cửa sổ; nét thưa, nhiều khoảng trống",
            alt: "Kí họa một người ngồi tĩnh bên cửa sổ, nét thưa, nhiều khoảng trống",
            aspect: "4 / 3",
          },
        },
        {
          title: "Giác quan",
          body: "Đọc thơ và làm thơ; vẽ kí họa. Hai thực hành mài lại cách nhìn và cách nghe — và chính kí họa của thành viên là ngôn ngữ thị giác của trang web này.",
          sketch: {
            caption: "bàn tay phác họa; vài trang thơ chép tay",
            alt: "Kí họa một bàn tay đang phác họa, bên cạnh vài trang thơ chép tay",
            aspect: "4 / 3",
          },
        },
        {
          title: "Giọng nói",
          body: "Kể chuyện trên sân khấu và làm podcast — đưa chữ rời trang giấy, thử nó trước một người nghe thật, trong một thân thể và một giọng.",
          sketch: {
            caption: "một người kể chuyện dưới ngọn đèn, vài bóng người nghe",
            alt: "Kí họa một người kể chuyện dưới ngọn đèn, với vài bóng người nghe",
            aspect: "4 / 3",
          },
        },
        {
          title: "Những thứ tiếng khác",
          body: "Anh, Nhật, Trung. Mỗi ngôn ngữ mới là một thế giới mới — đúng như giới hạn ngôn ngữ là giới hạn thế giới.",
          sketch: {
            caption: "vài hệ chữ đan nhau — Latin, kana, Hán",
            alt: "Kí họa vài hệ chữ đan nhau — chữ Latin, kana, và Hán",
            aspect: "4 / 3",
          },
        },
      ],
    },
    online: {
      label: "Cộng đồng online",
      channels: [
        {
          index: "Kênh chính",
          title: "Discord",
          description:
            "Nơi thực hành tiếp diễn giữa các buổi — chia sẻ, phản hồi, bàn luận.",
          status: "[link]",
        },
        {
          index: "Lưu trữ dài",
          title: "Blog W4GZ",
          description: "Bài viết cộng đồng và sản phẩm biên tập.",
          status: "[link]",
        },
        {
          index: "Cập nhật",
          title: "Fanpage",
          description: "Sự kiện, thông báo, lời mời mở.",
          status: "[link]",
        },
      ],
      note: "Cần link thật: Discord, Blog, (các) Fanpage — đang cập nhật.",
    },
    transition: {
      text: "Mỗi nhánh trên đã lớn thành một cộng đồng riêng.",
      href: "/ecosystem",
    },
  },
};
