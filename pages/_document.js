import Document, {Html, Head, Main, NextScript} from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <body>
          <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
            ym(50335891, "init", {
                  defer: true,
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
				  ecommerce:"dataLayer",
                  webvisor:true
            });`
            }
          </Script>			
          <noscript><div><img src="https://mc.yandex.ru/watch/50335891" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <Main />
          <NextScript />
          <Script src="//cdn.callibri.ru/callibri.js" type="text/javascript" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;