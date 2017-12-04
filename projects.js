var projects = {
    "overworld": {
        "title": "Overworld",
        "description": "Overworld is a 2D tile based sandbox game written in C++. Inspired by <i>Terraria</i> and <i>Minecraft</i>, \
                        it features: infinite world generation on the GPU, destructible terrain, \
                        inventory and item systems, skeletal animations, in-game chat, and client-server based multiplayer. \
                        The project has been in development since November 2011 \
                        alongside its engine, <a href=\"https://github.com/bitsauce/SuperSauce-Engine\">SuperSauce Engine</a>, \
                        and will continue development in the future.",
        "url": "https://bitsauce.github.io/OverworldGame",
        "images": ["https://i.imgur.com/DaMxNkY.png", "https://i.imgur.com/PIUiQyo.png", "https://i.imgur.com/0deItIz.gif", "https://i.imgur.com/JsgtE0I.png", "https://i.imgur.com/Xecojpd.gif"],
        "icon": "fa-gamepad",
        "category": "Personal"
    },
    "engine": {
        "title": "SuperSauce Engine",
        "description": "SuperSauce Engine is a 2D game engine written in C++ using OpenGL 3.1. \
                        The engine was originally utilizing the Windows API directly, but is now using \
                        the <a href=\"https://www.libsdl.org/\">Simple DirectMedia Library</a> for input and window handling. Main features \
                        include: primitive rendering, GLSL shading, vertex and index buffers, \
                        resource management, matrix classes, and keyboard, mouse, and joystick support.",
        "url": "https://github.com/bitsauce/SuperSauce-Engine",
        "images": ["https://i.imgur.com/jtyPEgA.png", "https://i.imgur.com/7InN3bW.png", "https://i.imgur.com/VLms5pD.png", "https://i.imgur.com/3I5mVXm.png"],
        "icon": "fa-cogs",
        "category": "Personal"
    },
    "hoverlookup": {
        "title": "HoverLookup Chrome Extension",
        "description": "Google Chrome extension written in JavaScript. Pressing CTRL + SHIFT while hovering over a word will show the wiktionary entry for that word in an inline window.\
                        As I was transitioning from Firefox to Chrome, where I had the \
                        <i>Wiktionary and Google Translate</i> add-on installed, I was in need of a similar extension. Thus, I made this extension and later published it to \
                        the Google Web Store (<a href=\"https://chrome.google.com/webstore/detail/hover-lookup/ogjdcbnhgjgabidifpnpiidgbkhlpnof\">link</a>).",
        "url": "https://github.com/bitsauce/HoverLookup_ChromeExtension",
        "images": ["images/hoverlookup_1.png", "images/hoverlookup_2.png", "images/hoverlookup_3.png", "images/hoverlookup_4.png"],
        "icon": "fa-chrome",
        "category": "Personal"
    },
    "tankai": {
        "title": "Tank AI",
        "description": "Framework for an AI competition for the game development student organization <a href=\"https://www.facebook.com/groups/1498086230434830/\">Abakus GameDev</a>. \
                        The game features top-down tank control gameplay, and the goal of the game is to be the last man standing. \
                        Commands are issued using a socket-based solution, and the game is written in Java with <a href=\"https://libgdx.badlogicgames.com/\">libGDX</a>.",
        "url": "https://github.com/bitsauce/AICompo",
        "images": ["images/tankai_1.gif"],
        "icon": "fa-gamepad",
        "category": "Personal"
    },
    "aside": {
        "title": "AngelScript IDE",
        "description": "A simple IDE for the scripting language <a href=\"http://www.angelcode.com/angelscript/\">Angel Script</a> made with <a href=\"https://www.qt.io/\">Qt 4</a> and <a href=\"http://pyqt.sourceforge.net/Docs/QScintilla2/\">QScintilla</a> for syntax highlighting. \
                        Supports opening and creating projects, cascade and tab-based editing, \
                        and simple debug functionality with breakpoint and code-stepping.",
        "url": "https://github.com/bitsauce/ASIDE",
        "images": ["https://i.imgur.com/ucEvRK3.png", "https://i.imgur.com/c9k6v7d.png"],
        "icon": "fa-wrench",
        "category": "Personal"
    },
    "holmgang": {
        "title": "Holmgang (Global Game Jam 16)",
        "description": "<i>Settle your disputes through Holmgang. But pay heed to the rituals, or die like a Niding!</i> \
                        Holmgang is a local 1v1 2D fighting game. In the game, rituals act as gameplay modifiers throughout the fight. \
                        I was primary gameplay programmer in the 4-man team. Made with <a href=\"https://www.yoyogames.com/\">Game Maker Studio</a>",
        "url": "https://github.com/bitsauce/GGJ16",
        "images": ["images/holmgang_1.png", "images/holmgang_2.png", "images/holmgang_3.png"],
        "icon": "fa-gamepad",
        "category": "Collaborative"
    },
    "grabster": {
        "title": "Grabster",
        "description": "Summer job working as a backend and navigation programmer for Grabster's Android app \
                        (<a href=\"https://play.google.com/store/apps/details?id=no.grabster.android\">play store link</a>) \
                        made in <a href=\"https://facebook.github.io/react-native/\">React Native</a>. \
                        Grabster is an app which makes it easy to buy and sell homemade food. Any time you're hungry, you can just pick \
                        up your phone and see what's cooking in your neighborhood. ",
        "url": "http://grabster.no/#/en?_k=ruj3ro",
        "images": ["https://lh3.googleusercontent.com/8ant_pQN91flxx-b-ONa2yLSpM62ko9SheIysXn4q8Ha-4UwUzEavzNSKTrgC7s6dQ=h900-rw", "https://lh3.googleusercontent.com/Ve3ZkrTeMPAJQxa1vygjRpJJ7aXxYeIbmuuDQl-Ybz9B9zRTqIZC8AyJTafgADucBlM=h900-rw"],
        "icon": "fa-android",
        "category": "Collaborative"
    },
    "computer-vision": {
        "title": "Autonomous Vehicle Perception",
        "description": "Trained a region-based deep convolutional network (R-CNN) on the udacity dataset. \
                        Detects all of these 5 classes: cars, trucks, pedestrians, traffic lights and bikers with moderate accuracy. \
                        Written in Python 3 using <a href=\"http://caffe.berkeleyvision.org/tutorial/interfaces.html\">pycaffe</a> -- a port of the deep learning framework, <a href=\"http://caffe.berkeleyvision.org/\">Caffe</a>.",
        "url": "https://github.com/bitsauce/Computer_Vision_Project",
        "images": ["https://i.imgur.com/xiUrNOe.png", "https://i.imgur.com/Ez367bd.png", "https://i.imgur.com/jMw3OMf.png"],
        "icon": "fa-book",
        "category": "School"
    },
    "visual-computing": {
        "title": "Visual Computing Fundamentals",
        "description": "Simple model-view-projection rendering in 3D using C++ with OpenGL 4.3. Supports traditional WASD and mouse camera controls; WASD moves the camera relative to its Z-axis, and the mouse rotates the camera. Shapes can be selected and moved from one cell to another, applying smooth movement between start and destination.",
        "url": "https://github.com/bitsauce/Visual_Computing_Fundementals",
        "images": ["https://i.imgur.com/9QkB6kg.png"],
        "icon": "fa-book",
        "category": "School"
    },
    "compiler-construction": {
        "title": "Compiler Construction",
        "description": "Created a basic compiler for the Very Simple Language (VSL) programming language. Does parsing, tokenizing and generates assembly code for the program. Some features include: lexical scoping, function calls, recursive function calls, branching, while-loops and return statements. Written in C.",
        "url": "",
        "images": ["https://i.imgur.com/mAnSEpH.png"],
        "icon": "fa-book",
        "category": "School"
    }
};