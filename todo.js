let todo=[];


while(true)
{
    console.log("Menu\n1-Add\n2-Delete\n3-Listing\n4-break\nEnter your choice");
    let req=parseInt(prompt("Enter your choice"));
    if(req==4)
    break;   
    switch(req)
    {
        
        case 1:
            {
                let add=prompt("Enter task you want to add");
                todo.push(add);
                console.log("Task  successfully added");
            }break;
        case 2:
            {
                let idx=prompt("Enter index you want to delete");
                todo.splice(idx,1);
                console.log("Task successfully deleted");
            }break;
        case 3:
            {
                for(let i=0;i<todo.length;i++){
                    console.log(`Task #${i}: ${todo[i]}`);
                }
            }break;
        default:
            {
                console.log("Invalid Choice");
            }
    }
}