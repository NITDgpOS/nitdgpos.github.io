NIT DGP Open Source
===================
Made with :heart: via [GitHub Pages][1]

Curious how it works?
---------------------
Prerequisites:
1. Ruby[2] with [jekyll][3] and [bundler][4] gems installed.
> `$ gem install jekyll bundler`

**Follow the steps to test it on your local browser.**

1. Clone this repository. :smile:
> `$ git clone https://github.com/NIT-dgp/nit-dgp.github.io`

2. Run `$ bundle install` to install the dependencies.
( Grab a :coffee: and :sunglasses:, cuz' it takes a while.)

3. `$ bundle exec jekyll serve` to run the server. You're all set.

4. Navigate to `http://localhost:4000/`to view the site.

Adding new projects
===================
Create a new markdown file in `/projects` directory and add the appropriate
**frontmatter** to it.

Frontmatter
-----------
- `layout` : The layout to be used, it should always be `project`.
- `title`: The title of the project.
- `permalink`: The absolute URL for the project.
- `description`: A clear description of what the project is aimed to do.
- `logo`(optional): A link(URI) to the project's logo, if any.
-  `gallery`(optional): A collection in `yaml` consisting of image objects,
with the attributes `title` and `url`, describing the name and link to the
image respectively.

> File name should match frontmatter's title and permalink

eg:
```
---
layout: project
title: ExampleProject
permalink: /projects/ExampleProject
description: An example frontmatter for ExampleProject.
logo: https://example.com/cat-dog-image.png
gallery:
  - title: "Fish"
    url: "https://example.com/fish.png"
  - title: "Cat"
    url: "https://example.com/cat.png"
---
```

[1]:https://pages.github.com
[2]:https://www.ruby-lang.org/en/
[3]:https://jekyllrb.com
[4]:http://bundler.io/
