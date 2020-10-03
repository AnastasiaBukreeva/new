export class Cardlist {
  constructor(container,api,createCard) { 
    this.container = container; 
    this.api = api; 
    this.createCard = createCard;
  }

/*добавляем карточку в контейнер*/
 addCard(cardElement) {  
    this.container.appendChild(cardElement);  
  }
 

/* render(){
this.initialCards.forEach((elem)=> {
  const card = this.createCard(elem.name, elem.link);
  this.container.appendChild(card.create());
  card.setEventListeners();
})  
}*/

render(){
   this.api.getCards().then((res)=>{
     res.forEach((elem)=>{
       const card = this.createCard(elem.name, elem.link);
       this.container.appendChild(card.create());
       card.setEventListeners();
     })
     
   })
   .catch((err)  => {
    console.log(`Ошибка: ${err}`)
  })
   }
}
