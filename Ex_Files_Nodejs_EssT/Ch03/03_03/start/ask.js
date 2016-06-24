var questions = ["What is your name","What is your age"];

var answers = [];

// process.stdout.write("Hello");

// process.stdout.write("World\n\n\n");


function ask(i){
	process.stdout.write(`${questions[i]}`);
	process.stdout.write("    >    \n");
}

// add an event handler to listen
process.stdin.on('data', function (data){
	// process.stdout.write('\n' + data.toString().trim() + '\n');
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask(answers.length);
	} else{
		process.exit();

	}
});

process.on('exit', function(){
	process.stdout.write("\n\n");
	process.stdout.write(`Happy ${answers[1]}th birthday sweet ${answers[0]}!!` + '\n\n');
})

ask(0);