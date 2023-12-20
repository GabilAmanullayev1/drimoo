document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('addForm');
    const imageInput = document.getElementById('imageInput');
    const nameInput = document.getElementById('name');
    const categoryInput = document.getElementById('category');
    const submitBtn = document.getElementById('submit');
    const modalImage = document.querySelector('.modalImage');

    submitBtn.addEventListener('click', () => {
        const file = imageInput.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageSrc = e.target.result; // Get the base64 data URI
                modalImage.src = imageSrc; // Set the source of the img tag

                const name = nameInput.value;
                const category = categoryInput.value;

                const newElement = {
                    icon: imageSrc,
                    title: name,
                    description: category,
                };

                fetch('http://localhost:3000/services', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newElement),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Element added:', data);
                    window.location.href = 'index.html';
                })
                .catch(error => {
                    console.error('Error adding element:', error);
                });
            };

            reader.readAsDataURL(file); // Read the contents of the file as a data URL
        } else {
            // Handle the case when no file is selected
            console.error('No file selected.');
        }
    });
});
