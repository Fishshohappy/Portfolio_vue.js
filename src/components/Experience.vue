<template>
  <div class="Intro">
    <div style="display: flex; justify-content: center; padding: 2rem">
      <h1 style="border-bottom: 8px solid #e7ca47">Experience</h1>
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
</template>

<script>
export default {
  name: "Experience-page",
  props: {
    msg: String,
  },
  data: () => ({
    nisit: require("../assets/nisit.jpg"),
    exp: [
      // {
      //   title: "Design Tapp auto by Figma",
      //   show: false,
      //   img: require("../assets/image/figma_tapp.png"),
      //   text: "Use Figma tool to design the store.",
      //   link: "https://www.figma.com/file/gDyqRSZtENlJru6np2vyLQ/TAPP?type=design&node-id=9%3A208&t=hWDRdOjYs1BWjj1j-1",
      // },
      // {
      //   title: "Design Save & Wash by Figma",
      //   show: false,
      //   img: require("../assets/Figma_save_wash.png"),
      //   text: "Use Figma tool to design the Save & Wasg store.",
      //   link: "https://www.figma.com/file/JugGdxuYqx8u6HjlO3no0F/Cleaning-store?type=design&node-id=1%3A2&t=1hc0YAKZMr1Xb97l-1",
      // },
      {
        title: "Practice using SQL from the Data Rockie course.",
        show: false,
        img: require("../assets/image/sql.png"),
        text: "Use SQL to design the restaurant.",
        link: "https://replit.com/@AthitiyaPanlaba/BootcampHomeworkSQL?v=1",
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
        show: false,
        img: require("../assets/save_wash.png"),
        text: "Use HTML5, CSS and Javascrips to design the Save Wash.",
        link: "https://save-wash-dusky.vercel.app/",
      },
    ],
  }),
};
</script>

<style scoped>
ex_container {
  display: block;
}
</style>
