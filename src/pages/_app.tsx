import QuoteProvider from '@/contexts/quote';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QuoteProvider>
            <Head>
                <title>Instant Quote | Cleancorp</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <Head>
                <meta charSet="utf-8" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
            </Head>

            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NWK33MST');
                  `}
            </Script>

            <Script id="google-tag-manager-noscript" strategy="afterInteractive">
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=GTM-NWK33MST`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
            </Script>

            <main>
                <Component {...pageProps} />
            </main>
        </QuoteProvider>
    );
};
