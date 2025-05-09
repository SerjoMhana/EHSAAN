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
            <div class="flex justify-center items-center space-x-6 rtl:space-x-reverse">
              <img src="../../assets/atm-card.png" alt="ATM Card" class="h-8 w-auto">
              <img src="../../assets/cashless-payment.png" alt="Cashless Payment" class="h-8 w-auto">
              <img src="../../assets/visa.png" alt="Visa" class="h-8 w-auto">
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
