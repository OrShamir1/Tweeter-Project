// const renderer = function (posts) {
//     const generateComments = function (postComments) {
//         let allComments = "";
//         for (let comment of postComments) {
//             allComments += ((`<div id="${comment.id}" class="comments">${comment.text}
//                                 <button class="deleteCommentButton">x</button>
//                                 </div>`)) + " "
//         }
//         return (allComments)
//     }
//     const rendererPosts = function (posts) {
//         $("#posts").empty();
//         for (let post of posts) {
//             $("#posts").append(`<div id="${post.id}" data="${post.id}">
//             <button class="delete">x</button>
//             <div class="post">${post.text}</div>
//             ${generateComments(post.comments)}
//             <input class='commentInput' placeholder='Type your Comment'>
//             <button class='commentButton'>Comment</button>
//             </div>
//             <hr>`)
//         }
//     }
//     rendererPosts(posts)
// }

const renderFunctions = {
    generateComments: function (postComments) {
        let allComments = "";
        for (let comment of postComments) {
            allComments += ((`<div id="${comment.id}" class="comments">${comment.text}
                                <button class="deleteCommentButton">x</button>
                                </div>`)) + " "
        }
        return (allComments)
    },
    
    rendererPosts: function (posts) {
        $("#posts").empty();
        for (let post of posts) {
            $("#posts").append(`<div id="${post.id}" data="${post.id}">
            <button class="delete">x</button>
            <div class="post">${post.text}</div>
            ${this.generateComments(post.comments)}
            <input class='commentInput' placeholder='Type your Comment'>
            <button class='commentButton'>Comment</button>
            </div>
            <hr>`)
        }
    }
}

