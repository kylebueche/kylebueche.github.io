var windows = [];

window.onload = function() {
	let draggables = document.getElementsByClassName('draggable');
    let buttons = [];
    for (let i = 0; i < draggables.length; i++) {
        buttons.push(document.getElementById(draggables.id + '-button'));
    }
	for (let i = 0; i < buttons.length; i++) {
		let button = buttons[i];
		let windowDiv = draggables[i];
		windowDiv.style.zIndex = 10;
		windows.push(windowDiv);
		button.onmousedown = function() { openWindow(windowDiv); };
		windowDiv.onmousedown = function() { putWindowOnTop(windowDiv); };
		windowDiv.querySelector('[aria-label=Close]').onmousedown = function() { closeWindow(windowDiv); };
		makeDraggable(windowDiv);
    }
}

// Keep windows in viewport
window.onresize = function() {
    for (let i = 0; i < windows.length; i++) {
        let win = windows[i];
        let winMinX = 0;
        let winMinY = 0;
        let winMaxX = window.innerWidth - win.offsetWidth;
        let winMaxY = window.innerHeight - win.offsetHeight;
        let winNewX = Math.max(Math.min(win.offsetLeft, winMaxX), winMinX);
        let winNewY = Math.max(Math.min(win.offsetTop, winMaxY), winMinY);
        win.style.left = winNewX + "px";
        win.style.top = winNewY + "px";
    }
}

// 3-based z-indexing.
function putWindowOnTop(windowDiv)
{
    for (let i = 0; i < windows.length; i++) {
        if (windowDiv.style.zIndex <= windows[i].style.zIndex) {
            windowDiv.style.zIndex = parseInt(windows[i].style.zIndex) + 1;
        }
    }
}

function openWindow(windowDiv) {
    if (!windowDiv.isOpen) {
        putWindowOnTop(windowDiv);
        windowDiv.style.transition = "0s";
        windowDiv.style.transform = "scale(0)";
        windowDiv.style.display = "block";
        void windowDiv.offsetWidth;
        windowDiv.style.transition = "0.5s";
        windowDiv.style.transform = "scale(1)";
        windowDiv.addEventListener("transitionend", function handler() {
            windowDiv.style.transition = "0s";
            windowDiv.removeEventListener("transitionend", handler);
        });
    }
    windowDiv.isOpen = true;
}

function closeWindow(windowDiv) {
    windowDiv.style.transition = "0.5s";
    windowDiv.style.transform = "scale(0)";
    function transitionEnd(e) {
        if (e.propertyName === "transform") {
            windowDiv.style.display = "none";
            windowDiv.removeEventListener("transitionend", transitionEnd);
        }
    }
    windowDiv.addEventListener("transitionend", transitionEnd);
    windowDiv.isOpen = false;
}

function makeDraggable(windowDiv) {
    var mouseInitX = 0, mouseInitY = 0;
    var windowInitX = 0, windowInitY = 0;
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

        let mouseCurrX = e.clientX;
        let mouseCurrY = e.clientY;
        let windowNewX = windowInitX + mouseCurrX - mouseInitX;
        let windowNewY = windowInitY + mouseCurrY - mouseInitY;

        let windowMinX = 0;
        let windowMinY = 0;
        let windowMaxX = window.innerWidth - windowDiv.offsetWidth;
        let windowMaxY = window.innerHeight - windowDiv.offsetHeight;

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
