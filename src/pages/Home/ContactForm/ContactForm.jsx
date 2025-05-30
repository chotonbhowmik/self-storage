import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fwcea6j",
        "template_l62xl5i",
        form.current,
        "xndWdw_kP5TiCZgYu"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#231ADF] pb-10 px-5 lg:px-0">
      <div className="max-w-3xl mx-auto">
        <div className="py-10">
          <h2 className="font-bold text-[25px] lg:text-[40px] leading-[36px] text-[#fff] text-center">
            Schreiben Sie uns!
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading-[36px] text-white text-center pt-5">
            Wir werden so schnell wie möglich antworten.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="pt-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[24px] text-white pb-2">
                Name*
              </legend>
              <input
                type="text"
                name="name"
                required
                className="input w-full bg-transparent border border-white outline-none text-white placeholder-white"
                placeholder="Ihr Name"
              />
            </fieldset>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full pt-4">
            <div className="w-full lg:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[24px] text-white pb-2">
                  E-mail*
                </legend>
                <input
                  type="email"
                  name="email"
                  required
                  className="input w-full bg-transparent border border-white text-white placeholder-white"
                  placeholder="Ihre E-Mail eingeben"
                />
              </fieldset>
            </div>

            <div className="w-full lg:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[24px] text-white pb-2">
                  Telefonnummer
                </legend>
                <input
                  type="text"
                  name="phone"
                  className="input w-full bg-transparent border border-white text-white placeholder-white"
                  placeholder="Geben Sie Ihre Rufnummer ein"
                />
              </fieldset>
            </div>
          </div>

          <div className="pt-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-[24px] text-white pb-2">
                Ihre Nachricht
              </legend>
              <textarea
                name="message"
                required
                className="textarea h-24 w-full bg-transparent placeholder-white border border-white text-white"
                placeholder="Nachricht"
              ></textarea>
            </fieldset>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-white text-[#0C094E] font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition"
            >
              Nachricht senden
              <i className="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
