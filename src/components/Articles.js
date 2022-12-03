import React from "react";
import Article from "./article";

function Articles({ displayArticle }) {
  const arr = [
    {
      _id: 1,
      title: "titre",
      content: "Un contenu",
      published: true,
    },
    {
      _id: 2,
      title: "titre 2",
      content: "Un contenu 2",
      published: true,
    },
    {
      _id: 3,
      title: "titre 3",
      content: "Un contenu 3",
      published: true,
    },
  ];

  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {/* {displayArticle ? <Article/>
      : (
        <p>Aucun article</p>
      )} */}
      {arr
        .filter((a) => a.published)
        .map((p) => (
           <Article key={p._id} title={p.title} content={p.content}/>
        ))}
    </div>
  );
}

export default Articles;
