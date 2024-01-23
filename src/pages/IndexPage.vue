<template>
  <q-page style="background-color: white">
    <comp-header1></comp-header1>
    <comp-header2></comp-header2>
    <div style="margin-left: 135px; margin-right: 135px">
      <comp-carousel></comp-carousel>
    </div>
    <div style="margin-left: 150px; margin-right: 150px">
      <comp-photo></comp-photo>
    </div>
    <div style="margin-left: 135px; margin-right: 135px">
      <comp-card></comp-card>
    </div>
    <div style="margin-left: 150px; margin-right: 150px">
      <comp-photo></comp-photo>
    </div>
    <comp-footer></comp-footer>
  </q-page>
</template>

<script setup>
import CompHeader1 from 'src/components/compHeader1.vue';
import CompCarousel from 'src/components/compCarousel.vue';
import CompFooter from 'src/components/compFooter.vue';
import CompHeader2 from 'src/components/compHeader2.vue';
import CompPhoto from 'src/components/compPhoto.vue';
import compCard from 'src/components/compCard.vue';
</script>

<style></style>
