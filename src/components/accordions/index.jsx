import React, { useState } from 'react';
import style from './style.css';

export default function Accordions({info}) {

  return(
    <div>
      {info.map(item => {
        return (
          <Toggle key={item.title} item={item} />
        )})
      }
    </div>
    )
};


function Toggle({item}) {
  const [isOpen, setIsOpen] = useState(item.isOpen);

  return (
    <div  className={style.wrapper} style={{ width: `${item.widthContainer}px` }} >
      <div className={style.toggleTitle} onClick={() => setIsOpen(!isOpen)}>
        <div className={`${style.toggleIcon} ${style[isOpen ? 'active' : '']}`}> </div>
        <h4>{item.title}</h4>
      </div>
      <div className={`${style.toggleContent} ${style[isOpen ? 'On' : 'Off']}`}>{item.content}</div>
    </div>
  )
}
