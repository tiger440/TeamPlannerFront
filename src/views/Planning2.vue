<template>
  <div>
    <date-picker :year="getlocalYear()" :value="getLocalMonth()"/>
  </div>
</template>

<script>
import DatePicker from '../components/DatePicker'
export default {
    name: 'planning2',
    components: {
        DatePicker
    },
    methods: {
      getLocalMonth () {
        const nowMonth = new Date().getMonth()
        return nowMonth
      },
      getlocalYear () {
        const nowYear = new Date().getFullYear()
        return nowYear
      }
    }
}
</script>

<style>

</style>