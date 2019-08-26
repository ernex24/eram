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
      document.querySelector('#mainVideo').innerHTML = eram.mainVideo;
      document.querySelector('#mainVideo').src = eram.mainVideo.url;
      document.querySelector('.flexslider-hero-picture1').style.backgroundImage = "url(" + eram.picture1.url + ")"; 
      document.querySelector('.flexslider-hero-picture2').style.backgroundImage = "url("+ eram.picture2.url +")"; 
      document.querySelector('.flexslider-hero-picture3').style.backgroundImage = "url("+ eram.picture3.url +")";
      document.querySelector('#advertising_title').innerHTML = eram.advertising_title;
      document.querySelector('#advertising_price').innerHTML = eram.advertising_price;
      document.querySelector('#advertising_description').innerHTML = eram.advertising_description;
      document.querySelector('#zahra_text').innerHTML = eram.zahra_text;
      
    });


  };



  