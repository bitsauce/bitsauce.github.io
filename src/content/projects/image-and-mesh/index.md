---
title: Image and Mesh Processing
summary: Image filters, dithering, resampling and quadric error mesh simplification from scratch.
category: graphics
period: "2018"
order: 6
media:
  - image: ./bunnies.jpg
    alt: The Stanford bunny simplified to progressively fewer triangles
  - image: ./flower_quantize_plot.png
    alt: A flower photo quantized to 1, 2, 3, 4 and 8 bits per channel
  - image: ./flower_FloydSteinbergDither_plot.png
    alt: A flower photo with Floyd-Steinberg dithering at several bit depths
  - image: ./mandrill_blur_plot.png
    alt: The mandrill test image blurred with increasing kernel sizes
  - image: ./flower_edgeDetect_plot.png
    alt: Edge detection applied to a flower photo
  - image: ./wave_size_200_339_scale_plot.png
    alt: The Great Wave downscaled with nearest neighbor, hat and Mitchell filters
  - video: /media/image-and-mesh/shift_animation.mp4
    poster: ./shift_animation.jpg
    alt: A checkerboard shifted by sub-pixel amounts with anti-aliasing
  - image: ./shed.png
    alt: A photo of a shed warped with a fish-eye filter
  - image: ./mandrill.png
    alt: The mandrill test image warped with a fish-eye filter
---

As part of [CSE 163: Advanced Computer Graphics](https://cseweb.ucsd.edu/~viscomp/classes/cse163/sp18/163.html) at UCSD in spring 2018, we implemented a range of image and mesh processing techniques.

## Image processing

- Brightness, contrast, saturation and gamma adjustment.
- Quantization and dithering.
- Integer convolution for blurring, sharpening and edge detection.
- Anti-aliased scaling and shifting.
- A non-linear fish-eye filter.

## Mesh processing

- Phong-based OpenGL rendering.
- Edge collapsing.
- Fast LOD generation by selecting the edges that minimize quadric error, as described in Garland's [Surface Simplification Using Quadric Error Metrics](https://mgarland.org/files/papers/quadrics.pdf).
