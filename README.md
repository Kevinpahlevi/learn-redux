basic redux (reducers -> store -> provider)

reducers => { state, actions }
store dapat berisi beberapa reducers (createStore(reducers))
component perlu di warp dengan provider yang berisi store (<Provider store={storeBerisiReducers}>)

mapStateToProps = mapping state dari reducers untuk component(props)
mapDispatchToProps = mapping dispatch/action dari reducers untuk component(props)
