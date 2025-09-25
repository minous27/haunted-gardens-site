import Link from "next/link";
import { inter } from "./ui/styles/fonts";
import "./ui/styles/globals.css";

export const metadata = {
  title: "Helotes Haunted Gardens",
  description: "App made by and for the Helotes Haunted Gardens",
  applicationName: "Helotes Haunted Gardens Site",
  referrer: 'origin-when-cross-origin',
  keywords: ['helotes', 'haunted', 'gardens', 'old', 'town', 'house'],
  authors: [{name: 'Dillon Wilson', url: 'https://github.com/minous27'}],
  creator: 'Dillon Wilson',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    title: 'Helotes Haunted Gardens',
    description: 'App made by and for the Helotes Haunted Gardens',
    url: 'https://www.heloteshauntedgardens.com',
    siteName: 'Helotes Haunted Gardens',
    images: [
      {
        url: 'https://heloteshauntedgardens.com/hhg_flyer_2024.JPG',
        width: 849,
        height: 1280
      },
      {
        url: 'https://heloteshauntedgardens.com/location-map.png',
        width: 980,
        height: 805
      },
      {
        url: 'https://heloteshauntedgardens.com/Haunted_Gardens_logo.JPG',
        width: 945,
        height: 945
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/Haunted_Gardens_logo.JPG',
    shortcut: '/Haunted_Gardens_logo.JPG',
    apple: '/Haunted_Gardens_logo.JPG'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helotes Haunted Gardens',
    description: 'Website for the Helotes Haunted Gardens'
  },
  category: 'haunted house'
};

export const viewport = {content: "width=device-width, initial-scale=1.0"};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="nav-section">
            <Link className="nav-link" href="/">Home</Link>  
            <Link className="nav-link" href={"https://www.simpletix.com/e/helotes-haunted-gardens-2025-tickets-238827"} referrerPolicy="no-referrer" target="_blank">Buy Tickets</Link>
            <Link className="nav-link" href="location">Location</Link>
            <Link className="nav-link" href="contact-us">Contact Us</Link>
            <Link className="nav-link" href="actor-interest">Actor Interest</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
