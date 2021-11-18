import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from "./Footer"
import Header from "./Header"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  <Header />

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  

  return (
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
