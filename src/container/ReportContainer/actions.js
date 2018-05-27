
import { SET } from '../../constants'
import config from '../../config'

export function fetchReportSuccess(report: Object) {
  return {
    type: SET.report,
    report,
  }
}

export function fetchReport(reportname: string) {
  // console.log('+++ fetchReport:', reportname)

  return dispatch => {
    let url = `${config.apiUrl}/api/reports/view/${reportname}.json`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch(fetchReportSuccess(_data.report))
    }).catch(_e => {
      // console.log('+++ cannot fetch report:', _e)
    })
  }
}
