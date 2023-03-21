import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="app-home-container">
        <img
          src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="people"
          className="our-parents-image"
        />
        <div className="app-home-content">
          <h1 className="our-aim-to-deliver">
            We transform the new world with healthy and smart, our vision is to
            make a world healthy.
          </h1>
        </div>
      </div>
      <ul className="what-we-do">
        <li className="home-our-features">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4Sub2VKRPULQT8aeJWUtIVUIU3N_lz9Ki5XNhVHPMQ&s"
            alt="blood-pressure"
            className="home-feature-image"
          />
          <p className="home-our-features-content">
            Generally any one can maintain their blood pressure, we are here to
            help you to maintain your blood pressure. Firstly we can provide
            some daily guide you to maintain your blood pressure without giving
            any medication. If it does not work then we can provide medication.
            our 24 * 7 online labs will help you to maintain your blood
            pressure.
          </p>
          <div className="learn-more">
            <Link to="/OnlineLabs">
              <button className="get-details" type="button">
                Take a test
              </button>
            </Link>
          </div>
        </li>
        <li className="home-our-features">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjLPog6L49MTktvN69ny1Cvpu9L1-wp540ISxasE45Q&s"
            alt="sugar-patient"
            className="home-feature-image"
          />
          <p className="home-our-features-content">
            Generally people do not know the Diabetes how to control it. Step 1:
            Learn about diabetes. Step 2: Know your diabetes ABCs Step 3: Learn
            how to live with diabetes Step 4: Get routine care to stay healthy
            our 24 * 7 online labs will help you to maintain your diabetes.
          </p>
          <div className="learn-more">
            <Link to="/OnlineLabs">
              <button className="get-details" type="button">
                Take a test
              </button>
            </Link>
          </div>
        </li>
        <li className="home-our-features">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAdIzbBsGWwP1H71ih08l-jj9e5spNqqOO1RUAplJAQ&s"
            alt="heart-patient"
            className="home-feature-image"
          />
          <p className="home-our-features-content">
            The heart attacks most commonly we see in our surroundings, there
            are more chances to avoid the heart attacks we can maintain our
            food, and daily checkups, and workouts these are some of ideal
            things to avoid the heart attacks. we can treat you best way. our 24
            * 7 online labs will help you to maintain your health.
          </p>
          <div className="learn-more">
            <Link to="/OnlineLabs">
              <button className="get-details" type="button">
                Take a test
              </button>
            </Link>
          </div>
        </li>
        <li className="home-our-features">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U7fcpwpF75DeALKs0CdgM9JcIt_9FhbjcWCKfLq9_g&s"
            alt="asthma-patient"
            className="home-feature-image"
          />
          <p className="home-our-features-content">
            An asthma diagnosis is based on several factors, including a
            detailed medical history, a physical exam, your symptoms, and
            overall health and test results. Now a days we see asthma in
            children, we treat as best possible. our 24 * 7 online labs will
            help you to maintain your health.
          </p>
          <div className="learn-more">
            <Link to="/OnlineLabs">
              <button className="get-details" type="button">
                Take a test
              </button>
            </Link>
          </div>
        </li>
      </ul>
      <div className="old-age-people-treatment-container">
        <h1 className="our-new-feature">
          We come up with a new innovation we thought that all health issues are
          not only treated by medication so we launching this feature for above
          65 years old people
        </h1>
        <Link to="/above65">
          <div className="learn-more">
            <button className="get-details" type="button">
              Get Started
            </button>
          </div>
        </Link>
      </div>
    </div>
  </>
)

export default Home
