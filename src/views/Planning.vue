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
            ranges: [ [1483401600000, 1484697600000], [1487203200000, 1493337600000] ]
        }
    },
    components: {
        RangePicker,
    }
}
</script>

<style>

</style>