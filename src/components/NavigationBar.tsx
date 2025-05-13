import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LanguagesBar } from "./LanguagesBar";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";

export const NavigationBar = () => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const { theme, setTheme } = useTheme();
  void setTheme;

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`menu ${!isAtTop && "menu--blur"} d-flex position-fixed`}
        style={{
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="d-flex w-100 mx-auto container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar className="d-flex justify-content-between align-items-center w-100 h-100">
              <Link
                to="/"
                className="menu__logo d-flex align-items-center text-decoration-none"
              >
                <span>M</span>
                <span>Maksym Kryvolap</span>
              </Link>

              <div className="d-flex justify-content-between align-items-center h-100">
                <Nav className="d-none d-md-flex justify-content-end align-items-center w-100 h-100 pe-2">
                  <Link
                    className="fw-bold text-decoration-none py-1 px-2 text-center rounded-5 menu__links"
                    to="/#home"
                  >
                    {t("nav.home")}
                  </Link>
                  <Link
                    className="fw-bold text-decoration-none py-1 px-2 text-center rounded-5 menu__links"
                    to="/#technologies"
                  >
                    {t("nav.technologies")}
                  </Link>
                  <Link
                    to="/#about"
                    className="fw-bold text-decoration-none py-1 px-2 text-center rounded-5 menu__links"
                  >
                    {t("nav.about")}
                  </Link>
                  <Link
                    to="/#portfolio"
                    className="fw-bold text-decoration-none py-1 px-2 text-center rounded-5 menu__links"
                  >
                    {t("nav.portfolio")}
                  </Link>
                  <Link
                    to="/#contact"
                    className="fw-bold text-decoration-none py-1 px-2 me-2 text-center rounded-5 menu__links"
                  >
                    {t("nav.contact")}
                  </Link>
                </Nav>

                <div className="d-flex justify-content-center align-items-center me-3 me-md-0">
                  <LanguagesBar />
                </div>

                <div
                  className="d-md-none menu__mobile-btn"
                  onClick={() => setShowMenu(true)}
                  style={{ zIndex: 1001 }}
                >
                  <span
                    style={{
                      backgroundColor: theme === "dark" ? "#cec9c9" : "#5f5b5b",
                    }}
                  ></span>
                  <span
                    style={{
                      backgroundColor: theme === "dark" ? "#cec9c9" : "#5f5b5b",
                    }}
                  ></span>
                  <span
                    style={{
                      backgroundColor: theme === "dark" ? "#cec9c9" : "#5f5b5b",
                    }}
                  ></span>
                </div>
              </div>
            </Navbar>
          </div>
        </div>

        <Offcanvas
          show={showMenu}
          onHide={() => setShowMenu(false)}
          placement="end"
          responsive="lg"
          className="d-lg-none menu__mobile"
          style={{
            transition: "all .3s ease",
          }}
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
        >
          <Offcanvas.Header
            closeButton
            closeVariant={theme === "light" ? "dark" : "white"}
          >
            <Offcanvas.Title>
              <Link
                to="/"
                className="menu__logo d-flex align-items-center text-decoration-none"
              >
                <span>M</span>
                <span>Maksym Kryvolap</span>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-column">
            <Navbar className="d-flex flex-column align-items-start pb-4 w-100">
              <Link
                className="fw-bold text-decoration-none text-center menu__mobile-link mt-3"
                to="/#home"
                onClick={() => setShowMenu(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                className="fw-bold text-decoration-none text-center menu__mobile-link mt-3"
                to="/#technologies"
                onClick={() => setShowMenu(false)}
              >
                {t("nav.technologies")}
              </Link>
              <Link
                to="/#about"
                className="fw-bold text-decoration-none text-center menu__mobile-link mt-3"
                onClick={() => setShowMenu(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/#portfolio"
                className="fw-bold text-decoration-none text-center menu__mobile-link mt-3"
                onClick={() => setShowMenu(false)}
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                to="/#contact"
                className="fw-bold text-decoration-none text-center menu__mobile-link mt-3"
                onClick={() => setShowMenu(false)}
              >
                {t("nav.contact")}
              </Link>
            </Navbar>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};
