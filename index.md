---
title: Home
layout: default
tools:
  - Unity
  - Blender
  - Maya
  - Git
  - Linux
  - Vim
  - Emacs
  - Visual Studio
  - OpenCV
  - OpenGL
languages:
  - C
  - C++
  - C#
  - JavaScript
  - HTML
  - CSS
  - Java
  - Python
  - Lisp
  - SQL
---

<!-- Main Window -->
<div id="main-window" class="window">
    <div class="title-bar">
        <div class="title-bar-text">Home</div>
    </div>
    <div class="window-body">
        <article role="tabpanel">
            <div class="row">
                <div class="col">
                    <img src="https://github.com/kylebueche.png" class="circle-img">
                </div>
                <div class="col">
                    <h2>Kyle Bueche</h2>
                </div> 
            </div>
        </article>
        <div class="icon-buttons row center">
            <div class="icon-button col center align-center">
                <i id="about-button" aria-label="about" class="fa-regular fa-circle-user"></i>
                <p class="bold">About Me</p>
            </div>
            <div class="icon-button col center align-center">
                <i id="software-button" aria-label="software" class="fa-regular fa-file-code"></i>
                <p class="bold">Software</p>
            </div>
            <div class="icon-button col center align-center">
                <i id="animation-button" aria-label="animation" class="fa-regular fa-pen-to-square"></i>
                <p class="bold">Animation</p>
            </div>
            <div class="icon-button col center align-center">
                <i id="games-button" aria-label="games" class="fa-regular fa-keyboard"></i>
                <p class="bold">Games</p>
            </div>
            <div class="icon-button col center align-center">
                <i id="contact-button" aria-label="contact" class="fa-regular fa-paper-plane"></i>
                <p class="bold">Contact</p>
            </div>
        </div>
    </div>
</div>

<!-- About Window -->
<div id="about" class="draggable">
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">About Me</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include about.html page=page %}
        </div>
    </div>
</div>

<!-- Software Window -->
<div id="software" class="draggable">
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">Projects</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include projects.html %}
        </div>
    </div>
</div>

<!--  Window -->
<div id="software" class="draggable">
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">Projects</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include projects.html %}
        </div>
    </div>
</div>

<!-- Software Window -->
<div id="software" class="draggable">
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">Projects</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include projects.html %}
        </div>
    </div>
</div>

<!-- Software Window -->
<div id="software" class="draggable">
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">Projects</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include projects.html %}
        </div>
    </div>
</div>
