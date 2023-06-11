import { useState } from 'react';

import styles from './styles.module.css';

export const Dropdown = ({ menuItems, defaultValue, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue.item);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__toggle} onClick={toggleDropdown}>
        {label ? (
          <span>{label || selectedOption}</span>
        ) : (
          <span>{selectedOption || defaultValue.item}</span>
        )}
        <i className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
      </div>
      {isOpen && (
        <ul className={styles.dropdown__menu}>
          {menuItems?.map((menuItem) => (
            <li
              key={menuItem.id}
              onClick={() => handleOptionClick(menuItem.item)}
            >
              {menuItem.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
