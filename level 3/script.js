// script.js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    let output = '';
  //   data.for(0,5).forEach(post => {   // show first 5 posts
  //     output += `<h3>${post.title}</h3><p>${post.body}</p>`;
  //   });
  //   document.getElementById('data').innerHTML = output;
  // })
  // .catch(error => console.log('Error:', error));
  data.foreach(user => {
    output +=`
    <p>${user.name} - ${user.email}</p>`;
  });
 document.getElementById('data').innerHTML = output;
 });