import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent, CircleProgressOptionsInterface, CircleProgressOptions } from './ng-circle-progress.component';


@NgModule({
  declarations: [CircleProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [CircleProgressComponent]
})
export class NgCircleProgressModule {
  static forRoot(options: CircleProgressOptionsInterface = {}): ModuleWithProviders<NgCircleProgressModule> {
    return {
      ngModule: NgCircleProgressModule,
      providers: [
        { provide: CircleProgressOptions, useValue: options }
      ]
    };
  }
}
