const grey = document.querySelector('#Grey');
grey.addEventListener('click', function () {
    document.getElementById('Body').className = "grey-background";
    document.getElementById('naamKleur').innerHTML = "Grey";

})

const red = document.querySelector('#Red');
red.addEventListener('click', function () {
    document.getElementById('Body').className = "red-background";
    document.getElementById('naamKleur').innerHTML = "Red";
})

const orange = document.querySelector('#Orange');
orange.addEventListener('click', function () {
    document.getElementById('Body').className = "orange-background";
    document.getElementById('naamKleur').innerHTML = "Orange";
})

const purple = document.querySelector('#Purple');
purple.addEventListener('click', function () {
    document.getElementById('Body').className = "purple-background";
    document.getElementById('naamKleur').innerHTML = "Purple";

})

const green = document.querySelector('#Green');
green.addEventListener('click', function () {
    document.getElementById('Body').className = "green-background";
    document.getElementById('naamKleur').innerHTML = "Green";

})

const grijsweg = document.getElementById('grijsweg');

grijsweg.addEventListener('click', function () {
    document.getElementById('lijst').classList.toggle("lijstjeAan")
})


const grijserbij = document.getElementById('navi');

grijserbij.addEventListener('click', function () {
    document.getElementById('lijst').classList.remove("lijstjeAan")
    document.getElementById('lijst').classList.add("lijstjeUit")
})
