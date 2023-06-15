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
              Athitiya's Portfolio
            </h1>
          </div>

          <div class="nisitimg">
            <img v-bind:src="nisit" />
          </div>
          <div
            style="
              padding: 5px;
              border: 3px solid #bdbdbd;
              width: 80%;
              align-items: center;
              border-radius: 8px;
              margin: auto;
            "
          >
            <p style="text-align: center; font-size: 17px">
              My name is Athitiya Panlabal (Pla) <br />
              This year I will graduate from Chulalongkorn University with a
              Bachelor of Chemistry GPAX 2.85 <br />and I believe I would fit
              the style, approach, and culture of your company.
              <br />
            </p>
          </div>

          <div class="click_cv">
            <v-btn outlined class="visit-bt" color="blue-grey darken-4" large>
              <a
                style="
                  text-decoration: none;
                  color: #455a64;
                  overflow-y: hidden;
                  font-weight: 100px;
                "
                href="https://chula-my.sharepoint.com/:b:/g/personal/6234111623_student_chula_ac_th/EWHVBuZpgdVPoedvcBoL4VIBjDw2g2Vk2krrOrcf3nueNQ?e=mPKr8D"
                target="_blank"
                >CLICK FOR MY RESUME</a
              >
              <v-icon style="color: blue-grey darken-1; overflow-y: hidden"
                >mdi-format-vertical-align-bottom</v-icon
              >
            </v-btn>
          </div>
          <!-- -----------------Course----------------- -->
          <div class="course">
            <div style="display: flex; justify-content: center; padding: 2rem">
              <h2 style="border-bottom: 8px solid #e7ca47">Course</h2>
            </div>

            <div class="textbox">
              <h4 style="text-align: center; margin-bottom: 10px">
                Certifications
              </h4>
              <li>Google Data analysis</li>
              <li>Phototyping by Chula MOCC</li>
            </div>

            <div class="textbox">
              <h4 style="text-align: center; margin-bottom: 10px">Tools</h4>
              <li>HTML [Good]</li>
              <li>CSS [Good]</li>
              <li>SQL [Basic]</li>
              <li>R [Basic]</li>
              <li>Javascrips [Basic]</li>
              <li>Vue.js [Basic]</li>
            </div>
            <div class="textbox">
              <h4 style="text-align: center; margin-bottom: 10px">Course</h4>
              <li>Python at Chula</li>
              <li>Data analysis by Rockie Data</li>
            </div>
          </div>
          <!-----------------Experience----------------- -->
          <div class="ex">
            <div style="display: flex; justify-content: center; padding: 2rem">
              <h2 style="border-bottom: 8px solid #e7ca47">Experience</h2>
            </div>
            <div class="ex_container">
              <div style="padding: 1rem">
                <v-card class="mx-auto" max-width="344" padding="1rem">
                  <v-img v-bind:src="ex1" height="210px"></v-img>
                  <v-card-title style="color: #455c71" class="text_card">
                    Tapp auto by Figma</v-card-title
                  >
                  <v-card-actions>
                    <v-btn color="yellow accent-4" text> Explore </v-btn>
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn
                      icon
                      @click="show = !show"
                      style="overflow-y: hidden; overflow-x: hidden"
                    >
                      <v-icon style="overflow-y: hidden; overflow-x: hidden">{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text>
                        Use Figma tool to design the store.
                        <a
                          href="https://www.figma.com/file/gDyqRSZtENlJru6np2vyLQ/TAPP?type=design&node-id=9%3A208&t=hWDRdOjYs1BWjj1j-1"
                          target="_blank"
                          style="text-decoration: none; color: white"
                          ><v-icon style="overflow-y: hidden; width: 100%"
                            >mdi-link</v-icon
                          ></a
                        >
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </div>

              <div style="padding: 1rem">
                <v-card class="mx-auto" max-width="344">
                  <v-img v-bind:src="ex2" height="210px"></v-img>
                  <v-card-title style="color: #455c71" class="text_card">
                    Safe Wash store</v-card-title
                  >
                  <v-card-actions>
                    <v-btn color="yellow accent-4" text> Explore </v-btn>
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn
                      icon
                      @click="show_2 = !show_2"
                      style="overflow-y: hidden; overflow-x: hidden"
                    >
                      <v-icon style="overflow-y: hidden; overflow-x: hidden">{{
                        show_2 ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show_2">
                      <v-divider></v-divider>
                      <v-card-text>
                        Use HTML5, CSS and Javascrips to design the Save Wash
                        store.
                        <a
                          href="https://save-wash-dusky.vercel.app/"
                          target="_blank"
                          style="text-decoration: none; color: white"
                          ><v-icon style="overflow-y: hidden; width: 100%"
                            >mdi-link</v-icon
                          ></a
                        >
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </div>

              <div style="padding: 1rem">
                <v-card class="mx-auto" max-width="344">
                  <v-img v-bind:src="ex3" height="210px"></v-img>
                  <v-card-title style="color: #455c71" class="text_card">
                    SQL creat restaurant store</v-card-title
                  >
                  <v-card-actions>
                    <v-btn color="yellow accent-4" text> Explore </v-btn>
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn
                      icon
                      @click="show_3 = !show_3"
                      style="overflow-y: hidden; overflow-x: hidden"
                    >
                      <v-icon style="overflow-y: hidden; overflow-x: hidden">{{
                        show_3 ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show_3">
                      <v-divider></v-divider>
                      <v-card-text>
                        Use SQL to design data restaurant store.
                        <a
                          href="https://replit.com/@AthitiyaPanlaba/BootcampHomeworkSQL?v=1"
                          target="_blank"
                          style="text-decoration: none; color: white"
                          ><v-icon style="overflow-y: hidden; width: 100%"
                            >mdi-link</v-icon
                          ></a
                        >
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </div>

              <div style="padding: 1rem">
                <v-card class="mx-auto" max-width="344">
                  <v-img v-bind:src="ex4" height="210px"></v-img>
                  <v-card-title style="color: #455c71" class="text_card">
                    My portfolio</v-card-title
                  >
                  <v-card-actions>
                    <v-btn color="yellow accent-4" text> Explore </v-btn>
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn
                      icon
                      @click="show_4 = !show_4"
                      style="overflow-y: hidden; overflow-x: hidden"
                    >
                      <v-icon style="overflow-y: hidden; overflow-x: hidden">{{
                        show_4 ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show_4">
                      <v-divider></v-divider>
                      <v-card-text>
                        Use HTML5, CSS and Javascrips to design Athitiya's
                        Portfolio.
                        <a
                          href="https://athitiya-port.vercel.app/"
                          target="_blank"
                          style="text-decoration: none; color: white"
                          ><v-icon style="overflow-y: hidden; width: 100%"
                            >mdi-link</v-icon
                          ></a
                        >
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
  name: "HelloWorld",
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
  }),
};
</script>

<style scoped></style>
