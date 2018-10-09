var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: ".RWD",
    triggerHook: 0.8,
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

timeline.staggerFrom("#sun1,#sun2,#sun3",1.1,{
    scale: 1.1,
    yoyo: true,
    ease: Elastic.easeOut
})

var clipline = TweenMax.from("#dt_line1,#dt_line2,#dt_line3",0.3,{
    scaleX: 0
})
var clipline1 = TweenMax.from("#ph_line1,#ph_line2,#ph_line3", 0.3, {
    scaleX: 0
})
var clipline2 = TweenMax.from("#tb_line1,#tb_line2,#tb_line3", 0.3, {
    scaleX: 0
})

timeline.add(clipline, 0.3)
timeline.add(clipline1, 0.3)
timeline.add(clipline2, 0.3)

var clipMon = TweenMax.from("#dt_M1,#dt_M2,#dt_M3",0.1,{
    y: "+=200px",
    ease: Power4.easeOut
})
var clipMon1 = TweenMax.from("#tb_M1,#tb_M2,#tb_M3", 0.2, {
    y: "+=200px",
    ease: Power4.easeOut
})
var clipMon2 = TweenMax.from("#ph_M1,#ph_M2,#ph_M3", 0.2, {
    y: "+=200px",
    ease: Power4.easeOut
})

timeline.add(clipMon,0.35)
timeline.add(clipMon1, 0.3)
timeline.add(clipMon2, 0.3)

window.addEventListener("scroll", function () {
    let currentY = window.scrollY
    let pageHeight = $("html").height() - window.innerHeight
    let pageOther = 0.1
    let progress = currentY / pageHeight + pageOther
    timeline.progress(progress)
    timeline.pause()
})

