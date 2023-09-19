import SiteNavBar from "@/components/SiteNavBar";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import SiteFooter from "@/components/SiteFooter";

export async function generateMetadata() {
  // SEO DATA Fetch
  return {
    title: "Home",
    keyword: "",
  };
}
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#229900" height={3} speed={200} />
        <SiteNavBar /> {children}
        <SiteFooter />
      </body>
    </html>
  );
}
