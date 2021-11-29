import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);

 gsap.set("#completelogo", {scale: .3,transformOrigin: "center"});


 const mainTL = gsap.timeline()

function completelogo(){
     const tl = gsap.timeline();
     return tl;
}





    mainTL.add(completelogo())

GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();