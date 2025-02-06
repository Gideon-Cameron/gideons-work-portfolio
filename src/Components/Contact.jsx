import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTelegram, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null); // ✅ Handle errors

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2e9zq4f",         // ✅ Your Service ID
        "template_mq85xh3",        // ✅ Your Template ID
        form.current,
        "VSey23muaE28V71S_"        // ✅ Your Public API Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessageSent(true);
          setError(null);          // ✅ Clear errors on success
          form.current.reset();
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setError("Failed to send the message. Please try again later."); // ✅ Display error message
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">Contact Me</h2>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="p-3 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* ✅ Success & Error Messages */}
          {messageSent && <p className="mt-4 text-green-500">✅ Message sent successfully!</p>}
          {error && <p className="mt-4 text-red-500">❌ {error}</p>}
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6 text-3xl">
          <a href="https://www.linkedin.com/in/gideon-cameron-335801263/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a href="https://t.me/gideonwork1" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-blue-400 hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/Gideon-Cameron" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-900 dark:text-white hover:text-gray-500 transition" />
          </a>
          <a href="tel:+251980277582">
            <FaPhone className="text-green-600 hover:text-green-800 transition" />
          </a>
        </div>

        {/* Download Resume */}
        <div className="mt-10">
          <a
            href="/src/assets/Resume.pdf"
            download="Gideon_Resume.pdf"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
