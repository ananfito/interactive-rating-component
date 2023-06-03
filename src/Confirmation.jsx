import thankYouImgUrl from "./assets/illustration-thank-you.svg"

export default function Confirmation (props) {
    const { selectedValue } = props
    return (
        <div className="confirmation-container">
            <div className="img-container">
                <img src={thankYouImgUrl} alt="" />
            </div>
            <p className="confirmation--selection">You selected {selectedValue} out of 5</p>
            <h1 className="confirmation--title">Thank you!</h1>
            <p className="confirmation--text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}