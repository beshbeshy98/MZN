import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 3000;
let posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get("/" , (req, res) => {
    res.render("index.ejs",{ posts: posts});
});

app.post("/create", (req, res) => {
    const { title , content} = req.body;
    const newPost = {
        id: Date.now().toString(), 
        title,
        content };

    posts.push(newPost);

    res.render("index.ejs", {posts});
});

app.put("/edit/:postID",(req, res) => {
    const postId = req.params.postId;
    const { title, content } = req.body;
    const postToUpdate = posts.find(post => post.id === postId);

    if (postToUpdate){
        postToUpdate.title = title;
        postToUpdate.content = content;
    }
    res.render("index.ejs", { posts });
})

app.delete("/edit/:postId", (req, res) => {
    const postId = req.params.postId;
    const filteredPosts = posts.filter( post => post.id !== postId);

    posts = filteredPosts;
    res.render("index.ejs", { posts })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });