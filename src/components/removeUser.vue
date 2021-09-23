<template>
  <div class="removing-modal">
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Retirer l'utilisateur de cet équipe"
      @show="resetModal1"
      @hidden="resetModal1"
      @ok="handleOk1"
    >
      <form ref="form" @submit.prevent="removeUser">
        <b-form-group
          label="Entrez l'adresse email de l'utilisateur que vous souhaitez retirer de votre équipe:"
          label-for="email"
          invalid-feedback="Email is required"
        >
          <b-form-input
            id="name-input"
            v-model="email"
            placeholder="email de l'utilisateur"
            required
          >
          </b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    handleOk1(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    resetModal1() {
      this.email = "";
    },
    removeUser: function () {
      this.axios
        .post("http://localhost:3000/team/removeTeamUser", {
          email: this.email,
          teamId: this.teamId,
        })
        .then((res) => {
          alert(res);
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    },
    handleSubmit1() {
      // Exit when the form isn't valid
      /* if (!this.checkFormValidity()) {
        return;
      } */
      // Push the name to submitted names
      this.removeUser();
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<style></style>
