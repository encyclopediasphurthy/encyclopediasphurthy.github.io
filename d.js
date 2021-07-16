alert(document.cookie);

if (document.cookie != "") {
   const cookieValue = document.cookie
   .split('; ')
   .find(row => row.startsWith('user='))
   .split('=')[1];
   alert("Your logged in as: " + cookieValue);
} else {
    alert("Hmm... It looks like your not logged in. Log in at the main website.");
    window.close();
}
