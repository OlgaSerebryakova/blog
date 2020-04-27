import React, { useState } from 'react';
import style from './style.css';

export default function Accordions({data, setData}) {

  const [toggle, setToggle] = useState(false);

  let toggleClass = toggle ? 'On' : 'Off';
  let toggleIconActive = toggle ? 'active' : '';

  return(
    <div>
      {data.map(item => {
        return (
          <div key={item.title} className={style.wrapper} style={{ width: `${item.widthContainer}px` }} >
            <div className={style.toggleTitle} onClick={() => setToggle(!toggle)}>
              <div className={`${style.toggleIcon} ${style[toggleIconActive]}`}> </div>
              <h4>{item.title}</h4>
            </div>
            <div className={`${style.toggleContent} ${style[toggleClass]}`}>{item.content}</div>
          </div>
        )})
      }
    </div>
    )
}
