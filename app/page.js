import Image from "next/image";
import { shadinlit } from "./ui/styles/fonts";

export default function Home() {
  return(
    <div className="home-main">
      <h1 className={`${shadinlit.className}`}>The spookiest, haunted, gory path in Old Town Helotes</h1>
      <p className={`${shadinlit.className}`}>It&apos;s okay to scream...</p>
      <Image
        src="/Haunted_Gardens_flyer_2025.jpeg"
        height={849}
        width={1280}
        className="flyer-img"
        alt="Haunted Gardens 2025 Flyer"
        priority={true}
      />
    </div>
  );
}
