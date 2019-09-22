import React, { Component } from 'react';

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  render() {
    return (
      <div className='pa4 tc'>
        <img
          src='http://tachyons.io/img/logo.jpg'
          class='br-100 ba h3 w3 dib'
          alt='avatar'
        />
      </div>
    );
  }
}
export default ProfileIcon;
