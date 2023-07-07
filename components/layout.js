import Header from "./Header";
import Footer from "./Footer";

export default function Layout({bg, headerBg, footerBg, children}) {
  return (
    <div
      className={
        bg==="black"
          ? "bg-black text-white divLayout"
          :"bg-whisper text-black-russian divLayout"
      }
    >
      <Header variant={headerBg} />
      <main>{children}</main>
      <Footer variant={footerBg} />
    </div>
  );
}
