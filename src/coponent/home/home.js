import React from 'react';
import Header from '../header/header';
import Feature from '../feature/feature';
import './home.css';

function Home() {
  const viewChits = () => {
    alert("View Chits button clicked");
    // Implement navigation or action for viewing chits
  };

  const addNewChit = () => {
    alert("Add New Chit button clicked");
    // Implement navigation or action for adding a new chit
  };

  return (
    <div className="Home">
      <Header />
      <section className="features">
        <Feature 
          title="View Chits" 
          description="Access all your chit records in one place." 
          buttonText="View Chits"
          onClick={viewChits} 
        />
        <Feature 
          title="Add New Chit" 
          description="Create and manage new chit entries with ease." 
          buttonText="Add New Chit"
          onClick={addNewChit} 
        />
      </section>
    </div>
  );
}

export default Home;
