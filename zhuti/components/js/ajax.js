var commomUrl = "http://192.162.70.12/api"; // 公共前缀url
var commonHeader = {
    "Accept": "application/json",
   "Authorization": "Bear " + "..."
} 
function ajax(url, type, params, successfn, errorfn) {
  $.ajax({
      url: url,
      type: type,
      headers: commonHeader,
      data: params,
      success: function (res) {
          successfn(res);
      },
      error: function (res) {
          errorfn(res);            
      }
  });
}