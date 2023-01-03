import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.scss";
import { email, phone } from "../../assets";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [animatedButton, setAnimatedButton] = useState({ x: 0, opacity: 1 });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = data => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/criss_19992016@outlook.com", {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));

    setTimeout(() => {
      setAnimatedButton({ x: 200, opacity: 0 });
    }, 500);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <section className="app__contact" id="contact">
      <h2>Get in Touch!</h2>
      <div className="contact__cards-container">
        <div className="app__contact-cards">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="app__contact-card"
          >
            <img src={phone} alt="phone" />
            <a href="tel: +1 (207) 719-4650">+1 (207) 719-4650</a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="app__contact-card"
          >
            <img src={email} alt="email" />
            <a href="mailto:criss_19992016@outlook.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''uirj    kkkkkkkkkkkkkkkk'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''.;;;;;;;;;;;;;;;;;;;'jkmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm/;ppppppppppppppppmol;p">
              criss_19992016@outlook.com
            </a>
          </motion.div>
        </div>
      </div>
      {!isSubmitted ? (
        <div className="contact__form-container">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://formsubmit.co/criss_19992016@outlook.com"
            method="POST"
            className="contact__form"
          >
            <motion.div
              className="contact__form-group"
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.Name?.type === "required" && (
                <p style={{ color: "#6b7688" }}>The name's field is required</p>
              )}
            </motion.div>

            <motion.div
              className="contact__form-group"
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                })}
              />
              {errors.email?.type === "pattern" && (
                <p style={{ color: "#6b7688" }}>
                  The E-mail format is not valid.
                </p>
              )}
            </motion.div>

            <motion.div
              className="contact__form-group"
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            >
              <textarea
                className="form__input"
                type="text"
                name="messagge"
                placeholder="Your Messagge"
                {...register("messagge")}
              />
            </motion.div>
            <motion.div
              className="contact__button"
              animate={animatedButton}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <input type="submit" value="Send" />
            </motion.div>
          </form>
        </div>
      ) : (
        <div>
          <h3 style={{ margin: "2rem" }}>Thank you for getting in touch!</h3>
        </div>
      )}
    </section>
  );
};
export default Contact;
