type PaginationProps={
    onPaginate:()=>void;
}
const Pagination = () => {
  return (
    <div className="pagination">
      <span onClick= className="pagination__item">1</span>
      <span className="pagination__item">2</span>
      <span className="pagination__item">3</span>
    </div>
  );
};
export default Pagination;
