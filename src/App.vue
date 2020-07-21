<template>
  <v-app>
        <v-content>
      <HelloWorld/>

    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
// import Page from "./components/Page";

export default {
  name: 'App',

  components: {
    HelloWorld,
      // Page,
  },

  data: () => ({
    //
  }),
};
</script>
