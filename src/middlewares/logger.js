export const logger = (store) => (next) => (action) => {
    
    console.group(action.type)
    console.log('The new action is', action)
    const result = next(action) // next related to next middleware.
    console.log('The new state is', store.getState())
    console.groupEnd()
    return result

}