document.addEventListener('DOMContentLoaded', function () {
    let addForm = document.querySelector('.category-form');

    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        let image = document.getElementById('image').files[0];
        let name = document.getElementById('name').value;
        let category = document.getElementById('category').value;

        // Create a FormData object to handle file upload
        let formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('category', category);

        // Send a POST request to add a new item
        axios.post('http://localhost:3000/services', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            // Handle successful addition, e.g., redirect or display a success message
            console.log('Item added successfully:', response.data);
        })
        .catch(error => {
            // Handle errors, e.g., display an error message
            console.error('Error adding item:', error);
        });
    });
});
