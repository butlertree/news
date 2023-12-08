import './App.css';
import  News from '../News/News';
import NewsDetail from '../NewsDetail/NewsDetail'
import { useState, useEffect } from 'react'




function App() {

//THE ARRAY THAT CONTAINS ALL OF THE NEWS OBJECTS
  const [news, setNews] = useState([])

//THE STATE OF THE SELECTED CART
const [selectedCard,  setSelectedCard] = useState(null);  
const [error, setError] = useState('')

useEffect(() => {
  fetch('https://api.thenewsapi.com/v1/news/all?api_token=kWpH402zPhW8QjSmYsa5IaMyi3QNR1JjwaDJGnU7&language=en&limit=3')
    .then(response => response.json())
    .then(data => setNews(data.data))
    .catch(error => setError(error.message))
}, []);
 

//FUNCTION THAT TAKES THE CARD SELECTED AND PASSES TO setSelectedCard TO CHANGE STATE
  function viewCardDetails(card){
  setSelectedCard(card)
}

//FUNCTION TO CHANGE THE STATE OF THE SELECTED CARD TO GET BACK TO MAIN
function goBackToMain(){
  setSelectedCard(null)
}

  return (
    <main className="App">
      <h1 className='bigHeading'>BotNews</h1>
      {selectedCard ? (
        <NewsDetail selectedCard={selectedCard} goBackToMain={goBackToMain}/>
        ) : (
        <News news={news} viewCardDetails={viewCardDetails}/>
      )}
      {error && <h2>Something went wrong, please try again later!</h2>}
    </main>
  );
}

export default App;



