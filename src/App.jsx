import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="form-container">
      <img id='star-icon' src="./assets/icon-star.svg" alt="star icon" width='10px' height='10px' />
      <h1 className='form-container--title'>How'd we do?</h1>
      <p className='form-container--text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <form action="" className='form-container--form'>
        <input type="radio" name="rating-one" id="rating-one" value={1} />
        <label className='form--label' htmlFor="rating-one">1</label>
        <input type="radio" name="rating-two" id="rating-two" value={2} />
        <label className='form--label' htmlFor="rating-two">2</label>
        <input type="radio" name="rating-three" id="rating-three" value={3} />
        <label className='form--label' htmlFor="rating-three">3</label>
        <input type="radio" name="rating-four" id="rating-four" value={4} />
        <label className='form--label' htmlFor="rating-four">4</label>
        <input type="radio" name="rating-five" id="rating-five" value={5} />
        <label className='form--label' htmlFor="rating-five">5</label>
        <button className='form-btn'>Submit</button>
      </form>
    </div>
  )
}

export default App
