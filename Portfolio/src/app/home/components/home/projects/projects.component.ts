import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  Title: string = '<Projects/>';

  projects: any[] = [];
  hiddenProjects: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.github.com/users/LinuxMistery00/repos')
      .subscribe((data: any[]) => {
        this.projects = data.map((project: any) => ({
          ...project,
          isVisible: true,
          faviconUrl: `${project.homepage}/favicon.ico`,
          technologies: this.getTechnologyLogos(project.name),
        }));
      });

    this.hiddenProjects.push('Naval-Battle');
    this.hiddenProjects.push('LinuxMistery00');
    this.hiddenProjects.push('Avaliacao');
    this.hiddenProjects.push('BlockBlocking');
    this.hiddenProjects.push('Calc');
    this.hiddenProjects.push('Curso-de-Java-RocketSeat');
    this.hiddenProjects.push('DevRegistration');
    this.hiddenProjects.push('exercicios');
    this.hiddenProjects.push('Finance');
    this.hiddenProjects.push('Firefox');
    this.hiddenProjects.push('Houses');
    this.hiddenProjects.push('linguist');
    this.hiddenProjects.push('Indalo');
    this.hiddenProjects.push('Pokemons');
    this.hiddenProjects.push('PasswordGenerator');
    this.hiddenProjects.push('Portfolio');
    this.hiddenProjects.push('ProgramadorOrientadoaObjetoMain');
    this.hiddenProjects.push('TextEditorVue');
    this.hiddenProjects.push('Posfirst');
    this.hiddenProjects.push('TextsForYou');
    this.hiddenProjects.push('Tic-Tac-Toe');
    this.hiddenProjects.push('To-Do-List');
    this.hiddenProjects.push('Windows95');
  }

  getTechnologyLogos(projectName: string): string[] {
    switch (projectName.toLowerCase()) {
      case 'ecommerce':
        return [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg'
        ];
      case 'devsregistration':
        return [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        ];
      default:
        return [];
    }
  }
  

  openRepository(url: string) {
    window.open(url, '_blank');
  }

  openWebsite(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  toggleVisibility(project: any) {
    project.isVisible = !project.isVisible;
  }

  isProjectHidden(project: any): boolean {
    return this.hiddenProjects.includes(project.name);
  }
}
