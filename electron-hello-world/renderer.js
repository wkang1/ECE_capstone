const openBtn = document.getElementById('openBtn')
const shell = require('electron').shell



openBtn.addEventListener('click', function(event) {
    shell.openPath("./test.sh")
})