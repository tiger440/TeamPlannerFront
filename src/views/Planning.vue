<template>
  <div>
      <range-picker :year="2017" v-model="ranges"/>
  </div>
</template>

<script>
import RangePicker from '../components/RangePicker'
export default {
    name: 'planning',
    data () {
        return {
            ranges: [ [1483484400000, 1484694000000], [1487199600000, 1493337600000], [1496872800000, 1497484800000] ]
        }
    },
    components: {
        RangePicker,
    }
}
</script>

<style>

</style>