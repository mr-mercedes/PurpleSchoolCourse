import {FirstLevelMenuItem} from "@/interfaces/menu.interfece";
import CourseIcon from "@/layout/menu/icons/graduation-hat.svg";
import {TopLevelCategory} from "@/interfaces/page.interfece";
import ServicesIcon from "@/layout/menu/icons/cloud.svg";
import BookIcon from "@/layout/menu/icons/book.svg";
import BoxIcon from "@/layout/menu/icons/box.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <BoxIcon/>, id: TopLevelCategory.Products},
];

export const priceRu = (price: number):string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
}