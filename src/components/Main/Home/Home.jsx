import React, { useEffect } from 'react';
import './Home.scss';
import Rellax from "rellax";

const Home = () => {

  useEffect(() => {
    let parallax = new Rellax('.parallax');
  }, []);


  return (
    <section className="home section" id='home'>
      <h1 className="home__title">Замовляйте в нас ялинки, не загубим ні хвоїнки!</h1>
      <img src={process.env.PUBLIC_URL + '/img/home-moon.webp'} alt="home background" className="home__moon parallax" data-rellax-speed="-15" />
      <img src={process.env.PUBLIC_URL + '/img/home-trineo-santa.webp'} alt="home trineo" className="home__trineo parallax" data-rellax-speed="-2" />
      <img src={process.env.PUBLIC_URL + '/img/home-mountain-3.webp'} alt="home mountain" className="home__mountain-3 parallax" data-rellax-speed="-8" />
      <img src={process.env.PUBLIC_URL + '/img/home-mountain-2.webp'} alt="home mountain" className="home__mountain-2 parallax" data-rellax-speed="-8" />
      <img src={process.env.PUBLIC_URL + '/img/home-pine-tree.webp'} alt="home pine tree" className="home__pine parallax" data-rellax-speed="-10" />
      <img src={process.env.PUBLIC_URL + '/img/home-village.webp'} alt="home village" className="home__village parallax" data-rellax-speed="-10" />
      <img src={process.env.PUBLIC_URL + '/img/home-snow.webp'} alt="home snow" className="home__snow parallax" />
      <img src={process.env.PUBLIC_URL + '/img/home-mountain-1.webp'} alt="home village" className="home__mountain-1 parallax" />
    </section>
  );
}

export default Home;
