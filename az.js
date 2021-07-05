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
        place[0].innerHTML = "A. " + data.A;
        place[1].innerHTML = "B. " + data.B;
        place[2].innerHTML = "C. " + data.C;
        place[3].innerHTML = "D. " + data.D;
        place[4].innerHTML = "E. " + data.E;
        place[5].innerHTML = "F. " + data.F;
        place[6].innerHTML = "G. " + data.G;
        place[7].innerHTML = "H. " + data.H;
        place[8].innerHTML = "I. " + data.I;
        place[9].innerHTML = "J. " + data.J;
        place[10].innerHTML = "K. " + data.K;
        place[11].innerHTML = "L. " + data.L;
        place[12].innerHTML = "M. " + data.M;
        place[13].innerHTML = "N. " + data.N;
        place[14].innerHTML = "O. " + data.O;
        place[15].innerHTML = "P. " + data.P;
        place[16].innerHTML = "Q. " + data.Q;
        place[17].innerHTML = "R. " + data.R;
        place[18].innerHTML = "S. " + data.S;
        place[19].innerHTML = "T. " + data.T;
        place[20].innerHTML = "U. " + data.U;
        place[21].innerHTML = "V. " + data.V;
        place[22].innerHTML = "W. " + data.W;
        place[23].innerHTML = "X. " + data.X;
        place[24].innerHTML = "Y. " + data.Y;
        place[25].innerHTML = "Z. " + data.Z;
  })
