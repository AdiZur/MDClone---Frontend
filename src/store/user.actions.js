

// // Action Creators:
// export function getActionRemoveTask(taskId) {
//     return {
//         type: 'REMOVE_TASK',
//         taskId
//     }
// }
// export function getActionAddTask(task) {
//     return {
//         type: 'ADD_TASK',
//         task
//     }
// }
// export function getActionUpdateTask(task) {
//     return {
//         type: 'UPDATE_TASK',
//         task
//     }
// }


// export function loadTasks() {
//     return (dispatch) => {
//         taskService.query()
//             .then(tasks => {
//                 console.log('Tasks from DB:', tasks)
//                 dispatch({
//                     type: 'SET_TASKS',
//                     tasks
//                 })
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot load tasks')
//                 console.log('Cannot load tasks', err)
//             })

     
//     }
// }

// export function removeTask(taskId) {
//     return async (dispatch) => {
//         try {
//             await taskService.remove(taskId)
//             console.log('Deleted Succesfully!');
//             dispatch(getActionRemoveTask(taskId))
//             showSuccessMsg('Task removed')
//         } catch (err) {
//             showErrorMsg('Cannot remove task')
//             console.log('Cannot remove task', err)
//         }
//     }
// }

// export function addTask(task) {
//     return (dispatch) => {

//         taskService.save(task)
//             .then(savedTask => {
//                 console.log('Added Task', savedTask);
//                 dispatch(getActionAddTask(savedTask))
//                 showSuccessMsg('Task added')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot add task')
//                 console.log('Cannot add task', err)
//             })
//     }
// }

// export function updateTask(task) {
//     return (dispatch) => {
//         taskService.save(task)
//             .then(savedTask => {
//                 console.log('Updated Task:', savedTask);
//                 dispatch(getActionUpdateTask(savedTask))
//                 showSuccessMsg('Task updated')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot update task')
//                 console.log('Cannot save task', err)
//             })
//     }
// }






