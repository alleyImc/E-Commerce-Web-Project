<template>
  <div class="q-pa-md">
    <q-btn-group spread class="down-header">
      <q-btn
        v-for="category in categories"
        :key="category.label"
        :label="category.label"
        @click="selectCategory(category)"
        style="
          font-size: 11px;
          background-color: #084793;
          color: white;
          font-family: SFProDisplay, arial, sans-serif;
          font-weight: 600;
        "
      />
    </q-btn-group>

    <q-card-section v-if="selectedCategory">
      <div class="category-content">
        <div v-for="(section, index) in selectedCategory.sections" :key="index">
          <q-separator v-if="index > 0" />
          <div class="text-content">
            <div v-if="section.images">
              <img
                v-for="(image, imgIndex) in section.images"
                :key="imgIndex"
                :src="image"
                alt="Category Image"
              />
            </div>
            <div
              v-for="item in section.items"
              :key="item"
              style="margin-left: 15px"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

interface Category {
  label: string;
  sections: { items?: string[]; image?: string; images?: string[] }[];
}

const categories: Ref<Category[]> = ref<Category[]>([
  {
    label: 'Kitaplar',
    sections: [
      {
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
        ],
      },
      {
        items: [
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
        ],
      },
      {
        items: [
          'Sevdiklerin İçin e-Kitap Hediye Kartı',
          'Destek Yayınları Kitap Fırsatları!',
          'Sahanın Yıldızları Serisi Kart Hediyeli!',
          'Fırsatlar Kütüphanesi Seni Bekliyor!',
          'İngilizce Kitaplarda Özel Fırsatlar',
          'Alfa Hediye Kitap Fırsatı!',
          'Tüm Kitap Kampanyaları',
          'Ayın İndirimli Yayınevleri',
          '20 TL Altı Romanlar',
        ],
      },
      {
        images: [
          'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/Sizin-Icin-Sectiklerimiz340x120-copy.jpg',
          'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/ayin-yayinevi-kronik-340x120.webp',
        ],
      },
    ],
  },
  {
    label: 'Ders Kitapları',
    sections: [
      { items: ['Ders Kitap 1', 'Ders Kitap 1', '...'] },
      { items: ['Ders Kitap 2', 'Ders Kitap 2', '...'] },
      { items: ['Ders Kitap 3', 'Ders Kitap 3', '...'] },
      { items: ['Ders Kitap 4', 'Ders Kitap 4', '...'] },
    ],
  },
  {
    label: 'Elektronik',
    sections: [
      { items: ['Elektronik 1', 'Elektronik 1', '...'] },
      { items: ['Elektronik 2', 'Elektronik 2', '...'] },
      { items: ['Elektronik 3', 'Elektronik 3', '...'] },
      { items: ['Elektronik 4', 'Elektronik 4', '...'] },
    ],
  },
  {
    label: 'Bilgisayar Tablet',
    sections: [
      { items: ['item1 1', 'item1 1', '...'] },
      { items: ['item2 2', 'item2 2', '...'] },
      { items: ['item3 3', 'item3 3', '...'] },
      { items: ['item4 4', 'item4 4', '...'] },
    ],
  },
  {
    label: 'Elektrikli Ev Aletleri',
    sections: [
      { items: ['Alet 1', 'Alet 1', '...'] },
      { items: ['Alet 2', 'Alet 2', '...'] },
      { items: ['Alet 3', 'Alet 3', '...'] },
      { items: ['Alet 4', 'Alet 4', '...'] },
    ],
  },
  {
    label: 'Anne, Bebek',
    sections: [
      { items: ['Ürün 1', 'Ürün 1', '...'] },
      { items: ['Ürün 2', 'Ürün 2', '...'] },
      { items: ['Ürün 3', 'Ürün 3', '...'] },
      { items: ['Ürün 4', 'Ürün 4', '...'] },
    ],
  },
  {
    label: 'Ofis, Kırtasiye',
    sections: [
      { items: ['Kırtasiye 1', 'Kırtasiye 1', '...'] },
      { items: ['Kırtasiye 2', 'Kırtasiye 2', '...'] },
      { items: ['Kırtasiye 3', 'Kırtasiye 3', '...'] },
      { items: ['Kırtasiye 4', 'Kırtasiye 4', '...'] },
    ],
  },
  {
    label: 'Müzik, Hediyelik',
    sections: [
      { items: ['Müzik 1', 'Müzik 1', '...'] },
      { items: ['Hediyelik 2', 'Hediyelik 2', '...'] },
      { items: ['Müzik 3', 'Müzik 3', '...'] },
      { items: ['Hediyelik 4', 'Hediyelik 4', '...'] },
    ],
  },
  {
    label: 'Spor, Outdoor',
    sections: [
      { items: ['Outdoor 1', 'Outdoor 1', '...'] },
      { items: ['Outdoor 2', 'Outdoor 2', '...'] },
      { items: ['Outdoor 3', 'Outdoor 3', '...'] },
      { items: ['Outdoor 4', 'Outdoor 4', '...'] },
    ],
  },
]);

const selectedCategory: Ref<Category | null> = ref<Category | null>(null);

function selectCategory(category: Category) {
  selectedCategory.value = category;
}
</script>

<style scoped>
.down-header {
  height: 40px;
}

.category-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.text-content > div:not(:first-child) {
  margin-bottom: 10px;
}
</style>
