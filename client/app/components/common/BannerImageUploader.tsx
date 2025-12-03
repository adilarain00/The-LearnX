import React, { FC } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/styles';

type Props = {
  image: string;
  onChange: (value: string) => void;
  id?: string;
  accept?: string;
};

const BannerImageUploader: FC<Props> = ({
  image,
  onChange,
  id = 'bannerFile',
  accept = 'image/*',
}) => {
  const [dragging, setDragging] = React.useState(false);

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev: any) => {
        if (reader.readyState === 2) {
          onChange(ev.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type='file'
        accept={accept}
        id={id}
        className='hidden'
        onChange={handleFileChange}
      />
      <label
        htmlFor={id}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={styles.combineStyles(
          'w-full min-h-[200px] border-2 border-dashed p-6 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200',
          dragging
            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
            : 'border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500'
        )}
      >
        {image ? (
          <div className='w-full'>
            <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-md ring-1 ring-slate-300 dark:ring-slate-700 bg-slate-50 dark:bg-slate-900 p-4'>
              <Image
                src={image}
                alt='Hero Banner'
                fill
                className='object-contain p-2'
                sizes='100vw'
              />
            </div>
            <p className='text-center mt-4 text-sm text-slate-600 dark:text-slate-400'>
              Click to change banner image
            </p>
          </div>
        ) : (
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center'>
              <svg
                className='w-8 h-8 text-slate-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
            <p className='text-slate-600 dark:text-slate-400 mb-2'>
              Drag and drop your banner image here
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-500'>
              or click to browse (PNG, JPG, JPEG up to 10MB)
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default BannerImageUploader;
