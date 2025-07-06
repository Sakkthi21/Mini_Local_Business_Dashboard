import { createContext, useContext, useState } from 'react';

const BusinessContext = createContext();

export const useBusinessContext = () => useContext(BusinessContext);

export const BusinessProvider = ({ children }) => {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBusinessData = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch business data');
      }
      
      const data = await response.json();
      setBusinessData({
        ...data,
        name: formData.name,
        location: formData.location
      });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!businessData) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/regenerate-headline?name=${encodeURIComponent(businessData.name)}&location=${encodeURIComponent(businessData.location)}`,
        { method: 'GET' }
      );
      
      if (!response.ok) {
        throw new Error('Failed to regenerate headline');
      }
      
      const data = await response.json();
      setBusinessData(prev => ({ ...prev, headline: data.headline }));
      return data.headline;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetBusinessData = () => {
    setBusinessData(null);
    setError(null);
  };

  const value = {
    businessData,
    loading,
    error,
    fetchBusinessData,
    regenerateHeadline,
    resetBusinessData
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
};