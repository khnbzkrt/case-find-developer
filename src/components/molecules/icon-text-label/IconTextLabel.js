import Image from 'next/image';

import styles from './styles.module.css';

import CrossIcon from '../../../../public/images/page2/icon_filled_cross.webp';

export default function IconTextLabel({ icon, text, handleCrossClick }) {
  return (
    <div className={styles.iconTextLabelContainer}>
      <div className={styles.iconTextLabelIconTextContainer}>
        {icon}
        <span>{text}</span>
      </div>
      <Image
        src={CrossIcon}
        width={16}
        height={16}
        alt="cross icon"
        className={styles.iconTextLabelCrossIcon}
        onClick={handleCrossClick}
      />
    </div>
  );
}
