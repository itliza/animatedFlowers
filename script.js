gsap.to('.lamp-left', {y: -41.5, duration: 3})
gsap.to('.lamp-right', {y: -41.5, duration: 3})
gsap.to('.light', {opacity: 1, delay: 3, duration: 10})

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
