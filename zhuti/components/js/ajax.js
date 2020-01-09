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



// 调用

// var url = "https://elm.cangdu.org/v1/users/list"; // 接口    
// var params = { // 参数
//     "offset": 0,
//     "limit": 20
// }
// ajax(url, "GET", params, function (res) {
//     console.log(res);
// }),function(err){
//     console.log(err)
// }
