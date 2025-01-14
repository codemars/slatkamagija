import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../styles/ContactStyle.css';
import '../../styles/main.css';
import '../../styles/util.css';
import contact from '../../assets/logo/logo_jabuka.webp';

const Section1 = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_last: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formspree URL sa tvojim FORM_ID
    const formspreeUrl = "https://formspree.io/f/xvggypzw";

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.user_name} ${formData.user_last}`,
          email: formData.user_email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Uspešno poslata poruka
        setFormData({
          user_name: "",
          user_last: "",
          user_email: "",
          message: "",
        });
        toast.success("Poruka uspešno poslata!");
      } else {
        // Greška tokom slanja
        toast.error("Došlo je do greške prilikom slanja poruke.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Došlo je do greške. Pokušajte ponovo.");
    }
  };

  return (
    <div className="contact1">
      <div className="background-image"></div>
      <div className="container-contact1">
        <div className="contact-info">
          <div className="icon-container">
            <span>
              <i className="bi bi-telephone"></i>
            </span>
          </div>
          <div className="additional-text">
            <h4>Kontakt</h4>
            <p>+381 (0)693656387</p>
          </div>
        </div>
        <div className="contact-email">
          <div className="icon-container-email">
            <span>
              <i className="bi bi-envelope"></i>
            </span>
          </div>
          <div className="additional-text-email">
            <h4>Email</h4>
            <p>slatkiproizvod@gmail.com</p>
          </div>
        </div>
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={contact} alt="IMG" />
        </div>

        <form className="contact1-form validate-form" onSubmit={handleSubmit}>
          <span className="contact1-form-title">KONTAKTIRAJTE NAS</span>

          <div className="wrap-input1 validate-input">
            <input
              className="input1"
              type="text"
              name="user_name"
              placeholder="Ime"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input">
            <input
              className="input1"
              type="text"
              name="user_last"
              placeholder="Prezime"
              value={formData.user_last}
              onChange={handleChange}
              required
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input">
            <input
              className="input1"
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input">
            <textarea
              className="input1"
              name="message"
              placeholder="Unesite vašu poruku"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn">
              <span>
                Pošalji
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Section1;
