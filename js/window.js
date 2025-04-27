
window.onload = function() {
    var button = document.getElementById('windowCreator');
    button.onmousedown = function() { createWindow("projectsssssssss"); };
};

function createWindow(id) {
    if (!document.getElementById(id)) {
        var xpwindow = document.createElement('div');
        var titleBar = document.createElement('div');
        var titleBarText = document.createElement('div');
        var titleBarControls = document.createElement('div');
        var windowBody = document.createElement('div');
        var closeButton = document.createElement('button');
        var text = document.createElement('p');

        xpwindow.id = id;
        xpwindow.className = "window";
        xpwindow.style.position = "absolute"; //d
        titleBar.innerHTML = "Projects";
        titleBar.className = "title-bar";
        titleBarText.className = "title-bar-text";
        titleBarControls.className = "title-bar-controls";
        windowBody.className = "window-body";
        windowBody.innerHTML = "Hey, this is my cool window full of stuff"
        closeButton.ariaLabel = 'Close';
        closeButton.onmousedown = function() { document.body.removeChild(xpwindow) };
 
        xpwindow.appendChild(titleBar);
        xpwindow.appendChild(windowBody);
        titleBar.appendChild(titleBarText);
        titleBar.appendChild(titleBarControls);
        titleBarControls.appendChild(closeButton);
        windowBody.appendChild(text);       
        document.body.appendChild(xpwindow);
        // Draggable window code:
        var pos = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        titleBar.onmousedown = startDragging;
        
        function startDragging(e) {
            e = e || xpwindow.event;
            e.preventDefault();

            pos3 = e.clientX;
            pos4 = e.clientY;

            document.onmouseup = stopDragging;
            document.onmousemove = dragWindow;
        };

        function dragWindow(e) {
            e = e || xpwindow.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            xpwindow.style.top = xpwindow.offsetTop - pos2 + "px";
            xpwindow.style.left = xpwindow.offsetLeft - pos1 + "px";
        };
        
        function stopDragging() {
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
};

