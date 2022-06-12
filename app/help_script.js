
let infoButton = document.getElementById("helpIcon")
let exitButton = document.getElementById("exitHelpIcon")
let helpPage = document.getElementById("infoOnQuiz")

infoButton.addEventListener('click', function(){displayHelp(); })
exitButton.addEventListener('click', function(){exitHelp(); })

function displayHelp() {
    helpPage.classList.remove("is--hidden")
    helpPage.classList.add("is--visible")
    console.log("Help is displayed")
}

function exitHelp() {
    helpPage.classList.remove("is--visible")
    helpPage.classList.add("is--hidden")
    console.log("Help is hidden")
}

