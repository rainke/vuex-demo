<template>
  <div class="munulist">
    <h3>id:{{ $route.params.id }}</h3>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        @click="remove(item.id)"
      >
      {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'cookbook',
  data () {
    return {
      list: null
    }
  },
  beforeRouteEnter (to, from, next) {
    const list = to.params.list || []
    next(vm => {
      vm.list = [...list]
    })
  },
  beforeRouteUpdate (to, from, next) {
    const list = to.params.list || []
    this.list = [...list]
    next()
  },
  methods: {
    remove (id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
    }
  }
}
</script>
<style lang="less">
</style>
