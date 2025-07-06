import './App.css';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import { useBusinessContext } from './context/BusinessContext';

function App() {
  const { businessData, loading, error, fetchBusinessData, regenerateHeadline } = useBusinessContext();

  const handleFormSubmit = async (formData) => {
    try {
      await fetchBusinessData(formData);
    } catch (err) {
      // Error is already handled in context
    }
  };

  const handleRegenerateHeadline = async () => {
    try {
      await regenerateHeadline();
    } catch (err) {
      // Error is already handled in context
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6">GrowthProAI</h1>
              <p className="text-xl text-gray-600 mb-8">Local Business Dashboard</p>
            </div>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            
            {!businessData ? (
              <BusinessForm onSubmit={handleFormSubmit} loading={loading} />
            ) : (
              <BusinessCard 
                businessData={businessData} 
                onRegenerateHeadline={handleRegenerateHeadline} 
                loading={loading} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
