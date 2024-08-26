import Link from "next/link";
import { inter } from "./ui/styles/fonts";
import "./ui/styles/globals.css";

export const metadata = {
  title: "Helotes Haunted Gardens",
  description: "App made by and for the Helotes Haunted Gardens"
};

export const viewport = {content: "width=device-width, initial-scale=1.0"};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="nav-section">
            <Link className="nav-link" href="/">Home</Link>  
            <Link className="nav-link" href={"https://www.simpletix.com/e/helotes-haunted-gardens-2024-tickets-182408"} referrerPolicy="no-referrer" target="_blank">Buy Tickets</Link>
            <Link className="nav-link" href="location">Location</Link>
            <Link className="nav-link" href="contact-us">Contact Us</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
