import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-option-interface';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[]  = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscador gifs',
      route: '/dashboard/search',
    },
  ]

}
