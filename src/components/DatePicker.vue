<template>
  <div class="datepicker">
    <div class="datepicker_month" v-for="1 in months " :key="month">
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
</template>

<script>
import Month from './Month.js'
export default {
    props: {
        month: String,
    }
}
</script>

<style src="./rangerpicker.css" lang="css"></style>