import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ bg, headerBg, footerBg, children }) {
  return (
    <div
      className={
        bg === "black" ? "bg-black text-white" : "bg-whisper text-black-russian"
      }
    >
      <Header variant={headerBg} />
      <main>{children}</main>
      <Footer variant={footerBg} />
    </div>
  );
}
