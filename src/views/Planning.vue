<template v-for="user in users">
  <div>
    <day-schedule
      class="1schedule"
      :tasks="user.tasks"
      :users="user"
      v-for="user in users"
      :key="user.id"
    />
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
      .get("http://localhost:3000/task/findTeamTasks/" + this.$route.params.id)
      .then((res) => {
        this.users = res.data.users;
        console.log(this.users.tasks);
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style></style>
