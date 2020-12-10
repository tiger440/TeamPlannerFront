<template>
  <div>
    <day-schedule :scheduleData="scheduleData" :users="users" class="1schedule" />
  </div>
</template>

<script>
import DaySchedule from "../components/DaySchedule";
export default {
  name: "planning",
  data() {
    return {
      users: {},
    };
  },
  components: {
    DaySchedule,
  },
  created() {
    this.axios
      .get("http://localhost:3000/team/displayTeam/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        this.users = res;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style></style>
