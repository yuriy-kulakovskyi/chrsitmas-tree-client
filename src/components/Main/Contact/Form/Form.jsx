import React from 'react';
import './Form.scss';

class Form extends React.Component {
  render () {
    return (
      <form action="https://formspree.io/f/mknaweej"
      method="POST">
        <input placeholder='Ваше імʼя' type="text" name="user_name" />
        <input placeholder='Електронна скринька' type="email" name="user_email" />
        <textarea placeholder='Відгук' name="message" />
        <button type="submit">Відправити</button>
      </form>
    )
  }
};

export default Form;