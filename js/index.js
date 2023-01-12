function validation(form) {

    function removeError(input){
        const parent = input.parentNode;
        if(parent.classList.contains('error')){
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
    
    function createError(input, text){
        const errorLabel=document.createElement('label');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        const parent = input.parentNode;
        parent.classList.add('error');
        parent.append(errorLabel);


    }
    
    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs){

        removeError(input) // удаление предыдущего сообщения об ошибке


        if (input.dataset.minLength) {
            
            if (input.value.length<input.dataset.minLength) {
                removeError(input) // удаление предыдущего сообщения об ошибке
                console.log('Ошибка поля');
                createError( input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result=false;
            } 
        }
        
        
        
        if (input.dataset.maxLength) {
            if (input.value.length>input.dataset.maxLength) {
                removeError(input) // удаление предыдущего сообщения об ошибке
                console.log('Ошибка поля');
                createError( input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result=false;
            } 
        }


        if (input.dataset.required =='true') {

            if (input.value=='') {
                console.log('Ошибка поля');
                removeError(input)
                createError( input, 'Поле не заполнено!')
                result=false;
            } 
        }
    } 


    return result
}


document.getElementById('add-form').addEventListener('submit', function(event){
    event.preventDefault()
    
    if(validation(this)==true){
        alert('Форма проверена успешно!')
    }
})