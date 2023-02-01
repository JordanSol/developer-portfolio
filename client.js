import { SanityClient } from "@sanity/client";

export default SanityClient({
    projectId: '888megxu',
    dataset: 'production',
    useCdn: true
});