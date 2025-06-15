export interface PropertyData {
    price: string;
    title: string;
    location: string;
    beds: number;
    baths: number;
    squareFeet: number;
    imageUrl: string;
}

export interface PropertyCardProps {
    propertyData: PropertyData;
}

export interface IcenterHeading {
    title?: string;
    subTitle?: string;
}

export interface IstartHeading {
    title: string,
    callbackBtn?: boolean,
    ctaBtn?: () => void
}