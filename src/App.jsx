const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content content={course.parts} />
    </div>
  );
};

const Header = ({ header }) => {
  return <h1>{header}</h1>;
};

const Content = ({ content }) => {
  const total = content.reduce(function (sum, part) {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      {content.map((part) => (
        <Part key={part.id} parts={part.name} time={part.exercises} />
      ))}
      <br />
      <b>total of exercises {total}</b>
    </div>
  );
};

const Part = ({ parts, time }) => {
  return (
    <p>
      {parts} {time}
    </p>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
