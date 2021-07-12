function log() {
var form = document.getElementById('user').value;
console.log(username);
fetch('encyclopediasphurthy.github.io/api.json')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        var data = json;
        var id = "data.token";
        if (form = id) {
          window.open("https://forms.gle/ZrBqzBTPcoFxvtsW7");
        }
  })
}
