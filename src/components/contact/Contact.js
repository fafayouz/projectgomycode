import React, { useState } from "react";
import "./Contact.css";
import Image from "./Contact.png";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { init } from "emailjs-com";
init("user_9QgbA8C3WqjBb3qIgcHMh");

const Contact = () => {
  const [message, setMessage] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vfoh83t",
        "template_4k6imzh",
        e.target,
        "user_9QgbA8C3WqjBb3qIgcHMh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(false);
    setInterval(() => {
      setMessage(true);
    }, 4000);
  };

  return (
    <>
      <div id="Contact--id" className="Contact-Container">
        {message ? (
          <>
            <div className="Contact-img">
              <img loading="lazy" src={Image} alt="" />
            </div>
            <form onSubmit={sendEmail} className="Form-Contact">
              <div className="Form-Contact-client">     
                <div className="input-Box-">
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    required
                  />
                </div>
                <div className="input-Box-">
                  <input type="text" name="name" placeholder="الإسم" required />
                </div>
              </div>

              <div className="message">
                <textarea name="message" placeholder="الرسالة " required />
              </div>
              <input className="form-button" type="submit" value="أرسل" />
            </form>
          </>
        ) : (
          <>
            <div className="Contact-img">
              <img src={Image} alt="" />
            </div>
            <form onSubmit={sendEmail} className="Form-Contact">
              <div className="Form-Contact-client">
                <div className="input-Box-">
                  <input type="text" name="name" placeholder="الإسم" required />
                </div>
                <div className="input-Box-">
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    required
                  />
                </div>
              </div>

              <div className="message">
                <textarea name="message" placeholder="الرسالة " required />
              </div>
              <Stack
              className="Stack"
                sx={{
                  width: "50%",
                  background: "red",
                  marginTop: "4rem",
                  marginRight: "2rem",
                }}
                spacing={2}
              >
                <Alert severity="success" color="success">
                  ! تم مراسلتنا بنجاح سنرد عليك في أسرع وقت
                </Alert>
              </Stack>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
