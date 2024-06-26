import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule, NgbProgressbarModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

import { BestSellingComponent } from './dashboard/best-selling/best-selling.component';
import { TopSellingComponent } from './dashboard/top-selling/top-selling.component';
import { RecentOrdersComponent } from './dashboard/recent-orders/recent-orders.component';
import { StatComponent } from './dashboard/stat/stat.component';
import { ProjectsStatComponent } from './projects/projects-stat/projects-stat.component';
import { ActiveProjectComponent } from './projects/active-project/active-project.component';
import { MyTaskComponent } from './projects/my-task/my-task.component';
import { TeamMembersComponent } from './projects/team-members/team-members.component';

@NgModule({
  declarations: [
    BestSellingComponent,
    TopSellingComponent,
    RecentOrdersComponent,
    StatComponent,
    ProjectsStatComponent,
    ActiveProjectComponent,
    MyTaskComponent,
    TeamMembersComponent,
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    CountToModule,
    FeatherModule.pick(allIcons),
    NgApexchartsModule,
  ],
  exports: [BestSellingComponent, TopSellingComponent, RecentOrdersComponent, StatComponent, ProjectsStatComponent, ActiveProjectComponent, MyTaskComponent, TeamMembersComponent]
})
export class WidgetModule { }
