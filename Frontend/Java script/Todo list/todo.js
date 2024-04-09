
let input =prompt('what would you like to do ?')
const todos=['gg','jj'];
while(input !=='quit'&& input !=='q'){
    if(input=='list'){
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }

    }
    else if (input==='new'){
        const newTodo = prompt('What is yor new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the lists`)
    }
    else if(input==='delete')
    {
        const index = parseInt(prompt('enter index to delete ?'));
        if(!Number.isNaN(index)){
            const deleated= todos.splice(index,1);
            console.log(`deleted ${deleated[0]} `);
            }
            else{
                console.log('unknown index');

    }
    input =prompt(' what would you like to do ?');
}
console.log('You quit the app!')}