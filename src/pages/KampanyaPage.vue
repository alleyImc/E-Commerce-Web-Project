<template>
  <q-page style="background-color: white">
    <comp-header1></comp-header1>
    <comp-header2></comp-header2>
    <comp-campaign></comp-campaign>
    <comp-footer></comp-footer>
  </q-page>
</template>

<script setup>
import CompHeader1 from 'src/components/compHeader1.vue';
import CompFooter from 'src/components/compFooter.vue';
import CompHeader2 from 'src/components/compHeader2.vue';
import CompCampaign from 'src/components/compCampaign.vue';
</script>
