
export class UserInfo {
  
    constructor (name, about,nameSpan, aboutSpane) {
      this.name = name;
      this.about = about;
      this.nameSpan = nameSpan;
      this.aboutSpane = aboutSpane;
      
    }
  
   setUserInfo(name, about) {
     this.name = name;
     this.about = about;
     
    }
    updateUserInfo() {
      this.nameSpan.textContent = this.name;
      this.aboutSpane.textContent = this.about;
    }
    actualAughtor(inputOne, inputTwo, actualOne, actualTwo) {
      inputOne.value = actualOne.textContent;
      inputTwo.value = actualTwo.innerText;
    }
  }
  
    
  