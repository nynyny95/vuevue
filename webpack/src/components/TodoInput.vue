<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="너 뭐 해야하니?"
      v-on:keyup.enter="addTodo"
    />
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem);
      if (this.newTodoItem != "") {
        console.log("인풋의 addTodo 실행");
        let value = this.newTodoItem && this.newTodoItem.trim();
        // localStorage.setItem(value, value);

        // 성훈사마의 설명 때 쓰여진 배열 예시입니다.
        // value =
        // {
        //       안녕  :안녕  ,
        //       누구세요 ? ? : 누구세요 ? ?
        // }

        // 이밋으로 부모쪽에서 해당이름의 이벤트 강제 발생시키기
        this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
