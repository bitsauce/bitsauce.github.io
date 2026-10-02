---
title: Deep Learning on 3D Data
summary: Evaluating PointNet, PointNet++ and ShapePFCN for segmenting laser-scanned point clouds of plants.
category: ml
order: 3
media:
  - image: ./plant_example.png
    alt: A laser-scanned point cloud of a plant rendered in grayscale
  - image: ./plant_segmentations.png
    alt: Grid of plant point clouds with leaves and stems segmented in different colors
  - image: ./plant_shapepfcn.png
    alt: A ShapePFCN segmentation of a plant with the stem in red and leaves in green
---

I evaluated [PointNet](https://arxiv.org/abs/1612.00593), [PointNet++](https://arxiv.org/abs/1706.02413) and [ShapePFCN](https://arxiv.org/abs/1612.02808) for segmenting point clouds of plants at various stages of growth and in various environments.

Point clouds from the laser scanner often exceeded a million points, so we experimented with data preprocessing and architectural changes to support them.
