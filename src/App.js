import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import DisplayRestaurants from './DisplayRestaurants';
import Header from './Header';
import Footer from './Footer';


function App() {
  const [bobbaData, setBobbaData] = useState([])
  const [userLocation, setUserLocation] = useState('')
  const [userInput, setUserInput] = useState('')
  const handleSubmit = (event) => {
      event.preventDefault();
      setUserLocation(userInput);
      setUserInput('')
    }
  

   useEffect(() => {
    if (userLocation) {
      axios ({
        baseURL:'https://shrouded-bayou-34065.herokuapp.com/https://api.yelp.com/v3/businesses/search',
        method: 'GET',
        headers: {
          Authorization: 'Bearer lci33QO2O_jTge0rkYRhSJ09IaBJVIA5cY02UudrbmmFEvwSNfD6uhoItZ7Q5DhqIyyfqTQLraiWQEupJzxezTTMKejDuwq62PjgPXulG1aS7Pj1GMunyywx6_ipYnYx'
        },
        params: {
          location: {userLocation},
          categories: 'bubbletea',
        }
      }).then((apiData) => {
        setBobbaData(apiData.data.businesses)
      });
    }   
    }, [userLocation])



  
  return (
    <div className='appWrapper'>

      < Header />
      <main className='body'>
      <section className="bobbaForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="findLocation">Find me a Buddy!</label>
                <input 
                    type="text" 
                    name="location" 
                    value={userInput}
                    placeholder="Input City" 
                    onChange={(e)=> {
                        setUserInput(e.target.value);
                        }}/>
            <button onSubmit={handleSubmit}>
                Bobba Time!
            </button>
            </form>
        </section>
        <section className='resultsTitleText'>
          <h2>Buddies</h2>
          <p>A Boba a day keeps reality away ❣️</p>
        </section>
      <div className='bobbaResultsContainer'>
        { bobbaData.map((bobbaRestuarant) => {
            return ((
              < DisplayRestaurants 
                  key={bobbaRestuarant.id}
                  restuarantPic={bobbaRestuarant.image_url}
                  restuarantName={bobbaRestuarant.name}
                  restuarantLocation={bobbaRestuarant.location.address1}
                  price={bobbaRestuarant.price}
                  />
            ))
          })
        }
      </div>
      </main>
      <Footer/>
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
    