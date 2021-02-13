<template>
  <el-tooltip class="item" effect="dark" :disabled="isShowTooltip"
              :content="content" >
    <div class="over-flow">
    <span ref="refSpan"><slot>{{ content }}</slot></span>
    </div>
  </el-tooltip>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: 'TextTooltip',
  props: {
    // 显示的文字内容
    content: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 外层框的样式，在传入的这个类名中设置文字显示的宽度
    className: {
      type: String,
      default: () => {
        return ''
      }
    },
  },
  setup(props,ctx) {
    let isShowTooltip = ref(true);
    let refSpan = ref(null);
    onMounted(() => {
      if (!refSpan.value) return;
      let ref = refSpan.value;
      let parentWidth = ref.parentNode.offsetWidth;
      let contentWidth = ref.offsetWidth;
      isShowTooltip.value = contentWidth <= parentWidth;
    });
    return {
      isShowTooltip, refSpan
    }
  },
}
</script>

<style scoped>
.over-flow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.wid190 {
  width: 190px;
}
</style>