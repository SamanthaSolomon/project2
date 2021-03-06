import React from "react"
import {Route, Redirect} from "react-router-dom"

//styles
import '../App.css';

//components
import SearchForm from "../Components/SearchForm"
import RandomButton from "../Components/RandomButton"
import Footer from "../Components/Footer"

//pages
import Joke from "./Joke"

const Main = (props) => {

//Searched Joke
  const [searchJoke, setSearchJoke] = React.useState(null)

  const getSearched = async (searchterm) => {
    const response = await fetch(`https://icanhazdadjoke.com/search?page=1&limit=5&term=${searchterm}`,{
        headers: {Accept: "application/json"}
    })
    const data = await response.json()
    setSearchJoke(data)
  }


  //Random Joke
  const [randomJoke, setRandomJoke]=React.useState(null)

  const getRandom= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`, {
      headers: {Accept: "application/json"}
    })
    const data = await response.json()
    setRandomJoke(data);
  }


    return(
        <div className="main">
          <div className="main__para">
            <p>
            Preparing for a BBQ with the neighbors?
            <br></br> 
            One of your kids having a sleepover? 
            <br></br>
            Maybe you're just taking a trip to the hardware store for some ducktape and nails.
            <br></br>
            </p>
            <p>Whatever the situation, this app's got your dad joke needs covered.</p>
            <p><span class="para__emphasis"> Search for jokes by keyword.</span></p> 
            <p>Feeling looser than a bathing suit from the 80s? </p>
            <p><span class="para__emphasis">Get a random joke.</span></p>
            </div>
            <Route path="/joke" render={(renderProps) => {
                return <Joke {...renderProps} randomJoke={randomJoke} searchJoke={searchJoke}/>
                }}/>
            <SearchForm jokeSearch={getSearched} history={props.history}/>
            <RandomButton jokeRandom={getRandom} history={props.history}/>
            <div className="app__footer">
              <Footer />
            </div>
        </div>
    )
}

export default Main