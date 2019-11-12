class TodoController {
  constructor( appDomElement ){
    this.processTodoList = this.processTodoList.bind(this);
    this.domElements = {
      container: $(appDomElement),
      title: null,
      footer: null
    }
    this.items = [];
    this.view = 'list';
    this.loadTodoList();
  }
  loadTodoList(){
    let ajaxOptions = {
      'url': './api/gettodoitems.php',
      'dataType': 'json',
      'method': 'get',
      'success': this.processTodoList
    }
    $.ajax( ajaxOptions );
  }
  processTodoList(data){
    for( let todoIndex = 0; todoIndex < data.length; todoIndex++){
      let newItem = new TodoItem( data[todoIndex] );
      this.items.push( newItem );
      let todoItemDom = newItem.renderList();
      this.domElements.centerContainer.append(todoItemDom);
    }
  }
  view_list(){
    return("list");
  }
  renderCurrentView(){
    let currentViewMethod = 'view_' + this.view;
    this.domElements.centerContainer.append( this[currentViewMethod] );
  }
  render(){
    this.domElements.title = $("<h1>", {
      text: 'TODO APP',
      class: 'main-title'
    })
    this.domElements.centerContainer = $("<div>", {
      class: 'centerContents'
    });
    this.renderCurrentView();
    this.domElements.footer = $("<footer>", {
      class: 'footer',
      text: 'footer'
    })
    this.domElements.container.append(
      this.domElements.title,
      this.domElements.centerContainer,
      this.domElements.footer
    )
    return this.domElements.container;
  }
}

