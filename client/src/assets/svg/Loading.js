import React from "react";

const Upvotes = () => {
  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="60%"
      height="50%"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <rect width="15" height="40" x="17.5" y="30" fill="#f9ba86">
        <animate
          attributeName="y"
          begin="-0.4s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="10;30;30"
        />
        <animate
          attributeName="height"
          begin="-0.4s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="80;40;40"
        />
      </rect>
      <rect width="15" height="40" x="42.5" y="30" fill="#f69e55">
        <animate
          attributeName="y"
          begin="-0.2s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="15;30;30"
        />
        <animate
          attributeName="height"
          begin="-0.2s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="70;40;40"
        />
      </rect>
      <rect width="15" height="40" x="67.5" y="30" fill="#f48024">
        <animate
          attributeName="y"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="15;30;30"
        />
        <animate
          attributeName="height"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="70;40;40"
        />
      </rect>
    </svg>
  );
};

export default Upvotes;
