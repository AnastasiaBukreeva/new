export class FormValidator {
    constructor(validForm){
      this.validForm = validForm;
      }
    
    checkInputValidity(input) {
      const errorMessages = {
        empty: 'Это обязательное поле',
        wrongLength: 'Должно быть от 2 до 30 символов',
        wrongUrl: 'Здесь должна быть ссылка',  
        noth : '',  
      }
      if (input.validity.valueMissing) {
        input.setCustomValidity(errorMessages.empty);
        return false;
      }
      if (input.validity.tooShort || input.validity.tooLong) {
       input.setCustomValidity(errorMessages.wrongLength);
        return false;
      }
      if (input.validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity(errorMessages.wrongUrl);
        return false
      }
      else {
        input.setCustomValidity(errorMessages.noth);
        return true;
      }
     
    }
  
      setSubmitButtonState(valid) {
          const button = this.validForm.querySelector('button');
          if (!valid) {
              button.setAttribute('disabled', true);
              button.classList.remove('popup__button_disabled');
          }
          else {
              button.removeAttribute('disabled', true);
              button.classList.add('popup__button_disabled');
          }
    }
    //валидно ли поле
      isFieldValid(input) {
          const errorElem = this.validForm.querySelector(`#error-${input.id}`); 
      const valid = this.checkInputValidity(input);
      errorElem.textContent = input.validationMessage;
          return valid;
      }
      setEventListeners() {
          const inputs = [...this.validForm.querySelectorAll('input')];
          
          this.validForm.addEventListener('input', (event) => {
              const inputForValidation = event.target;
              this.isFieldValid(inputForValidation);
              if (inputs.every((input) => input.validity.valid)) {
                  this.setSubmitButtonState(true);
              } else {
                  this.setSubmitButtonState(false);
              }
          });
      }
   errorReset() {
      const errorMessages = this.validForm.querySelectorAll(".error");
    errorMessages.textContent = "";
    
  }
  }