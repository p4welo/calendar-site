import React from 'react';

class AuthModal extends React.Component {

  submit() {
    this.props.onSubmit();
  }

  render() {
    if (this.props.visible) {
      return (
          <>
            <h3>visible: {this.props.visible}</h3>
            <div id="modal_default"
                className='modal fade in'
                style={{ display: `block`, paddingLeft: `0px` }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h5 className="modal-title">Basic modal</h5>
                  </div>

                  <div className="modal-body">
                    <h6 className="text-semibold">Text in a modal</h6>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                      odio sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

                    <hr/>

                    <h6 className="text-semibold">Another paragraph</h6>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                      vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  </div>

                  <div className="modal-footer">
                    <button type="button"
                        onClick={() => this.submit()}
                        className="btn btn-primary legitRipple">Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
      );
    }
    return (
        <>
          <h3>visible: {this.props.visible}</h3>
        </>
    );
  }
}

export default AuthModal;