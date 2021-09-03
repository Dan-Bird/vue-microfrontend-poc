<template>
  <nav class="nav">
      <a href="/page1" class="link">
        Page 1
      </a>
      <a href="/page2" class="link">
        Page 2
      </a>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: #000;
  color: #fff;
}

.link {
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
}

.link:hover,
.link:focus {
  color: #1098f7;
}
</style>
