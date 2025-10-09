import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
  import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rtli2c",     // from EmailJS
        "template_y77k0gb",    // from EmailJS
        form.current,
        "ZMj04i7VIyE5LbXkv"      // from EmailJS
      )
      .then(
        (result) => {
          toast("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
         toast("❌ An error occurred, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 max-w-md mx-auto border p-4  bg-transparent backdrop-blur-md rounded-3xl shadow-[0_0_20px_rgba(0,0,1,0.3)] ">
      <input type="text" name="from_name" placeholder="Your Name" required  className="border p-2 rounded"/>
      <input type="email" name="from_email" placeholder="Your Email" required className="border p-2 rounded"/>
      <textarea name="message" placeholder="Your Message" required className="border p-2 rounded"/>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
    <ToastContainer  position="bottom-left"  reverseOrder={false} />
    </form>
  );
}

export default ContactForm;