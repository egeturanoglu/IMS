import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import iyte_icon from '../Components/Assets/iyte-logo.png';
import user_icon from '../Components/Assets/user.png';
import settings_icon from '../Components/Assets/settings.png';
import internship_icon from '../Components/Assets/internship.png';
import documents_icon from '../Components/Assets/documents.png';
import admin_icon from '../Components/Assets/shield.png';
import company_icon from '../Components/Assets/company.png';
import profile_icon from '../Components/Assets/profile-picture.png'

function Profile() {
  const [showDropdown, setShowDropdown] = useState({
    btn1: false,
    btn1_1: false,
    btn1_2: false,
    btn2: false,
    btn2_1: false, 
    btn2_2: false,
    btn3: false,
    btn3_1: false, 
    btn3_2: false,
    btn4: false,
  });

  const toggleDropdown = (btn) => {
    setShowDropdown((prev) => ({ ...prev, [btn]: !prev[btn] }));
  };
  
   const [userName, setUserName] = useState('-'); // Example user name, replace with dynamic data
   const [userEmail, setUserEmail] = useState('-'); // Example user email, replace with dynamic data
  

  return (
    <div className="Profile-layout">
      <div className="top-bar">
        <img src={iyte_icon} alt="" className="iyte-logo" />
      </div>
      
      <div className="sidebar">
        <div className="info-blocks">
          <div className="internship-info">
            <img src={admin_icon} alt="" className="admin-icon" />
            <h4>Internship Coordinator</h4>
            <div>Name: -</div>
          </div>
          <div className="company-info">
            <img src={company_icon} alt="" className="company-icon" />
            <h4>Company</h4>
            <div>Name: -</div>
          </div>
        </div>

        {/* Button 1 */}
        <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn1')}
          onMouseLeave={() => toggleDropdown('btn1')}
        >
          <img src={internship_icon} alt="Person" className="internship-icon" />
          Internship Operations
          {showDropdown.btn1 && (
            <div className="dropdown-content">
              <Link to="/apply" className="link-button">Apply for Internship</Link>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn1_1')}
                onMouseLeave={() => toggleDropdown('btn1_1')}
              >
              <Link to="/companies" className="link-button">Companies</Link>
                
              </div>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn1_2')}
                onMouseLeave={() => toggleDropdown('btn1_2')}
              >
                <Link to="" className="link-button">Upload Documents</Link>
                {showDropdown.btn1_2 && <div className="mlink-button"> Upload Application Form</div>}
                {showDropdown.btn1_2 && <div className="mlink-button"> Upload Summer Practice Report</div>}
                {showDropdown.btn1_2 && <div className="mlink-button"> Upload Survey</div>}
              </div>
            </div>
          )}
        </div>

        {/* Button 2 */}
        <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn2')}
          onMouseLeave={() => toggleDropdown('btn2')}
        >
          <img src={user_icon} alt="Person" className="user-icon" />
          User Actions
          {showDropdown.btn2 && (
            <div className="dropdown-content">
              <Link to="/profile" className="link-button">Profile</Link>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn2_1')}
                onMouseLeave={() => toggleDropdown('btn2_1')}
              >
                <a href="https://ubys.iyte.edu.tr" className="link-button" target="_blank" rel="noopener noreferrer">UBYS</a>
                
              </div>

            </div>
          )}
        </div>
        {/* Button 3 */}
        <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn3')}
          onMouseLeave={() => toggleDropdown('btn3')}
        >
          <img src={documents_icon} alt="Person" className="documents-icon" />
          General Documents
          {showDropdown.btn3 && (
            <div className="dropdown-content">
              <Link to="" className="link-button">User Guide</Link>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn3_1')}
                onMouseLeave={() => toggleDropdown('btn3_1')}
              >
                <Link to="" className="link-button">SGK Employment Certificate</Link>
                {showDropdown.btn3_1 && <div className="mlink-button"> Download</div>}
              </div>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn3_2')}
                onMouseLeave={() => toggleDropdown('btn3_2')}
              >
                <a href="https://iyte.edu.tr" className="link-button" target="_blank" rel="noopener noreferrer">IZTECH Page</a>
                
              </div>
            </div>
          )}
        </div>
          {/* Button 4 */}
          <div
          className="sidebar-btn"
          onMouseEnter={() => toggleDropdown('btn4')}
          onMouseLeave={() => toggleDropdown('btn4')}
        >
          <img src={settings_icon} alt="Person" className="settings-icon" />
          General Settings
          {showDropdown.btn4 && (
            <div className="dropdown-content">
              <Link to="/user_settings" className="link-button">User Settings</Link>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn4_1')}
                onMouseLeave={() => toggleDropdown('btn4_1')}
              >
                <a href="https://ubysdestek.iyte.edu.tr" className="link-button" target="_blank" rel="noopener noreferrer">Help</a>
                
              </div>
              <div
                className="nested-dropdown"
                onMouseEnter={() => toggleDropdown('btn4_2')}
                onMouseLeave={() => toggleDropdown('btn4_2')}
              >
                <Link to="/log_out" className="link-button">Log out</Link>
                
              </div>
            </div>
          )}
        </div>

      </div>
        <div className="profile-section">
            <img src={profile_icon} alt="" className="profile-icon" />
            <h2>User Profile</h2>
            
            <div className="profile-item">
                <label>User Name: <div>{userName}</div></label>
            </div>
            
            <div className="profile-item">
                <label>User Email:<div>{userEmail}</div></label>
            </div>
            <div className="profile-item">
                <label>Coordinator:<div>-</div></label>
            </div>
        </div>
    </div>
  );
}

export default Profile;
