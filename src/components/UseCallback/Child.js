import React, { useEffect, useState } from "react";

function Child({ getData }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("Child component - UseEffect - getData");
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);
  return (
    <div>
      <h1>Child component data -- List comments</h1>
      <ul>
        {comments.length > 0
          ? comments.map((comment) => <li key={comment.id}>{comment.name}</li>)
          : ""}
      </ul>
    </div>
  );
}

Child.propTypes = {};

export default Child;
