var windows = [];

window.onload = function() {
	let buttons = [];
	buttons.push(document.getElementById('projects-button'));
	buttons.push(document.getElementById('about-button'));
	for (let i = 0; i < buttons.length; i++) {
		let button = buttons[i];
		let windowDiv = document.getElementById(button.ariaLabel);
		windowDiv.style.zIndex = i + 3;
		windows.push(windowDiv);
		closeWindow(windowDiv);
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
    let currentZIndex = windowDiv.style.zIndex;
    if (currentZIndex != windows.length) {
        for (let i = 0; i < windows.length; i++) {
            if (windows[i].style.zIndex > currentZIndex) {
                windows[i].style.zIndex--;
            }
        }
        windowDiv.style.zIndex++;
    }
}

function openWindow(windowDiv) {
    putWindowOnTop(windowDiv);
    windowDiv.style.display = "block";
}

function closeWindow(windowDiv) {
    windowDiv.style.display = "none";
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
