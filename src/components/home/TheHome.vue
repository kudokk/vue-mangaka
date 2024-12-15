<script setup lang="ts">
import HomeEnd from '@/components/home/HomeEnd.vue'
import HomeIntroduceFunc from '@/components/home/HomeIntroduceFunc.vue'
import HomeIntroduceGenre from '@/components/home/HomeIntroduceGenre.vue'
import HomeProfit from '@/components/home/HomeProfit.vue'
import HomeStepFlow from '@/components/home/HomeStepFlow.vue'
import HomeSuccessStory from '@/components/home/HomeSuccessStory.vue'
import HomeSupport from '@/components/home/HomeSupport.vue'
import HomeTop from '@/components/home/HomeTop.vue'
</script>

<template>
  <div class="css-ec1ch0">
    <div class="ProseMirror">
      <div as="div" data-testid="doc-node-root" style="white-space:normal;height:100%" data-node-view-wrapper="">
        <link rel="stylesheet" class="chakra-link css-spn4bz"
          href="https://fonts.googleapis.com/css2?family=DM%20Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          data-gamma-font="DM Sans">
        <link rel="stylesheet" class="chakra-link css-spn4bz"
          href="https://fonts.googleapis.com/css2?family=Libre%20Baskerville:wght@400;700&amp;display=swap"
          data-gamma-font="Libre Baskerville">
        <svg class="css-10n3guf">
          <defs>
            <filter id="theme-accent-color-fill">
              <feFlood flood-color="#B88E23" result="flood"></feFlood>
              <feComposite in="flood" in2="SourceAlpha" operator="in"></feComposite>
            </filter>
            <filter id="theme-body-color-fill">
              <feFlood flood-color="#454240" result="flood"></feFlood>
              <feComposite in="flood" in2="SourceAlpha" operator="in"></feComposite>
            </filter>
          </defs>
        </svg>
        <div class="css-11w65sc">
          <div class="doc-content-wrapper css-no7w9x">
            <div data-doc-background-element="true" contenteditable="false" class="css-1m99umk">
              <div data-testid="doc-background" class="css-1o2bb27"></div>
            </div>
            <div class="css-11w65sc"></div>
            <div class="motion-present-mode-bg css-toz6i7" data-doc-background-element-present-mode="true"
              data-export-master="true" style="opacity: 1;"></div>
            <div class="document-content is-doc-mode css-s4p8cz">
              <div style="white-space:pre-wrap;width:100%" data-node-view-content="">
                <div data-node-view-content-inner="document" style="white-space:inherit">
                  <HomeTop />
                  <HomeStepFlow />
                  <HomeProfit />
                  <HomeSupport />
                  <HomeIntroduceFunc />
                  <HomeIntroduceGenre />
                  <HomeSuccessStory />
                  <HomeEnd />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
html
  min-height: var(--\31 00vh)
  min-height: -webkit-fill-available
  height: var(--\31 00vh)
  height: -webkit-fill-available

body
  position: relative
  --\31 00vh: 100vh
  --editor-width: 100vw

[data-node-view-content-inner="paragraph"]:empty::after
  content: " "

</style>
