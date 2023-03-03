
<template>
  <div class="toggle normal">
    <input id="normal" type="checkbox"/>
    <label class="toggle-item" for="normal"></label>
  </div>
</template>

<style scoped>

* {
  box-sizing: border-box;
}
*:before, *:after {
  content: "";
  position: absolute;
}

input {
  height: 20px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 20px;
}

label.toggle-item {
  background: #2e394d;
  width: var(--btn-toggle-width);
  height: var(--btn-toggle-height);
  border-radius: 50px;
  display: inline-block;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
}
label.toggle-item:before {
  display: block;
  transition: all 0.2s ease;
  top: calc( (var(--btn-toggle-height) - var(--btn-toggle-size-circle))/2 );
  left: calc( 5% );
  border-radius: 50%;
  transition: 0.3s ease;
}

.normal label {
  background: var(--Marine-blue);
  border: 0.5px solid rgba(117, 117, 117, 0.31);
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.15);
}
.normal label:before {
  border: none;
  width: var(--btn-toggle-size-circle);
  height: var(--btn-toggle-size-circle);
  box-shadow: inset 0.5px -1px 1px rgba(0, 0, 0, 0.35);
  background: #fff;
  transform: rotate(-25deg);
}
#normal:checked + label{
  /* background: #4caf50; */

}

#normal:checked + label:before {
  left: calc( 95% - var(--btn-toggle-size-circle) );
}

</style>
