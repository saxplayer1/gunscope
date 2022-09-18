const {gun} = require("./server");

exports.makeNewPost = (req, res) => {
    gun.get("posts").then(posts => {
        console.log(posts)
        gun.user().get("alias").then(name => {
            let post = {};
            post.id = new Date().getTime().valueOf() + Math.random();
            post.postImage = null;
            post.postText = req.postText;
            post.likes = 0;
            post.user = req.username;
            post.creationTime = new Date().getTime().toString();
            gun.get('posts').get(post.id).put(post).then(() =>
                console.log("post created")
            ).catch(() => {
                return res.status(500)
            })
        })
    })
    return res.status(200)
}

exports.getLastFive = (req, res) => {
    let posts = [];
    gun.get('posts').map().on((post) => {
        if (post.id) {
            posts.push(post)
        }
    })
    posts = posts.reverse();
    return res.status(200).send(posts.slice(0, 5))
}