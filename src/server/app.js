import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';;
import session from 'express-session';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from '../routes.js'

import TodoStore from '../client/store/todoStore.js';
import AComponent from '../client/container/A.js';

import { indexHandle } from '../server/route/a.js';

const app = express();
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.listen(4000, () => {
    console.log(`listening at 4000`);
})

app.get('/static/vendor.js', (req, res) => {

    res.sendFile('/vendor.js', { root: __dirname + `/build` });
})

app.get('/static/client.bundle.js', (req, res) => {

    res.sendFile('/client.bundle.js', { root: __dirname + `/build` });
})

// app.get('/2.client.bundle.js', (req, res) => {
//     res.sendFile('/2.client.bundle.js', { root: __dirname + `/build` });
// })

//app.get('/', indexHandle);

app.get('/',  (req, res) => {
    req.cookies.user =  req.cookies.user || (new Date()).getTime();
    console.log(req.cookies.user);
    // if( !!req.dirty  ){
    //     console.log(req.dirty);
    //     try {
    //         for(let i = 0; i < req.dirty.length; i++){
    //             if( req.dirty[i] === req.url.split('?')[0] ){
    //                 console.log(dirty);
    //             }
    //         }
    //     }catch(e) {
    //         console.log(e);
    //     }
    // }
    match({ routes: routes, location: req.url }, async (err, redirect, props) => {
        // dirty list
        req.dirty = ['/'];
        let testHtml = renderToString(<RouterContext {...props} />)
        res.send(indexPage(testHtml));
    })

})

const indexPage = (html) => {
    return `
        <!doctype html>
        <html lang="utf-8">
            <head>
                <script>
                </script>
            </head>
            <body>
                <section id="hzpapp" >${html}</section>
            </body>
            <script src="/static/vendor.js"></script>
            <script src="/static/client.bundle.js"></script>
        </html>
    `
}

app.get('/todo',  (req, res) => {
    match({ routes: routes, location: req.url }, async (err, redirect, props) => {

        let todoStore = TodoStore.init();
        // fetch before render
        await todoStore.addTodo(`hzp`);

        Object.assign(props.router, {todoStore: todoStore});

        const d = renderToString(<RouterContext {...props} />)
        res.send(todoPage(d, todoStore));
    })
})

const todoPage = (html, initTodos) => {
    return `
        <!doctype html>
        <html lang="utf-8">
            <head>
                <script>
                    window.initTodos = ${JSON.stringify(initTodos.todos)};
                </script>
            </head>
            <body>
                <section id="hzpapp" >${html}</section>
            </body>
            <script src="/static/vendor.js"></script>
            <script src="/static/client.bundle.js"></script>
        </html>
    `
}
