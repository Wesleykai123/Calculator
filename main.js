// Get the input box and all button elements
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input
let string = "";

// Convert buttons NodeList to an array for easier manipulation
let arr = Array.from(buttons);

// Add a click event listener to each button
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
         // Check if the '=' button is clicked
        if(e.target.innerHTML == '='){
            // Evaluate the mathematical expression and update the input box
            string = eval(string);
            input.value = string;
        }
        // Check if the 'AC' button is clicked
        else if(e.target.innerHTML == 'AC'){
            // Clear the input string and reset the input box
            string = "";
            input.value = string;
        }
         // Check if the 'DEL' button is clicked
        else if(e.target.innerHTML == 'DEL'){
            // Remove the last character from the input string and update the input box
            string = string.substring(0, string.length-1);
            input.value = string;
        }
         // Handle other button clicks (numbers and operators)
        else{
            // Append the clicked button's value to the input string and update the input box
            string += e.target.innerHTML;
            input.value =string;
        }
    })
})