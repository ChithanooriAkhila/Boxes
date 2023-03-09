const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box className="small" text="Small" />
      <Box className="medium" text="Medium" />
      <Box className="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
