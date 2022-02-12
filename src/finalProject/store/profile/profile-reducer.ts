const initState = {

}

export type StateType = typeof initState
export type ProfileActionsType = ReturnType<typeof actionCreator>

export const profileReducer = (state: StateType = initState, action: ProfileActionsType): StateType => {
   switch (action.type) {
      case "....": {
         return { ...state }
      }
      default: return state
   }
}

export const actionCreator = () => ({type: '....',})