let joodDetails = {
  name: 'حقيبة جود',
  description: 'حقيبة كاملة وشاملة لتحضير الصف الاول',
  bagInfoName: 'محتويات الحقيبة',
  bagInfoDetails: [
    {
      name: 'كراسات تعليمية',
      // description: [
      //   'كراسة المفاهيم الاساسية ',
      //   'كراسة  الارقام',
      //   'كراسة الحروف',
      // ],
      url: ['./book/book1.jpg', './book/book2.jpg', './book/book3.jpg'],
      width: '180px',
      height: '240px',
    },
    {
      name: 'لوازم مدرسية',
      url: ['./school-supplies.png'],
      width: '150px',
      height: '240px',
    },
    {
      name: 'مسطرة حروف ومسطرة ارقام ',
      description: ['لتساعد الطفل في الحل كأدوات مساعدة'],
      url: ['./rollers.png'],
      width: '148px',
      height: '230px',
    },
    {
      name: 'بطاقات',
      description: ['بطاقات لتدريب على مهارات القص بدرجات صعوبة مختلفة'],
      url: ['./cards.png'],
      width: '370px',
      height: '250px',
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

  socialLinks: [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/topclinicjaber/',
      className: 'fa fa-instagram',
      img: 'https://img.icons8.com/doodle/48/instagram-new.png',
    },
    {
      name: 'whatsapp',
      url: 'https://wa.link/hesenjaber',
      className: 'fa-brands fa-whatsapp',
      img: 'images/whatsapp.svg',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/fuad.naseraldeen/',
      className: 'fa fa-facebook',
      img: 'https://img.icons8.com/doodle/48/facebook-new.png',
    },
  ],
}

export default joodDetails
