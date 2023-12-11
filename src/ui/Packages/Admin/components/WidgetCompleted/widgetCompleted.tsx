import React from 'react';

import styles from 'ui/Packages/Admin/components/WidgetCompleted/widgetCompleted.module.scss';
import { Widget } from 'ui/common/components/layout/Widget/Widget';

type Props = { children?: React.ReactNode };

export const WidgetCompleted = ({ children }: Props) => (
  <Widget className={styles.widgetCompleted}>{children}</Widget>
);
