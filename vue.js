<template>
  <div class="home-container">
    <button type="button" class="home-button button">
      <span class="home-text">
        <span class="home-text01">INFO</span>
        <br />
      </span>
    </button>
    <button type="button" class="home-button1 button">
      <span class="home-text03">
        <span class="home-text04">TIER 2</span>
        <br />
      </span>
    </button>
    <header data-thq="thq-navbar" class="home-navbar-interactive navbarContainer">
      <div class="home-container1">
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <nav class="home-links"></nav>
          <div class="home-buttons"></div>
        </div>
      </div>
      <router-link to="/home" class="home-logo">
        West/Central FFA Tier List
      </router-link>
      <a
        href="https://discord.gg/tiertesting"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          alt="stiericon"
          src="https://cdn.discordapp.com/attachments/1202114717129388043/1209306495808708680/44caf00100db356e0364075f3c5fc2bb_1.png?ex=65e67170&amp;is=65d3fc70&amp;hm=ae5841a461ca9a5678688e6ceb95af6523d4f6c04cb6788d9214c6a1c08cddef&amp;"
          loading="eager"
          class="home-image"
        />
      </a>
      <div data-thq="thq-burger-menu" class="home-burger-menu">
        <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="home-mobile-menu1 mobileMenu">
        <div class="home-nav">
          <div class="home-top">
            <span class="logo">SPORTTRACKER</span>
            <div data-thq="thq-close-menu" class="home-close-menu">
              <svg viewBox="0 0 1024 1024" class="home-icon02 socialIcons">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="home-links1">
            <span class="home-nav1 bodySmall">Home</span>
            <span class="home-nav2 bodySmall">Activities</span>
            <span class="home-nav3 bodySmall">Challenges</span>
            <span class="home-nav4 bodySmall">Community</span>
            <span class="home-nav5 bodySmall">Contact</span>
          </nav>
          <div class="home-buttons1">
            <button class="buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            class="home-icon04 socialIcons"
          >
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="home-icon06 socialIcons"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="home-icon08 socialIcons"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <button type="button" class="home-whiteboyziptu button">
      <span class="home-text06">
        <span>WHITEBOYZIPTU</span>
        <br />
      </span>
    </button>
    <button type="button" class="home-tier-1 button">
      <span class="home-text09">
        <span>TIER 1</span>
        <br />
      </span>
    </button>
    <button type="button" class="home-tier-3 button">
      <span class="home-text12">TIER 3</span>
    </button>
    <button type="button" class="home-button2 button">
      <span class="home-text13">TIER 4</span>
    </button>
    <button type="button" class="home-button3 button">
      <span class="home-text14">
        <span>TIER 5</span>
        <br />
      </span>
    </button>
    <button type="button" class="home-button4 button">
      <span class="home-text17">
        <br />
        <br />
      </span>
    </button>
    <span class="home-text20">West</span>
    <span class="home-text21">Regions:</span>
    <span class="home-text22">Central</span>
    <span class="home-text23">Cross-region</span>
    <button type="button" class="home-button5 button">
      <span class="home-text24">
        <br />
        <br />
      </span>
    </button>
    <button type="button" class="home-button6 button">
      <span class="home-text27">
        <br />
        <br />
      </span>
    </button>
    <button type="button" class="home-button7 button">
      <span class="home-text30">
        <br />
        <br />
      </span>
    </button>
    <a
      href="https://discord.com/invite/8geUDycZSu"
      target="_blank"
      rel="noreferrer noopener"
      class="home-link1"
    >
      Join the discord to test
    </a>
    <button type="button" class="home-west button">
      <span class="home-text33">
        <br />
        <br />
      </span>
    </button>
    <button type="button" class="home-west1 button">
      <span class="home-text36">
        <br />
        <br />
      </span>
    </button>
    <button type="button" class="home-west2 button">
      <span class="home-text39">
        <br />
        <br />
      </span>
    </button>
    <div class="home-container2">
      <input
        type="text"
        placeholder="Search for a player"
        class="home-textinput input"
      />
      <svg viewBox="0 0 950.8571428571428 1024" class="home-icon10">
        <path
          d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"
        ></path>
      </svg>
      <form class="home-form"></form>
    </div>
    <div data-thq="thq-dropdown" class="home-thq-dropdown list-item">
      <ul data-thq="thq-dropdown-list" class="home-dropdown-list">
        <li data-thq="thq-dropdown" class="home-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" class="home-dropdown-toggle">
            <span class="home-text42">Player Stats</span>
          </div>
        </li>
        <li data-thq="thq-dropdown" class="home-dropdown1 list-item">
          <div data-thq="thq-dropdown-toggle" class="home-dropdown-toggle1">
            <span class="home-text43">Team Stats</span>
          </div>
        </li>
        <li data-thq="thq-dropdown" class="home-dropdown2 list-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: 	#3b3b3b;
}
.home-button {
  top: 149px;
  color: rgb(234, 173, 0);
  right: 22px;
  width: 300px;
  height: 45px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-text01 {
  color: #ffffff;
}
.home-button1 {
  top: 150px;
  left: 360px;
  color: #000000;
  width: 300px;
  height: 45px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text03 {
  font-size: 25px;
}
.home-text04 {
  color: #ffffff;
}
.home-navbar-interactive {
  box-shadow: 5px 5px 10px 0px #2f2f2f;
  background-color: 	#636363;
}
.home-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.home-links {
  flex: 1;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-buttons {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-logo {
  top: 50px;
  color: rgb(255, 255, 255);
  right: 130px;
  margin: auto;
  position: absolute;
  font-size: 22px;
  align-self: center;
  font-style: normal;
  font-family: "Montserrat-Bold";
  font-weight: 400;
  text-decoration: none;
}
.home-image {
  width: 63px;
  height: 78px;
  object-fit: cover;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius4);
  text-decoration: none;
}
.home-image:focus {
  width: 63px;
  height: 78px;
  animation-name: none;
  animation-delay: 0s;
  animation-duration: 2s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-image:hover {
  width: 63px;
  height: 78px;
  z-index: 100;
  border-radius: var(--dl-radius-radius-radius4);
  animation-name: pulse;
  animation-delay: 0s;
  animation-duration: 2s;
  animation-direction: normal;
  border-top-left-radius: var(--dl-radius-radius-radius4);
  border-top-right-radius: var(--dl-radius-radius-radius2);
  animation-iteration-count: 1;
  animation-timing-function: ease;
  border-bottom-left-radius: var(--dl-radius-radius-radius8);
  border-bottom-right-radius: var(--dl-radius-radius-radius4);
}
.home-burger-menu {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
}
.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-nav1 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav2 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav3 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav4 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-nav5 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-whiteboyziptu {
  top: 205px;
  left: 360px;
  color: #ffffff;
  width: 300px;
  height: 26px;
  position: absolute;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #0052C3;
}
.home-text06 {
  top: 4px;
  left: 37px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 16px;
  text-align: left;
  font-family: "Montserrat-Light";
}
.home-tier-1 {
  top: 150px;
  left: 50px;
  color: #000000;
  width: 300px;
  height: 45px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text09 {
  color: #ffbf00;
  font-size: 25px;
}
.home-tier-3 {
  top: 150px;
  left: 670px;
  width: 300px;
  height: 45px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text12 {
  color: #a97142;
  font-size: 25px;
}
.home-button2 {
  top: 150px;
  left: 980px;
  color: rgb(234, 173, 0);
  width: 300px;
  height: 45px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text13 {
  color: #b9f2ff;
  font-size: 25px;
}
.home-button3 {
  top: 150px;
  left: 1290px;
  color: rgb(234, 173, 0);
  width: 300px;
  height: 45px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text14 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-button4 {
  top: 210px;
  color: rgb(234, 173, 0);
  right: 22px;
  width: 300px;
  height: 264px;
  position: absolute;
  box-shadow: rgb(47, 47, 47) 0px 0px 10px 5px;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: rgb(85, 85, 85);
}
.home-text17 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-text20 {
  top: 305px;
  color: rgb(255, 255, 255);
  right: 183px;
  position: absolute;
  font-size: 25px;
  font-family: "Montserrat-Bold";
}
.home-text21 {
  top: 252px;
  color: rgb(255, 255, 255);
  right: 183px;
  position: absolute;
  font-size: 25px;
  font-family: "Montserrat-Bold";
}
.home-text22 {
  top: 359px;
  color: rgb(255, 255, 255);
  right: 154px;
  position: absolute;
  font-size: 25px;
  font-family: "Montserrat-Bold";
}
.home-text23 {
  top: 419px;
  color: rgb(255, 255, 255);
  right: 83px;
  position: absolute;
  font-size: 25px;
  font-family: "Montserrat-Bold";
}
.home-button5 {
  top: 416px;
  color: rgb(234, 173, 0);
  right: 258px;
  width: 16px;
  height: 32px;
  position: absolute;
  box-shadow: 0px 0px 10px 2px rgb(47, 47, 47);
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #A377D8;
}
.home-text24 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-button6 {
  top: 357px;
  color: rgb(234, 173, 0);
  right: 258px;
  width: 16px;
  height: 32px;
  position: absolute;
  box-shadow: 0px 0px 10px 2px rgb(47, 47, 47);
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #FF8080;
}
.home-text27 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-button7 {
  top: 303px;
  color: rgb(234, 173, 0);
  right: 258px;
  width: 16px;
  height: 32px;
  position: absolute;
  box-shadow: 0px 0px 10px 2px rgb(47, 47, 47);
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #B9FFC0;
}
.home-text30 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-link1 {
  top: 223px;
  color: #02aac4;
  right: 51px;
  position: absolute;
  font-size: 20px;
  transition: 0.3s;
  font-family: "Montserrat-Bold";
  text-decoration: none;
}

.home-link1:hover {
  color: #007183;
}
.home-west {
  top: 205px;
  left: 360px;
  color: rgb(234, 173, 0);
  width: 17px;
  height: 26px;
  position: absolute;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #B9FFC0;
}
.home-text33 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-west1 {
  left: 0px;
  color: rgb(234, 173, 0);
  width: 17px;
  bottom: -30px;
  height: 26px;
  position: absolute;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #B9FFC0;
}
.home-text36 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-west2 {
  left: 0px;
  color: rgb(234, 173, 0);
  width: 17px;
  bottom: -60px;
  height: 26px;
  position: absolute;
  font-family: "Montserrat-Bold";
  border-width: 0px;
  border-radius: 12px;
  background-color: #B9FFC0;
}
.home-text39 {
  color: rgb(55, 55, 55);
  font-size: 25px;
}
.home-container2 {
  top: 45px;
  left: 50px;
  width: 235px;
  height: 42.390625px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
}
.home-textinput {
  top: 0px;
  left: 0px;
  color: #e6e6e6;
  position: absolute;
  text-align: center;
  font-family: "Arial";
  border-color: #232323;
  border-style: solid;
  border-radius: 12px;
  background-color: #232323;
  border-top-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 4px;
}
.home-icon10 {
  top: 7px;
  fill: #D9D9D9;
  left: 10px;
  width: 24px;
  height: 24px;
  position: absolute;
}
.home-form {
  width: 200px;
  height: 100px;
  display: flex;
  background-color: #D9D9D9;
}
.home-thq-dropdown {
  top: 478px;
  left: 605px;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius2);
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-thq-dropdown:focus {
  animation-name: none;
}

.home-dropdown-list {
  top: -343px;
  left: -189px;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.home-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-dropdown-toggle:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.home-text42 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.home-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.home-text43 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.home-dropdown2 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 2s;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
@media(max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-desktop-menu {
    display: none;
  }
  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-nav1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-nav5 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu1 {
    padding: 16px;
  }
}
</style>
