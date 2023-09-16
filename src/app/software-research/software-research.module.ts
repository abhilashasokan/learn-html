import { AnalyzeMenuComponent } from './scene/analyze-menu/analyze-menu.component';
import { VisualBinningCutpointsComponent } from './scene/visual-binning-cutpoints/visual-binning-cutpoints.component';
import { VisualBinningComponent } from './scene/visual-binning/visual-binning.component';
import { AutomaticRecodeComponent } from './scene/automatic-recode/automatic-recode.component';
import { RecodeVariableComponent } from './scene/recode-variable/recode-variable.component';
import { DataAnalysisUsingSpssComponent } from './scene/data-analysis-using-spss/data-analysis-using-spss.component';
import { IdentifyingDuplicateCasesComponent } from './scene/identifying-duplicate-cases/identifying-duplicate-cases.component';
import { CreatingDatasetComponent } from './scene/creating-dataset/creating-dataset.component';
import { LikertItemsAndLikertScaleComponent } from './scene/likert-items-and-likert-scale/likert-items-and-likert-scale.component';
import { TypesOfMeasurementScalesComponent } from './scene/types-of-measurement-scales/types-of-measurement-scales.component';
import { StatisticalProcedureComponent } from './scene/statistical-procedure/statistical-procedure.component';
import { SpssLayoutComponent } from './scene/spss-layout/spss-layout.component';
import { IntroductionSpssComponent } from './scene/introduction-spss/introduction-spss.component';
import { FeaturesOfSpssComponent } from './scene/features-of-spss/features-of-spss.component';
import { HistoryOfSpssComponent } from './scene/history-of-spss/history-of-spss.component';
import { DataProcessinsSoftwareComponent } from './scene/data-processins-software/data-processins-software.component';
import { InformationComponent } from './scene/information/information.component';
import { ElectronicDataProcessingComponent } from './scene/electronic-data-processing/electronic-data-processing.component';
import { DataProcessingComponent } from './scene/data-processing/data-processing.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { OverviewComponent } from './scene/overview/overview.component';
import { SoftwareResearchRoutingModule } from './software-research-routing.module';
import { PagesRoutingModule } from './../pages/pages-routing.module';
import { DataComponent } from './scene/data/data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SoftwareResearchRoutingModule,
    NzAvatarModule,
    NzCardModule,
    NzPageHeaderModule,
    NzTypographyModule,
    FormsModule,
    NzGridModule,
    NzButtonModule,
    NzTagModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzTableModule,
  ],
  declarations: [
    DataComponent,
    OverviewComponent,
    DataProcessingComponent,
    ElectronicDataProcessingComponent,
    InformationComponent,
    DataProcessinsSoftwareComponent,
    HistoryOfSpssComponent,
    FeaturesOfSpssComponent,
    IntroductionSpssComponent,
    SpssLayoutComponent,
    StatisticalProcedureComponent,
    TypesOfMeasurementScalesComponent,
    LikertItemsAndLikertScaleComponent,
    CreatingDatasetComponent,
    IdentifyingDuplicateCasesComponent,
    DataAnalysisUsingSpssComponent,
    RecodeVariableComponent,
    AutomaticRecodeComponent,
    VisualBinningComponent,
    VisualBinningCutpointsComponent,
    AnalyzeMenuComponent
  ],
})
export class SoftwareResearchModule {}
