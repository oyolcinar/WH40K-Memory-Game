import { useState, useEffect } from 'react';
import CardInfo from '../Utils/CardInfo';
import Header from './Header';
import Body from './Body';

function Main() {
  const [data] = useState(CardInfo);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [chosen, setChosen] = useState([]);

  useEffect(() => {
    dealCards();
  }, []);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  function dealCards() {
    for (let i = 0; i < 10; i++) {
      setSelectedCards((prevData) => [
        ...prevData,
        data[Math.floor(Math.random() * data.length)],
      ]);
    }
  }

  function handleSelect(e) {
    const name = e.currentTarget.innerText;
    if (chosen.includes(name)) {
      setCurrentScore(0);
      setChosen([]);
      setSelectedCards([]);
      dealCards();
    } else {
      setCurrentScore((prevData) => prevData + 1);
      setChosen((prevData) => [...prevData, name]);
      setSelectedCards([]);
      dealCards();
    }
  }

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Body selectedCards={selectedCards} handleSelect={handleSelect} />
    </div>
  );
}

export default Main;
