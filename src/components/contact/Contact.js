import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const styleObject = {
    backgroundColor: darkMode && "#333",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formRef.current.value);

    emailjs
      .sendForm(
        "service_cwoo725",
        "template_hkh9kcb",
        formRef.current,
        "EC5SUwKQgu1g3-CdC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let content = "";

  if (done) {
    content = "Thank You";
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="icon" className="c-icon" />
              +1 1234 567 89
            </div>

            <div className="c-info-item">
              <img src={Email} alt="icon" className="c-icon" />
              <p style={{ fontSize: "13px" }}>amarjitmangarhia@gmail.com</p>
            </div>

            <div className="c-info-item">
              <img src={Address} alt="icon" className="c-icon" />
              Toronto CA
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your storey?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={styleObject}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={styleObject}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={styleObject}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={styleObject}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <button>Submit</button>
            <p className="thanks">{content}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
