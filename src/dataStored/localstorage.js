import swal from 'sweetalert';

const getStoredDonationCard =()=>{
    const storedDonationCard = localStorage.getItem("donation-card")

    if(storedDonationCard){
        return JSON.parse(storedDonationCard)
    }
    return [];

}



const saveDonationCard = id =>{
 const storedDonationCards = getStoredDonationCard();
 const isExist = storedDonationCards.find(cardId => cardId === id)
 
 if(!isExist){
    storedDonationCards.push(id);
    localStorage.setItem("donation-card", JSON.stringify(storedDonationCards))
    swal("Good job!", " Card Added!", "success");
}else{
    swal("Already Exist!", "No Duplicate!", "error");
}


}

export {saveDonationCard, getStoredDonationCard}