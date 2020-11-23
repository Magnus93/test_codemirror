
let cm = new CodeMirror.fromTextArea(
    document.getElementById("editor"),
    {
        lineNumbers: true,
        mode: "simplemode", 
        theme: "dracula",
        lineWrapping: false
    }
);
