/*
* Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { NgModule } from '@angular/core';
import { CoreModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import { KPITrendWidget } from './kpitrend-widget.component';
import { KPITrendWidgetConfig } from './kpitrend-widget-config.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerComponent } from './color-picker/color-picker-component';
import { ColorSliderComponent } from './color-picker/color-slider/color-slider-component';
import { ColorPaletteComponent } from './color-picker/color-palette/color-palette-component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [KPITrendWidget, KPITrendWidgetConfig, ColorPickerComponent, ColorSliderComponent, ColorPaletteComponent],
  entryComponents: [KPITrendWidget, KPITrendWidgetConfig],
  providers: [{
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: 
    {
      id: 'com.softwareag.globalpresales.kpitrendwidget',
      label: 'KPI Trend Widget Plugin',
      description: 'This widget shows the latest measurement value and unit received from a device as a KPI. It compares this measurement value with the average of measurements received in the selected interval and calculated the percentage growth or fall. It allows to configure threshold values to change the KPI color when threshold values are reached. It also shows a trend chart by plotting all the measurement values received for the selected interval or measurements count.',
      component: KPITrendWidget,
      configComponent: KPITrendWidgetConfig,
      previewImage: require("./images/img-preview.png"),
      data: {
        ng1: {
          options: {
            noDeviceTarget: false,
            noNewWidgets: false,
            deviceTargetNotRequired: false,
            groupsSelectable: true
          }
        }
      }
    }
  }],
})
export class KPITrendWidgetAppModule {}
