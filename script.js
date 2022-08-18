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


//TIMER

const button = document.querySelector('.btn_timer');
button.addEventListener('click', startTimer);
    
let timer = 1;
let amountTime = timer * 60;


function startTimer(){
    gsap.to('.btn_timer', {opacity:0, duration: 1.5})
    gsap.to('.about', {opacity:0, duration: 1.5, delay: 2})
    function calculateTime(){
        const countDown = document.querySelector('.countDown');
        let minutes = Math.floor(amountTime % 3600 / 60);
        let seconds = Math.floor(amountTime % 3600 % 60);
    
        if(minutes < 10) {
            minutes = `0${minutes}`
        }
        if(seconds < 10) {
            seconds = `0${seconds}`
        }

    
        countDown.textContent = `${minutes} : ${seconds}`;
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

