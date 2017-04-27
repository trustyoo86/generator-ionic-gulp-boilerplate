'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the shining ' + chalk.red('generator-ionic-gulp-boilerplate') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What\'s the app name?',
        default: this.appname
      }, {
        type: 'input',
        name: 'userName',
        message: 'author\'s name?',
        default: this.user.git.name || 'Your name'
      }, {
        type: 'input',
        name: 'userMail',
        message: 'What\'s your mail address?',
        default: this.user.git.email || 'example@example.com'
      }
    ];

    this.prompt(prompts).then(props => {
      this.appName = props.appName;
      this.userName = props.userName;
      this.userMail = props.userMail;

      done();
    }).bind(this);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        appName: this._.underscored(this.appName),
        userName: this.userName,
        userEmail: this.userMail
      }
    );
    this.fs.copy(
      this.templatePath('gulp'),
      this.destinationPath('gulp')
    );

    this.fs.copy(
      this.templatePath('hooks'),
      this.destinationPath('hooks')
    );

    this.fs.copy(
      this.templatePath('public'),
      this.destinationPath('public')
    );

    this.fs.copy(
      this.templatePath('resources'),
      this.destinationPath('resources')
    );

    this.fs.copy(
      this.templatePath('test'),
      this.destinationPath('test')
    );

    this.fs.copy(
      this.templatePath('www'),
      this.destinationPath('www')
    );

    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );

    this.fs.copy(
      this.templatePath('config.xml'),
      this.destinationPath('config.xml')
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('ionic.project'),
      this.destinationPath('ionic.project')
    );

    this.fs.copy(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js')
    );

    this.fs.copy(
      this.templatePath('protractor.conf.js'),
      this.destinationPath('protractor.conf.js')
    );
  }

  install() {
    this.installDependencies();
  }
};
