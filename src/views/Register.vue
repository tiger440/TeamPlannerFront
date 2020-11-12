<template>
  <div class="wrap clearfix">
      <div class="container clearfix">
          <h1 class="title">Sign Up</h1>
          <form class="sign-up-form" @submit.prevent="doregister">
              <input class="sign-up-input" type="nom" name="nom" id="nom" v-model="nom" placeholder="nom">
              <input class="sign-up-input" type="prenom" name="prenom" id="prenom" v-model="prenom" placeholder="prenom">
              <input class="sign-up-input" type="poste" name="poste" id="poste" v-model="poste" placeholder="poste">
              <input class="sign-up-input" type="email" name="email" id="email" v-model="email" placeholder="email">
              <input class="sign-up-input" type="password" name="password" id="password" v-model="password" placeholder="mot de passe">
              <button class="sign-up-input" id="register-button" type="submit">Register</button>
          </form>
          <div class="left-part">
              <img class="drawing" src="..\assets\architecture-dessin.png" alt="">
              <a class="sign-in-link" href="#">j'ai déjà un compte</a>
          </div>
      </div>
      <img class="buildings clearfix" src="..\assets\buildings.png" alt="">
  </div>
</template>

<script>

export default {
    name: "register",
    data() {
        return {
            nom: "",
            prenom: "",
            poste: "",
            email: "",
            password: "",
        }
    },
    methods: {
        doregister: function () {
            this.axios.post(this.$apiurl + "user/register", {
                nom: this.nom,
                prenom: this.prenom,
                poste: this.poste,
                email: this.email,
                password: this.password,
            })
            .then((res) => {
                console.log(res)
                if (res.data.token) {
                    this.$router.push({name:'Login'})
                    window.location.reload();
                } else {
                    this.$router.push({name: "register", params: {msg: "non connecté"} })
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.wrap {
    position: relative;
    padding: 30px 0 70px 0;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: 'Montserrat', sans-serif;
    color: #252b37;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.container {
    position: relative;
    width: 70%;
    height: auto;
    box-shadow: 0 0 7px 0 #c2c4c7;
    background-color: #fffaf6;
    padding: 15px 0 70px 0;
    z-index: 3;
}

.container .title {
    width: 100%;
    height: 20%;
    font-size: 25px;
}

.container .sign-up-form {
    width: 50%;
    height: 80%;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
}

.container .sign-up-form .sign-up-input {
    width: 80%;
    height: 29px;
    margin: 20px auto;
    padding: 0 10px;
    border: #252c38 solid 2px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
}

#register-button {
    width: 90px;
    height: 60px;
    border: none;
    background-color: #252c38;
    border-radius: 20px;
    margin: auto;
    color: #fffaf6;
    font-family: 'Montserrat', sans-serif;
}

#register-button:hover {
    background-color: #fffaf6;
    color: #252c38;
    border: #252c38 solid 3px;
    transition: ease-in-out 0.5s;
}

.container .left-part {
    width: 50%;
    height: 80%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container .left-part .drawing {
    width: 100%;
    padding: auto 0;
}

.container .left-part .sign-in-link {
    color: #252c38;
    margin-bottom: 40px;
}

.container .left-part .sign-in-link:hover {
    opacity: 70%;
}

.buildings {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden;
}

@media (max-width: 768.10px) {
    .container .left-part .drawing {
        display: none;
    }

    .container {
        padding-bottom: 0;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .container .sign-up-form {
        float: none;
        width: 100%;
    }

    .container .sign-up-form .sign-up-input {
        width: 70%;
    }

    .container .left-part{
        padding-top: 40px;
        width: 100%;
        float: none;
    }

    #register-button {
        margin-top: 20px;
    }

}

</style>