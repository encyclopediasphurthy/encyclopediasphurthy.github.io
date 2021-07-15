fetch('https://geo.ipify.org/api/v1?apiKey=at_xd27gGnRwYIBnLFpDy9olXzKi0FVl')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        console.log(json);
        var data = json;
        var ip = data.query;
        console.log(ip);
        document.cookie = "content="ip"; path=/cookies.html";
        document.cookie = "test=hello; path=/cookies.html";
  })
