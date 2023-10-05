function idInfo(idcode){

// gender

let genderVal = parseInt(idcode[0])
let genderString = ""

const isGender = () => {
    if(genderVal % 2 == 0){
        genderString = "nais" 
        return `Isik isikukoodiga ${idcode} on naine (${genderVal}...),`
    } else {
        genderString = "mees"
        return `Isik isikukoodiga ${idcode} on mees (${genderVal}...),`
    }
}

if(genderVal % 2 == 0){
    genderString = "nais"   
} else {
    genderString = "mees"
}

// birth date

let birthDateVal = idcode.slice(1, 7)

let yearVal = parseInt(idcode.slice(1, 3))

let monthVal = parseInt(idcode.slice(3, 5))

let dayVal = parseInt(idcode.slice(5, 7))


if(yearVal > 23){
    newYearVal = 1900 + yearVal
} else {
    newYearVal = 2000 + yearVal
}


if(monthVal == 1){
    monthString = "Jaanuaril"
} else if(monthVal == 2){
    monthString = "Veebuaril"
} else if(monthVal == 3){
    monthString = "Märtsis"
} else if(monthVal == 4){
    monthString = "Aprillil"
} else if(monthVal == 5){
    monthString = "Mail"
} else if(monthVal == 6){
    monthString = "Juunil"
} else if(monthVal == 7){
    monthString = "Juulil"
} else if(monthVal == 8){
    monthString = "Augustil"
} else if(monthVal == 9){
    monthString = "Septemberil"
} else if(monthVal == 10){
    monthString = "Oktooberil"
} else if(monthVal == 11){
    monthString = "Novemberil"
} else if(monthVal == 12){
    monthString = "Detsemberil"
} else {
    monthString = ""
}

// department registry

let regisrtyVal = parseInt(idcode.slice(7, 10))

if(regisrtyVal < 11){
    regisrtyString = "Kuressaare haiglasse"
} else if(regisrtyVal < 20){
    regisrtyString = "Tartu Ülikooli Naistekliinikusse"
} else if(regisrtyVal < 151){
    regisrtyString = "Ida-Tallinna keskhaigla, Pelgulinna sünnitusmajja (Tallinn)"
} else if(regisrtyVal < 161){
    regisrtyString = "Tema on registreeritud Keila haiglasse"
} else if(regisrtyVal < 221){
    regisrtyString = "Rapla haiglasse, Loksa haiglasse, Hiiumaa haiglasse (Kärdla)"
} else if(regisrtyVal < 271){
    regisrtyString = "Ida-Viru keskhaiglasse (Kohtla-Järve, endine Jõhvi)"
} else if(regisrtyVal < 371){
    regisrtyString = "Maarjamõisa kliinikumisse (Tartu), Jõgeva haiglasse"
} else if(regisrtyVal < 421){
    regisrtyString = "Narva haiglasse"
} else if(regisrtyVal < 471){
    regisrtyString = "Pärnu haiglasse"
} else if(regisrtyVal < 491){
    regisrtyString = "Haapsalu haiglasse"
} else if(regisrtyVal < 521){
    regisrtyString = "Järvamaa haiglasse (Paide)"
} else if(regisrtyVal < 571){
    regisrtyString = "Rakvere haiglasse, Tapa haiglasse"
} else if(regisrtyVal < 601){
    regisrtyString = "Valga haiglasse"
} else if(regisrtyVal < 651){
    regisrtyString = "Viljandi haiglasse"
} else if(regisrtyVal < 701){
    regisrtyString = "Lõuna-Eesti haiglasse (Võru), Põlva haiglasse"
}

// born in that day

let bornVal = parseInt(idcode.slice(9, 10))

if(bornVal == 1){
    bornString = "esimene " + genderString
} else if(bornVal == 2){
    bornString = "teine " + genderString
} else if(bornVal == 3){
    bornString = "kolmas " + genderString
} else if(bornVal == 4){
    bornString = "neljas " + genderString
} else if(bornVal == 5){
    bornString = "viies " + genderString
} else if(bornVal == 6){
    bornString = "kuues " + genderString
} else if(bornVal == 7){
    bornString = "seitsmes " + genderString
} else if(bornVal == 8){
    bornString = "kaheksas " + genderString
} else if(bornVal == 9){
    bornString = "üheksas " + genderString
} else if(bornVal == 0){
    bornString = "kümnes " + genderString
}

// contorl number

let controlVal = parseInt(idcode.slice(-1))

const step = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]

let calcVal = 0

for(let i = 0; i < 10; i++){
	calcVal += parseInt(idcode[i]) * step[i];
}

let calcNum = calcVal - (Math.floor(calcVal / 11) * 11)

if(calcNum == 10){
	calcNum = 0
} 

let controlString = parseInt(idcode.slice(10, 11))

// output and idcode validator

if(controlVal != calcNum){
	return `    
    <!doctype html>
    <html lang="en">
        <head>
            <title>isikukoodi valideerimine</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <h2>Väär isikukood</h2>
                <form action="/validate" method="POST">
                    <div class="form-group mb-3">
                        <p>Teie isikukood on väär, sisestage korralik isikukood.</p>
                    </div>   
                </form>
                <form action="/" method="GET">
                    <div class="d grid mt-3">
                        <button class="btn btn-primary form-control">Tagasi</button> 
                    </div>
                </form>
            </div>
        </body>
    </html>`
} else {
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <title>isikukoodi valideerimine</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <h2>Isikukood ${idcode}</h2>
                <form action="/validate" method="POST">
                    <div class="form-group mb-3">
                        ${isGender()}
                        kes on sündinud ${dayVal}. ${monthString} ${newYearVal}. aastal. (.${birthDateVal}.).
                        Tema on registreeritud ${regisrtyString}, (.${regisrtyVal}.)
                        ja sel päeval oli ta ${bornString}soost isik (...${bornVal}.).
                        Isikukoodi kontrollnumbriks on ${controlString}. (...${controlString}).
                    </div>   
                </form>
                <form action="/" method="GET">
                    <div class="d grid mt-3">
                        <button class="btn btn-primary form-control">Tagasi</button> 
                    </div>
                </form>
            </div>
        </body>
    </html>
    `
}}

module.exports = {
    idInfo
}