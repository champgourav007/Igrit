import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-associated-compaines',
  templateUrl: './associated-compaines.component.html',
  styleUrls: ['./associated-compaines.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out'),
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})

export class AssociatedCompainesComponent implements OnInit {
  images: string[] = 
  [
    '../../../assets/svg/mumusosvg.svg',
    'https://asset.brandfetch.io/idaAonmqEO/idEwHbhW9N.png', 
    '../../../assets/svg/Medkart_logo_link_preview.png',
    // '../../../assets/svg/justdial-seeklogo.com.svg', 
    'https://asset.brandfetch.io/idG8419ceE/idvn_MUTNd.svg',
    '../../../assets/svg/dawaa-dost-making-drugs-more-accessible-and-affordable.jpg',
    '../../../assets/svg/cardekho.jpg',
    '../../../assets/svg/sankalp.jfif',
  ];
  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.startImageSlider();
  }

  startImageSlider() {
    setInterval(() => {
      this.nextImage();
    }, 1000); // Change slide every 3 seconds (adjust as needed)
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    // console.log(this.currentImageIndex);
    
  }



  // imageObject = [
  //   {
  //     image: '../../../assets/svg/mumusosvg.svg',
  //     thumbImage: '../../../assets/svg/mumusosvg.svg',
  //     title: 'MUMUSO'
  //   },
  //   {
  //     image: 'https://asset.brandfetch.io/idaAonmqEO/idEwHbhW9N.png',
  //     thumbImage: 'https://asset.brandfetch.io/idaAonmqEO/idEwHbhW9N.png',
  //     title: 'GIRNAR CARE'
  //   },
  //   {
  //     image: '../../../assets/svg/Medkart_logo_link_preview.png',
  //     thumbImage: '../../../assets/svg/Medkart_logo_link_preview.png',
  //     title: 'MEDKART PHARMACY'
  //   },
  //   {
  //     image: 'https://asset.brandfetch.io/idXH7jJoqt/idMrLGC-PG.png',
  //     thumbImage: 'https://asset.brandfetch.io/idXH7jJoqt/idMrLGC-PG.png',
  //     title: 'JUST DIAL'
  //   },
  //   {
  //     image: 'https://asset.brandfetch.io/idG8419ceE/idvn_MUTNd.svg',
  //     thumbImage: 'https://asset.brandfetch.io/idG8419ceE/idvn_MUTNd.svg',
  //     title: 'INDUS TOWER'
  //   },
  //   {
  //     image: 'https://asset.brandfetch.io/id0qfhV3i6/idZ7nm1H58.svg',
  //     thumbImage: 'https://asset.brandfetch.io/id0qfhV3i6/idZ7nm1H58.svg',
  //     title: 'HDFC LIFE'
  //   },
  //   {
  //     image: '../../../assets/svg/dawaa-dost-making-drugs-more-accessible-and-affordable.jpg',
  //     thumbImage: '../../../assets/svg/dawaa-dost-making-drugs-more-accessible-and-affordable.jpg',
  //     title: 'DAWA DOST',
  //   },
  //   {
  //     image: '../../../assets/svg/cardekho.jpg',
  //     thumbImage: '../../../assets/svg/cardekho.jpg',
  //     title: 'CAR DEKHO',
  //   },
  //   {
  //     image:'../../../assets/svg/sankalp.jfif',
  //     thumbImage: '../../../assets/svg/sankalp.jfif',
  //     title:'SanKalp'
  //   }
  // ];
}
