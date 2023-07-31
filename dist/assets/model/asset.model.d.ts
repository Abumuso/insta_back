import { Model } from 'sequelize-typescript';
interface assetAttrs {
    id: string;
    photo_id: number;
    url: string;
    extension: string;
}
export declare class Asset extends Model<Asset, assetAttrs> {
    id: number;
    url: string;
    extension: string;
    photo_id: number;
}
export {};
