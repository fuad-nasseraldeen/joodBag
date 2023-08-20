let joodDetails = {
  name: 'حقيبة جود',
  description: 'حقيبة كاملة وشاملة لتحضير للصف الاول',
  bagInfoName: 'محتويات الحقيبة',
  bagInfoDetails: [
    {
      name: 'كراسات تعليمية',
      professionalName: 'book',
      nameOfTheBooks: [
        'كراسة المفاهيم الاساسية ',
        'كراسة الحروف',
        'كراسة  الارقام',
      ],
      description: [
        ['./logo4.jpg', './logo3.jpg'],
        ['./logo5.jpg'],
        ['./logo6.jpg'],
      ],
      url: ['./book/book1.jpg', './book/book3.jpg', './book/book2.jpg'],
      width: '180',
      height: '240',
      mobileDemention: 1,
    },
    {
      name: 'لوازم مدرسية',
      professionalName: 'supplies',
      url: ['./school-supplies.png'],
      width: '380',
      height: '240',
      mobileDemention: 0.7,
    },
    {
      name: 'مسطرة حروف ومسطرة ارقام ',
      professionalName: 'rollers',
      description: ['لتساعد الطفل في الحل كأدوات مساعدة'],
      url: ['./rollers.png'],
      width: '148',
      height: '230',
      mobileDemention: 1,
    },
    {
      name: 'بطاقات',
      description: ['بطاقات لتدريب على مهارات القص بدرجات صعوبة مختلفة'],
      url: ['./cards.png'],
      width: '370',
      height: '250',
      mobileDemention: 0.7,
    },
  ],
  age: 'ملائمة من جيل 4.5 +',
  pictures: [
    'logo1.jpg',
    'logo2.jpg',
    'logo3.jpg',
    'logo4.jpg',
    'logo5.jpg',
    'logo6.jpg',
    'logo7.jpg',
  ],
  whatsapp: {
    name: 'whatsapp',
    url: 'https://wa.link/hesenjaber',
    className: 'fa-brands fa-whatsapp',
    img: './whatsapp.svg',
  },
  socialLinks: [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/hesenjaber.ot/',
      className: 'fa fa-instagram',
      img: 'https://img.icons8.com/fluency/48/instagram-new.png',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=61550307714098',
      className: 'fa fa-facebook',
      img: 'https://img.icons8.com/doodle/28/facebook-new.png',
    },
  ],
  tooltip: 'اضغط لعرض التفاصيل',
}

export default joodDetails
