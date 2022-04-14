<template>
    <div>
        <h1>{{gettitle}}</h1>
        <h1>{{getmemo}}</h1>
    </div>
</template>


<script>

export default {
    name : 'PageView',
    computed : {
        gettitle : function() {
            return this.$store.state.board[this.$route.params.id].title
        },
        getmemo : function() {
            return this.$store.state.memolist[this.$route.params.id].memo
        },
    }
}
</script>