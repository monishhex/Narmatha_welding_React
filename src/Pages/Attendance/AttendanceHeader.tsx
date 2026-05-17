import { Col, Form, Input, Row } from "antd";
import type{ AttendanceHeaderProps } from "./Attendance.propTypes";




const AttendanceHeader: React.FC<AttendanceHeaderProps> = (
    { showFilters, paginationObj, setPaginationObj }
) => {
    const [form] = Form.useForm();
    
    return(<div className={`filter-form ${showFilters ? 'open' : ''}`}>
        <Form
          form={form}
          layout='inline'
        //   onFinish={handleSearch}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              form.submit();
            }
          }}
        >
        <Row gutter={[16, 16]} style={{ width: '100%' }}>
            <Col xs={24} sm={12} md={6}>
                <Form.Item name='customerId'>
                   <Input placeholder='Customer Name' allowClear />
                </Form.Item>
              </Col>
        </Row>
        </Form>
        
    </div>
        
    );

}


export default AttendanceHeader;