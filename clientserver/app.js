const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


//express app

const app = express();


//connect to mongodb

const dbURI = 'mongodb+srv://nodetutorial:Waleed%40785@cluster0.tqmhkr3.mongodb.net/nodetutorial?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register vview engine
app.set('view engine', 'ejs');



//listen for request
//app.listen(3000);

//middlewarte
/*app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});*/
//middleware & static file
app.use(express.static('public'))
app.use(morgan('dev'))

/*mongoose and mongo sandbox router
    app.get('/add-blog', (req, res) => {
        const blog = new Blog({
            title: 'new blog-2',
            snippet: 'about my new blog',
            body: 'more about my new blog'
        });

        blog.save()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            });
    });

    app.get('/all-blog', (req, res) => {
        Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
    });

    app.get('/single-blog', (req, res) => {
        Blog.findById('65b4729aae74a6267a87a9f6')
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            })
    })*/


app.get('/', (req, res) => {
    
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', { root: __dirname});
    /*const blogs = [
        {title:'waleed find egss', snippet: 'leram ispum eht jdwbef jebf bfhj'},
        {title:'nadeem find egss', snippet: 'leram ispum eht jdwbef jebf bfhj'},
        {title:'Durra find egss', snippet: 'leram ispum eht jdwbef jebf bfhj'},
    ]
    res.render('index', { title : 'Home', blogs});*/
    res.redirect('/blogs')
});

/*app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});*/

app.get('/about', (req, res) => {
    
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', { root: __dirname})
    res.render('about', { title : 'about'});
});

//redirects

//app.get('/about-us', (req, res) => {
    //res.redirect('/about')
//});


//blogs route
app.get('/blogs', (req, res) =>{
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/blogs/create', (req, res) => {
    res.render('create', { title : 'create-new-blog'})
})

//404page

app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404', { title : '404'});
});

