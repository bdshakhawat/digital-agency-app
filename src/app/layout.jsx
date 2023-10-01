import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
export async function generateMetadata() {
  // SEO DATA FETCH
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader/>
        <Header /> 
        {children} 
        <Footer />
      </body>
    </html>
  );
}
