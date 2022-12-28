import React from 'react';
import Contact from './Contact/Contact';
import Feedbacks from './Feedbacks/Feedbacks';
import Home from './Home/Home';
import Trees from './Trees/Trees';

const Main = () => {
  return (
    <main className="main">
      <Home />
      <Trees />
      <Feedbacks />
      <Contact />
    </main>
  );
}

export default Main;
