<template>
  <div class="Intro">
    <div style="display: flex; justify-content: center; padding: 2rem">
      <h1 style="border-bottom: 8px solid #e7ca47">Miss Athitiya Panlabal</h1>
    </div>
    <v-row>
      <v-col cols="12" class="d-flex justify-center py-6">
        <v-img
          :src="me"
          max-width="500px"
          :aspect-ratio="3 / 2"
          style="border-radius: 8px"
        >
        </v-img>
      </v-col>
      <v-col cols="12" class="d-flex justify-center py-8">
        <v-card outlined max-width="700px">
          <v-card-text>
            <br />
            My name is Athitiya Panlabal [nickname : Pla] <br />
            This year, I will graduate from Chulalongkorn University with a
            Bachelor of Chemistry Science GPAX 2.85
            <br />
            <br />
            You will notice from my resume that I try to practice using
            functional programming languages, web development, and Figma to
            implement application UI.
            <br />
            <br />
            I believe I would fit the style, approach, and culture of your
            company and I hope I can discuss this matter further with you in an
            interview in the near future.
            <br />
            <br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About-page",
  data: () => ({
    me: require("../assets/me.jpg"),
  }),
};
</script>

<style lang="css" scoped>
p {
  color: #263238;
  font-size: 18px;
  text-align: left;
}

@media (max-width: 600px) {
  .contain-text {
    display: block;
    justify-content: center;
    margin-top: 20px;
    width: auto;
  }
}
</style>
