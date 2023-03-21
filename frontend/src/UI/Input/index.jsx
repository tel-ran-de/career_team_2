import React, { forwardRef } from 'react';
import s from './index.module.scss';

export const Input = forwardRef((props, ref) => {
	return <input {...props} ref={ref} className={s.input} />;
});

export default Input;
