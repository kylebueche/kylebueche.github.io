var windows = [];

// 1-based z-indexing. This should maintain order if list of n windows is initialized to z indexes 1, 2, ..., n
function putWindowOnTop(windowDiv)
{
    let currentZIndex = windowDiv.style.zIndex;
    if (currentZIndex != windows.length) {
        for (let i = 0; i < windows.length; i++) {
            if (windows[i].style.zIndex > currentZIndex) {
                windows[i].style.zIndex--;
            }
        }
    }
}

function openWindow(windowDiv) {
    putWindowOnTop(windowDiv);
    windowDiv.style.display = "block";
}

function closeWindow(windowDiv) {
    windowDiv.style.display = "none";
}

window.onload = function() {
    var iconDiv = document.getElementById('icons');
    if (iconDiv) {
        const icons = iconDiv.children;
        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            windowDiv = document.getElementById(icon.ariaLabel);
            windowDiv.style.zIndex = i + 1;
            windows.push(windowDiv);
            closeWindow(windowDiv);
            icon.onmousedown = function() { openWindow(windowDiv); };
            windowDiv.onmousedown = function() { putWindowOnTop(windowDiv); };
            windowDiv.querySelector('[aria-label=Close]').onmousedown = function() { closeWindow(windowDiv); };
            makeDraggable(windowDiv);
        }
    }
}

function makeDraggable(windowDiv) {
    var mouseInitX = 0, mouseInitY = 0;
    var windowInitX = 0, windowInitY = 0;
    var windowRect;
    var windowMinX = 0, windowMaxX = 0, windowMinY = 0, windowMaxY = 0;

    windowDiv.querySelector('.title-bar').onmousedown = startDragging;

    function startDragging(e) {
        e = e || windowDiv.event;
        e.preventDefault();

        windowRect = windowDiv.getBoundingClientRect();
            
        mouseInitX = e.clientX;
        mouseInitY = e.clientY;
        windowInitX = windowDiv.offsetLeft;
        windowInitY = windowDiv.offsetTop;

        document.onmouseup = stopDragging;
        document.onmousemove = dragWindow;
    };

    function dragWindow(e) {
        e = e || windowDiv.event;
        e.preventDefault();

        var mouseCurrX = e.clientX;
        var mouseCurrY = e.clientY;
        var windowNewX = windowInitX + mouseCurrX - mouseInitX;
        var windowNewY = windowInitY + mouseCurrY - mouseInitY;

        windowMinX = 0;
        windowMinY = 0;
        windowMaxX = window.innerWidth - windowDiv.offsetWidth;
        windowMaxY = window.innerHeight - windowDiv.offsetHeight;

        windowNewX = Math.max(Math.min(windowNewX, windowMaxX), windowMinX);
        windowNewY = Math.max(Math.min(windowNewY, windowMaxY), windowMinY);

        windowDiv.style.left = windowNewX + "px";
        windowDiv.style.top = windowNewY + "px";
    };
        
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    };
}


function createWindow(id) {
    if (!document.getElementById(id)) {
        var windowXP = document.createElement('div');
        var titleBar = document.createElement('div');
        var titleBarText = document.createElement('div');
        var titleBarControls = document.createElement('div');
        var windowBody = document.createElement('div');
        var closeButton = document.createElement('button');
        var text = document.createElement('p');

        windowXP.id = id;
        windowXP.className = "window";
        windowXP.style.position = "absolute";
        titleBar.className = "title-bar";
        titleBarText.className = "title-bar-text";
        titleBarText.innerHTML = "Projects";
        titleBarControls.className = "title-bar-controls";
        windowBody.className = "window-body";
        text.innerHTML = "Hey, this is my cool window full of stuff";
        closeButton.ariaLabel = 'Close';
        closeButton.onmousedown = function() {
            document.body.removeChild(windowXP);
            windows.splice(windows.indexOf(windowXP), 1);
        };
 
        windowXP.appendChild(titleBar);
        windowXP.appendChild(windowBody);
        titleBar.appendChild(titleBarText);
        titleBar.appendChild(titleBarControls);
        titleBarControls.appendChild(closeButton);
        windowBody.appendChild(text);       
        document.body.appendChild(windowXP);

        windowXP.style.zIndex = 1;
        windows.push(windowXP);
        
        // Initial Z-ordering:
        windowXP.style.zIndex = (1 + parseInt((windows.reduce((max, current) =>
            {
                if (current.style.zIndex > max.style.zIndex) {
                    return current;
                }
                return max;
            }).style.zIndex)));

        // Draggable window code:
        var mouseInitX = 0, mouseInitY = 0;
        var windowInitX = 0, windowInitY = 0;
        var windowRect;
        var windowMinX = 0, windowMaxX = 0, windowMinY = 0, windowMaxY = 0;

        titleBar.onmousedown = startDragging;
        windowXP.onmousedown = windowToTop;

        function windowToTop(e) {
            e = e || windowXP.event;
            e.preventDefault();
            windowXP.style.zIndex = (1 + parseInt((windows.reduce((max, current) =>
                {
                    if (current.style.zIndex > max.style.zIndex) {
                        return current;
                    }
                    return max;
                }).style.zIndex)));
        }
        
        function startDragging(e) {
            e = e || windowXP.event;
            e.preventDefault();

            windowRect = windowXP.getBoundingClientRect();
            
            mouseInitX = e.clientX;
            mouseInitY = e.clientY;
            windowInitX = windowXP.offsetLeft;
            windowInitY = windowXP.offsetTop;

            document.onmouseup = stopDragging;
            document.onmousemove = dragWindow;

        };

        function dragWindow(e) {
            e = e || windowXP.event;
            e.preventDefault();

            var mouseCurrX = e.clientX;
            var mouseCurrY = e.clientY;
            var windowNewX = windowInitX + mouseCurrX - mouseInitX;
            var windowNewY = windowInitY + mouseCurrY - mouseInitY;

            windowMinX = 0;
            windowMinY = 0;
            windowMaxX = window.innerWidth - windowXP.offsetWidth;
            windowMaxY = window.innerHeight - windowXP.offsetHeight;

            windowNewX = Math.max(Math.min(windowNewX, windowMaxX), windowMinX);
            windowNewY = Math.max(Math.min(windowNewY, windowMaxY), windowMinY);

            windowXP.style.left = windowNewX + "px";
            windowXP.style.top = windowNewY + "px";
        };
        
        function stopDragging() {
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
};

