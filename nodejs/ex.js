var fs=require('fs');

fs.readFile('data/CSS','utf8',function(err,data){
  var name='파일의 내용입니다.\n';
  console.log(name+data);
});
