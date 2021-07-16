// When registered:
function register() {
//get ip adress
fetch('https://geo.ipify.org/api/v1?apiKey=at_xd27gGnRwYIBnLFpDy9olXzKi0FVl')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        var data = json;
        var ip = data.ip;
        //store ip adress to cookie
        var ip_cookies = "ip=" + ip + "; path=/developers.html"
        document.cookie = ip_cookies;
        //get user
        var user = document.getElementById("user").value;
        //store user in cookie
        var user_cookies = "user=" + user + "; path=/developers.html"
        document.cookie = user_cookies;
        //open the developer page
        window.location.replace('https://encyclopediasphurthy.github.io/developers.html');
  })

}
