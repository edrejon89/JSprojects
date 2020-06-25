'use strict'
// Variables globales
let name;
let date;
let hour;
let countdown;


// Referencias
const eventName = document.querySelector('#eventName');
const dateTime = document.querySelector('#dateTime');
const eventHour = document.getElementById('eventHour');
const divError = document.querySelector('#error');

const btnCreate = document.querySelector('#create');
const btnStart = document.querySelector('.start');

const ddays = document.querySelector('#days');
const dhours = document.querySelector('#hours');
const dminutes = document.querySelector('#minutes');
const dseconds = document.querySelector('#seconds');

const tiempoCumplido = document.querySelector('#tcumplido');
const paragraph = document.querySelectorAll('p')[1];
const nameEvent = document.querySelector('#nameEvent');

tiempoCumplido.style.display = 'none';
const today = new Date();

dateTime.setAttribute('min',`${today.getFullYear()}-${(today.getMonth()+1<10)?'0'+(today.getMonth()+1):(today.getMonth()+1)
}-${(today.getDate()<10)?'0'+today.getDate():today.getDate()}`);

eventHour.setAttribute('value',`${today.getHours()}:${today.getMinutes()}`);


// Eventos
btnCreate.addEventListener('click', () => {
    if (eventName.value == '' || dateTime.value == '' || eventHour.value == '') {
        divError.innerHTML = '';
        if (eventName.value == '') {
            divError.innerHTML += 'Completar el campo nombre';
        }
        if (dateTime.value == '') {
            divError.innerHTML += '<br>Completar el campo fecha';
        }

        if (eventHour.value == '') {
            divError.innerHTML += '<br>Completar el campo hora';
        }else{
            let timenow = `${new Date().getHours()}:${new Date().getMinutes()}`;
            console.log(`La hora es: ${timenow}`);
            console.log(new Date().getTime(timenow));
        }

    
        setTimeout(() => {
            divError.innerHTML = '';
        }, 5000);
        return;
    }
    this.name = eventName.value;
    this.date = dateTime.value;
    this.hour = eventHour.value;
    this.countdown = new Date(`${this.date} ${this.hour}`).getTime();

    const now = new Date().getTime();
    const distance = this.countdown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    nameEvent.innerHTML = this.name;
    ddays.innerHTML = days;
    dhours.innerHTML = hours;
    dminutes.innerHTML = minutes;
    dseconds.innerHTML = seconds;
});

btnStart.addEventListener('click', () => {

    let x = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.countdown - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        ddays.innerHTML = days;
        dhours.innerHTML = hours;
        dminutes.innerHTML = minutes;
        dseconds.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            paragraph.style.display = 'none';
            tiempoCumplido.style.display= 'block';
        }

    }, 1000);
    // setTimeout(() => {
    //     clearInterval(x);
    // }, 5000);
});


// recuperacion 
console.log