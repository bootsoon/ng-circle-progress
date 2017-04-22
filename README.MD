# ng-circle-progress

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

    // Specify your library as an import
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use CircleProgressComponent in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<circle-progress></circle-progress>
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
