"use client";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedText
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="img/entrance.webp"
                  alt="entrance"
                  className="onject-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-96 xl:-mt-64 md:me-44 md:justify-end overflow-hidden">
          <div className="flex h-full w-fit flex-col items-center md:items-start  overflow-hidden">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start overflow-hidden">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;