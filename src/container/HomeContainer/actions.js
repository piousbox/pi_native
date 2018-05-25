
import { SET } from '../../constants'
import config from '../../config'

export function listIsLoading(bool: boolean) {
  return {
    type: "LIST_IS_LOADING",
    isLoading: bool,
  }
}

export function fetchListSuccess(list: Object) {
  return {
    type: "FETCH_LIST_SUCCESS",
    list,
  };
}

export function fetchNewsitemsSuccess(list: Object) {
  return {
    type: SET.newsitems,
    list,
  };
}

export function fetchNewsitems(url: any) {
  return dispatch => {
    const url = `${config.apiUrl}/api/sites/view/${config.domain}.json`
    fetch(url).then(r => r.json()).then(_data => {
      let these = _data.site.newsitems
      dispatch(fetchNewsitemsSuccess(these))
      dispatch(listIsLoading(false))
    }).catch(_e => {
      console.log('+++ canot:', _e)

    })
  }
}
