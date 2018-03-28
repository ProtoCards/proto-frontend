export const GET_PROJECT_CARDS = 'GET_PROJECT_CARDS'
export const ADD_PROJECT_CARD = 'ADD_PROJECT_CARD'
export const SELECT_PROJECT_CARD = 'SELECT_PROJECT_CARD'
export const SELECT_ALL_CARDS = 'SELECT_ALL_CARDS'
export const UNSELECT_ALL_CARDS = 'UNSELECT_ALL_CARDS'
export const DELETE_CARDS = 'DELETE_CARDS'

const baseURL = 'http://localhost:3001/graphql'

export function deleteCards(selectedCards){

  // const mutation = `mutation deleteCard($_id:ID){
  //   deleteCard(_id:$_id){
  //     _id
  //     projectId
  //     quantity
  //     properties{
  //       name
  //       fieldId
  //       content
  //     }
  //   }
  // }`

  return {
    type: DELETE_CARDS,
    payload: selectedCards
  }
}

export function addProjectCard(newCard){

  const mutation = `mutation card($input:CardInput){
    createCard(input:$input){
      _id
      projectId
      printQuantity
      properties{
        name
        fieldId
        content
      }
    }
  }`

  return async (dispatch) => {
    const data = await fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: mutation,
          variables: { input: newCard }
      })
    })
    .then(res => res.json())

    dispatch({
      type: ADD_PROJECT_CARD,
      payload: data.data.createCard
    })
  }

}

export function selectCard(clickedCard){
  return {
    type: SELECT_PROJECT_CARD,
    payload: clickedCard
  }
}

export function selectAllCards(allCards){
  return {
    type: SELECT_ALL_CARDS,
    payload: allCards
  }
}

export function unselectAllCards(allCards){
  return {
    type: UNSELECT_ALL_CARDS,
    payload: allCards
  }
}

export function getProjectCards(){

  const query = `query projectCards($projectId:ID){
  getProjectCards(projectId:$projectId){
    _id
    projectId
    properties{
      name
      fieldId
      content
    }
    }
  }`

  return async (dispatch) => {
    const data = await fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          variables: { projectId: '5a861f6ef36d2873fccf8312' }
      })
    })
    .then(res => res.json())

    data.data.getProjectCards.map(el => {
      return el.is_selected = false
    })

    dispatch({
      type: GET_PROJECT_CARDS,
      payload: data.data.getProjectCards
    })
  }

}
