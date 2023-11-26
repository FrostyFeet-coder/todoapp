let todolist =[  {
    item: 'Buy Milk',
    duedate: '4/10/2023'
  },
  {
    item: 'Go to College',
    duedate: '4/10/2023'
  }
];
displayitem();


function addTodo(){
    let inputelement = document.querySelector("#todo-input");
    let dateelement =document.querySelector("#todo-date");
    let todoelement = inputelement.value;
    let tododate = dateelement.value;
    todolist.push({item:todoelement , duedate:tododate});
    inputelement.value=''
    dateelement.value = '';     
    displayitem();
    console.log("hello world")
}

// function displayitem(){
//    let containerElement =document.querySelector(".todo-container");
//    let newHtml = '';
//    for (let i =0 ;i<todolist.length ; i++){
//        let {item, duedate} = todolist[i];
//        newHtml +=`
//          <span>${item}</span>
//          <span>${duedate}</span>
//          <button onclick="todolist.splice(${i},1) ;
//        displayitem();">Delete</buton>
//        `;
//        
//    }
//    containerElement.innerHTML = newHtml;
// }

// let todoList = [
//     {
//       item: 'Buy Milk',
//       dueDate: '4/10/2023'
//     },
//     {
//       item: 'Go to College',
//       dueDate: '4/10/2023'
//     }
//   ];
  
//   displayItems();
  
//   function addTodo() {
//     let inputElement = document.querySelector('#todo-input');
//     let dateElement = document.querySelector('#todo-date');
//     let todoItem = inputElement.value;
//     let todoDate = dateElement.value;
//     todoList.push({item: todoItem, dueDate: todoDate});
//     inputElement.value = '';
//     dateElement.value = '';
//     displayItems();
//   }
  
  function displayitem() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todolist.length; i++) {
      let {item, duedate} = todolist[i];
      newHtml += `
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-delete" onclick="todolist.splice(${i}, 1);
        displayitem();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }