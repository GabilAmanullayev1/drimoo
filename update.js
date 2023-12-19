document.addEventListener('DOMContentLoaded', function () {
    let id = new URLSearchParams(window.location.search).get("id");
    let name = document.querySelector('#name');
    let category = document.querySelector('.category');
    let modalImage = document.querySelector('.modalImage');
    let categoryForm = document.querySelector('.category-form');
    let submit = document.querySelector('.submit');
    let file = document.querySelector('input[type="file"]');

    // Fetch data for the specified ID
    fetch(`http://localhost:3000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            modalImage.src = data.icon;
            name.value = data.title;
            category.value = data.description;
        });

    // Handle file input change
    file.addEventListener('change', (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = function () {
                modalImage.src = reader.result;
            }
        }
    });

    // Handle form submission
    categoryForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            // Send PUT request with updated data
            await axios.put(`http://localhost:3000/services/${id}`, {
                icon: modalImage.src,
                title: name.value,
                description: category.value
            });

            window.location.href = "http://127.0.0.1:5502/index.html";
        } catch (error) {s
            console.error("Update error:", error);
      
        }
    });
});
