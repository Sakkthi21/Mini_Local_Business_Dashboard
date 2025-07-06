import { useBusinessContext } from '../context/BusinessContext';

const BusinessCard = ({ onRegenerateHeadline }) => {
  const { businessData, loading } = useBusinessContext();
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Business Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and metrics for your business.
        </p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <dt className="text-sm font-medium text-gray-500">Google Rating</dt>
            <dd className="mt-1 text-2xl font-semibold text-yellow-500 flex items-center">
              {businessData.rating}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </dd>
          </div>
          <div className="sm:col-span-3">
            <dt className="text-sm font-medium text-gray-500">Reviews</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">{businessData.reviews}</dd>
          </div>
          <div className="sm:col-span-6">
            <dt className="text-sm font-medium text-gray-500">SEO Headline</dt>
            <dd className="mt-1 text-lg font-medium text-gray-900 p-3 bg-gray-50 rounded-md">
              {businessData.headline}
            </dd>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
        <button
          type="button"
          onClick={onRegenerateHeadline}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </>
          ) : (
            'Regenerate SEO Headline'
          )}
        </button>
        <div className="text-sm text-gray-500">
          <span className="font-medium">{businessData.name}</span> • {businessData.location}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;