import './About.css';
import r1 from "../assets/i1.png";
import pr1 from "../assets/prf1.jpg"
import pr2 from "../assets/prf2.jpg"
import pr3 from "../assets/prf3.jpg"
import { Link } from "react-router-dom";
function About() {
    return (
        <div>
            <div className='about-container'>
                <div className='about-tp-det'>
                    <h1><span>Our</span> Story</h1>
                    <h5>Discover the heritage, passion, and dedication behind Serenity Grand Hotel</h5>
                </div>
            </div>
            <div className='about-nav'>
                <ul>
                    <Link to="/" className="img-banner"><li>Home</li></Link>
                    <i class="fa-solid fa-angles-left"></i>
                                      <li>About us</li>
                </ul>
            </div>
            <div className='about-mid-banner'>
                <div className='about-banner-desc'>
                    <h1>Welcome to <span>Serenity Grand Hotel</span></h1>
                    <p>For over three decades, Serenity Grand Hotel has been a beacon of<br /> luxury and hospitality in the heart of the city. Our commitment to <br />excellence and attention to detail has made us a preferred <br />destination for discerning travelers from around the world.</p>
                    <p>Founded in 1992 with a vision to create an oasis of comfort and <br />elegance, we have continuously evolved while maintaining our core <br />values of exceptional service, authentic hospitality, and creating<br /> unforgettable experiences for every guest.</p>
                    <div className='about-banner-desc-child'>
                        <div className='tiwe'>
                            <h5>30+</h5>
                            <p>Years of Excellence</p>
                            <div class="line1"></div>
                        </div>
                        <div className='tiwe'>
                            <h5>30+</h5>
                            <p>Years of Excellence</p>
                            <div class="line2"></div>
                        </div>
                        <div className='tiwe'>
                            <h5>30+</h5>
                            <p>Years of Excellence</p>
                            <div class="line3"></div>
                        </div>
                    </div>
                </div>
                <div className='about-banner-images'>
                    <img src={r1} alt='about-img'></img>
                    <div className='z1'>
                        <i class="fa-solid fa-star"></i>
                        <div className='q1'>
                            <p>Award Winning</p>
                            <h6>Luxury Hotel 2023</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='missi-banner'>
                <h1>Our Mission</h1>
                <p>"To create extraordinary experiences that exceed expectations, where every<br /> guest feels valued, pampered, and inspired. We believe in the power of <br />genuine hospitality to transform ordinary moments into cherished<br /> memories."</p>
                <div class='missi-line'></div>
            </div>
            <div className='profile-card-banner'>
                <div className='people-profile-info'>
                    <h1>Meet Our Leadership</h1>
                    <p>Our dedicated team of hospitality professionals brings decades of experience<br /> and passion for excellence</p>
                </div>
                <div className='prof-card-parent'>
                    <div className='prof-card-1'>
                        <img src={pr1} alt='profile-1' />
                        <h4>General Manager</h4>
                        <h2>James Mitchell</h2>
                        <p>With 20+ years in luxury hospitality, James leads<br /> our team with vision and dedication to exceptional<br /> service.</p>
                    </div>
                    <div className='prof-card-1'>
                        <img src={pr2} alt='profile-2' />
                        <h4>Executive Chef</h4>
                        <h2>Isabella Rodriguez</h2>
                        <p>With 20+ years in luxury hospitality, James leads<br /> our team with vision and dedication to exceptional<br /> service.</p>
                    </div>
                    <div className='prof-card-1'>
                        <img src={pr3} alt='profile-3' />
                        <h4>Guest Relations</h4>
                        <h2>Michael Chen</h2>
                        <p>With 20+ years in luxury hospitality, James leads<br /> our team with vision and dedication to exceptional<br /> service.</p>
                    </div>
                </div>
            </div>
            <div className='awd-bannner'>
                <div className="info-jsr">
                    <div className='jsr-1'><h1>Awards & Recognition</h1></div>
                    <div className='jsr-2'><span>Our commitment to excellence has been recognized by industry leaders and<br /> guests worldwide</span></div>
                </div>
                <div className="awd-cards">
                    <div className="award-child-1">
                        <i class="fa-solid fa-trophy"></i>
                        <span>Best Luxury Hotel</span>
                        <span>Travel Excellence Awards</span>
                        <span>2023</span>
                    </div>
                    <div className="award-child-1">
                        <i class="fa-solid fa-heart text-red-500 text-2xl"></i>
                        <span>5-Star Rating</span>
                        <span>Global Hotel Standards</span>
                        <span>2022-2023</span>
                    </div>
                    <div className="award-child-1">
                        <i class="fa-solid fa-leaf text-green-500 text-2xl"></i>
                        <span>Guest Choice Award</span>
                        <span>Hospitality Excellence</span>
                        <span>2023</span>
                    </div>
                    <div className="award-child-1">
                        <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                        <span>Eco-Friendly Hotel</span>
                        <span>Green Tourism Board</span>
                        <span>2023</span>
                    </div>
                </div>
            </div>
            <section class="journey">
                <h2>Our Journey</h2>
                <p class="subtitle">
                    Key milestones in our three-decade journey of excellence
                </p>

                <div class="timeline">

                    <div class="item left">
                        <div class="box">
                            <h3>Grand Opening</h3>
                            <p>Serenity Grand Hotel opens its doors with 150 luxury rooms and suites</p>
                        </div>
                        <span class="year">1992</span>
                    </div>

                    <div class="item right">
                        <span class="year">2005</span>
                        <div class="box">
                            <h3>Major Renovation</h3>
                            <p>Complete renovation and expansion adding spa facilities</p>
                        </div>
                    </div>

                    <div class="item left">
                        <div class="box">
                            <h3>First Award</h3>
                            <p>Received our first international recognition for hospitality excellence</p>
                        </div>
                        <span class="year">2010</span>
                    </div>

                    <div class="item right">
                        <span class="year">2020</span>
                        <div class="box">
                            <h3>Digital Innovation</h3>
                            <p>Launched contactless services and smart room technology</p>
                        </div>
                    </div>
                </div>
            </section>
                <div className="btm-banner-1">
                    <div className='btm-banner-1-desc'>
                        <h1>Experience Our Story Firsthand</h1>
                        <span>Join thousands of guests who have made Serenity Grand Hotel their home away from home.<br /> Book your stay today and become part of our continuing story.</span>
                        <div className='button-1-desc'>
                            <button type='submit'><i class="fa-regular fa-calendar"></i>
                                Book your stay</button>
                            <button type='submit'><i class="fa-solid fa-phone"></i>
                                Book your stay</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default About