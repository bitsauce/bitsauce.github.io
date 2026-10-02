---
title: Screen-Space Soft Shadows
summary: Interactive soft shadows using axis-aligned filtering of ray-traced occlusion, built with NVIDIA OptiX.
category: graphics
period: "2018"
order: 4
featured: true
links:
  - label: Write-up
    url: https://bitsauce.github.io/Axis-Aligned-Filtering-Soft-Shadows/
media:
  - image: ./image_0.png
    alt: Two boxes casting soft shadows onto a floor between red and green walls
  - image: ./image_1.png
    alt: The same box scene rendered with noisier sampled shadows
  - image: ./image_2.png
    alt: A flower casting a soft shadow onto a plane
  - image: ./image_3.png
    alt: Comparison grid of the flower scene with magnified penumbra insets
  - image: ./image_4.png
    alt: A perforated slab casting a grid of soft shadows onto the ground
  - image: ./image_5.png
    alt: Comparison grid of the slab scene with magnified penumbra insets
  - image: ./image_6.png
    alt: Heatmaps of occluder distances used to compute the filter widths
---

As part of *CSE 274: Selected Topics in Graphics* at UCSD in winter 2018, a course about sampling and reconstruction of visual appearance, we explored reconstruction of interactive soft shadows. For the practical part of the course we implemented the paper [Axis-Aligned Filtering for Interactive Sampled Soft Shadows](https://doi.org/10.1145/2366145.2366182).

In this method:

- Soft shadows are rendered by applying a spatially varying screen-space Gaussian blur, where the amount of blurring is determined by analyzing the frequencies of the occlusion spectrum.
- The soft shadow rendering equation is solved by Monte Carlo sampling of points on a *planar* light source.
- *Adaptive sampling* makes sure regions with high uncertainty get more samples, reducing overall noise.

Our results:

- Interactive frame rates of about 5 to 30 FPS on an NVIDIA GTX 970.
- No temporal noise, although complex geometry (such as the flower) causes some visible smudging in the penumbras.

Our implementation uses NVIDIA's [OptiX](https://developer.nvidia.com/rtx/ray-tracing/optix) framework for real-time ray tracing. A more detailed write-up is available on the [project page](https://bitsauce.github.io/Axis-Aligned-Filtering-Soft-Shadows/).
