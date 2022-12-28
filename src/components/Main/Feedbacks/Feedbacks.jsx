import React from 'react';
import './Feedbacks.scss';

const Feedbacks = () => {
  return (
    <section className="feedbacks section" id='feedbacks'>
      <h3 className="feedbacks__title">Відгуки</h3>
      <div className="feedbacks__container container grid">
        <div className="feedbacks__container__feedback">
          <h3 className="feedbacks__container__feedback__name">Vasyl Bobyk</h3>
          <p className="feedbacks__container__feedback__text">Дуже добрі ялинки. Дякую за вашу роботу та старання.</p>
        </div>
        <div className="feedbacks__container__feedback">
          <h3 className="feedbacks__container__feedback__name">Yurii Kulakovskyi</h3>
          <p className="feedbacks__container__feedback__text">Товари дуже гарні та якісні! дякуємо за вашу роботу.</p>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
