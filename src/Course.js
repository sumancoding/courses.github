import React from "react";

const Course = ({ course }) => {
  let total = course.parts.reduce((accum, item) => accum + item.exercises, 0);
  return (
    <div>
      <h1> {course.name}</h1>{" "}
      {course.parts.map((part) => (
        <p key={part.id}>
          {" "}
          {part.name} {part.exercises}
        </p>
      ))}
      <p>Total: {total}</p>
    </div>
  );
};

export default Course;
