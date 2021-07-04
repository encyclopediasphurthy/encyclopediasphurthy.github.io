fetch('az.json')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        console.log(json);
        var data = json;
        /*var place_1 = document.querySelectorAll(".place");
        var place = place_1[0];
        console.log(place);
        var fact = data.fact;
        console.log(fact);
        place.innerHTML = fact;
        var place_2 = document.getElementById("txt");
        place_2.innerHTML = data.source;*/
  })
