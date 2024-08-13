import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ObjetoService } from './objeto.service';
export declare class ObjetoController {
    private objetoService;
    constructor(objetoService: ObjetoService);
    uploadFile(file: Express.Multer.File, userId: string, req: any): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            tags: string[];
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    deleteFile(userId: string, fileId: string): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            tags: string[];
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    searchObjetos(userId: string, keyword: string): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            tags: string[];
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    listAllFiles(userId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            tags: string[];
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
    updateObjeto(userId: string, fileId: string, updateData: {
        name?: string;
        description?: string;
        tags?: string[];
    }): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            tags: string[];
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getObjetoDetails(userId: string, fileId: string): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            tags: string[];
            userId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getFile(fileId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
