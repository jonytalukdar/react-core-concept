import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="bio">
          <h2>Joney Talukdar</h2>
          <h4>Front-end developer and Learner</h4>
        </div>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Social Links:</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Website</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
