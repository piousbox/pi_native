
export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}

export function fetchListSuccess(list: Object) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}

export function fetchList(url: any) {
	return dispatch => {
		// const url = "https://manager.piousbox.com/api/sites/view/piousbox.com.json"
		const url = "http://localhost:3000/api/sites/view/piousbox.com.json"
		fetch(url).then(r => r.json()).then(_data => {
      console.log('+++ data:', _data)
      dispatch(fetchListSuccess(url: any))
      dispatch(listIsLoading(false))
		})
	};
}
