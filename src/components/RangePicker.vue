<template>
  <div class="rangepicker">
      <div class="rangepicker_month" v-for="month in months" :key="month">
          {{ month.getName() }}
      </div>
  </div>
</template>

<script>
import Month from './Month.js'
export default {
  data () {
    return {
        months: []
    }
  },
  mounted () {
        this.months = Month.createMonthsforYear(this.year)
  },
    props: {
        year: Number
    }
}
</script>

<style src="./rangerpicker.css" lang="css"></style> 