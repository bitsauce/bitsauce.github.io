var projectTabs = {
    "Graphics & Games": {
        "overworld": {
            title: "Overworld",
            description:
            `
                <p>
                    Overworld is a 2D tile-based sandbox game written in C++
                    that I have been in developing in my spare time since
                    late 2011.
                    
                    The project started of as a testbed for testing the features
                    of my game engine,
                    <a href=\"https://github.com/bitsauce/Sauce2D\">Sauce2D</a>,
                    which was being developed alongside the game.
                    Eventually, I started to dedicate more time to this project, as I
                    had many ideas of how this game would differentiate itself
                    from similar games such as <i>Minecraft</i> and <i>Terraria</i>.
                    
                    The goal would later become create a fully-fledged
                    game that would compete with these games, however,
                    the project was put on hold due to increased workload of my studies,
                    in addition to a slight shift in interests.
                </p>
                <p>
                    The game has the following features in its current state:
                </p>
                <ul>
                    <li>Infinite world generation on the GPU</li>
                    <li>Destructible terrain with seamless tiles</li>
                    <li>Dynamic and static 2D lighting</li>
                    <li>Socket based (UDP) client-server multiplayer through <a href=\"http://www.jenkinssoftware.com/\">RakNet</a></li>
                    <li>2D skeletal animation system</li>
                    <li>Items and inventory system</li>
                    <li>Menus and in-game chat</li>
                </ul>

                <p>
                The project taught me to:
                </p>
                <ul>
                    <li>Utilize the GPU for general purpose computations, reducing the workload of the CPU significantly.</li>
                    <li>Design structures and utilize design patterns that allow for easy access of resources for the programmer.</li>
                    <li>Manage Visual Studio projects with complicated dependencies, with a focus on ensuring out-of-the-box compilation.</li>
                    <li>Avoid overscoping to reach a minimum viable product quicker.</li>
                </ul>
            `,
            url: "https://bitsauce.github.io/OverworldGame",
            images: [
                "images/overworld/overworld_1.png",
                "images/overworld/overworld_2.png",
                "images/overworld/overworld_3.gif",
                "images/overworld/overworld_4.png",
                "images/overworld/overworld_5.gif"
            ]
        },
        "engine": {
            title: "Sauce2D",
            description:
            `
            <p>
                Sauce2D is the name of my long-term game engine endeavor
                that has been on-going since mid 2010.
                The project has served as a means for me to develop
                a better understanding of how modern game engines work,
                where many of my design decisions are inspired by
                the designs and systems of other popular game engines and libraries
                such as
                <a href=\"https://www.unrealengine.com/\">Unreal Engine</a>,
                <a href=\"https://libgdx.badlogicgames.com/\">libGDX</a>, and
                <a href=\"https://www.garagegames.com/\">Torque3D</a>.
                I have put great emphasis on ease of use for the programmer
                while also striving for satisfactory run-time performance.
                Sauce2D is written in C++ and uses OpenGL 3 to render geometry to the screen.
                While I started out by using the Windows API to handle the game window
                and to communicate with the operating system,
                I eventually transitioned to use the well-maintained and complete
                <a href=\"https://www.libsdl.org/\">Simple DirectMedia Library</a>
                later on.
            </p>
            <p>
                Here is a summary of the main features of Sauce2D:
            </p>
            <ul>
                <li>Engine:</li>
                <ul>
                    <li>Automatic asset management, ensuring:</li>
                    <ul>
                        <li>Assets are easily available to all game classes.</li>
                        <li>Assets are only loaded once when used multiple times.</li>
                    </ul>
                    <li>Loggings macros that dumps detailed logging information.</li>
                    <li>Scene management with event propagation.</li>
                    <li>Input handling supporting keyboard, mouse, and gamepads.</li>
                </ul>
                <li>Graphics:</li>
                <ul>
                    <li>Simplified primitive rendering (indexed and non-indexed).</li>
                    <li>Sprite batching to reduce draw calls.</li>
                    <li>Bitmap font rendering through <a href=\"http://www.angelcode.com/products/bmfont/\">BMFont</a>.</li>
                    <li>Render targets with customizable formats.</li>
                    <li>Automatic texture atlas generation.</li>
                    <li>Vertex, fragment and geometry shaders.</li>
                    <li>Multiple renter targets.</li>
                    <li>Integer and double precision textures.</li>
                </ul>
                <li>Networking:</li>
                <ul>
                    <li>
                        Networking is not part of the engine. However, it could be
                        easily implemented by, for example, adding
                        <a href=\"http://www.jenkinssoftware.com/\">RakNet</a>
                        to the project as I did in Overworld.
                    </li>
                </ul>
            `,
            url: "https://github.com/bitsauce/SuperSauce-Engine",
            images: [
                "images/sauce2d/sauce2d_1.jpg",
                "images/sauce2d/sauce2d_2.jpg",
                "images/sauce2d/sauce2d_3.jpg",
                "images/sauce2d/sauce2d_4.jpg"
            ]
        },
        "soft-shadows": {
            title: "Screen-Space Soft Shadows",
            description:
            `
            <p>
                As part of taking the course <i>CSE 274 – Selected Topics in Graphics</i> at UCSD winter 2017 – a course about sampling and reconstruction of visual appearance –
                we were interested in exploring the reconstruction of interactive soft shadows. We implemented the paper
                <a href=\"http://graphics.berkeley.edu/papers/UdayMehta-AAF-2012-12/\">Axis-Aligned Filtering for Interactive Sampled Soft Shadows</a>
                for the practical part of the course.
            </p>
            <p>In summary:</p>
            <ul>
                <li>
                    We implemented <a href=\"http://graphics.berkeley.edu/papers/UdayMehta-AAF-2012-12/\">Axis-Aligned Filtering for Interactive Sampled Soft Shadows</a>;
                    a method in which:
                </li>
                <ul>
                    <li>
                        Soft shadows are rendered by applying a spatially-varying screen-space gaussian blur,
                        where the amount of blurring is determined through an analysis of the frequencies
                        of the occlusion spectrum.
                    </li>
                    <li>
                        The soft shadow rendering equation is solved by Monte Carlo sampling,
                        sampling points on a <i>planar</i> light source.
                    </li>
                    <li>
                        The method also uses <i>adaptive sampling</i> to ensure that regions with high uncertainty
                        are sampled more to reduce the overall noise.
                    </li>
                </ul>
                <li>
                Our results:
                </li>
                <ul>
                    <li>
                        We achieved interactive framerates of about 5-30 FPS on a Nvidia GTX 970.
                    </li>
                    <li>
                        No temporal noise, however, there is some visible "smudging" in the penumbras of the shadows caused by complex geometry (e.g. the flower).
                    </li>
                </ul>
                <li>Our implementation uses Nvidia's <a href=\"https://developer.nvidia.com/optix\">OptiX</a> ray-tracing framework for real-time ray-tracing.</li>
                <li>A more detailed write-up of our implementation can be found on <a href=\"https://bitsauce.github.io/Axis-Aligned-Filtering-Soft-Shadows/\">this page</a>.</li>
            </ul>
            `,
            url: "https://bitsauce.github.io/Axis-Aligned-Filtering-Soft-Shadows/",
            images: [
                "images/soft-shadows/image_0.png",
                "images/soft-shadows/image_1.png",
                "images/soft-shadows/image_2.png",
                "images/soft-shadows/image_3.png",
                "images/soft-shadows/image_4.png",
                "images/soft-shadows/image_5.png",
                "images/soft-shadows/image_6.png"
            ]
        },
        "image-and-mesh": {
            title: "Image and Mesh Processing",
            description:
            `
            <p>
                As part of taking the course
                <a href=\"http://cseweb.ucsd.edu/~viscomp/classes/cse163/sp18/163.html\">CSE 163 – Advanced Computer Graphics</a>
                at UCSD spring 2018, we implemented various techniques in image and mesh processing:
            </p>
            <ul>
                <li>Image processing:</li>
                <ul>
                    <li>Brightness, contrast, saturation, gamma adjustment.</li>
                    <li>Quantization and dithering.</li>
                    <li>Integer convolution for blurring, sharpening, and edge detection.</li>
                    <li>Anti-aliased scale and shifting.</li>
                    <li>Non-linear fish-eye filter.</li>
                </ul>
                <li>Mesh processing:</li>
                <ul>
                    <li>Phong-based OpenGL rendering.</li>
                    <li>Edge collapsing.</li>
                    <li>
                        Fast LOD generation by selecting edges that minimized quadric error,
                        as described in Garland's
                        <i><a href=\"https://mgarland.org/files/papers/quadrics.pdf\">Surface Simplification Using Quadric Error Metrics</a></i> paper.
                    </li>
                </ul>
            </ul>
            `,
            url: "https://bitsauce.github.io/Geometric-Modeling-and-Mesh-Simplification/",
            images: [
                "images/image-and-mesh/bunnies.jpg",
                "images/image-and-mesh/flower_quantize_plot.png",
                "images/image-and-mesh/flower_FloydSteinbergDither_plot.png",
                "images/image-and-mesh/mandrill_blur_plot.png",
                "images/image-and-mesh/flower_edgeDetect_plot.png",
                "images/image-and-mesh/wave_size_200_339_scale_plot.png",
                "images/image-and-mesh/shift_animation.gif",
                "images/image-and-mesh/shed.bmp",
                "images/image-and-mesh/mandrill.bmp"
            ]
        },
        "holmgang": {
            title: "Holmgang (Global Game Jam 16)",
            description:
            `
                <i>Settle your disputes through Holmgang. But pay heed to the rituals, or die like a Niding!</i>
                Holmgang is a local 1v1 2D fighting game. In the game, rituals act as gameplay modifiers throughout the fight.
                I was primary gameplay programmer in the 4-man team. Made with <a href=\"https://www.yoyogames.com/\">Game Maker Studio</a>"
            `,
            url: "https://github.com/bitsauce/GGJ16",
            images: [
                "images/holmgang/holmgang_1.png",
                "images/holmgang/holmgang_2.png",
                "images/holmgang/holmgang_3.png"
            ]
        },
        "unreal-projects": {
            title: "Unreal Engine Projects",
            description:
            `
            
            `,
            url: "",
            images: ["images/visual-computing-fundamentals/visual-computing-fundamentals_1.jpg"]
        },
        "tankai": {
            title: "Tank AI",
            description:
            `
                Framework for an AI competition for the game development student organization <a href=\"https://www.facebook.com/groups/1498086230434830/\">Abakus GameDev</a>.
                The game features top-down tank control gameplay, and the goal of the game is to be the last man standing.
                Commands are issued using a socket-based solution, and the game is written in Java with <a href=\"https://libgdx.badlogicgames.com/\">libGDX</a>.
            `,
            url: "https://github.com/bitsauce/AICompo",
            images: ["images/tankai_1.gif"]
        },
        "visual-computing": {
            title: "Visual Computing Fundamentals",
            description:
            `
                Simple model-view-projection rendering in 3D using C++ with OpenGL 4.3.
                Supports traditional WASD and mouse camera controls; WASD moves the camera relative to its Z-axis,
                and the mouse rotates the camera. Shapes can be selected and moved from one cell to another,
                applying smooth movement between start and destination.
            `,
            url: "https://github.com/bitsauce/Visual_Computing_Fundementals",
            images: ["images/visual-computing-fundamentals/visual-computing-fundamentals_1.jpg"]
        }
    },
    "Machine Learning": {
        "reinforcement-learning": {
            title: "Deep Reinforcement Learning for Autonomous Vehicles – <p/> Master's Thesis (on-going)",
            description:
            `
            <p>
                Eager to explore a frontier of technology
                that promise to change society as we know it, I joined the
                autonomous vehicle lab for my final two semesters at NTNU.
                In accordance with my supervisor, I determined my role
                in the team would be to explore reinforcement learning –
                a sub-field of machine learning that focuses on creating
                agents that act in a way that maximizes its utility with
                respect to a predetermined goal.
                The prospect of creating artificial intelligence that
                can learn to drive and play games by trial-and-error
                was fascinating to me, and is also a project
                that allows me to combine my experience with
                game engines and computer vision – reinforcement learning
                for autonomous vehicles typically use driving simulators
                such as <a href=\"https://carla.readthedocs.io/\">CARLA</a> or
                <a href=\"https://github.com/Microsoft/AirSim\">AirSim</a>,
                both of which are simulators that run on
                <a href=\"https://www.unrealengine.com/">Unreal Engine 4</a>.
            </p>
            <p>
                For the practical part of this project, I have thus far implemented the
                <a href=\"https://blog.openai.com/openai-baselines-ppo/">Proximal Policy Optimization paper</a>
                by OpenAI – a methods that, as of 2018, stands at the baseline in
                general-purpose reinforcement learning.
                I have experimented with a variety of models to find out
                which model learns the fastest. My main finding in this
                precursory study was that it was hugely impactful to scale
                the means of the gaussian distributions to the range of
                valid actions; for example, if action 0 represents the
                turning of the car, then its valid range of values might be
                [-45, 45] degrees. If the network is outputting an unbounded
                range of values (effectively [-∞, ∞]) for the action mean,
                it will take much longer for the network to converge.
                Scaling the means to the appropriate range for every action
                turned out to substantially increase training speed, and this
                operation is, to the best of my knowledge, not used by the
                authors of PPO nor is it present in the 
                <a href=\"https://github.com/openai/baselines/\">official PPO source code</a>
                from OpenAI.
                A report comparing the 5 models I tested can be found
                <a href=\"https://github.com/bitsauce/CarRacing-v0-ppo/blob/master/Project_Report.pdf\">here</a>,
                along with a video of the results which can be found <a href=\"https://youtu.be/8X_LSy4TF84\">here</a>.
            </p>
            <p>
                So far, my experiments have been done in the OpenAI gym
                environment called 
                <a href=\"https://gym.openai.com/envs/CarRacing-v0/">CarRacing-v0</a>.
                The environment is admittedly
                a bit simplistic compared to real-life driving or other driving
                simulators, such as CARLA and AirSim, so I am currently looking to try
                to train my best PPO model in CARLA to see how it compares
                to e.g. imitation learning and previous reinforcement learning
                methods.
                Additionally, I am interested in expanding range of possible
                driving scenarios in CARLA, by creating an algorithm
                that can import and reconstruct detailed roads as described
                road data formats such as the
                <a href=\"http://www.opendrive.org/">OpenDRIVE</a> format.
                Lastly, I would be interested in trying to speed up the training of the agent;
                this, either by taking some cues from the mid 2018 paper that
                successfully trained a real vehicle to
                <a href=\"https://wayve.ai/blog/learning-to-drive-in-a-day-with-reinforcement-learning">follow a straight road after only 15 minutes of driving</a>,
                or potentially exploring a combination of
                genetic and reinforcement learning algorithms.
            </p>
            `,
            url: "https://github.com/bitsauce/CarRacing-v0-ppo",
            images: [
                "images/reinforcement-learning/image_1.png",
                "images/reinforcement-learning/image_2.png",
                "images/reinforcement-learning/image_3.png"
            ]
        },
        "keypoint-rcnn": {
            title: "Keypoint R-CNN",
            description:
            `
                Extended the Mask R-CNN model to detect human keypoint in images of people as part of the course <a href=\"https://cseweb.ucsd.edu/classes/sp18/cse252C-a/\">CSE 252C - Selected Topics in Vision and Learning</a> at UCSD.
                By adding a keypoint prediction head parallel to the bounding box, classification and mask heads, this model predicts 17 different probability masks (one for each joint of the person)
                denoting the probability of finding a given joint type on a particular location in the image. The model was trained on the
                <a href=\"http://cocodataset.org/#keypoints-2018\">MS COCO human keypoint</a> dataset.
            `,
            url: "https://github.com/bitsauce/Keypoint_RCNN",
            images: [
                "images/keypoint-rcnn/model_overview.png",
                "images/keypoint-rcnn/gt_example.png",
                "images/keypoint-rcnn/predicted_kps_examples.png",
                "images/keypoint-rcnn/prediction_kp_heatmap_2063.png",
                "images/keypoint-rcnn/model_heads.png"
            ]
        },
        "deep-learning-3d": {
            title: "Deep Learning on 3D Data",
            description:
            `
                Evaluated <a href=\"https://arxiv.org/abs/1612.00593\">PointNet</a>, <a href=\"https://arxiv.org/abs/1706.02413\">PointNet++</a>
                and <a href=\"https://arxiv.org/abs/1612.02808\">ShapePFCN</a> for segmenting point cloud data
                of plants in various stages of growth and various environments. Point clouds from the laser scanner
                would often exceed 1 million points, so we experimented with various data preprocessing and architectural
                changes to support these point clouds.
            `,
            url: "",
            images: [
                "images/deep-learning-3d/plant_example.png",
                "images/deep-learning-3d/plant_segmentations.png",
                "images/deep-learning-3d/plant_shapepfcn.png"
            ]
        },
        "image-captioning": {
            title: "Image Captioning",
            description:
            `
                As part of the course <a href=\"https://cse.ucsd.edu/undergraduate/cse-190-topics-computer-science-and-engineering\">CSE 190 - Neural Networks</a>,
                we created a deep neural network for automatic captioning of images.
                The network uses a convolutional neural network (CNN) to generate features, passing the features through
                a recurrent nerual network (RNN) to generate captions for the images.
                The network was trained on the
                <a href=\"http://nlp.cs.illinois.edu/HockenmaierGroup/Framing_Image_Description/KCCA.html\">flickr8k dataset</a>.
            `,
            url: "",
            images: [
                "images/image-captioning/sample_0.png",
                "images/image-captioning/sample_1.png",
                "images/image-captioning/sample_2.png",
                "images/image-captioning/model.png"
            ]
        },
        "computer-vision": {
            title: "Autonomous Vehicle Perception",
            description:
            `
                Trained Faster R-CNN on the <a href=\"https://github.com/udacity/self-driving-car\">udacity dataset</a>
                for my project in <a href=\"https://cse.ucsd.edu/undergraduate/cse-190-topics-computer-science-and-engineering\">TDT4265 - Computer Visison</a>.
                Detects all of these 5 classes: cars, trucks, pedestrians, traffic lights and bikers with moderate accuracy.
                Written in Python 3 using <a href=\"http://caffe.berkeleyvision.org/tutorial/interfaces.html\">pycaffe</a> -- a port of the deep learning framework, <a href=\"http://caffe.berkeleyvision.org/\">Caffe</a>.
            `,
            url: "https://github.com/bitsauce/Computer_Vision_Project",
            images: [
                "images/computer-vision/image_0.png",
                "images/computer-vision/image_1.png",
                "images/computer-vision/image_2.png"
            ]
        }
    },
    "Miscellaneous": {
        "grabster": {
            title: "Grabster",
            description:
            `
                Summer job working as a backend and navigation programmer for Grabster's Android app
                (<a href=\"https://play.google.com/store/apps/details?id=no.grabster.android\">play store link</a>)
                made in <a href=\"https://facebook.github.io/react-native/\">React Native</a>.
                Grabster is an app which makes it easy to buy and sell homemade food. Any time you're hungry, you can just pick
                up your phone and see what's cooking in your neighborhood.
            `,
            url: "http://grabster.no/#/en?_k=ruj3ro",
            images: [
                "https://lh3.googleusercontent.com/8ant_pQN91flxx-b-ONa2yLSpM62ko9SheIysXn4q8Ha-4UwUzEavzNSKTrgC7s6dQ=h900-rw",
                "https://lh3.googleusercontent.com/Ve3ZkrTeMPAJQxa1vygjRpJJ7aXxYeIbmuuDQl-Ybz9B9zRTqIZC8AyJTafgADucBlM=h900-rw"
            ],
            orientation: "portrait"
        },
        "hoverlookup": {
            title: "HoverLookup Chrome Extension",
            description:
            `
                Google Chrome extension written in JavaScript. Pressing CTRL + SHIFT while hovering over a word will show the wiktionary entry for that word in an inline window.\
                As I was transitioning from Firefox to Chrome, where I had the
                <i>Wiktionary and Google Translate</i> add-on installed, I was in need of a similar extension. Thus, I made this extension and later published it to
                the Google Web Store (<a href=\"https://chrome.google.com/webstore/detail/hover-lookup/ogjdcbnhgjgabidifpnpiidgbkhlpnof\">link</a>).
            `,
            url: "https://github.com/bitsauce/HoverLookup_ChromeExtension",
            images: [
                "images/hoverlookup/hoverlookup_1.png",
                "images/hoverlookup/hoverlookup_2.png",
                "images/hoverlookup/hoverlookup_3.png",
                "images/hoverlookup/hoverlookup_4.png"
            ]
        },
        "aside": {
            title: "AngelScript IDE",
            description:
            `
                A simple IDE for the scripting language <a href=\"http://www.angelcode.com/angelscript/\">Angel Script</a> made with <a href=\"https://www.qt.io/\">Qt 4</a> and <a href=\"http://pyqt.sourceforge.net/Docs/QScintilla2/\">QScintilla</a> for syntax highlighting.
                Supports opening and creating projects, cascade and tab-based editing,
                and simple debug functionality with breakpoint and code-stepping.
            `,
            url: "https://github.com/bitsauce/ASIDE",
            images: [
                "https://i.imgur.com/ucEvRK3.png",
                "https://i.imgur.com/c9k6v7d.png"
            ]
        },
        "compiler-construction": {
            title: "Compiler Construction",
            description:
            `
                Created a basic compiler for the Very Simple Language (VSL) programming language.
                Does parsing, tokenizing and generates assembly code for the program.
                Some features include: lexical scoping, function calls, recursive function calls,
                branching, while-loops and return statements. Written in C.
            `,
            url: "",
            images: ["https://i.imgur.com/mAnSEpH.png"]
        }
    }
};