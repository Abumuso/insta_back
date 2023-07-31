/// <reference types="node" />
import { AssetsService } from './assets.service';
import { UpdateAssetDto } from './dto/update-asset.dto';
export type fileType = {
    originalname: string;
    fieldname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
};
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    create(id: string, url: fileType): Promise<import("./model/asset.model").Asset>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAssetDto: UpdateAssetDto): string;
    remove(id: string): string;
}
