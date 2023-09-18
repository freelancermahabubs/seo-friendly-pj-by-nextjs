import SiteNavBar from "@/components/SiteNavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#229900" />
        <SiteNavBar /> {children}
        <Footer />
      </body>
    </html>
  );
}
