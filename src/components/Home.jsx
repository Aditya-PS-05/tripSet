import travellerImg from '../../public/hero-bg-3.png';

const Home = () => {
  return (
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
              <button className="px-10 py-4 bg-[#FF5C28] text-white rounded-full font-medium text-lg hover:bg-[#FF4400] transition-colors"> {/* Increased padding and text size */}
                Let us Explore
              </button>
              <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium text-lg hover:bg-gray-900 hover:text-white transition-colors"> {/* Increased padding and text size */}
                Our Packages
              </button>
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
  );
};

export default Home;
