import { useState, useEffect } from 'react';

const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    person: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, date, time, person } = formData;
    if (!name || !email || !date || !time || !person) {
      setMessage('Please fill out all fields.');
      return;
    }
    setMessage('Reservation successfully made!');
    setFormData({ name: '', email: '', date: '', time: '', person: '' });
  };

  return (
    <>
      {/* HERO */}
      <section className="main-bg">
        <div className="main-bg-content">
          <h2 className="brand-name">The Bisht Cafe & Restaurant</h2>
          <h1>An Extraordinary Experience</h1>
          <p>
            Welcome to Bisht Cafe & Restaurant, where culinary excellence meets a warm, inviting atmosphere...
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div className="ex-text">
          <p className="text-muted">Something New</p>
          <h2>An Extraordinary Experience</h2>
          <p>
            Welcome to <strong>Bisht Cafe & Restaurant</strong>, located in <strong>New Delhi</strong>. 
            We serve <em>Momos, Cream Burger, Pasta, and Cold Coffee</em>. Our cozy setting is perfect for any occasion.
          </p>
        </div>
        <div className="ex-img">
          <img src="https://preview.colorlib.com/theme/thevenue/images/intro_1.jpg.webp" alt="Cozy dining area" />
          <img src="https://preview.colorlib.com/theme/thevenue/images/intro_2.jpg.webp" alt="Delicious food" />
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <div className="vd-text">
          <h1>Food for the soul</h1>
          <a href="https://youtu.be/V_DTHT6_Pio?si=inapCuQvejUCbr_F" aria-label="Play video" target="_blank" rel="noopener noreferrer">
            <i className='bx bx-play-circle'></i>
          </a>
        </div>
      </section>

      {/* SIGNATURE DISH */}
      <section className="order-section">
        <div className="od-boxes">
          <div className="od-box">
            <div className="od-text">
              <span>Something New</span>
              <h1>Our Signature Dish</h1>
              <p className='text-black'>Pork Tenderloin marinated in Green Pepper <span className="price">$20</span></p>
              <button className="od-btn" onClick={() => alert("Order placed!")}>Order Now</button>
            </div>
          </div>
          <div className="od-box od-img">
            <img src="https://preview.colorlib.com/theme/thevenue/images/sig.jpg.webp" alt="Signature Dish" />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section">
        <div className="container menu-items">
          {['Starter', 'Main', 'Deserts'].map((section, index) => (
            <div key={index} className="menu-item">
              <h1>{section}</h1>
              {[...Array(5)].map((_, i) => (
                <div className="menu-box" key={i}>
                  <h4>{section} Dish #{i + 1} - ${15 + i * 3}</h4>
                  <p>Description for {section} dish {i + 1}</p>
                  <button onClick={() => alert(`Ordered ${section} dish ${i + 1}`)}>Order Now</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="reservation-section">
        <h1 className="section-title">Book Your Table</h1>
        <p className="section-subtitle">Reserve a seat for an unforgettable dining experience.</p>

        {message && <p className="confirmation-message">{message}</p>}

        <form onSubmit={handleSubmit} className="reserve-form">
          {['name', 'email', 'date', 'time'].map((field, index) => (
            <div className="form-group" key={index}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'email' ? 'email' : field}
                name={field}
                id={field}
                placeholder={`Enter your ${field}`}
                className="input-st"
                required
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="person">Guests</label>
            <select name="person" id="person" className="input-st" required onChange={handleChange} value={formData.person}>
              <option value="">Select number of people</option>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? 'person' : 'people'}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="reserve-btn">Make a Reservation</button>
        </form>
      </section>
    </>
  );
};

export default Main;
