---
title: Deep Reinforcement Learning for Autonomous Vehicles
summary: Master's thesis training PPO agents to drive in the CARLA simulator, with a focus on cutting training time.
category: ml
period: 2018 to 2019
order: 1
featured: true
links:
  - label: Source on GitHub
    url: https://github.com/bitsauce/Carla-ppo
  - label: Final report
    url: https://github.com/bitsauce/Carla-ppo/blob/master/doc/Accelerating_Training_of_DeepRL_Based_AV_Agents_Through_Env_Designs.pdf
media:
  - image: ./carla_trailing_cam.png
    alt: A car driving down a rural road in CARLA, seen from a trailing camera
  - image: ./carla_state_space.png
    alt: A front camera image next to its semantic segmentation
  - image: ./ppo_training_pipeline.png
    alt: Diagram of the pipeline from camera image through a VAE encoder to the PPO network
  - image: ./training_time.png
    alt: Plot of distance driven against training time for several reward functions
---

Eager to explore a technology that promises to change society, I joined the autonomous vehicle lab at NTNU for my final two semesters. Together with my supervisor, I decided to explore reinforcement learning for autonomous vehicles.

The prospect of an AI that learns to drive and play games by trial and error fascinated me, and the project let me combine my experience with game engines and computer vision. Reinforcement learning for autonomous vehicles typically relies on driving simulators such as [CARLA](https://carla.readthedocs.io/) or [AirSim](https://github.com/Microsoft/AirSim), both of which run on [Unreal Engine 4](https://www.unrealengine.com/).

For the practical part of the project, I implemented OpenAI's [Proximal Policy Optimization](https://arxiv.org/abs/1707.06347) algorithm, which in 2018 was the baseline for general-purpose reinforcement learning.

The main finding of my [preliminary study](https://github.com/bitsauce/CarRacing-v0-ppo/blob/master/Project_Report.pdf) (also see [this video](https://youtu.be/8X_LSy4TF84)) was that scaling the means of the Gaussian action distributions to the range of valid actions had a huge impact. For example, if action 0 controls steering, its valid range might be [-45, 45] degrees. If the network outputs an unbounded mean (effectively [-∞, ∞]), it takes much longer to converge. Scaling the means to the appropriate range for every action substantially increased training speed. To the best of my knowledge, the authors of PPO do not do this, and it is not in OpenAI's [official PPO code](https://github.com/openai/baselines/).

The initial test environment was admittedly simplistic, so I built a custom RL environment in CARLA, which is public in [this repository](https://github.com/bitsauce/Carla-ppo). The more complex environment drastically increased training time, and I spent the second half of my master's searching for a model that would learn to drive reliably within a day. [This video](https://www.youtube.com/watch?v=iF502iJKTIY) shows the results of those experiments, and the [final report](https://github.com/bitsauce/Carla-ppo/blob/master/doc/Accelerating_Training_of_DeepRL_Based_AV_Agents_Through_Env_Designs.pdf) goes into detail.
