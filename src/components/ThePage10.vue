<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs style="margin-bottom: -20px; margin-left: 50px">
      <q-breadcrumbs-el
        label="Kitap"
        style="color: black"
        href="https://www.dr.com.tr/Kategori/kitap"
      />
      <q-breadcrumbs-el
        label="Eğitim ve Sınav Kitapları"
        style="font-weight: normal; color: black"
        href="https://www.dr.com.tr/Kategori/egitim-ve-sinav-kitaplari"
      />
      <q-breadcrumbs-el
        label="Üniversiteye Hazırlık"
        style="font-weight: bold; color: black"
        href="https://www.dr.com.tr/kategori/universiteye-hazirlik/?Manufacturer[0]=Karek%C3%B6k%20E%C4%9Fitim%20Yay%C4%B1n&Manufacturer[1]=PRF%20Paraf%20Yay%C4%B1nlar%C4%B1&Manufacturer[2]=KR%20Akademi&Page=1"
      />
    </q-breadcrumbs>
  </div>
  <h6 style="margin-bottom: 44px; margin-left: 5%">
    Üniversiteye Hazırlık
    <h10
      style="margin-left: 5%; font-size: small; color: gray; font-weight: 400"
    >
      <br />2015 ürün listelenmektedir.
    </h10>
  </h6>

  <h6 style="margin-top: -40px; margin-left: 5%; font-size: 15px">
    Tüm Kategoriler
  </h6>
  <div
    class="q-gutter-md col"
    style="
      width: 220px;
      height: 200px;
      border-bottom: 1px solid grey;
      border-top: 1px solid grey;
      padding-bottom: 15px;
      overflow-x: auto;
      margin-left: 5%;
    "
  >
    <q-card v-for="(category, index) in category1" :key="index" flat>
      <q-card-actions style="width: auto">
        <div
          style="
            font-weight: 300;
            font-weight: normal;
            color: black;
            margin: -5px 0px;
          "
        >
          <div class="slide">
            {{ category.category1Name }}
          </div>
        </div>
      </q-card-actions>
    </q-card>

    <q-card v-for="(category, index) in category1" :key="index" flat>
      <q-card-actions style="width: auto">
        <div
          style="
            font-weight: 300;
            font-weight: normal;
            color: black;
            margin: -15px 0px;
          "
        >
          <div
            class="slide"
            style="margin-top: 7%"
            v-for="(subCategory, subIndex) in category.category1SubTitles"
            :key="subIndex"
          >
            {{ subCategory }}
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </div>

  <div id="q-app" style="margin-bottom: 200px; margin-left: 5%">
    <div class="q-pa-md">
      <q-btn-dropdown
        color="white"
        text-color="black"
        label="Yayınevi"
        v-model="dropdownOpen1"
      >
        <div
          id="q-app"
          style="
            min-height: 40px;
            width: 250px;
            height: 200px;
            padding-bottom: 10px;
            overflow-x: auto;
            margin-left: 0px;
          "
        >
          <div class="search boxes">
            <q-input
              dense
              outlined
              v-model="filterMin"
              placeholder="Yayınevi Ara"
              style="width: 200px; margin-left: 20px"
            >
              <template v-slot:prepend>
                <div class="search-group">
                  <q-icon style="color: #084793" name="search" />
                </div>
              </template>
            </q-input>
          </div>
          <div id="q-app" style="min-height: 100vh">
            <div class="q-pa-lg">
              <q-option-group
                v-model="group1"
                type="checkbox"
                :options="yayineviItems"
              >
                <template v-slot:label="yayineviItems">
                  <div class="row items-center">
                    <span class="text-black">{{ yayineviItems.label }}</span>
                  </div>
                </template>
              </q-option-group>
            </div>
          </div>
        </div>
      </q-btn-dropdown>
    </div>
  </div>

  <div id="q-app" style="margin-bottom: 200px; margin-left: 5%">
    <div class="q-pa-md">
      <q-btn-dropdown
        color="white"
        text-color="black"
        label="Yazar"
        v-model="dropdownOpen2"
      >
        <div
          id="q-app"
          style="
            min-height: 40px;
            width: 250px;
            height: 200px;
            padding-bottom: 10px;
            overflow-x: auto;
            margin-left: 0px;
          "
        >
          <div class="search boxes">
            <q-input
              dense
              outlined
              v-model="filterMin"
              placeholder="Yazar Ara"
              style="width: 200px; margin-left: 20px"
            >
              <template v-slot:prepend>
                <div class="search-group">
                  <q-icon style="color: #084793" name="search" />
                </div>
              </template>
            </q-input>
          </div>
          <div id="q-app" style="min-height: 100vh">
            <div class="q-pa-lg">
              <q-option-group
                v-model="group1"
                type="checkbox"
                :options="yazarItems"
              >
                <template v-slot:label="yazarItems">
                  <div class="row items-center">
                    <span class="text-black">{{ yazarItems.label }}</span>
                  </div>
                </template>
              </q-option-group>
            </div>
          </div>
        </div>
      </q-btn-dropdown>
    </div>
  </div>

  <div id="q-app" style="margin-bottom: 200px; margin-left: 5%">
    <div class="q-pa-md">
      <q-btn-dropdown
        color="white"
        text-color="black"
        label="Medya Tipi"
        v-model="dropdownOpen3"
      >
        <q-list
          style="
            min-height: 90px;
            width: 200px;
            height: 200px;
            border-bottom: 1px solid grey;
            border-top: 1px solid grey;
            padding-bottom: 15px;
            overflow-x: auto;
            margin-left: 0px;
          "
        >
          <div id="q-app" style="min-height: 100vh">
            <div class="q-pa-lg">
              <q-option-group
                v-model="group1"
                type="checkbox"
                :options="medyaItems"
              >
                <template v-slot:label="medyaItems">
                  <div class="row items-center">
                    <span class="text-black">{{ medyaItems.label }}</span>
                  </div>
                </template>
              </q-option-group>
            </div>
          </div>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>

  <div id="q-app" style="margin-bottom: 200px; margin-left: 5%">
    <div class="q-pa-md">
      <q-btn-dropdown
        color="white"
        text-color="black"
        label="Ürün Puanı"
        v-model="dropdownOpen4"
      >
        <div
          id="q-app"
          style="
            min-height: 40px;
            width: 250px;
            height: 200px;
            padding-bottom: 10px;
            overflow-x: auto;
            margin-left: 0px;
          "
        >
          <div id="q-app" style="min-height: 100vh">
            <div class="q-pa-lg">
              <q-option-group
                v-model="group1"
                type="checkbox"
                :options="ratingItems"
              >
                <template v-slot:label="{ label: rating }">
                  <div class="row items-center">
                    <q-icon
                      v-for="i in rating"
                      :name="'fa-solid fa-star'"
                      :key="i"
                      style="color: gold"
                    />
                  </div>
                </template>
              </q-option-group>
            </div>
          </div>
        </div>
      </q-btn-dropdown>
    </div>
  </div>

  <div id="q-app" style="margin-bottom: 200px; margin-left: 5%">
    <div class="q-pa-md">
      <q-btn-dropdown
        color="white"
        text-color="black"
        label="Fiyat"
        v-model="dropdownOpen5"
      >
        <div
          id="q-app"
          style="
            min-height: 40px;
            width: 250px;
            height: 200px;
            padding-bottom: 10px;
            overflow-x: auto;
            margin-left: 0px;
          "
        >
          <div class="search boxes">
            <q-input
              dense
              outlined
              v-model="filterMin"
              placeholder="min"
              style="width: 80px; margin-left: 5px"
            >
            </q-input>

            <q-input
              dense
              outlined
              v-model="filterMax"
              placeholder="max"
              style="width: 80px; margin-left: 90px; margin-top: -40px"
            >
            </q-input>
            <q-input
              dense
              outlined
              v-model="filter"
              style="width: 40px; margin-left: 180px; margin-top: -40px"
            >
              <template v-slot:prepend>
                <div class="search-group">
                  <q-icon style="color: #084793" name="search" />
                </div>
              </template>
            </q-input>
          </div>
          <div class="q-pa-lg bg-white-9 text-black">
            <q-option-group
              v-model="group"
              :options="priceItems"
              purple
              color="blue"
            ></q-option-group>
          </div>
        </div>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
import { ref } from 'vue';
const filter = ref('');
const filterMin = ref('');
const filterMax = ref('');
const dropdownOpen1 = ref(false);
const dropdownOpen2 = ref(false);
const dropdownOpen3 = ref(false);
const dropdownOpen4 = ref(false);
const dropdownOpen5 = ref(false);
type CategoryItem = {
  category1Name: string;
  category1SubTitles: string[];
};
const category1: CategoryItem[] = [
  {
    category1Name: 'Kitap',
    category1SubTitles: [
      'Eğitim ve Sınav Kitapları',
      'Üniversiteye Hazırlık',
      'TYT Soru Bankası Kitapları',
      'AYT Soru Bankası Kitapları',
      'TYT - AYT Soru Bankası Kitapları',
      'TYT Deneme Sınavı - Yaprak Test',
      'AYT Deneme Sınavı - Yaprak Test',
      'AYT Konu Anlatım Kitapları',
      'TYT - AYT Konu Anlatım Kitapları',
      'TYT Konu Anlatım Kitapları',
      ' TYT - AYT Deneme Sınavı Yaprak Test',
      'TYT Çıkmış Sorular',
      'AYT Çıkmış Sorular',
      'MSÜ',
      'TYT - AYT Çıkmış Sorular',
    ],
  },
];
const yayineviItems = [
  { label: 'Karekök Eğitim Yayın', value: 'ye1' },
  { label: 'PRF Paraf Yayınları', value: 'ye2' },
  { label: 'KR Akademi', value: 'ye3' },
  { label: 'Marka Yayınları', value: 'ye4' },
  { label: 'Delta Kültür-Eğitim', value: 'ye5' },
  { label: 'Pelikan Yayınları', value: 'ye6' },
  { label: 'Yanıt Yayınları', value: 'ye7' },
  { label: 'Çap Yayınları', value: 'ye8' },
  { label: 'Tonguç Kampüs', value: 'ye9' },
  { label: 'Miray Yayınları', value: 'ye10' },
];
const yazarItems = [
  { label: 'Kolektif', color: 'blue', value: 'y1' },
  { label: 'Erkan Demir', color: 'blue', value: 'y2' },
  { label: 'Ahmet Sezgin', color: 'blue', value: 'y3' },
  { label: 'Fırat Osman Baykal', color: 'blue', value: 'y4' },
  { label: 'Barış Kapan', color: 'blue', value: 'y5' },
  { label: 'Ethem Hoca', color: 'blue', value: 'y6' },
  { label: 'Kemal Coşkun', color: 'blue', value: 'y7' },
  { label: 'Kenan Kara', color: 'blue', value: 'y8' },
  { label: 'Muhammet Uslu', color: 'blue', value: 'y9' },
  { label: 'Sml Hoca', color: 'blue', value: 'y10' },
];
const medyaItems = [{ label: 'İnce Kapak  (267)', value: 'm1' }];
const ratingItems = [
  { label: '12345', value: '5' },
  { label: '1234', value: '4' },
  { label: '123', value: '3' },
  { label: '12', value: '2' },
  { label: '1', value: '1' },
];
const priceItems = [
  {
    label: '0 TL - 50 TL',
    value: 'tl1',
  },
  {
    label: '50 TL - 100 TL',
    value: 'tl2',
  },
  {
    label: '100 TL - 150 TL',
    value: 'tl3',
  },
  {
    label: '150 TL - 200 TL',
    value: 'tl4',
  },
  {
    label: '200 TL - 250 TL',
    value: 'tl5',
  },
];
const group = ref<string | null>(null);
const group1 = ref([]);
</script>
