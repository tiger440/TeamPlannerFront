<template>
  <div>
      <range-picker :year="2017" v-model="ranges"/>
      <day :day="1500076800000"></day>
  </div>
</template>

<script>
import RangePicker from '../components/RangePicker'
import Day from '../components/Day'
export default {
    name: 'planning',
    data () {
        return {
            ranges: [ [1483484400000, 1484694000000], [1487199600000, 1493337600000], [1496872800000, 1497484800000] ]
        }
    },
    components: {
        RangePicker,
        Day
    }
}
</script>

<style>

</style>