---
title: Sauce3D
summary: A custom C++ and OpenGL game engine with asset management, sprite batching, rigid body physics and a UI system.
category: graphics
period: 2010 to 2019
order: 3
featured: true
links:
  - label: Source on GitHub
    url: https://github.com/bitsauce/Sauce3D
media:
  - video: /media/sauce3d/physics_showcase.mp4
    poster: ./physics_showcase.jpg
    alt: Wireframe rigid bodies colliding in the Sauce3D physics engine
  - video: /media/sauce3d/shadow_casting_2d.mp4
    poster: ./shadow_casting_2d.jpg
    alt: Real-time 2D shadow casting demo
  - video: /media/sauce3d/mandelbrot_zoom.mp4
    poster: ./mandelbrot_zoom.jpg
    alt: A continuous zoom into the Mandelbrot set rendered on the GPU
  - video: /media/sauce3d/gui_showcase.mp4
    poster: ./gui_showcase.jpg
    alt: Buttons, dialogs and input fields from the Sauce3D UI system
  - video: /media/sauce3d/simple_3d.mp4
    poster: ./simple_3d.jpg
    alt: A simple 3D scene rendered with Sauce3D
---

Sauce3D was a custom game engine I worked on from mid-2010 to 2019. Its main purpose was to help me understand how a modern game engine is constructed, and many of its design decisions were inspired by engines and libraries such as [Unreal Engine](https://www.unrealengine.com/), [libGDX](https://libgdx.com/) and [Torque3D](https://torque3d.org/). I put great emphasis on ease of use for the programmer while striving for excellent run-time performance.

Sauce3D is written in C++. It uses OpenGL 3.2 for rendering and [SDL](https://www.libsdl.org/) for window management and communication with the OS.

## Engine

- Automatic asset management, ensuring that:
  - Assets are easily available to all game classes.
  - Assets are only loaded once they are needed.
- Logging macros that can dump detailed information.
- Scene management that automatically propagates events through a scene hierarchy.
- Input handling for keyboard, mouse and gamepads.

## Graphics

- Easy-to-use primitive rendering (indexed and non-indexed).
- `.obj` mesh loading.
- Sprite batching to reduce draw calls.
- Bitmap font rendering through [BMFont](https://www.angelcode.com/products/bmfont/).
- Textures and render targets supporting a variety of formats, including integer and double precision.
- Multiple render targets.
- Automatic texture atlas generation.
- Vertex, fragment and geometry shaders.

## Physics

- A custom rigid body dynamics system that supports up to 1,500 bodies while maintaining 30 FPS on a 2.8GHz Intel i7.

## UI

- Resizable bitmap buttons.
- Modal dialog boxes.
- Single-line input fields.
- Cross-fade transitions.

## Networking

Networking is not part of the engine, but it can easily be added with a library such as [RakNet](http://www.jenkinssoftware.com/), as I did in [Overworld](/projects/overworld/).
