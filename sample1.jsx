import "./sample1.css";
import logo2 from "../assets/OIP.jpeg";

function Frame11() {
  return (
    <div className="frame11-page">

      {/* HERO */}
      <div className="frame11-home-banner">
        <h1>Rooms & Suites</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum consequuntur velit, quisquam asperiores soluta.
        </span>
      </div>

      {/* SEARCH BAR */}
      <div className="frame11-middle-banner">
        <div className="frame11-search-box">

          <div className="frame11-banner-child">
            <label>Check-in</label>
            <input type="date" />
          </div>

          <div className="frame11-banner-child">
            <label>Check-out</label>
            <input type="date" />
          </div>

          <div className="frame11-banner-child">
            <label>Guests</label>
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
            </select>
          </div>

          <div className="frame11-banner-child">
            <label>Rooms</label>
            <select>
              <option>All Rooms</option>
              <option>1 Room</option>
              <option>2 Rooms</option>
            </select>
          </div>

          <button className="frame11-search-btn">
            Search Rooms
          </button>

        </div>
      </div>

      {/* FILTER */}
      <div className="frame11-filter-banner">
        <div className="frame11-filter-box">

          <div className="frame11-filter-item">
            <i className="fa-solid fa-dollar-sign"></i>
            <span>Price</span>
          </div>

          <div className="frame11-filter-item">
            <i className="fa-solid fa-user"></i>
            <span>Guests</span>
          </div>

          <div className="frame11-filter-item">
            <i className="fa-solid fa-star"></i>
            <span>Amenities</span>
          </div>

        </div>
      </div>

      {/* ROOMS */}
      <div className="frame11-room-grid">

        <div className="frame11-room-card">
          <img src={logo2} alt="room" />
          <h3>Deluxe King Room</h3>
          <p>Spacious room with modern amenities.</p>

          <div className="frame11-room-footer">
            <span>$299 / night</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="frame11-room-card">
          <img src={logo2} alt="room" />
          <h3>Premium Suite</h3>
          <p>Luxury suite with city view.</p>

          <div className="frame11-room-footer">
            <span>$399 / night</span>
            <button>View Details</button>
          </div>
        </div>

        <div className="frame11-room-card">
          <img src={logo2} alt="room" />
          <h3>Executive Room</h3>
          <p>Perfect for business travelers.</p>

          <div className="frame11-room-footer">
            <span>$349 / night</span>
            <button>View Details</button>
          </div>
        </div>

      </div>

      {/* LOAD MORE */}
      <div className="frame11-load-more">
        <button>Load More Rooms</button>
      </div>

    </div>
  );
}

export default Frame11;
