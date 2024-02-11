/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form')
calculateCM = document.getElementById('calculate-cm')
calculateKG = document.getElementById('calculate-kg')
calculateMessage = document.getElementById('calculate-message')

const calculateBMI = (e)=>{
    e.preventDefault()

    // check if fields have value
    if(calculateCM.value === '' || calculateKG.value===''){
        
        // Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight 💀'

        // remove message after three seconds
        setTimeout(()=>{
            calculateMessage.textContent = ''
        },3000)
    }

    else{
        // BMI Formula
        const cm = calculateCM.value/100
        const kg = calculateKG.value

        const bmi = Math.round(kg/(cm*cm))
    
        // show your health status
        if(bmi<18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are underweight`
        }
        else if (bmi<25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        }
        else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
        }
        
        // remove message 4 seconds
        setTimeout(() => {
             // to clear the input field
            calculateCM.value=''
            calculateKG.value=''
            calculateMessage.textContent = ''
        }, 4000);
    }

}

calculateForm.addEventListener('submit',calculateBMI)


/*=============== EMAIL JS ===============*/
