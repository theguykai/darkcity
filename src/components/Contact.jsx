const Contact = () => {
  return (
    <div>
      <section id="contact-section">
        <form>
          <div className="contact-input">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="contact-input">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="contact-input">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};
export default Contact;
