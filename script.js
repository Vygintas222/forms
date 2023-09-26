function init(student){

    const contactForm = document.getElementById('contact-form')

    formLocalStorageHandler(contactForm)

    contactForm.addEventListener('submit', (event) => {

        event.preventDefault()
        localStorage.removeItem('name')
        localStorage.removeItem('surname')
        localStorage.removeItem('age')
        localStorage.removeItem('phone')
        localStorage.removeItem('email')
        localStorage.removeItem('it-knowledge')
        localStorage.removeItem('group')
        localStorage.removeItem('interest')

        const studentList = document.getElementById('students-list')

        const studentItem = document.createElement('div')

            studentItem.classList.add('student-item')

            studentList.append(studentItem)

        const personName = contactForm.name.value
        const personSurname = contactForm.surname.value
        const personAge = contactForm.age.value
        const personEmail = contactForm.email.value
        const personKnowledge = contactForm.knowledge.value
        const personGroup = contactForm.feu.value
        const interests = contactForm.interest
        const dataName = document.createElement('h2')

             dataName.textContent = `Name:${personName}`
             studentItem.append(dataName)

        const dataSurname = document.createElement('h2')

            dataSurname.textContent = `Surname:${personSurname}`
            studentItem.append(dataSurname)

        const dataAge = document.createElement('h3')

            dataAge.textContent = `Age: ${personAge}`
            studentItem.append(dataAge)


        const dataEmail = document.createElement('p')

            dataEmail.innerHTML = `<strong>Email:<strong>`
            studentItem.append(dataEmail)


            const emailSpanElement = document.createElement('span')
            emailSpanElement.textContent = '****'
            dataEmail.append(emailSpanElement)



        const dataknowledge = document.createElement('h3')

            dataknowledge.textContent = `IT knowledge :${personKnowledge}/10`
            studentItem.append(dataknowledge)

        const dataGroup = document.createElement('h3')

            dataGroup.textContent = `Group:${personGroup}`
            studentItem.append(dataGroup)
 
           
                
            const interestsWrapperElement = document.createElement('div')
            const interestsHeaderElement = document.createElement('h3')
            interestsHeaderElement.innerHTML = `<legend>Interests: <legend>`
          
            const interestsList = document.createElement('ul')
          
  

                            interests.forEach(function(interest){

                              if (interest.checked){

                                
                                const interestItem = document.createElement('li')
                                interestItem.textContent = interest.value
                                interestsList.append(interestItem)
                              }
                            })

             




                interestsWrapperElement.append(interestsHeaderElement, interestsList)
                studentItem.append(interestsWrapperElement)
    
    const emailButton = document.createElement('button')
    
    emailButton.textContent = 'Show private info'
    studentItem.append(emailButton)
    
 

    let showPrivateInfo = false

emailButton.addEventListener('click',function(){

    showPrivateInfo = !showPrivateInfo
    if (showPrivateInfo){
        emailButton.textContent = 'Hide private info'
        emailSpanElement.textContent = personEmail
    }else{
        emailButton.textContent = 'Show private info'
        emailSpanElement.textContent = '****'
    }


    
})




alertMessage(`Student (${personName} ${personSurname}) successfully created`)


const deleteStudentButton = document.createElement('button')

deleteStudentButton.textContent = 'Remove student'

studentItem.append(deleteStudentButton)

deleteStudentButton.addEventListener('click',function(){

    studentItem.remove()

    alertMessage(`Student (${personName} ${personSurname}) successfully removed`)
})
 
    


        
        })    

        function alertMessage(text) {
            const alertMessageElement = document.querySelector('#alert-message')

            alertMessageElement.textContent = text
          
            setTimeout(() => {
              alertMessageElement.textContent = ''
            }, 5000);
          }


    }
init()


function formLocalStorageHandler(form){
console.log(form.elements.name)



const nameInput = form.name

if(localStorage.getItem('name')){
    nameInput.value = localStorage.getItem('name')
}

nameInput.value = localStorage.getItem('name')

nameInput.addEventListener('input',function(){

    localStorage.setItem('name',nameInput.value)


})

form.addEventListener('submit',function(){

    localStorage.removeItem('name')

})




const surnameInput = form.surname
    
    if(localStorage.getItem('surname')){
        surnameInput.value = localStorage.getItem('surname')
    }
    
    surnameInput.value = localStorage.getItem('surname')
    
    surnameInput.addEventListener('input',function(){
    
        localStorage.setItem('surname',surnameInput.value)
    
    
    })
    
    form.addEventListener('submit',function(){
    
        localStorage.removeItem('surname')
    
    })

    const ageInput = form.age

    if (localStorage.getItem('age')) {
      ageInput.value = localStorage.getItem('age')
    }
  
    ageInput.addEventListener('input', () => {
      localStorage.setItem('age', ageInput.value)
    })
  

    const emailInput = form.email

    if (localStorage.getItem('email')) {
      emailInput.value = localStorage.getItem('email')
    }
  
    emailInput.addEventListener('input', () => {
      localStorage.setItem('email', emailInput.value)
    })



    const itKnowledgeInput = form.knowledge

  if (localStorage.getItem('it-knowledge')) {
    itKnowledgeInput.value = localStorage.getItem('it-knowledge')
  }

  itKnowledgeInput.addEventListener('input', function(){

      localStorage.setItem('it-knowledge', itKnowledgeInput.value)
    })







    const checkedGroupElement = form.querySelector(`input[name="feu"][value="${localStorage.getItem('feu')}"]`)
  
    if (checkedGroupElement) {
      checkedGroupElement.checked = true
    }
  
    form.feu.forEach(groupInput => {
   
    
      groupInput.addEventListener('input', () => {
        localStorage.setItem('group', groupInput.value)
      })
    })
  
  





    
    const localStorageInterests = JSON.parse(localStorage.getItem('interest'))
  
    if (localStorageInterests) {   
      const interestElements = form.querySelectorAll('[name="interest"]')
      
      interestElements.forEach(interestElement => {
        const interestValue = interestElement.value
        
        if (localStorageInterests.includes(interestValue)) {
          interestElement.checked = true
        } else {
          interestElement.removeAttribute('checked')
        }
      })
    }
  
    form.interest.forEach(groupInput => {
      groupInput.addEventListener('input', () => {
        console.log('veikia')
        const checkedInterests = form.querySelectorAll('[name="interest"]:checked')
        
        const checkedInterestValues = [...checkedInterests].map(interest => interest.value)
  
        localStorage.setItem('interest', JSON.stringify(checkedInterestValues))
      })
    })

  

}


   
const value1 = document.querySelector("#value")
const input1 = document.querySelector("#it")
value1.textContent = input1.value
input1.addEventListener("input", (event) => {
  value1.textContent = event.target.value
})






















