import React from "react";
import count from "./store-redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function editData(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      <div>edit data</div>
      <div>count => {props.count}</div>
      <div>name => {props.name}</div>

      <div>
        {/* <button onClick={() => count.addCount()}>add</button> */}
        <button onClick={props.addCountAction}>add</button>
      </div>
      <div>
        <input
          type="text"
          value={props.name}
          onChange={(e) => props.changeNameAction(e.target.value)}
        />
      </div>
      <div>
        <Link to="show">show</Link>
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
    changeNameAction: (name) => {
      dispatch({ type: "CHANGE_NAME", value: name });
    },
  };
};

const edit = connect(mapStateToProps, mapDispatchToProps)(editData);
export default edit;
