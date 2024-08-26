import Image from "next/image";

export default function Page() {
    return(
        <div className="location-container">
            <h1>Where to find us</h1>
            <p>Come scream with us at The Gardens at Old Town Helotes.</p>
            <h2><a href="https://maps.app.goo.gl/37kDvnwqcMYMDnWt5" referrerPolicy="no-referrer" target="_blank">15060 Antonio Drive, Helotes, TX 78023</a></h2>
            <Image
            className="location-img"
            src={'/location-map.png'}
            width={980}
            height={805}
            alt={"Screenshot of map showing location of event"}
            />
        </div>
    );
}