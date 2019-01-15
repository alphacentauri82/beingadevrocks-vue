<template>
    <div id="app">

        <v-header></v-header>

        <div id="wrapper">
            <div id="main">
                
                <homey></homey>
                <about></about>
                <podcasts></podcasts>
                <talks></talks>
                <press></press>
                <projects></projects>

            </div>
        </div>

        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from "@/components/Header";
import vFooter from "@/components/Footer";

import Homey from "@/components/Home/Homey";
import About from "@/components/Home/About";
import Podcasts from "@/components/Home/Podcasts";
import Talks from "@/components/Home/Talks";
import Press from "@/components/Home/Press";
import Projects from "@/components/Home/Projects";

export default {
  components: {
    vHeader,
    vFooter,
    Homey,
    About,
    Podcasts,
    Talks,
    Press,
    Projects
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
