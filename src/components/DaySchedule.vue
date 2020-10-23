<template>
  <div>
    <ejs-schedule :selectedDate='selectedData' :eventSettings='eventSettings'></ejs-schedule>
  </div>
</template>

<script>
import { Day } from '@syncfusion/ej2-vue-schedule'

let scheduleData = []
export default {
  data (){
    return {
      eventSettings: {
          dataSource: scheduleData
      },
    }
  },
  methods: {

  },
  provide: {
    schedule: [Day]
  }
}
</script>

<style scoped>

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

</style>