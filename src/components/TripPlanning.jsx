import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const TripPlanning = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // Watch destination field for API calls
  const destination = watch('destination');

  // Fetch country data when destination changes
  useEffect(() => {
    const fetchCountryData = async () => {
      if (!destination) return;
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${destination}`
        );
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setCountryInfo(data[0]);
        }
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    const debounceTimer = setTimeout(fetchCountryData, 500);
    return () => clearTimeout(debounceTimer);
  }, [destination]);

  const onSubmit = (data) => {
    // Here you would typically save the trip data to your backend
    console.log(data);
    alert('Trip saved successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Plan Your Trip</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Trip Planning Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <input
                type="text"
                {...register('destination', { required: 'Destination is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city name"
              />
              {errors.destination && (
                <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
              )}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  {...register('startDate', { required: 'Start date is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  {...register('endDate', { required: 'End date is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.endDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
                )}
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Travelers
              </label>
              <input
                type="number"
                {...register('travelers', { 
                  required: 'Number of travelers is required',
                  min: { value: 1, message: 'Minimum 1 traveler required' }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
              />
              {errors.travelers && (
                <p className="text-red-500 text-sm mt-1">{errors.travelers.message}</p>
              )}
            </div>

            {/* Transportation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mode of Transport
              </label>
              <select
                {...register('transport', { required: 'Please select transport mode' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select transport</option>
                <option value="flight">Flight</option>
                <option value="train">Train</option>
                <option value="bus">Bus</option>
                <option value="car">Car</option>
              </select>
              {errors.transport && (
                <p className="text-red-500 text-sm mt-1">{errors.transport.message}</p>
              )}
            </div>

            {/* Accommodation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Accommodation Type
              </label>
              <select
                {...register('accommodation', { required: 'Please select accommodation type' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select accommodation</option>
                <option value="hotel">Hotel</option>
                <option value="hostel">Hostel</option>
                <option value="apartment">Apartment</option>
                <option value="resort">Resort</option>
              </select>
              {errors.accommodation && (
                <p className="text-red-500 text-sm mt-1">{errors.accommodation.message}</p>
              )}
            </div>

            {/* Activities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Planned Activities
              </label>
              <textarea
                {...register('activities')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Enter your planned activities..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Trip
            </button>
          </form>
        </div>

        {/* Country Information and Travel Tips */}
        <div className="space-y-6">
          {/* Country Information */}
          {countryInfo && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">About {countryInfo.name.common}</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={countryInfo.flags.svg}
                  alt={`${countryInfo.name.common} flag`}
                  className="w-16 h-auto"
                />
                <div>
                  <p className="text-lg font-medium">{countryInfo.capital?.[0]}</p>
                  <p className="text-gray-600">{countryInfo.region}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Currency</p>
                  <p className="font-semibold">
                    {Object.values(countryInfo.currencies || {}).map(curr => curr.name).join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Languages</p>
                  <p className="font-semibold">
                    {Object.values(countryInfo.languages || {}).join(', ')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Travel Tips */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Travel Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Book your accommodations in advance</li>
              <li>Check local COVID-19 restrictions</li>
              <li>Research local transportation options</li>
              <li>Keep important documents backed up</li>
              <li>Get travel insurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanning;