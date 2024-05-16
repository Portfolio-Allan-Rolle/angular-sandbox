import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.css',
})
export class TableFilterComponent {
  public name = new FormControl();
  public username = new FormControl();
  public retired = new FormControl();
  private name$ = toSignal(this.name.valueChanges.pipe(startWith('')));
  private username$ = toSignal(this.username.valueChanges.pipe(startWith('')));
  private isRetired$ = toSignal(this.retired.valueChanges.pipe(startWith(false)));

  private readonly users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      city: 'Gwenborough',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      isRetired: true,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      city: 'Wisokyburgh',
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      isRetired: true,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      city: 'McKenziehaven',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      isRetired: true,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      city: 'South Elvis',
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      isRetired: false,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      city: 'Roscoeview',
      phone: '(254)954-1289',
      website: 'demarco.info',
      isRetired: true,
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      city: 'South Christy',
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      isRetired: true,
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      city: 'Howemouth',
      phone: '210.067.6132',
      website: 'elvis.io',
      isRetired: false,
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      city: 'Aliyaview',
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      isRetired: true,
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      city: 'Bartholomebury',
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      isRetired: true,
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      city: 'Lebsackbury',
      isRetired: true,
      phone: '024-648-3804',
      website: 'ambrose.net',
    },
  ];

  public data$ = computed(() => {
    return this.users.filter((user) => {
      const name = user.name.toLowerCase().includes(this.name$().toLowerCase())
      const username = user.username.toLowerCase().includes(this.username$().toLowerCase());
      const isRetired = this.isRetired$() ? user.isRetired : true

      return name && username && isRetired
    });
  });
}
