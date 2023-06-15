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
            <h1 style="border-bottom: 8px solid #e7ca47">
              Miss Athitiya Panlabal
            </h1>
          </div>

          <div
            style="
              width: 100%;
              display: flex;
              justify-content: center;
              position: relative;
            "
          >
            <img v-bind:src="me" />
          </div>

          <!-- <div
            style="
              padding: 5px;
              height: 50%;
              position: absolute;
              top: 500px;
              left: 70px;

            "
          >
            <h2 style="text-align: ce; font-size: 70px; color: white">
              Hi
              <br />
              I'm Pla
              <br />
            </h2>
          </div> -->

          <div
            style="
              padding: 5px;
              width: 100%;
              height: 50%;
              display: flex;
              justify-content: center;
            "
          >
            <p>
              <br />
              My name is Athitiya Panlabal [Nickname : Pla] <br />
              This year I will graduate from Chulalongkorn University with a
              Bachelor of Chemistry Science GPAX 2.85
              <br />
              <br />
              You will notice from my resume that I have worked and collecting
              experience in Functional programming languagesa,web development
              and Figma to implement application UI that would be relevant for
              the position you advertise.
              <br />
              <br />
              I believe I would fit the style, approach, and culture of your
              company and I hope I can discuss this matter further with you in
              an interview in the near future.
              <br />
              <br />
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
  name: "About-page",
  data: () => ({
    drawer: false,
    group: null,
    me: require("../assets/me.jpg"),
  }),
};
</script>

<style lang="css" scoped>
p {
  color: #263238;
  font-size: 18px;
}
@media (max-width: 600px) {
  p {
    font-size: 15px;
  }
}
</style>
