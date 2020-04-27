import React, { useState } from 'react';
import style from './style.css';


export function SelectClassic({list}) {

  return(
    <div className={style.wrapper}>
      <select className={style.select}>
        {list.map(item => {
          return(
            <option key={Math.random()} value={item.value} selected={item.select}>{item.text}</option>
          )
        })}
      </select>
    </div>
    )
}

export function Select({list}) {

  const [view, setView] = useState(false);

  let selectView = view ? 'open' : 'close';

  const [position, setPosition] = useState(list[0].text);

  const handleClick = () => {
    setView(!view);
  };

  const handleSelect = (e) => {
    setPosition(e.target.dataset.text);
    setView(!view);
  };

  return(
    <div className={style.wrapper}>
      <input type="text"
             className={style.input}
             readOnly
             value={position}
             onClick={handleClick}/>
      <div className={`${style.select} ${style[selectView]}`}>
        {list.map(item => {
          return(
            <div className={style.selectItem}
                 key={item.value}
                 data-value={item.value}
                 data-text={item.text}
                 onClick={handleSelect}
                 onBlur={() => setView(false)}>{item.text}</div>
          )
        })}
      </div>
    </div>
  )
}

