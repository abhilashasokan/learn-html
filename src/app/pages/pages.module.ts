import { WebsiteManagementComponent } from './scene/html/website-management/website-management.component';
import { FramesComponent } from './scene/html/frames/frames.component';
import { MultimediaInHtmlComponent } from './scene/html/multimedia-in-html/multimedia-in-html.component';
import { LinksComponent } from './scene/html/links/links.component';
import { HtmlTextAlignComponent } from './scene/html/html-text-align/html-text-align.component';
import { TableComponent } from './scene/html/table/table.component';
import { IntroductoryTagsComponent } from './scene/html/introductory-tags/introductory-tags.component';
import { HtmlIntroductionComponent } from './scene/html/html-introduction/html-introduction.component';
import { KeyConceptsHtmlComponent } from './scene/html/key-concepts-html/key-concepts-html.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { HtmlWrapperPipe } from './pipe/html-wrapper.pipe';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ComputerNetworksComponent } from './scene/network-communication/computer-networks/computer-networks.component';
import { TypesOfNetworksComponent } from './scene/network-communication/types-of-networks/types-of-networks.component';
import { NetworkTopologyComponent } from './scene/network-communication/network-topology/network-topology.component';
import { NetworkSecurityComponent } from './scene/network-communication/network-security/network-security.component';
import { ApplicationOfNetworkAndCommunicationComponent } from './scene/network-communication/application-of-network-and-communication/application-of-network-and-communication.component';
import { CommunicationMediumComponent } from './scene/network-communication/communication-medium/communication-medium.component';
import { GenerationsInCommunicationComponent } from './scene/network-communication/generations-in-communication/generations-in-communication.component';
import { OverviewComponent } from './scene/overview/overview.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
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
    NzCardModule,
  ],
  declarations: [
    HtmlWrapperPipe,
    OverviewComponent,
    ComputerNetworksComponent,
    TypesOfNetworksComponent,
    NetworkTopologyComponent,
    ApplicationOfNetworkAndCommunicationComponent,
    NetworkSecurityComponent,
    CommunicationMediumComponent,
    GenerationsInCommunicationComponent,
    KeyConceptsHtmlComponent,
    HtmlIntroductionComponent,
    IntroductoryTagsComponent,
    HtmlTextAlignComponent,
    TableComponent,
    LinksComponent,
    MultimediaInHtmlComponent,
    FramesComponent,
    WebsiteManagementComponent
  ],
  providers: [HtmlWrapperPipe],
})
export class PagesModule {}
