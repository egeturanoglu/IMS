import React from 'react';

function Home() {
    return (
        <div className="container">
        <div className="top-bar"></div>
        <div className="sidebar"></div>
        <div className="announcement-section">
          <div className="title">announcements</div>
          <div className="underline"></div>
          <p>Currently, there are no announcements.</p>
        </div>
      </div>
    );
    }

export default Home;