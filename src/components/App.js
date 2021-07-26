import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";


// console.log(blogData);

function App() {
  return (<>
    <Header name={ blogData.name}/>
    <About about={blogData.about}
    src={blogData.image} />
    <ArticleList posts={blogData.posts} />
  </>);
}

export default App;
