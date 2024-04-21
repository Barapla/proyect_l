
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
  // Function to toggle the modal's visibility
  function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
    modal.classList.toggle('bg-gray-700');
  }

  // Attach event listener to the 'open' button
  const openButton = document.getElementById('openModalButton');
  openButton.addEventListener('click', () => toggleModal('authentication-modal'));

  // Attach event listener to the 'close' button
  const closeButton = document.getElementById('closeModalButton');
  closeButton.addEventListener('click', () => toggleModal('authentication-modal'));

  // Optional: Close the modal by clicking on the backdrop
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('authentication-modal');
    if (event.target === modal) {
      toggleModal('authentication-modal');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numberForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submit
  
      // Collect the form data
      const formData = new FormData(form);
  
      // Use `fetch` to send the form data to the Flask endpoint
      fetch('/convert-number', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        document.getElementById('text').classList.remove('hidden');
        document.getElementById('numberAsNumber').innerHTML = data.number;
        document.getElementById('numberAsText').innerHTML = data.number_as_text;
        // You can also update the page with the response here if needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });