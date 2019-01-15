<template>
  <section id="header">
    <header>
      <span class="image avatar"><img src="@/assets/images/avatar.jpg" alt=""/></span>
      <h1 id="logo"><a href="#">Diana Rodriguez</a></h1>
    </header>
    <nav id="nav">
      <ul>
        <header-link v-for="link in links" :key="link.selector"
                     @click="scroll(link.selector)"
                     :active="active === link.selector">{{ link.text }}</header-link>
      </ul>
    </nav>
    <footer>
      <ul class="icons">
        <li><a href="https://twitter.com/cotufa82" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="https://github.com/alphacentauri82" class="icon fa-github"><span class="label">Github</span></a>
        </li>
        <li><a href="https://linkedin.com/nerdattack82" class="icon fa-linkedin"><span class="label">LinkedIn</span></a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
import { scrollTo, isScrolledIntoView } from "@/libraries/ScrollTools";
import HeaderLink from "@/components/Header/HeaderLink";

export default {
  data() {
    return {
      active: 'homey',
      links: [
        { selector: 'homey', text: 'Home' },
        { selector: 'about', text: 'About' },
        { selector: 'podcasts', text: 'Podcasts/Online Workshops'},
        { selector: 'talks', text: 'Talks/Workshops' },
        { selector: 'press', text: 'Articles/Press' },
        { selector: 'projects', text: 'Community Work' }
      ]
    }
  },
  methods: {
    scroll(selector) {
      window.removeEventListener('scroll', this.scrolled);

      scrollTo('#' + selector, 'start', 'smooth');
      this.active = selector;

      setTimeout(() => {
        window.addEventListener('scroll', this.scrolled);
      }, 1200);
    },
    scrolled() {
      for (let i = 0; i < this.links.length; i++) {
        const link = this.links[i];
        if (isScrolledIntoView('#' + link.selector)) {
          this.active = link.selector;
          return;
        }
      }
    }
  },
  components: {
    HeaderLink
  },
  created() {
    window.addEventListener('scroll', this.scrolled);
  }
};
</script>
