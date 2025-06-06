import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-feed-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-feed-items.component.html',
  styleUrl: './main-feed-items.component.css'
})
export class MainFeedItemsComponent {

  items = [

    { title: 'Vélo de sport',
      image: '../../../assets/test-bike.jpg',
      price : '50€',
      marque : 'Decathlon',

     },

     { title: 'Playstation 5',
      image: '../../../assets/ps5.jpg',
      price : '50€',
      marque : 'Sony',

     },

     { title: 'Trotinette Electrique',
      image: '../../../assets/trott.jpg',
      price : '50€',
      marque : 'Decathlon',
     },

     { title: 'Aspirateur sans fil',
      image: '../../../assets/vacuum.jpg',
      price : '50€',
      marque : 'Dayson',
     },

    //  { title: 'vélo',
    //   image: 'link',
    //   price : '50€',
    //  },
    //  { title: 'vélo',
    //   image: 'link',
    //   price : '50€',
    //  },
    //  { title: 'vélo',
    //   image: 'link',
    //   price : '50€',
    //  },

  ];

}
