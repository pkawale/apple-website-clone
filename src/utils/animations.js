import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGSAP = (target, animationprops, scrollprops) => {
    gsap.to(target, {
        ...animationprops,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollprops
        }
    })
};


export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState,
    firstTarget, secondTarget, animationprops) => {

    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationprops,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationprops,
            ease: 'power2.inOut'
        },
        '<'
    )
}