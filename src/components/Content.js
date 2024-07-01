import React from 'react';

export default function Content() {
  return (
    <div className="content">
      <section id='about-section' className='section'>
        <h2>О себе</h2>
        <p>Привет! Я Константин, фронтенд разработчик. Я люблю создавать интерактивные веб-приложения с использованием современных технологий.</p>
      </section>
      <section id='projects-section' className='section'>
        <h2>Мои проекты</h2>
        <div className="projects">
          <div className="project">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="MedLab" />
          <p>MedLab — проект для автоматизации деятельности медицинской лаборатории. Основные функции включают управление данными сотрудников, создание и обработку заявок, а также просмотр и редактирование таблиц.</p>
            <a href="https://github.com/cud11er/MedLab" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="project">
            <img src={process.env.PUBLIC_URL + '/pgth.jpg'} alt="Проект 2" />
            <p>Бот Телеграмм по предоставлению рассписания для студентов и преподавателей ПТГХ</p>
            <a href="https://github.com/cud11er/PTGHBot" target="_blank" rel="noreferrer">GitHub</a>

          </div>
          <div className="project">
            {/* <img src="/" alt="Проект в разработке" /> */}
            <p>Новый проект в разработке...</p>
          </div>
        </div>
      </section>
      <section id='contacts-section' className='section'>
        <h2>Контакты</h2>
        <p>Вы можете связаться со мной по электронной почте: <a href="mailto:rikunov.kost@inbox.ru">rikunov.kost@inbox.ru</a></p>
        </section>
    </div>
  );
}
