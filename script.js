//alert("hello")
gsap.set(".slidesm", {scale: 5})
function homepageAnimation(){

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        // markers:true,
        // pin:true,
        scrub:0.5

    },
})


tl.to('.vdodiv', {
    '--clip':"0%",
    ease: Power2,
} , 'a').to(".slidesm",{
    scale:1,
    ease: Power2
} , 'a').to(".rgt",{
    xPercent:30,
    // stagger:0.03,
    ease: Power2
} , 'a').to(".lft",{
    xPercent:-40,
    // stagger:0.03,
    ease: Power2
} , 'a')
}
homepageAnimation();


function realPageAnimation(){
gsap.to(".slide",{
    scrollTrigger : {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        // markers:true,

        scrub:1
    },
    xPercent:-200,
    ease: Power4
});
}
realPageAnimation()


document.querySelectorAll('.listelem')
.forEach(function(el){
  el.addEventListener("mousemove", function(dets){

    gsap.to(this.querySelector('.picture'), {opacity: 1,x:  gsap.utils.mapRange(0, window.innerWidth, -200 , 200, dets.clientX), ease:Power4, duration:.3})
    console.log("move")
  })
   el.addEventListener("mouseleave", function(dets){
    gsap.to(this.querySelector('.picture'), {opacity: 0, ease:Power4, duration:.3})
  })

})


var clutter = "";
document.querySelector('.textpara')
.textContent.split("")
.forEach(function(e){
    if(e === " ") clutter +=`<span >&nbsp;</span>`
    clutter +=`<span >${e}</span>`

})
document.querySelector('.textpara').innerHTML = clutter

gsap.set(".textpara span", {opacity: .1})
gsap.to('.textpara span', {
    scrollTrigger: {
        trigger:".paragraph",
        start:"top 60%",
        end:"bottom 90%",
        scrub: 1,
    },
    opacity:1,
    stagger: 0.03,
    ease:Power4
})

 const locomotiveScroll = new LocomotiveScroll();


function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            // markers: true,
            scrub:1
        },
        y:0,
        ease:Power4
    })
}
capsulesAnimation()

document.querySelectorAll(".section")
.forEach(function(e){
ScrollTrigger.create({
    trigger:e,
    start:" top 50%",
    end:"bottom 50%",
    // markers:true,
    onEnter: function(){
   document.body.setAttribute("theme", e.dataset.color)
    },
    onEnterBack: function(){
 document.body.setAttribute("theme", e.dataset.color)
    }


})
})
