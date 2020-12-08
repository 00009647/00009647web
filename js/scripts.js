// responsive navbar 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// form validation
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const form = document.getElementById('form')
const errorElement = document.getElementById('error') //to show up, where used made mistake

// in order to catch errors before they get submitted we would use the following lines of code
form.addEventListener('submit', (e) => {
  let = messages = []
  if (fname.value === '' || fname.value == null){     //if empty  
    messages.push('First Name is required')           //show this messages
    alert('Please, fill out the form correctly')      //First message will be on the top
  }

  if (lname.value === '' || lname.value == null){
    messages.push('Last Name is required')
  }

// prevents info with error from submitting
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')      //so that they separate from each other
  }
})
