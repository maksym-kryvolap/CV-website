import { useEffect } from "react";
import { ProgressLine } from "../components/ProgressLine";
import { visibleElement } from "../static/functions";
import { skillsList, skillsProggressList } from "../static/constatns";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next"

export const Skills = () => {
  const { t } = useTranslation();

  const { theme, setTheme } = useTheme();
  void setTheme;

  useEffect(() => {
    visibleElement([".skills__left", ".skills__right", ".skills__title"]);
  }, []);

  return (
    <div
      className="skills pt-5 d-flex flex-column justify-content-center"
      id="technologies"
    >
      <p className="text-center mb-4 mt-2 fs-2 skills__title fw-bold">
        {t("technologies.title")}
      </p>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xxl-9">
          <div className="row m-0 p-0">
            <div className="col-12 col-md-7 m-0 p-0 skills__left">
              <div
                className="row m-0 py-4"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgb(247, 245, 241, 0.35)"
                      : "rgb(233, 231, 229)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "15px",
                  border: "1px solid rgb(126, 121, 118)",
                }}
              >
                {skillsList.map(({ id, img, alt, title }) => (
                  <div
                    key={id}
                    className="col-4 col-sm-3 mt-4 d-flex flex-column justify-content-between align-items-center skills__left-item"
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        height: "70px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={img}
                        alt={alt}
                        className="skills__im"
                        style={{
                          objectFit: "contain",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <p className="mt-1 text--color">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-5 m-0 p-0 ps-md-4 pe-0 skills__right mt-3 mt-md-0">
              <div className="w-100 h-100 p-2 p-md-3 pe-md-0 ps-lg-5 pe-lg-0">
                {skillsProggressList.map(({ id, label, percentage }) => (
                  <ProgressLine
                    key={id}
                    label={label}
                    visualParts={[
                      {
                        percentage: percentage,
                        color: "rgb(248, 107, 13)",
                      },
                    ]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
