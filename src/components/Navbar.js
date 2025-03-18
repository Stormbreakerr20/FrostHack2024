import React, { useState, Fragment } from "react";

export const Navbar = (props) => {
  /* Navbar style with Screenwidth */
  const changeNavbar = () => {
    if (window.innerWidth > 767) {
      var elt = document.getElementById("nav");
      elt.style.display = "block";
    } else {
      var elt = document.getElementById("nav");
      elt.style.display = "none";
    }
  };
  window.addEventListener("resize", changeNavbar);
  /* Navbar style with Screenwidth */

  /* Mobile Navbar Onclick Function*/
  const styleChange = (id) => {
    var elt = document.getElementById(id);
    elt.style.display = elt.style.display === "block" ? "none" : "block";
  };
  const showNavbar = () => {
    if (window.innerWidth > 767) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };
  /* Mobile Navbar Onclick Function*/

  function stop() {
    document.getElementById("timeline").stop();
  }
  function strt() {
    document.getElementById("timeline").start();
  }

  return (
    <header id="header" className="transparent-navbar navTop">
      {/* <marquee
        id="timeline"
        className="changecolor"
        onMouseOver={stop}
        onMouseOut={strt}
      >
        {" "}
        Coming Soon! Stay tuned for updates.{" "}
      </marquee> */}
      <div className="container">
        {/*navbar header */}
        <div className="navbar-header">
          {/* <!-- Logo --> */}
          <div className="navbar-brand">
            <a className="logo" href="/">
              <img
                id="image2"
                className="logo-img"
                src="./img/logos/wide-small-white.png"
                alt="logo"
              />
              <img
                id="image1"
                className="logo-alt-img"
                src="./img/logos/wide-small.png"
                alt="logo"
              />
            </a>
          </div>
          {/* <!-- /Logo --> */}

          {/* <!-- Mobile toggle --> */}
          <button className="navbar-toggle" onClick={() => styleChange("nav")}>
            <i className="fas fa-bars"></i>
          </button>
          {/* <!-- /Mobile toggle --> */}
        </div>
        {/* <!-- /navbar header --> */}

        {/* <!-- Navigation --> */}
        <nav id="nav" style={showNavbar()}>
          <ul className="main-nav nav navbar-nav navbar-right">
            {/* <!-- <li><a href="#home">Top</a></li> --> */}
            <li>
              <a id="1" href="index#about">
                About
              </a>
            </li>
            {/* <li><a id="2" href="index#schedule">Schedule</a></li> */}
            <li>
              <a id="2" href="index#sponsors">
                Sponsors
              </a>
            </li>
            <li>
              <a id="3" href="index#faq">
                FAQ
              </a>
            </li>
            <li>
              <a
                id="3"
                href="https://drive.google.com/file/d/1TnVb9g-SfrbhU-UMPQSlbYjxOdSX0KSi/view"
                target="_blank"
              >
                Rulebook
              </a>
            </li>
            {/* <li>
              <a
                id="4"
                href="https://frosthack-2k23.devfolio.co/"
                target="_blank"
              >
                Register
              </a>
            </li> */}
            {/* <li><a id="4" href="/judges">Judges</a></li> */}
            {/* <li>
              <a id="5" href="/mentors">
                Mentors
              </a>
            </li> */}
            {/* <li>
              <a id="6" href="/teams">
                Team
              </a>
            </li> */}
          </ul>
        </nav>
        {/* <!-- /Navigation --> */}
      </div>
      {/* <!-- /container --> */}
    </header>
  );
};
