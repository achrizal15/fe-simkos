import RoomFeatureInteraface from "./RoomFeatureInteraface";

interface RoomInterface {
    id: number;
    name: string;
    type: string;
    price: number;
    image_path: string | null;
    simple_description: string;
    description: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    features: RoomFeatureInteraface[]; // Relasi dengan fitur
}

export default RoomInterface;
