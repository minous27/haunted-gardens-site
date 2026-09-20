import Image from "next/image";
import { shadinlit, inter } from "./ui/styles/fonts";

export default function Home() {
  return(
    <div className="home-main">
      <h1 className={`${shadinlit.className}`}>Helotes Haunted Gardens</h1>
      <h3 className={`${shadinlit.className}`}>The spookiest, haunted, gory path in Old Town Helotes</h3>
      <p className={`${shadinlit.className}`}>It&apos;s okay to scream...</p>
      <Image
        src="/Haunted_Gardens_flyer_2026.jpg"
        className="flyer-img"
        alt="Haunted Gardens 2025 Flyer"
        priority={true}
      />
      <button className="buy-tickets">Buy Tickets Now</button>
    </div>
  );
}
