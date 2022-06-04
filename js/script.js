var data = JSON.parse(tasks);
var listContainer = document.getElementById("result");


printCards = () => {
    listContainer.innerHTML = "";
    var color = "";
    for (let index in data) {
        if (data[index].importance <= 1) {
            color = "bg-success";
        } else if (data[index].importance <= 3) {
            color = "bg-warning";
        } else {
            color = "bg-danger";
        }
        listContainer.innerHTML += `<div class="card p-0 m-3 shadow-lg p-3 mb-5 bg-body rounded border col-lg-4 col-md-6 col-sm-12" style="width: 25rem;">
    <div class="text-light d-flex justify-content-between align-items-center">
        <div class="h6 bg-info p-1 rounded-3 fw-bold">Task</div>
        <div class="card-icons">
        <img src="img/bookmark.png" alt="" width="18" height="15" class="d-inline-block align-text-top">
         <img src="img/tackice.png" alt="" width="7" height="15" class="d-inline-block align-text-top">
        </div>
    </div>
    <img src="${data[index].image}" class="card-img border1" alt="..." height="250">
    <div class="card-body">
        <h3 class="h4 text-center">${data[index].taskName}</h3>
        <p class="card-text text-center">${data[index].description}</p>
        <hr>
        <div class="task-section d-flex">
            <img src="img/exclamation.png" alt="" width="20" height="20" class="button btn-count d-inline-block align-text-top me-1">
            <p>Priority level</p>
            <p id="count${index}" class="priority ${color} text-white ms-1 ps-2 pe-2 rounded">${data[index].importance}</p>
        </div>
        <div class="task-section d-flex">
            <img src="img/calendar.png" alt="" width="20" height="20" class="d-inline-block align-text-top me-1">
            <p>Deadline: ${data[index].deadline}</p>
        </div>
        <hr>
    </div>
    <div class="card-footer bg-white border-0 d-flex justify-content-end">
        <button class="card-button d-flex text-white bg-danger m-1 p-2 rounded border-0 align-items-center">
            <img src="img/delete.png" alt="" width="20" height="20" class="d-inline-block align-text-top>">
            <div class="text-white">Delete</div>
        </button>
        <button class="card-button d-flex text-white bg-success m-1 p-2 rounded border-0 align-items-center">
            <img src="img/done.png" alt="" width="20" height="20" class="d-inline-block align-text-top>">
            <div class="text-white">Done</div>
        </button>
    </div>
</div>`
    }

    for (let index in data) {
        document.getElementsByClassName("btn-count")[index].addEventListener("click", function() {
            var priorityEl = document.getElementById(`count${index}`);
            // Avoid values higher than 5
            if (priorityEl.innerText < 5) {
                priorityEl.innerText++;

                data[index].importance++;
            }

            if (priorityEl.innerText <= 1) {
                priorityEl.classList.add("bg-success");
            } else if (priorityEl.innerText <= 3) {
                priorityEl.classList.add("bg-warning");
            } else {
                priorityEl.classList.add("bg-danger");
            }
        })
    }
}


printCards();


function sortAlgorithm() {
    data.sort(function(firstNumber, secondNumber) {
        return secondNumber.importance - firstNumber.importance;
    })
}


document.getElementById("sort").addEventListener("click", function() {
    sortAlgorithm();
    printCards();
});