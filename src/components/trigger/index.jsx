import React, { useState } from 'react';
import style from './style.css';

export default function Trigger(props) {

  const [toggle, setToggle] = useState(false);

  let triggerClass = toggle ? 'On' : 'Off';
  let containerClass = toggle ? 'containerOn' : 'containerOff';

  return(
    <div className={style.wrapper} onClick={() => setToggle(!toggle)}>
      <div className={`${style.container} ${style[containerClass]}`}>
        <span className={`${style.trigger} ${style[triggerClass]}`}/>
      </div>
    </div>
  )
}
