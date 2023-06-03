export default function Form(props) {
    const { formData, handleChange, handleSubmit } = props

    return (
        <div className="form-container">
            <div className="star-icon-container">
                <img id='star-icon' src="src/assets/icon-star.svg" alt="star icon" />
            </div>
            <h1 className='form-container--title'>How did we do?</h1>
            <p className='form-container--text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <form onSubmit={handleSubmit} className='form-container--form'>
                
                <div className='form-container--form__labels'>
                <label className={formData.formValue === '1' ? 'form--label selected' : 'form--label'} htmlFor="rating-one">1
                    <input
                    type="radio"
                    name="rating"
                    id="rating-one"
                    value={1}
                    onChange={handleChange}
                    />
                </label>
                
                <label className={formData.formValue === '2' ? 'form--label selected' : 'form--label'} htmlFor="rating-two">2
                    <input
                    type="radio"
                    name="rating"
                    id="rating-two"
                    value={2}
                    onChange={handleChange}
                    />
                </label>
                
                <label className={formData.formValue === '3' ? 'form--label selected' : 'form--label'} htmlFor="rating-three">3
                    <input
                    type="radio"
                    name="rating"
                    id="rating-three"
                    value={3}
                    onChange={handleChange}
                    />
                </label>
                
                <label className={formData.formValue === '4' ? 'form--label selected' : 'form--label'} htmlFor="rating-four">4
                    <input
                    type="radio"
                    name="rating"
                    id="rating-four"
                    value={4}
                    onChange={handleChange}
                    />
                </label>
                
                <label className={formData.formValue === '5' ? 'form--label selected' : 'form--label'} htmlFor="rating-five">5
                    <input
                    type="radio"
                    name="rating"
                    id="rating-five"
                    value={5}
                    onChange={handleChange}
                    />
                </label>
                </div>
                <button className='form-btn'>Submit</button>
            </form>
        </div>
    )
}