<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      height="400px"
      width="100%"
    >
      <q-carousel-slide
        v-for="(item, index) in items"
        :key="index"
        :name="index + 1"
        :img-src="item.imgSrc"
      />
    </q-carousel>
</div>
</template>

    <script setup lang ="ts">
import { ref } from 'vue';

const slide = ref(1);

const items = [
  {
    imgSrc: 'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-Aralik-Kitaplarda-Yogun-Kis-Indirimi.webp',
  },
  {
    imgSrc: 'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/2024-ajandalar-anasayfa_1200x390.webp',
  },
  {
    imgSrc:
   'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-18102023dr1.jpg',
  },
  {
    imgSrc:
   'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-Ayin-Yayinevi-Kronik-Kitap.webp',
  },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-04122023dr1234.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-dr04122023dr4123.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-dr0112202dr3.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/jerf-aralik-dr-anasayfa_1200x390.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-Yapi-Kredi-Yayinlari-Ozel-Fiyatlar.webp',
        },
        { 
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-Arkadas-Yayin-Grubu-Haftanin-Yayinevi.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-April-Hediye-Kitap-Kampanyasi.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-09102023dr1.jpg',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/aralik-kutu-oyunu-revizeli-anasayfa_1200x390.webp',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/muzik-kasim-anasayfa_1200x390.jpg',
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-dr31.jpg',
        },
        {
          imgSrc:
            'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-Haftanin-Yayinevi-Gunisigi-Kitapligi.webp'
        },
        {
          imgSrc:
           'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/bardakci_DR_1200x390-Murat-Bardakci-Kitaplari.webp'
        },
        {
          imgSrc:
            'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-dr04112023dr1.webp'
        }
]
 </script>
