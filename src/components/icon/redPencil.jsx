import React from 'react';
import style from './style.css';

export default function Redact(props) {
  return (
    <div className={style.iconWrapper} style={{ height: `${props.size}px`, width: `${props.size}px` }}>
      <svg id="Layer_567898765" x="0px" y="0px" viewBox="0 2 98 98" xmlSpace="preserve">
        <linearGradient id="SVGID_678_" gradientUnits="userSpaceOnUse" x1="49" y1="9.9502" x2="49" y2="92.0498">
          <stop offset="0" style={{stopColor: '#00EFD1'}}/>
          <stop offset="1" style={{stopColor: '#00ACEA'}}/>
        </linearGradient>
        <path className="st0" d="M89.1,18.1l-7.3-7.3c-1.2-1.2-3.1-1.2-4.2,0l-4.2,4.2l-2.1-2.1c-3.2-3.2-8.2-3.2-11.3,0L41.4,31.4  c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l18.5-18.5c0.8-0.8,2-0.8,2.9,0l0.6,0.6L12.3,73.1  c-0.4,0.4-0.7,0.9-0.8,1.4L8.1,88.3c-0.3,1,0.1,2.1,0.8,2.8C9.5,91.7,10.2,92,11,92c0.2,0,0.5,0,0.7-0.1l13.8-3.5  c0.5-0.1,1-0.4,1.4-0.8l57.4-57.4c0.6-0.6,0.9-1.3,0.9-2.1c0-0.5-0.1-1-0.4-1.5l4.3-4.3C90.3,21.2,90.3,19.3,89.1,18.1z M82.8,20.2  l-2.1,2.1l-3.1-3.1l2.1-2.1L82.8,20.2z M16,81.1l2.9,2.8l-3.8,1L16,81.1z M24.8,81.3l-6.1-6.1l27.7-27.7l6.1,6.1L24.8,81.3z   M56.7,49.4l-6.1-6.1L71.8,22l6.2,6.2L56.7,49.4z"
              style={{
                fill: 'url(#SVGID_678_)'
              }}
              />
      </svg>
    </div>
  );
}
