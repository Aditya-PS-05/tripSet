import { Link } from 'react-router-dom';
import travellerImg from '../../public/hero-bg.png';
// Import feature icons (you can use any icon library like react-icons)
import { FaCalendarAlt, FaMapMarkedAlt, FaHotel, FaPlane } from 'react-icons/fa';

const Home = () => {
  // Features data
  const features = [
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-[#FF5C28]" />,
      title: "Smart Calendar",
      description: "Efficiently plan your trips with our interactive calendar system. Track all your travel dates and activities in one place."
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8 text-[#FF5C28]" />,
      title: "Trip Planning",
      description: "Create detailed itineraries, add destinations, and organize activities for your perfect journey."
    },
    {
      icon: <FaHotel className="w-8 h-8 text-[#FF5C28]" />,
      title: "Accommodation Booking",
      description: "Find and book the best hotels and stays that match your preferences and budget."
    },
    {
      icon: <FaPlane className="w-8 h-8 text-[#FF5C28]" />,
      title: "Travel Arrangements",
      description: "Seamlessly coordinate your transportation, including flights, trains, and local travel."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Adventure Traveler",
      image: "/test-1.jpg", // Add these images to your public folder
      quote: "Tripset made planning my world tour so much easier! The calendar feature is a game-changer.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Traveler",
      image: "/test-2.jpeg",
      quote: "The best travel planning tool I've used. Perfect for managing multiple trips and itineraries.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Family Vacation Planner",
      image: "/test-3.jpg",
      quote: "Fantastic for organizing family trips! The interface is intuitive and user-friendly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffd4d4]">
      {/* Existing Hero Section */}
      {/* ... your existing hero section code ... */}

      <div className="min-h-screen bg-pink-50 font-hanken">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 min-h-[calc(100vh-80px)] flex items-center"> {/* Increased max-width and added min-height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full"> {/* Increased gap */}
          {/* Left Column - Text Content */}
          <div className="space-y-8"> {/* Increased spacing between elements */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight font-hanken-bold"> {/* Increased text size */}
              Making The World Your Playground
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600"> {/* Increased text size */}
              Unrivaled expertise for unique travel experiences. We are here to take you there dream travels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"> {/* Improved button layout */}
              <Link className="px-10 py-4 bg-[#FF5C28] text-white rounded-full font-medium text-lg hover:bg-[#FF4400] transition-colors" to="/planning"> {/* Increased padding and text size */}
                Let us Explore
              </Link>
            </div>
          </div>

          {/* Right Column - Image and Badge */}
          <div className="relative md:ml-[-20px]"> {/* Added margin-left auto for better positioning */}
            {/* 100% Verified Badge */}
            <div className="absolute top-16 bg-white rounded-xl p-5 shadow-lg z-10"> {/* Increased size and padding */}
              <div className="flex items-center">
                <svg 
                  className="h-8 w-8 text-[#FF5C28]"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <div className=""> {/* Increased margin */}
                  <div className="text-2xl font-bold">100%</div> {/* Increased text size */}
                  <div className="text-base text-gray-600">Verified</div> {/* Increased text size */}
                </div>
              </div>
            </div>

            {/* Main Image */}
            <img 
              src={travellerImg}
              alt="Happy traveller" 
              className="w-full h-auto max-w-[600px] ml-auto" 
            />
          </div>
        </div>
      </div>
    </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              Why Choose Tripset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the features that make trip planning a breeze with our comprehensive travel management platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3 font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read about the experiences of travelers who have planned their journeys with Tripset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className=" text-gray-900 font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex text-[#FF5C28]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link
              to="/trip-planning"
              className="inline-block px-8 py-4 bg-[#FF5C28] text-white rounded-full text-lg hover:bg-[#FF4400] transition-colors"
            >
              Start Planning Your Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
