document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stop default form submission
  
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let errorMsg = document.getElementById('errorMsg');
  
  if(name.length < 3) {
    errorMsg.textContent = "Name must be at least 3 characters.";
    return;
  }
  if(!email.includes('@')) {
    errorMsg.textContent = "Enter a valid email address.";
    return;
  }
  
  errorMsg.textContent = "";
  alert("Form submitted successfully!");
});
