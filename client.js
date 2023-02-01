import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: '888megxu',
    dataset: 'production',
    useCdn: true
});