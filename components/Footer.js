import Form from "./ui/Form";
import NavFooter from "./ui/NavFooter";
import Contact from "./ui/Contact";
import Copyright from "./ui/Copyright";


export default function Footer() {
  return (
    <footer className="mx-auto pb-[38px] lg:px-[72px] text-inherit
    dark:text-white dark:bg-black">
      <div className='mx-auto max-w-[1920px] xl:flex 
      flex-wrap xl:justify-end xl:items-start border-t border-eclipse xl:pt-[40px]'>
        <Form />
        <NavFooter />
        <Contact />
        <Copyright />
      </div>
    </footer>
  );
}
