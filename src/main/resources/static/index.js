let movie1 = "2012"
let movie2 = "Inception"
let movie3 = "Spider-man: no way home"
let movielist = [movie1, movie2, movie3]
let string = ""
let film = ""
let valgt;
let handlekurv = document.getElementById("handlekurv")

for(let movie of movielist){
    string += " <option>" + movie + "</option> "
}

handlekurv.innerHTML += string

handlekurv.onchange = function (){
    let moviechooses = handlekurv.selectedIndex - 1

    for(let movie of movielist){
        string += " <option>" + movie[moviechooses] + "</option> "
}
if (movielist[moviechooses] === "2012"){
    film = "2012"
    valgt = true
}
    if (movielist[moviechooses] === "Inception"){
        film = "Inception"
        valgt = true
    }
    if (movielist[moviechooses] === "Spider-man: no way home"){
        film = "Spider -man: no way home"
        valgt = true
    }
}

let input1 = document.getElementById("antall")
let input2 = document.getElementById("fornavn")
let input3 = document.getElementById("etternavn")
let input4 = document.getElementById("telefonnr")
let input5 = document.getElementById("email")

let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")
let t4 = document.getElementById("t4")
let t5 = document.getElementById("t5")

function Kjopbillett() {
    let antall = input1.value
    let fornavn = input2.value
    let etternavn = input3.value
    let telefonnr = input4.value
    let email = input5.value


    if (antall !== "") {
        valgt = true
        t1.innerHTML = "Kjopbillett"
    } else {
        t1.innerHTML = "Må skrive inn noe antall"
    }
    if (fornavn !== "") {
        valgt = true
    } else {
        t2.innerHTML = ""
    }

    if (etternavn !== "") {
        valgt = true
    }else{
        t3.innerHTML = ""
    }
    if (telefonnr !== "") {
        valgt = true
    }
    if (email !== "") {
        valgt = true
    }

}






