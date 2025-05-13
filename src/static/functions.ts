import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const visibleElement = (classNames: string[]) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  classNames.forEach((className) => {
    const targets = document.querySelectorAll(className);
    targets.forEach((target) => {
      observer.observe(target);
    });
  });
};

export const animatedComponent = (
  nameOfClass: string,
  value: gsap.TweenVars,
  initialValue: gsap.TweenVars
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(nameOfClass, {
    scrollTrigger: {
      trigger: nameOfClass,
      toggleActions: "restart none restart none",
      onLeave: () => {
        gsap.set(nameOfClass, initialValue);
      },
    },
    ...value,
  });
};
