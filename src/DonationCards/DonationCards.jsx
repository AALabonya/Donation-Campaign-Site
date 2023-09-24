/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const DonationCards = () => {
  const cards = useLoaderData()

   console.log(cards);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 max-w-7xl mx-auto">
               {
                cards?.map(card=><Card key={card.id} card={card}></Card>)
               }
            </div>
        </div>
    );
};

export default DonationCards;