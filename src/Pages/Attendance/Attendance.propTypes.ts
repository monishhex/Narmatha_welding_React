export interface AttendanceRecord {
  id: number;
  name: string;
  date: string;
  status: string;
}
export interface AttendanceFilterProps {
  customerId?: string;
} 
export interface AttendancePaginationProps {
  pageNo: number;
  pageSize: number;
}

export interface AttendanceHeaderProps {
  showFilters: boolean;
  paginationObj: AttendancePaginationProps ;
  setPaginationObj: React.Dispatch<
    React.SetStateAction<AttendancePaginationProps>
  >;
}

export interface AttendanceContainerProps {
  showFilters: boolean;
  paginationObj: AttendancePaginationProps ;
  setPaginationObj: React.Dispatch<
    React.SetStateAction<AttendancePaginationProps>
  >;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}