import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Kathi House",
    description: "Delicious tandoor items and fresh fruit juices",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&auto=format&fit=crop",
    rating: 4.5
  },
  {
    id: 2,
    name: "Southern Stories",
    description: "Authentic South Indian dishes like dosa and chole bhature",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&auto=format&fit=crop",
    rating: 4.3
  },
  {
    id: 3,
    name: "Maggie Hotspot",
    description: "Various delicious Maggi preparations",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop",
    rating: 4.2
  },
  {
    id: 4,
    name: "Snap Eats",
    description: "Quick snacks and refreshing tea",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
    rating: 4.4
  },
  {
    id: 5,
    name: "Tuck Shop",
    description: "Stationery, snacks, and confectioneries",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop",
    rating: 4.1
  }
];

function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Bennett Foods</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user?.name}</span>
            <button
              onClick={logout}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <LogOut size={20} className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="block hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-white overflow-hidden rounded-lg shadow">
                  <div className="h-48 w-full relative">
                    <img
                      className="w-full h-full object-cover"
                      src={restaurant.image}
                      alt={restaurant.name}
                    />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700">
                      ★ {restaurant.rating}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                    <p className="mt-1 text-gray-600">{restaurant.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;