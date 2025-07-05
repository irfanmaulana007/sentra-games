'use client';

import { banners } from 'constants/mock-data';
import Carousel from '../../components/ui/Carousel';
import { Banner } from '../../types/models/banner';

export default function HomeBanner() {
    return (
        <div className="w-full">
            <Carousel
                items={banners.map((banner: Banner) => ({
                    id: banner.id,
                    image: banner.image,
                    link: banner.link,
                    alt: `Banner ${banner.id}`,
                }))}
                className="h-[340px] rounded-lg"
                autoPlay={true}
                interval={7000}
                showArrows={true}
                showDots={true}
                showPreviews={true}
                previewSize={10}
                options={{
                    loop: true,
                    dragFree: true,
                    containScroll: false,
                    align: 'center'
                }}
            />
        </div>
    );
}
