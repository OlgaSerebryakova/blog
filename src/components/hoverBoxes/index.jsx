import React from 'react';
import style from './style.css';

const HoverBox = (props) => {
  return(
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.front}
             style={ {backgroundImage: "url('https://i.pinimg.com/474x/c7/e3/e1/c7e3e1eb165d748c6195186ea3535fd3--flower-photography-tiffany-blue.jpg')"} }>
        </div>
        <div className={style.back}>
          <h1>Rapidiously transition cross-platform build diverse</h1>
          <p>Collaboratively brand intuitive scenarios before viral niche markets.
            Phosfluorescently iterate mission-critical schemas whereas magnetic technologies.
            Competently synergize multidisciplinary leadership via enterprise-wide processes.
            Conveniently disseminate performance based sources vis-a-vis multidisciplinary schemas.
            Competently cultivate professional.</p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.front}
             style={ {backgroundImage: "url('https://i.pinimg.com/474x/25/30/26/253026b26bd92d0f39d0f516392c8a95.jpg')"} }>
        </div>
        <div className={style.back}>Описание</div>
      </div>
      <div className={style.card}>
        <div className={style.front}
             style={ {backgroundImage: "url('https://aardvark.ghostpool.com/original/wp-content/uploads/sites/6/2017/11/women-with-balls-1024x512.jpg')"} }>
        </div>
        <div className={style.back}>Описание</div>
      </div>

    </div>
  )
}

export default HoverBox;