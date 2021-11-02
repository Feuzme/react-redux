const INITIAL_STATE = {
    imgUrl: ''
}

function dataImgReducer(state = INITIAL_STATE, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                imgUrl: action.payload
            }
        }
    }

    return state;
}

export default dataImgReducer;

export const getCatImg = () => dispatch =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADING',
            payload: data[0].url
        })
    })
}