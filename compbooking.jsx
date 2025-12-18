import "./compbooking.css";
import { Link } from "react-router-dom";
import theone from "../assets/1.jpg";


function Comp() {
    return (
        <div className="comp-booking-page">

            {/* TOP BANNER */}
            <div className="comp-main-banner">
                <Link to="/" className="back-link">← Back to rooms</Link>
                <h1>Complete Your Booking</h1>
                <p>Just a few more details to secure your perfect stay</p>
            </div>

            {/* MAIN CONTENT */}
            <div className="comp-booking-container">

                {/* LEFT FORM */}
                <form className="comp-booking-form">
                    <h2>Guest Information</h2>

                    <div className="form-row">
                        <input type="text" placeholder="First Name *" />
                        <input type="text" placeholder="Last Name *" />
                    </div>

                    <input type="email" placeholder="Email Address *" />
                    <input type="tel" placeholder="Phone Number *" />
                    <input type="text" placeholder="Address" />

                    <textarea placeholder="Special requests (optional)" />

                    <h3>Payment Method</h3>

                    <label className="radio">
                        <input type="radio" name="payment" />
                        Pay on Arrival
                    </label>

                    <label className="radio">
                        <input type="radio" name="payment" />
                        Pay Online
                    </label>

                    <label className="checkbox">
                        <input type="checkbox" />
                        I agree to the Terms & Conditions and Privacy Policy
                    </label>

                    <button className="confirm-btn">Confirm Booking</button>
                </form>

                {/* RIGHT SUMMARY */}
                <div className="comp-booking-summary">
                    <h3>Booking Summary</h3>
                    <p><strong>Executive Suite</strong></p>
                    <img src={theone} alt="hotel-img"></img>
                    <div className="summary-row">
                        <span>Check-in</span>
                        <span>Dec 15, 2024</span>
                    </div>

                    <div className="summary-row">
                        <span>Check-out</span>
                        <span>Dec 18, 2024</span>
                    </div>

                    <div className="summary-row">
                        <span>Total</span>
                        <span className="price">$515.16</span>
                    </div>
                    <div className="compbking">
                        <span>Need Help?</span><br/>
                        <span>Our support team is here to assist you</span><br/>
                        <span><i className="fa-solid fa-phone"></i>
                        +1 (555) 123-4567</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Comp;
