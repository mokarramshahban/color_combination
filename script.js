function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            scrub:1,
            pin:true,
            end:"bottom -250%"
        }
    
    })
    
    tl.to("#circle #btm img",{
        scale:1,
        rotate:"-180deg",
        duration:1,
        stagger:.1,
        ease: "power2.inOut"
    },"flag")
    .to("#circle #top img",{
        scale:1,
        duration:1,
        stagger:.1,
        ease: "power2.inOut"
    },"flag")
    .to("#cimage img",{
        scale:0,
        duration:1,
        stagger:.1,
        ease: "power1"
    },"flag")
    .to("#centre-img h5",{
        opacity:0,
        stagger:.1,
        ease: "power2.inOut"
    },"flag")
    .to("#circle",{
        scale:.6,
        duration:2,
        ease: "power2.inOut"
    },"flag")
    .to("#overlay>h1",{
        bottom:"-50%",
        ease: "power2.inOut"
    },"flag")
    
    .to("#overlay #s-circle",{
        top:"50%",
        scale:2,
        ease: "power1"
    },"flag")
    .to("#overlay #s-circle",{
        opacity:0,
        duration:2.2,
        ease: "power2.outOut"
    },"flag2")
    .to("#smcircle",{
        scale:.0,
        duration:2,
        ease: "power2.inOut"
    },"flag2")
    .to("#circle",{
        scale:.0,
        duration:2,
        ease: "power2.inOut"
    },"flag2")
    
    .to("#overlay #pf",{
        rotate:0,
        bottom:0,
        ease: "power2.inOut"
    },"flag2")
    .to("#pink_right",{
        top:"2.5%",
        duration:4,
        ease: "power2.inOut"
    },"flag2")
    .to("#pink_right",{
        top:"-100%",
        duration:2,
        ease: "power2.inOut"
    })
    
}

function timelineTwo() {
    var tl2 = gsap.timeline({
    scrollTrigger:{
       trigger: "#second",
       scrub: 1,
       start: "top Top",
       end: "bottom -150%",
       pin: true
}
    })

    tl2
    .to(".circle",{
        top:"50%",
        stagger:.1,
        ease: "power2.in"
    })
    .to(".circle",{
        left:"50%",
        stagger:.1,
        ease: "power2.in"
    })
    .to(".pi",{
        scale:10,
        stagger:.1,
        ease: "power2.in"
    })
    .to(".pi",{
        background:"linear-gradient(to right, #d5a7b4, #B4AAD5",
        ease: "power2.in"
    })
    .to("#stop h1",{
        left:"-200%",
        duration:8,
        ease: "power2.in"
    },"a")
    .to("#sbtm #p2",{
        opacity:0,
        duration:3,
        ease: "power2.in"
    },"a")
    .to("#sbtm #p1",{
        opacity:1,
        delay:1,
        duration:3,
        ease: "power2.in"
    },"a")

}
    



timelineOne();
timelineTwo();