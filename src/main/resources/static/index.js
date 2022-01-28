let movie1 = "2012"
let movie2 = "Inception"
let movie3 = "Spider-man: no way home"
let movielist = [movie1, movie2, movie3]
let string = ""
let film = ""
let valgt;
let handlekurv = document.getElementById("handlekurv")
let bilett = "";
let biletter = [];

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

function Kjopbillett() {
    let input0 = document.getElementById("handlekurv")
    let input1 = document.getElementById("Antall")
    let input2 = document.getElementById("Fornavn")
    let input3 = document.getElementById("Etternavn")
    let input4 = document.getElementById("Telefonnr")
    let input5 = document.getElementById("Email")

    let t1 = document.getElementById("t1")
    let t2 = document.getElementById("t2")
    let t3 = document.getElementById("t3")
    let t4 = document.getElementById("t4")
    let t5 = document.getElementById("t5")

    t1.innerHTML = "";
    t2.innerHTML = "";
    t3.innerHTML = "";
    t4.innerHTML = "";
    t5.innerHTML = "";


    let film = input0.value
    let antall = input1.value
    let fornavn = input2.value
    let etternavn = input3.value
    let telefonnr = input4.value
    let email = input5.value


    let tiltak = true

    if (film === "Velg film") {
        tiltak = false
    }
    if (antall === ""){
        tiltak = false
        t1.innerHTML = " Må skrive noe inn i antall  "
    }
    if (fornavn === ""){
        tiltak = false
        t2.innerHTML = " Må skrive noe inn i fornavn "
    }
    if (etternavn === ""){
        tiltak = false
        t3.innerHTML = " Må skrive noe inn i etternavn "
    }
    if (telefonnr === ""){
        tiltak = false
        t4.innerHTML = " Må skrive noe inn i telefonnummer "
    }
    if (email === ""){
        tiltak = false
        t5.innerHTML = " Må skrive noe inn i email "
    }

    if(tiltak === false){
        return;
    }

    bilett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr:telefonnr,
        email: email,


    }
    document.getElementById("Billettene" ).innerHTML = "<tr><th>Film</th>"
    + "<th>Antall</th>"
    + "<th>Fornavn</th>"
    + "<th>Etternavn</th>"
    + "<th>Telefonnr</th>"
    + "<th>Email</th></tr>"

    biletter.push(bilett)
    for (let i = 0; i < biletter.length; i++) {
        document.getElementById("Billettene").innerHTML += "<tr><td>" + biletter[i].film + "</td> " +
            "<td>" + biletter[i].antall + "</td> " +
            "<td>" + biletter[i].fornavn + "</td> " +
            "<td>" + biletter[i].etternavn + "</td> " +
            "<td>" + biletter[i].telefonnr + "</td> " +
            "<td>" + biletter[i].email + "</td> </tr>"
    }
}
function SlettAlleBillettene(){
    document.getElementById("Billettene" ).innerHTML =""
    biletter = [];
}






