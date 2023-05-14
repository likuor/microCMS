import { Layout } from '@/components/elements';

export const Top = () => (
  <Layout>
    <h1 className='text-2xl font-bold px-2 py-2'>Blog</h1>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3' />
  </Layout>
);
