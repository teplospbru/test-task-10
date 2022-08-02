import { GET_POSTS, INPUT_VALUE, IS_LOADING, SEARCH, SET_CURRENT_PAGE } from "./constants";
import { fetchPosts } from "../api/api";

// Получаем посты с сервера
export const getPosts = () => {
    return dispatch => {
        dispatch({ type: IS_LOADING });
        setTimeout(async () => {
            const posts = await fetchPosts();
            dispatch({ type: GET_POSTS, payload: posts });
        }, 1000)
    }
};

// Хэндлер инпута поиска
export const inputValue = (value) => {
    return {
        type: INPUT_VALUE,
        payload: value
    }
};

// Хэндлер кнпки "искать"
export const search = () => {
    return {
        type: SEARCH
    }
};

// Устанавливаем текущую страницу пагинации
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
};