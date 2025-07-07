export const url = 'https://api.betwisepicks.com';
 
export const imageUrl = (image: string) => {
    return image
        ? image?.startsWith('http')
            ? image
            : image?.startsWith('/')
                ? `${url}${image}`
                : `${url}/${image}`
        : 'https://placehold.co/400';
};

