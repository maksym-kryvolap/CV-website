import { useEffect } from "react";
import { visibleElement } from "../static/functions";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import {
  imagesCornerSwapList,
  imagesFYMList,
  imagesWiloList,
} from "../static/constatns";
import fistSwitch from "../assets/portfolio/fistSwitch/fistSwitch.png";
import airHome from "../assets/portfolio/air/airHome.png";
import boseHome from "../assets/portfolio/bose/boseHome.png";
import museum from "../assets/portfolio/museum/museum.png";
import game2048 from "../assets/portfolio/2048/2048Game.png";
import todoList from "../assets/portfolio/todoList/todoList.png";

export const Portfolio = () => {
  const { t } = useTranslation();

  const listOfProjects = [
    {
      images: imagesCornerSwapList,
      demo: "https://cornerswap.io",
      description: t("portfolio.cornerswap.description"),
      technologies:
        "React, TypeScript, Redux Toolkit, React Router, SumSub, Axios, Formik, Yup, i18next, Sitemap, HTML, CSS, SASS, Bootstrap, Figma.",
      note: t("portfolio.cornerswap.note"),
    },
    {
      images: imagesWiloList,
      description: t("portfolio.wilo.description"),
      technologies:
        "React, Vite, TypeScript, Redux Toolkit, React Router, Axios, Formik, Yup, i18next, Sitemap, HTML, CSS, SASS, Bootstrap, Figma.",
      note: t("portfolio.wilo.note"),
    },
    {
      images: [fistSwitch],
      description: t("portfolio.fistSwitch.description"),
      technologies:
        "HTML, CSS, BEM, Vite, React, Bootstrap, TypeScript, MetaMask SDK, Axios, i18next, Viem, Wagmi, Web3",
      note: t("portfolio.fistSwitch.note"),
    },
    {
      images: imagesFYMList,
      description: t("portfolio.fym.description"),
      technologies:
        "HTML, CSS, SASS, Bootstrap, Figma, GSAP, Next.js, TypeScript, Redux Toolkit, Redux Persist, Axios, Sitemap",
      gitHubLink: "https://github.com/maksym-kryvolap/fym",
      demo: "https://fym-imdb.vercel.app/",
    },
    {
      images: [airHome],
      demo: "https://maksym-kryvolap.github.io/air-landing/",
      description: t("portfolio.air.description"),
      technologies: "HTML, CSS, BEM, JavaScript",
      gitHubLink: "https://github.com/maksym-kryvolap/air-landing",
    },
    {
      images: [boseHome],
      demo: "https://maksym-kryvolap.github.io/bose-landing/",
      description: t("portfolio.bose.description"),
      technologies: "HTML, CSS, BEM, JavaScript",
      gitHubLink: "https://github.com/maksym-kryvolap/bose-landing",
    },
    {
      images: [museum],
      demo: "https://maksym-kryvolap.github.io/museum-landing/",
      description: t("portfolio.museum.description"),
      technologies: "HTML, SCSS, BEM, JavaScript",
      gitHubLink: "https://github.com/maksym-kryvolap/museum-landing",
    },
    {
      images: [todoList],
      demo: "https://maksym-kryvolap.github.io/todo-app/",
      description: t("portfolio.todoList.description"),
      technologies: "JavaScript, React, TypeScript, HTML, SCSS, BEM",
      gitHubLink: "https://github.com/maksym-kryvolap/todo-app",
    },
    {
      images: [game2048],
      demo: "https://maksym-kryvolap.github.io/game-2048/",
      description: t("portfolio.game2048.description"),
      technologies: "JavaScript, HTML, SCSS, BEM",
      gitHubLink: "https://github.com/maksym-kryvolap/game-2048",
    },
  ];

  useEffect(() => {
    visibleElement([".portfolio__title"]);
  }, []);

  return (
    <div
      className="portfolio pt-5 d-flex flex-column justify-content-center"
      id="portfolio"
    >
      <p className="fs-2 fw-bold text-center mb-4 mt-2 portfolio__title">
        {t("portfolio.title")}
      </p>

      <div className="row p-0 m-0">
        {listOfProjects.map((movie, index) => (
          <ProjectCard
            images={movie.images}
            demo={movie.demo}
            description={movie.description}
            technologies={movie.technologies}
            gitHubLink={movie.gitHubLink}
            note={movie.note}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
