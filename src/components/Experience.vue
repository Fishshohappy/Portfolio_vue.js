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
            <h1 style="border-bottom: 8px solid #e7ca47">Experience</h1>
          </div>

          <!-----------------Experience----------------- -->
          <div class="ex">
            <div class="ex_container">
              <div style="padding: 1rem" v-for="(e, i) in exp" :key="i">
                <v-card class="mx-auto" max-width="344">
                  <v-img :src="e.img" height="210px"></v-img>
                  <v-card-title class="text_card" style="color: #455c71">
                    {{ e.title }}
                  </v-card-title>
                  <v-card-actions>
                    <!-- <v-btn color="yellow accent-4" text>  </v-btn> -->
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn
                      text
                      @click="exp[i].show = !e.show"
                      style="overflow-y: hidden; overflow-x: hidden"
                    >
                      Explore
                      <v-icon
                        right
                        style="overflow-y: hidden; overflow-x: hidden"
                      >
                        {{ e.show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="e.show">
                      <v-divider></v-divider>
                      <v-card-text>
                        {{ e.text }}
                        <a
                          :href="e.link"
                          target="_blank"
                          style="text-decoration: none; color: white"
                        >
                          <v-icon style="overflow-y: hidden; width: 100%">
                            mdi-link
                          </v-icon>
                        </a>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </div>
            </div>
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
                <v-icon style="overflow-y: hidden">mdi-phone </v-icon>
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
  name: "Experience-page",
  props: {
    msg: String,
  },
  data: () => ({
    drawer: false,
    group: null,
    nisit: require("../assets/nisit.jpg"),
    ex1: require("../assets/image/figma_tapp.png"),
    show: false,
    ex2: require("../assets/save_wash.png"),
    show_2: false,
    ex3: require("../assets/image/sql.png"),
    show_3: false,
    ex4: require("../assets/html_port.png"),
    show_4: false,
    exp: [
      {
        title: "Design Save & Wash by Figma",
        show: false,
        img: require("../assets/Figma_save_wash.png"),
        text: "Use Figma tool to design the Save & Wasg store.",
        link: "https://www.figma.com/file/JugGdxuYqx8u6HjlO3no0F/Cleaning-store?type=design&node-id=1%3A2&t=1hc0YAKZMr1Xb97l-1",
      },
      {
        title: "Design Tapp auto by Figma",
        show: false,
        img: require("../assets/image/figma_tapp.png"),
        text: "Use Figma tool to design the store.",
        link: "https://www.figma.com/file/gDyqRSZtENlJru6np2vyLQ/TAPP?type=design&node-id=9%3A208&t=hWDRdOjYs1BWjj1j-1",
      },
      {
        title: "Create my portfolio website",
        show: false,
        img: require("../assets/html_port.png"),
        text: "Use HTML5, CSS and Javascrips to design Athitiya's Portfolio.",
        link: "https://athitiya-port.vercel.app/",
      },
      {
        title: "Create Safe & Wash website",
        img: require("../assets/save_wash.png"),
        text: "Use HTML5, CSS and Javascrips to design the Save Wash store.",
        link: "https://save-wash-dusky.vercel.app/",
      },
      {
        title: "Practice using SQL from the Data Rockie course.",
        show: false,
        img: require("../assets/image/sql.png"),
        text: "Use SQL to design the restaurant.",
        link: "https://replit.com/@AthitiyaPanlaba/BootcampHomeworkSQL?v=1",
      },
    ],
  }),
};
</script>

<style scoped></style>
