import React from "react";

function App() {
  const stateArrayFromUseState = React.useState(0);
  const currentCountValue = stateArrayFromUseState[0];
  const functionToUpdateCount = stateArrayFromUseState[1];

  // Use React.useEffect to set the initial value to 99
  React.useEffect(() => {
    functionToUpdateCount(99);
  }, []); // Empty dependency array means this runs once on component mount

  function incrementCountByOne() {
    functionToUpdateCount(function addOneToCurrentCount(previousCountValue) {
      return previousCountValue + 1;
    });
  }

  function decrementCountByOne() {
    functionToUpdateCount(function subtractOneFromCurrentCount(
      previousCountValue
    ) {
      return previousCountValue - 1;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Counter: {currentCountValue}</h1>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={incrementCountByOne}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={decrementCountByOne}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
