<template>
  <svg fill="none" viewBox="0 0 340 340">
    <circle cx="170" cy="170" r="160" stroke="#E2007C" />
    <circle cx="170" cy="170" r="135" stroke="#404041" />
    <circle cx="170" cy="170" r="110" stroke="#E2007C" />
    <circle cx="170" cy="170" r="85" stroke="#404041" />
  </svg>
</template>

<style>
circle {
  animation: rotator 3s ease-in-out infinite;
  transform-origin: 170px 170px;
}

circle:nth-of-type(1) {
  stroke-dasharray: 600;
}

circle:nth-of-type(2) {
  stroke-dasharray: 500;
}

circle:nth-of-type(3) {
  stroke-dasharray: 400;
}

circle:nth-of-type(4) {
  stroke-dasharray: 300;
}

circle:nth-of-type(1) {
  animation-delay: 0s;
}

circle:nth-of-type(2) {
  animation-delay: -0.3s;
}

circle:nth-of-type(3) {
  animation-delay: -0.6s;
}

circle:nth-of-type(4) {
  animation-delay: -0.1s;
}

@keyframes rotator {
  50% {
    transform: rotate(70deg);
  }
}
</style>
