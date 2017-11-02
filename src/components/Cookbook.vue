<template>
  <div class="cookbook">
    <h3>{{ title }}</h3>
    <button
      v-for="item in cats"
      :key="item.id"
      @click="goCat(item.id)"
    >{{item.name}}</button>
    <router-view></router-view>
  </div>
</template>
<script>
const list = [
  [{id: 3321, name: '麻婆豆腐'}],
  [{id: 3322, name: '紫菜蛋花汤'}],
  [{id: 3323, name: '蒜苗火锅肉'}],
  [{id: 3324, name: '鸳鸯糍粑'}]
]
export default {
  name: 'cookbook',
  data () {
    return {
      title: '我是菜单头',
      cats: [{
        id: 0,
        name: '素菜'
      }, {
        id: 1,
        name: '汤类'
      }, {
        id: 2,
        name: '荤菜'
      }, {
        id: 3,
        name: '小吃'
      }]
    }
  },
  methods: {
    goCat (id) {
      this.$router.push({
        // path: '/cookbook/' + id,
        name: 'menulist',
        params: {
          id,
          list: list[+id]
        }
      })
    }
  }
}
</script>
<style lang="less">
  div.cookbook h3{
    font-size: 18px;
  }
</style>
