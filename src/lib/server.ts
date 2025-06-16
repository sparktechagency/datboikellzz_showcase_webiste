export const url = 'http://10.0.60.26:8003';

export const imageUrl = (image: string) => {
    return image
        ? image?.startsWith('http')
            ? image
            : image?.startsWith('/')
                ? `${url}${image}`
                : `${url}/${image}`
        : 'https://placehold.co/400';
};

