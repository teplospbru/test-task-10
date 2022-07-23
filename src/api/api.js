// фетчим посты
export const fetchPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(response.ok) {
            let data = await response.json();
            return data;
        }
    } catch(error) {
        console.log(error);
    }
};

// получаем список десяти или меньше постов для текущей страницы пагинации
export const getCurrentPosts = (currentPage, filteredPosts) => {
    const page = currentPage || 1;
    const posts = [];
    let from, to;

    if(filteredPosts.length > 10) { // если постов больше 10
        from = (page * 10) - 10;
        to = filteredPosts.length;
        if((page * 10) > filteredPosts.length) {
            for(let i = from; i <= to; i++) {
                posts.push(filteredPosts[i-1]);
            };
        } else {
            from = (page * 10) - 9;
            to = page * 10;
            for(let i = from; i <= to; i++) {
                posts.push(filteredPosts[i-1]);
            };
        }
    } else { // если постов меньше 10
        from = 1;
        to = filteredPosts.length;
        for(let i = from; i <= to; i++) {
            posts.push(filteredPosts[i-1]);
        };
    }
    return posts;
}