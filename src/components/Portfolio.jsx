const Portfolio = (props) => {
  return (
    <div>
      <section
        id="portfolio-section"
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-2xl md:text-3xl uppercase tracking-tighter">
          Portfolio
        </h1>
        <div
          id="portfolio-container"
          className="flex justify-center items-center flex-col w-screen"
        >
          {props.projects}
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
