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
                <img class="drawing" src="" alt="">
                <a class="sign-in-link" href="#">créer un compte</a>
            </div>
        </div>
        <img class="buildings clearfix" src="" alt="">
      </div>
    </div>
</template>

<script>
import jwt from 'vue-jwt-decode'
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
            this.axios
                .post("http://localhost:3000/admin/login", {
                    email: this.email,
                    password: this.password
                })
                .then((res) => {
                    if (res.data.auth) {
                        alert(res.data.auth);
                        localStorage.setItem("auth", res.data.auth);
                        localStorage.setItem("token", res.data.token);
                        var admin = jwt.decode(res.data.token);
                        console.log(admin);
                        if(admin.role == "admin"){
                            this.$router.push({ path: "/admin/home"});
                        } else {
                            this.$router.push({ path: "/home" });
                            window.location.reload();
                        }
                        /* this.$router.push({ name: "profil" });
                        window.location.reload(); */
                    } else {
                        alert(res.data.auth);
                        /* this.$router.push({
                            name: "register",
                            params: { msg: "non connecté" },
                        }); */
                    }
                })
                .catch((err) => {
                    console.log(err);
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
    background-color: #252c38 ;
    padding: 40px 0;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: 'Montserrat', sans-serif;
    color: #fffaf6;
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
    background-color: #252c38;
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
    border: #fffaf6 solid 2px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
}

.container .sign-up-form .sign-up-input:focus {
    transition: ease-in-out 0.3s;
    border: #fffaf6 solid 2px;
    color: #252c38;
    background-color: #fffaf6;
}

#register-button {
    width: 90px;
    height: 40px;
    border: none;
    background-color: #fffaf6;
    border-radius: 20px;
    margin: 0 auto;
    color: #252c38;
    font-family: 'Montserrat', sans-serif;
}

#register-button:hover {
    background-color: #252c38;
    color: #fffaf6;
    border: #fffaf6 solid 3px;
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
    color: #fffaf6;
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