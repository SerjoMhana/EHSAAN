<script setup>
import Header from './Components/Layout/Header.vue'
import Footer from './Components/Layout/Footer.vue'
import DonationWidget from './Components/Shared/DonationWidget.vue' // Import the new component
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="scroll-smooth">
        <Header />
        <main>
            <RouterView />
        </main>
        <Footer />
        <DonationWidget /> <!-- Add the component here -->
    </div>
</template>
