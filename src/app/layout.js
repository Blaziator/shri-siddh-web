import "./globals.css";

export const metadata = {
  title: "Shri Siddh",
  description: "Shri Siddh Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
