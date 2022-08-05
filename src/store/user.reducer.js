// const initialState = {
//     tasks: []
// }
// export function userReducer(state = initialState, action) {
//     var newState = state

//     switch (action.type) {
//         case 'SET_TASKS':
//             newState = { ...state, tasks: action.tasks }
//             break
//         // case 'REMOVE_TASK':
//         //     const lastRemovedTask = state.tasks.find(task => task._id === action.taskId)
//         //     tasks = state.tasks.filter(task => task._id !== action.taskId)
//         //     newState = { ...state, tasks, lastRemovedTask}
//         //     break
//         // case 'ADD_TASK':
//         //     newState = { ...state, tasks:[...state.tasks, action.task]}
//         //     break
//         // case 'UPDATE_TASK':
//         //     tasks = state.tasks.map(task => (task._id === action.task._id)? action.task : task)
//         //     newState = { ...state, tasks}
//         //     break
//         // case 'ADD_TO_TASKT':
//         //     newState = { ...state, taskt:[...state.taskt, action.task]}
//         //     break
//         // case 'REMOVE_FROM_TASKT':
//         //     taskt = state.taskt.filter(task => task._id !== action.taskId)
//         //     newState = { ...state, taskt}
//         //     break
//         // case 'CLEAR_TASKT':
//         //     newState = { ...state, taskt: []}
//         //     break
//         // case 'UNDO_REMOVE_TASK':
//         //     if (state.lastRemovedTask) {
//         //         newState = { ...state, tasks: [...state.tasks, state.lastRemovedTask], lastRemovedTask: null}
//         //     }
//         //     break
//         default:
//     }

//     return newState

// }
