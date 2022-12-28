import React from 'react';
import Form from './Form/Form';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact section" id='contact'>
      <div className="contact__container container grid">
        <div className="contact__container__data">
          <h2 className="contact__container__data__title">Залишити відгук</h2>
          <p className="contact__container__data__subtitle">Поіділіться своїми враженнями</p>
        </div>
        <Form />

        <img src={process.env.PUBLIC_URL + '/img/snow-img.webp'} alt="contact snow" className="contact__container__snow-1" />
        <img src={process.env.PUBLIC_URL + '/img/snow-img.webp'} alt="contact snow" className="contact__container__snow-2" />
      </div>
    </section>
  );
}

export default Contact;
