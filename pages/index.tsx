import type { NextPage } from 'next';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [cells, setCells] = useState(['a', 'b', 'c']);

  const changeCellContent = (newCellValue: string, indexToUpdate: number) => {
    setCells((prevCells) => {
      return prevCells.map((cell, i) => {
        return i === indexToUpdate ? newCellValue : cell;
      });
    });
  };

  const handlePlusClicked = (id: number) => {
    setCells((prevCells) => [
      ...prevCells.slice(0, id + 1),
      '_',
      ...prevCells.slice(id + 1),
    ]);
  };

  const combinedCells = cells.join('');

  return (
    <div className={styles.boxes}>
      {cells.map((cell, id) => (
        <div className={styles.cell} key={id}>
          <input
            value={cell}
            onChange={(e) => changeCellContent(e.currentTarget.value, id)}
          ></input>
          {id < cells.length - 1 && (
            <span
              className={styles.plus}
              onClick={() => handlePlusClicked(id)}
            ></span>
          )}
        </div>
      ))}
      {combinedCells}
    </div>
  );
};

export default Home;
