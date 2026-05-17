import { Table } from 'antd';
import type { TableProps } from 'antd';
import './TableComponent.style.css';

interface ReusableTableProps<T> extends TableProps<T> {
  className?: string;
}

function TableComponent<T extends object>({
  columns,
  dataSource,
  scroll = { x: 'max-content' },
  pagination = false,
  bordered = true,
  className = 'table-component',
  ...rest
}: ReusableTableProps<T>) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={scroll}
      pagination={pagination}
      bordered={bordered}
      className={className}
      tableLayout='fixed'
      size='small'
      {...rest}
    />
  );
}

export default TableComponent;
