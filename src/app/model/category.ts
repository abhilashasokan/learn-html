import { MenuService } from 'ng-zorro-antd/menu';

export interface Category {
  menu: Menu;
}

export type Menu = {
  category: Array<CategoryItem>;
};

export type CategoryItem = {
  categoryName: string;
  icon: string;
  visible: boolean;
  subCategory: SubCategory;
};

export type SubCategory = {
  title: string;
  url: string;
  visible: boolean;
};
