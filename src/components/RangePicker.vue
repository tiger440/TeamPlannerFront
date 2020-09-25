<template>
  <div class="rangepicker">
      <div class="rangepicker_month" v-for="month in months" :key="month">
          <div class="rangepicker_monthtitle">
            {{ month.getName() }}
          </div>
          <div class="rangepicker_days">
            <div>Lun</div>
            <div>Mar</div>
            <div>Mer</div>
            <div>Jeu</div>
            <div>Ven</div>
            <div>Sam</div>
            <div>Dim</div>
          </div>
          <div class="rangepicker_numbers">
            <div class="rangepicker_day" v-for="day in month.getDays()" :key="day" :class="classForDay(day, month)">{{ day.getDate() }}</div>
          </div>
      </div>
  </div>
</template>

<script>
import Month from './Month.js'
import Ranges from './Ranges.js'
export default {
  props: {
    year: Number,
    value: Array
  }, 
  data () {
    return {
        months: [],
        ranges: []
    }
  },
  mounted () {
    this.ranges = Ranges.fromTimestamps(this.value)
    this.months = Month.createMonthsforYear(this.year)
  },
  
  methods: {
    classForDay (day, month) {
      let classes =  []
      let range = this.ranges.contains(day)
      if (range !== null) {
        classes.push('rangepicker_range')
        if (range.isDepart(day)) { classes.push('rangepicker_range-start') }
        if (range.isEnd(day)) { classes.push('rangepicker_range-end') }
      }
      if (!month.contains(day)) {
        classes.push('rangepicker_out')
      }
      return classes
    }
  }
}
</script>

<style src="./rangerpicker.css" lang="css"></style> 