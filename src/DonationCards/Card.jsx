/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({card}) => {
 const{id,picture,title,category,card_bg_color,category_bg_color,text_button_bg_color}= card || {}
 const cardStyle = {
    backgroundColor: card_bg_color
  };

  const categoryStyle = {
    backgroundColor: category_bg_color
  };

  const buttonStyle = {
    backgroundColor: text_button_bg_color
  };
 

    return (
       <Link to={`card/${id}`}>
        <div className={`bg-[${card_bg_color}]`}>
            <div className="card card-compact bg-base-100 shadow-xl" style={cardStyle}>
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
   <div className="flex justify-start">
   <button className="btn" style={categoryStyle}>{category}</button>
   </div>
    <p className="buttonStyle">{title}</p>
  </div>
            </div>
        </div>
       </Link>
    );
};

export default Card;