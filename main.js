let todoApp = null;
$(document).ready(startApp);

function startApp(){
  todoApp = new TodoController('#todoApp');
  const appDom = todoApp.render();
}