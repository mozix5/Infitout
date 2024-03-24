import React from "react";

const Nse = ({height,width}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlns:v="https://vecta.io/nano"
      height={height}
      width={width}
    >
      <path
        d="M1.8 31.9l8.7-21.1 21.3-8.9 21.3 8.9 9.1 21.1-9.1 21.2-21.1 9-21.5-8.9z"
        fill="#f2b61a"
      />
      <path d="M10.5 10.8l7.9 21.1-7.9 21.3-8.7-21.3z" fill="#e41f28" />
      <g fill="#e96f24">
        <path d="M10.5 10.8L32 18.7l21.1-7.9-21.3-8.9z" />
        <path d="M53.1 53.1l-7.8-21.2 7.8-21.1 9.1 21.1z" />
      </g>
      <path d="M10.5 53.2l21.3-7.9 21.3 7.8-21.1 9z" fill="#e41f28" />
      <path d="M32 18.7l13.3 13.2 7.8-21.1z" fill="#392e7d" />
      <path d="M18.4 31.9L32 18.7l13.3 13.2-13.5 13.4z" fill="#fff" />
    </svg>
  );
};

export default Nse;
