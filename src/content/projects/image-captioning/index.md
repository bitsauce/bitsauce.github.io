---
title: Image Captioning
summary: A CNN and LSTM network that generates natural-language captions for images, trained on Flickr8k.
category: ml
order: 4
media:
  - image: ./sample_0.png
    alt: A football game photo with the generated caption and reference captions above it
  - image: ./sample_1.png
    alt: A golden retriever running on grass with the generated caption and references
  - image: ./sample_2.png
    alt: A snowboarder mid-jump with the generated caption and references
  - image: ./model.png
    alt: Diagram of a pretrained CNN feeding image features into an LSTM caption generator
---

As part of *CSE 190: Neural Networks* at UCSD, we built a deep neural network that automatically captions images.

A convolutional neural network (CNN) extracts features from the image, which are passed to a recurrent neural network (RNN) that generates the caption. The network was trained on the [Flickr8k dataset](https://hockenmaier.cs.illinois.edu/8k-pictures.html).
