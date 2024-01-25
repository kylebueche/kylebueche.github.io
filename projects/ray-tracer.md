---
layout: project
type: project
image: img/RayTracer.png
title: "Ray Tracer From Scratch in C"
date: 2023-09-03
published: true
labels:
  - C
  - Windows GDI
  - In Progress
summary: "A ray tracer in windows built entirely from scratch."
---

First things first, this project is incomplete. The good news? Heres a yellow screen!

<img class="img-fluid" src="../img/RayTracer.png">

#### First Attempt

During my first attempt at this project, I was researching the math behind ray tracers. I wanted to write everything myself, and I was working in one file. Quickly things began to get messy.

I decided to forego all the vector math, in an effort to just have a color appear on the screen. Nothing showed up, but I had successfully opened a window!

#### Square One

At this point, I decided to just restart. I created a new file main.c where I opened the window, and created the gameloop.

The process of opening a window in c with no libraries is a bit complicated, but it boils down to creating a window "class" (not an object-oriented-programming class), registering the class, creating the window, and showing the window.

The reason we do this is that Windows needs to build a bridge between your code and their built in window interface. The code is a little long and hard to make sense of from a glance, so I won't be showing it here.

The window making process also requires us to create a function that handles each of its cases, and sends the unhandled ones to the default handler. One of these cases is WM_PAINT, which allows us to paint the screen. My code for that segment looks like this:

```c
case WM_PAINT:
{
    static PAINTSTRUCT paint;
    static HDC device_context;
    device_context = BeginPaint(window_handle, &paint);
    BitBlt(device_context,
           paint.rcPaint.left, paint.rcPaint.top,
           paint.rcPaint.right - paint.rcPaint.left,
           paint.rcPaint.bottom - paint.rcPaint.top,
           frame_device_context,
           paint.rcPaint.left, paint.rcPaint.top,
           SRCCOPY);
    EndPaint(window_handle, &paint);
}
break;
```

This code looks at frame_device_context which contains the pixel array that we copy over to the screen.

```c
while (!quit)
{
    static MSG message = { 0 };
    while (PeekMessage(&message, NULL, 0, 0, PM_REMOVE))
    {
        TranslateMessage(&message);
        DispatchMessage(&message);
    }
    /* This is where we do everything for the game. */
    for (x = 0; x < pixelGrid.width; x++)
    {
        for (y = 0; y < pixelGrid.height; y++)
        {
            pixelGrid.pixels[(y * pixelGrid.width + x)] = 0x00ffff00;
        }
    }
    InvalidateRect(window_handle, NULL, FALSE);
    UpdateWindow(window_handle);
}
```

pixelGrid.pixels is a pointer to our pixel grid. In the first part of our loop, we handle messages such as window resizing or painting to the screen. Then, we set the rgb values as such: 0x00RRGGBB. At the end of our loop, we invalidate the entire window screen so that it has to be redrawn, and then we update the window. At the start of the loop, the WM_DRAW message will be dispatched to our handler function, which will copy everything from our array to the screen. 0x00ffff00 is the hexadecimal for yellow in 24-bit color. This is how we get our yellow screen above.

The nice thing about this is that we are constantly setting resetting each pixel as fast as we can, so we essentially have a realtime renderer. Let's change the color line to the following:

```c
pixelGrid.pixels[(y * pixelGrid.width + x)] = 0x00010100 * (int) (256 * (pixelGrid.width - x) / pixelGrid.width)
                                            + 0x00000001 * (int) (256 * (pixelGrid.height - y) / pixelGrid.height);
```

Now we have the following gradient:

<img class="img-fluid" src="../img/RayTracer2.png">

And if we resize it:

<img class="img-fluid" src="../img/RayTracer3.png">
