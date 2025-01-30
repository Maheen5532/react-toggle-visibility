import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-600">
      <div className="text-center p-4 bg-white rounded w-full max-w-md">
        <h1 className="text-4xl mb-4 text-black">Toggle Visibility</h1>

        <button
          onClick={toggleVisibility}
          className="p-2 bg-teal-700 text-white rounded mb-4"
        >
          {isVisible ? 'Hide' : 'Show'} Text
        </button>

        {isVisible && (
          <p className="text-lg text-black">
      Coding like poetry should be short and concise. 
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
