<template>
  <div>
    {{eventSettings}} {{scheduleData}} <ejs-schedule :selectedDate='selectedData' :eventSettings='eventSettings'></ejs-schedule>
  </div>
</template>

<script>
import { Day } from '@syncfusion/ej2-vue-schedule'

/* let scheduleData = [{
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2018, 1, 15, 9, 30),
    EndTime: new Date(2018, 1, 15, 11, 0)
}, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2018, 1, 12, 12, 0),
    EndTime: new Date(2018, 1, 12, 14, 0)
}, {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2018, 1, 13, 9, 30),
    EndTime: new Date(2018, 1, 13, 11, 0)
}, {
    Id: 4,
    Subject: 'Meteor Showers in 2018',
    StartTime: new Date(2018, 1, 14, 13, 0),
    EndTime: new Date(2018, 1, 14, 14, 30)
}]; */

let scheduleData = []

/*  { "dataSource": [ { "Id": 1, "Subject": "Explosion of Betelgeuse Star", "StartTime": "2018-02-15T08:30:00.000Z", "EndTime": "2018-02-15T10:00:00.000Z" }, { "Id": 2, "Subject": "Thule Air Crash Report", "StartTime": "2018-02-12T11:00:00.000Z", "EndTime": "2018-02-12T13:00:00.000Z" }, { "Id": 3, "Subject": "Blue Moon Eclipse", "StartTime": "2018-02-13T08:30:00.000Z", "EndTime": "2018-02-13T10:00:00.000Z" }, { "Id": 4, "Subject": "Meteor Showers in 2018", 
 "StartTime": "2018-02-14T12:00:00.000Z", "EndTime": "2018-02-14T13:30:00.000Z" } ] }  */

export default {
  name: "dayschedule",
  data (){
    return {
      eventSettings: {
          dataSource: scheduleData
      },
       selectedData: new Date(2020, 10, 19),
    }
  },
  created () {
      this.axios.get('http://localhost:3000/task/findUserTasks/' + this.$route.params.id )
      .then((tasks) => {
        console.log(tasks)
        scheduleData = tasks.data
        /* { "dataSource": [ { "subject": "Reunion", "startTime": "2020-10-15T08:30:00.000Z", 
        "endTime": "2020-10-15T09:00:00.000Z", "startTimezone": "(UTC+1:00) Paris", "endTimezone": "(UTC+1:00) Paris", "location": "Paris", "description": "Reunion Bilan mensuel", "isAllDay": false },
         { "subject": "Présentation maquette", "startTime": "2020-11-19T14:00:00.000Z", 
         "endTime": "2020-11-19T15:00:00.000Z", "startTimezone": "(UTC+1:00) Paris", "endTimezone": "(UTC+1:00) Paris", "location": "New york", "description": "Présentation finale des maquettes à l'équipe commercial du client", "isAllDay": false } ] }  */
      })
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