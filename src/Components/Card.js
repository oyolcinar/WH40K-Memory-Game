function Card({ name, image, isSelected, handleSelect }) {
  return (
    <div
      className='card'
      name={name}
      onClick={(e) => {
        handleSelect(e);
      }}
    >
      <img className='card-image' alt='' src={image} />
      <p className='card-title'>{name}</p>
    </div>
  );
}

export default Card;
