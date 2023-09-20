let addbtn = document.querySelector('.addItem'); //addtastbutton
let wraper = document.querySelector('.listWraper');//task list
let task = document.getElementById('list')//task input


function addTask(){
    const taskText = task.value.trim();
    if(taskText !== ''){
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <span class='delete'>X</span>`;   
        wraper.appendChild(listItem);
        task.value = '';

        const deletebtn = listItem.querySelector('.delete');
        deletebtn.addEventListener('click', function(){
            listItem.remove()
        })
    }
}

addbtn.addEventListener('click', addTask);

task.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
        addTask();
    }
})

