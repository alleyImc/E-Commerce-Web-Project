<template>
  <q-page class="hediyeKart" style="height: 500px">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs style="margin-top: 20px; margin-left: 120px">
        <q-breadcrumbs-el
          label="Ana Sayfa"
          style="color: black"
          href="https://www.dr.com.tr/"
        />
        <q-breadcrumbs-el
          label="Hediye Kartı"
          style="font-weight: bold"
          href="https://www.dr.com.tr/hediyekarti"
        />
      </q-breadcrumbs>
    </div>
    <div class="image-container q-mt-md q-gutter-md" style="display: flex">
      <q-img
        class="image"
        src="https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/gift_v2-banner-v3-2.png"
        style="flex: 1; margin-left: 250px"
      />
      <q-img
        class="image"
        src="https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/ekitap_v2-banner-v3-2.png"
        style="flex: 1; margin-right: 250px"
      />
    </div>
    <div
      class="button-container q-mt-md q-gutter-md"
      style="
        display: flex;
        justify-content: space-around;
        margin: 30px 120px 30px 120px;
      "
    >
      <q-btn
        :toggle="activeButton === 1"
        label="Hediye Kartı Seç"
        @click="handleButtonClick(1)"
        class="hediye-btn"
        style="
          min-width: 200px;
          min-height: 30px;
          text-transform: capitalize;
          background-color: #084793;
          color: white;
          font-weight: 400;
        "
      />
      <q-btn
        :toggle="activeButton === 2"
        label="E-Kitap Hediye Kartı Seç"
        @click="handleButtonClick(2)"
        class="hediye-btn"
        style="
          min-width: 200px;
          min-height: 30px;
          text-transform: capitalize;
          background-color: #e20714;
          color: white;
          font-weight: 400;
        "
      />
    </div>
    <div
      class="button-text"
      style="
        display: flex;
        justify-content: space-around;
        margin: 40px 120px 30px 120px;
      "
    >
      <p style="text-align: center">
        Sevdiklerinize (www.dr.com.tr’de geçerli ) D&R Hediye Kartı armağan
        edin, D&R’ın <br />kitaptan film ve müziğe, elektronikten oyun ve hobiye
        kadar pek çok üründen <br />
        beğendiklerini kendileri seçsin.
      </p>
      <p style="text-align: center">
        Okuma tutkunları için ideal hediye! Şimdi sevdiklerinize e-Kitap Hediye
        Kartıyla kitap <br />
        okuma keyfini cep telefonu ve tabletlerinde de yaşatabilirsiniz. İster
        otobüste seyahat <br />
        ederken, ister kahve molasında. Sevdiklerinize e-Kitap Hediye Kartı
        armağan ederek,<br />
        dilediği e-Kitap’ı okumasını sağlayabilirsiniz.
      </p>
    </div>
  </q-page>
  <div
    class="btn-image-container q-mt-md q-gutter-md"
    style="display: flex; text-align: center; justify-content: center"
  >
    <template v-if="activeButton === 1">
      <div
        v-for="index in 6"
        :key="'container' + index"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <q-img
          class="btn-image"
          :key="'image' + index"
          src="https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/dr-gift-view-blue-2.png"
          style="
            flex: 1;
            margin-left: 20px;
            margin-right: 20px;
            max-width: 100px;
            max-height: 100px;
          "
        />

        <q-btn
          :key="'selectBtn' + index"
          label="Seç"
          style="margin-top: 10px"
        />
      </div>
    </template>
    <template v-else-if="activeButton === 2">
      <div
        v-for="index in 4"
        :key="'container' + index"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <q-img
          class="btn-image"
          :key="'image' + index"
          src="https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/dr-gift-view-2.png"
          style="
            flex: 1;
            margin-left: 20px;
            margin-right: 20px;
            max-width: 100px;
            max-height: 100px;
          "
        />

        <q-btn
          :key="'selectBtn' + index"
          label="Seç"
          style="margin-top: 10px"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeButton = ref<number | null>(null);

const handleButtonClick = (buttonNumber: number) => {
  activeButton.value = buttonNumber;
  if (buttonNumber === 1) {
    console.log('Sol');
  } else if (buttonNumber === 2) {
    console.log('Sağ');
  }
};
</script>

<style scoped>
.hediyeKart {
  background-color: #f9faff;
}
.image-container {
  display: flex;
  justify-content: space-between;
}
.image {
  flex: 1;
  max-width: 420px;
  max-height: 270px;
}
</style>
