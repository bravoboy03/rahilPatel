import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions via LinkedIn   <a href={resumeData.socialLinks[0].url} target="_blank"><i className={resumeData.socialLinks[0].className}></i></a>
              </p>
            </div>
          </div>
          
        </section>
        );
  }
}
