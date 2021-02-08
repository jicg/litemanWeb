<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
  },
  setup(props, ctx) {
    return {};
  },
  name: "HamBurger"
});
</script>

<template>
  <span style="background:rgb(198, 226, 255);border-radius: 50%;height: 32px;width: 32px;
  text-align: center;line-height: 18px;padding: 6px;">
  <svg style="height: 18px;width: 18px;color: white;fill: white;" t="1612792243280" :class="isOpen?'icon-open':'icon-close'" viewBox="0 0 1024 1024" version="1.1"
       xmlns="http://www.w3.org/2000/svg" p-id="2700"><path
      d="M408 442h480a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H408a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8z m-8 204a8 8 0 0 0 8 8h480a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H408a8 8 0 0 0-8 8v56z m504-486H120a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h784a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8z m0 632H120a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h784a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8zM142.4 642.1L298.7 519a8.8 8.8 0 0 0 0-13.9L142.4 381.9a8.9 8.9 0 0 0-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      p-id="2701"></path></svg>
  </span>
</template>
<style scoped>
/*rgb(198, 226, 255)*/
/* #24394d*/
.icon-open {

}

.icon-close {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>