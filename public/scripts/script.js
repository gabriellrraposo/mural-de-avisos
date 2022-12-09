document.addEventListener("DOMContentLoaded", () => {
    updatePosts()
})

let updatePosts = () => {
    let promisse = fetch("http://192.168.0.247:3000/api/all")
    .then(res => {
        return res.json()
    }).then(json => {
        let postElements = ""
        let posts = JSON.parse(json)

        posts.forEach(post => {
            let postElement = `<div id='avisos'><div id='${post.id}' class='card mb-4'><div class='card-header'><h5 class='card-title'>${post.title}</h5></div><div class='card-body'><div class='card-text'>${post.description}</div></div></div></div>`

            postElements += postElement
        })

        document.getElementById("avisos").innerHTML = postElements
    })
}

let newPost = () => {

}