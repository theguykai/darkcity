const Portfolio = (props) => {
  return (
    <div>
      <section id="portfolio">
        <h1>Portfolio</h1>
        <div id="portfolio-container">{props.projects}</div>
      </section>
    </div>
  );
};
export default Portfolio;
