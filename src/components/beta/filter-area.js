import React from 'react';

class FilterArea extends React.Component {

  changeFilter(e) {
    const text = e.currentTarget.value;
    this.props.filterChange({
      title: text
    })
  }

  render() {
    return (
        <div className='panel panel-white no-border-radius'>
          <div className="panel-body">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Co Cię interesuje?</label>
                  <input type="text"
                      onInput={this.changeFilter.bind(this)}
                      className="form-control" placeholder="Nazwa turnieju"/>
                </div>

              {/*<div className="col-sm-4">*/}
              {/*  <div className="form-group">*/}
              {/*    <label>Kiedy</label>*/}
              {/*    <div className="form-control">*/}
              {/*      <DropdownButton noCaret title='dupa'>*/}
              {/*        <MenuItem eventKey="1">Action</MenuItem>*/}
              {/*      </DropdownButton>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*<div className="col-sm-4">*/}
              {/*  <div className="form-group">*/}
              {/*    <label>Województwo</label>*/}
              {/*    <input type="text" className="form-control" placeholder="Eugene Kopyov"/>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
    );
  }
}

export default FilterArea;