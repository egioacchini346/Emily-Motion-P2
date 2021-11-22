 import {gsap} from "gsap";
 import {GSDevTools} from "gsap/GSDevTools";



 gsap.registerPlugin(GSDevTools);

 gsap.set("#completelogo", {y: -200, scale: .70,transformOrigin: "center"});



 const mainTL = gsap.timeline()

 //var firstwave = document.querySelector("#first-wave");
 //var secondwave = document.querySelector("#second-wave");

 //var bBoxGroup = firstwave.getBBox();
 //var bBoxGroup2 = secondwave.getBBox();

 function completelogo(){
     const tl = gsap.timeline();
     return tl;
 }

 //function NAME(){
 //  const tl=gsap.timeline();
 // tl.from ("#shark", {opacity: 0, duration: 1})
 // .to("#first-wave", {duration:.7, x: -bBoxGroup.width / 2, ease: "none", repeat:2}, "start")
 // .to("#second-wave", {duration: .5, x: bBoxGroup2.width / 2, ease: "none", repeat:3}, "start")
 //.to("#third-wave", {duration: .4, x: -bBoxGroup.width / 2, ease: "none", repeat:1}, "start")
 // .to("#fourth-wave",  {duration: .5, x: bBoxGroup2.width / 2, ease: "none", repeat:4}, "start")
 //.to("#shark", {duration: 1, opacity: 1}, "start")
 // .to("#shark-fin", {duration:.7, x:280}, "start")
 //.to("#shark-fin-2", {duration: .5, x:-500},"-=1.3")
 //.to("#shark", { scale: .086, y: -430, x: 11.5},"start")
 //return tl; 
 //}

 mainTL.add(completelogo())
 // mainTL.add(NAME())
 // mainTL.add(NAME())

 GSDevTools.create();