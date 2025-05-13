import { useEffect } from "react";
import { visibleElement } from "../static/functions";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    visibleElement([".about__title", ".about__item"]);
  }, []);

  return (
    <div className="about d-flex flex-column justify-content-center" id="about">
      <p className="text-center mb-4 mt-2 fs-2 about__title fw-bold">
        {t("about.title")}
      </p>

      <div className="row justify-content-center m-0 p-0">
        <div className="col-12 col-md-10 col-lg-9 col-xxl-7">
          <p className="about__item">{t("about.info.1")}</p>

          <p className="about__item">{t("about.info.2")}</p>

          <p className="about__item">{t("about.info.3")}</p>

          <p className="about__item">{t("about.info.4")}</p>
        </div>
      </div>
    </div>
  );
};
