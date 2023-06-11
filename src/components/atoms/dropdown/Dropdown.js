'use client';

import { useState } from 'react';

import styles from './styles.module.css';

export default function Dropdown({ menuItems, defaultValue, label, top }) {
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
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {label ? (
          <span>{label || selectedOption}</span>
        ) : (
          <span>{selectedOption || defaultValue.item}</span>
        )}
        <i className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
      </div>
      {isOpen && (
        <ul className={top ? styles.dropdownMenuTop : styles.dropdownMenu}>
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
}
