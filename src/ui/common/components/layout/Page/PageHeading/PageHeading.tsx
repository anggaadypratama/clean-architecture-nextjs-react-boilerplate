import { ReactNode } from 'react';

import { nunitoLight } from 'ui/common/assets/fonts/fonts';

import styles from 'ui/common/components/layout/Page/PageHeading/pageHeading.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};
export const PageHeading = ({ children, className }: Props) => {
  return (
    <h1
      className={`${nunitoLight.className} ${styles.pageHeader} ${className}`}
    >
      {children}
    </h1>
  );
};
