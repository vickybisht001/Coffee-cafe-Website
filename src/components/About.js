import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Chefs data
const chefs = [
  {
    name: "Maria Smith",
    role: "Top Chef",
    img: "https://preview.colorlib.com/theme/thevenue/images/chef_1.jpg.webp",
    description: "With over 15 years of experience in fine dining, Maria specializes in creating unique and innovative dishes that blend tradition with modern flavors."
  },
  {
    name: "William Jones",
    role: "Sauce Chef",
    img: "https://preview.colorlib.com/theme/thevenue/images/chef_2.jpg.webp",
    description: "An expert in crafting exquisite sauces, William has mastered the art of balancing flavors to enhance every dish served at our restaurant."
  },
  {
    name: "Julien Williams",
    role: "Sushi Chef",
    img: "https://preview.colorlib.com/theme/thevenue/images/chef_3.jpg.webp",
    description: "Julien brings authentic Japanese techniques to our kitchen, creating fresh, flavorful sushi that delights our guests every time."
  },
  {
    name: "Suzie James",
    role: "Pastry Chef",
    img: "https://preview.colorlib.com/theme/thevenue/images/chef_4.jpg.webp",
    description: "Suzie is a master in pastry arts, known for her intricate desserts that combine classic recipes with a creative modern touch."
  }
];

// Carousel food specialties
const carouselItems = [
  {
    img: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg",
    title: "Hot & Delicious Pasta",
    description: "Handmade pasta with fresh ingredients and a rich, creamy sauce.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/08/09/18/32/sushi-roll-images-4395598_1280.jpg",
    title: "Exotic Sushi Platter",
    description: "A perfect combination of flavors, freshness, and presentation.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_1280.jpg",
    title: "Fresh Veg Burger and Fries",
    description: "Enjoy your tasty meal in a warm and inviting atmosphere.",
  },
];

const About = () => {
  return (
    <section className="about-section">
      {/* Top banner */}
      <div className="bg-img">
        <h1>About Us</h1>
      </div>

      {/* Experience section */}
      <div className="about-ex container">
        <div className="about-ex-img">
          <img src="https://preview.colorlib.com/theme/thevenue/images/intro_1.jpg.webp" alt="Dining area at Bisht Cafe" />
        </div>
        <div className="about-ex-text">
          <p className="text-muted">Something New</p>
          <h2>An Extraordinary Experience</h2>
          <p>
            Welcome to <strong>Bisht Cafe & Restaurant</strong>, where culinary excellence meets a warm, inviting atmosphere. Located in the heart of <strong>New Delhi</strong>, we specialize in <em>Momos, Cream Burger, Pasta, and Cold Coffee</em>.
            Our menu features signature dishes like <strong>Veg Momos, Pasta, and Cold Coffee</strong>, along with a selection of handcrafted beverages.
            Whether you're planning a romantic dinner or a family gathering, our elegant yet cozy setting provides the perfect backdrop for any occasion.
            <br /><br />
            Join us for an unforgettable dining experience!
          </p>
        </div>
      </div>

      {/* Chefs section */}
      <div className="chef-section container">
        <div className="chef-desc">
          <span>Something New</span>
          <h1>Meet the Chefs</h1>
          <p>Our team of expert chefs brings a wealth of experience and creativity to our kitchen. From gourmet entrées to delicate pastries, each dish is prepared with passion and precision.</p>
          <p>Discover the brilliant minds behind our signature flavors and experience the culinary excellence that makes our restaurant special.</p>
        </div>

        <div className="chef-info-section">
          {chefs.map((chef, index) => (
            <div className="chef-info" key={index}>
              <img src={chef.img} alt={`${chef.name} - ${chef.role}`} />
              <h4>{chef.name}</h4>
              <p className="chef-role">{chef.role}</p>
              <p className="chef-description">{chef.description}</p>
              <button className="btn-style">See More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel section */}
      <div className="carousel-section">
        <h1>Discover Our Specialties</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-item">
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
