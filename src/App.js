import React, { useState, useEffect } from 'react';
import LoadingScreen from './Loadingscreen';
import  './App.css';
import DarkVariantExample from './Carousel';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        
        // Render the main app content once loading is complete
        <div>
          <h1>SIMILEAYO</h1>
<DarkVariantExample />
<video autoPlay loop muted>
        <source src="/assets/Cream Simple Photo Frame Love Letter (1).mp4" type="video/mp4" />
      </video>
          {/* Rest of the app */}
        </div>
      )}
    </div>
  );
};

export default App;


