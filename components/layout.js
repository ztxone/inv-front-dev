import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  bg,
  headerBg,
  footerBg,
  children,
  pillowColor,
}) {
  return (
    <div
      className={
        bg === "black"
          ? "bg-black text-white divLayout"
          : "bg-whisper text-black-russian divLayout min-h-screen flex flex-col justify-between"
      }
    >
      <Header variant={headerBg} />
      <main>{children}</main>
      <Footer variant={footerBg} pillowColor={pillowColor} />
    </div>
  );
}
