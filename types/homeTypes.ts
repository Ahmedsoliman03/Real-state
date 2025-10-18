export interface HomePage {

    hero: Hero[];
    CTA: CTA;
    Excellence: Excellence[];
    features: Feature[];
  }
  
  export interface Hero {
    id: number;
    title: string;
    subTitle: string;
    image: ImageFormat
  }
  
  export interface CTA {
    id: number;
    title: string;
    subTitle: string;
  }
  
  export interface Excellence {
    id: number;
    title: string;
    subTitle: string | null;
    Excellence1: ExcellenceItem[];
    Excellence2: ExcellenceItem[];
  }
  
  export interface ExcellenceItem {
    id: number;
    number: string | null;
    text: string | null;
  }
  
  export interface Feature {
    id: number;
    title: string;
    subTitle: string;
    card: Card;
  }
  
  export interface Card {
    id: number;
    title: string;
    address: string;
    numberOfRooms: string;
    numberOfBathRoom: string;
    Area: string;
    salery: string;
    Image: ImageFormat;
  }
  
  
  
  export interface ImageFormat {

    url: string;
  }
  