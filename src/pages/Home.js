import React from "react";
import "../sass/styles.scss";

const Home = () => {
  return (
    <div className="whole-thing">
      <header className="my-home">
        <div className="my-nav">
          <div className="logo">
            <h1>$</h1>
          </div>
          <nav className="this-nav">
            <ul className="nav-ul">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navigation">
          <div className="navigation-checkbox">
            <input type="checkbox" className="navigation-box" id="checkbox" />
            <label htmlFor="checkbox" className="navigation-button"></label>

            <div className="navigation-background">&nbsp</div>
            <nav className="navigation-nav">
              <ul className="navigation-list">
                <li className="navigation-item">
                  <a href="#">About</a>
                </li>
                <li className="navigation-item">
                  <a href="#">Your benefits</a>
                </li>
                <li className="navigation-item">
                  <a href="#">Popular tours</a>
                </li>
                <li className="navigation-item">
                  <a href="#">Stories</a>
                </li>
                <li className="navigation-item">
                  <a href="#">Book now</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="box">
          <div className="header-box">
            <h2>My title is greater</h2>{" "}
          </div>
          <div className="header-sub">
            {" "}
            <p>
              Lot of times humans face difficult situation.{" "}
              <span>they fight or flight</span>
            </p>
          </div>
          <a href="#" className="header-btn">
            Learn more
          </a>
        </div>
      </header>
      <section className="second-section">
        <div className="second-sec-title">
          <div className="u-center-text">
            <h2>Welcoming tours destination</h2>
          </div>
        </div>
        <div className="row">
          <div className="second-sec-matter">
            <p>
              Low Prices on a range of soaps, creams, face washes, facial kits &
              more. Buy now! Huge Selection. Great Offers. Best Deals. No Cost
              EMI Available. Low Prices. Easy & Fast Delivery. Top Brands.
            </p>
            <hr className="line" />

            <p>Low Prices. Easy & Fast Delivery. Top Brands.</p>
          </div>
          <div className="second-sec-images">
            <a href="http://newglobaldental.com">
              <img
                className="my-image img1"
                src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg"
              />
            </a>
            <a href="http://newglobaldental.com">
              <img
                className="my-image img2"
                src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg"
              />
            </a>
            <a href="http://newglobaldental.com">
              <img
                className="my-image img3"
                src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="row">
          <div className="feature-box">
            <div className="feature-title">
              <h5>New one here</h5>
            </div>
            <div className="feature-matter">
              <div className="icon"></div>
              <div className="feature-para">
                <p>Hi we are ready for the dooms day</p>
              </div>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-title">
              <h5>New one here</h5>
            </div>
            <div className="feature-matter">
              <div className="icon"></div>
              <div className="feature-para">
                <p>Hi we are ready for the dooms day</p>
              </div>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-title">
              <h5>New one here</h5>
            </div>
            <div className="feature-matter">
              <div className="icon"></div>
              <div className="feature-para">
                <p>Hi we are ready for the dooms day</p>
              </div>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-title">
              <h5>New one here</h5>
            </div>
            <div className="feature-matter">
              <div className="icon"></div>
              <div className="feature-para">
                <p>Hi we are ready for the dooms day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-price">
        <div className="price-title">
          <h3>Lower prices for all</h3>
        </div>
        <div className="price-cards">
          <div className="row">
            <div className="price-card">
              <div className="card-side front">
                <div className="card-side-front image">
                  <div className="card-side-front image-title">
                    <h4>Close war</h4>
                  </div>
                </div>
                <div className="card-side-front title">
                  <h5>Normal rater</h5>
                </div>
                <div className="card-side-front details">
                  <ul className="card-side-front ul">
                    <li>noraml rater</li>
                    <li>noraml rater</li>
                    <li>noraml rater</li>
                  </ul>
                </div>
              </div>
              <div className="card-side back">
                <h4 className="card-side-back title">
                  click away from your favorite hotels
                </h4>
                <a href="#" className="card-side-back link">
                  Book Now
                </a>
              </div>
            </div>
            <div className="price-card">
              <div className="card-side front">
                <div className="card-side-front image">
                  <div className="card-side-front image-title">
                    <h4>Close war</h4>
                  </div>
                </div>
                <div className="card-side-front title">
                  <h5>Normal rater</h5>
                </div>
                <div className="card-side-front details">
                  <ul className="card-side-front ul">
                    <li>noraml rater</li>
                    <li>noraml rater</li>
                    <li>noraml rater</li>
                  </ul>
                </div>
              </div>
              <div className="card-side back">
                <h4 className="card-side-back title">
                  click away from your favorite hotels
                </h4>
                <a href="#" className="card-side-back link">
                  Book Now
                </a>
              </div>
            </div>
            <div className="price-card">
              <div className="card-side front">
                <div className="card-side-front image">
                  <div className="card-side-front image-title">
                    <h4>Close war</h4>
                  </div>
                </div>
                <div className="card-side-front title">
                  <h5>Normal rater</h5>
                </div>
                <div className="card-side-front details">
                  <ul className="card-side-front ul">
                    <li>noraml rater</li>
                    <li>noraml rater</li>
                    <li>noraml rater</li>
                  </ul>
                </div>
              </div>
              <div className="card-side back">
                <h4 className="card-side-back title">
                  click away from your favorite hotels
                </h4>
                <a href="#" className="card-side-back link">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="bg-video">
          <source
            src="https://static.videezy.com/system/resources/previews/000/005/357/original/23.mp4"
            type="video/mp4"
          />
        </div>
        <div className="test-column">
          <div className="test title">
            <h3 className="testing h2">Customer speaks</h3>
          </div>

          <div className="test materials">
            <div className="test testimonial">
              <div className="test image-details">
                <div className="test image"></div>
                <div className="test image-caption">
                  Stacy <br></br>martin
                </div>
              </div>
              <div className="test matter">
                Need a person who is good at minimal responsive design. Site
                will have the front page have mainly form elements. Other pages
                will have text and information. This is a simple site with a
                small database backend where the user chooses 4/5 options and
                then is shown a result. Main things are fast and responsive and
                I need it done in the next day or so.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-booking">
        <div className="booking-bg">
          <div className="booking-bg-form">
            <div className="booking-bg-form-title">
              <h4>Start Booking Now</h4>
            </div>
            <form action="#" className="booking-bg-form-d">
              <div className="booking-bg-form-email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="booking-bg-form-input"
                  required
                />
                <label htmlFor="email" className="booking-bg-form-label">
                  Email
                </label>
              </div>
              <div className="booking-bg-form-password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="booking-bg-form-input"
                  required
                />
                <label htmlFor="password" className="booking-bg-form-label">
                  password
                </label>
              </div>
              <div className="booking-bg-form-radio">
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  className="booking-bg-form-radio-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

//            <img className="my-image img2" src="https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/YouTube.png" />

// <img
//               className="my-image img3"
//               src="https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/YouTube.png"
//               width="200px"
//               height="200px"
//             />

// <img
//               className="my-image img1"
//               src="https://cdn2.iconfinder.com/data/icons/emotion-color-line/48/emotion_pixel_perfect_color_line_icons_17-funny-512.png"
//               width="200px"
//               height="200px"
//             />
