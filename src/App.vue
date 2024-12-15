<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/footer/Footer.vue'
import Header from '@/components/header/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family: system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  touch-action: manipulation;
}

body {
  position: relative;
  min-height: 100%;
  margin: 0;
  font-feature-settings: "kern";
}

:where(*, *::before, *::after) {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  word-wrap: break-word;
}

main {
  display: block;
}

hr {
  border-top-width: 1px;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

:where(pre, code, kbd, samp) {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

:where(b, strong) {
  font-weight: bold;
}

small {
  font-size: 80%;
}

:where(sub, sup) {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

:where(button, input, optgroup, select, textarea) {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

:where(button, input) {
  overflow: visible;
}

:where(button, select) {
  text-transform: none;
}

:where(button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner) {
  border-style: none;
  padding: 0;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

:where([type="checkbox"], [type="radio"]) {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none !important;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: -webkit-box;
  display: -webkit-list-item;
  display: -ms-list-itembox;
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

:where(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre) {
  margin: 0;
}

button {
  background: transparent;
  padding: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

:where(ol, ul) {
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

:where(button, [role="button"]) {
  cursor: pointer;
}

button::-moz-focus-inner {
  border: 0 !important;
}

table {
  border-collapse: collapse;
}

:where(h1, h2, h3, h4, h5, h6) {
  font-size: inherit;
  font-weight: inherit;
}

:where(button, input, optgroup, select, textarea) {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}

:where(img, video) {
  max-width: 100%;
  height: auto;
}

[data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
  outline: none;
  box-shadow: none;
}

select::-ms-expand {
  display: none;
}

:root,
:host {
  --chakra-vh: 100vh;
}

@supports (height: -webkit-fill-available) {

  :root,
  :host {
    --chakra-vh: -webkit-fill-available;
  }
}

@supports (height: -moz-fill-available) {

  :root,
  :host {
    --chakra-vh: -moz-fill-available;
  }
}

@supports (height: 100dvh) {

  :root,
  :host {
    --chakra-vh: 100dvh;
  }
}

body {
  font-family: var(--chakra-fonts-body);
  color: var(--chakra-colors-chakra-body-text);
  background: var(--chakra-colors-chakra-body-bg);
  transition-property: background-color;
  transition-duration: var(--chakra-transition-duration-normal);
  line-height: var(--chakra-lineHeights-base);
}

*::-webkit-input-placeholder {
  color: var(--chakra-colors-chakra-placeholder-color);
}

*::-moz-placeholder {
  color: var(--chakra-colors-chakra-placeholder-color);
}

*:-ms-input-placeholder {
  color: var(--chakra-colors-chakra-placeholder-color);
}

*::placeholder {
  color: var(--chakra-colors-chakra-placeholder-color);
}

*,
*::before,
::after {
  border-color: var(--chakra-colors-chakra-border-color);
}

html,
body {
  font-family: var(--chakra-fonts-body);
  font-weight: 500;
}

#__next {
  height: 100%;
}

:not(.chakra-dont-set-collapse)>.chakra-collapse {
  overflow: initial !important;
}

.ProseMirror {
  outline: 0 none;
}
</style>
