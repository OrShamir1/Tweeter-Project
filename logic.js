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
    const COUNTER_HOLDER = {
        _PostIdCounter: 2,
        _commentIdCounter: 6
    }

    const getPostByID = function (postID) {
        for(let post in _postsArray) {
            if(_postsArray[post].id == postID) {
                return postID
            }
            postID = undefined;

        }
    }

    const getPosts = () => _postsArray;
    const addPost = function(post) {
        COUNTER_HOLDER._PostIdCounter += 1;
        let postId = "p" + COUNTER_HOLDER._PostIdCounter;
        _postsArray.push({
            text: post,
            id: postId,
            comments:[]
        })
    }

    const removePost = function (postID) {
        COUNTER_HOLDER._PostIdCounter -= 1;
        if(getPostByID(postID)) {
            _postsArray.splice(postID, 1);
        }
    }

    const addComment = function (comment, postID) {
        COUNTER_HOLDER._commentIdCounter += 1;
        let commentId = "c" + COUNTER_HOLDER._commentIdCounter ;
        for(let post in _postsArray) {
            if(_postsArray[post].id == postID) {
                _postsArray[post].comments.push({ id: commentId, text: comment})
            }
        }
    }

    const removeComment = function (commentID) {
        for(let post of _postsArray){
            const POSTCOMMENTS = post.comments
            for(let comment in POSTCOMMENTS) {   
                if(POSTCOMMENTS[comment].id == commentID) {
                    POSTCOMMENTS.splice(comment, 1);
                }
            }
        }
    }
    return{
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}