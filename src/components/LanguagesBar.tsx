import { useEffect, useState } from "react";
import i18next from "i18next";
import enIcon from "../assets/flags/enIcon.png";
import plIcon from "../assets/flags/plIcon.png";
import uaIcon from "../assets/flags/uaIcon.png";
import ruIcon from "../assets/flags/ruIcon.png";

export const LanguagesBar = () => {
  const [flagIcon, setFlagIcon] = useState(enIcon);
  const [currentLng, setCurrentLng] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lng = localStorage.getItem("lng") || "en";
    const lngIcon = localStorage.getItem("lngIcon") || enIcon;

    setTimeout(() => {
      handleClicklng(lng, lngIcon);
    }, 1);
  }, []);

  const handleClicklng = (ln: string = "en", srcIcon: string = enIcon) => {
    i18next.changeLanguage(ln);

    localStorage.setItem("lng", ln);
    localStorage.setItem("lngIcon", srcIcon);

    setCurrentLng(ln);
    setFlagIcon(srcIcon);
  };

  const navDropdownTitle = (
    <img
      src={flagIcon}
      alt="Flag - Round"
      width="24"
      height="24"
      style={{
        borderRadius: "50%",
      }}
    ></img>
  );

  const checkMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="green"
      className="bi bi-check2-circle mx-2"
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />{" "}
      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />{" "}
    </svg>
  );

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="dropdown__button p-0 m-0 d-flex">
        {navDropdownTitle}
      </button>
      <div className={`dropdown__menu ${isOpen ? "open" : ""}`}>
        <div
          className="dropdown__item d-flex align-items-center"
          onClick={() => handleClicklng("en", enIcon)}
        >
          <div
            className="d-flex align-items-center justify-content-center me-1"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img src={enIcon} alt="Flag UK Vector" width="17" height="17" />
          </div>{" "}
          English
          {currentLng === "en" && checkMark}
        </div>

        <div
          className="dropdown__item  d-flex align-items-center"
          onClick={() => handleClicklng("pl", plIcon)}
        >
          <div
            className="d-flex align-items-center justify-content-center me-1 rounded"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={plIcon}
              alt="Flag of Polish - Round"
              width="17px"
              height="17px"
            ></img>
          </div>{" "}
          Polski
          {currentLng === "pl" && checkMark}
        </div>

        <div
          className="dropdown__item d-flex align-items-center"
          onClick={() => handleClicklng("ua", uaIcon)}
        >
          <div
            className="d-flex align-items-center justify-content-center me-1 rounded"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={uaIcon}
              alt="Flag of Ukraine - Round"
              width="17px"
              height="17px"
            ></img>
          </div>{" "}
          Українська
          {currentLng === "ua" && checkMark}
        </div>

        <div
          className="dropdown__item d-flex align-items-center"
          onClick={() => handleClicklng("ru", ruIcon)}
        >
          <div
            className="d-flex align-items-center justify-content-center me-1 rounded"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={ruIcon}
              alt="Flag of Russia - Round"
              width="17px"
              height="17px"
            ></img>
          </div>{" "}
          Русский
          {currentLng === "ru" && checkMark}
        </div>
      </div>
    </div>
  );
};
