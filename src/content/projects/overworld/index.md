---
title: Overworld
summary: A 2D tile-based sandbox game in C++ with infinite GPU world generation, dynamic lighting and multiplayer.
category: graphics
period: 2011 to 2019
order: 2
featured: true
links:
  - label: Project page
    url: https://bitsauce.github.io/OverworldGame
media:
  - image: ./overworld_1.png
    alt: Overworld surface with trees, grass and caves lit by soft 2D lighting
  - image: ./overworld_2.png
    alt: Two players chatting in Overworld with the in-game chat and hotbar visible
  - video: /media/overworld/overworld_3.mp4
    poster: ./overworld_3.jpg
    alt: A player exploring a dark cave lit by a torch
  - image: ./overworld_4.png
    alt: Underground caves lit by colored light sources
  - video: /media/overworld/networking_showcase.mp4
    poster: ./networking_showcase.jpg
    alt: Two game clients side by side showing client-server multiplayer
---

Overworld was a 2D tile-based sandbox game written in C++ that I developed in my spare time from late 2011 to 2019.

The project started off as a testbed for the features of my game engine, [Sauce3D](/projects/sauce3d/), which was being developed alongside the game. Eventually I started to dedicate more time to it, as I had many ideas for how the game would set itself apart from similar games such as *Minecraft* and *Terraria*.

The game has the following features:

- Infinite world generation on the GPU
- Destructible terrain with seamless tiles
- Dynamic and static 2D lighting
- Socket-based (UDP) client-server multiplayer through [RakNet](http://www.jenkinssoftware.com/)
- 2D skeletal animation system
- Items and inventory system
- Menus and in-game chat

The project taught me to:

- Use the GPU for general-purpose computation, significantly reducing the workload on the CPU.
- Design structures and apply design patterns that give the programmer easy access to resources.
- Manage Visual Studio projects with complicated dependencies, with a focus on out-of-the-box compilation.
- Avoid overscoping so I could reach a minimum viable product sooner.
