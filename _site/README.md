# jeff-portfolio
Chuan-Che (Jeff) Huang's Portfolio

## Development Guide
* Install ruby 
  * `brew install ruby`
  * or `brew upgrade ruby`
* Install Jekyll and Bundler
  * gem install bundler jekyll
* Build the site and make it available on a local server
  * bundle exec jekyll serve

## Deployment Guide with Github Pages
* Just push to the master branch. 

## Folder Structure
* _config.yml
* `_includes`: templates 
* `_src`: custom javascript source files
  * The code will get transpiled by webpack and place in `/libs/main.js`
