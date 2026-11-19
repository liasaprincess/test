const { loadTodos, saveTodos } = require("./storage");
if (process.argv[2] === "add") {
    const todos = loadTodos();
    todos.push({ id: todos.length + 1, text: process.argv[3], done: false });
    saveTodos(todos);
    console.log("Added: " + process.argv[3]);
}
