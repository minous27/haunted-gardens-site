import Image from "next/image";
import { shadinlit, inter } from "./ui/styles/fonts";

export default function Home() {
  return(
    <div className="home-main">
      <h1 className={`${shadinlit.className}`}>Helotes Haunted Gardens</h1>
      <h3 className={`${shadinlit.className}`}>The spookiest, haunted, gory path in Old Town Helotes</h3>
      <p className={`${inter.className}`}>October 26th - 31st</p>
      <p className={`${inter.className}`}>Mon - Fri: Dark to 10PM / Sat: Dark - 11PM</p>
      <p className={`${inter.className}`}>$12 Online Admission / $15 At the Door</p>
      <p className={`${inter.className}`}>Kids 10 & under are free</p>
      <p className={`${shadinlit.className}`}>It&apos;s okay to scream...</p>
      <button className="buy-tickets">Buy Tickets Now</button>
      {/* TODO - re-add if we get a new image*/}
      {/* <Image
        src="/Haunted_Gardens_flyer_2025.jpeg"
        height={849}
        width={1280}
        className="flyer-img"
        alt="Haunted Gardens 2025 Flyer"
        priority={true}
      /> */}
    </div>
  );
}
