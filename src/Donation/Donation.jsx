import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../dataStored/LocalStorage";
import Cards from "../Cards/Cards";

const Donation = () => {
   const cards = useLoaderData();
   const [donations, setDonations] = useState([]);

   const [dataLength, setDataLength] = useState();
   const[noFound, setNoFound] =useState('');

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

 const handleRemove =()=>{
     localStorage.clear();
     setDonations([])
     setNoFound("Do Not Found")
 }

    return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center text-xl font-bold">{noFound}</p>
    
    :
  <div>
         <div className="flex justify-center">
         {
            donations.length > 0 && (
               <div>
                  <button onClick={handleRemove} className="btn btn-primary mt-2 normal-case" > Delete All </button>
               </div>
            )
           }
         </div>
        <div className="flex justify-center mx-auto mt-5">
           

         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-6xl">
             {
               dataLength ? donations.map(card=>(<Cards key={card.id} card={card}></Cards>))
                :donations.slice(0,4).map(card=><Cards key={card.id} card={card}></Cards>)

             }
        </div> 
       </div>
       <div className={dataLength === cards.length ? "hidden": ""}>
       <div className="flex justify-center mt-5 mb-5">
       {
         donations.length > 4 && <button onClick={()=>setDataLength(cards.length)} className="btn btn-primary">see All</button>
       }
        </div>
       </div>
       </div>



};</div>
     
   
}

export default Donation;