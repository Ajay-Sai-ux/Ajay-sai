import "./globals.css";
import Header from "@/components/Header/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <Header />
        {children}
      </body>
    </html>
  );
}
