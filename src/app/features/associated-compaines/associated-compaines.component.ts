import { Component } from '@angular/core';

@Component({
  selector: 'app-associated-compaines',
  templateUrl: './associated-compaines.component.html',
  styleUrls: ['./associated-compaines.component.css']
})
export class AssociatedCompainesComponent {
  imageObject = [
    {
      image: '../../../assets/svg/mumusosvg.svg',
      thumbImage: '../../../assets/svg/mumusosvg.svg',
      title: 'MUMUSO'
    },
    {
      image: 'https://asset.brandfetch.io/idaAonmqEO/idEwHbhW9N.png',
      thumbImage: 'https://asset.brandfetch.io/idaAonmqEO/idEwHbhW9N.png',
      title: 'GIRNAR CARE'
    },
    {
      image: '../../../assets/svg/Medkart_logo_link_preview.png',
      thumbImage: '../../../assets/svg/Medkart_logo_link_preview.png',
      title: 'MEDKART PHARMACY'
    },
    {
      image: '../../../assets/svg/justdial-seeklogo.com.svg',
      thumbImage: '../../../assets/svg/justdial-seeklogo.com.svg',
      title: 'JUST DIAL'
    },
    {
      image: 'https://asset.brandfetch.io/idG8419ceE/idvn_MUTNd.svg',
      thumbImage: 'https://asset.brandfetch.io/idG8419ceE/idvn_MUTNd.svg',
      title: 'INDUS TOWER'
    },
    {
      image: 'https://asset.brandfetch.io/id0qfhV3i6/idZ7nm1H58.svg',
      thumbImage: 'https://asset.brandfetch.io/id0qfhV3i6/idZ7nm1H58.svg',
      title: 'HDFC LIFE'
    },
    {
      image: '../../../assets/svg/dawaa-dost-making-drugs-more-accessible-and-affordable.jpg',
      thumbImage: '../../../assets/svg/dawaa-dost-making-drugs-more-accessible-and-affordable.jpg',
      title: 'DAWA DOST',
    },
    {
      image: '../../../assets/svg/cardekho.jpg',
      thumbImage: '../../../assets/svg/cardekho.jpg',
      title: 'CAR DEKHO',
    },
    {
      image:'../../../assets/svg/sankalp.jfif',
      thumbImage: '../../../assets/svg/sankalp.jfif',
      title:'SanKalp'
    }
  ];
}
