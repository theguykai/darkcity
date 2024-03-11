const Contact = () => {
  return (
    <div>
      <section
        id="contact-section"
        className="min-h-[75vh] flex justify-center items-center flex-col"
      >
        <div className="w-11/12 sm:w-10/12 md:w-9/12 flex justify-center items-center gap-5 flex-col font-mono">
          <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-4xl tracking-tight font-mono font-extrabold bg-transparent py-2">
            Contact Me
          </h1>
          <form className="w-full flex justify-center items-center gap-5 flex-col font-mono">
            <div className="contact-input p-2 flex justify-evenly w-full sm:w-3/4 xl:w-1/2 shadow-sm shadow-white rounded-lg">
              <label
                for="name"
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
              />
            </div>
            <div className="contact-input p-2 flex justify-evenly w-full sm:w-3/4 xl:w-1/2 shadow-sm shadow-white rounded-lg">
              <label
                for="email"
                className="w-1/3 sm:w-1/4 flex items-center justify-center font-mono text-lg rounded-lg"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-white text-slate-950 w-1/2 py-0.5 px-2 font-mono rounded-lg"
                required
              />
            </div>
            <div className="contact-input p-2 flex justify-evenly w-full sm:w-3/4 xl:w-1/2 shadow-sm shadow-white rounded-lg">
              <label
                for="message"
                className="w-1/3 sm:w-1/4 flex items-center justify-center font-mono text-lg rounded-lg"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-white text-slate-950 w-1/2 xl:w-1/2 h-20 py-0.5 px-2 font-mono rounded-lg"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 my-5 shadow-sm shadow-white rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_5px_rgb(50_50_255)] hover:cursor-pointer transition duration-100"
            />
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
