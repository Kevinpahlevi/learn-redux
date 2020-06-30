# REACT-REDUX

reducers(state, actions) -> store(reducers) -> provider(store)

mengakses state dan actions didalam reducers ada 2 cara yaitu dengan membuat dispatch atau mapping state dan dispatch

## REDUCERS

berisi state dan action untuk manipulasi state

```
const initState = {
  count: 100,
  name: "init",
};

const reducer = (state = initState, action) => {
  const { type, value } = action;

  switch (type) {
    case "ADD_COUNT":
      console.log({ ...state, count: state.count + 1 });
      return { ...state, count: state.count + 1 };
    case "CHANGE_NAME":
      return { ...state, name: value };
    case "GET_COUNT":
      return state.count;
    default:
      return state;
  }
};

export default reducer;
```

## STORE

store dapat berisi beberapa reducers (createStore(reducers))

```
import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

export default store;
```

## PROVIDER

component perlu di warp dengan provider yang berisi store agar dapat mengakses store

```
<Provider store={storeBerisiReducers}>
 ...components
</Provider>
```

## ACTIONS

digunakan untuk manipulasi state di dalam store/reducers, dispatch disini di artikan sebagai pemanggilan actions dalam reducers dengan memasukan nilai dari type atau value kedalam dispatch

actions/index.js

```
import store from "../store";

export default {
  addCount: (value) => {
    //type dinamakan dengan nama actions di reducers
    const action = { type: "ADD_COUNT" };
    store.dispatch(action);
  }
};
```

editData.js

```
import myActions from "./store-redux/actions/index";

//memanggil action addCount yang berisi dispatch ber type "ADD_COUNT"
<button onClick={() => count.addCount()}>add</button>
```

## MAPPING

cara ini digunakan untuk menyebutkan state dan dispatch apa saja yang dibutuhkan di suatu component, nantinya redux akan memberikan state dan dispatch yang telah didefiniskan dalam bentuk props kedalam component tersebut

### mapStateToProps

mapStateToProps = mapping state dari reducers untuk component(props)

```
const mapStateToProps = (state) => {
    return {
        count: state.count,
        name: state.name,
    };
};

```

### mapDispatchToProps

mapDispatchToProps = mapping dispatch/action dari reducers untuk component(props)

```
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

```

### CONNECT

```
function editData(props) {
....
  <div>count => {props.count}</div>
  <div>name => {props.name}</div>
    <button onClick={props.addCountAction}>add</button>
    <input type="text" value={props.name}
     onChange={(e) => props.changeNameAction(e.target.value)}
    />
....
}
const edit = connect(mapStateToProps, mapDispatchToProps)(editData);
export default edit;
```
