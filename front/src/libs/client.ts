import { createClient } from 'contentful';

type TcontentfulProps = { space: string; accessToken: string };

const convert = () => {
  if (
    typeof process.env.CONTENTFUL_SPACE_ID !== 'string' ||
    typeof process.env.CONTENTFUL_ACCESS_KEY !== 'string'
  )
    return {
      space: '',
      accessToken: '',
    };

  const datas: TcontentfulProps = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  };

  return datas;
};

export const client = createClient(convert());
