<template>
  <div>
      <div class="wrap clearfix">
        <div class="container clearfix">
            <h1 class="title">Sign In</h1>
            <form class="sign-up-form" @submit.prevent="dologin">
                <input class="sign-up-input" type="email" name="email" id="email" v-model="email" placeholder="email">
                <input class="sign-up-input" type="password" name="password" id="password" v-model="password" placeholder="mot de passe">
                <button class="sign-up-input" id="register-button" type="submit">Login</button>
            </form>
            <div class="left-part">
                <img class="drawing" src="..\assets\teamwork.png" alt="">
                <a class="sign-in-link" href="#">créer un compte</a>
            </div>
        </div>
        <img class="buildings clearfix" src="..\assets\buildings.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        dologin: function () {
            this.axios.post("http://localhost:3000/user/login", {
                email: this.email,
                password: this.password,
            })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    this.$router.push({name: 'home'})
                } else {
                    console.log("not connected")
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
    padding: 40px 0;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: 'Montserrat', sans-serif;
    color: #252b37;
    overflow: hidden;
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
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.container .sign-up-form .sign-up-input {
    width: 70%;
    height: 25px;
    padding: 0 10px;
    margin: 30px auto;
    border: #252c38 solid 2px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
}

.container .sign-up-form .sign-up-input:focus {
    transition: ease-in-out 0.3s;
    border: #252c38 solid 2px;
    color: #fffaf6;
    background-color: #252c38;
}

#register-button {
    width: 90px;
    height: 40px;
    border: none;
    background-color: #252c38;
    border-radius: 20px;
    margin: 0 auto;
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
    float: right;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
}

.container .left-part .drawing {
    width: 70%;
    margin: auto;
}

.container .left-part .sign-in-link {
    color: #252c38;
    margin-top: 40px;
    margin-bottom: 10px;
    padding-top: 20px;
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

    .container .left-part .sign-in-link {
        margin-bottom: 40px;
        padding: 0;
    }

    #register-button {
        margin-top: 20px;
    }

}

</style>