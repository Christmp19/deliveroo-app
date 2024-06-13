import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
    projectId: 'zpv1tuto',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// https://deliverooappchrist.sanity.studio/
export default client