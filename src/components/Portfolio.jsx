import images from "../img/thumbnails";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <h1>Portfolio</h1>
        <div id="portfolio-container">
          {/* map over the thumbnails and render cards for each one in grid */}
          {images.map((image) => (
            <div className="card">
              <img src={image} alt="thumbnail" />
              <h3>Project Title</h3>
              <p>Project Description</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
