import { Col, Row, Tooltip } from "antd";
import PageTitle from "../../Components/PageTitle";
import type { AttendanceContainerProps, AttendanceRecord } from "./Attendance.propTypes";
import {  Download, Funnel } from 'lucide-react';
import TableComponent from "../../Components/Table/TableComponent";
import type { ColumnType } from "antd/es/table";


const AttendanceHeader: React.FC<AttendanceContainerProps> = ({
    showFilters, paginationObj, setPaginationObj,setShowFilters
}) => {
    const columns :ColumnType<AttendanceRecord>[] = [
        {
            title: 'S.no',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },{
          title: 'Salary',
          dataIndex: 'salary',
          key: 'salary',
        },{
          title: 'Advacnce',
          dataIndex: 'advance',
          key: 'advance',
        },{
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },{
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
          title: 'Actions',
          key: 'actions',
          render: (_, record) => (
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Action buttons/icons go here */}
              </div>
          ),
        }
    ]
    return(
        <>
        <Row
        justify='space-between'
        align='middle'
        gutter={[0, 10]}
        style={{
          padding: '0 4px',
          margin: '10px 0',
          width: '100%',
        }}
      >
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.7rem',
          }}
        >
            <PageTitle />
            <Tooltip title='Filter'>
            <Funnel
              onClick={() => setShowFilters(!showFilters)}
              className='table-filter-icon'
              style={{ color: showFilters ? '#004074ff' : 'rgb(103, 117, 122)', cursor: 'pointer' }}
              size={16}
            />
          </Tooltip>

          <Tooltip title='Download'>
            <Download
              className='table-download-icon'
              style={{ color: 'rgb(103, 117, 122)', cursor: 'pointer' }}
              size={16}
            />
          </Tooltip>
          </Col>
           </Row>
          <Row>
        {/* Report Table */}
        <Col span={24}>
          <TableComponent
            // rowKey='yapKitNumber'
            columns={columns}
            // dataSource={vehicleData}
            // onChange={handleTableChange}
          />
        </Col>
        
       </Row>
        </>
    );
}

export default AttendanceHeader;