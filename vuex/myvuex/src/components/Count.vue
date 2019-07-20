<template>
  <div>
    {{ msg }}
    <br />
    {{ $store.state.a.count }}-{{ count }}
    <br />
    <button @click="$store.commit('add',10)">add</button>
    <button @click="reduce">reduce</button>

  <router-link :to="{name:'HelloWorld',params:{username:'VueJS',id:'888'}}">count</router-link>

  </div>
</template>

<script>
import store from "../vuex/store"
import { mapState, mapMutations, mapGetters } from "vuex"
export default {
  name:'Count',
  data() {
    return {
      msg: "hello vuex"
    };
  },

  // computed:{
  //     count(){
  //         return this.$store.state.count
  //     }
  // },

  // computed: mapState({
  //     count:state=>state.count
  // }),

  computed: {
    // ...mapState(["count"]),
    // ...mapGetters(['count'])
    count(){
        return this.$store.state.a.count
    }
  },

  methods: mapMutations(["add", "reduce"]),

  // computed: mapState({
  //     count:function(state){
  //         return state.count
  //     }
  // }),
  store
};
</script>
