import PropTypes from "prop-types";

const HelloMessage = (props) => {
  // function HelloMessage(props) {
  // props.name = "Jazz";

  return (
    <>
      <h1>Hello {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Is Married? {String(props.isMarried)}</h1>
      {/* <h1>Is Married? {props.isMarried.toString()}</h1> */}
      <h1>{props.arr}</h1>
      <h1>At[0]: {props.arr[0]}</h1>
      <h1>{props.children}</h1>
    </>
  );
};

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  arr: PropTypes.array,
};

HelloMessage.defaultProps = {
  name: "Anonymous User",
  age: 18,
};

export default HelloMessage;
