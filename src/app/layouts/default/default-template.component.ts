import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface MenuItem {
  name: string;
  title?: string;
  icon?: string;
  url?: string;
  external?: boolean;
  children?: MenuItem[];
}

const TREE_DATA: MenuItem[] = [
  { name: 'Home', url: '/home', icon: 'home' },
  { name: 'About', url: '/about', icon: 'info', title: 'O nas' },
  { name: 'Dashboard', url: '/dashboard', icon: 'dashboard', title: 'Pulpit' },
  { name: 'Lista klientów', url: '/clients', title: 'Lista klientów' },
  {
    name: 'Links',
    children: [
      { name: 'Discord', url: 'https://discord.com/channels/984539246041895032/984539246041895035', external: true },
      { name: 'Youtube', url: 'https://youtube.com/channel/UC9YYcOj_qVfPu6z5SUyzbkw/videos', external: true },
      { name: 'Github', url: 'https://github.com/ngxpoland', external: true },
      {
        name: 'Patreon',
        url: 'https://www.patreon.com/ngxpoland',
        external: true,
      },
    ],
  },
];

type Data = {
  [key: string | symbol]: any;
};

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss'],
})
export class DefaultTemplateComponent {
  public title = 'my-app';
  public activeNode: MenuItem | undefined = undefined;
  public sidenavOpened: boolean = false;
  showFiller: boolean = false;
  treeControl = new NestedTreeControl<MenuItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();
  constructor() {
    this.dataSource.data = TREE_DATA;
    const val = localStorage.getItem('sidenavOpened');
    this.sidenavOpened = (val) ? JSON.parse(val) : false;
  }

  hasChild = (_: number, node: MenuItem) => !!node.children && node.children.length > 0;

  public handleMenuClick(node: MenuItem): void {
    console.log('click: ', node);
    this.title = node.name;
  }

  public onRouterLinkActive(node: MenuItem): void {
    this.activeNode = node;
  }

  public toggleSettings() {
    const newValue = !this.sidenavOpened;
    localStorage.setItem('sidenavOpened', JSON.stringify(newValue))
    this.sidenavOpened = newValue;
  }
}
