//Hambuger Menu code
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
//End of Hambuger Menu code - KW

//Contact Us Form code - Version 1 
function contactUsFormValidate(form){

//var form1 = document.forms[form];
//alert("form1::"+form)
var contactName = document.getElementById("contactName").value;
var contactEmail = document.getElementById("contactEmail").value;

if(contactName == null || contactName == ''){
alert("Please provide your name");
return false;
}
if(contactEmail == null || contactEmail == ''){
alert("Please provide your Email");
return false;
}

return true;
//alert("Thank you "+contactName+" for contacting us. We will get back to you at "+contactEmail);

}

//New Code For Phone Validation - regex - As of March 2022
var phone_input = document.getElementById("contactPhone");

phone_input.addEventListener('input', () => {
  phone_input.setCustomValidity('');
  phone_input.checkValidity();
});

phone_input.addEventListener('invalid', () => {
  if(phone_input.value === '') {
    phone_input.setCustomValidity('Enter phone number!');
  } else {
    phone_input.setCustomValidity('Phone number format: 123-456-7890');
  }
});
//End of New Code For Phone Validation - regex - KW


//Code For Countdown-As of March 2022
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  //const deadline = new Date(Date.parse(new Date()) + 217 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', "Oct 13, 2022 09:00:00");  
//End of Code For Countdown - KW



function thanksFunction() {
const queryString = window.location.search;
//console.log(queryString);
//alert("in Thanks");
const urlParams = new URLSearchParams(queryString);
var urlContactName = urlParams.get('name');
var urlContactEmail = urlParams.get('email');
document.getElementById("thanksText").innerHTML = "Thank you <strong>"+urlContactName+"</strong> for your message. We will get back to you at "+urlContactEmail;
}
