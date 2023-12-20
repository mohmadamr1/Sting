import React from 'react';
import '../src/Home.css'

const Homepage = () => {
    return (
        <div className="all-page">
      <div className="grid-container-home">
        <div className="title-and-get">
          <h2>Unlock the World of Coding</h2>
          <h1>Learn to Code from Scratch</h1>
          <p>Empower yourself with the skills to build, innovate, and transform ideas into reality. Our interactive learning platform is designed to take you from coding novice to proficient developer.<br>
          </br> Start your coding journey today!</p>
          <a id="get-started" to="/get-started" className="GET-STARTED">
            Get Started
          </a>
        </div>
      </div>
    </div>
    );
}

export default Homepage;
