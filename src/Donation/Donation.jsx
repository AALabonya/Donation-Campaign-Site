import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../dataStored/LocalStorage";
import Cards from "../Cards/Cards";

const Donation = () => {
   const cards = useLoaderData();
   const [donations, setDonations] = useState([]);
   const [dataLength, setDataLength] = useState(4)
   useEffect(()=>{
        const storedDonation = getStoredDonationCard();
        if(cards.length > 0){
           const donationsCard =[];
           for (const id of storedDonation) {
             const card = cards.find(card=> card.id === id);
             if(card){
                donationsCard.push(card)
             }
           }
             setDonations(donationsCard);
        }
     },[cards]);

    return (
       <div>
        <div className="flex justify-center mx-auto mt-5">
         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-6xl">
             {
                donations.slice(0, dataLength).map(card=><Cards key={card.id} card={card}></Cards>)
             }
        </div> 
       </div>
       <div className={dataLength === cards.length ? "hidden": ""}>
       <div className="flex justify-center mt-5 mb-5">
        <button onClick={()=>setDataLength(cards.length)} className="btn btn-primary">See All</button>
        </div>
       </div>
       </div>
    );
};

export default Donation;