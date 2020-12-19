import { Component, OnInit } from '@angular/core';
import {Project} from 'src/app/models/project.model'
import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = []

  constructor(projectsService: ProjectsService) { 
    this.projectList = projectsService.getProjects();
  }

  ngOnInit(): void {
  }

}
