import React, { useState } from 'react';
import './Home.css';
import iyte_icon from '../Components/Assets/iyte-logo.png';

function Home() {
  // States to manage the visibility of dropdowns for each button
  const [showDropdown, setShowDropdown] = useState({ btn1: false, btn2: false, btn3: false, btn4: false});

  // Toggle dropdown visibility
  const toggleDropdown = (btn) => {
    setShowDropdown((prev) => ({ ...prev, [btn]: !prev[btn] }));
  };

  return (
    <div className="container">
      <div className="top-bar">
        <img src={iyte_icon} alt="" className="iyte-logo" />
      </div>
      <div className="sidebar">
        {/* Button 1 */}
        <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn1')}
          onMouseLeave={() => toggleDropdown('btn1')}
        >
          Button 1
          {showDropdown.btn1 && <div className="dropdown-content">Dropdown 1</div>}
        </div>
        {/* Button 2 */}
        <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn2')}
          onMouseLeave={() => toggleDropdown('btn2')}
        >
          Button 2
          {showDropdown.btn2 && <div className="dropdown-content">Dropdown 2</div>}
        </div>
        {/* Button 3 */}
        <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn3')}
          onMouseLeave={() => toggleDropdown('btn3')}
        >
          Button 3
          {showDropdown.btn3 && <div className="dropdown-content">Dropdown 3</div>}
        </div>
          {/* Button 4 */}
              <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn4')}
          onMouseLeave={() => toggleDropdown('btn4')}
        >
          Button 4
          {showDropdown.btn4 && <div className="dropdown-content">Dropdown 4</div>}
        </div>
      </div>
      <div className="announcement-section">
        <div className="title">Announcements</div>
        <div className="title-underline"></div>
        <div className="text">Currently, there are no announcements.</div>
      </div>
    </div>
  );
}

export default Home;
