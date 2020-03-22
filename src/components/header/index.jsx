import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className={style.wrapper}>
          <ul className={style.wrapperUl}>
            <li className={style.link}><Link to="/">Главная</Link></li>
            <li className={style.link}><Link to="/about">О сайте</Link></li>
            <li className={style.link}><Link to="/new-post">Новый пост</Link></li>
          </ul>

        {!this.props.user
          ?
          <ul className={style.wrapperUl}>
            <li className={style.link}><Link to="sign-in">Вход</Link></li>
            <li className={style.link}><Link to="sign-up">Регистрация</Link></li>
          </ul>
          :
          <ul className={style.wrapperUl}>
            <li className={style.auth}>Привет, {this.props.user.login}</li>
            <li className={style.auth} onClick={this.props.signOut}>Выход</li>
          </ul>
        }
      </div>
    )
  }
}
