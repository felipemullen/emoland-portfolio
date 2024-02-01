import fs from 'fs';
import path from 'path';

export class PhotoService {
    public static photoRoot = path.resolve('public/photo');
    public static validExtensions = ['.JPG', '.JPEG', '.PNG', '.GIF', 'WEBP'];

    static listPics() {
        const dir = path.resolve(this.photoRoot);
        const allFiles = fs.readdirSync(dir, { recursive: true });

        const images = allFiles.filter((file) => {
            const ext = path.extname(file.toString()).toUpperCase();
            return this.validExtensions.includes(ext);
        }).map(shortpath => `/photo/${shortpath.toString()}`);

        return images;
    }
}