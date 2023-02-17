const tweeterModule = function () {
    const _postsArray = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    const counterHolder = {
        _postIdCounter: 2,
        _commentIdCounter: 6
    }

    const goToPost = {
        isPostInPostArray: function (postID) {
            for (let post in _postsArray) {
                if (_postsArray[post].id == postID) {
                    return postID
                }
            }
        },

        getPostIndexByPostId: function (postID) {
            for(let postIndex in _postsArray) {
                if(_postsArray[postIndex].id === postID) {
                    return postIndex
                }
            }
        }


    }


    const getPosts = () => _postsArray;

    const addPost = function (post) {
        counterHolder._postIdCounter += 1;
        let postId = "p" + counterHolder._postIdCounter;
        _postsArray.push({
            text: post,
            id: postId,
            comments: []
        })
    }

    const removePost = function (postID) {
        if (goToPost.isPostInPostArray(postID)) {
            _postsArray.splice(postID, 1);
        }
    }

    const addComment = function (comment, postID) {
        counterHolder._commentIdCounter += 1;
        let commentId = "c" + counterHolder._commentIdCounter;
        _postsArray[goToPost.getPostIndexByPostId(postID)].comments.push({ id: commentId, text: comment })
            
        
    }

    const removeComment = function (commentID) {
        for (let post of _postsArray) {
            for (let comment in post.comments) {
                if (post.comments[comment].id == commentID) {
                    post.comments.splice(comment, 1);
                }
            }
        }
    }
    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}