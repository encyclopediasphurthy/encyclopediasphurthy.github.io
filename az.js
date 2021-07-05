fetch('az.json')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        console.log(json);
        var data = json;
        var place = document.querySelectorAll(".container");
        console.log(place);
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        place[0].innerHTML = data.A;
        place[1].innerHTML(data.B);
        place[2].innerHTML(data.C);
        place[3].innerHTML(data.D);
        place[4].innerHTML(data.E);
        place[5].innerHTML(data.F);
        place[6].innerHTML(data.G);
        place[7].innerHTML(data.H);
        place[8].innerHTML(data.I);
        place[9].innerHTML(data.J);
        place[10].innerHTML(data.K);
        place[11].innerHTML(data.L);
        place[12].innerHTML(data.M);
        place[13].innerHTML(data.N);
        place[14].innerHTML(data.O);
        place[15].innerHTML(data.P);
        place[16].innerHTML(data.Q);
        place[17].innerHTML(data.R);
        place[18].innerHTML(data.S);
        place[19].innerHTML(data.T);
        place[20].innerHTML(data.U);
        place[21].innerHTML(data.V);
        place[22].innerHTML(data.W);
        place[23].innerHTML(data.X);
        place[24].innerHTML(data.Y);
        place[25].innerHTML(data.Z);
        
        
  })
