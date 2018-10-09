var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: ".RWD",
    triggerHook: 0.6,
    duration: "100%"
})
    .setClassToggle(".RWD", "show")
    .addTo(controller);

//TweenMax-RWD
var obj = {
    progress: 0
}
var timeline = new TimelineMax({
    onUpdate() {
        console.log(timeline.progress())
        obj.progress = timeline.progress()
    }
})
timeline.set("#sun1,#sun2,#sun3", {
    transformOrigin: "50% 50%",
})

timeline.from("#sun1,#sun2,#sun3",1.1,{
    scale: 1.1,
    yoyo: true,
    repeat: -1,
    ease: Elastic.easeOut
})
timeline.staggerFrom("#dt_line1,#dt_line2,#dt_line3,#ph_line1,#ph_line2,#ph_line3,#tb_line1,#tb_line2,#tb_line3",1.1,{
    scaleX: 0
},0.3)

timeline.staggerFrom(".M_all",0.5,{
    y: "+=200px",
    ease: Power4.easeOut
},0.1)

window.addEventListener("scroll", function () {
    let currentY = window.scrollY
    let pageHeight = $("html").height() - 100
    let progress = currentY / pageHeight
    timeline.progress(progress)
    timeline.pause()
})

