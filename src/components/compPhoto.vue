<template>
  <div class="toolbar">
    <q-toolbar>
      <div class="label-container">
        <q-btn flat @click="goToLink0('link')">
          iPhone 14 Pro 512 GB Siyah 69.999 TL!
        </q-btn>
      </div>
      <q-space></q-space>
      <q-btn flat @click="goToLink0('link')"> > </q-btn>
    </q-toolbar>
  </div>

  <div class="image-container-ust">
    <q-img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/Destek-yayinlari-secili-felsefe-biyografi-kitaplarinda-ozel-fiyatlar_398x195.jpg"
      alt="Image 1"
      @click="goToLink('image1')"
    />
    <q-img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/Turkuvaz-1-Alana-1-Bedava-Kampanyasi-398x195.jpg"
      alt="Image 2"
      @click="goToLink('image2')"
    />
    <q-img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/fddfdfsds3lu_398x195-3-.jpg"
      alt="Image 3"
      @click="goToLink('image3')"
    />
  </div>
  <div class="image-container-alt">
    <q-img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/lego-eylul-revizeli-3lu_398x195.webp"
      alt="Image 4"
      @click="goToLink('image4')"
    />
    <q-img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/prestij-kalem-3lu_banner_398x195.jpg"
      alt="Image 5"
      @click="goToLink('image5')"
    />
    <q-img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/vatka-dr-aralik-398x195.webp"
      alt="Image 6"
      @click="goToLink('image6')"
    />
  </div>
</template>

<script setup lang="ts">
interface RowLink {
  [key: string]: string;
}
const rowLink: RowLink = {
  link: 'https://www.dr.com.tr/kataloglar_/apple-iphone/9132',
};
const imageLinks: Record<string, string> = {
  image1:
    'https://www.dr.com.tr/kataloglar_/destek-yayinlari-felsefe-ve-biyografi-kitaplari/9019?SortOrder=1&SortType=0&Page=1',
  image2:
    'https://www.dr.com.tr/kataloglar_/1-alana-1-bedava-kampanyasi/8921?SortOrder=1&SortType=0&Page=1',
  image3:
    'https://www.dr.com.tr/kataloglar_/romanlari-simdi-orijinal-dillerinde-kesfet/8941?Page=1&ShowNotForSale=true&SortOrder=1&SortType=0',
  image4: 'https://www.dr.com.tr/kataloglar_/lego-ng/6509',
  image5: 'https://www.dr.com.tr/kataloglar_/prestij-kalemler/7956',
  image6: 'https://www.dr.com.tr/marka/vatkalimon/m=10011168',
};

const goToLink0 = (link: string) => {
  window.location.href = rowLink[link];
};

const goToLink = (imageKey: string) => {
  window.location.href = imageLinks[imageKey];
};
</script>

<style scoped>
.toolbar {
  background-color: #fa0000;
  color: #ffffff;
  font-size: 16px;
  padding: 5px 25px 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.label-container {
  margin-left: 39%;
}
.image-container-ust {
  display: flex;
}
.image-container-alt {
  display: flex;
}
</style>
