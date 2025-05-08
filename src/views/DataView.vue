<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-50">

    <!-- القسم الأيمن -->
    <div class="space-y-4">
      <h2 class="text-right text-xl font-bold text-gray-700">التفاصيل</h2>
      <div class="bg-white border rounded-lg overflow-hidden shadow-sm">
        <!-- صورة مع شريط التقدم -->
        <div class="relative">
          <img :src="decodedImage" alt="project" class="w-full h-52 object-cover">
          <div class="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
            <div class="bg-emerald-600 h-full" :style="{ width: '92%' }"></div>
          </div>
        </div>

        <!-- نصوص -->
        <div class="p-4 text-right">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ decodedDescription }}</h3>
          <div class="text-sm text-gray-500 mb-2">{{ caseNumber }} : رقم الحالة</div>
          <p class="text-sm text-gray-700 mb-4 leading-relaxed">
            {{ decodedProjectDescription }}
          </p>

          <!-- معلومات التبرع -->
          <div class="grid grid-cols-2 gap-4 text-sm font-semibold text-right text-gray-700 border-t pt-4">
            <div>
              <div>تم جمع</div>
              <div class="text-emerald-700">{{ collectedAmount }}</div>
            </div>
            <div>
              <div>المبلغ المتبقي</div>
              <div class="text-emerald-700">{{ remainingAmount }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <!-- مبالغ جاهزة -->
      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2">مبلغ التبرع</label>
        <div class="flex gap-2 flex-wrap">
          <button class="border rounded px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100" @click="donate(10)">10 دينار</button>
          <button class="border rounded px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100" @click="donate(50)">50 دينار</button>
          <button class="border rounded px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100" @click="donate(100)">100 دينار</button>
        </div>
        <input type="" v-model="customAmount" placeholder="قيمة المبلغ" class="w-full mt-4 border rounded px-3 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500" lang="en">
      </div>

      <!-- تبرع عن أحد -->
      <div class="flex items-center gap-2 text-sm">
      </div>

      <!-- زر التبرع -->
       <a href="/pay">
        <button class="w-full bg-green-700 text-white py-2 rounded text-sm flex items-center justify-center gap-2" @click="donateCustom">
        🛒 تبرع الآن
      </button>
       </a>


    </div>

      <!-- الإحصائيات -->
      <div class="grid grid-cols-2 gap-4 text-sm text-emerald-700 font-semibold text-center">
        <div class="bg-white p-3 rounded shadow-sm border">
          <div>الزيارات</div>
          <div class="text-gray-800 text-lg font-bold">{{ visits }}</div>
        </div>
        <div class="bg-white p-3 rounded shadow-sm border">
          <div>آخر عملية تبرع قبل</div>
          <div class="text-gray-800 text-lg font-bold">{{ lastDonation }}</div>
        </div>
        <div class="bg-white p-3 rounded shadow-sm border">
          <div>عدد المستفيدين</div>
          <div class="text-gray-800 text-lg font-bold">{{ beneficiaries }}</div>
        </div>
        <div class="bg-white p-3 rounded shadow-sm border">
          <div>عدد عمليات التبرع</div>
          <div class="text-gray-800 text-lg font-bold">{{ donationsCount }}</div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    caseNumber: {
      type: String,
      required: true
    },
    collectedAmount: {
      type: String,
      required: true
    },
    remainingAmount: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    }
  },
  computed: {
    decodedProjectName() {
      return decodeURIComponent(this.projectName);
    },
    decodedProjectDescription() {
      // return decodeURIComponent(this.projectDescription); // Original functionality
      return `مشروع ${this.decodedProjectName} يهدف لمساعدة المستحقين وتحسين حياتهم بشكل ملموس ومستدام.`;
    },
    decodedDescription() {
      // Although 'description' prop is defined, it's not used in the template.
      // Adding a decoder for it in case it's used later or for consistency.
      // return decodeURIComponent(this.description); // Original functionality
      // The request is to change *every* description, so this will also use the project name.
      // If a different source for this description is intended, the logic might need adjustment.
      return `مشروع ${this.decodedProjectName} يهدف لمساعدة المستحقين وتحسين حياتهم بشكل ملموس ومستدام.`;
    },
    decodedImage() {
      return decodeURIComponent(this.image);
    }
  },
  data() {
    return {
      customAmount: 0,
      visits: 15552,
      lastDonation: '24 ثانية',
      beneficiaries: '192 من أصل 209',
      donationsCount: '23,433 عملية'
    }
  },
  methods: {
    donate(amount) {
      // Set the custom amount to the selected predefined amount
      this.customAmount = amount;
    },
    donateCustom() {
      // Handle custom donation amount
      console.log('Custom amount:', this.customAmount);
      // Add logic to process the custom donation amount
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.lg\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.gap-6 {
  gap: 1.5rem;
}
.p-6 {
  padding: 1.5rem;
}
.bg-gray-50 {
  background-color: #f9fafb;
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.text-right {
  text-align: right;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.border {
  border-width: 1px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.overflow-hidden {
  overflow: hidden;
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.relative {
  position: relative;
}
.w-full {
  width: 100%;
}
.h-52 {
  height: 13rem;
}
.object-cover {
  object-fit: cover;
}
.absolute {
  position: absolute;
}
.bottom-0 {
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.h-2 {
  height: 0.5rem;
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-emerald-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 150 105 / var(--tw-bg-opacity));
}
.h-full {
  height: 100%;
}
.p-4 {
  padding: 1rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.font-semibold {
  font-weight: 600;
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.mb-4 {
  margin-bottom: 1rem;
}
.leading-relaxed {
  line-height: 1.625;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.gap-4 {
  gap: 1rem;
}
.border-t {
  border-top-width: 1px;
}
.pt-4 {
  padding-top: 1rem;
}
.text-emerald-700 {
  --tw-text-opacity: 1;
  color: rgb(4 120 87 / var(--tw-text-opacity));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.block {
  display: block;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.flex {
  display: flex;
}
.gap-2 {
  gap: 0.5rem;
}
.flex-wrap {
  flex-wrap: wrap;
}
.rounded {
  border-radius: 0.25rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.hover\:bg-emerald-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}
.mt-4 {
  margin-top: 1rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.focus\:ring-emerald-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(16 185 129 / var(--tw-ring-opacity));
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0 0 #0000);
}
.focus\:border-emerald-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(16 185 129 / var(--tw-border-opacity));
}
.items-center {
  align-items: center;
}
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.justify-center {
  justify-content: center;
}
.text-center {
  text-align: center;
}
.p-3 {
  padding: 0.75rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
</style>
