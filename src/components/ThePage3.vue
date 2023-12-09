<template>
  <div id="q-app" style="height: 210px">
    <q-btn-group spread class="dropdown-buttons">
      <q-btn-dropdown
        v-for="(category, index) in categories"
        :key="index"
        :label="category.label"
      >
        <q-list>
          <q-item
            v-for="(item, itemIndex) in category.items"
            :key="itemIndex"
            clickable
            v-close-popup
            @click="onItemClick(item)"
          >
            <q-item-section>
              <q-item-label>{{ item }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-btn-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const onItemClick = (selectedItem: string) => {
  console.log(`Selected item: ${selectedItem}`);
};

const categories = ref([
  {
    label: 'Kitaplar',
    items: [
      'Yeni Çıkanlar',
      'Çok Satanlar',
      'Edebiyat',
      'Roman',
      'Kişisel Gelişim',
      'Çocuk ve Gençlik',
      'Araştırma - Tarih',
      'Yabancı Dilde Kitaplar',
      'Çizgi Roman ve Manga',
      'Felsefe Kitapları',
      'Yurt Dışından Kitap',
      'e-Kitaplar',
      'Sizin İçin Seçtiklerimiz',
      'Çok Satan İngilizce Kitaplar',
      'Yurtdışından Ön Siparişli Kitaplar',
      'Yazarlar',
      'Yayınevleri',
      'Yazar İmzalı Kitaplar',
      'İndirimli Kitap Setleri',
      'Ödüllü Kitaplar',
      'Ön Okuma Özellikli Kitaplar',
      'Harry Potter Kitapları',
      'Keşfet',
      'Sevdiklerin İçin e-Kitap Hediye Kartı',
    ],
  },
  {
    label: 'Ders Kitapları',
    items: ['Ders Kitap 1', 'Ders Kitap 2'],
  },
  {
    label: 'Elektronik',
    items: ['Elektronik 1', 'Elektronik 2'],
  },
  {
    label: 'Bilgisayar Tablet',
    items: ['item1 1', 'item2'],
  },
  {
    label: 'Elektrikli Ev Aletleri',
    items: ['Alet 1', 'Alet 2'],
  },
  {
    label: 'Anne, Bebek',
    items: ['Ürün 1', 'Ürün 2'],
  },
  {
    label: 'Ofis, Kırtasiye',
    items: ['Kırtasiye 1', 'Kırtasiye 2'],
  },
  {
    label: 'Müzik, Hediyelik',
    items: ['Müzik 1', 'Hediyelik 2'],
  },
  {
    label: 'Spor, Outdoor',
    items: ['Outdoor 1', 'Outdoor 2'],
  },
]);
</script>

<style scoped>
#q-app {
  height: 210px;
}
.dropdown-buttons {
  font-family: SFProDisplay, arial, sans-serif;
  font-size: 14px;
  font-weight: 100;
  height: 40px;
  text-transform: uppercase;
  background-color: #084793;
  color: white;
  text-transform: capitalize;
}
</style>
