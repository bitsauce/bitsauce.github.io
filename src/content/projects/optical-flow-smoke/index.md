---
title: Optical Flow-Based Smoke
summary: Smooth real-time smoke and explosion effects by blending pre-rendered frames with optical flow maps.
category: graphics
period: "2018"
order: 5
links:
  - label: Source on GitHub
    url: https://github.com/asbjornlystrup/Realtime_VFX
media:
  - video: /media/optical-flow-smoke/image_0.mp4
    poster: ./image_0.jpg
    alt: A billboard smoke effect animating smoothly against a dark sky
---

As part of *CSE 163: Advanced Computer Graphics* at UCSD in spring 2018, we set out to replicate the smooth smoke and explosion effects found in many modern games, such as *Star Citizen*. The implementation uses optical flow maps to blend between pre-rendered frames, simulating smooth motion.

- Alpha, diffuse, normal and optical flow maps are pre-computed by simulating the effect in 3ds Max with the FumeFX plugin.
- A shader uses the optical flow maps to smoothly blend the transitions between pre-computed frames.
- A simple Phong shader is applied to the 2D billboard to give the effect some depth.
- It runs in real time at almost no performance cost.

The floating crosses are watermarks from the free version of FumeFX.
