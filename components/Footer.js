import Form from './ui/Form';
import NavFooter from './ui/NavFooter';
import Contact from './ui/Contact';
import Copyright from './ui/Copyright';

export default function Footer() {
  // if (document.body.classList.contains('footer--dark')) {
  //   return (
  //     <footer className='mx-auto pb-[38px] lg:px-[72px] text-inherit'>
  //       <div
  //         className='mx-auto max-w-[1920px] xl:flex 
  //       flex-wrap xl:justify-end xl:items-start border-t border-eclipse xl:pt-[40px]'
  //       >
  //         <Form />
  //         <NavFooter />
  //         <Contact />
  //         <Copyright />
  //       </div>
  //     </footer>
  //   );
  // }
  return (
    <footer className='mx-auto pb-[38px] lg:px-[72px] text-inherit bg-black'>
      <div
        className='text-white  mx-auto lg:max-w-[1746px] xl:flex 
      flex-wrap xl:justify-end xl:items-start border-t border-eclipse xl:pt-[40px]'
      >
        <Form />
        <NavFooter />
        <Contact />
        <Copyright />
      </div>
    </footer>
  );
}
