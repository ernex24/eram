fetch('https://ernex24.github.io/eram/assets/js/api.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    document.getElementById('phone').innerHTML = myJson.phone
    document.getElementById('mainTitle').innerHTML = myJson.mainTitle
  });

  