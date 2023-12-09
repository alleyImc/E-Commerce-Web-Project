<template>
  <div id="q-app" style="min-height: 150vh;">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-btn class="btnProduct">
        <q-img src="https://i.dr.com.tr/cache/500x400-0/originals/0002063207003-1.jpg" alt="product-image1" @click="goToLink('link1')" />
        <q-card-section>
          <div class="text-caption text-capitalize">
            Bofigo Kamp Sandalyesi Rejisör - Yeşil
          </div>      
          <q-space></q-space>
          <div class="text-h10s text-weight-bolder">
            259,90 TL
          </div>
        </q-card-section>

        <q-separator></q-separator>

        <div class="sepet">
          <q-card-actions>
            <q-btn class="sepet-btn" flat color="white">
              Sepete Ekle
            </q-btn>
          </q-card-actions>
        </div>
      </q-btn>




    <q-btn class="btnProduct">
      
    <q-img src="https://i.dr.com.tr/cache/500x400-0/originals/0002085777001-1.jpg" alt="product-image2" @click="goToLink('link2')" />
  
        <q-card-section>
          <div class="text-caption text-capitalize">
            Kaptan Alex De Souza
          </div>
          <q-space></q-space>
          <div class="col text-h10s text-weight-bolder">
            35,40 TL
          </div>
        </q-card-section>
        <q-separator></q-separator>

        <div class="sepet">
          <q-card-actions>
            <q-btn class="sepet-btn" flat color="white">
              Sepete Ekle
            </q-btn>
          </q-card-actions>
        </div>
      </q-btn>

      <q-btn class="btnProduct">
        <q-img src="https://i.dr.com.tr/cache/500x400-0/originals/0002063141001-1.jpg" alt="product-image3" @click="goToLink('link3')" />
        <q-card-section>
          <div class="text-caption text-capitalize">
            Zamanın Kızı
          </div>      
          <q-space></q-space>
          <div class="text-h10s text-weight-bolder">
            70,00 TL
          </div>
        </q-card-section>

        <q-separator></q-separator>

        <div class="sepet">
          <q-card-actions>
            <q-btn class="sepet-btn" flat color="white">
              Sepete Ekle
            </q-btn>
          </q-card-actions>
        </div>
      </q-btn>




      <q-btn class="btnProduct">
        <q-img src="https://i.dr.com.tr/cache/500x400-0/originals/0001899768001-1.jpg" alt="product-image4" @click="goToLink('link4')" />
        <q-card-section>
          <div class="text-caption text-capitalize">
            Apple USB C 20W Şarj Adaptörü MHJE3TU/A
          </div>      
          <q-space></q-space>
          <div class="text-h10s text-weight-bolder">
            549,00 TL
          </div>
        </q-card-section>

        <q-separator></q-separator>

        <div class="sepet">
          <q-card-actions>
            <q-btn class="sepet-btn" flat color="white">
              Sepete Ekle
            </q-btn>
          </q-card-actions>
        </div>
      </q-btn>
      
      <q-btn class="btnProduct">
        <q-img src="https://i.dr.com.tr/cache/500x400-0/originals/0002060268001-1.jpg" alt="product-image5" @click="goToLink('link5')" />
        <q-card-section>

          <div class="text-caption text-capitalize">
            Apple USB C 20W Şarj Adaptörü MHJE3TU/A
          </div>      
          <q-space></q-space>
          <div class="text-h10s text-weight-bolder">
            549,00 TL
          </div>
        </q-card-section>

        <q-separator></q-separator>

        <div class="sepet">
          <q-card-actions>
            <q-btn class="sepet-btn" flat color="white">
              Sepete Ekle
            </q-btn>
          </q-card-actions>
        </div>
      </q-btn>
    

    </div>
  </div>
</template>




<script setup lang ="ts">
import { ref } from 'vue';

const productLinks: Record<string, string> = {
  link1: 'https://www.dr.com.tr/spor-outdoor/bofigo-kamp-sandalyesi-rejisor/outdoor-urunler/kamp-kampcilik-malzemeleri/urunno=0002063207003',
  link2: 'https://www.dr.com.tr/kitap/kaptan-alex-de-souza/kerem-tek/cocuk-ve-genclik/genclik-10-yas/roman-oyku/urunno=0002085777001',
  link3: 'https://www.dr.com.tr/kitap/zamanin-kizi/edebiyat/roman/polisiye/urunno=0002063141001',
  link4: 'https://www.dr.com.tr/elektronik/apple-20w-usb-c-hizli-sarjadaptoru/telefon/telefon-aksesuarlari/sarj-cihazlari/urunno=0001899768001',
  link5: 'https://www.dr.com.tr/kataloglar_/prestij-kalemler/7956',
  link6: 'https://www.dr.com.tr/marka/vatkalimon/m=10011168',
};
const goToLink = (productImage: string) => {
  window.location.href = productLinks[productImage];
}

</script>




<style scoped>

.btnProduct
{
  width:160px;
  height: 320px;
}
.sepet-btn 
{
  display: none;
  background-color:#084793;
  width: 150px;
}

.btnProduct:hover .sepet-btn
{
  display: inline-block;
}
</style>
