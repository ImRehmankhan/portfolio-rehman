import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        
        {/* Google Fonts with display=swap for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicons and Icons */}
        <link rel="icon" href="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0ea5a4" />
        <meta name="msapplication-TileColor" content="#0ea5a4" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />
        
        {/* Author and Copyright */}
        <meta name="author" content="Muhammad Rehman" />
        <meta name="copyright" content="Muhammad Rehman" />
        <meta name="rating" content="general" />
        
        {/* Robots Meta - Allow indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Verify Ownership (Add your verification codes when available) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
   <meta name="google-site-verification" content="YAdXzl60JHaFr0Y0pmgEsZDcMn0Y4m9B9s8TTEnJO24" />
        
        {/* Additional SEO */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        
        {/* Open Graph Default Image */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Softoria" />
        
        {/* Twitter Card Defaults */}
        <meta name="twitter:site" content="@softoria" />
        <meta name="twitter:creator" content="@muhammadrehman" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

