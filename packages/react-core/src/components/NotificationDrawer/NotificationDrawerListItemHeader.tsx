import * as React from 'react';

import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

export const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon
};

export interface NotificationDrawerListItemHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**  Actions rendered inside the Notification Drawer List Item Header */
  children?: React.ReactNode;
  /**  Additional classes for Notification Drawer List Item Header. */
  className?: string;
  /**  Add custom icon for Notification Drawer List Item Header */
  icon?: React.ReactNode;
  /**  Notification Drawer List Item Header screen reader title */
  srTitle?: string;
  /**  Notification Drawer List Item title */
  title: string;
  /**  variant indicates the severity level */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
}

export const NotificationDrawerListItemHeader: React.FunctionComponent<NotificationDrawerListItemHeaderProps> = ({
  children,
  className = '',
  icon = null,
  srTitle,
  title,
  variant = 'default',
  ...props
}: NotificationDrawerListItemHeaderProps) => {
  const Icon = variantIcons[variant];

  return (
    <React.Fragment>
      <div {...props} className={css(styles.notificationDrawerListItemHeader, className)}>
        <span className={css(styles.notificationDrawerListItemHeaderIcon)}>{icon ? icon : <Icon />}</span>
        <h2 className={css(styles.notificationDrawerListItemHeaderTitle)}>
          {srTitle && <span className={css(a11yStyles.screenReader)}>{srTitle}</span>}
          {title}
        </h2>
      </div>
      {children && <div className={css(styles.notificationDrawerListItemAction)}>{children}</div>}
    </React.Fragment>
  );
};
