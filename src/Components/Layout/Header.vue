<template>
 <nav class="bg-white border-b shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">

      <!-- Logo -->
      <div class="flex-shrink-0">
        <span class="text-green-600 text-xl font-bold">أيادي ليبيا</span>
      </div>

      <!-- Navigation links -->
      <div class="flex space-x-16 rtl:space-x-reverse">
        <a href="/" class="text-gray-800 hover:text-green-600">الرئيسية</a>
        <a href="/tabr" class="text-gray-800 hover:text-green-600"> فرص التبرع </a>
        <a href="/#SERV" class="text-gray-800 hover:text-green-600">خدماتنا</a>
        <a href="/#EHSAN" class="text-gray-800 hover:text-green-600">عن أيادي ليبيا</a>

      </div>

      <!-- أدوات -->
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <button class="text-gray-800 hover:text-green-600" @click="toggleSearch">
          🔍
        </button>

        <button class="text-gray-800 hover:text-green-600" @click="handlePersonIconClick">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Search bar -->
    <div v-if="showSearch" class="mt-2 mb-4">
      <input
        type="text"
        v-model="searchCaseNumber"
        @keyup.enter="performSearch"
        placeholder="ادخل رقم الحالة للبحث..."
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
      />
    </div>
  </div>
</nav>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '../../data/projects'; // Import the projects data

const showSearch = ref(false);
const searchCaseNumber = ref('');
const router = useRouter();

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  if (!showSearch.value) {
    searchCaseNumber.value = ''; // Clear search input when closing
  }
};

const performSearch = () => {
  const foundProject = projects.find(project => project.caseNumber === searchCaseNumber.value);

  if (foundProject) {
    // Navigate to DataView page with project details
    router.push({
      name: 'data-view',
      params: {
        image: encodeURIComponent(foundProject.image),
        description: encodeURIComponent(foundProject.description),
        caseNumber: foundProject.caseNumber,
        collectedAmount: foundProject.collected,
        remainingAmount: foundProject.remaining,
        projectDescription: encodeURIComponent(foundProject.projectDescription),
        projectName: encodeURIComponent(foundProject.projectName)
      }
    });
    searchCaseNumber.value = ''; // Clear search input after successful search
    showSearch.value = false; // Hide search bar after successful search
  } else {
    alert('لم يتم العثور على حالة بهذا الرقم.'); // Or display a message in the UI
  }
};

const handlePersonIconClick = () => {
  const userName = sessionStorage.getItem('userName');
  if (userName) {
    alert(`أنت مسجل الدخول باسم: ${userName}`);
  } else {
    router.push({ name: 'signin' });
  }
};
</script>

<style scoped>
/* Add component-specific styles here if needed */


</style>
