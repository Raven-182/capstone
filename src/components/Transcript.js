import React, { Component } from 'react';
import './Transcript.css'; // Import CSS file

class Transcript extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transcriptText: `Speaker 1: Hello there!\nSpeaker 2: Hi! How are you?\nSpeaker 1: I'm doing well, thank you. How about you?\nSpeaker 2: I'm good too. What brings you here today?\nSpeaker 1: I wanted to discuss our upcoming project and get your input on it.\nSpeaker 2: Sure, I'd be happy to help. Let's dive into it.`
    };
  }

  downloadTranscript = () => {
    // Create a blob containing the transcript text
    const transcriptBlob = new Blob([this.state.transcriptText], { type: 'text/plain' });
    // Create a link element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(transcriptBlob);
    downloadLink.download = 'transcript.txt';
    // Trigger the download
    downloadLink.click();
  };

  render() {
    return (
      <div className="transcript-container">
        <div>
          <h5>Transcript</h5>
          <p className="transcript-text">{this.state.transcriptText}</p>
        </div>
        <div>
          <button className="transcript-download-button" onClick={this.downloadTranscript}>
            Download Transcript
          </button>
        </div>
      </div>
    );
  }
}

export default Transcript;
