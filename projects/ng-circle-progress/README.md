# ng-circle-progress

## Demo

[Try out the demo!](https://bootsoon.github.io/ng-circle-progress/)

[![demo](https://raw.githubusercontent.com/bootsoon/ng-circle-progress/master/demo.png)](https://bootsoon.github.io/ng-circle-progress/)

## About

It is a simple circle progress component created for [angular](https://angular.io) based only on SVG graphics and has various of options to customize it.

## Installation

To install this library, run:

### Angular 10 or Angular 9  projects

```bash
$ npm install ng-circle-progress --save
```

### Angular 8 or Angular 7 or Angular 6  projects

```bash
$ npm install ng-circle-progress@1.5.1 --save
```

### Angular 5 or Angular 4 projects

```bash
$ npm install ng-circle-progress@1.0.0 --save
```

Once you have installed it, you can import it in any Angular application,

then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      ...
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once NgCircleProgressModule is imported, you can use CircleProgressComponent in your Angular application:

```xml
<!-- You can now use it in app.component.html -->
<circle-progress
  [percent]="85"
  [radius]="100"
  [outerStrokeWidth]="16"
  [innerStrokeWidth]="8"
  [outerStrokeColor]="'#78C000'"
  [innerStrokeColor]="'#C7E596'"
  [animation]="true"
  [animationDuration]="300"
></circle-progress>

```

## Options

Option | Type | Default | Description
--- | --- | --- | ---
percent | `number` | `0` | Number of percent you want to show
maxPercent | `number` | `1000` | Max number of percent you want to show
radius | `number` | `90` | Radius of circle
clockwise | `boolean` | `true` | Whether to rotate clockwise or counter-clockwise
responsive | `boolean` | `false` | Whether to make the circle responsive
startFromZero | `boolean` | `true` | Whether to start the percent from zero
showZeroOuterStroke | `boolean` | `true` | Whether to show the bar if percent is zero
showTitle | `boolean` | `true` | Whether to display title
showSubtitle | `boolean` | `true` | Whether to display subtitle
showUnits | `boolean` | `true` | Whether to display units
showImage | `boolean` | `true` | Whether to display image. All text will be hidden if showImage is true.
showBackground | `boolean` | `true` | Whether to display background circle
showInnerStroke | `boolean` | `true` | Whether to display inner stroke
backgroundStroke | `string` | `'transparent'` | Background stroke color
backgroundStrokeWidth | `number` | `0` | Stroke width of background circle
backgroundPadding | `number` | `5` | Padding of background circle
backgroundGradient | `boolean` | `false` | Make background gradient
backgroundColor | `string` | `'transparent'` | Background color
backgroundGradientStopColor | `string` | `'transparent'` | Background gradient stop color
backgroundOpacity | `number` | `1` | Opacity of background color
space | `number` | `4` | Space between outer circle and inner circle
toFixed | `number` | `0` | Using fixed digital notation in Title
renderOnClick | `boolean` | `true` | Render when component is clicked
units | `string` | `'%'` | Units showed aside the title
unitsFontSize | `string` | `'10'` | Font size of units
unitsFontWeight | `string` | `'100'` | Font weight of units
unitsColor | `string` | `'#444444'` | Font color of units
outerStrokeWidth | `number` | `8` | Stroke width of outer circle (progress circle)
outerStrokeGradient | `boolean` | `false` | Make outer circle gradient
outerStrokeColor | `sting` | `'#78C000'` | Stroke color of outer circle
outerStrokeGradientStopColor | `string` | `'transparent'` | Stroke gradient stop color of outer circle
outerStrokeLinecap | `sting` | `'round'` | Stroke linecap of outer circle. Possible values(butt, round, square, inherit)
innerStrokeWidth | `number` | `4` | Stroke width of inner circle
innerStrokeColor | `sting` | `'#C7E596'` | Stroke color of inner circle
title | `string\|Array<String>` | `'auto'` | text showed as title. Percentage is displayed when title equals 'auto'.
titleFormat | `Function` | `undefined` | A callback function to format title. It returns a string or an array of string.
titleColor | `string` | `'#444444'` | Font color of title
titleFontSize | `string` | `'20'` | Font size of title
titleFontWeight | `string` | `'100'` | Font weight of title
subtitle | `string\|Array<String>` | `'Percent'` | text showed as subtitle
subtitleFormat | `Function` | `undefined` | A callback function to format subtitle. It returns a string or an array of string.
subtitleColor | `string` | `'#A9A9A9'` | Font color of subtitle
subtitleFontSize | `string` | `'10'` | Font size of subtitle
subtitleFontWeight | `string` | `'100'` | Font weight of subtitle
imageSrc | `string` | `'/assets/images/music.svg'` | Src of image
imageHeight | `number` | `80` | Height of image
imageWidth | `number` | `80` | Width of image
animation | `boolean` | `true` | Whether to animate the outer circle when rendering
animateTitle | `boolean` | `true` | Whether to animate the title when rendering
animateSubtitle | `boolean` | `false` | Whether to animate the subtitle when rendering
animationDuration | `number` | `500` | Duration of animation in microseconds
class | `string` | `''` | CSS class name for SVG element
lazy | `boolean` | `false` | Pauses when out of viewport


```typescript
// subtitleFormat callback example
formatSubtitle = (percent: number) : string => {
  if(percent >= 100){
    return "Congratulations!"
  }else if(percent >= 50){
    return "Half"
  }else if(percent > 0){
    return "Just began"
  }else {
    return "Not started"
  }
}

```

## License

MIT © [bootsoon](mailto:bootsoon@aliyun.com)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Code scaffolding

Run `ng generate component component-name --project ng-circle-progress` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-circle-progress`.
> Note: Don't forget to add `--project ng-circle-progress` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-circle-progress` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ng-circle-progress`, go to the dist folder `cd dist/ng-circle-progress` and run `npm publish`.

## Running unit tests

Run `ng test ng-circle-progress` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
