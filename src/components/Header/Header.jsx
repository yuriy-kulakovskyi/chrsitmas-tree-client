import React, { useEffect, useRef } from 'react';
import './Header.scss';

const Header = () => {
  const navMenu = useRef(),
    navToggle = useRef(),
    navClose = useRef(),
    header = useRef();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollUp = document.querySelector(".scrollup");

    const navLink = document.querySelectorAll(".header__nav__list__item__link");
    navLink.forEach(n => n.onclick = () => {navMenu.current.classList.remove("show-menu");});

    navToggle.current.onclick = () => {
      navMenu.current.classList.add('show-menu');
    };

    navClose.current.onclick = () => {
      navMenu.current.classList.remove('show-menu');
    };

    window.onscroll = () => {

      window.scrollY >= 50 ? header.current.classList.add('bg-header')
        : header.current.classList.remove('bg-header');

      window.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");

      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionsClass = document.querySelector('.header__nav__menu a[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link');
        } else {
          sectionsClass.classList.remove('active-link');
        }
      });
    }
  }, []);

  return (
    <header className="header" ref={header}>
      <nav className="header__nav container">
        <h2 className="header__nav__logo">
          <img className='header__nav__logo__image' src={process.env.PUBLIC_URL + '/img/logo.webp'} alt="" />
          Christmas tree
        </h2>

        <div className="header__nav__menu" ref={navMenu}>
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <a className='header__nav__list__item__link active-link' href="#home">Головна</a>
            </li>
            <li className="header__nav__list__item">
              <a className='header__nav__list__item__link' href="#trees">Ялинки</a>
            </li>
            <li className="header__nav__list__item">
              <a className='header__nav__list__item__link' href="#feedbacks">Відгуки</a>
            </li>
            <li className="header__nav__list__item">
              <a className='header__nav__list__item__link' href="#contact">Контакти</a>
            </li>
          </ul>

          {/* Close button */}
          <div className="header__nav__close" ref={navClose}>
            <svg viewport="0 0 12 12" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11"
                x2="11" y2="1"
                stroke="#fff"
                strokeWidth="2" />
              <line x1="1" y1="1"
                x2="11" y2="11"
                stroke="#fff"
                strokeWidth="2" />
            </svg>
          </div>

          <img src={process.env.PUBLIC_URL + '/img/snow-img.webp'} alt="" className="header__nav__img image1" />
          <img src={process.env.PUBLIC_URL + '/img/snow-img.webp'} alt="" className="header__nav__img image2" />
        </div>

        {/* Toggle button */}
        <div className="header__nav__toggle" ref={navToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd" stroke="#fff"><rect width="8" height="8" x="2.5" y="2.5" rx="2"/><rect width="8" height="8" x="13.5" y="2.5" rx="2"/><rect width="8" height="8" x="2.5" y="13.5" rx="2"/><rect width="8" height="8" x="13.5" y="13.5" rx="2"/></g></svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
