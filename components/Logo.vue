<template>

    <div class="VueToNuxtLogo swirl-in-fwd">
      <img src="/logo.svg" alt="">
    </div>

</template>

<style>
.VueToNuxtLogo {
  /*margin-top: 2rem;*/
  padding-top: 1rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 10rem;
  width: 8rem;
}
.swirl-in-fwd {
	-webkit-animation: swirl-in-fwd 1s ease-out both;
	        animation: swirl-in-fwd 1s ease-out both;
}

@-webkit-keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}
@keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}

</style>
