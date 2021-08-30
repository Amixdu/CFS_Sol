
// display a greeting message
function welcomeMessage(){
    document.getElementById("nameOutput").innerHTML = "Hello there! What's your name?"
}

// display a grreting with name
function greetWithName(){
    const name = document.getElementById("name")
    if (name.value == ""){
        document.getElementById("nameOutput").innerHTML = "Hello there! What is your name?"
    }
    else{
        document.getElementById("nameOutput").innerHTML = "Hi, " + name.value + "!"
    }
    
}

// age guess message
function ageGuess(){
    document.getElementById("ageOutput").innerHTML = "Lemme guess, your age is..."
}

// age prompt message
function agePrompt(){
    const date = document.getElementById("date")
    if (date.value == ""){
        document.getElementById("ageOutput").innerHTML = "Would you mind entering your birthday?"
    }
    // if value is there, invoke ageInput() function
    else{
        ageInput()
    }
}

// age input
function ageInput(){
    const date = document.getElementById("date").value
    const todayDate = new Date()
    const splitDate = date.split('-')
    document.getElementById("ageOutput").innerHTML = "Your age is " + (todayDate.getFullYear() - parseInt(splitDate[0])) + " years old!"
}


// change to dark mode
function darkMode(){
    const right = document.getElementById("right")
    const theme = document.getElementById("themeOutput")
    right.classList.remove("bg-light")
    right.classList.remove("text-dark")
    right.classList.add("bg-dark")
    right.classList.add("text-white")
    theme.innerHTML = "You chose Dark mode!"
}

// change to light mode
function lightMode(){
    const right = document.getElementById("right")
    const theme = document.getElementById("themeOutput")
    right.classList.remove("bg-dark")
    right.classList.remove("text-white")
    right.classList.add("bg-light")
    right.classList.add("text-dark")
    theme.innerHTML = "You chose Light mode!"
}

// move HTML button
function moveHTML(){
    const button = document.createElement('button');
    button.className += "btn btn-success btn-sm"
    button.innerHTML = "HTML"
    button.id = "htmlNew"
    button.setAttribute("onClick", "moveHTMLBack()")
    button.setAttribute("onmouseover", "changeColour(document.getElementById('htmlNew'))")
    button.setAttribute("onmouseout", "changeColourBack(document.getElementById('htmlNew'))")
    button.style.marginRight = "2.5px"
    document.getElementById("skillsOutput").appendChild(button)
    // removing from left
    document.getElementById("html").remove()
}

// move CSS button
function moveCSS(){
    const button = document.createElement('button');
    button.className += "btn btn-success btn-sm"
    button.innerHTML = "CSS"
    button.id = "cssNew"
    button.setAttribute("onClick", "moveCSSBack()")
    button.setAttribute("onmouseover", "changeColour(document.getElementById('cssNew'))")
    button.setAttribute("onmouseout", "changeColourBack(document.getElementById('cssNew'))")
    button.style.marginRight = "2.5px"
    document.getElementById("skillsOutput").appendChild(button)
    // removing from left
    document.getElementById("css").remove()
}

// move JavaScript button
function moveJS(){
    const button = document.createElement('button');
    button.className += "btn btn-success btn-sm"
    button.innerHTML = "JavaScript"
    button.id = "jsNew"
    button.setAttribute("onClick", "moveJSBack()")
    button.setAttribute("onmouseover", "changeColour(document.getElementById('jsNew'))")
    button.setAttribute("onmouseout", "changeColourBack(document.getElementById('jsNew'))")
    button.style.marginRight = "2.5px"
    document.getElementById("skillsOutput").appendChild(button)
    // removing from left
    document.getElementById("javascript").remove()
}

// move HTML button back
function moveHTMLBack(){
    const button = document.createElement('button');
    button.className += "btn btn-success btn-sm"
    button.innerHTML = "HTML"
    button.id = "html"
    button.setAttribute("onClick", "moveHTML()")
    button.style.marginRight = "2.5px"
    button.style.marginLeft = "2.5px"
    document.getElementById("skills").after(button)
    // removing from right
    document.getElementById("htmlNew").remove()
}

// move CSS button back
function moveCSSBack(){
    const button = document.createElement('button');
    button.className += "btn btn-success btn-sm"
    button.innerHTML = "CSS"
    button.id = "css"
    button.setAttribute("onClick", "moveCSS()")
    button.style.marginRight = "2.5px"
    button.style.marginLeft = "2.5px"
    // if HTML button exists, move the button after it
    try{
        document.getElementById("html").after(button)
    }
    catch{
        document.getElementById("skills").after(button)
    }
        
    // removing from right
    document.getElementById("cssNew").remove()
}

// move JavaScript button
function moveJSBack(){
    const button = document.createElement('button');
    button.className += "btn btn-success btn-sm"
    button.innerHTML = "JavaScript"
    button.id = "javascript"
    button.setAttribute("onClick", "moveJS()")
    button.style.marginRight = "2.5px"
    button.style.marginLeft = "2.5px"
    // if CSS button exists, move the button after it
    try{
        document.getElementById("css").after(button)
    }
    catch{
        document.getElementById("skills").after(button)
    }
    // removing from right
    document.getElementById("jsNew").remove()
}

// change button colour
function changeColour(button){
    button.classList.remove("btn-success")
    button.classList.add("btn-danger")
}

// change it back
function changeColourBack(button){
    button.classList.remove("btn-danger")
    button.classList.add("btn-success")
}