
const Contact = () => {
  return (
    <>
      <div className="contact-section">
        {/* Banner */}
        <div className="bg-img">
          <h1>Contact</h1>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-text">
            <h4>Contact Info</h4>
            <p>
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
              feel free to reach out. Our team is here to help with any inquiries you may have. Let's connect
              and make something delicious together!
            </p>
          </div>

          <div className="ct-add">
            <div className="pt-info">
              <h4>Address</h4>
              <p>Main Mohan Nagar, Ghaziabad</p>
            </div>
            <div className="pt-info">
              <h4>Phone</h4>
              <p>+91 8287917781</p>
            </div>
            <div className="pt-info">
              <h4>Email</h4>
              <p>BishtCafe2025@gmail.com</p>
            </div>

            <div className="ct-media">
              <a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a>
              <a href="https://www.twitter.com/"><i className="bx bxl-twitter"></i></a>
              <a href="https://www.linkedin.com/"><i className="bx bxl-linkedin"></i></a>
              <a href="https://www.instagram.com/"><i className="bx bxl-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map">
          <iframe
            title="Bisht Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224219.67159082476!2d77.053952!3d28.5868032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739631928250!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <section className="ct-form" id="contact">
          <h1>Get In Touch</h1>
          <form action="/api/contact" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="text-black">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <i className="fas fa-user"></i>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="text-black">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="text-black">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
              <i className="fas fa-phone-alt"></i>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="text-black">Message</label>
              <textarea id="message" name="message" cols="24" placeholder="Type your message..." required></textarea>
            </div>

            <button className="btn-style" type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
