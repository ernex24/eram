window.onload = function() {
 
    const localHost = 'http://127.0.0.1:5500/'
    const cloud = 'https://ernex24.github.io/eram/'
    const wordPress = 'https://ernesto-perez.com/wp-json/wp/v2/posts/1562'

    fetch( localHost + 'assets/js/api.json')
    /* fetch(wordPress) */
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
     JSON.stringify(myJson);
     console.log(myJson.acf)
      document.getElementById('phone').innerHTML = myJson.phone
      document.getElementById('mainTitle').innerHTML = myJson.mainTitle
      document.getElementById('mainVideo').innerHTML = myJson.mainVideo

      document.querySelector('.flexslider-hero-picture1').style.backgroundImage = "url(" + myJson.mainGallery.picture1 + ")"; 

      document.querySelector('.flexslider-hero-picture2').style.backgroundImage = "url("+ myJson.mainGallery.picture2 +")"; 

      document.querySelector('.flexslider-hero-picture3').style.backgroundImage = "url("+ myJson.mainGallery.picture3 +")"; 

      var video = document.querySelector('#mainVideo');
      video.src = myJson.mainGallery.mainVideo;

        console.log(video)
    });


  };



  