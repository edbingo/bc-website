# bc-website
Website for the Student Organistation [Bündnerclub Zürich](https://buendnerclub.ch) created with Jekyll

## Installing Ruby

Assuming a Linux install environment, first install RVM following instructions from [rvm.io](https://rvm.io/). Then install Ruby 3.3.0 with ```rvm install 3.3.0```. Set the default Ruby version with ```rvm use 3.3.0 --default```.

## How to run locally

All Ruby deps can be installed by running ```bundle install```

Additionally libvips is required for the image processing. 

Ubuntu: ```sudo apt install libvips-tools```

Arch: ```sudo pacman -S libvips```

To run the website locally run ```bundle exec jekyll serve``` and open [http://localhost:4000](http://localhost:4000) in your browser

The website can be build with ```bundle exec jekyll build```, and is written to the _site folder

## How to manage website

### Events

#### Creating events

A file needs to be created for each event in the current semester and placed in the ```events/posts``` folder. The file name needs to be in the format ```YYYY-MM-DD-<name>.md```. The date should be set to the intended publish date of the post. If the post is hidden, the date is irrelevant. The file needs to contain the following header:

```yaml
---
layout: post # required

name: "Event" # Name of Event
day: "2023-12-31" # Day of Event
location: "Zürich" # Precise location of Event
hidden: true # Set to false once blog entry is written
---
```

At the start of a semester, an events table is extrapolated from all available articles, however it may not be desired to write a blog entry for each event at this time. Blog entries should be written a few weeks before the event, when details become available. As such, once a blog entry should be visible, the header should include following front matter:

```yaml
---
layout: post # required

title: "Title of Post" # title of blog entry on home page
image: "/assets/img/blog/headerImage.jpg" # header image
alt: "alt text for image" # alt text for header image

name: "Event" # Name of Event
day: "2023-12-31" # Day of Event
location: "Zürich" # Precise location of Event
hidden: false # Can be omitted
---
```

Pictures can be added to the blog entry by adding the following front matter:

```yaml
---
pictures:
  - /assets/img/blog/event/picture1.jpg
  - /assets/img/blog/event/picture2.jpg
---
```

Multiple pictures will automatically be shown in a carousel.

If an event is hidden with the option, it will not be shown on the home page, but will still be shown in the events table. Upon changing the hidden option, a link is automatically added to the table.

The header image is automatically cropped to 16:9 format and compressed.

At the end of the semester, all past events should be moved from ```events/_posts``` to the ```archive/_posts``` folder.

#### Additional header options

```yaml
---
signup_text: Gästeliste
signup: "https://files.buendnerclub.ch/index.php/apps/forms/s/..."
map: "https://www.google.com/maps/embed?pb=..."
---
```

Following additional header options are available for formatting the homepage:

```signup_text``` and ```signup``` are used to add a button to the blog entry. ```signup``` should be a link to a form, and ```signup_text``` is the text on the button. It should be noted that both options are required for the button to be shown.

```map``` is used to add a map to the blog entry. It should be a link to a Google Maps embed.

### Blog

Other Entries not related to events should be placed in the ```admin/_posts``` folder. The file name needs to be in the same format as for events. The header should contain the following front matter:

```yaml
---
layout: post
title: "Title of Post"
image: "/assets/img/blog/headerImage.jpg"
alt: "alt text for image"
---
```

Additional header options include only ```signup``` and ```signup_text```.

### About Page

The about page shows the statutes of the club. The pdf file is stored in ```assets/pdf/Statuten-2023.pdf``` and can be replaced by changing the front matter.

The members of the board are stored in ```_data/board.yml```. The file should contain the following format:

```yaml
- name: "Name of Person"
  role: "Role in club"
  img: "/assets/img/vorstand/portrait.jpg" # image of person
  url: "https://google.com/" # can optionally also have a link to social media pages
```

Important links for the email and social media icons are stored in the config file ```_config.yml```, where they can be changed site wide.

Old board members are stored in ```_data/alter_vorstand.csv```.


