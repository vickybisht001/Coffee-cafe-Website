
const menuData = {
  Starters: [
    {
      name: 'Pork Tenderloin in Green Pepper',
      price: '$20',
      description: 'Juicy pork tenderloin with fresh green pepper'
    },
    {
      name: 'Shrimp with Garlic',
      price: '$17',
      description: 'Fresh shrimp sautéed with garlic and herbs'
    },
    {
      name: 'Wild Mushroom with Chicken',
      price: '$20',
      description: 'Sautéed mushrooms and grilled chicken in cream sauce'
    },
    {
      name: 'Oysters with Baked Potatoes',
      price: '$20',
      description: 'Baked oysters served with seasoned potatoes'
    },
    {
      name: 'Roast Pork',
      price: '$17',
      description: 'Classic roast pork with house spices'
    }
  ],
  Main: [
    {
      name: 'Chicken with Lemon',
      price: '$20',
      description: 'Tender chicken glazed with lemon zest sauce'
    },
    {
      name: 'Pork Tenderloin in Green Pepper',
      price: '$20',
      description: 'Juicy pork tenderloin with fresh green pepper'
    },
    {
      name: 'Shrimp with Garlic',
      price: '$17',
      description: 'Fresh shrimp sautéed with garlic and herbs'
    },
    {
      name: 'Wild Mushroom with Chicken',
      price: '$20',
      description: 'Sautéed mushrooms and grilled chicken in cream sauce'
    },
    {
      name: 'Oysters with Baked Potatoes',
      price: '$45',
      description: 'Baked oysters served with seasoned potatoes'
    },
    {
      name: 'Roast Pork',
      price: '$17',
      description: 'Classic roast pork with house spices'
    }
  ],
  Deserts: [
    {
      name: 'Lava Cake',
      price: '$20',
      description: 'Molten chocolate cake with a gooey center'
    },
    {
      name: 'Orange Tart',
      price: '$18',
      description: 'Crispy tart with sweet orange cream filling'
    },
    {
      name: 'Cheese Cake',
      price: '$20',
      description: 'Classic creamy cheesecake with biscuit base'
    },
    {
      name: 'Chocolate Mousse',
      price: '$32',
      description: 'Rich chocolate mousse with whipped cream topping'
    },
    {
      name: 'Ice Cream',
      price: '$15',
      description: 'Assorted ice creams with seasonal toppings'
    }
  ]
};

const signatureDishes = [
  {
    name: 'Pork Tenderloin marinated in Green Pepper',
    price: '$20',
    description: 'Pork / Tenderloin / Green Pepper / Veggies',
    image: 'https://preview.colorlib.com/theme/thevenue/images/sig_1.jpg.webp'
  },
  {
    name: 'Beef Tartar with forest mushrooms',
    price: '$35',
    description: 'Beef / Tartar / Forest Mushrooms / Sauce',
    image: 'https://preview.colorlib.com/theme/thevenue/images/sig_2.jpg.webp'
  },
  {
    name: 'Beef Steak with sautéed vegetables',
    price: '$40',
    description: 'Beef / Steak / Seasonal Veggies / Butter Sauce',
    image: 'https://preview.colorlib.com/theme/thevenue/images/sig_3.jpg.webp'
  }
];

const Menu = () => {
  return (
    <div className="main-menu-section">
      <div className="bg-img">
        <h1>The Menu</h1>
      </div>

      <div className="menu-text">
        <h1>Discover Our Menu</h1>
        <p>
          Explore our delicious menu crafted with fresh ingredients and culinary expertise. From tempting starters to hearty mains and delightful desserts, each dish is a celebration of flavor and quality.
        </p>
      </div>

      <div className="main-menu-items container">
        {Object.entries(menuData).map(([section, items]) => (
          <div className="menu-item" key={section}>
            <img
              src={`https://preview.colorlib.com/theme/thevenue/images/${section.toLowerCase()}.jpg.webp`}
              alt={`${section} section`}
            />
            <h1>{section}</h1>
            {items.map((item, i) => (
              <div className="menu-box" key={i}>
                <h4>
                  {item.name} <span>{item.price}</span>
                </h4>
                <p>{item.description}</p>
                <button onClick={() => alert(`Ordered: ${item.name}`)}>Order Now</button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="signature-dish-section container">
        <span>Something new</span>
        <h1>Our Signature Dishes</h1>

        {signatureDishes.map((dish, index) => (
          <div className="sign-dish" key={index}>
            <div className="dish-info">
              <div className="dish-name">
                <h4>{dish.name}</h4>
                <span>{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <button className="btn-style" onClick={() => alert(`Ordered: ${dish.name}`)}>
                Order Now
              </button>
            </div>
            <div className="dish-img">
              <img src={dish.image} alt={dish.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
