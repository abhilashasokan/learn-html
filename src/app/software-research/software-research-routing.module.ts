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
import { DataProcessinsSoftwareComponent } from './scene/data-processins-software/data-processins-software.component';
import { InformationComponent } from './scene/information/information.component';
import { ElectronicDataProcessingComponent } from './scene/electronic-data-processing/electronic-data-processing.component';
import { DataProcessingComponent } from './scene/data-processing/data-processing.component';
import { OverviewComponent } from './../pages/scene/overview/overview.component';
import { DataComponent } from './scene/data/data.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryOfSpssComponent } from './scene/history-of-spss/history-of-spss.component';



export const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent,  pathMatch: 'full' },
  { path: 'data-processing', component: DataProcessingComponent,  pathMatch: 'full' },
  { path: 'electronic-data-processing', component: ElectronicDataProcessingComponent,  pathMatch: 'full' },
  { path: 'data-analysis', component: DataComponent,  pathMatch: 'full' },
  { path: 'electronic-data-processing', component: ElectronicDataProcessingComponent,  pathMatch: 'full' },
  { path: 'information', component: InformationComponent,  pathMatch: 'full' },
  { path: 'data-processing-software', component: DataProcessinsSoftwareComponent,  pathMatch: 'full' },
  { path: 'history-of-spss', component: HistoryOfSpssComponent,  pathMatch: 'full' },
  { path: 'features-of-spss', component: FeaturesOfSpssComponent,  pathMatch: 'full' },
  { path: 'introduction-spss', component: IntroductionSpssComponent,  pathMatch: 'full' },
  { path: 'spss-layout', component: SpssLayoutComponent,  pathMatch: 'full' },
  { path: 'statistical-procedure', component: StatisticalProcedureComponent,  pathMatch: 'full' },
  { path: 'types-of-measurement-scales', component: TypesOfMeasurementScalesComponent,  pathMatch: 'full' },
  { path: 'likert-items-and-likert-scale', component: LikertItemsAndLikertScaleComponent,  pathMatch: 'full' },
  { path: 'creating-dataset', component: CreatingDatasetComponent,  pathMatch: 'full' },
  { path: 'identifying-duplicate-cases', component: IdentifyingDuplicateCasesComponent,  pathMatch: 'full' },
  { path: 'data-analysis-using-spss', component: DataAnalysisUsingSpssComponent,  pathMatch: 'full' },
  { path: 'recode-variable', component: RecodeVariableComponent,  pathMatch: 'full' },
  { path: 'automatic-recode', component: AutomaticRecodeComponent,  pathMatch: 'full' },
  { path: 'visual-binning', component: VisualBinningComponent,  pathMatch: 'full' },
  { path: 'visual-binning-cutpoints', component: VisualBinningCutpointsComponent,  pathMatch: 'full' },
  { path: 'analyze-menu', component: AnalyzeMenuComponent,  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareResearchRoutingModule { }
