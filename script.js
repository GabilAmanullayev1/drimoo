// axios.get('http://localhost:3000/services')
//   .then(response => {
//     // Yanıtı işle
//     const data = response.data;
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('GET request error:', error);
//   });
document.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:3000/services')
    .then(response => {
      const data = response.data;

      const servicesContainer = document.querySelector('.service');
  
      data.forEach(service => {
        const serviceBox = document.createElement('div');
        serviceBox.className = 'service-box';
  
        const img = document.createElement('img');
        img.src = service.icon;
        img.alt = service.title;
  
        const h2 = document.createElement('h2');
        h2.textContent = service.title;
  
        const p = document.createElement('p');
        p.textContent = service.description;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            servicesContainer.removeChild(serviceBox);
        });
        
        serviceBox.appendChild(img);
        serviceBox.appendChild(h2);
        serviceBox.appendChild(p);
        serviceBox.appendChild(deleteBtn)
  
        servicesContainer.appendChild(serviceBox);
      });
    })
    .catch(error => console.error('Error fetching or processing data:', error));
    
})