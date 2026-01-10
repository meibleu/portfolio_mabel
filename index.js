// Get all buttons that open modals
var openBtns = document.getElementsByClassName("open-modal-btn");

// Get all the close buttons
var closeBtns = document.getElementsByClassName("close-btn");

// Loop through the open buttons and add a click event listener
for (var i = 0; i < openBtns.length; i++) {
  openBtns[i].onclick = function() {
    // Get the ID of the target modal from the data attribute
    var targetModalId = this.getAttribute("data-target");
    var targetModal = document.getElementById(targetModalId);
    
    // Show the target modal
    targetModal.style.display = "block";
  }
}

// Loop through the close buttons and add a click event listener
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    // Get the parent element (the modal itself) and hide it
    var modal = this.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  }
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}

// Get all tab buttons
var tabButtons = document.getElementsByClassName("tab-btn");

// Get all tab content divs
var tabContents = document.getElementsByClassName("tab-content");

// Loop through each button and add a click listener
for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function() {
    // First, remove the 'active' class from all buttons and content
    for (var j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("active");
    }
    for (var j = 0; j < tabContents.length; j++) {
      tabContents[j].classList.remove("active");
    }

    // Then, add the 'active' class to the clicked button
    this.classList.add("active");

    // Get the ID of the target content from the data attribute
    var tabId = this.getAttribute("data-tab-id");
    // Show the corresponding tab content
    document.getElementById(tabId).classList.add("active");
  });
}

// Get the modal and its header
var modal = document.getElementById("works");
var modalHeader = document.querySelector(".modal-header");

// Variables to track mouse position and modal offset
var isDragging = false;
var offsetX = 0;
var offsetY = 0;

// On mouse down, start dragging
modalHeader.addEventListener("mousedown", function(e) {
  isDragging = true;
  // Calculate the offset of the mouse from the modal's top-left corner
  offsetX = e.clientX - modal.offsetLeft;
  offsetY = e.clientY - modal.offsetTop;
});

// On mouse move, update the modal's position if dragging
document.addEventListener("mousemove", function(e) {
  if (isDragging) {
    // Prevent default selection behavior
    e.preventDefault();
    // Calculate new position and apply it to the modal
    modal.style.left = (e.clientX - offsetX) + "px";
    modal.style.top = (e.clientY - offsetY) + "px";
  }
});

// On mouse up, stop dragging
document.addEventListener("mouseup", function() {
  isDragging = false;
});
