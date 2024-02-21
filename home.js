import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Indelible Heavy Flamingo</title>
        <meta property="og:title" content="Indelible Heavy Flamingo" />
      </Helmet>
      <button type="button" className="home-button button">
        <span className="home-text">
          <span className="home-text01">INFO</span>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-button1 button">
        <span className="home-text03">
          <span className="home-text04">TIER 2</span>
          <br></br>
        </span>
      </button>
      <header
        data-thq="thq-navbar"
        className="home-navbar-interactive navbarContainer"
      >
        <div className="home-container1">
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links"></nav>
            <div className="home-buttons"></div>
          </div>
        </div>
        <Link to="/" className="home-logo">
          West/Central FFA Tier List
        </Link>
        <a
          href="https://discord.gg/tiertesting"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            alt="stiericon"
            src="https://cdn.discordapp.com/attachments/1202114717129388043/1209306495808708680/44caf00100db356e0364075f3c5fc2bb_1.png?ex=65e67170&amp;is=65d3fc70&amp;hm=ae5841a461ca9a5678688e6ceb95af6523d4f6c04cb6788d9214c6a1c08cddef&amp;"
            loading="eager"
            className="home-image"
          />
        </a>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="home-mobile-menu1 mobileMenu"
        >
          <div className="home-nav">
            <div className="home-top">
              <span className="logo">SPORTTRACKER</span>
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  className="home-icon02 socialIcons"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-nav1 bodySmall">Home</span>
              <span className="home-nav2 bodySmall">Activities</span>
              <span className="home-nav3 bodySmall">Challenges</span>
              <span className="home-nav4 bodySmall">Community</span>
              <span className="home-nav5 bodySmall">Contact</span>
            </nav>
            <div className="home-buttons1">
              <button className="buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="home-icon04 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-icon06 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="home-icon08 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <button type="button" className="home-whiteboyziptu button">
        <span className="home-text06">
          <span>WHITEBOYZIPTU</span>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-tier-1 button">
        <span className="home-text09">
          <span>TIER 1</span>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-tier-3 button">
        <span className="home-text12">TIER 3</span>
      </button>
      <button type="button" className="home-button2 button">
        <span className="home-text13">TIER 4</span>
      </button>
      <button type="button" className="home-button3 button">
        <span className="home-text14">
          <span>TIER 5</span>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-button4 button">
        <span className="home-text17">
          <br></br>
          <br></br>
        </span>
      </button>
      <span className="home-text20">West</span>
      <span className="home-text21">Regions:</span>
      <span className="home-text22">Central</span>
      <span className="home-text23">Cross-region</span>
      <button type="button" className="home-button5 button">
        <span className="home-text24">
          <br></br>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-button6 button">
        <span className="home-text27">
          <br></br>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-button7 button">
        <span className="home-text30">
          <br></br>
          <br></br>
        </span>
      </button>
      <a
        href="https://discord.com/invite/8geUDycZSu"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link1"
      >
        Join the discord to test
      </a>
      <button type="button" className="home-west button">
        <span className="home-text33">
          <br></br>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-west1 button">
        <span className="home-text36">
          <br></br>
          <br></br>
        </span>
      </button>
      <button type="button" className="home-west2 button">
        <span className="home-text39">
          <br></br>
          <br></br>
        </span>
      </button>
      <div className="home-container2">
        <input
          type="text"
          placeholder="Search for a player"
          className="home-textinput input"
        />
        <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
          <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
        </svg>
        <form className="home-form"></form>
      </div>
      <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle"
            >
              <span className="home-text42">Player Stats</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle1"
            >
              <span className="home-text43">Team Stats</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown2 list-item"></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
