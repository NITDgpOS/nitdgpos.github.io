---
layout: project
title: UIP
permalink: projects/UIP
logo: "https://raw.githubusercontent.com/NIT-dgp/UIP-misc/master/artwork/UIP_logo_v4.png"
description: A cross-platfrom desktop application for downloading and scheduling wallpapers.
gallery:
  - title : "on a Linux (Gtk based) desktop"
    url : "https://raw.githubusercontent.com/NIT-dgp/UIP-misc/master/examples/gnome_wallpaper.png"
  - title: "on a Mac (running OS X 10.4 and higher)"
    url : "https://raw.githubusercontent.com/NIT-dgp/UIP-misc/master/examples/mac_wallpaper.png"
  - title: "on a Windows desktop"
    url : "https://raw.githubusercontent.com/NIT-dgp/UIP-misc/master/examples/win_wallpaper.png"
---

**What is UIP?**

**UIP** scrapes images from **reddit**, **desktoppr** and **unsplash**, and
applies them as a wallpaper on your desktop (with a configurable schedule).

Works with all **Windows**, **Mac** and **Linux**(Gtk based) desktops.

***

Installation
------------
```
$ sudo pip3 install UIP
```

Installation from source
------------------------
Requirements:
- `python v3.5` or higher
- `setuptools` package


Unix/Linux based desktops
```
$ git clone https://github.com/NIT-dgp/UIP.git
$ sudo make install
```
Windows
```
$ git clone https://github.com/NIT-dgp/UIP.git
$ python3 setup.py install
```

***

Get started !!
--------------
```
$ UIP
```

Wanna try our **GUI**?
```
$ pip3 install -r gui-requirements.txt
$ UIP --ui
```
>For some OS' you might need to install `ImageTk`(GUI)
seperately!!
>in Ubuntu you can install it by:

```
$ sudo apt-get install python3-pil.imagetk
```

Contact us @ [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/gitterHQ/gitterHQ.github.io.svg)](https://gitter.im/NIT-dgp/General)
