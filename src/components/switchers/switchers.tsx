import './switchers.scss';

import { useState } from 'react';

const Switchers = () => {
  const [theme, setTheme] = useState<string>('');
  const [historyOn, setHistoryOn] = useState<boolean>(false);
  const toggleTheme = () => {

    const ripple = document.getElementById('ripple');
    ripple?.addEventListener('click', (e) => {
      e.preventDefault();
    });
    ripple?.classList.add('on');
    ripple?.addEventListener('animationend', (e) => {
      ripple?.classList.remove('on');
      e.preventDefault();
      if (theme === '') {
        setTheme('dark');
      } else {
        setTheme('');
      }
    });
  };

  const toggleHistoryOn = () => {
    const h = !historyOn;
    setHistoryOn(h);
    const log = document.getElementById('log');
    if (h === false) {
      log?.classList.remove('on');
    } else {
      log?.classList.add('on');
    }
  }

  return {
    theme,
    historyOn,
    switchers: (
      <div className="switchers-parent">
        <div className="theme-toggle" onClick={() => toggleTheme()}>
          <div id="ripple" className={`ripple-effect`}></div>
          <svg className="toggle-theme-icon" viewBox="0 0 24 24">
            <path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
          </svg>
        </div>
        <button className="selected">
          Calculator
        </button>
        <div id="log" className="log" onClick={() => toggleHistoryOn()}>

          <svg className="log-icon" viewBox="0 0 24 24">
            <path d="M18 7C16.9 7 16 7.9 16 9V15C16 16.1 16.9 17 18 17H20C21.1 17 22 16.1 22 15V11H20V15H18V9H22V7H18M2 7V17H8V15H4V7H2M11 7C9.9 7 9 7.9 9 9V15C9 16.1 9.9 17 11 17H13C14.1 17 15 16.1 15 15V9C15 7.9 14.1 7 13 7H11M11 9H13V15H11V9Z" />
          </svg>
        </div>
      </div>
    )
  }
}

export default Switchers;