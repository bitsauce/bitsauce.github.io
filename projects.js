var projectTabs = {
    "Graphics & Games": {
        "soft-shadows": {
            "title": "Soft Shadows",
            "description": "An implementation of \
                            <a href=\"http://graphics.berkeley.edu/papers/UdayMehta-AAF-2012-12/\">Axis-Aligned Filtering for Interactive Sampled Soft Shadows</a>. \
                            Soft shadows are rendered by applying a spatially-varying screen-space gaussian blur, where the amount of bluring is determined by \
                            an analysis of the frequency spectrum of the occlusions. \
                            Uses Nvidia's <a href=\"https://developer.nvidia.com/optix\">OptiX</a> ray-tracing framework for real-time ray-tracing. \
                            A complete walkthrough of the method is detailed in our <a href=\"https://bitsauce.github.io/Axis-Aligned-Filtering-Soft-Shadows/\">blog post</a>",
            "url": "https://bitsauce.github.io/Axis-Aligned-Filtering-Soft-Shadows/",
            "images": ["images/soft-shadows/image_0.png",
                       "images/soft-shadows/image_1.png",
                       "images/soft-shadows/image_2.png",
                       "images/soft-shadows/image_3.png",
                       "images/soft-shadows/image_4.png",
                       "images/soft-shadows/image_5.png",
                       "images/soft-shadows/image_6.png"]
        },
        "overworld": {
            "title": "Overworld",
            "description": "Overworld is a 2D tile based sandbox game written in C++. Inspired by <i>Terraria</i> and <i>Minecraft</i>, \
                            it features: infinite world generation on the GPU, destructible terrain, \
                            inventory and item systems, skeletal animations, in-game chat, and client-server based multiplayer. \
                            The project has been in development since November 2011 \
                            alongside its engine, <a href=\"https://github.com/bitsauce/SuperSauce-Engine\">SuperSauce Engine</a>, \
                            and will continue development in the future.",
            "url": "https://bitsauce.github.io/OverworldGame",
            "images": ["images/overworld/overworld_1.png",
                       "images/overworld/overworld_2.png",
                       "images/overworld/overworld_3.gif",
                       "images/overworld/overworld_4.png",
                       "images/overworld/overworld_5.gif"]
        },
        "engine": {
            "title": "SuperSauce Engine",
            "description": "SuperSauce Engine is a 2D game engine written in C++ using OpenGL 3.1. \
                            The engine was originally utilizing the Windows API directly, but is now using \
                            the <a href=\"https://www.libsdl.org/\">Simple DirectMedia Library</a> for input and window handling. Main features \
                            include: primitive rendering, GLSL shading, vertex and index buffers, \
                            resource management, matrix classes, and keyboard, mouse, and joystick support.",
            "url": "https://github.com/bitsauce/SuperSauce-Engine",
            "images": ["https://i.imgur.com/jtyPEgA.png",
                       "https://i.imgur.com/7InN3bW.png",
                       "https://i.imgur.com/VLms5pD.png",
                       "https://i.imgur.com/3I5mVXm.png"]
        },
        "holmgang": {
            "title": "Holmgang (Global Game Jam 16)",
            "description": "<i>Settle your disputes through Holmgang. But pay heed to the rituals, or die like a Niding!</i> \
                            Holmgang is a local 1v1 2D fighting game. In the game, rituals act as gameplay modifiers throughout the fight. \
                            I was primary gameplay programmer in the 4-man team. Made with <a href=\"https://www.yoyogames.com/\">Game Maker Studio</a>",
            "url": "https://github.com/bitsauce/GGJ16",
            "images": ["images/holmgang_1.png", "images/holmgang_2.png", "images/holmgang_3.png"]
        },
        "tankai": {
            "title": "Tank AI",
            "description": "Framework for an AI competition for the game development student organization <a href=\"https://www.facebook.com/groups/1498086230434830/\">Abakus GameDev</a>. \
                            The game features top-down tank control gameplay, and the goal of the game is to be the last man standing. \
                            Commands are issued using a socket-based solution, and the game is written in Java with <a href=\"https://libgdx.badlogicgames.com/\">libGDX</a>.",
            "url": "https://github.com/bitsauce/AICompo",
            "images": ["images/tankai_1.gif"]
        },
        "image-and-mesh": {
            "title": "Image and Mesh Processing",
            "description": "As part of CSE 163 - Advanced Computer Graphics, I implemented various techniques used in \
                            image and mesh processing. \
                            \
                            Image processing: Brightness, contrast, stauration, gamma adjustment. \
                            Quantization and dithering. Convolutional filters for blurring, sharpening and edge detection. \
                            Antialiased scale and shifting. Non-linear fish-eye filter. \
                            \
                            Mesh processing: Phong-based OpenGL renderer. Edge Collapsing and Surface Simplification Using Quadratic Error Metrics",
            "url": "https://bitsauce.github.io/Geometric-Modeling-and-Mesh-Simplification/",
            "images": ["images/image-and-mesh/flower_quantize_plot.png",
                       "images/image-and-mesh/flower_FloydSteinbergDither_plot.png",
                       "images/image-and-mesh/mandrill_blur_plot.png",
                       "images/image-and-mesh/flower_edgeDetect_plot.png",
                       "images/image-and-mesh/wave_size_200_339_scale_plot.png",
                       "images/image-and-mesh/shift_animation.gif",
                       "images/image-and-mesh/shed.bmp",
                       "images/image-and-mesh/mandrill.bmp",
                       "images/image-and-mesh/bunnies.png"]
        },
        "visual-computing": {
            "title": "Visual Computing Fundamentals",
            "description": "Simple model-view-projection rendering in 3D using C++ with OpenGL 4.3. Supports traditional WASD and mouse camera controls; WASD moves the camera relative to its Z-axis, and the mouse rotates the camera. Shapes can be selected and moved from one cell to another, applying smooth movement between start and destination.",
            "url": "https://github.com/bitsauce/Visual_Computing_Fundementals",
            "images": ["https://i.imgur.com/9QkB6kg.png"]
        }
    },
    "Machine Learning": {
        "keypoint-rcnn": {
            "title": "Keypoint R-CNN",
            "description": "Extended the Mask R-CNN model to detect human keypoint in images of people as part of the course <a href=\"https://cseweb.ucsd.edu/classes/sp18/cse252C-a/\">CSE 252C - Selected Topics in Vision and Learning</a> at UCSD. \
                            By adding a keypoint prediction head parallel to the bounding box, classification and mask heads, this model predicts 17 different probability masks (one for each joint of the person) \
                            denoting the probability of finding a given joint type on a particular location in the image. The model was trained on the MS COCO human keypoint dataset.",
            "url": "https://github.com/bitsauce/Keypoint_RCNN",
            "images": ["images/keypoint-rcnn/model_overview.png",
                       "images/keypoint-rcnn/gt_example.png",
                       "images/keypoint-rcnn/predicted_kps_examples.png",
                       "images/keypoint-rcnn/prediction_kp_heatmap_2063.png",
                       "images/keypoint-rcnn/model_heads.png"]
        },
        "deep-learning-3d": {
            "title": "Deep Learning on 3D Data",
            "description": "Evaluated PointNet, PointNet++ and ShapePFCN for segmenting point cloud data \
                            of plants in various stages of growth and various environments. Point clouds from the laser scanner \
                            would often exceed 1 million points, so we experimented with various data preprocessing and architectural \
                            changes to support these point clouds.",
            "url": "",
            "images": ["images/deep-learning-3d/plant_example.png",
                       "images/deep-learning-3d/plant_segmentations.png",
                       "images/deep-learning-3d/plant_shapepfcn.png"]
        },
        "image-captioning": {
            "title": "Image Captioning",
            "description": "As part of the course <a href=\"https://cse.ucsd.edu/undergraduate/cse-190-topics-computer-science-and-engineering\">CSE 190 - Neural Networks</a>, \
                            we created a deep neural network for automatic captioning of images. \
                            The network uses a convolutional neural network (CNN) to generate features, passing the features through \
                            a recurrent nerual network (RNN) to generate captions for the images. \
                            The network was trained on the flickr8k dataset.",
            "url": "",
            "images": ["images/image-captioning/sample_0.png",
                       "images/image-captioning/sample_1.png",
                       "images/image-captioning/sample_2.png",
                       "images/image-captioning/model.png"]
        },
        "computer-vision": {
            "title": "Autonomous Vehicle Perception",
            "description": "Trained Faster R-CNN on the udacity dataset for my project in <a href=\"https://cse.ucsd.edu/undergraduate/cse-190-topics-computer-science-and-engineering\">TDT4265 - Computer Visison</a>. \
                            Detects all of these 5 classes: cars, trucks, pedestrians, traffic lights and bikers with moderate accuracy. \
                            Written in Python 3 using <a href=\"http://caffe.berkeleyvision.org/tutorial/interfaces.html\">pycaffe</a> -- a port of the deep learning framework, <a href=\"http://caffe.berkeleyvision.org/\">Caffe</a>.",
            "url": "https://github.com/bitsauce/Computer_Vision_Project",
            "images": ["images/computer-vision/image_0.png",
                       "images/computer-vision/image_1.png",
                       "images/computer-vision/image_2.png"]
        }
    },
    "Miscellaneous": {
        "grabster": {
            "title": "Grabster",
            "description": "Summer job working as a backend and navigation programmer for Grabster's Android app \
                            (<a href=\"https://play.google.com/store/apps/details?id=no.grabster.android\">play store link</a>) \
                            made in <a href=\"https://facebook.github.io/react-native/\">React Native</a>. \
                            Grabster is an app which makes it easy to buy and sell homemade food. Any time you're hungry, you can just pick \
                            up your phone and see what's cooking in your neighborhood. ",
            "url": "http://grabster.no/#/en?_k=ruj3ro",
            "images": ["https://lh3.googleusercontent.com/8ant_pQN91flxx-b-ONa2yLSpM62ko9SheIysXn4q8Ha-4UwUzEavzNSKTrgC7s6dQ=h900-rw", "https://lh3.googleusercontent.com/Ve3ZkrTeMPAJQxa1vygjRpJJ7aXxYeIbmuuDQl-Ybz9B9zRTqIZC8AyJTafgADucBlM=h900-rw"]
        },
        "hoverlookup": {
            "title": "HoverLookup Chrome Extension",
            "description": "Google Chrome extension written in JavaScript. Pressing CTRL + SHIFT while hovering over a word will show the wiktionary entry for that word in an inline window.\
                            As I was transitioning from Firefox to Chrome, where I had the \
                            <i>Wiktionary and Google Translate</i> add-on installed, I was in need of a similar extension. Thus, I made this extension and later published it to \
                            the Google Web Store (<a href=\"https://chrome.google.com/webstore/detail/hover-lookup/ogjdcbnhgjgabidifpnpiidgbkhlpnof\">link</a>).",
            "url": "https://github.com/bitsauce/HoverLookup_ChromeExtension",
            "images": ["images/hoverlookup/hoverlookup_1.png",
                       "images/hoverlookup/hoverlookup_2.png",
                       "images/hoverlookup/hoverlookup_3.png",
                       "images/hoverlookup/hoverlookup_4.png"]
        },
        "aside": {
            "title": "AngelScript IDE",
            "description": "A simple IDE for the scripting language <a href=\"http://www.angelcode.com/angelscript/\">Angel Script</a> made with <a href=\"https://www.qt.io/\">Qt 4</a> and <a href=\"http://pyqt.sourceforge.net/Docs/QScintilla2/\">QScintilla</a> for syntax highlighting. \
                            Supports opening and creating projects, cascade and tab-based editing, \
                            and simple debug functionality with breakpoint and code-stepping.",
            "url": "https://github.com/bitsauce/ASIDE",
            "images": ["https://i.imgur.com/ucEvRK3.png", "https://i.imgur.com/c9k6v7d.png"]
        },
        "compiler-construction": {
            "title": "Compiler Construction",
            "description": "Created a basic compiler for the Very Simple Language (VSL) programming language. Does parsing, tokenizing and generates assembly code for the program. Some features include: lexical scoping, function calls, recursive function calls, branching, while-loops and return statements. Written in C.",
            "url": "",
            "images": ["https://i.imgur.com/mAnSEpH.png"]
        }
    }
};