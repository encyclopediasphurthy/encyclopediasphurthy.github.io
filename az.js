fetch('az.json')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        console.log(json);
        var data = json;
        var place_1 = document.querySelectorAll(".container");
        var place = place_1[0];
        console.log(place);
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (var i = 0; i < letters.length; i++) {
          console.log(letters[0]);
          console.log(data.letters[0])
          var append = data.letters[0];
          place.appendChild(append);
        }
        
  })
