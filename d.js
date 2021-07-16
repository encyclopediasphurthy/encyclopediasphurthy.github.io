// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('user='))
  .split('=')[1];
  alert(cookieValue);
