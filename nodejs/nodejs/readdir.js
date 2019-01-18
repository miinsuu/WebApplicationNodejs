var testFolder = './data';
var fs = require('fs');
var i=0;
fs.readdir(testFolder, function(error, filelist){
  while(i<filelist.length){
    console.log(`${i+1}번째 파일이름: ${filelist[i]}`);
    i+=1;
  }
})
