import { Component, OnInit, HostListener } from '@angular/core';
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
          technologies: []
        }));

        const ecommerce = this.projects.find(project => project.name === 'ecommerce');
        if (ecommerce) {
          ecommerce.technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Nuxt', 'Vue'];
        }
      });

    this.hiddenProjects.push('Naval-Battle');
    this.hiddenProjects.push('LinuxMistery00');
    this.hiddenProjects.push('ProgramadorOrientadoaObjetoMain');
    this.hiddenProjects.push('Indalo');
    this.hiddenProjects.push('Windows95');
    this.hiddenProjects.push('Portfolio');
    this.hiddenProjects.push('To-Do-List');
    this.hiddenProjects.push('E-Commerce');
    this.hiddenProjects.push('Tic-Tac-Toe');
    this.hiddenProjects.push('Curso-de-Java-RocketSeat');
    this.hiddenProjects.push('TextsForYou');
    this.hiddenProjects.push('Houses');
    this.hiddenProjects.push('DevRegistration');
    this.hiddenProjects.push('Posfirst');
    this.hiddenProjects.push('Pokemons');
    this.hiddenProjects.push('Avaliacao');
    this.hiddenProjects.push('Yulang');
    this.hiddenProjects.push('linguist');
    this.hiddenProjects.push('exercicios');
    this.hiddenProjects.push('Finance');
    this.hiddenProjects.push('Firefox');
    this.hiddenProjects.push('PasswordGenerator');
    this.hiddenProjects.push('TextEditorVue');
    this.hiddenProjects.push('Calc');
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
