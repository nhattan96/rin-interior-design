const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2>Contact Us</h2>
    </div>
    <form action="submit.php" method="POST">
      <input type="text" name="name" placeholder="Your Name" required></input>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      ></input>
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
      ></textarea>
      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact