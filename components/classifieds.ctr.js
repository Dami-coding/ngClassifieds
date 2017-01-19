(function(){

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope){

      $scope.classifieds = [

    {

      "id":"1",
      "title"  :"15' Macbook Air",
      "price"  :1700,
      "posted" :"2017-01-13",
      "contact": {
        "name": "John Doe",
        "phone":"(44) 79546 95355",
        "email":"johndoe@aol.com"
        },
      "categories":[
      "Vehicles",
      "Parts and Accessories"
      ],
      "image": "http://www.cch.org.au/wp-content/uploads/2011/11/AppleMac.jpg",
      "views": 202
    },

    {

      "id":"2",
      "title"  :"iMac",
      "price"  :2200,
      "posted" :"2017-01-13",
      "contact": {
        "name": "John Doe",
        "phone":"(44) 79546 95355",
        "email":"johndoe@aol.com"
        },
      "categories":[
      "Vehicles",
      "Parts and Accessories"
      ],
      "image": "http://www.secondbyte.co.uk/ekmps/shops/xelec/resources/Design/mini-27.jpg",
      "views": 158
    },

    {

      "id":"3",
      "title"  :"Mac Pro",
      "price"  :2550,
      "posted" :"2017-01-13",
      "contact": {
        "name": "John Doe",
        "phone":"(44) 79546 95355",
        "email":"johndoe@aol.com"
        },
      "categories":[
      "Vehicles",
      "Parts and Accessories"
      ],
      "image": "https://static.videomaker.com/cdn/farfuture/2NusXOc2lATzcuZkmhsLWMP3LDlTbcC1ROZ1b-KmYFQ/mtime:1474438937/sites/videomaker.com/files/styles/vm_image_token_lightbox/public/articles/17344/322-C5-Mac-Pro-PRIMARY.png?itok=YVKndobe",
      "views": 3602
    },

    {

      "id":"4",
      "title"  :" 13' Macbook air",
      "price"  :6000,
      "posted" :"2017-01-13",
      "contact": {
        "name": "John Doe",
        "phone":"(44) 79546 95355",
        "email":"johndoe@aol.com"
        },
      "categories":[
      "Vehicles",
      "Parts and Accessories"
      ],
      "image": "http://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/air/macbook-air-gallery2-2014?wid=1292&hei=766&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1476297407703",
      "views": 2145
    },

    {

      "id":"5",
      "title"  :" 15' Macbook Pro",
      "price"  :6000,
      "posted" :"2017-01-13",
      "contact": {
        "name": "John Doe",
        "phone":"(44) 79546 95355",
        "email":"johndoe@aol.com"
        },
      "categories":[
      "Vehicles",
      "Parts and Accessories"
      ],
      "image": "http://i.dailymail.co.uk/i/pix/2012/07/25/article-2178775-1436015F000005DC-564_468x286.jpg",
      "views": 1420
    },
    
    {

      "id":"6",
      "title"  :" Apple Watch",
      "price"  :600,
      "posted" :"2017-01-13",
      "contact": {
        "name": "John Doe",
        "phone":"(44) 79546 95355",
        "email":"johndoe@aol.com"
        },
      "categories":[
      "Vehicles",
      "Parts and Accessories"
      ],
      "image": "https://www.imore.com/sites/imore.com/files/styles/large/public/topic_images/2015/topic-apple-watch-all.png?itok=OUtlCphV",
      "views": 202
    }

      ]
    });

})();