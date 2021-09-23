<template>
  <div>
    <div>
      <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Submit Your Name"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="nameState"
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <div class="card-container">
      <div class="card" v-for="user in users" :key="user.id">
        <a href="#" class="btn" v-b-modal.modal-prevent-closing>
          <img class="btn-img" src="..\assets\delete.png" alt="" />
        </a>
        <img
          v-if="user.image != undefined"
          :src="require(`@/assets/${user.image}.jpeg`)"
          class="card-img-top"
          alt="..."
        />
        <img v-else src="..\assets\user.png" class="card-img-top-default" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ user.prenom }}</h5>
          <h5 class="card-title">{{ user.nom }}</h5>
          <h6 class="card-title">{{ user.poste }}</h6>
          <h6 class="card-title">{{ user.email }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      users: {},
      email: "",
      teamId: "",
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/team/displayTeam/" + this.$route.params.id)
      .then((res) => {
        this.users = res.data.users;
        this.teamId = res.data.id;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 180px;
  margin: 15px;
  background-color: #d5e7fd;
}

.card-img-top-default {
  width: 40%;
  margin: auto;
}

.card-body {
  font-family: Montserrat;
}

.btn {
  width: 10%;
  margin: 5px;
  padding: 0;
}

.btn:hover {
  background-color: transparent;
  border-color: transparent;
  scale: 0.9;
  opacity: 0.8;
  transition: 0.3s;
}

.btn-img {
  width: 100%;
}

/*
MODAL
*/

.removing-modal {
  font-family: Montserrat;
}
</style>
