import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { animatedComponent } from "../static/functions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  const animations = [
    {
      className: ".header__left",
      value: { x: 0, opacity: 1, duration: 1 },
    },
    {
      className: ".header__right-title",
      value: { y: 0, opacity: 1, duration: 0.7 },
    },
    {
      className: ".header__right-name",
      value: { y: 0, opacity: 1, duration: 0.7, delay: 0.2 },
    },
    {
      className: ".header__right-text",
      value: { y: 0, opacity: 1, duration: 0.7, delay: 0.4 },
    },
    {
      className: ".header__right-socials",
      value: { y: 0, opacity: 1, duration: 0.7, delay: 0.6 },
    },
    {
      className: ".header__right-buttons",
      value: { y: 0, opacity: 1, duration: 0.7, delay: 0.8 },
    },
  ];

  useEffect(() => {
    animations.forEach(({ className, value }) =>
      animatedComponent(className, value, { opacity: 0 })
    );
  });

  return (
    <header
      className="row m-0 justify-content-center align-items-sm-center position-relative h-100 header"
      id="home"
    >
      <div className="col-12 col-lg-10">
        <div className="row">
          <div className="col-12 col-md-5 col-xl-5 d-flex align-items-center">
            <div className="header__left mx-auto mx-md-0"></div>
          </div>

          <div className="col-12 col-md-7 col-xl-7 header__right mt-4 mt-md-0">
            <div className="d-flex header__right-title fw-bold align-items-center">
              <p className="">{t("header.hi")}</p>
              <p className="ms-1 header__right-title--role">
                <ReactTyped
                  strings={[
                    t("header.frontDeveloper"),
                    t("header.webDeveloper"),
                  ]}
                  typeSpeed={70}
                  backSpeed={30}
                  loop
                />
              </p>
            </div>

            <p className="header__right-name fw-bold fs-3">
              {t("header.name")}
            </p>

            <p className="header__right-text mb-2">{t("header.info")}</p>

            <div className="header__right-socials">
              <a
                href="https://github.com/maksym-kryvolap"
                target="_blank"
                rel="noopener noreferrer"
                className="header__right-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="header__right-icon--svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/maksym.kryvolap"
                target="_blank"
                rel="noopener noreferrer"
                className="header__right-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="header__right-icon--svg"
                >
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                </svg>
              </a>

              <a
                href="https://pl.linkedin.com/in/maksym-kryvolap-0b7217272/"
                target="_blank"
                rel="noopener noreferrer"
                className="header__right-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="header__right-icon--svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.041 0 3.604 2.001 3.604 4.604v5.588z" />
                </svg>
              </a>

              <a
                href="https://t.me/kryvolap_m"
                target="_blank"
                rel="noopener noreferrer"
                className="header__right-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="header__right-icon--svg"
                >
                  <path d="M9.993 15.674l-.396 5.586c.568 0 .813-.244 1.108-.538l2.664-2.544 5.522 4.02c1.012.556 1.74.264 2.002-.938l3.632-17.064c.37-1.69-.644-2.352-1.634-1.94L1.38 9.29c-1.648.66-1.632 1.6-.282 2.028l5.564 1.738 12.922-8.14c.609-.396 1.164-.18.708.252L9.993 15.674z" />
                </svg>
              </a>

              <a
                href="https://wa.me/48796125947"
                target="_blank"
                rel="noopener noreferrer"
                className="header__right-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="header__right-icon--svg"
                >
                  <path d="M16.006 2.998C8.28 2.998 2 9.28 2 17.002c0 2.926.768 5.698 2.223 8.154L2 30l5.052-2.148A14.015 14.015 0 0 0 16.006 31c7.722 0 14.004-6.282 14.004-13.998 0-7.725-6.282-14.004-14.004-14.004zm0 25.662c-2.462 0-4.84-.648-6.924-1.875l-.496-.289-3.001 1.276.636-3.173-.209-.52a11.95 11.95 0 0 1-1.184-5.178c0-6.63 5.387-12.016 12.018-12.016S28.02 10.372 28.02 17.002c0 6.63-5.387 11.658-12.014 11.658zm6.546-8.44c-.366-.183-2.155-1.06-2.49-1.181-.334-.122-.578-.183-.822.182-.244.366-.944 1.18-1.157 1.425-.212.244-.424.275-.79.092-.365-.183-1.542-.57-2.94-1.822-1.087-.973-1.822-2.175-2.037-2.54-.213-.366-.022-.563.16-.747.164-.163.365-.425.548-.638.183-.213.243-.365.365-.61.122-.244.061-.457-.03-.639-.092-.183-.822-1.984-1.128-2.719-.297-.715-.597-.618-.822-.628l-.7-.012c-.243 0-.639.092-.975.457-.335.366-1.28 1.25-1.28 3.049s1.309 3.536 1.492 3.778c.183.244 2.58 3.947 6.254 5.534.875.378 1.557.604 2.09.771.877.279 1.675.239 2.308.145.704-.104 2.155-.879 2.46-1.725.305-.844.305-1.568.213-1.725-.092-.152-.335-.243-.7-.426z" />
                </svg>
              </a>
            </div>

            <div className="mt-4 header__right-buttons mt-5 d-flex">
              <a
                href="/cv/Maksym_Kryvolap_CV.pdf"
                download="Maksym_Kryvolap_CV_Frontend.pdf"
                className="text-decoration-none text-center rounded-5 header__right-btn px-3 py-2 fw-bold d-flex"
              >
                {t("header.download")}
              </a>

              <Link
                to="/#contact"
                className="text-decoration-none text-center rounded-5 header__right-btn px-3 py-2 fw-bold ms-4 d-flex"
              >
                {t("header.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/#technologies"
        className="d-none d-md-flex flex-column align-items-center mt-auto position-absolute bottom-0 header__animated"
      >
        <div
          className="header__animated-arrow"
          style={{
            transform: "none",
          }}
        >
          <svg
            width="30"
            height="16"
            viewBox="0 0 45 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.9613 27.6963L1.63356 6.36854L7.00165 1.00045L22.9613 14.3489L38.921 1.00045L44.2891 6.36854L22.9613 27.6963Z"
              stroke="#FFA929"
              strokeLinecap="square"
            ></path>
          </svg>
        </div>

        <div
          className="header__animated-arrow"
          style={{
            opacity: 0.424782,
            transform: "none",
          }}
        >
          <svg
            width="33"
            height="22"
            viewBox="0 0 45 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.9613 27.6963L1.63356 6.36854L7.00165 1.00045L22.9613 14.3489L38.921 1.00045L44.2891 6.36854L22.9613 27.6963Z"
              stroke="#FFA929"
              strokeLinecap="square"
            ></path>
          </svg>
        </div>

        <div
          className="header__animated-arrow"
          style={{
            opacity: 0.424782,
            transform: "none",
          }}
        >
          <svg
            width="46"
            height="30"
            viewBox="0 0 45 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.9613 27.6963L1.63356 6.36854L7.00165 1.00045L22.9613 14.3489L38.921 1.00045L44.2891 6.36854L22.9613 27.6963Z"
              stroke="#FFA929"
              strokeLinecap="square"
            ></path>
          </svg>
        </div>
      </Link>
    </header>
  );
};
