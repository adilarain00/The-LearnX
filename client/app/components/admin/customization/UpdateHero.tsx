import {
  useUpdateLayoutMutation,
  useGetLayoutDataQuery,
} from '@/redux/features/layout/layoutApi';
import BannerImageUploader from '@/app/components/common/BannerImageUploader';
import { toast } from 'react-hot-toast';
import styles from '@/app/styles/styles';
import React, { FC, useEffect, useState } from 'react';

type Props = {};

const UpdateHero: FC<Props> = (props: Props) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const { data, refetch } = useGetLayoutDataQuery('Banner', {
    refetchOnMountOrArgChange: true,
  });
  const [editLayout, { isLoading, isSuccess, error }] =
    useUpdateLayoutMutation();

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Hero updated successfully!');
      refetch();
    }
    if (error) {
      if ('data' in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
  }, [isSuccess, error, refetch]);

  const handleEdit = async () => {
    if (!isLoading) {
      await editLayout({
        type: 'Banner',
        image,
        title,
        subTitle,
      });
    }
  };

  const hasChanges =
    data?.layout?.banner?.title !== title ||
    data?.layout?.banner?.subTitle !== subTitle ||
    data?.layout?.banner?.image?.url !== image;

  const existingHasImage = !!data?.layout?.banner?.image?.url;
  const saveDisabled = !hasChanges || (!image && !existingHasImage);

  return (
    <div className={styles.combineStyles()}>
      <div className='mb-6'>
        <h2 className={styles.titleStyles.h3}>
          Hero{' '}
          <span className='text-purple-600 dark:text-purple-400'>
            Customization
          </span>{' '}
        </h2>
        <p className={styles.titleStyles.subtitle}>
          Edit the hero content and banner image to create a more engaging
          homepage.
        </p>
      </div>

      <div className={styles.formStyles.container}>
        <div className={styles.formStyles.group}>
          <label
            className={styles.combineStyles(
              styles.labelStyles.base,
              styles.labelStyles.required
            )}
          >
            Hero Banner Image
          </label>
          <BannerImageUploader image={image} onChange={setImage} />
        </div>

        <div className={styles.formStyles.group}>
          <label
            className={styles.combineStyles(
              styles.labelStyles.base,
              styles.labelStyles.required
            )}
          >
            Hero Title
          </label>
          <textarea
            rows={3}
            placeholder='Improve Your Online Learning Experience Better Instantly'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.combineStyles(
              styles.inputStyles.base,
              styles.inputStyles.default,
              styles.inputStyles.large,
              styles.inputStyles.textarea,
              'text-xl font-semibold'
            )}
          />
          <p className={styles.formStyles.hint}>
            This will be displayed as the main headline on your homepage
          </p>
        </div>

        <div className={styles.formStyles.group}>
          <label
            className={styles.combineStyles(
              styles.labelStyles.base,
              styles.labelStyles.required
            )}
          >
            Hero Subtitle
          </label>
          <textarea
            rows={4}
            placeholder='We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.'
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className={styles.combineStyles(
              styles.inputStyles.base,
              styles.inputStyles.default,
              styles.inputStyles.medium,
              styles.inputStyles.textarea
            )}
          />
          <p className={styles.formStyles.hint}>
            Supporting text that appears below the main title
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 sm:justify-between pt-6 border-t border-slate-200 dark:border-slate-700'>
          <div className='flex items-center gap-2'>
            {hasChanges && (
              <div
                className={styles.combineStyles(
                  styles.badgeStyles.base,
                  styles.badgeStyles.warning,
                  styles.badgeStyles.small
                )}
              >
                Unsaved Changes
              </div>
            )}
          </div>

          <div className='flex gap-3'>
            <button
              type='button'
              onClick={() => {
                if (data?.layout?.banner) {
                  setTitle(data.layout.banner.title);
                  setSubTitle(data.layout.banner.subTitle);
                  setImage(data.layout.banner.image?.url);
                }
              }}
              disabled={!hasChanges}
              className={styles.combineStyles(
                styles.buttonStyles.base,
                styles.buttonStyles.secondary,
                styles.buttonStyles.medium,
                'min-w-[120px]',
                !hasChanges ? 'opacity-50 cursor-not-allowed' : ''
              )}
            >
              Reset
            </button>

            <button
              type='button'
              onClick={handleEdit}
              disabled={saveDisabled}
              className={styles.combineStyles(
                styles.buttonStyles.base,
                hasChanges
                  ? styles.buttonStyles.success
                  : styles.buttonStyles.secondary,
                styles.buttonStyles.medium,
                'min-w-[120px]',
                !hasChanges ? 'opacity-50 cursor-not-allowed' : ''
              )}
            >
              {hasChanges
                ? saveDisabled
                  ? 'Upload image to save'
                  : 'Save Changes'
                : 'No Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHero;
