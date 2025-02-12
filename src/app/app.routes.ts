import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MissionsComponent } from './components/missions/missions.component';
import { VisionComponent } from './components/vision/vision.component';
import { MemberInstitutesComponent } from './components/member-institutes/member-institutes.component';
import { EventsComponent } from './components/events/events.component';
import { CampComponent } from './components/camp/camp.component';
import { DataRepositoryComponent } from './components/data-repository/data-repository.component';
import { InstitutionGuard } from './guards/institution.guard';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'teams/:institution', component: TeamsComponent, canActivate: [InstitutionGuard] }, 
  { path: 'vision', component: VisionComponent},
  { path: 'missions', component: MissionsComponent},
  { path: 'member_institutes', component: MemberInstitutesComponent},
  { path: 'events', component: EventsComponent},
  { path: 'CAMP', component: CampComponent},
  { path: 'data-repository', component: DataRepositoryComponent},
  { path: '**', component: PageNotFoundComponent }
];
