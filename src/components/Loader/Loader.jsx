import React, { useRef, useEffect } from 'react';
import './Loader.scss';
import { gsap } from "gsap";

const Loader = () => {
  const button = useRef();
  const txt = useRef();
  const loader = useRef();

  useEffect(() => {
    if (button.current) {
      button.current.value = 0;
    }
  }, []);

  const oninput = () => {
    txt.current.style.opacity = 1 - button.current.value / 100;
    loader.current.style.opacity = 1 - button.current.value / 100;

    if (loader.current.style.opacity === "0") {
      loader.current.style.display = 'none';
    }
  }
  
  const onmouseup = () => {
    if (button.current.value < 100) {
      button.current.value = 0;
      txt.current.style.opacity = 1 - button.current.value / 100;
      loader.current.style.opacity = 1 - button.current.value / 100;
    } 

    setTimeout(() => {
      gsap.from(".home__village", 1.2, {opacity: 0, y: 100, delay: .1});
      gsap.to(".home__village", 1.2, {opacity: 1, y: 0, delay: .1});
  
      gsap.from(".home__pine", 1.2, {opacity: 0, y: 150, delay: .3});
      gsap.to(".home__pine", 1.2, {opacity: 1, y: 0, delay: .3});
  
      gsap.from(".home__mountain-1", 1.2, {opacity: 0, y: 250, delay: .7});
      gsap.to(".home__mountain-1", 1.2, {opacity: 1, y: 0, delay: .7});
  
      gsap.from(".home__mountain-2", 1.2, {opacity: 0, x: 150, delay: .5});
      gsap.to(".home__mountain-2", 1.2, {opacity: 1, x: 0, delay: .5});
  
      gsap.from(".home__mountain-3", 1.2, {opacity: 0, x: -150, delay: .6});
      gsap.to(".home__mountain-3", 1.2, {opacity: 1, x: 0, delay: .6});
  
      gsap.from(".home__moon", 1.2, {opacity: 0, y: 200, delay: .8});
      gsap.to(".home__moon", 1.2, {opacity: 1, y: 0, delay: .8});
  
      gsap.from(".home__trineo", 1.2, {opacity: 0, x: -200, delay: .8});
      gsap.to(".home__trineo", 1.2, {opacity: 1, x: 0, delay: .8});
  
      gsap.from(".home__title", 1.2, {opacity: 0, y: -60, delay: 1});
      gsap.to(".home__title", 1.2, {opacity: 1, y: 0, delay: 1});

      document.body.style.overflowY = "scroll";
      document.querySelector(".center-xy").style.display = 'none';
    }, 50);
  }

  return (
    <div ref={loader} className='loader center-xy'>
      <input onInput={oninput} onMouseUp={onmouseup} type="range" className="pullee" ref={button} />
      <span ref={txt}>Проведіть</span>
    </div>
  );
}

export default Loader;
