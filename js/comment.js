
// load comment data from API
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}
loadComments();

// display data
function displayComment(comments) {
    const CommentsContainer = document.getElementById('comments');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3>name : ${comment.name}</h3>
        <h4>email : ${comment.email}</h4>
        <P>body : ${comment.body}</p>
        `
        CommentsContainer.appendChild(div);
    }
}