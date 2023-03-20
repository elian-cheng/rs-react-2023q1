const productData = [
  {
    id: 1,
    title: 'Lenovo IdeaPad L3',
    description: `The Lenovo IdeaPad L3 has everything you need from a laptop for everyday use. However, models with more RAM and high-performance Intel® processors are also available. These are ideal devices for those who need something more than just access to the Internet. An FHD display, stereo speakers and a long battery life let you enjoy your favorite movies and TV series wherever you are. At work, at school and at home, the IdeaPad L3 has a place everywhere.
              Opt for a model with a 10th Gen Intel® Core™ processor and up to 16GB of RAM and a world of new possibilities will open up before you: use demanding applications for photo and video editing, play the latest games and perform many other tasks.
             The Dolby Audio™-enabled speaker system and narrow bezel FHD display are purpose-built to bring your favorite videos to life, immersed in rich colors and surround sound.
             Wherever you go, the IdeaPad L3 is your go-to laptop with up to 11 hours of battery life. And if you do need to recharge, Rapid Charge technology allows you to replenish up to 80% of the charge in less than an hour, and you can immediately return to your activities.`,
    price: 930.85,
    discountPercentage: 12.96,
    rating: 4.75,
    stock: 72,
    color: 'silver',
    brand: 'Lenovo',
    category: 'laptop',
    image: '71742465351-l',
  },
  {
    id: 2,
    title: 'IPhone 9',
    description: `The design of IPhone 9 64GB will repeat the "eighth" version, but the classic body will be thicker to accommodate a larger battery. The round Home button will return, where Touch ID (fingerprint scanner) is located. Most likely, the rear panel of the device will be matte, it will house a mid-range single camera.
    IPhone 9 will appeal to connoisseurs of flagship devices with moderate dimensions and small monitor.
    Part of the internal filling will be taken from last year's top "eleventh" series. The productivity of the 6-core processor of the new generation A13 Bionic will allow the gadget to execute commands and tasks faster by 20%. Its production is based on the 7nm process technology with the 3rd generation Neural Engine system.
    The product with 64 GB of internal memory will be equipped with 3 GB of RAM and a graphics coprocessor of its own brand design. The IPhone 9 runs on the proprietary operating system iOS 13.`,
    price: 256,
    discountPercentage: 5.7,
    rating: 4.69,
    stock: 94,
    color: 'white',
    brand: 'Apple',
    category: 'smartphone',
    image: '71742465251-l',
  },
  {
    id: 3,
    title: 'IPhone X',
    description: `Apple IPhone X is the embodiment of the best innovative solutions. Completely new design with a rethought control system. The bezel-less design takes the user experience to the next level. Body made of glass and metal. The perfect hardware core, thanks to the most powerful internal 64-bit architecture. The dramatically improved world's most popular mobile camera.
      The usual Touch ID fingerprint recognition system has been replaced by a powerful and secure Face ID authentication system - recognizing a user by his face. Powered by machine learning technology, the A11 Bionic recognizes you even in a new look. So experiment with haircuts, wear glasses, change hats. And let your friends wonder if it's you - the IPhone X will never make a mistake.
      The 6-core A11 Bionic processor delivers unparalleled speed for IPhone X. Productivity increased by 25% and energy efficiency by 70%. The new iPhone has become even faster and copes with everyday activities with minimal energy consumption.`,
    price: 381,
    discountPercentage: 12.5,
    rating: 4.87,
    stock: 34,
    color: 'silver',
    brand: 'Apple',
    category: 'smartphone',
    image: '78520465551-l',
  },
  {
    id: 4,
    title: 'Iiyama ProLite',
    description:
      'Iiyama ProLite is a stylish edge-to-edge monitor ideal for multi-monitor setups in both the office and home. IPS panel technology provides accurate and stable color reproduction with wide viewing angles, while 4K resolution allows you to display 4 times more information than a FullHD monitor. In addition, the ProLite XUB2893UHSU is equipped with HDMI and DisplayPort digital inputs, and high contrast and brightness values mean that the monitor will provide excellent performance for photography and web design. The height-adjustable stand makes it easy to adjust the screen to your preference.',
    price: 697.6,
    discountPercentage: 23,
    rating: 4.09,
    stock: 28,
    color: 'black',
    brand: 'Iiyama',
    category: 'monitor',
    image: '96712477511-l',
  },
  {
    id: 5,
    title: 'Oppo A53',
    description: `The lightweight and ultra-thin Oppo A53 is designed to fit comfortably in one hand. And its design, inspired by the shining translucent reflection of ocean waves, makes the look of the smartphone not only elegant, but also attractive.
    Get the most out of everything you do with a screen with a high refresh rate of 90Hz. It not only occupies almost 90% of the entire surface of the front panel, but also provides more comfortable and smooth operation. Watch videos, play games and keep up with the latest trends, enjoying every touch of the display.
    A large capacity 5000 mAh battery combined with support for high-speed 18-watt charging will allow you to focus on your business instead of searching for an outlet. In addition, the phone has an advanced power saving mode, which helps to extend the time of its operation, so that you can stay connected no matter what.
    Thanks to the efficient Qualcomm Snapdragon processor, you can calmly communicate via video call, watch movies and do many other things. No annoying waiting or hangs. What's more, the use of fast LPDDR4x RAM and UFS2.1 type storage further reduces the lag time when launching applications and opening files.`,
    price: 201,
    discountPercentage: 0,
    rating: 4.3,
    stock: 123,
    color: 'blue',
    brand: 'Oppo',
    category: 'smartphone',
    image: '96865477511-l',
  },
  {
    id: 6,
    title: 'Huawei Matebook X Pro',
    description: `Huawei MateBook X Pro is equipped with a sensitive touch screen on which you can perform scrolling, zooming and pressing gestures for even more convenient and intuitive control. Now the touchscreen allows you to take a screenshot in an instant: just swipe the screen with three fingers.
      A professional laptop that does not take up much space in your bag. The elegant diamond-cut and sandblasted metal body is about 14.6mm thick and weighs just 1.33kg. Carry MateBook X Rgo with you always and everywhere.
      Huawei MateBook X Pro is an improved Intel Core i7 processor of the 10th generation, a discrete NVIDIA GeForce MX250 video card, 16 GB of RAM and 1 TB of SSD storage. The power of the laptop is enough to perform all the tasks you need. Thanks to the powerful hardware, Huawei MateBook X Pro supports multitasking, fast image processing and smooth frame changes in games. The updated high-speed Wi-Fi module and the Bluetooth 5.0 standard guarantee a smooth connection.`,
    price: 1075,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    color: 'green',
    brand: 'Huawei',
    category: 'laptop',
    image: '97875477511-l',
  },
  {
    id: 7,
    title: 'Apple MacBook Pro M2',
    description: `Take your work to a new level of professionalism and reach new heights in creativity with the new 13-inch MacBook Pro. It is equipped with a completely new, more productive M2 chip, which makes the laptop even more functional and fast. With a beautiful Retina display, HD FaceTime camera and studio-quality microphones, your work and communication will become even better, and the active cooling system will make sure that the pace does not decrease even during heavy workloads. And all this in an incredibly compact design and with a battery that provides up to 20 hours of battery life.
    The notebook is based on the next generation of Apple M2 chips. This powerful 8-core processor is even faster and more energy efficient than the previous M1. Together with a lightning-fast 10-core GPU, it enables faster processing of photos and videos, creates stunning graphics and works with a large number of 4K and 8K ProRes video streams. And also increases game performance. Thus, this portable professional laptop will allow you to work, create and have fun on a completely different level.
    Focus on what's important to you, and MacBook Pro M2 will make sure you have enough time to do it all. Its battery can provide up to 20 hours of autonomous operation, which allows you to work freely without being tied to one place.`,
    price: 1375,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    color: 'silver',
    brand: 'Apple',
    category: 'laptop',
    image: '97875233511-l',
  },
  {
    id: 8,
    title: 'Samsung Galaxy Book Pro',
    description: `AMOLED display, now also on the Samsung Galaxy Book Pro!
    Enjoy the same vibrant colors, contrast and fast response times as your Samsung Galaxy phone. On an AMOLED screen, games, movies, photos and websites are more accurate and vibrant in color, the screen responds faster and emits less harmful blue light.
    Create a wireless connection and share images, videos or files with other users by pressing the share button and selecting the icons of people nearby. You can also send documents to a group at the same time.
    Connect Samsung Galaxy Book Pro and Samsung Galaxy Buds together. Open the headphone case next to your laptop and the connection is complete. Very simple!
    Connect your home to the network and control all your smart products with SmartThings. Now you can find your Samsung Galaxy book with SmartThings Find.`,
    price: 899,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    color: 'white',
    brand: 'Samsung',
    category: 'laptop',
    image: '12345233511-l',
  },
  {
    id: 9,
    title: 'Apple iPhone 14',
    description: `Meet the new model of the legendary smartphone! The iPhone 14 will be able to please you with an ultra-durable body made of aerospace-grade aluminum and a reliable protected display created by Corning: Ceramic Shield technology. Also, iPhone 14 and iPhone 14 Plus are perfectly resistant to splashes of water and dust thanks to the IP68 standard. The bright and rich Super Retina XDR display will not leave any user indifferent. Improved autonomy allows you to actively use the new iPhone throughout the day. Updated cameras and photo processing algorithms will give you the opportunity to create even better photos even in low light conditions. APPLE iPhone 14 is equipped with a super-fast A15 Bionic processor, which has 5 graphic cores.
      High resolution makes it possible to display the maximum number of details, making the picture more alive and natural. And the special True Tone function will control the brightness and harmful blue radiation from the screen, thanks to which you will be able to better see the image on the display at noon, and when viewing content in the evening and at night (in poor lighting conditions), your eyes will not tire quickly. The diagonal of the iPhone 14 is 6.1 inches.`,
    price: 1087.5,
    discountPercentage: 7.8,
    rating: 5,
    stock: 51,
    color: 'red',
    brand: 'Apple',
    category: 'smartphone',
    image: '23455233511-l',
  },
  {
    id: 10,
    title: 'Apple IPad 10',
    description: `The all-new iPad has been dramatically reimagined to become more functional, more intuitive, and even more exciting. With a new full-screen design, 10.9-inch Liquid Retina display and four gorgeous colors, iPad offers a powerful way to get things done, create and stay connected.
    Get things done—all on one device. Take notes, collaborate, and work seamlessly between apps. From pie charts to pie recipes, iPad is designed for any productivity.
    The A14 Bionic chip provides power and performance for any activity. Edit 4K videos in iMovie, plan a world trip with friends, or play graphics-intensive games. With an all-day battery, you can do everything without missing a second.
    Express yourself, draw and brainstorm on a flexible creative platform. The stunning 10.9-inch Liquid Retina display creates an incredible canvas. So you can draw, take notes, mark up documents and more with Apple Pencil (sold separately).`,
    price: 847,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    color: 'yellow',
    brand: 'Apple',
    category: 'tablet',
    image: '34565233511-l',
  },
  {
    id: 11,
    title: 'HP Victus 16-e0151ur',
    description: `The HP Victus 16 gaming laptop is equipped with a luscious 16.1-inch screen, a powerful AMD Ryzen 5 5600H (Zen 3) 3.3 GHz processor, NVIDIA GeForce® RTX 3050 professional graphics for laptop, and an excellent cooling system. The HP Victus 16 model is interesting for users who often play with a laptop and work with video editors. HP Victus 16 gaming laptop are popular with customers due to the large selection of configurations, the highest quality of goods and an excellent price.`,
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    color: 'black',
    brand: 'HP',
    category: 'laptop',
    image: '11037535671-l',
  },
  {
    id: 12,
    title: 'Realme 9 Pro+',
    description:
      'The Realme 9 Pro+ smartphone has 3 main cameras: 50 + 8 + 4 megapixels that allow you to shoot 4K video, take excellent portraits with bokeh effect, panoramic shots and photos of distant objects, slow motion at 960 fps. The 16 MP front camera makes it possible to take great selfies. The Super AMOLED display with a resolution of 2400x1080 will amaze you with bright, rich and deep blacks. A capacious 4500 mAh battery is enough for a long battery life. The supplied 60W power adapter will help you quickly replenish the charge. An in-display fingerprint scanner and software face unlock protect your data if your device is lost. An NFC module is provided for contactless payment.',
    price: 368,
    discountPercentage: 0,
    rating: 4.58,
    stock: 5,
    color: 'black',
    brand: 'Realme',
    category: 'smartphone',
    image: '71114058551-l',
  },
];

export default productData;
