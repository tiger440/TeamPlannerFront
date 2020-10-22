<template>
  <div>
    <date-picker :year="2017" :month="'2'"/>
  </div>
</template>

<script>
import DatePicker from '../components/DatePicker'
export default {
    name: 'planning2',
    components: {
        DatePicker
    }
}
</script>

<style>

</style>