'use client';
import { TICKET_SITE_URL } from "../constants";

const BuyTicketsButton = () => {
    const handleClick = () => {
        window.open(TICKET_SITE_URL, "_blank");
    };

    return (
        <button className="buy-tickets" onClick={handleClick}>
            Buy Tickets Now
        </button>
    );
};

export default BuyTicketsButton;