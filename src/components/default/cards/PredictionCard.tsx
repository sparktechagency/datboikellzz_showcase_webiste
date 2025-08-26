import React from 'react'
import Image from 'next/image';
import { imageUrl } from '@/lib/server';

function PredictionCard({ post }: any) {
    return (
        <div className="w-full border border-gray-100 bg-gradient-to-tr to-green-300/40 via-white from-white bg-white  rounded-xl  p-6">
            <div className="w-full flex items-center justify-between mb-4">
                <div className="flex items-center  gap-2">
                    <Image
                        width={50}
                        height={50}
                        src={'/icons/brand.svg'}
                        alt=""
                        className="w-full h-12 object-cover"
                    />
                </div>
                <h1>Posted 2h ago </h1>
            </div>

            <Image
                width={400}
                height={270}
                src={imageUrl(post?.post_image)}
                alt=""
                className="w-full h-78 rounded object-cover"
            />
            <div className='flex items-center mt-3 justify-start gap-2'>
                <Image
                    width={50}
                    height={50}
                    src={'/vs.svg'}
                    alt=""
                    className="w-8 h-auto"
                />
                <h1>{post?.postTitle}</h1>
            </div>
            <div className='flex items-center mt-3 justify-start gap-2'>
                <Image
                    width={50}
                    height={50}
                    src={'/pradiction.svg'}
                    alt=""
                    className="w-8 h-auto"
                />
                <h1>{post?.predictionDescription}</h1>
            </div>
        </div>
    );
};

export default PredictionCard