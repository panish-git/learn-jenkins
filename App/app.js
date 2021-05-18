const express = require("express");

const app = express();

const port = process.env.PORT || 8000

const bookRouter = express.Router();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter.route('/books')
	.get((req, res) => {
		const response = { hello: 'This is book!!!'};
		res.json(response);
})
	.post((req, res) => {
		const response = req.body;
		console.log(response);
		res.status(201).json(response);
})

bookRouter.route('/books/:bookName')
	.get((req, res) => {
		const bookName = req.params.bookName;
		const response = { hello: 'This is book!!' + bookName};
		res.json(response);
})

app.use('/api',bookRouter);

app.get('/', (req, res)=>{
	res.send('Welcome to Hello world node !!');

})

app.listen(port, ()=>{
	console.log("Node App is running!!")
})
