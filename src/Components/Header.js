function Header({ currentScore, bestScore }) {
  return (
    <div>
      <div className='header'>
        <p className='header-logo'>HORUS HERESY MEMORY GAME</p>
        <div className='counter'>
          <p>
            Score: {currentScore < 10 ? '0' : ''}
            {currentScore}
          </p>
          <p>
            Best: {bestScore < 10 ? '0' : ''}
            {bestScore}
          </p>
        </div>
      </div>
      <div className='header-border'></div>
    </div>
  );
}

export default Header;
