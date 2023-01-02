/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import { useState } from 'react';

import Image from '@/components/Image';

import type { ImageProps } from '@/components/Image';

type ImageSensitiveProps = ImageProps & {
  message?: string;
};

export default function ImageSensitive({
  message = '',
  ...props
}: ImageSensitiveProps) {
  const [isShown, setShown] = useState<boolean>(false);

  return (
    <div className={clsx('custom-image-sensitive relative')}>
      {!isShown && (
        <div
          className={clsx(
            'border-divider-light absolute inset-0 z-10 flex items-center justify-center rounded-lg border bg-slate-100',
            'dark:border-divider-dark dark:bg-slate-800'
          )}
        >
          <div className={clsx('flex flex-col items-center gap-2')}>
            <div className={clsx('font-bold')}>
              WARNING: {message || 'Sensitive Content'}
            </div>
            <p className={clsx('text-sm')}>
              This image is flagged as sensitive content.
            </p>
            <button
              type="button"
              className={clsx(
                'border-divider-light mt-4 flex h-9 items-center rounded-full border bg-white px-4 text-sm',
                'dark:bg-slate-900'
              )}
              onClick={() => setShown(true)}
            >
              Show
            </button>
          </div>
        </div>
      )}
      <Image backdrop={isShown} {...props} />
    </div>
  );
}