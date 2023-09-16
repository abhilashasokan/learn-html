import { TableComponent } from './scene/html/table/table.component';
import { WebsiteManagementComponent } from './scene/html/website-management/website-management.component';
import { FramesComponent } from './scene/html/frames/frames.component';
import { MultimediaInHtmlComponent } from './scene/html/multimedia-in-html/multimedia-in-html.component';
import { LinksComponent } from './scene/html/links/links.component';
import { IntranetComponent } from './scene/internet/intranet/intranet.component';
import { BusinessApplicationsOfInternetComponent } from './scene/internet/business-applications-of-internet/business-applications-of-internet.component';
import { WorldWideWebConsortiumComponent } from './scene/internet/world-wide-web-consortium/world-wide-web-consortium.component';
import { HardwareSoftwareForInternetComponent } from './scene/internet/hardware-software-for-internet/hardware-software-for-internet.component';
import { WorkingOfInternetComponent } from './scene/internet/working-of-internet/working-of-internet.component';
import { DrawbacksInternetComponent } from './scene/internet/drawbacks-internet/drawbacks-internet.component';
import { InternetIntroductionComponent } from './scene/internet/internet-introduction/internet-introduction.component';
import { KeyConceptsHtmlComponent } from './scene/html/key-concepts-html/key-concepts-html.component';
import { EditorComponent } from './scene/html/editor/editor.component';
import { HtmlTextAlignComponent } from './scene/html/html-text-align/html-text-align.component';
import { IntroductoryTagsComponent } from './scene/html/introductory-tags/introductory-tags.component';
import { HtmlIntroductionComponent } from './scene/html/html-introduction/html-introduction.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComputerNetworksComponent } from './scene/network-communication/computer-networks/computer-networks.component';
import { TypesOfNetworksComponent } from './scene/network-communication/types-of-networks/types-of-networks.component';
import { NetworkTopologyComponent } from './scene/network-communication/network-topology/network-topology.component';
import { ApplicationOfNetworkAndCommunicationComponent } from './scene/network-communication/application-of-network-and-communication/application-of-network-and-communication.component';
import { NetworkSecurityComponent } from './scene/network-communication/network-security/network-security.component';
import { CommunicationMediumComponent } from './scene/network-communication/communication-medium/communication-medium.component';
import { GenerationsInCommunicationComponent } from './scene/network-communication/generations-in-communication/generations-in-communication.component';
import { OverviewComponent } from './scene/overview/overview.component';


export const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, pathMatch: 'full' },
  { path: 'computer-networks', component: ComputerNetworksComponent },
  { path: 'types-of-networks', component: TypesOfNetworksComponent },
  { path: 'network-topology', component: NetworkTopologyComponent },
  { path: 'application-of-network-and-communication', component: ApplicationOfNetworkAndCommunicationComponent },
  { path: 'network-security', component: NetworkSecurityComponent },
  { path: 'communication-medium', component: CommunicationMediumComponent },
  { path: 'generations-in-communication', component: GenerationsInCommunicationComponent },
  // HTML
  { path: 'editor', component: EditorComponent },
  { path: 'html-introduction', component: HtmlIntroductionComponent },
  { path: 'introductory-tags', component: IntroductoryTagsComponent },
  { path: 'key-concept-html', component: KeyConceptsHtmlComponent },
  { path: 'html-text-align', component: HtmlTextAlignComponent },
  { path: 'html-table', component: TableComponent },
  { path: 'html-links', component: LinksComponent },
  { path: 'multimedia-in-html', component: MultimediaInHtmlComponent },
  { path: 'frames', component: FramesComponent },
  { path: 'website-management', component: WebsiteManagementComponent },
  // Internet
  { path: 'internet-introduction', component: InternetIntroductionComponent },
  { path: 'internet-drawbacks', component: DrawbacksInternetComponent },
  { path: 'working-of-internet', component: WorkingOfInternetComponent },
  { path: 'hardware-software-for-internet', component: HardwareSoftwareForInternetComponent },
  { path: 'world-wide-web-consortium', component: WorldWideWebConsortiumComponent },
  { path: 'business-applications-of-internet', component: BusinessApplicationsOfInternetComponent },
  { path: 'intranet', component: IntranetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
