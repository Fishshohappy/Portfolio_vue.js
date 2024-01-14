<template>
  <div class="Intro">
    <div style="display: flex; justify-content: center; padding: 2rem">
      <h1 style="border-bottom: 8px solid #e7ca47">Contact</h1>
    </div>
    <v-row>
      <v-col cols="12" md="3" style="padding: 1rem">
        <v-card height="220">
          <v-card-title class="d-flex justify-center py-6">
            By phone
          </v-card-title>
          <v-card-text class="text-center">
            <div class="d-flex justify-center py-4">
              <v-img :src="call" max-width="60px"></v-img>
            </div>

            Call at number <br />
            089-080-2004
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" style="padding: 1rem">
        <v-card height="220">
          <v-card-title class="d-flex justify-center py-6">
            By Email
          </v-card-title>
          <v-card-text class="text-center">
            <div class="d-flex justify-center pb-4">
              <v-img :src="mail" max-width="60px"></v-img>
            </div>
            Please sent an email to<br />
            Athitiya.pla@gmail.com
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" style="padding: 1rem">
        <v-card height="220">
          <v-card-title class="d-flex justify-center py-6">
            By linkedin
          </v-card-title>
          <v-card-text class="text-center">
            <div class="d-flex justify-center pb-4">
              <v-img :src="linkedin" max-width="60px"></v-img>
            </div>

            Contacts me by <v-icon>mdi-ray-end</v-icon><br />
            <a
              href="https://www.linkedin.com/in/athitiya-panlabal-7803ab263/"
              target="_blank"
              style="text-decoration: none; color: rgb(46, 102, 161)"
            >
              LinkedIn
            </a>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" style="padding: 1rem">
        <v-card height="220">
          <v-card-title class="d-flex justify-center py-6">
            By Github
          </v-card-title>
          <v-card-text class="text-center">
            <div class="d-flex justify-center pb-4">
              <v-img :src="Github" max-width="60px"></v-img>
            </div>
            Contacts me by <v-icon>mdi-ray-end</v-icon><br />
            <a
              href="https://github.com/Fishshohappy"
              target="_blank"
              style="text-decoration: none; color: rgb(46, 102, 161)"
            >
              Github
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Contact-page",
  data: () => ({
    me: require("../assets/me.jpg"),
    call: require("../assets/phone.png"),
    mail: require("../assets/email.png"),
    linkedin: require("../assets/linkicon.png"),
    Github: require("../assets/Github.png"),
  }),
};
</script>

<style lang="css" scoped>
/* .container_contact {
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.Sub_contain {
  margin: 35px;
}
@media (max-width: 600px) {
  .container_contact {
    display: block;
    justify-content: center;
    height: 100%;
    overflow-y: hidden;
  }
  .Sub_contain {
    display: block;
    justify-content: center;
    border: 1px solid;
    border-radius: 16px;
    margin: 40px;
    background-color: white;
  }
} */
</style>
