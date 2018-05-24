const initialState = {
	list: [],
	isLoading: true,
}

import { SET } from './constants'

export default function(state: any = initialState, action: Function) {
	if (action.type === SET.newsitems) {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
      isLoading: action.isLoading,
		};
	}
	return state;
}
