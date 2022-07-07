<!-- 뷰는 뷰 데이터의 값이 변경되면 화면에 재 렌더링이 이루어짐! -->
<template>
  <div>
    <ul>
      <!-- v-bind에 한하여 생략 가능! 단, 가독성은 떨어질 수 있음 -->
      <!-- v-bind:key="todoItem" == :key="todoItem" -->
      <!-- 앱에서 프롭스로 받아온 배열정보로 구현하기 위해 propsdata로 변경 -->
      <!-- <li :key="todoItem" v-for="(todoItem, index) in todoItems" class="shadow"> -->
      <li :key="todoItem" v-for="(todoItem, index) in propsdata" class="shadow">
        <i class="checkBtn fa fa-check" area-hidden="true"></i>
        {{ todoItem }}
        <!-- @ == v-on: -->
        <span
          class="removeBtn"
          type="button"
          @click="removeTodo(todoItem, index)"
        >
          <i class="fa fa-trash-o" area-hidden="true"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 앱에서 받아온 프롭스데이터를 프롭스로 받아오기!
  props:['propsdata'],
  
  // 데이터 함수도 앱에서 기능수행하므로 지워도 무관!
  // data() {
  //   return {
  //     todoItems: []
  //   };
  // }

  //   앱에서 대신 역할수행하므로 주석처리!
  //   created() {
  //     // 처음 앱 실행 시 로컬 스토리지 안의 데이터를 가져와 출력하기 위함!
  //     if (localStorage.length > 0) {
  //       for (let i = 0; i < localStorage.length; i++) {
  //         if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //           this.todoItems.push(localStorage.key(i));
  //         }
  //       }
  //     }
  //   },
  //   methods: {
  //     removeTodo(todoItem, index) {
  //       console.log(todoItem, index);
  //       // 로컬스토리지의 데이터를 키값을 사용하여 지워주기
  //       localStorage.removeItem(todoItem);
  //       // 현재 리스트 배열에서도 인덱스번호를 통해 데이터 삭제
  //       this.todoItems.splice(index, 1);
  //     }
  //   }
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #8763fb;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #fb6363;
}
</style>
