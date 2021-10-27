import React from 'react';
import jsPDF from 'jspdf'
 
class PDF extends React.Component {
 
  constructor(props) {
    super(props)
  };
 
  generatePdf = () => {
 
    var doc = new jsPDF('p', 'pt');
 
    doc.text(20, 20, )
 
    doc.setFont('helvetica')
    doc.text(20, 60, 'This is the content area.')
 
 
    doc.save("Will's Resume.pdf")
  }
 
  render() {
    return (
      <div>
        <button onClick={this.generatePdf} type="primary">Resume</button>
      </div>
    );
  }
}

export default PDF;