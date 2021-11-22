 import {gsap} from "gsap";
 import { GSDevTools } from "gsap/GSDevTools";

 gsap.registerPlugin(GSDevTools);
 gsap.set("#completelogo", {scale: .3,transformOrigin: "center"});


 const mainTL = gsap.timeline()

function completelogo(){
     const tl = gsap.timeline();
     return tl;
}



    mainTL.add(completelogo())

    GSDevTools.create();