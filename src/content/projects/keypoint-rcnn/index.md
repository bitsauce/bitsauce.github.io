---
title: Keypoint R-CNN
summary: Mask R-CNN extended with a keypoint head to estimate human poses, trained on MS COCO.
category: ml
period: "2018"
order: 2
links:
  - label: Source on GitHub
    url: https://github.com/bitsauce/Keypoint_RCNN
media:
  - image: ./model_overview.png
    alt: Diagram of the Keypoint R-CNN architecture with class, mask and keypoint heads
  - image: ./gt_example.png
    alt: Ground truth skeletons drawn on snowboarders in a COCO image
  - image: ./predicted_kps_examples.png
    alt: Grid of predicted human keypoints on a variety of COCO images
  - image: ./prediction_kp_heatmap_2063.png
    alt: A baseball pitcher next to the predicted heatmap for each of the 17 joints
  - image: ./model_heads.png
    alt: Layer diagrams of the box, mask and keypoint prediction heads
---

As part of [CSE 252C: Selected Topics in Vision and Learning](https://cseweb.ucsd.edu/classes/sp18/cse252C-a/) at UCSD, I extended the Mask R-CNN model to detect human keypoints in images of people.

A keypoint prediction head is added in parallel to the bounding box, classification and mask heads. It predicts 17 probability masks, one for each joint, giving the probability of finding that joint at each location in the image. The model was trained on the [MS COCO keypoint](https://cocodataset.org/#keypoints-2018) dataset.
