import React, { useState } from 'react';
import style from './style.css';


export function SelectWithSearch({list, labelSelect}) {

  const [toggle, setToggle] = useState(false);

  let toggleClass = toggle ? 'On' : 'Off';

  const handelFilter = () => {
    console.log('handelFilter');
    const input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    const div = document.getElementById("select");
    let item = div.getElementsByTagName('a');
    console.log('item', item, 'input', input );
    for (let i = 0; i < item.length; i++) {
      let txtValue = item[i].textContent || item[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  };

  return(
    <div className={style.wrapper}>
      <button className={style.buttonDrop} onClick={() => setToggle(!toggle)}>{labelSelect}</button>
      <div id={'select'} className={`${style.select} ${style[toggleClass]}`}>
        <input id={'myInput'}
               className={style.input}
               type="text"
               placeholder="Поиск.."
               onKeyUp={handelFilter}/>
        {list.map(item => {
          return(
            <a href={item.url} className={style.item} key={Math.random()} >{item.text}</a>
          )
        })}
      </div>
    </div>
    )
}
