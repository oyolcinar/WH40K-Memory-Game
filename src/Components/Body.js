import Card from './Card';
import { nanoid } from 'nanoid';

function Body({ selectedCards, handleSelect }) {
  const cardsArray = selectedCards.map((card) => (
    <Card
      name={card.name}
      image={card.image}
      isSelected={card.selected}
      handleSelect={handleSelect}
      key={nanoid()}
    />
  ));
  return <div className='main-content'>{cardsArray}</div>;
}

export default Body;
