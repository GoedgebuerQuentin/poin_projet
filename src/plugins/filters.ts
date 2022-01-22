import { VueConstructor } from 'vue/types/umd'

export default {
  install (Vue : VueConstructor): void {
    Vue.filter('test', function test (value: string) {
      return parseFloat(value).toFixed(2)
    })
  }
}
