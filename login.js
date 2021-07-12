function log() {
var form = document.getElementById('user').value;
console.log(form);
fetch('encyclopediasphurthy.github.io/api.json')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        var data = json;
        console.log(data);
        /*var id = "data.token";
        console.log(id);
        if (form = id) {
          var whoo = "Whoo!";
          console.log(whoo);
          window.open("https://forms.gle/ZrBqzBTPcoFxvtsW7");
        }*/
  })
}
