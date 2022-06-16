import './App.css';
import DisplayRestaurants from './DisplayRestaurants';
import Form from './Form';
import Header from './Header';


function App() {
  
  
  return (
    <div>

      < Header />
      < Form />
      < DisplayRestaurants />
    </div>
    
  );
}

export default App;





// PSEUDO-CODE 
  // Create a landing page with a form, button and text "A boba a day keeps reality away" with title "A Boba Buddy"
  
    // Form 
      // Track user input 
        // Store user input into state 
        // Connect form to useEffect & Axios so that user input updates parameter - query 
        // Call API and get data

    // Using data pulled from Yelp API
        // traverse through the response objects and get the array of restaurants 
        // pass the data and connect it to state so react is controlling state 
        // display results onto app

// State List 
  // User Input State (lives in Form.js)
  // Bubble Tea Restauants  
  // 

// Component List:
// App JS
  // Header
  // Form + button (Props: handleSubmit function)
  // Gallery (Props: Restaurant)

  // Function List: 
    // handleChange Function (updates user input state from form to App JS - lives in Form.js)
    // handleSubmit Function (Make Axios call with user input & update restuarant state)
    