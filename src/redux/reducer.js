import { GET_POSTS, INPUT_VALUE, IS_LOADING, SEARCH, SET_CURRENT_PAGE } from "./constants";

export const initialState = {
    allPosts: [], // массив с загруженными постами
    totalPages: null, // всего страниц пагинации
    currentValue: '', // Хэндлер инпута поиска
    filteredPosts:[], // Массив с отфильтрованными постами
    currentPage: 1, // текущая страница пагинации
    isLoading: false, // Лоадер
    table: [
        { name: 'id', title: 'ID' },
        { name: 'title', title: 'Заголовок' },
        { name: 'body', title: 'Описание' },
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                filteredPosts: action.payload,
                totalPages: Math.ceil(action.payload.length / 10),
                currentPage: '1',
                isLoading: false,
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case INPUT_VALUE:
            return {
                ...state,
                currentValue: action.payload
            }
        case SEARCH:
            const posts = state.currentValue 
                ? state.allPosts.filter(item => item.id == state.currentValue || item.title.includes(state.currentValue) || item.body.includes(state.currentValue)) 
                : [...state.allPosts]
            return {
                ...state,
                filteredPosts: posts,
                totalPages: Math.ceil(posts.length / 10),
                currentPage: '1',
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default: return state;
    }
};