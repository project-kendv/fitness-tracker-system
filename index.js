document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    addWorkoutToTable(name, exercise, duration, calories);


    this.reset();
});

let totalCalories = 0;

function addWorkoutToTable(name, exercise, duration, calories) {
    const table = document.getElementById('workoutTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${exercise}</td>
        <td>${duration}</td>
        <td>${calories}</td>
        <td><button onclick="deleteWorkout(this, ${calories})">Delete</button></td>
    `;

   
    totalCalories += parseInt(calories);
    document.getElementById('totalCalories').innerText = totalCalories;
}

function deleteWorkout(button, calories) {
         
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);

            totalCalories -= parseInt(calories);
            document.getElementById('totalCalories').innerText = totalCalories;
        }
       
       