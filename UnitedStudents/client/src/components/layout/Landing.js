import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">We The Developers</h1>
          <p className="lead">
            Meet new people, who share the same passion as you do!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary btn-animation">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light btn-animation">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
