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
  - HTML/CSS
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
                <div class="col center">
                    <h2>Kyle Bueche</h2>
					<ul>
						<li class="text-md">Software Developer based in Hawaiʻi</li> 
						<li class="text-md">Former Software Engineering Intern at <a target="_blank" class="icon-color bold" href="https://oceanit.com/">Oceanit</a></li>
						<li class="text-md">Senior CS Student at UH Mānoa</li>
					</ul>
                    <p>Contact me at: <p class="grey bold">kyle.bueche@gmail.com</p></p>
                </div> 
            </div>
    </article>
        <div class="icon-buttons row center">
            <div id="about-button" aria-label="about" class="icon-button col center align-center">
                <i class="fa-regular fa-circle-user"></i>
                <p class="bold noselect">About Me</p>
            </div>
            <div id="software-button" aria-label="software" class="icon-button col center align-center">
                <i class="fa-regular fa-file-code"></i>
                <p class="bold noselect">Software</p>
            </div>
            <div id="games-button" aria-label="games" class="icon-button col center align-center">
                <i class="fa-regular fa-keyboard"></i>
                <p class="bold noselect">Games</p>
            </div>
            <div id="animations-button" aria-label="animations" class="icon-button col center align-center">
                <i class="fa-regular fa-pen-to-square"></i>
                <p class="bold noselect">Animations</p>
            </div>
            <div id="contact-button" aria-label="contact" class="icon-button col center align-center">
                <i class="fa-regular fa-paper-plane"></i>
                <p class="bold noselect">Links</p>
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
            <div class="title-bar-text">Software</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include projects.html page=page %}
        </div>
    </div>
</div>

<!-- Games Window -->
<div id="games" class="draggable">
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">Games</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include games.html page=page %}
        </div>
    </div>
</div>

<!-- Animations Window -->
<div id="animations" class="draggable">
    <div id="animations-window" class="window">
        <div class="title-bar">
            <div class="title-bar-text">Animations</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include animations.html page=page %}
        </div>
    </div>
</div>

<!-- Contact Window -->
<div id="contact" class="draggable">
    <div id="contact-window" class="window">
        <div class="title-bar">
            <div class="title-bar-text">Contact</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            {% include contact.html page=page %}
        </div>
    </div>
</div>

{% assign project_pages = site.pages | where: "type", "project" %}
    {% for page in project_pages %}
        {% unless page.draft %}
<div id="{{ page.url }}" class="draggable">
<div class="window project-window">
    <div class="title-bar">
        <div class="title-bar-text">{{ page.title }}</div>
        <div class="title-bar-controls">
            <a href="{{ site.baseurl }}/">
                <button aria-label="Close"></button>
            </a>
        </div>
    </div>
    <div class="window-body">
        <article class="text-lg" role="tabpanel">
            <div class="row between">
                <div class="col between">
                    <div>
                    {{ page.content }}
                    </div>
                    {% if page.sourcecode %}
                    <a class="icon-link" href="{{ page.sourcecode }}" target="_blank">
                        <div class="icon-button project-button row center align-center">
                            <i class="fa-brands fa-github"></i>
                            <h4 class="bold noselect" style="padding-left: 15px; padding-right: 15px;">Check out the source code on Github!</h4>
                        </div>
                    </a>
                    {% endif %}
                </div>
                <div class="col start align-end" style="padding: 10px">
                    {% for imageurl in page.imageurls %}
                    <img class="project-img" src="{{ site.baseurl }}{{ page.img }}/{{ imageurl }}" alt="{{ imageurl }}">
                    {% endfor %}
                    {% for videourl in page.videourls %}
                    <video class="project-img" controls>
                        <source type="video/mp4" src="{{ site.baseurl }}{{ page.img }}/{{ videourl }}" alt="{{ videourl }}">
                    </video>
                    {% endfor %}
                </div>
            </div>
        </article>
    </div>
</div>
</div>
    {% endunless %}
{% endfor %}
