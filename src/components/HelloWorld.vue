<template>
  <div class="Intro">
    <div style="display: flex; justify-content: center">
      <h1 style="border-bottom: 8px solid #e7ca47">Athitiya's Portfolio</h1>
    </div>
    <v-row>
      <v-col cols="12" class="d-flex justify-center py-6">
        <v-img :src="nisit" max-width="500px" :aspect-ratio="3 / 2" contain>
        </v-img>
      </v-col>
      <v-col cols="12" class="d-flex justify-center py-6">
        <v-card outlined max-width="500px">
          <v-card-text class="text-center">
            My name is Athitiya Panlabal (Pla) <br />
            This year I will graduate from Chulalongkorn University with a
            Bachelor of Chemistry GPAX 2.85 <br />and I believe I would fit the
            style, approach, and culture of your company.
            <br />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-center py-6">
        <v-btn outlined class="visit-bt" color="blue-grey darken-4" large>
          <a
            style="
              text-decoration: none;
              color: #455a64;
              overflow-y: hidden;
              font-weight: 100px;
            "
            href="https://chula-my.sharepoint.com/:b:/g/personal/6234111623_alumni_chula_ac_th/EW-LX0kjktxDsaQ1HOPW1s8BjDVIdL40B4riMa7MNAbKNA?e=02EieC"
            target="_blank"
            >CLICK FOR MY RESUME</a
          >
          <v-icon
            style="color: blue-grey darken-1; overflow-y: hidden overflow-x: hidden"
            >mdi-format-vertical-align-bottom</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>

    <!-- -----------------Course----------------- -->
    <div class="course">
      <div style="display: flex; justify-content: center; padding: 2rem">
        <h2 style="border-bottom: 8px solid #e7ca47">Course</h2>
      </div>
      <v-row>
        <v-col cols="12" md="4">
          <v-card height="200">
            <v-card-title
              class="d-flex justify-center"
              style="text-align: center; margin-bottom: 10px"
              >Certifications</v-card-title
            >
            <v-card-text>
              <li>Google Data analysis</li>
              <li>Phototyping by Chula MOOC</li>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card height="200">
            <v-card-title
              class="d-flex justify-center"
              style="text-align: center; margin-bottom: 10px"
              >Tools</v-card-title
            >
            <v-card-text>
              <li>HTML [Good]</li>
              <li>CSS [Good]</li>
              <li>SQL [Basic]</li>
              <li>Javascrips [Basic]</li>
              <li>Vue.js [Basic]</li>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card height="200">
            <v-card-title
              class="d-flex justify-center"
              style="text-align: center; margin-bottom: 10px"
              >Course</v-card-title
            >
            <v-card-text>
              <li>Phototyping by Chula MOOC</li>
              <li>Data analytics by Google cousera</li>
              <li>Data analysis by Rockie Data</li>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-----------------Experience----------------- -->
    <div class="ex">
      <div style="display: flex; justify-content: center; padding: 2rem">
        <h2 style="border-bottom: 8px solid #e7ca47">Experience</h2>
      </div>
      <v-row>
        <v-col
          cols="12"
          md="4"
          style="padding: 1rem"
          v-for="(e, i) in exp"
          :key="i"
        >
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
                <v-icon right style="overflow-y: hidden; overflow-x: hidden">
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
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
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
        title: "Create my portfolio website",
        show: false,
        img: require("../assets/html_port.png"),
        text: "Use HTML5, CSS and Javascrips to design Athitiya's Portfolio.",
        link: "https://athitiya-port.vercel.app/",
      },
      // {
      //   title: "Design Save Wash by Figma",
      //   show: false,
      //   img: require("../assets/Figma_save_wash.png"),
      //   text: "Use Figma tool to design the Save Wash.",
      //   link: "https://www.figma.com/file/JugGdxuYqx8u6HjlO3no0F/Cleaning-store?type=design&node-id=1%3A2&t=1hc0YAKZMr1Xb97l-1",
      // },
      {
        title: "Design The SAKSAT Hospital by Figma",
        show: false,
        img: require("../assets/image/MacBook_bg1.png"),
        text: "Use Figma tool to design the animals hospital.",
        link: "https://www.figma.com/proto/JugGdxuYqx8u6HjlO3no0F/The-RAKSAT-Hospital?page-id=1%3A2&type=design&node-id=221-38269&viewport=-829%2C208%2C0.21&t=9BitZvuEWObimYaN-1&scaling=min-zoom&mode=design",
      },
      {
        title: "Create Safe Wash website",
        show: false,
        img: require("../assets/save_wash.png"),
        text: "Use HTML5, CSS and Javascrips to design the Save Wash.",
        link: "https://save-wash-dusky.vercel.app/",
      },
      // {
      //   title: "Design Tapp Auto by Figma",
      //   show: false,
      //   img: require("../assets/image/figma_tapp.png"),
      //   text: "Use Figma tool to design the TAPP Auto store.",
      //   link: "https://www.figma.com/file/gDyqRSZtENlJru6np2vyLQ/TAPP?type=design&node-id=9%3A208&t=hWDRdOjYs1BWjj1j-1",
      // },

      {
        title: "Practice using SQL from the DataRockie course.",
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
