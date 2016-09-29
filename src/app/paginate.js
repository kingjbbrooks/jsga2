import React, {Component} from 'react';


export class Paginate extends Component {
  handleGotoPage(page) {
    this.props.onGotoPage(page);
  }

  render() {
    const {pages, currentPage} = this.props;

    function itemClasser(pageIndex) {
      if (currentPage === pageIndex) {
        return 'page-item active';
      }

      return 'page-item';
    }

    return (
      <ul className="pagination pagination-lg">
        <li className="page-item">
          <a
            onClick={this.handleGotoPage.bind(this, currentPage === 0 ? 0 : currentPage - 1)}
            href="#"
            className="page-link"
            aria-label="Previous">
             <span aria-hidden="true">&laquo;</span>
             <span className="sr-only">Previous</span>
          </a>
        </li>
        {
          [...Array(pages).keys()].map(
            (pageIndex) =>
              <li className={itemClasser(pageIndex)} key={pageIndex}>
                <a
                  onClick={this.handleGotoPage.bind(this, pageIndex)}
                  href="#"
                  className="page-link"
                  >
                  {pageIndex + 1}
                </a>
              </li>
          )
        }
        <li className="page-item">
          <a
            onClick={this.handleGotoPage.bind(this, currentPage === pages - 1 ? pages - 1 : currentPage + 1)}
            href="#"
            className="page-link"
            aria-label="Next">
             <span className="sr-only">Next</span>
             <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    );
  }
}