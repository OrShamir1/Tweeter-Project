const tweeter = tweeterModule()
renderer(tweeter.getPosts())

$("#post").click(function () {
    
    const newPost = $("#input").val();
    tweeter.addPost(newPost)
    renderer(tweeter.getPosts())
})
$('#posts').on("click", ".delete", function () {
    const postID = $(this).closest("div").attr("id");
    tweeter.removePost(postID)
    renderer(tweeter.getPosts())
})
$('#posts').on("click", ".commentButton", function () {
    const postID = $(this).closest('div').attr("id");
    const newCommentText = $(this).closest('div').find("input").val();
    tweeter.addComment(newCommentText, postID)
    renderer(tweeter.getPosts())
})
$('#posts').on("click", '.deleteCommentButton', function () {
    const toDeleteCommentId = $(this).closest("div.comments").attr("id");
    tweeter.removeComment(toDeleteCommentId)
    renderer(tweeter.getPosts())
})