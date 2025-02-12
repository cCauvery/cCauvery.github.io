import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { iisc, nitt, TeamData } from './../../../data-entries/teams';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  iiscData: TeamData = iisc;
  nittData: TeamData = nitt;
  currentData: TeamData = { Professor: [], Members: [] };
  institution: string = '';

  private allowedInstitutions = new Map<string, { name: string; data: TeamData }>([
    ['iisc', { name: 'IISc', data: this.iiscData }],
    ['nitt', { name: 'NITT', data: this.nittData }]
  ]);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadData(params['institution']);
    });
  }

  private loadData(institution: string): void {
    const sanitizedInstitution = institution?.toLowerCase().trim();

    if (!this.allowedInstitutions.has(sanitizedInstitution)) {
      this.router.navigate(['/']);
      return;
    }

    this.institution = this.allowedInstitutions.get(sanitizedInstitution)?.name || '';
    this.currentData = this.allowedInstitutions.get(sanitizedInstitution)?.data || { Professor: [], Members: [] };
  }
}
