
const blogPosts = [
  {
    img: 'https://preview.colorlib.com/theme/thevenue/images/blog_1.jpg.webp',
    title: 'Our Nominee at the Restaurants Awards',
    author: 'George Smith',
    category: 'Lifestyle',
    comments: 4,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo minus, rerum quia vero possimus...',
  },
  {
    img: 'https://preview.colorlib.com/theme/thevenue/images/blog_2.jpg.webp',
    title: '10 Ways We Elevate Dining Experience',
    author: 'Sophia Johnson',
    category: 'Experience',
    comments: 6,
    content: 'Discover the unique touches and thoughtful details that make dining at Bisht Cafe unforgettable...',
  },
  {
    img: 'https://preview.colorlib.com/theme/thevenue/images/blog_3.jpg.webp',
    title: 'Behind the Scenes with Our Chefs',
    author: 'Daniel Lee',
    category: 'Staff Picks',
    comments: 12,
    content: 'Get an inside look into how our chefs craft dishes with care, creativity, and culinary excellence...',
  },
  {
    img: 'https://preview.colorlib.com/theme/thevenue/images/blog_4.jpg.webp',
    title: 'Why Our Coffee Is the Best in Town',
    author: 'Emily Carter',
    category: 'Drinks',
    comments: 15,
    content: 'We use premium beans and a time-tested process to bring you a cup of coffee that’s second to none...',
  },
  {
    img: 'https://preview.colorlib.com/theme/thevenue/images/blog_5.jpg.webp',
    title: 'Celebrating 5 Years of Flavor',
    author: 'Michael Brown',
    category: 'Events',
    comments: 20,
    content: 'Join us as we celebrate five years of delicious memories, loyal customers, and culinary milestones...',
  },
  {
    img: 'https://preview.colorlib.com/theme/thevenue/images/blog_6.jpg.webp',
    title: 'Top 5 Dishes You Must Try',
    author: 'Laura White',
    category: 'Food Guide',
    comments: 26,
    content: 'Not sure what to order? Here are the top 5 dishes that our customers rave about every time...',
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      {/* Header Image with Title */}
      <div className="bg-img">
        <h1>Our Blog</h1>
      </div>

      {/* Blog Posts Grid */}
      <div className="container my-5">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-box">
              <img src={post.img} alt={`Blog image - ${post.title}`} />
              <div className="blog-text">
                <h4><a href="javascript:void(0);">{post.title}</a></h4>
                <div className="blog-info">
                  <ul>
                    <li>By {post.author}</li>
                    <li> | In {post.category}</li>
                    <li> | <a href="javascript:void(0);">{post.comments} Comments</a></li>
                  </ul>
                </div>
                <p>{post.content}</p>
                <a href="javascript:void(0);" className="btn-style">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button (placeholder) */}
      <div className="text-center my-4">
        <button className="btn-style">Load More</button>
      </div>
    </section>
  );
};

export default Blog;
