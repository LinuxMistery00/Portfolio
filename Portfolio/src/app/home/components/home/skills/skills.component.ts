// skills.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  selectedCategory: string = 'all';
  skills: string[] = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Sass',
    'Bootstrap', 'MaterialUI', 'ReactJS', 'NextJS',
    'Angular', 'VueJS', 'NuxtJS', 'NodeJS', 'Express',
    'NestJS', 'SpringBoot', 'MongoDB', 'MySQL',
    'PostgreSQL', 'Sequelize', 'Java',
    'Git', 'GitHub', 'Linux'
  ];

  imageUrls: { [key: string]: string } = {
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'MaterialUI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'ReactJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'NextJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'VueJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'NuxtJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    'NodeJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
    'SpringBoot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Sequelize': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  };

  filterSkills(category: string): void {
    this.selectedCategory = category;
    console.log('Selected Category:', this.selectedCategory);
  }

  isSkillInCategory(skill: string): boolean {
    if (this.selectedCategory === 'all') {
      return true;
    }

    if (this.selectedCategory === 'front-end') {
      // Implement your logic for front-end skills
      return ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Sass', 'Bulma', 'Bootstrap', 'MaterialUI', 'ReactJS', 'NextJS', 'Angular', 'VueJS', 'NuxtJS', 'Svelte'].includes(skill);
    }

    if (this.selectedCategory === 'back-end') {
      // Implement your logic for back-end skills
      return ['NodeJS', 'Express', 'Flask', 'NestJS', 'SpringBoot', 'MongoDB', 'MySQL', 'PostgreSQL', 'Sequelize'].includes(skill);
    }

    if (this.selectedCategory === 'others') {
      // Implement your logic for other skills
      return ['Python', 'Java', 'Rust', 'Git', 'GitHub', 'Kotlin', 'Linux', 'C'].includes(skill);
    }

    return false;
  }
}
