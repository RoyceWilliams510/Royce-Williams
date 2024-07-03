import React from 'react';
// import { Document, Page,pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const pdfUrl = '/RoyceWilliamsResume.pdf';

    return (
        <div style={{ width: '100vw', height: '100vh', margin: '0', padding: '0' }}>
            <h1 style={{ textAlign: 'center' }}>My Resume</h1>
            <iframe src = {pdfUrl} style={{ width: '100%', height: '90vh', border: 'none' }}/>
        </div>
    );
};

export default Resume;