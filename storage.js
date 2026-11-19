const fs = require("fs");

function loadTodos () { 
    const text = fs.readFileSync("todos.json", "utf8");
    return JSON.parse(text);
}

function saveTodos(todos) {
    fs.writeFileSync ("todos.json", JSON.stringify(todos));
}

module.exports = { loadTodos, saveTodos };