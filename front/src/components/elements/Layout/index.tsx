import { LayoutProps } from './type';

export const Layout = ({ children }: LayoutProps) => (
  <div className='m-auto min-h-screen bg-body px-[2%] pc:max-w-[1200px]'>{children}</div>
);
