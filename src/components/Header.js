import React from 'react';

export default function Header() {
  // Функция для скролла к элементу
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='header'>
      <div className='logo'>
        Моё портфолио
      </div>
      <nav className='navigation'>
        <ul>
          <li><a href="/" onClick={(e) => scrollToSection(e, 'about-section')}>О себе</a></li>
          <li><a href="/" onClick={(e) => scrollToSection(e, 'projects-section')}>Проекты</a></li>
          <li><a href="/" onClick={(e) => scrollToSection(e, 'contacts-section')}>Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}
