<template>
  <q-page class="campaign-page-frame mt-20">
    <div class="campaign-header text-center" style="margin-top: 70px">
      <h1 class="baslik">
        <span id="campaignTitleName">D&R Güncel Kampanyalar</span>
      </h1>
    </div>

    <div
      class="campaign-page-filter"
      style="text-align: left; padding-left: 145px; padding-top: 15px"
    >
      <q-btn
        v-for="(category, index) in categories"
        :key="index"
        class="kampanya-btn"
        :label="category.name"
        :class="{
          'q-mr-sm': index !== categories.length - 1,
          active: activeCategory === category.id,
        }"
        @click="setActiveCategory(category.id)"
      />
    </div>

    <div class="campaign-img-list" style="margin-left: 105px; margin-top: 30px">
      <div class="row">
        <div
          v-for="(item, index) in campaignItems.slice(
            0,
            campaignItems.length / 2
          )"
          :key="index"
          class="col-md-6"
        >
          <figure class="campaign-item">
            <a :title="item.title" :href="item.link">
              <q-img
                class="campaign-image"
                :src="item.imageSrc"
                :alt="item.alt"
              />
            </a>
          </figure>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in campaignItems.slice(campaignItems.length / 2)"
          :key="index"
          class="col-md-6"
        >
          <figure class="campaign-item">
            <a :title="item.title" :href="item.link">
              <q-img
                class="campaign-image"
                :src="item.imageSrc"
                :alt="item.alt"
              />
            </a>
          </figure>
        </div>
      </div>
    </div>

    <div class="q-pa-lg" style="justify-content: center; display: flex">
      <div class="q-gutter-md">
        <q-pagination
          v-model="currentPage"
          :max="maxPages"
          direction-links
          flat
          color="grey"
          active-color="primary"
          @input="changePage"
        ></q-pagination>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Category {
  id: number;
  name: string;
}

const activeCategory = ref(0);
const currentPage = ref(1);
const maxPages = 2;

const categories: Category[] = [
  { id: 0, name: 'Tüm Kategoriler' },
  { id: 4645, name: 'Genel' },
  { id: 4646, name: 'Kitap' },
  { id: 4650, name: 'Müzik, Hediyelik' },
  { id: 4652, name: 'Hobi & Oyuncak' },
  { id: 6448, name: 'Kırtasiye' },
  { id: 8120, name: 'Spor & Outdoor' },
  { id: 8120, name: 'Anne Bebek' },
];

const setActiveCategory = (categoryId: number) => {
  activeCategory.value = categoryId;
};

const campaignItems = [
  {
    title: 'Turkuvaz Kitap 1 Alana 1 Bedava!',
    link: 'https://www.dr.com.tr/kataloglar_/1-alana-1-bedava-kampanyasi/8921?SortOrder=1&SortType=0&Page=1',
    imageSrc:
      'https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/Turkuvaz-1-Alana-1-Bedava-Kampanyasi-_950x360.jpg',

    alt: '',
  },
  {
    title: 'Alfa Yayın Grubu Hediye Kitap Kampanyası-Antika Titanik',
    link: 'https://www.dr.com.tr/kataloglar_/alfa-yayin-grubu/6460?SortOrder=1&SortType=0&Page=1',
    imageSrc:
      'https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/sdfsfdsnfdkategori_950x360.jpg',

    alt: '',
  },
  {
    title: 'Sahanın Yıldızları 2023 Kitap Serisi',
    link: 'https://www.dr.com.tr/kataloglar_/sahanin-yildizlari-2023-kitap%20Serisi/9009?SortOrder=1&SortType=0&Page=1',
    imageSrc:
      'https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/Sahanin-Yildizlari-Hediye-Kart-950x360.jpg',

    alt: '',
  },
  {
    title: 'Fırsatlar Kütüphanesi',
    link: 'https://www.dr.com.tr/kataloglar_/firsatlar-kutuphanesi/8938?SortOrder=1&SortType=0&Page=1',
    imageSrc:
      'https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/F%C4%B1rsatlar-K%C3%BCt%C3%BCphanesi_950x360.jpg',

    alt: '',
  },
  {
    title: 'Arkadaş Yayın Grubu Haftanın Yayınevi',
    link: 'https://www.dr.com.tr/arkadas-yayin-grubu',
    imageSrc:
      'https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/kategori_950x360Haftanin-Yayinevi-Gunisigi-Kitapligi.webp',
    alt: '',
  },
  {
    title: 'Ayın Yayınevi Kronik Kitap',
    link: 'https://www.dr.com.tr/yayinevi/kronik-kitap/s=5786',
    imageSrc:
      'https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/kategori_950x360Arkadas-Yayin-Grubu-Haftanin-Yayinevi.webp',
    alt: '',
  },
  {
    title: 'Ön Siparişli Yabancı Dilde Kitaplar',
    link: 'https://www.dr.com.tr/kataloglar_/on-siparisli-yabanci-dilde-kitaplar/9067',
    imageSrc:
      '//i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/kategori_950x360On-Siparisli-Yabanci-Dilde-Kitaplar.webp',
    alt: '',
  },
  {
    title: 'Müzik Aletleri',
    link: 'https://www.dr.com.tr/kategori/Muzik/Muzik-Aletleri/grupno=01084',
    imageSrc:
      '//i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/muzik-kasım-kategori_950x360.jpg',
    alt: '',
  },
];

const changePage = (pageNumber: number) => {
  console.log('Current page:', pageNumber);
};
</script>

<style scooped>
.campaign-page-frame {
  padding-left: 20px;
  padding-right: 20px;
}
.baslik {
  font-family: SFProDisplay, arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
}
.kampanya-btn {
  background-color: white;
  color: #212529;
  height: 36px;
  text-align: right;
  border: 1px solid #e0e0e0;
  text-transform: capitalize;
  font-weight: 400;
  box-shadow: none;
}
.campaign-image {
  height: 250px;
  width: 500px;
  border-radius: 10px;
  margin-bottom: 0;
}
.campaign-item:hover .campaign-image {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
