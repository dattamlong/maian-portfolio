// ─────────────────────────────────────────────────────────────
// Toàn bộ nội dung portfolio tập trung tại đây.
// Muốn đổi thông tin / thêm dự án → chỉ sửa file này.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Tran Thi Mai An",
  role: "UX/UI Designer",
  tagline:
    "Thiết kế những trải nghiệm số rõ ràng, hữu ích và có chiều sâu — nơi thẩm mỹ, công nghệ và nhu cầu người dùng gặp nhau.",
  intro:
    "Mình là UX/UI Designer với kinh nghiệm thiết kế 30+ Zalo Mini App và hàng trăm màn hình sản phẩm trên nhiều lĩnh vực. Mình thích quá trình đi từ nghiên cứu người dùng, dựng wireframe, tạo prototype cho đến xây dựng Design System giúp sản phẩm nhất quán và ra mắt nhanh hơn.",
  location: "Quận 4, TP. Hồ Chí Minh, Việt Nam",
  email: "tranthimaian.p@gmail.com",
  phone: "0396598720",
  behance: {
    label: "@anan326",
    url: "https://www.behance.net/anan326",
  },
  cvUrl: "#", // TODO: thay bằng link CV PDF (Drive/Figma) khi có
};

export const stats = [
  { value: "30+", label: "Zalo Mini App" },
  { value: "100+", label: "Màn hình thiết kế" },
  { value: "5+", label: "Lĩnh vực sản phẩm" },
  { value: "3.43", label: "GPA / 4.0" },
];

export const education = [
  {
    school: "MindX Technology School",
    program: "UX/UI Design",
    place: "TP. Hồ Chí Minh",
    period: "2024 – 2025",
  },
  {
    school: "Đại học Công nghiệp TP. Hồ Chí Minh (IUH)",
    program: "Thương mại điện tử — GPA 3.43/4.0",
    place: "TP. Hồ Chí Minh",
    period: "2022 – 2026",
  },
];

export const experience = [
  {
    company: "DIGIBIRD CO.",
    title: "UX/UI Designer — Full-time",
    place: "TP. Hồ Chí Minh",
    period: "2025 – Hiện tại",
    points: [
      "Thiết kế UI/UX cho 30+ Zalo Mini App: nghiên cứu người dùng, wireframe và prototype nhằm tối ưu trải nghiệm tổng thể.",
      "Dựng 100+ màn hình cho mỗi dự án mobile và thiết kế tương tác giúp tăng tính khả dụng của sản phẩm.",
      "Phát triển UI components cho nền tảng AIMINI, tinh gọn quá trình triển khai và vận hành Zalo Mini App.",
      "Tạo 30+ template Mini App cho 5+ lĩnh vực (bán lẻ, giáo dục, dịch vụ, du lịch, bất động sản), rút ngắn thời gian ra thị trường.",
      "Phối hợp xuyên suốt với Product Manager, Business Analyst và Developer trong toàn bộ vòng đời sản phẩm.",
      "Góp phần xây dựng & áp dụng Design System, Components và Auto Layout để tăng tốc quy trình thiết kế.",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
};

export const featuredProjects: Project[] = [
  {
    name: "Aimini",
    category: "Product Design",
    description:
      "Nền tảng sản phẩm: hệ thống quản lý bán hàng Mini App kèm công cụ dựng website kéo–thả cho Mini App.",
    tags: ["Platform", "Design System", "Web Builder"],
  },
  {
    name: "GENFIN-X",
    category: "Fintech",
    description:
      "Ứng dụng di động của Nam Du Invest phục vụ giáo dục đầu tư tài chính cho người dùng.",
    tags: ["Mobile App", "Fintech", "UX Research"],
  },
  {
    name: "Zalo Mini Apps — Bán lẻ",
    category: "E-commerce",
    description:
      "Ajinomoto Shop, FPT Shop, Nam&Co, Co Shop — tham gia họp khách hàng để thu thập yêu cầu và trình bày phương án thiết kế.",
    tags: ["Zalo Mini App", "Retail", "Client-facing"],
  },
  {
    name: "The Adora & Hanoitour",
    category: "Rental & Booking",
    description:
      "App di động The Adora (đặt sự kiện) và Hanoitour Mini App (dịch vụ đặt chỗ du lịch).",
    tags: ["Booking", "Mobile App", "Travel"],
  },
  {
    name: "Loyalty Mini Apps",
    category: "Loyalty",
    description:
      "Bia Masan (Masan Group), My Pandora, Panasonic — kết nối và chăm sóc khách hàng thân thiết.",
    tags: ["Loyalty", "Zalo Mini App"],
  },
  {
    name: "STEM TOWN",
    category: "Education & Service",
    description:
      "Zalo Mini App STEM TOWN, STEM TOWN Staff và hệ thống quản lý dữ liệu khách hàng trên nền tảng (KDI Education).",
    tags: ["Education", "Data Management"],
  },
];

export const personalProjects: Project[] = [
  {
    name: "Pionail",
    category: "Beauty Booking",
    description:
      "App đặt lịch làm nail kết nối khách hàng, kỹ thuật viên và chủ salon: lịch hẹn, quản lý dịch vụ, vận hành trên một nền tảng.",
    tags: ["Booking", "Mobile App"],
  },
  {
    name: "CoJobs",
    category: "Freelance Marketplace",
    description:
      "Nền tảng kết nối freelancer với doanh nghiệp: tìm việc ngắn hạn, ứng tuyển, quản lý hồ sơ và theo dõi tiến độ.",
    tags: ["Marketplace", "Web App"],
  },
  {
    name: "Coze Porph Record",
    category: "Music Streaming",
    description:
      "Ứng dụng nghe nhạc trực tuyến tập trung vào khám phá nội dung, phát nhạc, quản lý playlist và thư viện cá nhân.",
    tags: ["Streaming", "Mobile App"],
  },
];

export const skills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Interaction Design",
  "Auto Layout",
  "Component Library",
];

export const tools = [
  "Figma",
  "Canva",
  "Adobe Illustrator",
  "Notion",
  "Microsoft Office",
  "HTML & CSS (cơ bản)",
];

export const languages = [{ name: "Tiếng Anh", level: "Giao tiếp" }];

export const nav = [
  { id: "about", label: "Giới thiệu" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "projects", label: "Dự án" },
  { id: "skills", label: "Kỹ năng" },
  { id: "contact", label: "Liên hệ" },
];
