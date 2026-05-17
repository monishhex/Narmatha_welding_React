import { useState } from "react";
import ResponsiveTableLayout from "../../Components/ResponsiveTableLayout";
import AttendanceContainer from "./AttendanceContainer";
import AttendanceHeader from "./AttendanceHeader";
import type { AttendancePaginationProps } from "./Attendance.propTypes";


const Attendance = () => {

  const [showFilters, setShowFilters] = useState(false);

  // Pagination state
  const [paginationObj, setPaginationObj] = useState<AttendancePaginationProps>({
    pageNo: 1,
    pageSize: 10,
  });
  
  

  return (
    <>
    <ResponsiveTableLayout>
      <AttendanceHeader 
          showFilters={showFilters}
          paginationObj={paginationObj}
          setPaginationObj={setPaginationObj}
      />
    <AttendanceContainer
        setShowFilters={setShowFilters}
          showFilters={showFilters}
          paginationObj={paginationObj}
          setPaginationObj={setPaginationObj}
     />
    </ResponsiveTableLayout>
    
    </>
  );
};

export default Attendance;