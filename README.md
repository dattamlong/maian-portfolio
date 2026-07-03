# Portfolio — Tran Thi Mai An

Website portfolio cá nhân cho **Tran Thi Mai An (UX/UI Designer)**.
Dựng bằng **Next.js + Tailwind CSS + TypeScript**, tối ưu để deploy lên **Vercel**.

## Chạy ở máy

```bash
npm install
npm run dev      # mở http://localhost:3000
```

Build production:

```bash
npm run build
npm start
```

## Sửa nội dung

Toàn bộ thông tin (giới thiệu, học vấn, kinh nghiệm, dự án, kỹ năng, liên hệ) nằm ở **một file duy nhất**:

```
lib/data.ts
```

Sửa file đó là nội dung trên web tự cập nhật — không cần đụng vào giao diện.

### Việc cần làm thêm
- **Link CV**: trong `lib/data.ts`, đổi `cvUrl: "#"` thành link PDF (Google Drive / Figma).
- **Ảnh**: hiện Hero dùng monogram "MA". Nếu có ảnh chân dung, bỏ vào `public/` rồi thay khối monogram trong `components/Hero.tsx`.
- **Ảnh dự án**: có thể thêm thumbnail cho từng dự án trong `components/Projects.tsx`.

## Cấu trúc

```
app/
  layout.tsx      # font, metadata SEO, theme
  page.tsx        # ghép các section
  globals.css     # hệ màu (sáng/tối) + Tailwind
  icon.svg        # favicon
components/        # Navbar, Hero, About, Experience, Projects, Skills, Contact
lib/data.ts        # ← toàn bộ nội dung
```

## Deploy lên Vercel

1. Đẩy code lên GitHub:
   ```bash
   git init && git add -A && git commit -m "init portfolio"
   git branch -M main
   git remote add origin <URL-repo-cua-ban>
   git push -u origin main
   ```
2. Vào [vercel.com](https://vercel.com) → **Add New → Project** → import repo (Vercel tự nhận diện Next.js).
3. Nhấn **Deploy** → nhận link dạng `ten-cua-ban.vercel.app`.
4. Mỗi lần `git push` → Vercel tự build lại.

> Hoặc dùng Vercel CLI: `npm i -g vercel && vercel`
