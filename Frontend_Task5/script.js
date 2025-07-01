function loadData() {
  // Use Fetch API to get data from JSONPlaceholder
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(function(data) {
      // Display data in the output div
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <h2 style="color: darkblue;">${data.title}</h2>
        <p style="font-size: 16px;">${data.body}</p>
      `;
      outputDiv.style.display = "block";
    })
    .catch(function(error) {
      console.error("Fetch error:", error);
      alert("Failed to load API data. Please try again later.");
    });
}
