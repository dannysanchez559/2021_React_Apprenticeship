import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ loading, setLoading, loadTime }) => {
  const [color, setColor] = useState('rgba(137, 95, 181, 0.9)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PulseLoader color={color} loading={loading} css={override} size={20} />
  );
};

export default Spinner;
