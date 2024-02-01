import { Pic } from '@/app/components/pic';
import { PhotoService } from '@/app/services/photo.service';

interface Weight {
    weight: number;
    value: string;
}

interface ImageChoice {
    pathname: string;
    aspect: string;
}

export default function PhotographyPage() {

    function chooseRandomValue(probabilityMap: Weight[]) {
        let totalWeight = 0;
        for (let item of probabilityMap) {
            totalWeight += item.weight;
        }

        // Generate a random number between 1 and the total weight
        let randomNumber = Math.floor(Math.random() * totalWeight) + 1;

        // Iterate through the probability map to find the corresponding value
        let accumulatedWeight = 0;
        for (let item of probabilityMap) {
            accumulatedWeight += item.weight;
            if (randomNumber <= accumulatedWeight) {
                return item.value;
            }
        }
    }

    const weights = [
        { weight: 50, value: 'sq' },
        { weight: 50, value: 'xm' },
        { weight: 50, value: 'ym' },
        { weight: 20, value: 'xl' },
        { weight: 20, value: 'yl' },
    ];

    const photos = PhotoService.listPics();
    const randomPhotos: ImageChoice[] = [];
    while (photos.length > 0) {
        const index = Math.floor(Math.random() * photos.length);

        const aspect = chooseRandomValue(weights);
        const image = photos[index];

        randomPhotos.push({ pathname: image, aspect });
        photos.splice(index, 1);
    }

    return (
        <div className="fixed h-full w-full top-0 left-0 z-20 pl-16 pr-2 md:pr-6 overflow-y-auto">
            <div className="h-full">
                <div className="my-8 text-right">
                    <h1 className="text-4xl text-neutral-600 font-bold uppercase">/photography</h1>
                    <p className="text-xl text-neutral-500">
                        A random assortment of shots I&apos;ve taken over the years.
                    </p>
                    <hr className="my-2" />
                </div>
                <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-1 sm:gap-2 lg:gap-4">
                    {randomPhotos.map(({ pathname, aspect }, index) => (
                        <Pic key={index} pathname={pathname} aspect={aspect} />
                    ))}
                </div>
            </div>
        </div>
    );
}