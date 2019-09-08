window.onload = function() {
 
    const localHost = 'http://127.0.0.1:5500/'
    const cloud = 'https://ernex24.github.io/eram/'
    const wordPress = 'https://ernesto-perez.com/wp-json/wp/v2/posts/1562'

    // fetch( localHost + 'assets/js/api.json')
     fetch(wordPress)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
     JSON.stringify(myJson);
     console.log(myJson.acf)
     var eram = myJson.acf
      document.querySelector('#phone').innerHTML = eram.phone;
      document.querySelector('#address').innerHTML = eram.address;
      document.querySelector('#maintitle').innerHTML = eram.maintitle;

      document.querySelector('#mainVideo').src = eram.main_slider.mainVideo.url;
      document.querySelector('.flexslider-hero-picture1').style.backgroundImage = "url(" + eram.main_slider.picture1.url + ")"; 
      document.querySelector('.flexslider-hero-picture2').style.backgroundImage = "url("+ eram.main_slider.picture2.url +")"; 
      document.querySelector('.flexslider-hero-picture3').style.backgroundImage = "url("+ eram.main_slider.picture3.url +")";

      document.querySelector('.banner-ad1').style.backgroundImage = "url(" + eram.advertising.advertising_image.url + ")"; 
      document.querySelector('#advertising_title').innerHTML = eram.advertising.advertising_title;
      document.querySelector('#advertising_price').innerHTML = eram.advertising.advertising_price;
      document.querySelector('#advertising_description').innerHTML = eram.advertising.advertising_description;

      document.querySelector('#zahra_text').innerHTML = eram.zahra_text;

      document.querySelector('#clinic_description').innerHTML = eram.clinic_description;
      document.querySelector('.gallery-item1').style.backgroundImage = "url(" + eram.gallery_item1.url + ")";
      document.querySelector('.gallery-item2').style.backgroundImage = "url(" + eram.gallery_item2.url + ")";
      document.querySelector('.gallery-item3').style.backgroundImage = "url(" + eram.gallery_item3.url + ")";
      document.querySelector('.gallery-item4').style.backgroundImage = "url(" + eram.gallery_item4.url + ")";
      document.querySelector('.gallery-item5').style.backgroundImage = "url(" + eram.gallery_item5.url + ")";
      document.querySelector('.gallery-item6').style.backgroundImage = "url(" + eram.gallery_item6.url + ")";
      document.querySelector('.gallery-item7').style.backgroundImage = "url(" + eram.gallery_item7.url + ")";
      document.querySelector('.gallery-item8').style.backgroundImage = "url(" + eram.gallery_item8.url + ")";
      
      // document.querySelector('.lightBox-gal1').href =  eram.gallery_item8.url 
      
      document.querySelector('#team_description').innerHTML = eram.team_description;
      
    });


  };



  