<template>
  <div>
    <date-picker :year="getlocalYear()" :value="getLocalMonth()"/>
    <day-schedule></day-schedule>
  </div>
</template>

<script>
import DatePicker from '../components/DatePicker'
import DaySchedule from '../components/DaySchedule'
export default {
    name: 'planning2',
    components: {
        DatePicker,
        DaySchedule
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
    },
}
</script>

<style></style>