<template>
  <v-app>
    <div>
      <v-card class="mx-auto overflow-hidden">
        <v-app-bar color="blue-grey darken-4" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title></v-toolbar-title>
        </v-app-bar>
        <!-- -----------------Intro----------------- -->
        <div class="Intro">
          <div style="display: flex; justify-content: center">
            <h1 style="border-bottom: 8px solid #e7ca47">Course</h1>
          </div>

          <div class="contain-2">
            <img class="img" v-bind:src="Phototyping" />
            <h3 class="h3-text">Phototyping by Chula MOCC</h3>
            <p class="p-text">
              I have taken a course about designing an application.<br />
              and website by using the Figma program. when I passed the exam.<br />
              I received certification about phototyping.
            </p>
          </div>

          <div class="contain-2">
            <img class="img" v-bind:src="Cergg" />
            <h3 class="h3-text">Data analytics by Google cousera</h3>
            <p class="p-text">
              I have taken a course about Data Analytics.<br />
              The course about how to manage, filter data by SQL and R.
            </p>
          </div>

          <div style="width: max-content; height: 5rem"></div>
          <div>
            <v-footer
              color="blue-grey darken-4"
              dark
              style="display: flex; justify-content: center"
            >
              <div style="margin: 20px">
                <!-- <a
                  href="https://github.com/Fishshohappy/athitiya_port"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ></a
                > -->
                <v-icon style="overflow-y: hidden">mdi-github </v-icon>
              </div>
              <div style="margin: 20px">
                <v-icon style="overflow-y: hidden">mdi-email</v-icon>
              </div>
              <div style="margin: 20px">
                <!-- <a
                  href="https://www.linkedin.com/in/athitiya-panlabal-7803ab263/"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ></a> -->
                <v-icon style="overflow-y: hidden">mdi-linkedin</v-icon>
              </div>
              <div style="margin: 20px">
                <v-icon style="overflow-y: hidden">mdi-phone</v-icon>
              </div>
            </v-footer>
          </div>
        </div>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="blue-grey darken-4--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="overflow-y: hidden">mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link
                    to="/"
                    style="text-decoration: none; color: #212121"
                    >Home</router-link
                  ></v-list-item-title
                >
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="overflow-y: hidden">mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-title
                  ><router-link
                    to="/about"
                    style="text-decoration: none; color: #212121"
                    >About me</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="overflow-y: hidden">mdi-school</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link
                    to="/Education"
                    style="text-decoration: none; color: #212121"
                    >Course</router-link
                  >
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="overflow-y: hidden">mdi-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link
                    to="/Experience"
                    style="text-decoration: none; color: #212121"
                    >Experience</router-link
                  >
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="overflow-y: hidden">mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link
                    to="/Contact"
                    style="text-decoration: none; color: #212121"
                    >Contact</router-link
                  >
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Education-page",
  data: () => ({
    drawer: false,
    group: null,
    Phototyping: require("../assets/image/Phototyping.jpeg"),
    Cergg: require("../assets/image/cergg.png"),
  }),
};
</script>

<style lang="css" scoped>
.contain-2 {
  height: 300px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  margin: 30px;
  background-color: #f5f5f5;
  border-radius: 16px;
}
.img {
  width: 420px;
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 1rem;
}
.h3-text {
  font-size: 18px;
  color: #263238;
}
p {
  color: #263238;
}
@media (max-width: 600px) {
  .contain-2 {
    display: block;
    overflow-y: hidden;
    height: fit-content;
  }
  .h3-text {
    text-align: center;
    font-size: 16px;
  }
  .img {
    display: block;
    margin: auto;
    width: 300px;
  }
  p {
    font-size: 15px;
  }
}
</style>
