import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import Trigger from "../trigger";
import Toggle from '../toggles';
import style from './style.css'
import Accordions from "../accordions";
import { SelectClassic, Select } from "../select";
import {SelectWithSearch} from "../selectWithSearch";
import InputEmail from "../input-email";
import { showNotificationAction } from 'src/components/notification/actions';


function Components(props) {
  const info = [
    { title:'Question1',
      isOpen: false,
      content: 'Appropriately supply distributed testing procedures via team driven leadership skills.',
      widthContainer: 400 } ,
    { title:'Question2',
      isOpen: false,
      content: 'Appropriately supply distributed testing procedures via team driven leadership skills.',
      widthContainer: 400 } ,
    { title:'Question3',
      isOpen: false,
      content: 'Appropriately supply distributed testing procedures via team driven leadership skills.',
      widthContainer: 400 } ,
  ];

  const list = [
    {text: 'Выберите город',
      value: 'city',
      selected: true},
    {text: 'Москва',
      value: 'Moscow',
      selected: false},
    {text: 'Санкт-Петербург',
      value: 'Saint-Petersburg',
      selected: false},
    {text: 'Омск',
      value: 'Omsk',
      selected: false},
    {text: 'Екатеринбург',
      value: 'Yekaterinburg',
      selected: false},
    {text: 'Краснодар',
      value: 'Krasnodar',
      selected: false}
  ];

  const menu = [
    {text: 'Гравная',
      url: '/'},
    {text: 'О сайте',
      url: '/about'},
    {text: 'Новый пост',
      url: '/new-post'},
    {text: 'Компоненты',
      url: '/components'},
  ];

  return(
    <div>
      <Trigger />
      <div className={style.toggleWrapper}>
        <Toggle title={'Question'} content={'Appropriately supply distributed testing procedures via team driven leadership skills.'}
                heightContainer={100} widthContainer={400} />
      </div>
      <div className={style.toggleWrapper}>
        <Accordions info={info} />
      </div>
      <div className={style.toggleWrapper}>
        <SelectClassic list={list}/>
      </div>
      <div className={style.toggleWrapper}>
        <Select list={list}/>
      </div>
      <div className={style.toggleWrapper}>
        <SelectWithSearch list={menu} labelSelect={'Меню'} />
      </div>
      <div className={style.inputWrapper}>
        <div>Введите e-mail</div>
        <InputEmail
          id='email'
          value={props.dataForm.email}
          onChange={props.changeFieldAction}
          showNotificationAction={props.showNotificationAction}/>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  dataForm: state.components.dataForm
});

export default connect(mapStateToProps, {...Actions, showNotificationAction})(Components)