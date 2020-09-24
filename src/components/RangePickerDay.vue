<template>
  <div class="rangepicker">
      <div class="rangepicker_month" v-for="month in months" :key="month">
          {{ month.getName() }}
      </div>
  </div>
</template>

<script>
import Day from './Day.js'
export default {
  data () {
    return {
        months: []
    }
  },
  mounted () {
        this.months = Day.createMonthsforYear(this.year)
  },
    props: {
        year: Number
    }
}
</script>

<style src="./rangerpicker.css" lang="css"></style> 