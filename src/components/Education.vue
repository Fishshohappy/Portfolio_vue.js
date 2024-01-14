<template>
  <div class="Intro">
    <div style="display: flex; justify-content: center; padding: 2rem">
      <h1 style="border-bottom: 8px solid #e7ca47">Course</h1>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <v-card height="450px">
          <v-img :src="Phototyping" height="200px"></v-img>
          <v-card-title class="d-flex justify-center">
            Phototyping by Chula MOCC</v-card-title
          >
          <v-card-text class="text-center">
            I have taken a course about designing an application.<br />
            and website by using the Figma program. when I passed the exam.<br />
            I received certification about phototyping.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card height="450px">
          <v-img :src="Cergg" height="200px"></v-img>
          <v-card-title class="d-flex justify-center">
            Data analytics by Google cousera</v-card-title
          >
          <v-card-text class="text-center">
            I have taken a course about Data Analytics.<br />
            The course about how to manage, filter data by SQL and R.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Education-page",
  data: () => ({
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
  overflow-x: hidden;
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
    margin: inherit;
  }
}
</style>
