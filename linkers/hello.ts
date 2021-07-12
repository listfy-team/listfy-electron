


export default function hello() {
    var {PythonShell} = require("python-shell");
    var path = require("path")
    var opcoes = {
        scriptPath : path.join(__dirname, '../python_engine/'),
        args : ['msg']
    }

    var digaola = new PythonShell('hello.py', opcoes);

    digaola.on('message', function(message) {
        swal(message);
    })
}