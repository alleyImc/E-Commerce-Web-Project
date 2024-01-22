<template>
  <q-page class="login-page">
    <div class="login-container">
      <q-card class="q-ma-md transparent-card" style="max-width: 370px">
        <q-card-section>
          <div class="text-h6 text-center custom-login-text">Giriş Yap</div>
          <q-tabs class="ust-buttonlar" v-model="tab">
            <q-btn name="email" @click="tab = 'email'" class="ust-btn"
              >E-Posta</q-btn
            >
            <span class="button-space" style="margin-left: 20px"></span>
            <q-btn name="phone" @click="tab = 'phone'" class="ust-btn"
              >Cep Telefonu</q-btn
            >
          </q-tabs>

          <q-form @submit="login">
            <q-tab-pane name="email">
              <div style="margin-bottom: 5px; font-weight: 500">
                E-Posta Adresi
              </div>
              <q-input v-model="email" class="ust-3btn" />
              <div
                style="margin-bottom: 5px; margin-top: 15px; font-weight: 500"
              >
                Şifre
              </div>
              <q-input v-model="password" type="password" class="ust-3btn" />
            </q-tab-pane>

            <div
              class="q-gutter-sm"
              style="margin-left: -15px; margin-top: 5px"
            >
              <div>
                <q-checkbox
                  v-model="right"
                  label="Beni Hatırla"
                  size="sm"
                ></q-checkbox>
                <span style="margin-left: 121px">
                  <a
                    href="#https://www.dr.com.tr/sifremiunuttum"
                    style="color: red; margin-left: 10px"
                    >Şifremi Unuttum</a
                  >
                </span>
              </div>
            </div>
            <div>
              <q-card id="q-app" class="robot-card">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="robot"
                      label="Ben Robot Değilim"
                      size="lg"
                      style="margin-top: -1px"
                      @click="startSpinner"
                      :disable="showSpinner"
                    ></q-checkbox>
                    <q-img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"
                      alt=""
                      class="reCaptha"
                    />
                    <q-spinner
                      v-if="showSpinner"
                      color="primary"
                      size="2em"
                      style="margin-top: -118px; margin-left: 18px"
                    />
                  </div>
                </div>
              </q-card>
              <br />
              <span style="margin-top: 8px">
                <a
                  style="
                    color: #084793;
                    font-size: small;
                    text-decoration: underline;
                    font-weight: 400;
                  "
                  @click="showPrivacyPolicy"
                  >Gizlilik ilkesi</a
                >
              </span>
            </div>
            <q-btn
              class="q-mt-md"
              type="submit"
              label="Giriş Yap"
              style="
                background-color: #084793;
                color: white;
                font-family: inherit;
                width: 100%;
                text-transform: capitalize;
                height: 40px;
              "
            />
          </q-form>

          <div class="text-center" style="margin-top: 20px; font-weight: 500">
            Hesabınız Yok Mu?
            <span>
              <a
                href="https://www.dr.com.tr/uyeol"
                style="color: blue; margin-left: 5px"
                >Üye Olun</a
              >
            </span>
          </div>
        </q-card-section>
      </q-card>
      <div class="login-image">
        <img
          src="https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/frontend-assets/login-img.webp"
          alt="Login Image"
        />
      </div>
    </div>
  </q-page>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-actions align="right" class="modal-close-btn">
        <a style="margin-right: auto; margin-left: 10px">Gizlilik Politikası</a>
        <q-btn
          flat
          icon="close"
          @click="closePrivacyPolicyDialog"
          style="background-color: #dbe1e98d; color: #084793"
        />
      </q-card-actions>
      <q-card-section>
        <div v-html="privacyPolicyText"></div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref<'email' | 'phone'>('email');
const email = ref('');
const password = ref('');
const phone = ref('');
const right = ref(false);
const robot = ref(false);
const showSpinner = ref(false);
const showDialog = ref(false);

const login = () => {
  if (tab.value === 'email') {
    console.log('E-posta ile giriş yapılıyor:', email.value, password.value);
  } else {
    console.log('Cep telefonu ile giriş yapılıyor:', phone.value);
  }
};

//checkbox işaretlenince spinner çalışır ve cehckbox işaretlenir
const startSpinner = () => {
  showSpinner.value = true;
  setTimeout(() => {
    showSpinner.value = false;
    robot.value = true;
  }, 2000);
};

//gizlilik popup ı aç
const privacyPolicyText = ref(`
  İşbu Gizlilik Politikası'nda kullanılan "Kişisel Bilgiler" terimi sizi tanımlayabilecek isminiz,
  doğum tarihiniz, e-posta adresiniz veya posta adresiniz dahil fakat bunlarla sınırlı olmamak kaydıyla
  kredi kartı bilgileriniz, kimlik bilgileriniz gibi bilgileri ifade etmektedir.

  Turkuvaz Müzik Kitap Mağ. Paz. AŞ. olarak biz, ( aşağıda kısaca "dr.com.tr" olarak anılacaktır. ) işbu gizlilik politikası ile tüm kullanıcılarımızı haklarında www.dr.com.tr adlı internet sitesinden toplanan Kişisel Bilgilerin kullanımı ve ifşası hakkında bilgilendirmeyi hedeflemekteyiz. dr.com.tr olarak biz, kullanıcılarımızın gizliliğine değer vermekte olup, bizimle paylaşılan kişisel bilgilerin gizliliği ve bilgilerin güvenliğini ile ilgili kullanıcılarımızın kaygılarını saygıyla karşılamaktayız. Bu nedenle "Gizlilik Politikası" gizliliğinizi korumak ve bilgi temininde güvenli bir deneyim sağlamanız için tasarlamış olup, kullanıcıların onayı olmadan kişisel bilgilerini kullanmayacak ve Kişisel Bilgilerin kullanılmasında, tamamen uluslararası alanda kabul edilen mahremiyet koruma standartlarına uymayı taahhüt etmektedir.

  dr.com.tr olarak www.dr.com.tr adlı internet sitesini kullanmadan veya bize Kişisel Bilgilerinizi iletmeden önce kullanıcıların mevcut Gizlilik Politikası'nı okumasını rica ediyoruz. Bu gizlilik politikası herhangi bir sebepten dolayı bildirimde bulunmaksızın zaman zaman değiştirebilir veyahut da yenilenebilir. Bizler yenilenen sözleşmeler konusunda siz kullanıcıları uyarmayabiliriz. Ancak bu durumda Gizlilik Politikası'nın söz konusu değişiklikleri yansıtan güncellenmiş halinin yükleyeceğini belirtmek isteriz. İşbu sebeple güncellenen Gizlilik Politikası hakkında kullanıcıların bilgi sahibi olduklarını periyodik olarak gözden geçirmesini öneririz. Sizlere önerimiz, yapılan değişikliklerden sorumlu olacağınız için, bu gizlilik politikasını her kullanım öncesi kontrol etmenizdir. dr.com.tr kullanıcıların izniyle Kişisel Bilgileri aşağıdaki amaçlar için kullanacaktır, hiçbir durumda öngörülen amacın dışında kullanmayacaktır
`);
const showPrivacyPolicy = () => {
  showDialog.value = true;
};
const closePrivacyPolicyDialog = () => {
  showDialog.value = false;
};
</script>

<style scoped>
.transparent-card {
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin-top: 50px;
  margin-left: 270px;
}
.login-page {
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.custom-login-text {
  font-family: SFProDisplay, arial, sans-serif;
  font-size: 22px;
  font-weight: bolder;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-bottom: 15px;
}
.ust-buttonlar {
  margin-bottom: 20px;
  padding: 5px 0px 5px 0px;
}
.ust-btn {
  width: 550px;
  color: #084793;
  background-color: #dbe1e98d;
  border: 1px solid #eaf3ff8d;
  border-radius: 0;
  text-transform: capitalize;
}
.ust-3btn {
  color: #084793;
  background-color: #dbe1e98d;
  text-transform: capitalize;
  font-weight: 300;
}
.robot-card {
  width: 500px;
  height: 70px;
  margin-top: 10px;
  background-color: #e3e6ea8d;
  border: 1px solid #565656;
}
.reCaptha {
  width: 50px;
  margin-left: 250px;
  margin-top: -80px;
}
.login-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
}
.login-image {
  flex: 1;
  text-align: right;
}
.login-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
