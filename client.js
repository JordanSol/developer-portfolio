import { SanityClient } from "@sanity/client";

const client = new SanityClient({
    projectId: '888megxu',
    dataset: 'production',
    useCdn: true
});

export default client