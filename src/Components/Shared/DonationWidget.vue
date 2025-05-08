<template>
  <div class="fixed right-2 top-24 z-50">
    <button @click="toggleModal" class="bg-green-600 text-white px-3 py-1 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 flex items-center space-x-1 rtl:space-x-reverse">
      <span>تبرع الآن</span>
      <span class="bg-white text-green-600 rounded-full px-1 text-xs font-bold">+</span>
    </button>

    <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" @click.self="closeModal">
        <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-4">
          <h3 class="text-xl font-semibold mb-4 text-center text-gray-800">اختر مبلغ التبرع</h3>

          <div class="flex justify-center space-x-2 mb-4 rtl:space-x-reverse">
            <button @click="selectAmount(10)" :class="['px-4 py-2 rounded border', selectedAmount === 10 ? 'bg-green-600 text-white border-green-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200']">10</button>
            <button @click="selectAmount(50)" :class="['px-4 py-2 rounded border', selectedAmount === 50 ? 'bg-green-600 text-white border-green-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200']">50</button>
            <button @click="selectAmount(100)" :class="['px-4 py-2 rounded border', selectedAmount === 100 ? 'bg-green-600 text-white border-green-600' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200']">100</button>
          </div>

          <div class="mb-4">
            <label for="customAmount" class="block text-sm font-medium text-gray-700 mb-1 text-right">أو أدخل مبلغ آخر</label>
            <input
              type="number"
              id="customAmount"
              v-model="customAmount"
              @input="selectCustomAmount"
              placeholder="المبلغ"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-right"
            />
          </div>

          <div class="mb-4">
            <p class="text-sm font-medium text-gray-700 mb-2 text-center">طرق الدفع المتاحة</p>
            <div class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
              <!-- Placeholder for payment icons -->
              <span class="text-gray-400 text-xs">(ايقونات الدفع هنا)</span>
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M21.7,8.35c0-1.1-.89-2-2-2H4.3c-1.1,0-2,.9-2,2v7.3c0,1.1,.9,2,2,2h15.4c1.1,0,2-.9,2-2V8.35ZM4.3,6.35h15.4c.28,0,.5,.22,.5,.5v1.58l-7.93,4.46a.5.5,0,0,1-.54,0L3.8,8.43V6.85c0-.28,.22-.5,.5-.5Zm16.4,9.3H4.3c-.28,0-.5-.22-.5-.5V9.99l7.68,4.32c.15,.08,.32,.13,.49,.13s.34-.05,.49-.13l7.68-4.32v5.66c0,.28-.22,.5-.5,.5Z"/></svg>
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2Zm0,18c-4.41,0-8-3.59-8-8s3.59-8,8-8,8,3.59,8,8-3.59,8-8,8Zm-1-13h2v6h-2Zm0,8h2v2h-2Z"/></svg>
              <svg class="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12,1.94C6.45,1.94,2,6.39,2,11.94c0,5.55,4.45,10.01,10,10.01s10-4.46,10-10.01C22,6.39,17.55,1.94,12,1.94Zm0,18.02c-4.41,0-8-3.59-8-8.01s3.59-8.01,8-8.01,8,3.59,8,8.01-3.59,8.01-8,8.01Zm-1.41-11.41l-1.42,1.41L11.17,12l-1.99,1.99,1.41,1.41L12.59,13.41l2,2,1.41-1.41L14,12l1.99-1.99-1.41-1.41L12.59,10.59l-2-2Z"/></svg>
            </div>
          </div>
          <a href="/pay">
            <button @click="submitDonation" class="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 disabled:opacity-50" :disabled="!finalAmount">
            تبرع الآن {{ finalAmount ? `(${finalAmount})` : '' }}
          </button>
          </a>
          
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isModalOpen = ref(false);
const selectedAmount = ref(null);
const customAmount = ref('');

const finalAmount = computed(() => {
  return selectedAmount.value || (customAmount.value > 0 ? parseFloat(customAmount.value) : null);
});

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
  if (!isModalOpen.value) {
    // Reset state when closing
    selectedAmount.value = null;
    customAmount.value = '';
  }
}

function closeModal() {
  isModalOpen.value = false;
  selectedAmount.value = null;
  customAmount.value = '';
}

function selectAmount(amount) {
  selectedAmount.value = amount;
  customAmount.value = ''; // Clear custom amount if a preset is selected
}

function selectCustomAmount() {
  if (customAmount.value !== '' && customAmount.value > 0) {
    selectedAmount.value = null; // Clear preset amount if custom is entered
  } else if (customAmount.value === '') {
     // Allow selecting presets again if custom is cleared
  } else if (customAmount.value <= 0) {
    customAmount.value = ''; // Prevent negative or zero values
  }
}


</script>

<style scoped>
/* Fade transition for the modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Basic styling for amount buttons */
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.5); /* Tailwind green-400 */
}


</style>
