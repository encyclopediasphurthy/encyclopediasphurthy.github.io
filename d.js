/* const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('user='))
  .split('=')[1];
*/

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let user = getCookie("user");
  if (user != "") {
    alert("Your logged in as: " + user);
  } else {
    alert("Please log in to the ESDN (Enyclopedia Sphurthy Developer Network)");
    window.close();
