import { PrismaService } from 'prisma/prisma.service';
export declare class ObjetoService {
    private prisma;
    constructor(prisma: PrismaService);
    uploadFile(file: Express.Multer.File, userId: string, description?: string, tags?: string[]): Promise<{
        id: string;
        name: string;
        description: string | null;
        url: string;
        tags: string[];
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteFileById(userId: string, fileId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        url: string;
        tags: string[];
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    searchObjetos(userId: string, keyword: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        url: string;
        tags: string[];
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateObjeto(userId: string, fileId: string, updateData: {
        name?: string;
        description?: string;
        tags?: string[];
    }): Promise<{
        id: string;
        name: string;
        description: string | null;
        url: string;
        tags: string[];
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listAllFiles(userId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        url: string;
        tags: string[];
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getObjetoDetails(userId: string, fileId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        url: string;
        tags: string[];
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getFile(objectId: string): Promise<{
        fileBuffer: Buffer;
        mime: string;
    }>;
}
