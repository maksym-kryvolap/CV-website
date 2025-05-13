import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Spinner } from "react-bootstrap";
import { animatedComponent, visibleElement } from "../static/functions";
import { useTranslation } from "react-i18next";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../static/constatns";
import pinLocate from "../assets/pinLocate.webp";

interface FormData {
  [key: string]: string;
}

interface FormErrors {
  email: boolean;
  title: boolean;
  message: boolean;
}

export const ContactForm = () => {
  const { t } = useTranslation();

  const [loader, setLoader] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorSent, setErrorSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    title: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: false,
    title: false,
    message: false,
  });

    const animations = [
      {
        className: ".contact__info-location",
        value: { y: 0, opacity: 1, duration: 0.7, delay: 0.2 },
      },
      {
        className: ".contact__info-socials",
        value: { y: 0, opacity: 1, duration: 0.7, delay: 0.5 },
      },
      {
        className: ".contact__info-prefer",
        value: { y: 0, opacity: 1, duration: 0.7, delay: 0.8 },
      },
      {
        className: ".contact__info-btn",
        value: { y: 0, opacity: 1, duration: 0.7, delay: 1.1 },
      },
    ];

  useEffect(() => {
    visibleElement([".contact__title", ".contact__form", ".contact__info"]);

    animations.forEach(({ className, value }) =>
      animatedComponent(className, value, { opacity: 0 })
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setErrorSent(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: !formData.email.trim(),
      title: !formData.title.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((v) => v);

    if (hasErrors) return;

    setLoader(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setErrorSent(false);
        setSent(true);
        setLoader(false);
        setFormData({ email: "", title: "", message: "" });
      })
      .catch(() => {
        setErrorSent(true);
      })
      .finally(() => {
        setLoader(false);
        setTimeout(() => {
          setSent(false);
        }, 3000);
      });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-0 pt-5 m-0 mt-5"
      id="contact"
    >
      <p className="fs-2 fw-bold text-center mb-4 mt-2 contact__title">
        {t("contact.title")}
      </p>

      <div className="row w-100 justify-content-center align-items-center align-items-md-start p-0 m-0">
        <form
          className=" contact__form d-flex flex-column p-0 m-0 mt-2 me-lg-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            className={`contact__form-field rounded-5 mb-3 ${
              errors.email && "contact__form-field--invalid"
            }`}
            placeholder={t("contact.email")}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            className={`contact__form-field rounded-5 mb-3 ${
              errors.title && "contact__form-field--invalid"
            }`}
            placeholder={t("contact.titleForm")}
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className={`contact__form-field contact__form-field--textarea mb-3 ${
              errors.message && "contact__form-field--invalid"
            }`}
            placeholder={t("contact.message")}
            value={formData.message}
            onChange={handleChange}
            rows={15}
          />
          <button
            type="submit"
            className="contact__form-button rounded-5 mb-0 mx-auto fw-bold"
            disabled={loader || sent}
          >
            {loader ? (
              <Spinner
                animation="border"
                role="status"
                className="contact__form-button-loader"
              />
            ) : sent ? (
              t("contact.done")
            ) : (
              t("contact.send")
            )}
          </button>

          <p
            className={`m-0 p-0 text-center text-danger mt-1`}
            style={{
              fontSize: "10px",
              opacity: errorSent ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            {t("contact.error")}
          </p>
        </form>

        <div className="p-3 pt-2 contact__info ms-0 mt-4 mt-md-0 ms-md-4 d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start">
          <div className="d-flex align-items-center mb-3 contact__info-location">
            <img src={pinLocate} alt="pinLocate" height={20} />

            <span className="ms-2 text--color">{t("contact.location")}</span>
          </div>

          <div className="contact__info-socials">
            <a
              href="https://github.com/maksym-kryvolap"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact__info-icon--svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/maksym.kryvolap"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact__info-icon--svg"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
              </svg>
            </a>

            <a
              href="https://pl.linkedin.com/in/maksym-kryvolap-0b7217272/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact__info-icon--svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.041 0 3.604 2.001 3.604 4.604v5.588z" />
              </svg>
            </a>

            <a
              href="https://t.me/kryvolap_m"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="contact__info-icon--svg"
              >
                <path d="M9.993 15.674l-.396 5.586c.568 0 .813-.244 1.108-.538l2.664-2.544 5.522 4.02c1.012.556 1.74.264 2.002-.938l3.632-17.064c.37-1.69-.644-2.352-1.634-1.94L1.38 9.29c-1.648.66-1.632 1.6-.282 2.028l5.564 1.738 12.922-8.14c.609-.396 1.164-.18.708.252L9.993 15.674z" />
              </svg>
            </a>

            <a
              href="https://wa.me/48796125947"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="contact__info-icon--svg"
              >
                <path d="M16.006 2.998C8.28 2.998 2 9.28 2 17.002c0 2.926.768 5.698 2.223 8.154L2 30l5.052-2.148A14.015 14.015 0 0 0 16.006 31c7.722 0 14.004-6.282 14.004-13.998 0-7.725-6.282-14.004-14.004-14.004zm0 25.662c-2.462 0-4.84-.648-6.924-1.875l-.496-.289-3.001 1.276.636-3.173-.209-.52a11.95 11.95 0 0 1-1.184-5.178c0-6.63 5.387-12.016 12.018-12.016S28.02 10.372 28.02 17.002c0 6.63-5.387 11.658-12.014 11.658zm6.546-8.44c-.366-.183-2.155-1.06-2.49-1.181-.334-.122-.578-.183-.822.182-.244.366-.944 1.18-1.157 1.425-.212.244-.424.275-.79.092-.365-.183-1.542-.57-2.94-1.822-1.087-.973-1.822-2.175-2.037-2.54-.213-.366-.022-.563.16-.747.164-.163.365-.425.548-.638.183-.213.243-.365.365-.61.122-.244.061-.457-.03-.639-.092-.183-.822-1.984-1.128-2.719-.297-.715-.597-.618-.822-.628l-.7-.012c-.243 0-.639.092-.975.457-.335.366-1.28 1.25-1.28 3.049s1.309 3.536 1.492 3.778c.183.244 2.58 3.947 6.254 5.534.875.378 1.557.604 2.09.771.877.279 1.675.239 2.308.145.704-.104 2.155-.879 2.46-1.725.305-.844.305-1.568.213-1.725-.092-.152-.335-.243-.7-.426z" />
              </svg>
            </a>
          </div>

          <div className="mt-3">
            <span className="contact__info-prefer">{t("contact.prefer")}</span>

            <div className="mt-3 d-flex justify-content-center justify-content-md-start">
              <a
                href="mailto:kryvolap.amz@gmail.com"
                className="text-decoration-none text-center rounded-5 contact__info-btn px-4 py-2 fw-bold d-flex"
              >
                {t("contact.emailMe")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
