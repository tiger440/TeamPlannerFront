<template>
  <div>
      <range-picker :year="2017"/>
      <range-picker-day :year="2017"/>
  </div>
</template>

<script>
import RangePicker from '../components/RangePicker'
import RangePickerDay from '../components/RangePickerDay'
export default {
    name: 'planning',
    components: {
        RangePicker,
        RangePickerDay
    }
}
</script>

<style>

</style>