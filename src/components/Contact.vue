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
            <h1 style="border-bottom: 8px solid #e7ca47">Contact</h1>
          </div>

          <div class="container_contact">
            <div class="Sub_contain">
              <h4
                style="
                  font-size: 18px;
                  display: flex;
                  justify-content: center;
                  overflow-y: hidden;
                "
              >
                By phone
              </h4>
              <div style="display: flex; justify-content: center">
                <img
                  v-bind:src="call"
                  style="width: 100px; height: 100px padding: 10px"
                />
              </div>

              <p>call at number <br />089-080-2004</p>
            </div>

            <div class="Sub_contain">
              <h4
                style="font-size: 18px; display: flex; justify-content: center"
              >
                By email
              </h4>
              <div style="display: flex; justify-content: center">
                <img
                  v-bind:src="mail"
                  style="width: 100px; height: 100px; padding: 10px"
                />
              </div>

              <p>
                If you can not contact me <br />please sent to email <br />
                'Athitiya.pla@gmail.com'
              </p>
            </div>

            <div class="Sub_contain">
              <h4
                style="font-size: 18px; display: flex; justify-content: center"
              >
                By linkedin & Github
              </h4>
              <div style="display: flex; justify-content: center">
                <img
                  v-bind:src="linkedin"
                  style="width: 100px; height: 100px; padding: 10px"
                />
              </div>

              <p>
                And the last contact is Linkedin and Github,<br />
                you can click at icon.
                <a
                  href="https://www.linkedin.com/in/athitiya-panlabal-7803ab263/"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ><v-icon style="overflow-y: hidden; width: 100%"
                    >mdi-linkedin</v-icon
                  ></a
                >
                <a
                  href="https://github.com/Fishshohappy/athitiya_port"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ><v-icon style="overflow-y: hidden; width: 100%"
                    >mdi-github</v-icon
                  ></a
                >
              </p>
            </div>
          </div>

          <!-- <div style="width: max-content; height: 5rem"></div>
          <div>
            <v-footer
              color="blue-grey darken-4"
              dark
              style="display: flex; justify-content: center"
            >
              <div style="margin: 20px">
                <a
                  href="https://github.com/Fishshohappy/athitiya_port"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ><v-icon style="overflow-y: hidden">mdi-github </v-icon></a
                >
              </div>
              <div style="margin: 20px">
                <a
                  href="https://www.Email.com"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ><v-icon style="overflow-y: hidden">mdi-email</v-icon></a
                >
              </div>
              <div style="margin: 20px">
                <a
                  href="https://www.linkedin.com/in/athitiya-panlabal-7803ab263/"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ><v-icon style="overflow-y: hidden">mdi-linkedin</v-icon></a
                >
              </div>
              <div style="margin: 20px">
                <a
                  href="https://www.Email.com"
                  target="_blank"
                  style="text-decoration: none; color: white"
                  ><v-icon style="overflow-y: hidden">mdi-phone</v-icon></a
                >
              </div>
            </v-footer>
          </div> -->
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
  name: "Contact-page",
  data: () => ({
    drawer: false,
    group: null,
    me: require("../assets/me.jpg"),
    call: require("../assets/phone.svg"),
    mail: require("../assets/mail.svg"),
    linkedin: require("../assets/linkedin.svg"),
  }),
};
</script>

<style lang="css" scoped>
.container_contact {
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.Sub_contain {
  padding: 25px;
  margin: 35px;
}
@media (max-width: 600px) {
  .container_contact {
    display: block;
    justify-content: center;
    width: 100vw;
    height: 100%;
  }
  .Sub_contain {
    display: block;
    justify-content: center;
    border: 1px solid;
    border-radius: 16px;
    margin: 40px;
    background-color: white;
  }
}
</style>
