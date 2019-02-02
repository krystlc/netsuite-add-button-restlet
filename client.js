/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/currentRecord'], function(currentRecord) {
  function pageInit(context) {
    console.log('does this ever fire?')
  }
  function buttonfxn() {
    try {
      var params = getParams(currentRecord.get()) // get parameteres and add too url string
      var url = '' // your api endpoint
      PopupCenter(url + params, 'Your Title', 420, 500)
      console.log(params)
    } catch (err) {
      console.error('ahh man', err)
    }
  }
  function getParams(obj) {
    var str = []
    for (var p in obj) {
      if (p === 'id' || p === 'type') {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
    }
    return str.join('&')
  }
  function PopupCenter(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    var systemZoom = width / window.screen.availWidth
    var left = (width - w) / 2 / systemZoom + dualScreenLeft
    var top = (height - h) / 2 / systemZoom + dualScreenTop
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left)

    if (window.focus) newWindow.focus()
}
  return {
    buttonfxn: buttonfxn,
    pageInit: pageInit
  }
})
