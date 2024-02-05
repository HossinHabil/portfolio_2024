"use client";

import { useTheme } from "next-themes";

const LoadingSpinner = () => {
  const { theme } = useTheme();
  return (
    <span className="w-8 h-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <radialGradient
          id="a12"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop
            offset="0"
            stopColor={theme === "dark" ? "#65E3F9" : "#FFFFFF"}
          ></stop>
          <stop
            offset=".3"
            stopColor={theme === "dark" ? "#65E3F9" : "#FFFFFF"}
            stopOpacity=".9"
          ></stop>
          <stop
            offset=".6"
            stopColor={theme === "dark" ? "#65E3F9" : "#FFFFFF"}
            stopOpacity=".6"
          ></stop>
          <stop
            offset=".8"
            stopColor={theme === "dark" ? "#65E3F9" : "#FFFFFF"}
            stopOpacity=".3"
          ></stop>
          <stop
            offset="1"
            stopColor={theme === "dark" ? "#65E3F9" : "#FFFFFF"}
            stopOpacity="0"
          ></stop>
        </radialGradient>
        <circle
          fill="none"
          stroke="url(#a12)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          strokeDashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="0 100 100;360 100 100"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          fill="none"
          opacity=".2"
          stroke={theme === "dark" ? "#65E3F9" : "#FFFFFF"}
          strokeWidth="20"
          strokeLinecap="round"
          cx="100"
          cy="100"
          r="70"
        ></circle>
      </svg>
    </span>
  );
};

export default LoadingSpinner;
