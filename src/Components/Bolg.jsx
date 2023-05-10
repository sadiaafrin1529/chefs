import React from "react";

const Bolg = () => {
  return (
    <div>
      <h1>
        What is the differences between uncontrolled and controlled components.?
      </h1>
      <p>
        <span>Ans</span> In React, controlled components refer to components
        that have their state and behavior controlled by the parent component.
        These components rely on props passed down from the parent component to
        update their state and behavior. Uncontrolled components refer to
        components that manage their own state internally.
      </p>

      <h1>How to validate React props using PropTypes.?</h1>
      <p>
        <span>Ans</span>
        To validate React props using PropTypes, you can use the PropTypes
        library that comes bundled with React. PropTypes is a type-checking
        library that allows you to specify the expected types of your
        component's props.
      </p>

      <h1>What is the difference between nodejs and express js.</h1>
      <p>
        <span>Ans</span>Node.js and Express.js are both popular technologies
        used in web development, but they serve different purposes. Node.js is a
        JavaScript runtime built on the Chrome V8 engine. It allows developers
        to use JavaScript on the server-side to build scalable and
        high-performance applications. With Node.js, developers can write
        server-side code using JavaScript, which can run on various operating
        systems such as Windows, Mac OS, and Linux. Node.js also includes a
        large number of built-in modules that developers can use to perform
        various tasks, such as working with file systems, managing network
        connections, and processing data.
      </p>

      <h1>What is a custom hook, and why will you create a custom hook?</h1>
      <p><span>Ans</span>
A custom hook is a JavaScript function that allows you to reuse logic across multiple React components. Custom hooks are a way to abstract away common logic from components and make it easier to share between them.</p>
    </div>
  );
};

export default Bolg;
