---
title: Autonomous Vehicle Perception
summary: Faster R-CNN trained on the Udacity driving dataset to detect cars, trucks, pedestrians, bikers and traffic lights.
category: ml
order: 5
links:
  - label: Source on GitHub
    url: https://github.com/bitsauce/Computer_Vision_Project
media:
  - image: ./image_0.png
    alt: Street scene with detected pedestrians, cars and a traffic light outlined
  - image: ./image_1.png
    alt: Road with several detected cars and a traffic light outlined
  - image: ./image_2.png
    alt: Tree-lined road with a detected truck and car outlined
---

For my project in *TDT4265: Computer Vision* at NTNU, I trained Faster R-CNN on the [Udacity dataset](https://github.com/udacity/self-driving-car). It detects five classes with moderate accuracy: cars, trucks, pedestrians, traffic lights and bikers.

It is written in Python 3 using pycaffe, the Python interface to the [Caffe](http://caffe.berkeleyvision.org/) deep learning framework.
