<script setup>
import Slideshow from "../Components/Shared/SlideShow.vue"
import Serveses from '../Components/Shared/Serveses.vue'
import Numbers from '../Components/Shared/Numbers.vue'
import Tbar3 from '../Components/Shared/Tbar3.vue' // Import Tbar3 component
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Get router instance

const items = [ // Define the items array with the first 3 cards
  {
    id: 1,
    title: ' الكفالة التعليمية للأيتام',
    description: 'ادعم تعليم يتيم، ابنِ مستقبلاً مشرقًا له بلمسة عطاء منك اليوم.',
    image: 'https://namaa-web.s3.me-south-1.amazonaws.com/Projects/2097.jpg',
    collected: '165,293',
    remaining: '67,707',
    caseNumber: 'P12345',
    projectDescription: 'يهدف هذا المشروع النبيل إلى توفير مستقبل أكثر إشراقًا للأطفال الأيتام من خلال دعم تعليمهم. تشمل الكفالة التعليمية تغطية الرسوم الدراسية، وتوفير الكتب والمستلزمات المدرسية، والزي المدرسي، وأحيانًا حتى مصروف الجيب. نؤمن بأن التعليم هو أقوى سلاح يمكننا تزويد هؤلاء الأطفال به لمواجهة تحديات الحياة وبناء مستقبلهم. مساهمتك، مهما كانت بسيطة، ستساعد في تغيير حياة يتيم، وتمنحه الأمل والفرصة لتحقيق أحلامه. انضم إلينا في هذه المهمة الإنسانية لضمان عدم حرمان أي طفل يتيم من حقه الأساسي في التعليم الجيد، ولنمكنهم من أن يصبحوا أفرادًا فاعلين ومنتجين في مجتمعاتهم، قادرين على الاعتماد على أنفسهم والمساهمة في بناء وطنهم.',
    projectName: ' الكفالة التعليمية للأيتام'
  },
  {
    id: 2,
    title: 'مشروع إفطار صائم',
    description: 'قدم وجبة إفطار لصائم، شارك الأجر وأدخل الفرحة على قلوب المحتاجين.',
    image: 'https://namaa-web.s3.me-south-1.amazonaws.com/Projects/230.jpg',
    collected: '82,646',
    remaining: '33,854',
    caseNumber: 'P67890',
    projectDescription: 'مع حلول شهر رمضان المبارك، شهر الخير والبركات، نسعى من خلال مشروع إفطار صائم إلى توفير وجبات إفطار مغذية ومتكاملة للأسر المحتاجة والصائمين الذين يجدون صعوبة في تأمين قوت يومهم. يهدف هذا المشروع إلى تجسيد قيم التكافل الاجتماعي والتراحم بين أفراد المجتمع، وإدخال الفرحة والسرور على قلوب الصائمين. كل وجبة إفطار تقدمونها تساهم في تخفيف العبء عن كاهل أسرة متعففة، وتضمن لهم إفطارًا كريمًا بعد يوم طويل من الصيام. تبرعاتكم تساعدنا في الوصول إلى أكبر عدد ممكن من المستحقين، وتوفير وجبات صحية ومتوازنة تعينهم على أداء عبادتهم. شاركونا الأجر والثواب في هذا الشهر الفضيل.',
    projectName: 'مشروع إفطار صائم'
  },
  {
    id: 3,
    title: 'بناء مسجد',
    description: 'ساهم في بناء بيت لله، صدقة جارية وأجر عظيم لك بالدنيا والآخرة.',
    image: 'https://numostorageaccountnew.blob.core.windows.net/numonew/website/manarat.sa/image/catalog/product/YtDKhGgzZVX8BmN2GL6CTw5n4plvdL2zY6DwebZ3.jpeg',
    collected: '247,940',
    remaining: '101,060',
    caseNumber: 'P13579',
    projectDescription: 'إن بناء المساجد من أعظم القربات وأجل الطاعات، فهي بيوت الله في الأرض، ومراكز إشعاع ديني وثقافي واجتماعي. يهدف هذا المشروع إلى إنشاء مسجد ليكون منارة للعلم والإيمان، ومكانًا لأداء الصلوات وإقامة الشعائر الدينية، وتعليم القرآن الكريم والسنة النبوية. سيخدم المسجد المجتمع المحلي، ويوفر مكانًا هادئًا للعبادة والتفكر، وملتقى للمسلمين لتعزيز أواصر الأخوة والمحبة. مساهمتك في بناء هذا المسجد هي صدقة جارية، يمتد أجرها وثوابها حتى بعد الممات. كل لبنة توضع، وكل ركعة تقام، ستكون في ميزان حسناتك. شارك في هذا العمل الصالح العظيم.',
    projectName: 'بناء مسجد'
  }
];

const goToTabro3at = () => {
  router.push('/tabr');
};

</script>

<template>
    
        <Slideshow />
        <Tbar3 :cards="items" /> <!-- Add Tbar3 component below Slideshow -->

        <!-- Add View More button -->
        <div class="flex justify-center mt-6 pt-5 pb-5">
          <a href="/tabr">
            <button  class="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-300">
            رؤية المزيد
          </button>
          </a>
        </div>

        <Numbers />
        <Serveses />
        
    
</template>



<style lang="scss" scoped>

</style>
