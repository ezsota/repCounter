// ** MY SOLUTION** \\
// intialize the count as 0
let counter = 0;
let saveEl = document.getElementById("save-el");

// listen for clicks on the increment button 
//HTML --> onclick="increment()"

// increment the count variable when the button is clicked
function increment() {
    // change the count-el in the HTML to reflect the new count
    console.log("user started counting"); //For troubleshooting; this will show in console
    counter = document.getElementById("count-el").innerText = (counter + 1); //this should be changed to .textContent to save resources 
    // *this counter is local, so it doesnt affect the global counter variable
    // console.log(counter)
}

//Create a function that logs the count when invoked (use a button in the HTML)
function save() {
    console.log("user ended counting")
    // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    var countLog = counter + " - "
    // Render the variable in the saveEl using innerText
    saveEl.textContent += countLog
        // this += takes whatever is already the innerText for saveEl and then appends the current counter to it, making it grow instead of replace the record
        // shorthand: saveEl.innerText = saveEl.innerText + countLog  -  Makes sure to not delete the existing content of the paragraph
        // innerText only shows human readable content, so to display the blank spaces we use .textContent so it displays everything
        // innerText re-parses and is resource intensive so use .textContent when you can
    console.log("counted: " + counter)
    counter = document.getElementById("count-el").textContent = 0;//resets the count to zero after clicking save
}

function reset() {
    counter = document.getElementById("count-el").textContent = 0;
    saveEl.textContent = document.getElementById("save-el").innerText = "Previous Entries: ";
}

// make save button that resets counter