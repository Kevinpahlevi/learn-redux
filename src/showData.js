import React from "react";
import count from "./store-redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function showData(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      <div>show data</div>
      <div>
        count =>
        {props.count}
      </div>
      <div>
        name =>
        {props.name}
      </div>
      <div>
        <Link to="edit">edit</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCountAction: () => {
      dispatch({ type: "ADD_COUNT" });
    },
  };
};

const show = connect(mapStateToProps, mapDispatchToProps)(showData);
export default show;
