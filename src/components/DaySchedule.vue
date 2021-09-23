<template>
  <div>
    <div>
      {{ eventSettings }}
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
import { DataManager, Query } from "@syncfusion/ej2-data";
/* import { scheduleData } from './datasource.js' */

export default {
  name: "dayschedule",
  props: ["users", "tasks"],
  data() {
    return {
      showHeaderBar: false,
      eventSettings: {
        dataSource: new DataManager(this.tasks).executeLocal(new Query().take(8)),
      },
      selectedDate: new Date(2020, 10, 27),
    };
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
