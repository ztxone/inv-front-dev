import Header from './Header';
import Footer from './Footer';

export default function Layout({bg = 'black', children}) {
  return (
    <div className={bg === 'grey' ? "bg-whisper text-black-russian" : "bg-black text-white"}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}