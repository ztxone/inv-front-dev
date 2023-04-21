import Form from "./ui/Form";
import NavFooter from "./ui/NavFooter";
import Contact from "./ui/Contact";
import Copyright from "./ui/Copyright";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="mx-auto px-3.8 pb-[38px]">
      <Form />
      <NavFooter />
      <Contact />
      <Logo />
      <Copyright />
    </footer>
  );
}
