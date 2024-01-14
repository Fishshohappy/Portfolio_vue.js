<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" floating app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue-grey darken-4--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-title>About me</v-list-item-title>
          </v-list-item>
          <v-list-item to="/Education">
            <v-list-item-icon>
              <v-icon>mdi-school</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Course </v-list-item-title>
          </v-list-item>

          <v-list-item to="/Experience">
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Experience </v-list-item-title>
          </v-list-item>

          <v-list-item to="/Contact">
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Contact </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="blue-grey darken-4" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import "@/assets/style.css";
// import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
