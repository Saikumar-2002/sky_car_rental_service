const cars = [
    { id: 1, name: "Toyota Camry", image: "https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_1280.jpg", price: 50 },
    { id: 2, name: "Honda Accord", image: "https://cdn.pixabay.com/photo/2020/03/25/15/15/honda-4967605_1280.jpg", price: 45 },
    { id: 2, name: "New Thar", image: "https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_1280.jpg", price: 78 },
    {id:2,name:"Audi",image:"https://cdn.pixabay.com/photo/2021/11/01/21/20/car-6761801_1280.jpg",price:69},
    {id:2,name:"BMW",image:"https://cdn.pixabay.com/photo/2016/11/18/12/51/automobile-1834274_1280.jpg",price:62},
    {id:2,name:"Mahindra jeep",image:"https://cdn.pixabay.com/photo/2023/04/22/18/30/car-7944215_1280.jpg",price:40},
    {id:2,name:"Honda civic",image:"https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",price:53},
    {id:2,name:"Range Rover",image:"https://cdn.pixabay.com/photo/2020/06/04/22/43/range-rover-5260745_1280.jpg",price:83},
    // Add more cars as needed
];

function displayCars() {
    const carListElement = document.getElementById("carList");

    cars.forEach((car) => {
        const carElement = document.createElement("div");
        carElement.classList.add("car");

        carElement.innerHTML = `
              <img src="${car.image}" alt="${car.name}">
              <h3>${car.name}</h3>
              <p>Price: $${car.price}/day</p>
              <button onclick="rentCar(${car.id})">Rent Now</button>
          `;

        carListElement.appendChild(carElement);
    });

    // Populate car options in the booking form
    const carSelect = document.getElementById("carSelect");
    cars.forEach((car) => {
        const option = document.createElement("option");
        option.value = car.id;
        option.textContent = car.name;
        carSelect.appendChild(option);
    });
}

function rentCar(carId) {
    // Implement your booking logic here
    const selectedCar = cars.find((car) => car.id === carId);
    alert(`Car "${selectedCar.name}" rented successfully!`);
}

function submitBooking() {
    // Implement your booking form submission logic here
    const carId = document.getElementById("carSelect").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;

    // You can send this data to a server for further processing
    // For simplicity, we'll just display an alert with the selected data
    alert(
        `Booking confirmed!\nCar ID: ${carId}\nPickup Date: ${pickupDate}\nReturn Date: ${returnDate}`
    );
}

window.onload = displayCars;
