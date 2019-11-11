const todoApp = new TodoController();

$(document).ready(startApp);

function startApp(){
  todoApp = new TodoController('#todoApp');
}