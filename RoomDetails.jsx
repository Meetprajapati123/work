import "./roomdetails.css";

function RoomDetails() {
    return (
        <div className="room-details-page">

            <div className="room-details-container">

                {/* LEFT CONTENT */}
                <div className="room-left">

                    {/* IMAGE GALLERY */}
                    <div className="room-gallery">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="room"
                            className="main-img"
                        />
                        <div className="thumbs">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" />
                            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" />
                            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" />
                        </div>
                    </div>

                    {/* DETAILS */}
                    <h1 className="room-title">Deluxe Ocean View Suite</h1>

                    <p className="room-meta">
                        ⭐ 4.8 · 2 Guests · King Bed · Ocean View
                    </p>

                    <p className="room-desc">
                        Experience ultimate luxury in our Deluxe Ocean View Suite, featuring
                        panoramic views of the azure coastline. This elegantly appointed
                        suite combines contemporary design with timeless comfort.
                    </p>

                    {/* AMENITIES */}
                    <h3>Room Amenities</h3>
                    <div className="amenities">
                        <span>📶 Free WiFi</span>
                        <span>❄️ Air Conditioning</span>
                        <span>📺 Smart TV</span>
                        <span>☕ Coffee Machine</span>
                        <span>🛎️ Room Service</span>
                        <span>🛁 Marble Bathroom</span>
                    </div>

                    {/* POLICIES */}
                    <h3>Room Policies</h3>
                    <ul className="policies">
                        <li>⏰ Check-in: 3:00 PM – 11:00 PM</li>
                        <li>⏰ Check-out: 12:00 PM</li>
                        <li>🚭 Non-smoking room</li>
                        <li>✅ Free cancellation up to 24 hours before check-in</li>
                    </ul>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="room-sidebar">
                    <h2>$299 <span>/ night</span></h2>

                    <input type="date" />
                    <input type="date" />
                    <select>
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                    </select>

                    <div className="price-breakup">
                        <div><span>$299 × 3 nights</span><span>$897</span></div>
                        <div><span>Service fee</span><span>$45</span></div>
                        <div><span>Taxes</span><span>$67</span></div>
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>$1,009</strong>
                    </div>

                    <button className="book-btn">Book Now</button>
                    <p className="note">You won’t be charged yet</p>
                </div>

            </div>
        </div>
    );
}

export default RoomDetails;
