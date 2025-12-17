import "./booking.css";
import pr3 from "../assets/prf3.jpg";

function Bookings() {
  return (
    <div className="profile-page">

      <header className="profile-topbar">
        <h2 className="brand">Luxe Haven</h2>

        <nav>
          <a>Home</a>
          <a>Rooms</a>
          <a>About</a>
          <a>Contact</a>
          <a className="active">Profile</a>
        </nav>

        <div className="user-mini">
          <img src={pr3} alt="user" />
          <span>Sarah Johnson</span>
        </div>
      </header>

      <div className="profile-layout">

        <aside className="profile-sidebar">
          <h4>Account</h4>
          <ul>
            <li className="active">Profile</li>
            <li>My Bookings</li>
            <li>Favorites</li>
            <li>Settings</li>
            <li className="logout">Logout</li>
          </ul>
        </aside>

        <main className="profile-content">

          <div className="profile-card">
            <img src={pr3} alt="profile" />
            <div>
              <h3>Sarah Johnson</h3>
              <p>sarah.johnson@gmail.com</p>
              <p>+1 (555) 123-4567</p>
              <span className="badge">Premium Member</span>
              <span className="verified">Verified</span>
            </div>
          </div>

          <section className="box">
            <div className="box-head">
              <h4>Personal Information</h4>
              <button>Edit</button>
            </div>

            <div className="form-grid">
              <input value="Sarah" readOnly />
              <input value="Johnson" readOnly />
              <input value="sarah.johnson@gmail.com" readOnly />
              <input value="+1 (555) 123-4567" readOnly />
              <textarea readOnly>
                123 Main Street, New York, NY 10001
              </textarea>
            </div>
          </section>

          <section className="box">
            <div className="box-head">
              <h4>Saved Payment Methods</h4>
              <button>Add New</button>
            </div>

            <div className="payment-list">
              <div className="payment-row">
                <span>**** **** **** 4242</span>
                <span className="status">Default</span>
              </div>

              <div className="payment-row">
                <span>**** **** **** 8888</span>
              </div>
            </div>
          </section>

          <section className="box">
            <h4>Security Settings</h4>

            <div className="security-row">
              <span>Password</span>
              <button className="outline-btn">Change Password</button>
            </div>

            <div className="security-row">
              <span>Login Notifications</span>
              <input type="checkbox" checked readOnly />
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Bookings;
