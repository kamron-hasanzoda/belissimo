// queryselector
let main = document.querySelector("main")

// delivery create
let header = document.createElement("div")
let belImg = document.createElement("img")
let stats = document.createElement("div")
let strana = document.createElement("div")
let gorod = document.createElement("p")
let tashkent = document.createElement("p")
let zvezda = document.createElement("div")
let imgzvezda = document.createElement("img")
let osenka = document.createElement("p")
let zvonok = document.createElement("img")
let nomer = document.createElement("h1")
let vremya = document.createElement("p")
let halal = document.createElement("img")
let yazik = document.createElement("h2")
let login = document.createElement("h2")
let pizza = document.createElement("div")
let pizzaLeft = document.createElement("div")
let pizzaImg = document.createElement("img")
let pizzaInfo = document.createElement("div")
let vibor = document.createElement("p")
let tolstota = document.createElement("p")
let pizzaRight = document.createElement("div")
let scolko = document.createElement("div")
let minus = document.createElement("p")
let kolichestvo = document.createElement("p")
let plus = document.createElement("p")
let summa = document.createElement("h1")

// class
header.classList.add("header")
belImg.classList.add("belissimoimg")
strana.classList.add("strani")
stats.classList.add("goroda")
tashkent.classList.add("tashkent")
imgzvezda.classList.add("zvezda-pht")
zvezda.classList.add("zvezda-div")
zvonok.classList.add("img-tel")
pizza.classList.add("pizza")
halal.classList.add("halal")
pizzaLeft.classList.add("left-pizza")
pizzaImg.classList.add("left-img")
pizzaInfo.classList.add("info")
pizzaRight.classList.add("right-pizza")
scolko.classList.add("scolko")
gorod.classList.add("gorod")
vremya.classList.add("txt")
osenka.classList.add("osenka")
tolstota.classList.add("tols")

// text
gorod.innerHTML = "Город : ";
tashkent.innerHTML = " Ташкент";
nomer.innerHTML = "1174";
osenka.innerHTML = "4,72/5";
vremya.innerHTML = "Бесплатная доставка за 45 минут или бесплатная пицца";
yazik.innerHTML = "узбекский";
login.innerHTML = "Входить";
vibor.innerHTML = "Сальса маленькая";
tolstota.innerHTML = "Толстый"
minus.innerHTML = "-";
kolichestvo.innerHTML = "1";
plus.innerHTML = "+";
summa.innerHTML = "55 000 сум";


plus.onclick = () => {
    kolichestvo.innerHTML++
    summa.innerHTML+55000
}
// img 
belImg.setAttribute('src', './assets/img/belissimo logo.svg')
imgzvezda.setAttribute('src', './assets/img/star.webp')
zvonok.setAttribute('src', './assets/img/phone.svg')
halal.setAttribute('src', './assets/img/halal.webp')
pizzaImg.setAttribute('src', './assets/img/pizza.webp')

// append
main.append(header, pizza)
header.append(belImg, stats, zvonok, nomer, vremya, halal, yazik, login)
stats.append(strana, zvezda)
strana.append(gorod, tashkent)
zvezda.append(imgzvezda, osenka)
pizza.append(pizzaLeft, pizzaRight)
pizzaLeft.append(pizzaImg, pizzaInfo)
pizzaInfo.append(vibor, tolstota)
pizzaRight.append(scolko, summa)
scolko.append(minus, kolichestvo, plus)
