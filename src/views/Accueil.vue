<template>
  <div class="wrap">
    <div class="nav">
      <div class="nav-left item">
        <a class="left-link" href="#">Adopter notre solution</a>
      </div>
      <div class="nav-center item">
        <img class="nav-img" src="..\assets\logo.jpg" alt="" />
      </div>
      <div class="nav-right item">
        <a class="right-link1" href="#">Créer un compte</a>
        <p class="slash">/</p>
        <a class="right-link2" href="#">Me connecter</a>
      </div>
    </div>
    <div class="header">
      <h1 class="header-title">
        Gérez les planning de vos équipes avec précision, où que vous soyez
      </h1>
      <h3 class="header-txt">Grâce à Team Planner:</h3>
      <div class="header-img">
        <img class="image" src="..\assets\maquette_pc_jour.jpg" alt="" />
      </div>
    </div>
    <div class="presentation clearfix">
      <div class="presentation-left item">
        <p class="presentation-txt">
          Facilitez la gestion des plannings des différents membres de vos équipes grâce à
          un panel de contrôle affichant clairement les créneaux de chacun d'entre eux
        </p>
        <p class="presentation-txt">
          Ajoutez, modifier et supprimer les tâches de chacun des membres en un clin
          d'oeil
        </p>
      </div>
      <div class="presentation-right item clearfix">
        <img class="presentation-img clearfix" src="..\assets\team_up.png" alt="" />
      </div>
    </div>
    <div class="synchronisation">
      <div class="synchronisation-left item">
        <p class="synchronisation-txt-1">Gagnez du temps avec la synchronisation:</p>
        <p class="synchronisation-txt-2">
          Les créneaux sont synchronisé avec vos calendriers personnels
        </p>
      </div>
      <div class="synchronisation-right item">
        <img class="synchronisation-img" src="..\assets\synchronisation.jpg" alt="" />
      </div>
    </div>
    <div class="try-us">
      <a class="try-us-link" href="#">Adopter notre solution</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "accueil",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.wrap {
  font-family: "Montserrat", sans-serif;
  color: #252c38;
}

/* NAVBAR */
.nav {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav .item {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 10px;
}

.nav .nav-left {
  justify-content: flex-start;
}

.nav .nav-right {
  justify-content: flex-end;
}

.nav .item .left-link,
.nav .item .right-link1,
.nav .item .right-link2,
.nav .item .slash {
  margin: auto 0;
  color: #252c38;
}

.nav .nav-center .nav-img {
  height: 90%;
}

/* HEADER */
.header {
  margin: 45px 0;
}

.header-title {
  margin-top: 80px;
  margin-bottom: 30px;
  font-weight: inherit;
}

.header-txt {
  font-weight: inherit;
}

.header-img {
  width: 70%;
  height: 800px;
  overflow: hidden;
  margin: 30px auto;
  box-shadow: 0 0 7px 0 #c2c4c7;
}

.header-img .image {
  width: 100%;
}

/* BLOCK 1 */
.presentation {
  height: auto;
  width: 100%;
  margin: 70px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 20px;
}

.presentation .presentation-left {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.presentation .presentation-left .presentation-txt {
  margin: 20px;
  line-height: 25px;
}

.presentation .presentation-right {
  width: 30%;
  display: flex;
}

.presentation .presentation-right .presentation-img {
  width: 100%;
}

/* BLOCK 2 */

.synchronisation {
  height: auto;
  width: 100%;
  margin: 70px 0;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  font-size: 20px;
}

.synchronisation .synchronisation-left {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.synchronisation .synchronisation-left .synchronisation-txt {
  margin: 20px;
  line-height: 25px;
}

.synchronisation .synchronisation-right {
  width: 30%;
  display: flex;
}

.synchronisation .synchronisation-right .synchronisation-img {
  width: 100%;
}

/* TRY US */
.try-us {
  width: 100%;
  margin: 30px auto;
}

.try-us .try-us-link {
  text-decoration: none;
  color: #fffaf6;
  display: block;
  width: 250px;
  background: #252c38;
  margin: auto;
  padding: 20px;
}

@media screen and (max-width: 1280px) {
  .header-img {
    max-height: 400px;
  }

  .presentation {
    flex-direction: column-reverse;
    align-items: center;
  }

  .presentation .presentation-left {
    width: 80%;
  }

  .synchronisation {
    flex-direction: column-reverse;
    align-items: center;
  }

  .synchronisation .synchronisation-left {
    width: 80%;
  }

  .synchronisation .synchronisation-right .presentation-img {
    width: 100%;
  }
}
</style>
