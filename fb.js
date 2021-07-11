function load()
{
  var feedback = document.getElementById('feedback').value;
  console.log(feedback);
  window.open('mailto:encyclopediasphurthy@gmail.com?bcc=jakkipally@gmail.com&subject=Feedback to Sphurthy Encyclopedia&body=' + feedback,'_blank');
}
