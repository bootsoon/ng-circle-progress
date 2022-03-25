import { Component, ViewChild } from '@angular/core';
import { CircleProgressComponent, CircleProgressOptions } from 'ng-circle-progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('circleProgress') circleProgress: CircleProgressComponent;

  githubLink = "https://github.com/bootsoon/ng-circle-progress";

  _timer = null;

  controlGroups = [
    {
      groupName: 'Basic', controls: [
        { name: 'percent', type: 'range', min: 1, max: 1000, step: 0.01 },
        { name: 'maxPercent', type: 'range', min: 50, max: 1000, step: 10 },
        { name: 'toFixed', type: 'range', min: 0, max: 5, step: 1 },
        { name: 'showTitle', type: 'checkbox' },
        { name: 'showUnits', type: 'checkbox' },
        { name: 'showSubtitle', type: 'checkbox' },
        { name: 'showBackground', type: 'checkbox' },
        { name: 'showInnerStroke', type: 'checkbox' },
        { name: 'clockwise', type: 'checkbox' },
        { name: 'responsive', type: 'checkbox' },
        { name: 'startFromZero', type: 'checkbox' },
        { name: 'showZeroOuterStroke', type: 'checkbox' },
      ]
    },
    {
      groupName: 'Size', controls: [
        { name: 'radius', type: 'range', min: 20, max: 250, step: 1 },
        { name: 'backgroundPadding', type: 'range', min: -50, max: 50, step: 1 },
      ],
    },
    {
      groupName: 'Color', controls: [
        { name: 'backgroundGradient', type: 'checkbox' },
        { name: 'backgroundOpacity', type: 'range', min: 0, max: 1, step: 0.1 },
        { name: 'backgroundColor', type: 'color' },
        { name: 'backgroundGradientStopColor', type: 'color' },
        { name: 'backgroundStroke', type: 'color' },
        { name: 'outerStrokeGradient', type: 'checkbox' },
        { name: 'outerStrokeColor', type: 'color' },
        { name: 'outerStrokeGradientStopColor', type: 'color' },
        { name: 'innerStrokeColor', type: 'color' },
        { name: 'titleColor', type: 'color' },
        { name: 'unitsColor', type: 'color' },
        { name: 'subtitleColor', type: 'color' },
      ],
    },
    {
      groupName: 'Stroke', controls: [
        { name: 'outerStrokeWidth', type: 'range', min: 1, max: 50, step: 1 },
        { name: 'space', type: 'range', min: -20, max: 50, step: 1 },
        { name: 'innerStrokeWidth', type: 'range', min: 0, max: 50, step: 1 },
        { name: 'backgroundStrokeWidth', type: 'range', min: 0, max: 50, step: 1 },
        { name: 'outerStrokeLinecap', type: 'select', options: ['butt', 'round', 'square', 'inherit'] },
      ],
    },
    {
      groupName: 'Font', controls: [
        { name: 'titleFontSize', type: 'range', min: 10, max: 100, step: 1 },
        { name: 'unitsFontSize', type: 'range', min: 10, max: 100, step: 1 },
        { name: 'subtitleFontSize', type: 'range', min: 10, max: 100, step: 1 },
        { name: 'titleFontWeight', type: 'range', min: 100, max: 900, step: 100 },
        { name: 'unitsFontWeight', type: 'range', min: 100, max: 900, step: 100 },
        { name: 'subtitleFontWeight', type: 'range', min: 100, max: 900, step: 100 },
      ]
    },
    {
      groupName: 'Image', controls: [
        { name: 'showImage', type: 'checkbox' },
        { name: 'imageHeight', type: 'range', min: 20, max: 250, step: 1 },
        { name: 'imageWidth', type: 'range', min: 20, max: 250, step: 1 },
      ]
    },
    {
      groupName: 'Animation', controls: [
        { name: 'animation', type: 'checkbox' },
        { name: 'animateTitle', type: 'checkbox' },
        { name: 'lazy', type: 'checkbox' },
        { name: 'animationDuration', type: 'range', min: 0, max: 10000, step: 100 },
      ]
    },
  ]

  options = new CircleProgressOptions();

  ngCircleOptions = {
    percent: 85,
    radius: 60,
    showBackground: false,
    outerStrokeWidth: 10,
    innerStrokeWidth: 5,
    startFromZero: false,
    outerStrokeColor: null,
    showSubtitle: false,
    subtitleFormat: (percent: number): string => {
      if (percent < 25) {
        this.ngCircleOptions.outerStrokeColor = "red";
      } else if (percent < 50) {
        this.ngCircleOptions.outerStrokeColor = "yellow";
      } else if (percent < 75) {
        this.ngCircleOptions.outerStrokeColor = "blue";
      } else {
        this.ngCircleOptions.outerStrokeColor = "green";
      }
      return '';
    }
  }

  optionsA = {
    percent: 85,
    radius: 60,
    showBackground: false,
    outerStrokeWidth: 10,
    innerStrokeWidth: 5,
    subtitleFormat: false,  // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined. 
    startFromZero: false,
  }

  optionsB = {
    percent: 50,
    maxPercent: 200,
    radius: 60,
    showSubtitle: false,
    showInnerStroke: false,
    outerStrokeWidth: 5,
    outerStrokeColor: '#FFFFFF',
    innerStrokeColor: '#FFFFFF',
    backgroundColor: '#FDB900',
    backgroundStrokeWidth: 0,
    backgroundPadding: 5,
    titleColor: '#483500',
    units: ' Point',
    unitsColor: '#483500',
    subtitleColor: '#483500',
    subtitleFormat: false,  // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined. 
    startFromZero: false,
  }

  optionsC = {
    percent: 99.99,
    radius: 60,
    outerStrokeWidth: 10,
    innerStrokeWidth: 1,
    backgroundColor: '#F1F1F1',
    backgroundPadding: -18,
    backgroundStrokeWidth: 0,
    innerStrokeColor: '#32CD32',
    outerStrokeColor: '#FF6347',
    toFixed: 2,
    subtitleFormat: false,  // clear subtitleFormat coming from other options, because Angular does not assign if variable is undefined. 
    startFromZero: false,
  }

  optionsD = {
    percent: 101,
    maxPercent: 100,
    radius: 60,
    showInnerStroke: false,
    outerStrokeWidth: 10,
    innerStrokeWidth: 0,
    backgroundPadding: -10,
    backgroundStrokeWidth: 0,
    outerStrokeColor: '#61A9DC',
    backgroundColor: '#ffffff',
    backgroundGradientStopColor: '#c0c0c0',
    backgroundGradient: true,
    subtitleColor: '#444444',
    startFromZero: false,
    subtitleFormat: (percent: number): string => {
      if (percent >= 100) {
        return "Congratulations!"
      } else {
        return "Progress"
      }
    }
  }

  optionsE = {
    percent: 75,
    radius: 60,
    outerStrokeWidth: 10,
    innerStrokeWidth: 10,
    space: -10,
    outerStrokeColor: "#4882c2",
    innerStrokeColor: "#e7e8ea",
    showBackground: false,
    title: 'UI',
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 1000,
    startFromZero: false,
    outerStrokeGradient: true,
    outerStrokeGradientStopColor: '#53a9ff',
    lazy: true,
    subtitleFormat: (percent: number): string => {
      return `${percent}%`;
    }
  }

  optionsF = {
    percent: 60,
    radius: 60,
    backgroundPadding: 7,
    outerStrokeWidth: 2,
    innerStrokeWidth: 2,
    space: -2,
    outerStrokeColor: "#808080",
    innerStrokeColor: "#e7e8ea",
    showBackground: true,
    title: ['working', 'in', 'progress'],
    titleFontSize: 12,
    subtitleFontSize: 20,
    animateTitle: false,
    showUnits: false,
    clockwise: false,
    animationDuration: 1000,
    subtitleFormat: (percent: number): string => {
      return `${percent}%`;
    }
  }

  optionsG = {
    percent: 75,
    radius: 60,
    outerStrokeWidth: 5,
    innerStrokeWidth: 5,
    space: -5,
    outerStrokeColor: "#76C2AF",
    innerStrokeColor: "#ffffff",
    showBackground: false,
    showImage: true,
    imageSrc: "assets/images/music.svg",
    imageHeight: 105,
    imageWidth: 105,
  }

  onValueChanged = (event) => {
    try {
      if (event.srcElement.name === 'toFixed') {
        let toFixed = +event.srcElement.value;
        this.controlGroups[0].controls[0]['step'] = 1 / Math.pow(10, toFixed);
      }
    } catch (e) {
      console.error(e)
    }
  }

  copyOptions = (event, options) => {
    this.options = Object.assign({}, this.circleProgress.defaultOptions, options);
  }

  resetOptions = () => {
    this.stop();
    this.options = new CircleProgressOptions();
  }

  start = () => {
    if (this._timer !== null) {
      clearInterval(this._timer);
    }
    this._timer = window.setInterval(() => {
      this.options.percent = (Math.round(Math.random() * 100));
    }, 1000);
  }

  stop = () => {
    if (this._timer !== null) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  destroyed: Boolean = false;

  toggleDestroyed = () => {
    this.destroyed = !this.destroyed;
  }

  getConfiguration = () => {
    // Didn't find a better way to fix "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked."
    return {};
  }

  ngAfterViewInit() {
    // Didn't find a better way to fix "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked."
    this.getConfiguration = () => {
      let configurations = Object.assign({}, this.options);
      delete configurations['percent'];
      delete configurations['subtitleFormat'];
      for (let key of Object.keys(configurations)) {
        if (configurations[key] === this.circleProgress.defaultOptions[key]) {
          delete configurations[key];
        }
      }
      return configurations;
    };
  }  

  public get sourceCode() {
    let json = JSON.stringify(this.getConfiguration(), null, 16).replace(/\n}/g, '}');

    let code = `
    import { NgCircleProgressModule } from 'ng-circle-progress';

    @NgModule({
      //...
      imports: [
        //...
        NgCircleProgressModule.forRoot(${json})
      ],
      //...
    })
    export class AppModule {}
    `.replace(/\n[ ]{4}/g, '\n');
    return code;
  }


}
