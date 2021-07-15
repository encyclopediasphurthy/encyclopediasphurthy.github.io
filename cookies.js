fetch('http://ip-api.com/json/')
  .then(response => {
    return response.json();
  })
  .then(json=>{
        console.log(json);
        var data = json;
        var ip = data.query;
        console.log(ip);
  })

document.cookie = "content=Hey; path=/cookies.html";
