import { FC, useEffect, useState } from "react";
import { Modal, Nav } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { visibleElement } from "../static/functions";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

interface IProjectCard {
  images: string[];
  description: string;
  technologies: string;
  gitHubLink?: string;
  demo?: string;
  note?: string;
}

const ProjectCard: FC<IProjectCard> = ({
  images,
  description,
  technologies,
  gitHubLink,
  demo,
  note,
}) => {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0);

  const { theme, setTheme } = useTheme();
  void setTheme;

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    visibleElement([".portfolio__card"]);
  }, []);

  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 p-0 px-sm-2 mt-3 h-100 portfolio__card">
        <button
          className="w-100 p-0 bg-transparent border-0 portfolio__card-button rounded-4"
          onClick={() => setModalShow(true)}
        >
          <img src={images[0]} alt="image" className="portfolio__card-image" />
        </button>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          closeVariant={theme === "light" ? "dark" : "white"}
          className="bg-transparent border-bottom-0 border-0"
        ></Modal.Header>
        <Modal.Body className="bg-transparent p-0 px-2 mb-2">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <Carousel.Caption>
                  <img
                    src={image}
                    alt={`image-${index + 1}`}
                    style={{
                      width: "100%",
                    }}
                  />
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          <div
            className="my-3 text--color px-2"
            style={{
              fontSize: "14px",
            }}
          >
            <p className="fw-bold text-center mb-2 mt-4">
              {t("portfolio.overview")}
            </p>

            <p className="mb-1">{description}</p>

            <p className="fw-bold text-center mt-4">
              {t("portfolio.technologies")}
            </p>

            <p>{technologies}</p>

            {note && (
              <div>
                <span className="fw-bold">{t("portfolio.note")}</span>
                <span className="ms-2">{note}</span>
              </div>
            )}

            <div className="d-flex justify-content-between justify-content-sm-end align-items-center mt-5">
              {gitHubLink && (
                <Nav.Link
                  className="text-decoration-none text-center rounded-5 header__right-btn py-2 fw-bold me-4"
                  href={gitHubLink}
                  target="_blank"
                  style={{
                    width: "150px",
                  }}
                >
                  GitHub
                </Nav.Link>
              )}

              {demo && (
                <Nav.Link
                  className="text-decoration-none text-center rounded-5 header__right-btn py-2 fw-bold"
                  href={demo}
                  target="_blank"
                  style={{
                    width: "150px",
                  }}
                >
                  Live
                </Nav.Link>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
