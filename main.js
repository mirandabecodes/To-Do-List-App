const taskInput = document.getElementById("task-input");


//Where: the button
//When: On Click
document.getElementById("submit").onclick = function() {
    document.getElementById("tasks").innerHTML += 
      `<span> <input type="checkbox" class="completed" id='checkOff'>
      <li class="tasks">
        ${document.querySelector("#new-task input").value}
      </li></span>
      <br>`
      // let span = document.createElement("span");
      // span.innerHTML = "\u00d7";
      // li.appendChild(span);
      taskInput.value = "";
      
  
    //Adding functionality to the delete button
    //WHERE: Find the element with the class 'delete'
    let current_tasks = document.querySelectorAll(".completed");
      for(let i = 0; i < current_tasks.length; i++){
        current_tasks[i].onclick = function() {
          this.parentElement.style.color = 'lightgrey'
          // this.parentElement.style.textDecoration = 'line-through'; 
          // this.parentNode.document.getElementById("tasks").style.color = 'lightgrey'; 
        }
      }
    }

    //WHERE: Set up an event listener 
  
    //WHAT: Delete it 
  
  // <button class="completed">Mark Complete</button
  
  
  
  // taras code
  // //Adding functionality to the delete button
  // //WHERE: Find the element with the class 'delete'
  // var current_tasks = document.querySelectorAll(".delete");
  //   for(var i=0; i<current_tasks.length ;i++){
  //     current_tasks[i].onclick = function() {
  //       this.parentNode.remove(); 
  //     }
  //   }
  // }
  // //WHERE: Set up an event listener 
  
  // //WHAT: Delete it 




  // form to reset after submit //
  // const inputToReset = document.getElementById('#tasktask');
  //     inputToReset.addEventListener('submit', (e) => {
  //       e.preventDefault();
  //       inputToReset.reset();