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
        place.appendChild(data.A);
        place.appendChild(data.B);
        place.appendChild(data.C);
        place.appendChild(data.D);
        place.appendChild(data.E);
        place.appendChild(data.F);
        place.appendChild(data.G);
        place.appendChild(data.H);
        place.appendChild(data.I);
        place.appendChild(data.J);
        place.appendChild(data.K);
        place.appendChild(data.L);
        place.appendChild(data.M);
        place.appendChild(data.N);
        place.appendChild(data.O);
        place.appendChild(data.P);
        place.appendChild(data.Q);
        place.appendChild(data.R);
        place.appendChild(data.S);
        place.appendChild(data.T);
        place.appendChild(data.U);
        place.appendChild(data.V);
        place.appendChild(data.W);
        place.appendChild(data.X);
        place.appendChild(data.Y);
        place.appendChild(data.Z);
        
        
  })
