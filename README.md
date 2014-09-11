##### Extra Features
|[less](http://lesscss.org/) | [Jade](http://jade-lang.com/) | [traceur](https://github.com/google/traceur-compiler) | [Reactjs](http://facebook.github.io/react/index.html) | [DI](https://github.com/angular/di.js#a3130ef87a) | [Zone](https://github.com/angular/zone.js#74947b6f509b)| [webpack](https://github.com/webpack/webpack)| [casper](http://casperjs.org/) | [mocha](http://visionmedia.github.io/mocha/) | 
|--- |--- |--- |--- |--- |--- |--- |--- |--- |


this project is showing off reactjs with less version of bootstrap (and some jquery hack)  

# [![Web Starter Kit](https://cloud.githubusercontent.com/assets/170270/3343034/ceef6e92-f899-11e3-96b9-5d9d69d97a00.png)]()

## Quickstart

```sh
$ npm install --global gulp bower phantomjs
```

This will install Gulp, Bower and Phantomjs globally. Depending on your user account, you may need to gain elevated permissions using `sudo` (i.e `sudo npm install --global gulp`). Next, install the local dependencies Web Starter Kit requires:

```sh
$ npm install && bower install
```

That's it! You should now have everything needed to use the Gulp tools in Web Starter Kit.

### Gulp Commands

You can now use Gulp with the following commands to stay productive during development:

#### Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve dev
```
Now direct your browser to `http://localhost:3000/`

#### Watch For Changes, Fully build it & Automatically Re-Run Tests on PhantomJS

```sh
$ gulp serve watch build test
```

#### Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification.



