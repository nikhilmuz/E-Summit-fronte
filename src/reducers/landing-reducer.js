export default function(state=null, action) {
    switch (action.type) {
        case 'REGISTER': 
            return action.payload
            break
        case 'LOGIN':
            return action.payload
            break
    }  
    return state 
}