import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  projectList = []
  
  constructor(projectService: ProjectsService) {
    this.projectList = projectService.getProjects().slice(0,2);
   }

  ngOnInit(): void {
  }

}
