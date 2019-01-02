<template>
    <div id="app">

        <v-header></v-header>

        <div id="wrapper">
            <div id="main">

                <about></about>
                <skills></skills>
                <accomplishments></accomplishments>
                <contact></contact>

            </div>
        </div>

        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from '@/components/Header';
import vFooter from '@/components/Footer';

import About from '@/components/Home/About';
import Skills from '@/components/Home/Skills';
import Accomplishments from '@/components/Home/Accomplishments';
import Contact from '@/components/Home/Contact';

export default {
    components: {
        vHeader,
        vFooter,
        About,
        Skills,
        Accomplishments,
        Contact
    }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
