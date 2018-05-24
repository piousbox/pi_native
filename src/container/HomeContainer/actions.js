
import { SET } from './constants'

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
    // const url = "https://manager.piousbox.com/api/sites/view/piousbox.com.json"
    const url = "https://ccf11dc1.ngrok.io/api/sites/view/wasya.co.json" // @TODO: remove
    fetch(url).then(r => r.json()).then(_data => {
      let these = _data.site.newsitems
      
      console.log('+++ fetched:', these)

      dispatch(fetchNewsitemsSuccess(these))
      dispatch(listIsLoading(false))
    }).catch(_e => {
      console.log('+++ canot:', _e)

    })
  }
}
