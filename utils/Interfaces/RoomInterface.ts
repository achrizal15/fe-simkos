interface RoomInterface {
    id: string;
    code: string;
    name: string;
    image: string;
    rating: number;
    price: number;
    type: string;
    description: string;
    features: FeatureInterface[];
}
interface FeatureInterface {
    name: string;
    icon: string;
}
export default RoomInterface;
