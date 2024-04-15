fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const userDataContainer = document.getElementById('userData');
    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <hr>
      `;
      userDataContainer.appendChild(userDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));