
// load comment data from API
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}
