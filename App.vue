<template>
  <div class="app">
    <header class="topbar">
      <div class="brand">
        <div class="logo">W</div>
        <div><strong>WAMZI MALL ONLINE</strong><small>Original Products, Trusted Service</small></div>
      </div>
      <button class="cart">🛒 Cart <span>{{ cart }}</span></button>
    </header>

    <main>
      <section class="hero">
        <div>
          <p class="eyebrow">KARIBU WAMZI MALL</p>
          <h1>Nunua bidhaa bora kwa urahisi.</h1>
          <p>Jukwaa la bidhaa, wauzaji na huduma za ununuzi mtandaoni.</p>
          <button class="primary" @click="scrollProducts">Anza Shopping</button>
        </div>
        <div class="hero-card">🛍️</div>
      </section>

      <section class="section">
        <h2>Makundi ya Bidhaa</h2>
        <div class="chips">
          <button v-for="c in categories" :key="c" @click="selected=c">{{ c }}</button>
        </div>
      </section>

      <section id="products" class="section">
        <div class="section-head">
          <h2>Bidhaa</h2>
          <input v-model="search" placeholder="Tafuta bidhaa..." />
        </div>
        <div class="grid">
          <article v-for="p in filtered" :key="p.id" class="product">
            <div class="product-img">{{ p.icon }}</div>
            <div>
              <span class="tag">{{ p.category }}</span>
              <h3>{{ p.name }}</h3>
              <p class="price">TSh {{ p.price.toLocaleString() }}</p>
              <button class="primary full" @click="cart++">Ongeza kwenye Cart</button>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer>© {{ new Date().getFullYear() }} WAMZI MALL ONLINE</footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const cart = ref(0)
const search = ref('')
const selected = ref('Zote')
const categories = ['Zote','Vipodozi','Mavazi','Manukato','Salon','Kilimo']
const products = [
  {id:1,name:'Serum',price:25000,category:'Vipodozi',icon:'✨'},
  {id:2,name:'Body Oil',price:18000,category:'Vipodozi',icon:'🧴'},
  {id:3,name:'Perfume',price:35000,category:'Manukato',icon:'🌸'},
  {id:4,name:'Mavazi',price:45000,category:'Mavazi',icon:'👕'},
  {id:5,name:'Salon Equipment',price:120000,category:'Salon',icon:'💇'},
  {id:6,name:'Korosho',price:15000,category:'Kilimo',icon:'🥜'}
]
const filtered = computed(() => products.filter(p =>
  (selected.value === 'Zote' || p.category === selected.value) &&
  p.name.toLowerCase().includes(search.value.toLowerCase())
))
function scrollProducts(){ document.querySelector('#products').scrollIntoView({behavior:'smooth'}) }
</script>