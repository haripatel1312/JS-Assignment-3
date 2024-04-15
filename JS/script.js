fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const userDataContainer = document.getElementById('userData');
    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
      <h2>${user.name}</h2>
      <p><i class="fas fa-user"></i> <strong>Username:</strong> ${user.username}</p>
      <p><i class="fas fa-envelope"></i> <strong>Email:</strong> ${user.email}</p>
      <p><i class="fas fa-map-marker-alt"></i> <strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      <p><i class="fas fa-phone"></i> <strong>Phone:</strong> ${user.phone}</p>
      <p><i class="fas fa-globe"></i> <strong>Website:</strong> ${user.website}</p>
      <p><i class="fas fa-building"></i> <strong>Company:</strong> ${user.company.name}</p>
      <hr>
      `;
      userDataContainer.appendChild(userDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));