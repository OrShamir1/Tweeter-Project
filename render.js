const renderFunctions = {
    generateComments: function (postComments) {
        let allComments = "";
        for (let comment of postComments) {
            allComments += ((`<div id="${comment.id}" class="comments">${comment.text}
                                <i class="ri-close-circle-line"></i>
                                </div>`)) + " "
        }
        return (allComments)
    },
    
    rendererPosts: function (posts) {
        $("#posts").empty();
        for (let post of posts) {
            $("#posts").append(`<div id="${post.id}" class="main-post">
            <i class="ri-close-fill" class="delete-post"></i>
            <div class="post">${post.text}</div>
            ${this.generateComments(post.comments)}
            <input class='commentInput' placeholder='Type your Comment'>
            <button class='commentButton'>Comment</button>
            </div>
            <hr>`)
            
        }
    }
}

