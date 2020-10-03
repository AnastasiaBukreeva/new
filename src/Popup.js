//класс открытия попапов
export class Popup {
    constructor(popupWindow, openPopup) {
      this.popupWindow = popupWindow;
      this.popupWindow.querySelector('.popup__close').addEventListener("click", () => this.close());
      this.openPopup = openPopup;
    }
  
    open(){
      this.popupWindow.classList.add(this.openPopup);
    }
    close(){
      this.popupWindow.classList.remove(this.openPopup);
    }
  }