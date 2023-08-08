import Header from "./Header";
import Footer from "./Footer";

export default function Layout({bg, headerBg, colorLineHeader, footerBg, children, colorLineFooter}) {
  return (
    <div
      className={
        bg==="black"
          ? "bg-black text-white divLayout"
          :"bg-whisper text-black-russian divLayout min-h-screen flex flex-col justify-between"
      }
    >
      <Header variant={headerBg} colorLine={colorLineHeader} />
      <main>{children}</main>
      <Footer variant={footerBg} colorLine={colorLineFooter} />
    </div>
  );
}
