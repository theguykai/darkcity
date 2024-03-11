const Contact = () => {
  return (
    <div>
      <section
        id="contact-section"
        className="h-[50vh] md:h-[75vh] flex justify-center items-center"
      >
        <form className="bg-white border-slate-400 border-2 w-10/12 flex justify-center items-center gap-5 flex-col text-slate-950 font-mono">
          <h1 className=" text-center text-2xl md:text-3xl lg:text-4xl tracking-tight text-gray-800 font-mono font-extrabold bg-transparent py-2">
            Contact Me
          </h1>
          <div className="contact-input flex justify-evenly w-full sm:w-1/2 shadow-sm shadow-black rounded-lg">
            <label
              for="name"
              className="w-1/3 sm:w-1/4 flex justify-center items-center font-mono rounded-lg"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-white w-3/4 py-0.5 px-2 text-slate-950 font-mono rounded-lg"
              required
            />
          </div>
          <div className="contact-input flex justify-evenly w-full sm:w-1/2 shadow-sm shadow-black rounded-lg">
            <label
              for="email"
              className="w-1/3 sm:w-1/4 flex items-center justify-center font-mono rounded-lg"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-white w-3/4 py-0.5 px-2 font-mono rounded-lg"
              required
            />
          </div>
          <div className="contact-input flex justify-evenly w-full sm:w-1/2 shadow-sm shadow-black rounded-lg">
            <label
              for="message"
              className="w-1/3 sm:w-1/4 flex items-center justify-center font-mono text-sm rounded-lg"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-white w-3/4 py-0.5 px-2 font-mono rounded-lg"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="p-2 rounded-lg border-2 border-gray-900 hover:bg-blue-500 hover:text-white transition duration-200 ease-in"
          />
        </form>
      </section>
    </div>
  );
};
export default Contact;
