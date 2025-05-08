<template>
  <div class="container mx-auto p-6 pt-20">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-lg">
      <div class="md:flex">
        <div class="w-full p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">اختر طريقة الدفع</h2>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              طرق الدفع المتاحة:
            </label>
            <div class="mt-2 flex justify-center space-x-6 rtl:space-x-reverse">
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio text-green-600" name="paymentMethod" value="mastercard" v-model="selectedMethod">
                <span class="ml-2 text-gray-700">ماستر كارد</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio text-green-600" name="paymentMethod" value="onepay" v-model="selectedMethod">
                <span class="ml-2 text-gray-700">وان باي</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio text-green-600" name="paymentMethod" value="moamalat" v-model="selectedMethod">
                <span class="ml-2 text-gray-700">معاملات</span>
              </label>
            </div>
          </div>

          <div v-if="selectedMethod === 'mastercard'" class="space-y-4">
            <div>
              <label for="cardNumber" class="block text-gray-700 text-sm font-bold mb-2">
                رقم البطاقة:
              </label>
              <input type="text" id="cardNumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="أدخل رقم البطاقة">
            </div>
            <div>
              <label for="expiryDate" class="block text-gray-700 text-sm font-bold mb-2">
                تاريخ الصلاحية:
              </label>
              <input type="text" id="expiryDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="MM/YY">
            </div>
          </div>

          <div v-if="selectedMethod === 'onepay'" class="space-y-4">
            <div>
              <label for="onepaySecret" class="block text-gray-700 text-sm font-bold mb-2">
                الرقم السري لوان باي:
              </label>
              <input type="password" id="onepaySecret" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="أدخل الرقم السري">
            </div>
          </div>

          <div v-if="selectedMethod === 'moamalat'" class="space-y-4">
            <div>
              <label for="moamalatSecret" class="block text-gray-700 text-sm font-bold mb-2">
                الرقم السري لمعاملات:
              </label>
              <input type="password" id="moamalatSecret" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="أدخل الرقم السري">
            </div>
          </div>

          <div class="mt-6">
            <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              إتمام الدفع
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedMethod = ref(null);
</script>

<style scoped>
/* Add any component specific styles here if needed */
</style>
