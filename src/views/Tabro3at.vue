<template>
  <div class="pt-20">
    <Tbar3 :cards="items" />
  </div>
 
</template>

<script>
import Tbar3 from '../Components/Shared/Tbar3.vue';

export default {
  components: {
    Tbar3
  },
  data() {
    return {
      items: [
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
   
        },
        {
          id: 4,
          title: ' سلات غدائية ',
          description: 'تبرع بسلة غذائية، أطعم أسرة محتاجة وساهم في تخفيف معاناتهم اليومية.',
          image: 'https://ehsanimagesp.s3.me-south-1.amazonaws.com/P45.jpg',
          collected: 1000,
          remaining: 500,
          caseNumber: 'P24680',
          projectDescription: 'يهدف مشروع السلات الغذائية إلى توفير المواد الغذائية الأساسية للأسر المتعففة وذوي الدخل المحدود، خاصة في ظل الظروف الاقتصادية الصعبة. تحتوي كل سلة غذائية على مجموعة متنوعة من المواد التموينية الضرورية مثل الأرز، السكر، الزيت، الدقيق، المعلبات، وغيرها، مما يساهم في تأمين احتياجات الأسرة لعدة أسابيع. هذا المشروع لا يقتصر على توفير الطعام فحسب، بل يهدف أيضًا إلى حفظ كرامة هذه الأسر وتخفيف معاناتهم. تبرعك بسلة غذائية يعني أنك تساهم بشكل مباشر في إطعام أسرة، وتدخل السعادة على قلوب أفرادها، وتساعدهم على تجاوز الصعاب. كن عونًا لهم، وساهم معنا في محاربة الجوع.',
          projectName: ' سلات غدائية '
        },
        {
          id: 5,
          title: 'سقي ماء ',
          description: 'اسقِ الماء، أروِ ظمأ العطشى وشارك في توفير حياة كريمة للمحتاجين.',
          image: 'https://ehsanimagesp.s3.me-south-1.amazonaws.com/P46.jpg',
          collected: 1000,
          remaining: 500,
          caseNumber: 'P36901',
          projectDescription: 'الماء هو سر الحياة، وتوفيره للمحتاجين من أعظم الصدقات وأكثرها أجرًا. يهدف مشروع سقي الماء إلى حفر الآبار وتوفير مصادر مياه نظيفة وصالحة للشرب للمجتمعات التي تعاني من شح المياه أو تلوثها. هذا المشروع يساهم في تحسين صحة الأفراد، وتقليل انتشار الأمراض المنقولة عبر المياه الملوثة، وتخفيف العبء عن النساء والأطفال الذين يضطرون لقطع مسافات طويلة لجلب الماء. كل قطرة ماء توفرها هي بمثابة إحياء لنفس، وصدقة جارية لا ينقطع أجرها. ساهم معنا في توفير هذا الحق الأساسي للحياة، واجعل عطاءك يروي ظمأ المحتاجين ويغير حياتهم للأفضل.',
          projectName: 'سقي ماء '
        },
        {
          id: 6,
          title: 'توفير أضاحي',
          description: 'شارك في توفير أضحية العيد، أدخل الفرحة على قلوب الأسر المحتاجة.',
          image: 'https://i1.hespress.com/wp-content/uploads/2023/06/moutons-1.jpg',
          collected: 1000,
          remaining: 500,
          caseNumber: 'P48123',
          projectDescription: 'مع اقتراب عيد الأضحى المبارك، نسعى من خلال مشروع توفير الأضاحي إلى إحياء سنة نبينا إبراهيم عليه السلام، وإدخال الفرحة على قلوب الأسر الفقيرة والمحتاجة من خلال توزيع لحوم الأضاحي عليهم. يهدف هذا المشروع إلى تمكين المسلمين من أداء هذه الشعيرة العظيمة، وتوسيع دائرة الخير لتشمل أولئك الذين لا يستطيعون شراء الأضحية. تبرعك بأضحية أو بقيمتها يضمن وصول اللحوم الطازجة إلى مستحقيها في أيام العيد، مما يعزز قيم التكافل والتراحم في المجتمع. شاركنا فرحة العيد، وساهم في إطعام الفقراء والمساكين، ولك الأجر والثواب العظيم من الله تعالى.',
          projectName: 'توفير أضاحي'
        },
        {
          id: 7,
          title: ' الزكاة',
          description: 'أدِ زكاتك، طهر مالك وساهم في دعم الفئات المستحقة ومساعدة المحتاجين.',
          image: 'https://lywitness.com/wp-content/uploads/2023/04/Logopit_1681345473336.jpg',
          collected: 1000,
          remaining: 500,
          caseNumber: 'P59147',
          projectDescription: 'الزكاة ركن من أركان الإسلام، وهي حق معلوم للفقراء والمساكين، وطهارة للمال والنفس. يهدف هذا المشروع إلى جمع أموال الزكاة من المزكين وتوزيعها على مصارفها الشرعية الثمانية المذكورة في القرآن الكريم، بدقة وأمانة وشفافية. من خلال دفع زكاتك عبر هذا المشروع، تضمن وصولها إلى مستحفيها الحقيقيين، وتساهم في تحقيق التكافل الاجتماعي، ومحاربة الفقر، وتلبية احتياجات الفئات الضعيفة في المجتمع. أداء الزكاة ليس فقط واجبًا دينيًا، بل هو أيضًا استثمار في الخير والبركة، ووسيلة لتنمية المجتمع وتحقيق العدالة الاجتماعية. طهر مالك، وبارك في رزقك، وساهم في بناء مجتمع متراحم.',
          projectName: ' الزكاة'
        }
      ]
    }
  }
}
</script>
