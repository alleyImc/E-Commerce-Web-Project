<template>
  <div>
    <q-text class="text">D&R'ı Keşfet</q-text>
    <div class="icon-container">
      <div v-for="(icon, index) in icons" :key="index" class="icon-wrapper">
        <q-img
          :src="icon.image"
          :alt="icon.alt"
          @click="goToLink(icon.link)"
          class="circle-icon"
        />
        <div class="caption">{{ icon.caption }}</div>
      </div>
    </div>

    <footer class="footer">
      <q-text class="categories">
        <div
          v-for="(category, index) in categories0"
          :key="index"
          class="label-container"
        >
          <q-text class="footer-text-kategori" @click="goToLink(category.link)">
            <br />{{ category.title }}<br />
          </q-text>
          <div
            v-for="(option, optionIndex) in category.options"
            :key="optionIndex"
            class="label-container"
          >
            <q-text class="footer-text-secenek" @click="goToLink(option.link)"
              >{{ option.title }}<br
            /></q-text>
          </div>
        </div>
      </q-text>

      <q-text class="categories">
        <div
          v-for="(category, index) in categories1"
          :key="index"
          class="label-container"
        >
          <q-text class="footer-text-kategori" @click="goToLink(category.link)">
            <br />{{ category.title }}<br />
          </q-text>
          <div
            v-for="(option, optionIndex) in category.options"
            :key="optionIndex"
            class="label-container"
          >
            <q-text class="footer-text-secenek" @click="goToLink(option.link)"
              >{{ option.title }}<br
            /></q-text>
          </div>
        </div>
      </q-text>

      <q-text class="categories">
        <div
          v-for="(category, index) in categories2"
          :key="index"
          class="label-container"
        >
          <q-text class="footer-text-kategori" @click="goToLink(category.link)">
            <br />{{ category.title }}<br />
          </q-text>
          <div
            v-for="(option, optionIndex) in category.options"
            :key="optionIndex"
            class="label-container"
          >
            <q-text class="footer-text-secenek" @click="goToLink(option.link)"
              >{{ option.title }}<br
            /></q-text>
          </div>
        </div>
      </q-text>

      <q-text class="categories">
        <div
          v-for="(category, index) in categories3"
          :key="index"
          class="label-container"
        >
          <q-text class="footer-text-kategori" @click="goToLink(category.link)">
            <br />{{ category.title }}<br />
          </q-text>
          <div
            v-for="(option, optionIndex) in category.options"
            :key="optionIndex"
            class="label-container"
          >
            <q-text class="footer-text-secenek" @click="goToLink(option.link)"
              >{{ option.title }}<br
            /></q-text>
          </div>
        </div>
      </q-text>

      <q-text class="categories">
        <div
          v-for="(category, index) in categories4"
          :key="index"
          class="label-container"
        >
          <q-text class="footer-text-kategori" @click="goToLink(category.link)">
            <br />{{ category.title }}<br />
          </q-text>
          <div
            v-for="(option, optionIndex) in category.options"
            :key="optionIndex"
            class="label-container"
          >
            <q-text class="footer-text-secenek" @click="goToLink(option.link)"
              >{{ option.title }}<br
            /></q-text>
          </div>
        </div>
      </q-text>

      <div class="communication">
        <div>
          <q-icon name="fa-solid fa-shop" style="color: #084793" />
          <q-text
            class="custom-text-style"
            @click="goToLink('https://www.dr.com.tr/magazalar')"
            >Mağazalar</q-text
          >
        </div>
        <br />

        <div>
          <q-icon name="fa-solid fa-headphones-simple" style="color: #084793" />
          <q-text class="custom-text-style">0850 266 37 37</q-text>
        </div>
        <br />

        <div>
          <q-icon name="fa-solid fa-box" style="color: #084793" />
          <q-text
            class="custom-text-style"
            @click="goToLink('https://www.dr.com.tr/siparistakip')"
            >Sipariş Takip</q-text
          >
        </div>
        <br />

        <div>
          <q-icon name="fa-brands fa-whatsapp" style="color: #084793" />
          <q-text
            class="custom-text-style"
            @click="
              goToLink(
                'https://api.whatsapp.com/send/?phone=908502663737&text&type=phone_number&app_absent=0'
              )
            "
            >Whatsapp</q-text
          >
        </div>
        <br />
        <q-text class="custom-text-style">Bizi Takip Edin<br /></q-text>
        <div class="social-icons-container">
          <q-icon
            name="fa-brands fa-x-twitter"
            @click="goToLink('https://twitter.com/DRDunyasi')"
          />
          <q-icon
            name="fa-brands fa-facebook"
            @click="goToLink('https://www.facebook.com/DRdunyasi')"
          />
          <q-icon
            name="fa-brands fa-instagram"
            @click="goToLink('https://www.instagram.com/dr_dunyasi')"
          />
          <q-icon
            name="fa-brands fa-youtube"
            @click="goToLink('https://www.youtube.com/user/DRDunyasi')"
          />
        </div>
        <br />

        <div>
          <q-text class="custom-text-style">Mobil Uygulamalar</q-text>
          <div class="social-img">
            <q-img
              src="https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/frontend-assets/new_footer_appstore.webp"
            /><br />
            <q-img
              src=" https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/frontend-assets/new_footer_googleplay.webp"
            />
            <q-img
              src="https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/frontend-assets/etbis_dr-2.webp"
            />
          </div>
        </div>
      </div>

      <q-text class="copyright">
        Bilgi Toplumu Hizmetleri Kişisel Verilere İlişkin Aydınlatma Metni
        <br />
        © Copyright 2000- 2023 Turkuvaz Müzik Kitap Mağazacılık ve Pazarlama
        A.Ş. Tüm hakları saklıdır.
        <q-img
          src="https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/frontend-assets/payment-types-new1_1.webp"
        />
      </q-text>
    </footer>
  </div>
</template>

<script setup lang="ts">
const icons = [
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0621_d_u_x_148x148_haziran_elektronik_lp.webp',
    alt: 'Icon 1',
    caption: 'Elektronik',
    link: 'https://www.dr.com.tr/Kategori_/Elektronik/En-Yeniler/10004/3',
  },
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/roman_148x148.webp',
    alt: 'Icon 2',
    caption: 'Roman',
    link: 'https://www.dr.com.tr/kategori/Kitap/Edebiyat/Roman/grupno=00211?ShowNotForSale=True',
  },
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/cocuk_148x148.webp',
    alt: 'Icon 3',
    caption: 'Çocuk Kitapları',
    link: 'https://www.dr.com.tr/kategori/Kitap/Cocuk-ve-Genclik/grupno=00884',
  },
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/gelisim_148x148.webp',
    alt: 'Icon 4',
    caption: 'Kişisel Gelişim',
    link: 'https://www.dr.com.tr/kategori/Kitap/Egitim-Basvuru/grupno=00056',
  },
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/cizgiroman_148x148.webp',
    alt: 'Icon 5',
    caption: 'Çizgi Roman/Manga',
    link: 'https://www.dr.com.tr/kategori/Kitap/Cizgi-Roman/grupno=00053',
  },
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/yabanci_148x148.webp',
    alt: 'Icon 6',
    caption: 'Yabancı Kitap',
    link: 'https://www.dr.com.tr/kategori/Kitap/Foreign-Languages/grupno=00812',
  },
  {
    image:
      'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0521_d_u_14_cat_ban_sezen_aksu.webp',
    alt: 'Icon 7',
    caption: 'Plaklar',
    link: 'https://www.dr.com.tr/kategori/Muzik/Yabanci-Albumler/grupno=01593?Page=1&SortOrder=1&SortType=0',
  },
];

const categories0 = [
  {
    title: 'Kitap',
    link: 'https://www.dr.com.tr/kategori/Kitap',
    options: [
      { title: 'e-Kitap', link: 'https://www.dr.com.tr/kategori/ekitap' },
      {
        title: 'Edebiyat',
        link: 'https://www.dr.com.tr/kategori/Kitap/Edebiyat/grupno=00055',
      },
      {
        title: 'Çocuk ve Gençlik',
        link: 'https://www.dr.com.tr/kategori/Kitap/Cocuk-ve-Genclik/grupno=00884',
      },
      {
        title: 'Eğitim Başvuru',
        link: 'https://www.dr.com.tr/kategori/Kitap/Egitim-Basvuru/grupno=00056',
      },
      {
        title: 'Araştırma ve Tarih',
        link: 'https://www.dr.com.tr/kategori/Kitap/Arastirma-Tarih/grupno=00051',
      },
      {
        title: 'Ders ve Sınav Kitapları',
        link: 'https://www.dr.com.tr/kategori/kategori/egitim-ve-sinav-kitaplari',
      },
      {
        title: 'Çizgi Roman',
        link: 'https://www.dr.com.tr/kategori/Kitap/Cizgi-Roman/grupno=00053',
      },
      {
        title: 'Foreign Languages',
        link: 'https://www.dr.com.tr/kategori/Kitap/Foreign-Languages/grupno=00812',
      },
      {
        title: 'Yurt Dışından Kitap',
        link: 'https://bookstore.dr.com.tr/?utm_source=dr&utm_medium=website&utm_campaign=footer',
      },
    ],
  },
  {
    title: 'Kırtasiye',
    link: 'https://www.dr.com.tr/kategori/Kirtasiye',
    options: [
      {
        title: 'Kalemler',
        link: 'https://www.dr.com.tr/kategori/Kirtasiye/Kalemler/grupno=01472',
      },
      {
        title: 'Defterler',
        link: 'https://www.dr.com.tr/kategori/Kirtasiye/Defterler/grupno=01473',
      },
      {
        title: 'Okul Çantası & Matara',
        link: 'https://www.dr.com.tr/kategori/Kirtasiye/Okul-Cantalari/grupno=01224',
      },
      {
        title: 'Sanatsal Malzemeler',
        link: 'https://www.dr.com.tr/kategori/Kirtasiye/Sanatsal-Malzemeler/grupno=01797',
      },
      {
        title: 'Ofis Teknolojileri',
        link: 'https://www.dr.com.tr/kategori/ofis-teknolojileri',
      },
      {
        title: 'Termos ve Mataralar',
        link: 'https://www.dr.com.tr/kategori/Kirtasiye/termos-mataralar/grupno=10015740',
      },
    ],
  },
];

const categories1 = [
  {
    title: 'Elektronik',
    link: 'https://www.dr.com.tr/kategori/Elektronik',
    options: [
      {
        title: 'Cep Telefonu',
        link: 'https://www.dr.com.tr/kategori/Elektronik/Telefon/Cep-Telefonlari/grupno=00293',
      },
      {
        title: 'Bilgisayar Tablet',
        link: 'https://www.dr.com.tr/kategori/BilgisayarTablet',
      },
      {
        title: 'Oyun Aksesuarları',
        link: 'https://www.dr.com.tr/kategori/Oyun-Konsol',
      },
      {
        title: 'Foto & Kamera',
        link: 'https://www.dr.com.tr/kategori/Elektronik/Foto-Kamera/grupno=01467',
      },
      {
        title: 'Ev Elektroniği',
        link: 'https://www.dr.com.tr/kategori/elektrikli-ev-aletleri',
      },
      {
        title: 'Kulaklıklar',
        link: 'https://www.dr.com.tr/kategori/Elektronik/Ev-Elektronigi/Kulakliklar/grupno=01777',
      },
    ],
  },
  {
    title: 'Müzik',
    link: 'https://www.dr.com.tr/kategori/Muzik',
    options: [
      {
        title: 'Yabancı Albümler',
        link: 'https://www.dr.com.tr/kategori/Muzik/Yabanci-Albumler/grupno=01593',
      },
      {
        title: 'Yerli Albümler',
        link: 'https://www.dr.com.tr/kategori/Muzik/Yerli-Albumler/grupno=01592',
      },
      {
        title: 'Pikaplar',
        link: 'https://www.dr.com.tr/kategori/Elektronik/Ev-Elektronigi/Pikaplar/grupno=01016',
      },
      {
        title: 'Müzik Aletleri',
        link: 'https://www.dr.com.tr/kategori/Muzik/Muzik-Aletleri/grupno=01084',
      },
    ],
  },
];

const categories2 = [
  {
    title: 'Elektrikli Ev Aletleri',
    link: 'https://www.dr.com.tr/kategori/elektrikli-ev-aletleri',
    options: [
      {
        title: 'Küçük Ev Aletleri',
        link: 'https://www.dr.com.tr/kategori/Elektrikli-Ev-Aletleri/Ev-Elektronigi/Kucuk-Ev-Aletleri/grupno=01757',
      },
      {
        title: 'Kişisel Bakım & Sağlık',
        link: 'https://www.dr.com.tr/kategori/Kisisel-Urunler/Kisisel-Bakim-Saglik/grupno=01471',
      },
      {
        title: 'Isıtma ve Soğutma',
        link: 'https://www.dr.com.tr/kategori/isitma-ve-sogutma',
      },
      {
        title: 'Akıllı Ev Elektroniği',
        link: 'https://www.dr.com.tr/kategori/akilli-ev-elektronigi',
      },
    ],
  },
  {
    title: 'Yardım / İletişim',
    link: '#',
    options: [
      { title: 'Siparişler', link: 'https://www.dr.com.tr/yardim' },
      { title: 'Teslimat ve Kargo', link: 'https://www.dr.com.tr/yardim' },
      { title: 'Fatura', link: 'https://www.dr.com.tr/yardim' },
      { title: 'Sipariş İptali', link: 'https://www.dr.com.tr/yardim' },
      { title: 'İade İşlemleri', link: 'https://www.dr.com.tr/yardim' },
      { title: 'e-Kitap', link: 'https://www.dr.com.tr/e-kitap-yardim' },
      {
        title: 'Ödeme Yöntemleri',
        link: 'https://www.dr.com.tr/odeme-yontemleri',
      },
    ],
  },
];

const categories3 = [
  {
    title: 'Anne Bebek',
    link: 'https://www.dr.com.tr/kategori/anne-bebek',
    options: [
      {
        title: 'Bebek Arabaları',
        link: 'https://www.dr.com.tr/kategori/anne-bebek',
      },
      {
        title: 'Bebek Beslenme Ürünleri',
        link: 'https://www.dr.com.tr/kategori/bebek-beslenme',
      },
      {
        title: 'Süt Pompaları',
        link: 'https://www.dr.com.tr/kategori/sut-pompasi/',
      },
      {
        title: 'Biberon & Emzik',
        link: 'https://www.dr.com.tr/kategori/biberon-emzik-aksesuarlar',
      },
      {
        title: 'Mama Sandalyesi',
        link: 'https://www.dr.com.tr/kategori/mama-sandalyesi',
      },
      {
        title: 'Buhar Makinesi',
        link: 'https://www.dr.com.tr/kataloglar_/buhar-makinesi/8692',
      },
      {
        title: 'Bebek Kamerası',
        link: 'https://www.dr.com.tr/kataloglar_/bebek-kamerasi-ve-bebek-telsiz/8690',
      },
    ],
  },
  {
    title: 'Editörden Seçimler',
    link: '#',
    options: [
      { title: 'Keşfet', link: '#' },
      { title: 'Harry Potter', link: '#' },
      { title: '1001 Kitap', link: '#' },
      { title: 'Ödüllü Kitaplar', link: '#' },
      { title: 'Sizin İçin Seçtiklerimiz', link: '#' },
    ],
  },
];

const categories4 = [
  {
    title: 'Hobi Oyuncak',
    link: '#',
    options: [
      { title: 'Puzzlelar', link: '#' },
      { title: 'Eğitim Oyuncakları', link: '#' },
      { title: 'Birleştir ve Oyna Setleri', link: '#' },
      { title: 'Figürler', link: '#' },
      { title: '0-3 Yaş Oyuncakları', link: '#' },
      { title: 'Hobi', link: '#' },
      { title: 'Kutu Oyunları', link: '#' },
    ],
  },
  {
    title: 'Kurumsal',
    link: '#',
    options: [
      { title: 'D&R Hakkında', link: '#' },
      { title: 'D&R Mağazalar', link: '#' },
      { title: 'Mağaza Dijital Kart Üyeliği', link: '#' },
      { title: 'Mağaza Dijital Kart', link: '#' },
      { title: 'Aydınlatma Metni', link: '#' },
      { title: 'Mağaza Dijital Kart Üyelik Sözleşmesi', link: '#' },
      { title: 'D&R Mağaza Etkinlikleri', link: '#' },
      { title: 'Hediye Kartları', link: '#' },
    ],
  },
];

const goToLink = (link: string) => {
  window.location.href = link;
};
</script>

<style scoped>
.text {
  font-weight: bold;
  font-size: 25px;
  margin: 45px;
}

.icon-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
}

.icon-wrapper {
  text-align: center;
  margin: 10px;
}

.circle-icon {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  cursor: pointer;
}

.caption {
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.footer {
  font-size: 14px;
  color: gray;
  text-align: left;
  margin-left: 3%;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}

.footer-text-kategori {
  font-size: 14px;
  color: gray;
  text-align: left;
  font-weight: bold;
}

.footer-text-secenek {
  font-size: 12px;
  color: gray;
  text-align: left;
  line-height: 2;
}
.categories {
  margin: 45px;
  margin-top: 3px;
  margin-left: -10px;
}

.communication q-text {
  color: gray;
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
  margin-left: 5px;
  padding: 10px;
}
.social-icons-container {
  margin-top: 10px;
}
.social-img {
  display: flex;
}
.copyright {
  font-size: 10px;
  margin-left: 10%;
}
</style>
