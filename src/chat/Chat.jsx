import React, { useEffect, useRef } from 'react';
import './Chat.scss';

const Chat = () => {
  const send = useRef();
  const chatArea = useRef();
  const input = useRef();

  const botSendMessage = (message) => {
    const botLi = document.createElement("li");
    const botP = document.createElement("p");

    botLi.classList.add("chat__main__messages-area__message-wrap");
    botLi.classList.add("bot");

    botP.classList.add("chat__main__messages-area__message-wrap__message");
    botP.classList.add("bot__message");

    botP.innerHTML = message;
    botLi.append(botP);

    setTimeout(() => {
      document.querySelector(".chat__main__messages-area").append(botLi);
    }, 500);
  }

  useEffect(() => {

    const good = {
      name: '',
      price: '',
      img: ''
    }

    let name = '';
    let price = '';
    let img = '';

    send.current.onclick = () => {
      const li = document.createElement("li");
      const p = document.createElement("p");

      li.classList.add("chat__main__messages-area__message-wrap");
      li.classList.add("user");

      p.classList.add("chat__main__messages-area__message-wrap__message");
      p.classList.add("user__message");

      p.innerText = input.current.value;

      if (p.innerText[0] === '/') {
        p.style.color = 'rgb(115, 177, 233)';
        p.style.cursor = 'pointer';
      }

      li.append(p);

      chatArea.current.append(li);

      input.current.value = '';

      if (p.innerText === '/start') {
        botSendMessage("Вітаю. Як можу допомогти?");
      }

      if (p.innerText === '/info') {
        botSendMessage("Використайте команди, щоб додати товар");

        setTimeout(() => botSendMessage("/name - імʼя товару <br> /img - фото товару <br> /price - ціна товару <br> /save - зберегти товар"), 500);
      }

      if (p.innerText === '/name') {
        const botLi = document.createElement("li");
        const botP = document.createElement("p");
        const input = document.createElement("input");
        const button = document.createElement("button");
        const div = document.createElement("div");

        button.innerHTML = `<svg fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>`;

        div.classList.add("row");
        div.append(input);
        div.append(button);

        botLi.classList.add("chat__main__messages-area__message-wrap");
        botLi.classList.add("bot");

        botP.classList.add("chat__main__messages-area__message-wrap__message");
        botP.classList.add("bot__message");

        botP.innerText = "Вкажіть назву товару";
        botLi.append(botP);
        botLi.append(div);

        button.onclick = () => {
          name = input.value;
          input.value = '';
          div.style.display = 'none';
          botSendMessage("Успіх");
        }

        setTimeout(() => {
          document.querySelector(".chat__main__messages-area").append(botLi);
        }, 500);
      }

      if (p.innerText === '/img') {
        const botLi = document.createElement("li");
        const botP = document.createElement("p");
        const input = document.createElement("input");
        const button = document.createElement("button");
        const div = document.createElement("div");

        button.innerHTML = `<svg fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>`;

        div.classList.add("row");
        div.append(input);
        div.append(button);

        button.onclick = () => {
          img = input.value;
          input.value = '';
          div.style.display = 'none';
          botSendMessage("Успіх");
        }

        botLi.classList.add("chat__main__messages-area__message-wrap");
        botLi.classList.add("bot");

        botP.classList.add("chat__main__messages-area__message-wrap__message");
        botP.classList.add("bot__message");

        botP.innerText = "Введіть URL зображення товару";
        botLi.append(botP);
        botLi.append(div);

        setTimeout(() => {
          document.querySelector(".chat__main__messages-area").append(botLi);
        }, 500);
      }

      if (p.innerText === '/price') {
        const botLi = document.createElement("li");
        const botP = document.createElement("p");
        const input = document.createElement("input");
        const button = document.createElement("button");
        const div = document.createElement("div");

        button.innerHTML = `<svg fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20px" height="20px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>`;

        div.classList.add("row");
        div.append(input);
        div.append(button);

        button.onclick = () => {
          price = input.value;
          input.value = '';
          div.style.display = 'none';
          botSendMessage("Успіх");
        }

        botLi.classList.add("chat__main__messages-area__message-wrap");
        botLi.classList.add("bot");

        botP.classList.add("chat__main__messages-area__message-wrap__message");
        botP.classList.add("bot__message");

        botP.innerText = "Введіть ціну товару";
        botLi.append(botP);
        botLi.append(div);

        setTimeout(() => {
          document.querySelector(".chat__main__messages-area").append(botLi);
        }, 500);
      }

      if (p.innerText === '/save') {
        good.name = name;
        good.img = img;
        good.price = price;

        sendInfo(good);

        function sendInfo(formData) {
          fetch('https://chrsitmas-tree-server.onrender.com/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(_ =>{
            botSendMessage("Дякую! Товар успішно додано");
        })
        .catch(error => console.log(error));
        }
      }
    }
  }, []);

  return (
    <div className='chat'>
      <header className="chat__header">
        <div className="chat__header__icon">Б</div>
        <h3 className="chat__header__title">Бот</h3>
      </header>
      <main className="chat__main">
        <ul className="chat__main__messages-area" ref={chatArea}>
        </ul>
      </main>
      <footer className="chat__footer">
        <input ref={input} placeholder='Напишіть повідомлення...' type="text" className="chat__footer__input" />
        <button className="chat__footer__button" ref={send}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill='rgb(85, 164, 248)' viewBox="0 0 48 48">
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="icons_Q2" data-name="icons Q2">
                <path d="M44.9,23.2l-38-18L6,5A2,2,0,0,0,4,7L9.3,23H24a2.1,2.1,0,0,1,2,2,2,2,0,0,1-2,2H9.3L4,43a2,2,0,0,0,2,2l.9-.2,38-18A2,2,0,0,0,44.9,23.2Z" />
              </g>
            </g>
          </svg>
        </button>
      </footer>
    </div>
  );
}

export default Chat;
