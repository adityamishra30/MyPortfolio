import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/Landing.css";

export const RotatingRightText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const roles = [
    { prefix: "A Full Stack", highlighted: "AI/ML", suffix: "DEVELOPER" },
    { prefix: " ", highlighted: "COMPETITIVE", suffix: "PROGRAMMER" },
    { prefix: " ", highlighted: "DSA", suffix: "ENTHUSIAST" },
    { prefix: " ", highlighted: "PROBLEM", suffix: "SOLVER" }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      roles.forEach((_, index) => {
        const slideTl = gsap.timeline();

        slideTl.fromTo(
          `.role-${index}`,
          { y: 30, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        )
          .to(`.role-${index}`, { duration: 1.0 })
          .to(`.role-${index}`, {
            y: -30, opacity: 0, filter: "blur(8px)", duration: 0.6, ease: "power3.in"
          });

        tl.add(slideTl);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[150px]">
      {roles.map((role, index) => (
        <div
          key={index}
          className={`role-${index} absolute top-0 left-0 flex flex-col`}
          style={{ opacity: 0 }}
        >
          <h3>{role.prefix.trim() === "" ? "\u00A0" : role.prefix}</h3>
          <h2 className="landing-info-h2">{role.highlighted}</h2>
          <h2>{role.suffix}</h2>
        </div>
      ))}
    </div>
  );
};

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ADITYA NARAYAN
              <br />
              <span>MISHRA</span>
            </h1>
          </div>
          <div className="landing-info flex items-center w-full">
            <RotatingRightText />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;