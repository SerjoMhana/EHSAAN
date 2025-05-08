<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>

<template>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
      <div v-for="card in cards" :key="card.id" class="max-w-sm rounded-lg overflow-hidden shadow-md bg-white border border-gray-200">
        <!-- صورة المشروع -->
        <div class="relative">
<img :src="card.image" :alt="card.title" class="w-full h-48 object-cover rounded-lg">
          <!-- النسبة المئوية -->
        </div>

        <!-- محتوى البطاقة -->
        <div class="p-4 text-right">
          <h3 class="text-gray-800 font-bold mb-2 text-sm">{{ card.title }}</h3>
          <p class="text-gray-600 text-xs">{{ card.description }}</p>

          <!-- معلومات التبرع -->
          <div class="text-xs grid grid-cols-2 gap-4 text-gray-700 border-t border-b py-2 my-2">
            <div>
              <div>تم جمع</div>
              <div class="text-green-700 font-bold">{{ card.collected }}دينار</div>
            </div>
            <div>
              <div>المبلغ المتبقي</div>
              <div class="text-emerald-700 font-bold">{{ card.remaining }} دينار</div>
            </div>
          </div>

          <!-- نموذج التبرع -->
          <div class="flex flex-col space-y-2">
            <div class="flex border rounded overflow-hidden">
              <input type="number" placeholder="مبلغ التبرع" class="w-full px-2 py-1 border-0 focus:ring-0 text-sm">
              <span class="px-2 py-1 bg-gray-100 text-gray-600 text-sm">دينار</span>
            </div>
            <a href="/pay">
              <button class="bg-emerald-600 hover:bg-emerald-700 text-white py-1.5  px-2 rounded text-sm flex justify-center items-center">
              🛒 تبرع الآن
              
            </button>
            </a>
           
          </div>

          <!-- رابط التفاصيل -->
          <div class="mt-2 text-center">
            <router-link :to="{ name: 'data-view', params: { 
              image: encodeURIComponent(card.image || ''),
              description: encodeURIComponent(card.description || ''),
              caseNumber: String(card.caseNumber || 'UNKNOWN'),
              collectedAmount: String(card.collected || '0'),
              remainingAmount: String(card.remaining || '0'),
              projectDescription: encodeURIComponent(card.projectDescription || ''),
              projectName: encodeURIComponent(card.projectName || '')
            } }" class="text-sm text-gray-600 hover:text-emerald-600 underline">عرض التفاصيل</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
