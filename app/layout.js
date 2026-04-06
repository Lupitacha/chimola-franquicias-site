import Script from "next/script";

import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata = {
  title: "Chimola Espacios Exclusivos | Evaluar mi plaza",
  description:
    "Presentación institucional y evaluación inicial para operadores interesados en desarrollar un espacio exclusivo Chimola.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[var(--sand)] text-[var(--ink)] antialiased">
        <Script id="chimola-datalayer" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        {gtmId ? (
          <>
            <Script
              id="chimola-gtm"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
