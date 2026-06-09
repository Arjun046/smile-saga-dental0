import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smile Saga Dental Clinic | Best Dentist in Gota, Ahmedabad",
  description: "Experience premium dental care at Smile Saga Dental Clinic, Gota, Ahmedabad. Specialized in Implants, Root Canal, Teeth Whitening, and Braces. Book your appointment today!",
  keywords: ["Dentist in Gota", "Dental Clinic Ahmedabad", "Smile Saga Dental", "Best Dentist Ahmedabad", "Dental Implants Gota"],
  openGraph: {
    title: "Smile Saga Dental Clinic | Premium Dental Care in Gota",
    description: "Expert dental services with modern technology in Gota, Ahmedabad.",
    url: "https://smilesaga.com",
    siteName: "Smile Saga Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20 selection:text-primary-dark">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Smile Saga Dental Clinic",
              "image": "https://smilesaga.com/logo.png",
              "@id": "",
              "url": "https://smilesaga.com",
              "telephone": "+911234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 12, Premium Plaza, Gota Cross Road",
                "addressLocality": "Gota, Ahmedabad",
                "postalCode": "382481",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.1026,
                "longitude": 72.5375
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
