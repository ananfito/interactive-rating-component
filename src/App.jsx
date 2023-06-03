import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Confirmation from './Confirmation.jsx'

function App() {
  const [formData, setFormData] = useState(({
    formValue: 0,
    formSubmitted: false
  }))

  function handleChange(event) {
    const {value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      formValue: value
    }))
  }

  function handleSubmit(event) {
      event.preventDefault()
      console.log(formData)
      console.log('subtmit btn clicked')
      setFormData(prevFormData => ({
        ...prevFormData,
        formSubmitted: true
      }))
  }

  return (
    <main className='container'>
      {formData.formSubmitted ? 
        <Confirmation 
          selectedValue={formData.formValue}
        /> : 
        <Form 
          formData={formData}
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
      }
    </main>
  )
}

export default App
