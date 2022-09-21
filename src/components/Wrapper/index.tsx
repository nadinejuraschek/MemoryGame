import './Wrapper.css';

import { WrapperProps } from './types';

export const Wrapper = ({ children }: WrapperProps) => (
  <div className='wrapper'>{children}</div>
);
