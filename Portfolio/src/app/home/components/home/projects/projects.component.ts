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

        const Finance = this.projects.find(project => project.name === 'Finance');
        if (Finance) {
          Finance.technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'NodeJS', 'MongoDB'];
        }

        const Calc = this.projects.find(project => project.name === 'Calc');
        if (Calc) {
          Calc.technologies = ['HTML5', 'SASS', 'TypeScript', 'Angular'];
        }

        const Avaliacao = this.projects.find(project => project.name === 'Avaliacao');
        if (Avaliacao) {
          Avaliacao.technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Svelte'];
        }

        const PasswordGenerator = this.projects.find(project => project.name === 'PasswordGenerator');
        if (PasswordGenerator) {
          PasswordGenerator.technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'];
        }

        const DevRegistration = this.projects.find(project => project.name === 'DevRegistration');
        if (DevRegistration) {
          DevRegistration.technologies = ['HTML5', 'CSS3', 'JavaScript', 'Nodejs', 'MongoDB'];
        }

        const Pokemons = this.projects.find(project => project.name === 'Pokemons');
        if (Pokemons) {
          Pokemons.technologies = ['HTML5', 'CSS3', 'TypeScript', 'React'];
        }

        const TextEditorVue = this.projects.find(project => project.name === 'TextEditorVue');
        if (TextEditorVue) {
          TextEditorVue.technologies = ['HTML5', 'Vue', 'JavaScript', 'TypeScript'];
        }

        const Posfirst = this.projects.find(project => project.name === 'Posfirst');
        if (TextEditorVue) {
          Posfirst.technologies = ['HTML5', 'CSS3', 'TypeScript', 'React', 'PostgreSQL'];
        }

        const Firefox = this.projects.find(project => project.name === 'Firefox');
        if (Firefox) {
          Firefox.technologies = ['HTML5', 'SASS', 'TypeScript', 'Angular'];
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