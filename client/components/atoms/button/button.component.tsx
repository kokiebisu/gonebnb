import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LoginButton } from './button.login';
import { ButtonProps } from './props';
import { GlobeButton } from './button.globe';
import { HostButton } from './button.host';
import { MenuButton } from './button.menu';
import { PrivacyButton } from './button.privacy';
import { BorderButton } from './button.border';
import { BannerButton } from './button.banner';
import { PlainButton } from './button.plain';
import { SearchbarButton } from './button.searchbar';
import { PaginateButton } from './button.paginate';
import { ExpandButton } from './button.expand';
import { OptionButton } from './button.option';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  to,
  extendsTo,
  tap = { scale: 0.98 },
  type,
  children,
  ...props
}) => {
  const types: mapProps = {
    login: <LoginButton {...props} />,
    globe: <GlobeButton {...props} />,
    host: <HostButton {...props} />,
    menu: <MenuButton {...props} />,
    privacy: <PrivacyButton {...props} />,
    border: <BorderButton {...props} />,
    banner: <BannerButton {...props} />,
    plain: <PlainButton {...props} />,
    searchbar: <SearchbarButton {...props} />,
    paginate: <PaginateButton {...props} />,
    expand: <ExpandButton {...props} />,
    option: <OptionButton {...props} />,
  };

  if (type) {
    return types[type];
  }

  if (to) {
    return (
      <div className={extendsTo} data-testid='button'>
        <Link href={to}>{children}</Link>
      </div>
    );
  }

  return (
    <motion.button
      whileTap={tap}
      data-testid='button'
      className={extendsTo}
      onClick={onPress}>
      {children}
    </motion.button>
  );
};
