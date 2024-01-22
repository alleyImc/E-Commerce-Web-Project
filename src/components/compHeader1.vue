<template>
  <q-header>
    <q-img
      style="height: 60px; width: 100%"
      src="http://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1140x60-dr24102023dr1.webp"
      img-top
      alt="Header Fotoğrafı"
      class="custom-button"
    ></q-img>

    <div class="top-header-button">
      <q-btn
        flat
        v-for="(button, index) in buttons"
        :key="index"
        :label="button.label"
        size="m"
        dense
        :class="[
          'header-btn',
          { 'special-button': button.label === '+90 (850) 266 3737' },
        ]"
      />
    </div>

    <div class="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/tr/5/52/D%26R_logo.jpg"
        alt=""
      />

      <q-input
        dense
        outlined
        v-model="filter"
        placeholder="Kitap,Elektronik,Oyuncak,Kırtasiyede Ürün,Kategori ve Marka Ara"
        style="width: 550px"
      >
        <template v-slot:prepend>
          <div class="search-group">
            <q-icon name="search" />
          </div>
        </template>
        <q-btn label="Ara" style="background-color: #084793; color: white" />
      </q-input>

      <q-btn
        flat
        color="black"
        label="Favori Listem"
        size="sm"
        class="header-btn"
        style="color: white; margin-left: 50px"
      />

      <q-btn
        flat
        color="black"
        label="Kampanyalar"
        size="sm"
        class="header-btn"
        style="color: white; margin-left: 10px"
      />

      <q-btn-dropdown
        flat
        color="black"
        label="Giriş Yap"
        size="sm"
        class="header-dropDown"
        style="color: white; margin-left: 10px"
        menu-props="autoHeight: true"
      >
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Giriş Yap</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Üye Ol</q-item-label>
          </q-item-section>
        </q-item>
      </q-btn-dropdown>

      <q-btn
        flat
        color="black"
        label="Sepetim"
        size="sm"
        class="header-btn"
        style="color: white; margin-left: 10px"
      >
        <q-popup-proxy>
          <q-banner>
            Alışveriş Sepetiniz Henüz Boş
            <br /><br /><br />
            Sepetinize 250,00 TL’lik ürün ekleyin,<br />
            Kargo Ücretsiz kampanyasından yararlanın.
          </q-banner>
        </q-popup-proxy>
      </q-btn>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Button {
  label: string;
  link: string;
}

const buttons = ref<Button[]>([
  {
    label: 'Yurt Dışından Kitap',
    link: 'https://bookstore.dr.com.tr/?utm_source=dr&utm_medium=website&utm_campaign=header',
  },
  { label: 'Hediye Kartı', link: 'https://www.dr.com.tr/hediyekarti' },
  { label: 'Markalar', link: 'https://www.dr.com.tr/markalar' },
  { label: 'Yayın evleri', link: 'https://www.dr.com.tr/yayinevleri' },
  { label: 'Yazarlar', link: 'https://www.dr.com.tr/yazarlar' },
  {
    label: 'Mağaza etkinlikleri',
    link: 'https://www.dr.com.tr/magaza-etkinlikleri',
  },
  { label: 'Mağazalar', link: 'https://www.dr.com.tr/magazalar' },
  { label: 'Sipariş takip', link: 'https://www.dr.com.tr/siparistakip' },
  { label: '+90 (850) 266 3737', link: 'tel:+90(850)2663737' },
  {
    label: 'whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=908502663737&text&type=phone_number&app_absent=0',
  },
]);
const filter = ref('');
</script>

<style scoped>
.top-header-button {
  background-color: white;
  color: black;
  font-size: 5px;
  border: none;
  font-size: small;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  background-color: white;
  justify-content: center;
  border-bottom: 1px solid grey;
}
.special-button {
  margin-left: 120px;
}
.container {
  display: flex;
  background-color: white;
  align-items: center;
}
.container img {
  max-width: 80px;
  max-height: 80px;
  margin: 10px 70px 10px 50px;
}
.container q-input {
  margin-right: 50px;
}
.header-btn {
  text-transform: capitalize;
}
.header-btn:hover {
  color: blue !important;
}
</style>
