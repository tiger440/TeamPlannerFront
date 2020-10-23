<template>
  <div class="rangepicker">
      <div class="rangepicker_month" v-for="(month, index) in months" :value="index" :key="month">
        <div v-if="index == value">
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
            <div class="rangepicker_day"
                 v-for="day in month.getDays()"
                 :key="day" :class="classForDay(day, month, newRange)">{{ day.getDate() }}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Month from './Month.js'
export default {
  props: {
    year: Number,
    value: Number
  },
  data () {
    return {
        months: [],
    }
  },
  
  methods: {
    classForDay (day, month) {
      let classes =  []
      if (!month.contains(day)) {
        classes.push('rangepicker_out')
      }
      return classes
    },
  },
  mounted () {
    this.months = Month.createMonthsforYear(this.year)
  },
}
</script>

<style scoped>
@import url("./rangerpicker2.css");
</style>