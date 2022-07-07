<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">모두 지우기</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit("removeAll");
    }

    // 이건 앱에서 처리할 일!
    // clearTodo() {
    //   localStorage.clear();
    // }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #fb6363;
  display: block;
}
</style>
