<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다.</h1>
    <input type="text" v-model="title" style="width:230px"> <br>
    <textarea v-model="memo" id="" cols="30" rows="10">
    </textarea> <br>
    <button @click="addmemo">완료</button>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
      title : "",
      memo : "",
    }
  },
  methods : {
    addmemo : function() {
      const idt = this.$store.state.board.length;
      this.$store.state.board.push({id : idt, title : this.title, count : 0});
      this.$store.state.memolist.push({memo : this.memo});
      this.$router.push('/');
    }
  }
}
</script>
