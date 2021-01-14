import React, { Component } from "react";
import CommentInput from '../components/CommentInput'

class Test extends Component {
    render() {
        return (
          <>
            <div className="grid-container">
                <div className="grid-x grid-margin-x">
                    <div className="cell large-12">
                        <br/>
                        <CommentInput/>
                        <br/>
                    </div>
                </div>
            </div>
          </>
        )
    }
}
export default Test;