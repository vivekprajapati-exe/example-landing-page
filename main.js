var tl = gsap.timeline();
tl
.from(".text-animat" , {
    y:200,
    stagger:.05,
    ease:"Power3.out",
    delay:1,
})
gsap.to(".left" , {
    scrollTrigger:{
        trigger:".hero-wrapper",
        scroller:"body",
        start:"top 0%",
        end:"bottom 0%",
        scrub:2,

    },
    x:-400,
})
gsap.to(".right" , {
    scrollTrigger:{
        trigger:".hero-wrapper",
        scroller:"body",
        start:"top 0%",
        end:"bottom 0%",
        scrub:2,

    },
    x:400,
})
gsap.from("img" , {
    scrollTrigger:{
        trigger:".wrapper",
        scroller:"body",
        start:"top 70%",
        end:"bottom 0%",
    },
    // x:400,
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    duration:1.5,
    ease:"Power1.out",


})
gsap.from(".mess" , {
    scrollTrigger:{
        trigger:".mess",
        scroller:"body",
        start:"top 90%",
        end:"bottom 0%",
    },
    opacity:0,
    y:200,
    duration:1,
    ease:"Power3.out",
})