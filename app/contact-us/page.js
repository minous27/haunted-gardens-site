import Image from "next/image";

export default function Page() {
    return(
        <div className="contact-us-main">
            <h1>Contact Us</h1>
            <Image
                src="/Haunted_Gardens_logo.JPG"
                width={945}
                height={945}
                className="logo-img"
                alt="Haunted Gardens logo"
                priority={true}
            />
            <p>Looking for more content or want to reach out with general questions? Follow us on our socials!</p>
            <a href="https://www.facebook.com/HelotesHauntedGardens" referrerPolicy="no-referrer" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/heloteshauntedgardens/?__d=1%2F" referrerPolicy="no-referrer" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/discover/haunted-garden-helotes?lang=en" referrerPolicy="no-referrer" target="_blank">Tiktok</a>
            {/* <p>For other inquiries please reach us at the below emails:</p>
            <ul>
                <li>For talent acquisition and related subjects questions: <a href="mailto: heloteshauntedgardenstalent@gmail.com">heloteshauntedgardenstalent@gmail.com</a></li>
                <li>For marketing questions: <a>TBD</a></li>
            </ul> */}
        </div>
    );
}