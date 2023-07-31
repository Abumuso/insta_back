import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from './model/asset.model';
import { fileType } from './assets.controller';
export declare class AssetsService {
    private readonly assetRepo;
    constructor(assetRepo: typeof Asset);
    create(createAssetDto: CreateAssetDto, id: number): Promise<Asset>;
    upload(url: fileType): Promise<CreateAssetDto>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAssetDto: UpdateAssetDto): string;
    remove(id: number): string;
}
