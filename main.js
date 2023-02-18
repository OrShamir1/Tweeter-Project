const tweeter = tweeterModule()
renderFunctions.rendererPosts(tweeter.getPosts())

$("#post").click(function () {
    
    const newPost = $("#input").val();
    tweeter.addPost(newPost)
    renderFunctions.rendererPosts(tweeter.getPosts())
    $("#input").val("")
})
$('#posts').on("click", ".ri-close-fill", function () {
    const postID = $(this).closest("div").attr("id");
    tweeter.removePost(postID)
    renderFunctions.rendererPosts(tweeter.getPosts())
})
$('#posts').on("click", ".commentButton", function () {
    const postID = $(this).closest('div').attr("id");
    const newCommentText = $(this).closest('div').find("input").val();
    tweeter.addComment(newCommentText, postID)
    renderFunctions.rendererPosts(tweeter.getPosts())
})
$('#posts').on("click", '.ri-close-circle-line', function () {
    const toDeleteCommentId = $(this).closest("div.comments").attr("id");
    tweeter.removeComment(toDeleteCommentId)
    renderFunctions.rendererPosts(tweeter.getPosts())
})