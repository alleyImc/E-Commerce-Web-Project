<template>
  <div id="q-app">
    <div class="q-pa-md" style="max-width: 100%">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="vitrin" label="Vitrin"></q-tab>
          <q-tab name="kitap" label="Kitap"></q-tab>
          <q-tab name="elektronik" label="Elektronik"></q-tab>
          <q-tab name="bebek-oyuncak" label="Bebek, Oyuncak"></q-tab>
          <q-tab name="e-kitap" label="e-Kitap"></q-tab>
          <q-tab name="ofis-kirtasiye" label="Ofis, Kırtasiye"></q-tab>
          <q-tab name="spor-outdoor" label="Spor, Outdoor"></q-tab>
          <q-tab name="plak-muzik-aleti" label="Plak, Müzik Aleti"></q-tab>
        </q-tabs>

        <q-separator></q-separator>
        <div id="q-app" style="min-height: 300px margin-bottom:100px">
          <div class="q-pa-md" style="max-width: 100%">
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="vitrin" class="q-pa-none">
                <q-btn class="btnProduct">
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002063207003-1.jpg"
                    alt="product-image1"
                    @click="goToLink('link1')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Bofigo Kamp Sandalyesi Rejisör - Yeşil
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">259,90 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002085777001-1.jpg"
                    alt="product-image2"
                    @click="goToLink('link2')"
                  />

                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Kaptan Alex De Souza
                    </div>
                    <q-space></q-space>
                    <div class="col text-h10s text-weight-bolder">35,40 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002063141001-1.jpg"
                    alt="product-image3"
                    @click="goToLink('link3')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">Zamanın Kızı</div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">70,00 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0001899768001-1.jpg"
                    alt="product-image4"
                    @click="goToLink('link4')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Apple USB C 20W Şarj Adaptörü MHJE3TU/A
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">549,00 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002060268001-1.jpg"
                    alt="product-image5"
                    @click="goToLink('link5')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Apple USB C 20W Şarj Adaptörü MHJE3TU/A
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">549,00 TL</div>
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
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>

        <q-separator></q-separator>
        <div id="q-app" style="min-height: 300px margin-bottom:100px">
          <div class="q-pa-md">
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="kitap" class="q-pa-none">
                <q-btn class="btnProduct">
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002063207003-1.jpg"
                    alt="product-image1"
                    @click="goToLink('link1')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Bofigo Kamp Sandalyesi Rejisör - Yeşil
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">259,90 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002085777001-1.jpg"
                    alt="product-image2"
                    @click="goToLink('link2')"
                  />

                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Kaptan Alex De Souza
                    </div>
                    <q-space></q-space>
                    <div class="col text-h10s text-weight-bolder">35,40 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002063141001-1.jpg"
                    alt="product-image3"
                    @click="goToLink('link3')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">Zamanın Kızı</div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">70,00 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0001899768001-1.jpg"
                    alt="product-image4"
                    @click="goToLink('link4')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Apple USB C 20W Şarj Adaptörü MHJE3TU/A
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">549,00 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002060268001-1.jpg"
                    alt="product-image5"
                    @click="goToLink('link5')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Apple USB C 20W Şarj Adaptörü MHJE3TU/A
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">549,00 TL</div>
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
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
        <q-separator></q-separator>
        <div id="q-app" style="min-height: 300px margin-bottom:100px">
          <div class="q-pa-md">
            <q-tab-panels v-model="tab" animated style="margin-top: -600px">
              <q-tab-panel name="elektronik" class="q-pa-none">
                <q-btn class="btnProduct">
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002063207003-1.jpg"
                    alt="product-image1"
                    @click="goToLink('link1')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Bofigo Kamp Sandalyesi Rejisör - Yeşil
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">259,90 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002085777001-1.jpg"
                    alt="product-image2"
                    @click="goToLink('link2')"
                  />

                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Kaptan Alex De Souza
                    </div>
                    <q-space></q-space>
                    <div class="col text-h10s text-weight-bolder">35,40 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002063141001-1.jpg"
                    alt="product-image3"
                    @click="goToLink('link3')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">Zamanın Kızı</div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">70,00 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0001899768001-1.jpg"
                    alt="product-image4"
                    @click="goToLink('link4')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Apple USB C 20W Şarj Adaptörü MHJE3TU/A
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">549,00 TL</div>
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
                  <q-img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0002060268001-1.jpg"
                    alt="product-image5"
                    @click="goToLink('link5')"
                  />
                  <q-card-section>
                    <div class="text-caption text-capitalize">
                      Apple USB C 20W Şarj Adaptörü MHJE3TU/A
                    </div>
                    <q-space></q-space>
                    <div class="text-h10s text-weight-bolder">549,00 TL</div>
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
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref('vitrin');
</script>

<style scoped>
.btnProduct {
  width: 175px;
  height: 350px;
}
.sepet-btn {
  display: none;
  background-color: #084793;
  width: 150px;
  height: 5px;
  margin-top: -30px;
}

.btnProduct:hover .sepet-btn {
  display: inline-block;
}
</style>
