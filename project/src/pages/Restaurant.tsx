import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  available: number;
  image: string;
}

const restaurantMenus: { [key: string]: MenuItem[] } = {
  "1": [ // Kathi House
    {
      id: 1,
      name: "Chicken Kathi Roll",
      description: "Tender chicken wrapped in paratha with spices",
      price: 120,
      available: 20,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Paneer Kathi Roll",
      description: "Fresh paneer with vegetables in paratha",
      price: 100,
      available: 15,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Mango Lassi",
      description: "Fresh mango blended with yogurt",
      price: 60,
      available: 25,
      image: "https://images.unsplash.com/photo-1626200419199-391ae4a09fce?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Chicken Tikka",
      description: "Marinated and grilled chicken pieces",
      price: 180,
      available: 12,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Mixed Fruit Juice",
      description: "Blend of seasonal fresh fruits",
      price: 80,
      available: 18,
      image: "https://images.unsplash.com/photo-1622597467836-f3c7ca3b4c25?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Malai Kofta",
      description: "Cottage cheese dumplings in rich gravy",
      price: 160,
      available: 10,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop"
    }
  ],
  "2": [ // Southern Stories
    {
      id: 1,
      name: "Masala Dosa",
      description: "Crispy dosa with potato filling",
      price: 90,
      available: 25,
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Chole Bhature",
      description: "Spicy chickpeas with fried bread",
      price: 110,
      available: 20,
      image: "https://images.unsplash.com/photo-1626132647523-66f4c5f56e84?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Idli Sambar",
      description: "Steamed rice cakes with lentil soup",
      price: 80,
      available: 30,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Uttapam",
      description: "South Indian rice pancake with vegetables",
      price: 95,
      available: 15,
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e3?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Vada Pav",
      description: "Spiced potato fritter in a bun",
      price: 40,
      available: 40,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Filter Coffee",
      description: "Traditional South Indian coffee",
      price: 30,
      available: 50,
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&auto=format&fit=crop"
    }
  ],
  "3": [ // Maggie Hotspot
    {
      id: 1,
      name: "Classic Maggi",
      description: "Original masala flavored noodles",
      price: 40,
      available: 50,
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Cheese Maggi",
      description: "Maggi noodles with melted cheese",
      price: 60,
      available: 30,
      image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Veggie Maggi",
      description: "Maggi with mixed vegetables",
      price: 50,
      available: 25,
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Butter Maggi",
      description: "Creamy butter flavored noodles",
      price: 55,
      available: 35,
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Schezwan Maggi",
      description: "Spicy schezwan flavored noodles",
      price: 65,
      available: 20,
      image: "https://images.unsplash.com/photo-1634864572865-1c31e5df2eae?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Masala Maggi",
      description: "Extra spicy masala noodles",
      price: 45,
      available: 40,
      image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&auto=format&fit=crop"
    }
  ],
  "4": [ // Snap Eats
    {
      id: 1,
      name: "Masala Chai",
      description: "Indian spiced tea",
      price: 20,
      available: 100,
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Samosa",
      description: "Crispy pastry with spiced potato filling",
      price: 15,
      available: 50,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Bread Pakora",
      description: "Bread fritters with potato filling",
      price: 25,
      available: 30,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Aloo Patties",
      description: "Spiced potato patties",
      price: 20,
      available: 40,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Coffee",
      description: "Hot brewed coffee",
      price: 25,
      available: 80,
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Biscuit Combo",
      description: "Assorted biscuits with tea",
      price: 30,
      available: 45,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop"
    }
  ],
  "5": [ // Tuck Shop
    {
      id: 1,
      name: "Notebook Pack",
      description: "Set of 5 ruled notebooks",
      price: 150,
      available: 30,
      image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Pen Set",
      description: "Pack of 10 blue ball pens",
      price: 100,
      available: 50,
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Lays Combo",
      description: "Assorted chips pack",
      price: 50,
      available: 40,
      image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Chocolate Pack",
      description: "Mixed chocolate selection",
      price: 80,
      available: 25,
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Art Supplies",
      description: "Basic drawing kit",
      price: 200,
      available: 15,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Water Bottle",
      description: "1L reusable bottle",
      price: 120,
      available: 20,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop"
    }
  ]
};

function Restaurant() {
  const { id } = useParams();
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const menuItems = restaurantMenus[id || "1"] || [];

  const addToCart = (itemId: number) => {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const currentQuantity = cart[itemId] || 0;
    if (currentQuantity >= item.available) return;
    
    setCart({
      ...cart,
      [itemId]: currentQuantity + 1
    });
  };

  const removeFromCart = (itemId: number) => {
    const currentQuantity = cart[itemId];
    if (!currentQuantity) return;
    
    const newCart = { ...cart };
    if (currentQuantity === 1) {
      delete newCart[itemId];
    } else {
      newCart[itemId] = currentQuantity - 1;
    }
    setCart(newCart);
  };

  const getTotalAmount = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(i => i.id === Number(itemId));
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  if (menuItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Restaurants</Link>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Restaurant Not Found</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">The restaurant you're looking for doesn't exist or its menu is not available.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Restaurants</Link>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {menuItems[0]?.name || "Restaurant Menu"}
            </h1>
          </div>
          <Link
            to="/cart"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <ShoppingCart size={20} />
            <span>₹{getTotalAmount()}</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-blue-600 font-semibold">₹{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-600">
                      Available: {item.available - (cart[item.id] || 0)}
                    </span>
                    {item.available < 5 && (
                      <span className="ml-2 text-amber-500 flex items-center text-sm">
                        <AlertCircle size={16} className="mr-1" />
                        Low stock
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        disabled={!cart[item.id]}
                        className="px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50"
                      >
                        -
                      </button>
                      <span>{cart[item.id] || 0}</span>
                      <button
                        onClick={() => addToCart(item.id)}
                        disabled={cart[item.id] >= item.available}
                        className="px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Restaurant;