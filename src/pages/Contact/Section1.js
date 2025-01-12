import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../styles/ContactStyle.css';
import '../../styles/main.css';
import '../../styles/util.css';
import contact from '../../assets/logo/logo_jabuka.webp';

const Section1 = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_last: "",
    user_email: "",
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          // Clear form data after successful submission
          setFormData({
            user_name: "",
            user_last: "",
            user_email: "",
            message: ""
          });
          // Show success toast
          toast.success("Poruka uspešno poslata!");
        },
        (error) => {
          console.log(error.text);
          // Show error toast
          toast.error("Došlo je do greške prilikom slanja poruke.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
            <div>
              <p>+381 (0)693656387</p>
            </div>
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
            <div>
              <p>slatkiproizvod@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={contact} alt="IMG" />
        </div>

        <form className="contact1-form validate-form" ref={form} onSubmit={sendEmail}>
          <span className="contact1-form-title">KONTAKTIRAJTE NAS</span>

          <div className="wrap-input1 validate-input" data-validate="Name is required">
            <input
              className="input1"
              type="text"
              name="user_name"
              placeholder="Ime"
              value={formData.user_name}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input" data-validate="Name is required">
            <input
              className="input1"
              type="text"
              name="user_last"
              placeholder="Prezime"
              value={formData.user_last}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input
              className="input1"
              type="text"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input" data-validate="Message is required">
            <textarea
              className="input1"
              name="message"
              placeholder="Unesite vašu poruku"
              value={formData.message}
              onChange={handleChange}
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
        {/* Toastify container for notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Section1;
