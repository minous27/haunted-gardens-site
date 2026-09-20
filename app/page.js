import Image from "next/image";
import { shadinlit } from "./ui/styles/fonts";
import BuyTicketsButton from "./ui/components/BuyTicketsButton";

export default function Home() {
  return(
    <div className="home-main">
      <h1 className={`${shadinlit.className}`}>Helotes Haunted Gardens</h1>
      <h3 className={`${shadinlit.className}`}>The spookiest, haunted, gory path in Old Town Helotes</h3>
      <p className={`${shadinlit.className}`}>It&apos;s okay to scream...</p>
      <Image
        src="/Haunted_Gardens_flyer_2026.jpg"
        width={849}
        height={1280}
        className="flyer-img"
        alt="Haunted Gardens 2025 Flyer"
        priority={true}
      />
      <BuyTicketsButton />
    </div>
  );
}
