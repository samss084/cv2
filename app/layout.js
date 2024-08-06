import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Curriculum Vitae',
  description: 'This is an app to showcase myself and my skills on webdev',
  alternates: {
    canonical: 'https://cv2-sable.vercel.app',
    languages: {
      'en-US': 'en-US/',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
