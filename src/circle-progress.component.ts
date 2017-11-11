import { Component, ViewChild, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';

export interface CircleProgressOptionsInterface {
  class?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  backgroundStroke?: string;
  backgroundStrokeWidth?: number;
  backgroundPadding?: number;
  percent?: number;
  radius?: number;
  space?: number;
  toFixed?: number;
  maxPercent?: number;
  renderOnClick?: boolean;
  units?: string;
  unitsFontSize?: string;
  unitsColor?: string;
  outerStrokeWidth?: number;
  outerStrokeColor?: string;
  outerStrokeLinecap?: string;
  innerStrokeColor?: string;
  innerStrokeWidth?: number;
  titleFormat?: Function;
  title?: string;
  titleColor?: string;
  titleFontSize?: string;
  subtitleFormat?: Function;
  subtitle?: string;
  subtitleColor?: string;
  subtitleFontSize?: string;
  animation?: boolean;
  animateTitle?: boolean;
  animateSubtitle?: boolean;
  animationDuration?: number;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showUnits?: boolean;
  showBackground?: boolean;
  showInnerStroke?: boolean;
  clockwise?: boolean;
}

export class CircleProgressOptions implements CircleProgressOptionsInterface {
  class = '';
  backgroundColor = 'transparent';
  backgroundOpacity = 1;
  backgroundStroke = 'transparent';
  backgroundStrokeWidth = 0;
  backgroundPadding = 5;
  percent = 0;
  radius = 90;
  space = 4;
  toFixed = 0;
  maxPercent = 1000;
  renderOnClick = true;
  units = '%';
  unitsFontSize = '10';
  unitsColor = '#444444';
  outerStrokeWidth = 8;
  outerStrokeColor = '#78C000';
  outerStrokeLinecap = 'round';
  innerStrokeColor = '#C7E596';
  innerStrokeWidth = 4;
  titleFormat = undefined;
  title = 'auto';
  titleColor = '#444444';
  titleFontSize = '20';
  subtitleFormat = undefined;
  subtitle = 'progress';
  subtitleColor = '#A9A9A9';
  subtitleFontSize = '10';
  animation = true;
  animateTitle = true;
  animateSubtitle = false;
  animationDuration = 500;
  showTitle = true;
  showSubtitle = true;
  showUnits = true;
  showBackground = true;
  showInnerStroke = true;
  clockwise = true;
}

@Component({
  selector: 'circle-progress',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg" 
      [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
      <circle *ngIf="options.showBackground" 
        [attr.cx]="svg.backgroundCircle.cx" 
        [attr.cy]="svg.backgroundCircle.cy" 
        [attr.r]="svg.backgroundCircle.r" 
        [attr.fill]="svg.backgroundCircle.fill"
        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
        [attr.stroke]="svg.backgroundCircle.stroke" 
        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
      <circle *ngIf="options.showInnerStroke" 
        [attr.cx]="svg.circle.cx" 
        [attr.cy]="svg.circle.cy" 
        [attr.r]="svg.circle.r" 
        [attr.fill]="svg.circle.fill"
        [attr.stroke]="svg.circle.stroke" 
        [attr.stroke-width]="svg.circle.strokeWidth"/>
      <path 
        [attr.d]="svg.path.d" 
        [attr.stroke]="svg.path.stroke" 
        [attr.stroke-width]="svg.path.strokeWidth" 
        [attr.stroke-linecap]="svg.path.strokeLinecap"
        [attr.fill]="svg.path.fill"/>
      <text *ngIf="options.showTitle" 
        [attr.text-anchor]="svg.title.textAnchor" 
        [attr.x]="svg.title.x" 
        [attr.y]="svg.title.y">
        <tspan 
          [attr.font-size]="svg.title.fontSize" 
          [attr.fill]="svg.title.color">{{svg.title.text}}</tspan>
        <tspan *ngIf="options.showUnits" 
          [attr.font-size]="svg.units.fontSize"
          [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
      </text>
      <text *ngIf="options.showSubtitle"
        [attr.text-anchor]="svg.subtitle.textAnchor" 
        [attr.fill]="svg.subtitle.color" 
        [attr.x]="svg.subtitle.x"
        [attr.y]="svg.subtitle.y">
        <tspan [attr.font-size]="svg.subtitle.fontSize">{{svg.subtitle.text}}</tspan>
      </text>
    </svg>  
  `
})
export class CircleProgressComponent implements OnChanges {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Input() class: string;
  @Input() backgroundColor: string;
  @Input() backgroundOpacity: number;
  @Input() backgroundStroke: string;
  @Input() backgroundStrokeWidth: number;
  @Input() backgroundPadding: number;

  @Input() radius: number;
  @Input() space: number;
  @Input() percent: number;
  @Input() toFixed: number;
  @Input() maxPercent: number;
  @Input() renderOnClick: boolean;

  @Input() units: string;
  @Input() unitsFontSize: string;
  @Input() unitsColor: string;

  @Input() outerStrokeWidth: number;
  @Input() outerStrokeColor: string;
  @Input() outerStrokeLinecap: string;

  @Input() innerStrokeColor: string;
  @Input() innerStrokeWidth: string | number;

  @Input() titleFormat: Function;
  @Input() title: string;
  @Input() titleColor: string;
  @Input() titleFontSize: string;

  @Input() subtitleFormat: Function;
  @Input() subtitle: string;
  @Input() subtitleColor: string;
  @Input() subtitleFontSize: string;

  @Input() animation: boolean;
  @Input() animateTitle: boolean;
  @Input() animateSubtitle: boolean;
  @Input() animationDuration: number;

  @Input() showTitle: boolean;
  @Input() showSubtitle: boolean;
  @Input() showUnits: boolean;
  @Input() showBackground: boolean;
  @Input() showInnerStroke: boolean;
  @Input() clockwise: boolean;

  @Input('options') templateOptions: CircleProgressOptions;

  svg: any;
  
  options: CircleProgressOptions = new CircleProgressOptions();
  defaultOptions: CircleProgressOptions = new CircleProgressOptions();

  private _timerSubscription: Subscription;

  public isDrawing(): boolean {
    return (this._timerSubscription && !this._timerSubscription.closed) ? true : false;
  }

  constructor(
    defaultOptions: CircleProgressOptions) {
    Object.assign(this.options, defaultOptions);
    Object.assign(this.defaultOptions, defaultOptions);
  }

  ngOnChanges(changes) {
    this.render();
  }

  private applyOptions = () => {
    // the options of <circle-progress> may change already
    for (let name of Object.keys(this.options)) {
      if (this.hasOwnProperty(name) && this[name] !== undefined) {
        this.options[name] = this[name];
      }else if(this.templateOptions && this.templateOptions[name] !== undefined){
        this.options[name] = this.templateOptions[name];
      }
    }
    // make sure key options valid
    this.options.radius = Math.abs(+this.options.radius);
    if (this.options.radius < 50) { this.options.radius = 50; }
    this.options.space = +this.options.space;
    this.options.percent = Math.abs(+this.options.percent);
    this.options.maxPercent = Math.abs(+this.options.maxPercent);
    this.options.animationDuration = Math.abs(this.options.animationDuration);
    this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
    this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
    this.options.backgroundPadding = +this.options.backgroundPadding;
  }

  render = () => {
    this.applyOptions();
    if (this.options.animation && this.options.animationDuration > 0) {
      this.animate();
    } else {
      this.draw(this.options.percent);
    }
  }

  polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    let angleInRadius = angleInDegrees * Math.PI / 180;
    let x = centerX + Math.sin(angleInRadius) * radius;
    let y = centerY - Math.cos(angleInRadius) * radius;
    return { x: x, y: y };
  }

  draw = (percent: number) => {
    // make percent reasonable
    percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
    // circle percent shouldn't be greater than 100%.
    let circlePercent = (percent > 100) ? 100 : percent;
    // determine box size
    let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
    if(this.options.showBackground){
      boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
    }
    // the centre of the circle
    let centre = { x: boxSize / 2, y: boxSize / 2 };
    // the start point of the arc
    let startPoint = { x: centre.x, y: centre.y - this.options.radius };
    // get the end point of the arc
    let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ? circlePercent : (100 - circlePercent)) / 100);  // ####################
    // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x slightly.
    if (circlePercent === 100) { 
      endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
    }
    // largeArcFlag and sweepFlag
    let largeArcFlag, sweepFlag;
    if (circlePercent > 50) {
      [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
    } else {
      [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
    }
    // percent may not equal the actual percent
    let titlePercent = this.options.animateTitle ? percent : this.options.percent;
    let titleTextPercent = titlePercent > this.options.maxPercent ?
      `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
    let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
    // assemble all
    this.svg = {
      width: boxSize,
      height: boxSize,
      backgroundCircle: {
        cx: centre.x,
        cy: centre.y,
        r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
        fill: this.options.backgroundColor,
        fillOpacity: this.options.backgroundOpacity,
        stroke: this.options.backgroundStroke,
        strokeWidth: this.options.backgroundStrokeWidth,
      },
      path: {
        // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
        d: `M ${startPoint.x} ${startPoint.y} 
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
        stroke: this.options.outerStrokeColor,
        strokeWidth: this.options.outerStrokeWidth,
        strokeLinecap: this.options.outerStrokeLinecap,
        fill: 'none'
      },
      circle: {
        cx: centre.x,
        cy: centre.y,
        r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
        fill: 'none',
        stroke: this.options.innerStrokeColor,
        strokeWidth: this.options.innerStrokeWidth,
      },
      title: {
        x: centre.x,
        y: centre.y,
        textAnchor: 'middle',
        text:
        (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function')
          ? this.options.titleFormat(titlePercent) : (this.options.title === 'auto' ? titleTextPercent : this.options.title),
        color: this.options.titleColor,
        fontSize: this.options.titleFontSize,
      },
      units: {
        text: `${this.options.units}`,
        fontSize: this.options.unitsFontSize,
        color: this.options.unitsColor
      },
      subtitle: {
        x: centre.x,
        y: centre.y + 15,
        textAnchor: 'middle',
        text:
        (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function')
          ? this.options.subtitleFormat(subtitlePercent) : this.options.subtitle,
        color: this.options.subtitleColor,
        fontSize: this.options.subtitleFontSize
      },
    };
  }

  private min = (a, b) => {
    return a < b ? a : b;
  }

  private max = (a, b) => {
    return a > b ? a : b;
  }

  getAnimationParameters = () => {
    const MIN_INTERVAL = 10;
    let times, step, interval;
    if (this.options.percent >= 100) {
      // we will finish animation in 100 times
      times = 100;
      if (!this.options.animateTitle && !this.options.animateSubtitle) {
        step = 1;
      } else {
        // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
        step = Math.round(this.min(this.options.percent, this.options.maxPercent) / times);
      }
    } else {
      // we will finish in as many times as the number of percent.
      times = this.options.percent;
      step = 1;
    }
    // Get the interval of timer
    interval = Math.round(this.options.animationDuration / times);
    // Readjust all values if the interval of timer is extremely small.
    if (interval < MIN_INTERVAL) {
      interval = MIN_INTERVAL;
      times = this.options.animationDuration / interval;
      if (!this.options.animateTitle && !this.options.animateSubtitle && this.options.percent > 100) {
        step = Math.round(100 / times);
      } else {
        step = Math.round(this.min(this.options.percent, this.options.maxPercent) / times);
      }
    }
    // step must be greater than 0.
    if (step < 1) { step = 1; }
    return { times: times, step: step, interval: interval };
  }

  animate = () => {
    if (this._timerSubscription && !this._timerSubscription.closed) {
      this._timerSubscription.unsubscribe();
    }
    let { step: step, interval: interval } = this.getAnimationParameters();
    let count = 0;
    this._timerSubscription = Observable.timer(0, interval).subscribe(() => {
      count += step;
      if (count <= this.options.percent) {
        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
          this.draw(this.options.percent);
          this._timerSubscription.unsubscribe();
        } else {
          this.draw(count);
        }
      } else {
        this.draw(this.options.percent);
        this._timerSubscription.unsubscribe();
      }
    });
  }

  emitClickEvent = (event) => {
    if (this.options.renderOnClick) { this.animate(); }
    this.onClick.emit(event);
  }

}
