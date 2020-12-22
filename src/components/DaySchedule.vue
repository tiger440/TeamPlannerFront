<template>
  <div>
    <div>
      {{ eventSettings }}
      {{ this.scheduleData }}
      <ejs-schedule
        class="schedule"
        :selectedDate="selectedDate"
        :eventSettings="eventSettings"
        :showHeaderBar="showHeaderBar"
      ></ejs-schedule>
    </div>
  </div>
</template>

<script>
import { Day, TimelineViews } from "@syncfusion/ej2-vue-schedule";
/* import { scheduleData } from './datasource.js' */

export default {
  name: "dayschedule",
  props: ["users", "tasks"],
  data() {
    return {
      showHeaderBar: false,
      eventSettings: {
        dataSource: this.scheduleData,
      },
      scheduleData: [],
      selectedDate: new Date(2020, 10, 27),
    };
  },
  created() {
    for (let i = 0; i < this.tasks.length; ++i) {
      this.scheduleData.push(this.tasks[i]);
    }
    console.log({ scheduleData: this.scheduleData });
  },
  provide: {
    schedule: [Day, TimelineViews],
  },
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
