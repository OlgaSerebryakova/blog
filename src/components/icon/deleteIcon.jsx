import React from 'react';
import style from './style.css';

export default function DeleteIcon(props) {
  return (
    <div className={style.iconWrapper} style={{height: `${props.size}px`, width: `${props.size}px`}}>
      {/*<svg viewBox="-3 0 450 450.37746" xmlns="http://www.w3.org/2000/svg"*/}
      {/*xmlnsXlink="http://www.w3.org/1999/xlink">*/}
      {/*<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="222.00073" x2="222.00073" y1="2.142106"*/}
      {/*y2="425.567106">*/}
      {/*<stop offset="0" stopColor="#00efd1"/>*/}
      {/*<stop offset="1" stopColor="#00acea"/>*/}
      {/*</linearGradient>*/}
      {/*<path*/}
      {/*d="m443.8125 196.414062c0-21.6875-18.644531-39.34375-41.558594-39.359374l-132.132812-.136719 2.535156-91.566407c0-.117187 0-.238281 0-.355468-.535156-31.632813-24.191406-58.082032-55.566406-62.132813l-17.792969-2.769531c-2.203125-.339844-4.449219.25-6.199219 1.636719s-2.839844 3.441406-3.007812 5.664062l-7.386719 96.902344c-.910156 11.890625-5.011719 23.316406-11.867187 33.078125-4.359376 6.308594-9.828126 11.777344-16.140626 16.136719-2.601562 1.769531-5.675781 3.671875-8.726562 5.691406-14.105469 9.316406-31.78125 20.910156-44.78125 34.183594v-27.640625c0-4.417969-3.207031-8.371094-7.625-8.371094h-85c-4.5625.144531-8.226562 3.808594-8.375 8.371094v277c0 4.417968 3.957031 7.628906 8.375 7.628906h85c2.042969.066406 4.023438-.710938 5.46875-2.160156 1.449219-1.445313 2.226562-3.425782 2.15625-5.46875v-17.351563c54 .046875 118.683594.097657 174.835938.097657 35.285156 0 67.324218-.019532 90.402343-.074219 22.867188-.050781 41.761719-17.707031 41.761719-39.355469v-.703125c-.097656-9.589844-3.804688-18.792969-10.378906-25.777344 15.875-5.550781 27.128906-20.027343 27.128906-37.011719-.148438-10.492187-4.578125-20.46875-12.261719-27.613281 13.511719-6.503906 22.511719-19.796875 22.511719-35.101562v-.734375c.03125-10.867188-4.578125-21.226563-12.671875-28.476563 12.574219-6.777343 21.296875-19.582031 21.296875-34.230469zm-358.625 237.960938h-69v-261h69zm317.035156-215h-6.800781c-.414063.023438-.828125.085938-1.230469.183594v-.101563c-.230468-.039062-.464844-.066406-.695312-.082031h-54.867188c-4.417968 0-8 3.582031-8 8s3.582032 8 8 8h56.519532c13.609374 1 24.039062 11.199219 24.039062 23.746094v.734375c0 12.882812-11.015625 23.519531-25.125 23.519531h-50.199219c-4.417969 0-8 3.578125-8 8 0 4.417969 3.582031 8 8 8h39.386719c14.113281 0 25.589844 10.582031 25.589844 23.535156 0 12.878906-11.476563 23.464844-25.589844 23.464844h-37.160156c-4.417969 0-8 3.578125-8 8 0 4.417969 3.582031 8 8 8h20.121094c14.113281 0 25.976562 10.109375 25.976562 22.988281v.703125c0 12.847656-11.824219 23.324219-25.898438 23.359375-59.78125.136719-178.101562.050781-265.101562-.027343v-189.195313c8-17.585937 34.339844-34.929687 53.601562-47.65625 3.101563-2.046875 6.113282-3.980469 8.800782-5.808594 7.925781-5.4375 14.800781-12.269531 20.289062-20.164062 8.519532-12.113281 13.613282-26.300781 14.75-41.066407l6.746094-88.269531 9.351562 1.453125c.070313.015625.148438.023438.222657.035156 23.421875 3.082032 41.117187 22.757813 41.707031 46.375l-2.757812 99.589844c-.0625 2.15625.753906 4.246094 2.257812 5.796875 1.503906 1.546875 3.570312 2.421875 5.730469 2.421875l140.355469.152344c14.097656.007812 25.570312 10.28125 25.570312 23.160156s-11.480469 23.152344-25.589844 23.152344zm0 0"*/}
      {/*fill={props.isActive ? 'url(#a)' : '#777'}/>*/}
      {/*</svg>*/}

      <svg viewBox="-40 0 427 427.00131">
        <linearGradient id="a">
          <stop offset="0" stopColor="#00efd1"/>
          <stop offset="1" stopColor="#00acea"/>
        </linearGradient>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="232.398627" x2="232.398627" xlinkHref="#a"
                        y1="-33.288691" y2="463.068309"/>
        <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="114.398627" x2="114.398627" xlinkHref="#a"
                        y1="-33.288691" y2="463.068309"/>
        <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="173.398627" x2="173.398627" xlinkHref="#a"
                        y1="-33.288691" y2="463.068309"/>
        <path
          d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
          fill="url(#b)"/>
        <path
          d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
          fill="url(#c)"/>
        <g fill="url(#d)">
          <path
            d="m308.597656 52h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812zm-199.199218-12.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm158.601562 367.5h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm40.597656-299h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18zm0 0"/>
          <path
            d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
        </g>
      </svg>

    </div>
  );
}

