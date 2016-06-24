console.log(process.argv);
// output:
// [ '/usr/local/bin/node',
//   '/Users/emmazhong/Desktop/JS-projects/Ex_Files_Nodejs_EssT/Ch03/03_02/start/app' ]

// because we use the command line 'node app' which uses node executable and app.js 
// that's why they are in this array



function grab(flag){
	var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var e = grab("Emma");
var m = grab("Matt");

if (!m || !e){
	console.log("Oh No!!!");
} else{
	console.log(`Welcome ${e} and ${m}`);
}
