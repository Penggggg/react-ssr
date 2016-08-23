import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import TodoStore from '../../client/store/todoStore.js';
import routes from '../../routes.js';

export const indexHandle = (req, res) => {

    match({ routes: routes, location: req.url }, async (err, redirect, props) => {

        let todoStore = TodoStore.init();
        // fetch before render
        await todoStore.addTodo(`hzp`);

        Object.assign(props.router, {todoStore: todoStore});

        const testHtml = renderToString(<RouterContext {...props} />)

        res.send(indexPage(testHtml, todoStore));

    })
}


let indexPage = (html, initTodos) => {
    console.log(`${JSON.stringify(initTodos.todos)}`);
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
