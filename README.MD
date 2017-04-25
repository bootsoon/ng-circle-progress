# ng-circle-progress

![demo](https://raw.githubusercontent.com/bootsoon/ng-circle-progress/master/demo.png)

## About

It is a simple circle progress component created for Angular(>2) based only on SVG grahphics and has vavrious of options to customize it. 

## Installation

To install this library, run:

```bash
$ npm install ng-circle-progress --save
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
      space: 4,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
      outerStrokeColor: "rgb(120, 192, 0)",
      innerStrokeColor: "rgb(199, 229, 150)",
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
  [outerStrokeColor]="rgb(120, 192, 0)"
  [innerStrokeColor]="rgb(199, 229, 150)"
  [animation]="true"
  [animationDuration]="500"
  ></circle-progress>

```

## Options

Option | Type | Default | Description | Example
--- | --- | --- | --- | ---
class | `string` | `''` | CSS class name for SVG element | `[class]="cursor-pointer"`
backgroundColor | `string` | `'transparent'` | Background color | `[backgroundColor]="'white'"`
backgroundOpacity | `number` | `1` | Opacity of background color | `[backgroundOpacity]="0.8"`
percent | `number` | `0` | Number of percent you want to show | `[percent]="20"`
radius | `number` | `90` | Radius od circle | `[radius]="90"`
space | `number` | `4` | Space between outer circle and inner circle | `[space]="0"`
toFixed | `number` | `0` | Using fixed digital notation in Title | `[toFixed]="2"`
maxPercent | `number` | `1000` | Max number of percent you want to show | `[maxPercent]="2000"`
rerenderOnClick | `boolean` | `true` | Rerender when component is clicked | `[rerenderOnClick]="false"`
units | `string` | `'%'` | Units showed aside the title | `[units]="'percent'"`
unitsFontSize | `string` | `'0.8em'` | Font size of units | `[unitsFontSize]="'10px'"`
unitsColor | `string` | `'rgb(68, 68, 68)'` | Font color of units | `[unitsColor]="'darkgray'"`
outerStrokeWidth | `number` | `8` | Stroke width of outer circle (progress circle) | `[outerStrokeWidth]="16"`
outerStrokeColor | `sting` | `'rgb(120, 192, 0)'` | Stroke color of outer circle | `[outerStrokeColor]="'lightgreen'"`
outerStrokeLinecap | `sting` | `'round'` | Stroke linecap of outer circle. Possible values(butt, round, square, inherit) | `[outerStrokeLinecap]="'square'"`
innerStrokeWidth | `number` | `4` | Stroke width of inner circle | `[innerStrokeWidth]="8"`
innerStrokeColor | `sting` | `'rgb(120, 192, 0)'` | Stroke color of inner circle | `[outerStrokeColor]="'gray'"`
titleFormat | `Function` | `undefined` | a callback function to format title | `[titleFormat]="formatTitle"`
titleColor | `string` | `'rgb(68, 68, 68)'` | Font color of title | `[titleColor]="'darkgray'"`
titleFontSize | `string` | `'2em'` | Font size of title | `[titleFontSize]="'18px'"`
subtitle | `string` | `'Percent'` | text showed as subtitle | `[subtitle]="'Well done!'"`
subtitleFormat | `Function` | `undefined` | a callback function to format subtitle | `[subtitleFormat]="formatSubtitle"`
subtitleColor | `string` | `'darkgray'` | Font color of subtitle | `[titleColor]="'darkgray'"`
subtitleFontSize | `string` | `'0.8em'` | Font size of subtitle | `[titleFontSize]="'18px'"`
showTitle | `boolean` | `true` | Whether to display title | `[showTitle]="false"`
showSubtitle | `boolean` | `true` | Whether to display subtitle | `[showSubtitle]="false"`
showUnits | `boolean` | `true` | Whether to display units | `[showUnits]="false"`
animation | `boolean` | `true` | Whether to animate the outer circle when rendering  | `[animation]="false"`
animateTitle | `boolean` | `true` | Whether to animate the title when rendering  | `[animateTitle]="false"`
animateSubitle | `boolean` | `false` | Whether to animate the subtitle when rendering  | `[animateSubtitle]="true"`
animationDuration | `number` | `500` | Duration of animation in microseconds | `[animationDuration]="1000"`


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

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [bootsoon](mailto:bootsoon@aliyun.com)

This project is generated by [Yeoman generator angular2-library](https://github.com/jvandemo/generator-angular2-library)

