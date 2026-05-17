export interface AttendanceRecord {
  id: number;
  name: string;
  date: string;
  status: string;
}
export interface AddWorkersFilter {
  customerId?: string;
} 
export interface AddWorkersPaginationProps {
  pageNo: number;
  pageSize: number;
}

export interface AddWorkersHeaderProps {
  showFilters: boolean;
  paginationObj: AddWorkersPaginationProps ;
  setPaginationObj: React.Dispatch<
    React.SetStateAction<AddWorkersPaginationProps>
  >;
}

export interface AddWorkersContainerProps {
  showFilters: boolean;
  paginationObj: AddWorkersPaginationProps ;
  setPaginationObj: React.Dispatch<
    React.SetStateAction<AddWorkersPaginationProps>
  >;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}