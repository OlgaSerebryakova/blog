import React, { useState } from 'react';
import style from './style.css';

export default function Toggle({title, content, heightContainer, widthContainer}) {

  const [toggle, setToggle] = useState(false);

  let toggleClass = toggle ? 'On' : 'Off';
  let toggleIconActive = toggle ? 'active' : '';

  return(
    <div className={style.wrapper} style={{ width: `${widthContainer}px` }} >
      <div className={style.toggleTitle} onClick={() => setToggle(!toggle)}>
        <div className={`${style.toggleIcon} ${style[toggleIconActive]}`}> </div>
        <h4>{title}</h4>
      </div>
      <div className={`${style.toggleContent} ${style[toggleClass]}`}>{content}</div>
    </div>
  )
}
