<template>
  <div>
    <div v-for="user in users" :key="user.id">
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
/* import { scheduleData } from './datasource.js' */

let scheduleData = [];

export default {
  name: "dayschedule",
  props: ["users"],
  data() {
    return {
      showHeaderBar: false,
      eventSettings: {
        dataSource: scheduleData,
      },
      selectedDate: new Date(2020, 10, 27),
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/task/findUserTasks/" + this.$route.params.id)
      .then((res) => {
        for (let i = 0; i < res.data.length; ++i) {
          scheduleData.push(res.data[i]);
        }
      })
      .catch((err) => {
        alert(err);
      });
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
