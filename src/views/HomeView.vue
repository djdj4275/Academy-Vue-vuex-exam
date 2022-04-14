<template>
  <div class="home">
    
    <table>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>클릭횟수(조회수)</th>
      </tr>
      <tr v-for="board in $store.state.board" :key="board.id">
        <th>{{board.id}}</th>
          <router-link :to="`/board/${board.id}`"
          style="text-decoration : none; color:black;">
            <th @click="addcount(board.id)">{{board.title}}</th>
          </router-link>
        <th>{{board.count}}</th>
      </tr>
    </table>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods : {
    addcount : function(id) {
      this.$store.state.board[id].count++;
      console.log(this.$store.state.board);
    }
  }
}
</script>
