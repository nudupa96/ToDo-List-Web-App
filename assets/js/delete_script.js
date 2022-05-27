//this function is called whenever delete operation needs to be performed
function performDeleteOperation() {
    //first get al the checked input to be deleted
    let checkedBoxes = document.querySelectorAll('input[name="taskIDs"]:checked');
    //now create an empty array to be operated on
    let IDs = [];

    //add the values to IDs array
    checkedBoxes.forEach(function (box){
        IDs.push(box.value);
    });

    //AJAX call through the server - Note the syntax
    $.ajax({
        method: 'POST',
        url: '/delete-task',
        data: {
            taskIDs: IDs,
        },
        success: (data) => {
            //this console is on the web
            console.log("Deleted Content", data);
            taskIDs = data.taskIDs;

            //if there is an array(object in JS) of tasks to be deleted
            if( typeof taskIDs == 'object') {
                taskIDs.forEach((task,index) => {
                    //remove this value
                    $(`#task-${task}`).remove();
                })
            }
            //if it is a single element then remove from DOM
            else {
                $(`#task-${taskIDs}`).remove();
            }
        },
        error: (error) => {
            console.log(`Error in deleting tasks: ${error}`);
        }
    })
}