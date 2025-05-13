import React, { useEffect, useRef, useState } from "react";
import { NavigationBar } from "./NavigationBar";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../hooks/useTheme";
import upIcon from "../assets/upIcon.png";
import { Footer } from "./Footer"

export const Layout = ({ children }: React.PropsWithChildren<object>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const starsValue = 130;
  const starsSpeed = 0.5;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDarkMode, setDarkMode] = useState(false);

  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    setTheme(checked ? "dark" : "light");
  };

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    setDarkMode(theme !== "light");

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 1000);
    };

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = Array.from({ length: starsValue }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * starsSpeed,
      dy: (Math.random() - 0.5) * starsSpeed,
      opacity: Math.random(),
      opacityDirection: -0.002,
    }));

    function animate() {
      if (context && canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        points.forEach((point) => {
          context.beginPath();
          context.arc(point.x, point.y, 0.7, 0, Math.PI * 2, false);
          context.fillStyle = `rgba(${
            theme === "dark" ? "255, 255, 255" : "248, 107, 13"
          }, ${point.opacity})`;
          context.fill();

          point.x += point.dx;
          point.y += point.dy;

          point.dx += (Math.random() - 0.5) * 0.0002;
          point.dy += (Math.random() - 0.5) * 0.0002;

          if (point.x + 5 > canvas.width || point.x - 5 < 0) {
            point.dx = -point.dx;
          }

          if (point.y + 5 > canvas.height || point.y - 5 < 0) {
            point.dy = -point.dy;
          }

          point.opacity += point.opacityDirection;

          if (point.opacity <= 0.2 || point.opacity >= 1) {
            point.opacityDirection = -point.opacityDirection;
          }
        });

        requestAnimationFrame(animate);
      }
    }

    animate();
  }, [windowWidth, starsValue, theme, starsSpeed]);

  return (
    <div
      className="p- w-100 layout"
      style={{ minHeight: "100vh", height: "100%" }}
    >
      <NavigationBar />

      <header className="layout__bg">
        <canvas ref={canvasRef} />
      </header>

      <div
        className="container mx-auto w-100 m-0 p-0 px-2 position-relative"
        style={{
          height: "100%",
          flex: "1",
          zIndex: 1,
        }}
      >
        {children}
      </div>

      <Footer />

      {!isAtTop && (
        <button
          className="border d-flex justify-content-center align-items-center rounded-5 position-fixed me-3 layout__btn"
          style={{
            bottom: 66,
            background: isDarkMode ? "rgb(117, 114, 114)" : "white",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={upIcon} alt="upIcon" height={18} />
        </button>
      )}

      <div
        className="border d-flex justify-content-center align-items-center rounded-5 position-fixed me-3 layout__btn"
        style={{
          bottom: 20,
          background: isDarkMode ? "rgba(63, 63, 63, 1)" : "white",
        }}
      >
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={16}
        />
      </div>
    </div>
  );
};
