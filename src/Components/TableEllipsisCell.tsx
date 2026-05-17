import React from 'react';

const TableEllipsisCell: React.FC<{ text: string; maxWidth: number }> = ({
  text,
  maxWidth,
}) => {
  return (
    <div
      style={{
        width: `${maxWidth}px`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
      }}
      title={text}
    >
      {text}
    </div>
  );
};

export default TableEllipsisCell;
