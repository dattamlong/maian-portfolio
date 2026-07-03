// ─────────────────────────────────────────────────────────────
// Toàn bộ nội dung portfolio tập trung tại đây.
// Muốn đổi thông tin / thêm dự án → chỉ sửa file này.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Tran Thi Mai An",
  greeting: "Xin chào, mình là Mai An",
  role: "UI/UX Designer",
  tagline:
    "UI/UX Designer trẻ, tạo nên những trải nghiệm số đơn giản, hữu ích và có chiều sâu.",
  aboutHeadPre: "Đam mê tạo ra",
  aboutHeadHighlight: "trải nghiệm có ý nghĩa",
  intro:
    "Mình là UI/UX Designer với kinh nghiệm thiết kế 30+ Zalo Mini App và hàng trăm màn hình sản phẩm trên nhiều lĩnh vực. Mình thích quá trình đi từ nghiên cứu người dùng, dựng wireframe, tạo prototype cho đến xây dựng Design System giúp sản phẩm nhất quán và ra mắt nhanh hơn.",
  intro2:
    "Mình quan tâm đến cách thiết kế, công nghệ và nhu cầu kinh doanh kết hợp với nhau để tạo ra sản phẩm số thực sự hữu ích cho người dùng.",
  quote:
    "“Thiết kế tốt là sự đơn giản, có mục đích và luôn hướng về nhu cầu thật của người dùng.”",
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

export const badges = [
  { icon: "🎓", label: "Thương mại điện tử — IUH" },
  { icon: "⭐", label: "GPA 3.43 / 4.0" },
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
    title: "UI/UX Designer",
    place: "TP. Hồ Chí Minh",
    period: "2025 – Hiện tại",
    type: "Full-time",
    summary:
      "Tại DIGIBIRD, mình thiết kế UI/UX cho các sản phẩm Zalo Mini App và nền tảng AIMINI trên nhiều lĩnh vực, từ nghiên cứu người dùng đến xây dựng Design System.",
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
  role: string;
  tools: string[];
  from: string; // gradient start
  to: string; // gradient end
  image?: string; // ảnh thật (nếu có) — nằm trong /public
};

export const featuredProjects: Project[] = [
  {
    name: "Aimini — Nền tảng Mini App",
    category: "Product Design",
    description:
      "Hệ thống quản lý bán hàng Mini App kèm công cụ dựng website kéo–thả, giúp doanh nghiệp tạo & vận hành Mini App nhanh chóng.",
    role: "UI/UX Designer",
    tools: ["Figma", "Design System"],
    from: "#394b38",
    to: "#5c7052",
    image: "/project-aimini.jpg",
  },
  {
    name: "GENFIN-X",
    category: "Fintech",
    description:
      "Ứng dụng di động của Nam Du Invest phục vụ giáo dục đầu tư tài chính, tập trung vào sự rõ ràng và tin cậy.",
    role: "UI/UX Designer",
    tools: ["Figma", "UX Research"],
    from: "#6e7f5c",
    to: "#94a67c",
  },
  {
    name: "Zalo Mini Apps — Bán lẻ",
    category: "E-commerce",
    description:
      "Ajinomoto Shop, FPT Shop, Nam&Co, Co Shop — tham gia họp khách hàng, thu thập yêu cầu và trình bày phương án thiết kế.",
    role: "UI/UX Designer",
    tools: ["Figma", "Client-facing"],
    from: "#f0af44",
    to: "#e4c07a",
  },
  {
    name: "The Adora & Hanoitour",
    category: "Rental & Booking",
    description:
      "App di động The Adora (đặt sự kiện) và Hanoitour Mini App (dịch vụ đặt chỗ du lịch) với luồng đặt chỗ mượt mà.",
    role: "UI/UX Designer",
    tools: ["Figma", "Prototyping"],
    from: "#c99a5b",
    to: "#e4c08a",
  },
  {
    name: "Loyalty Mini Apps",
    category: "Loyalty",
    description:
      "Bia Masan (Masan Group), My Pandora, Panasonic — hệ thống chăm sóc và giữ chân khách hàng thân thiết.",
    role: "UI/UX Designer",
    tools: ["Figma", "UI Design"],
    from: "#4a5a45",
    to: "#7a8c6e",
  },
  {
    name: "STEM TOWN",
    category: "Education & Service",
    description:
      "Zalo Mini App STEM TOWN, STEM TOWN Staff và hệ thống quản lý dữ liệu khách hàng trên nền tảng (KDI Education).",
    role: "UI/UX Designer",
    tools: ["Figma", "Data Management"],
    from: "#d9b26a",
    to: "#f0af44",
  },
];

export const personalProjects: Project[] = [
  {
    name: "Pionail",
    category: "Beauty Booking",
    description:
      "App đặt lịch làm nail kết nối khách hàng, kỹ thuật viên và chủ salon: lịch hẹn, quản lý dịch vụ, vận hành trên một nền tảng.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    from: "#c99a5b",
    to: "#f0af44",
  },
  {
    name: "CoJobs",
    category: "Freelance Marketplace",
    description:
      "Nền tảng kết nối freelancer với doanh nghiệp: tìm việc ngắn hạn, ứng tuyển, quản lý hồ sơ và theo dõi tiến độ.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    from: "#5c7052",
    to: "#94a67c",
  },
  {
    name: "Coze Porph Record",
    category: "Music Streaming",
    description:
      "Ứng dụng nghe nhạc trực tuyến tập trung vào khám phá nội dung, phát nhạc, quản lý playlist và thư viện cá nhân.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    from: "#394b38",
    to: "#6e7f5c",
  },
];

export const skills = [
  { key: "ui", name: "UI Design", desc: "Thiết kế giao diện rõ ràng, trực quan." },
  { key: "research", name: "UX Research", desc: "Thấu hiểu người dùng qua nghiên cứu." },
  { key: "wireframe", name: "Wireframing", desc: "Phác thảo cấu trúc & luồng màn hình." },
  { key: "prototype", name: "Prototyping", desc: "Tạo prototype tương tác, kiểm thử nhanh." },
  { key: "system", name: "Design System", desc: "Xây hệ thống component nhất quán." },
];

export const tools = [
  { key: "figma", name: "Figma", desc: "Thiết kế & cộng tác chính." },
  { key: "canva", name: "Canva", desc: "Dựng bố cục nhanh, gọn." },
  { key: "illustrator", name: "Adobe Illustrator", desc: "Đồ hoạ vector, minh hoạ." },
  { key: "notion", name: "Notion", desc: "Ghi chú & quản lý công việc." },
  { key: "office", name: "Microsoft Office", desc: "Tài liệu, trình bày." },
  { key: "htmlcss", name: "HTML & CSS", desc: "Kiến thức nền tảng web (cơ bản)." },
];

export const languages = [{ name: "Tiếng Anh", level: "Giao tiếp" }];

export const nav = [
  { id: "about", label: "Giới thiệu" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "projects", label: "Dự án" },
  { id: "skills", label: "Kỹ năng" },
  { id: "contact", label: "Liên hệ" },
];
