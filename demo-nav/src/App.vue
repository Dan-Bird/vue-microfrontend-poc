<template>
  <div id="app-nav">
    <navigation msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from './components/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class App extends Vue {}
</script>
