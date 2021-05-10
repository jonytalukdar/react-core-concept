import React, { Component } from 'react';
import Bio from './Bio';
import Links from './Links';
import Skills from './Skills';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <Bio name="Joney Talukdar" title="Front-End developer and Learner" />
        <Skills skillA="Java" skillB="JavaScript" skillC="Python" />
        <Links />
      </div>
    );
  }
}

export default Profile;
