// gsap.to('.lamp-left', {y: -41.5, duration: 3})
// gsap.to('.lamp-right', {y: -41.5, duration: 3})
// gsap.to('.light', {opacity: 1, delay: 3, duration: 10})

// FIRST FLOWER

// gsap.to('.leaf-one', {rotate: -5, x: -5, delay: 3, duration: 5})
    


gsap.to(".leaf-one", {
    scrollTrigger: {
      trigger: ".leaf-one"
    },
    x: -5,
    rotate: -5,
    duration: 5,
    yoyo: true,
    repeat: -1,
    delay: 3
});

gsap.to(".leaf-two", {
    scrollTrigger: {
      trigger: ".leaf-two"
    },
    x: -5,
    rotate: -5,
    duration: 5,
    yoyo: true,
    repeat: -1,
    delay: 3
});

gsap.to(".leaf-three", {
    scrollTrigger: {
      trigger: ".leaf-three"
    },
    x: -5,
    rotate: -5,
    duration: 5,
    yoyo: true,
    repeat: -1,
    delay: 3
});



//DATE

const todayDate = new Date();
console.log(todayDate);

let hour = todayDate.getHours();
if(hour<10){
    hour = `0${hour}`
}
console.log(hour)

const minTime = 8;
const maxTime = 18;

if(hour >= maxTime && hour <= 23 ) {
    timer = minTime + 23 - hour + 1;
    console.log(timer);
    startTimer();
} else if(hour >= 0 && hour <= 8) {
    timer = minTime - hour;
    console.log(timer);
    startTimer();
}

//TIMER

const button = document.querySelector('.btn_timer');
button.addEventListener('click', startTimer);
    

let amountTime = timer * 60 * 60;


function startTimer(){
    gsap.to('.btn_timer', {opacity:0, duration: 1.5})
    function calculateTime(){
        const countDown = document.querySelector('.countDown');
        let hours = Math.floor(amountTime / 3600);
        let minutes = Math.floor(amountTime % 3600 / 60);
        let seconds = Math.floor(amountTime % 3600 % 60);
    
        if(hours < 10) {
            hours = `0${hours}`
        }
        if(minutes < 10) {
            minutes = `0${minutes}`
        }
        if(seconds < 10) {
            seconds = `0${seconds}`
        }

    
        console.log(hours);
        countDown.textContent = `${hours} : ${minutes} : ${seconds}`;
        amountTime--;
    
        
        if(amountTime > 0) {
            startLight()
        } else if(amountTime < 0) {
            stopInterval();
            amountTime = 0;
            stopLight();

            changeText();

            document.querySelectorAll('.lamp-left').forEach(item=>{
                gsap.to('.lamp-left', {y: 0, duration: 3, delay: 3})
            })
            document.querySelectorAll('.lamp-right').forEach(item=>{
                gsap.to('.lamp-right', {y: 0, duration: 3, delay: 3})
            })

        }
    
        function stopInterval(){
            clearInterval(timerOn);
        }
    }
    
    let timerOn = setInterval(calculateTime, 1000);

    gsap.to('.lamp-left', {y: -41.5, duration: 3})
    gsap.to('.lamp-right', {y: -41.5, duration: 3})

    
}

function stopLight(){
    // gsap.to('.light', {opacity: 0, duration: 5});
    document.querySelectorAll('.light').forEach(item=>{
        gsap.to('.light', {opacity:0, duration: 5})
    })
}
function startLight(){
    document.querySelectorAll('.light').forEach(item=>{
        gsap.to('.light', {opacity:1, duration: 7})
    })
}
function changeText(){
    let text = document.querySelector('.countDown');
    text.textContent = `Flowers have got enough light`;
    text.style.opacity = 0;

    gsap.to('.countDown', {opacity: 1, duration: 5})
}
