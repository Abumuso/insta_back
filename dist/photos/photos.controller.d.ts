import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './models/photo.model';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    create(createPhotoDto: CreatePhotoDto): Promise<Photo>;
    findAll(): Promise<Photo[]>;
    findOne(id: string): Promise<Photo>;
    findOneByUser(id: string): Promise<Photo[]>;
    update(id: string, updatePhotoDto: UpdatePhotoDto): Promise<Photo | {
        msg: string;
    }>;
    remove(id: string): Promise<Photo | {
        msg: string;
    }>;
}
