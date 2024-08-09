import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");

  const [background, setBackground] = useState("bg-[#111]");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBackground("bg-[#111]");
    setFeedback("Sending...");
    const apiEndpoint =
      process.env.NODE_ENV === "production"
        ? "https://enigmatic-badlands-08625-53bf90efff1c.herokuapp.com/send-email"
        : "http://localhost:5000/send-email";

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((data) => {
        setBackground("bg-green-500");
        setFeedback("Message sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setBackground("bg-red-500");
        setFeedback("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <section
        id="contact"
        className="min-h-[75vh] flex justify-center items-center flex-col"
      >
        <div className="w-11/12 sm:w-10/12 md:w-9/12 flex justify-center items-center gap-5 flex-col font-mono">
          <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-4xl tracking-tight font-mono font-extrabold bg-transparent py-2">
            Contact Me
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center gap-5 flex-col font-mono"
          >
            <div className="contact-input p-2 flex justify-evenly w-full sm:w-3/4 xl:w-1/2 shadow-sm shadow-white rounded-lg">
              <label
                htmlFor="name"
                className="w-1/3 sm:w-1/4 flex justify-center items-center font-mono text-lg rounded-lg"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-white w-1/2 py-0.5 px-2 text-slate-950 font-mono rounded-lg"
                required
                value={formState.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact-input p-2 flex justify-evenly w-full sm:w-3/4 xl:w-1/2 shadow-sm shadow-white rounded-lg">
              <label
                htmlFor="email"
                className="w-1/3 sm:w-1/4 flex items-center justify-center font-mono text-lg rounded-lg"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-white text-slate-950 w-1/2 py-0.5 px-2 font-mono rounded-lg"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-input p-2 flex justify-evenly w-full sm:w-3/4 xl:w-1/2 shadow-sm shadow-white rounded-lg">
              <label
                htmlFor="message"
                className="w-1/3 sm:w-1/4 flex items-center justify-center font-mono text-lg rounded-lg"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-white text-slate-950 w-1/2 h-20 py-0.5 px-2 font-mono rounded-lg"
                required
                value={formState.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 my-5 shadow-sm shadow-white rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_5px_rgb(50_50_255)] hover:cursor-pointer transition duration-100"
            />
          </form>
          <div className={`${background} p-2 rounded-lg`}>{feedback}</div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
