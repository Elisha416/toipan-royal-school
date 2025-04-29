
export interface SubNavItem {
  title: string;
  path: string;
}

export interface NavItem {
  title: string;
  path: string;
  submenu: SubNavItem[];
}
