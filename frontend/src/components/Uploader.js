import React from "react";
import Dropzone from 'react-dropzone';
import '../css/upload.css';


class Uploader extends React.Component {

    constructor() {
        super();
        this.state = {
            files: []
        };
    }

    onDrop(files) {
        this.setState({files});
    }

    onCancel() {
        this.setState({
            files: []
        });
    }

    render() {
        const files = this.state.files.map(file => (
                    <p key={file.name}>{file.name}</p>
                    ));

        const baseStyle = {
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
        };
        const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee'
        };
        const rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            backgroundColor: '#eee'
        };


        return (
                <section className="Submit">
                    <h3>Submit your art.</h3>
                    <br/>
                    <Dropzone 
                        accept="image/*" 
                        onDrop={this.onDrop.bind(this)}
                        onFileDialogCancel={this.onCancel.bind(this)}
                        multiple="false"
                        >
                        {({
                                getRootProps, getInputProps, isDragActive,
                                        isDragAccept, isDragReject, acceptedFiles }) => {
                                let styles = {...baseStyle}
                        styles = isDragActive ? {
                                                ...styles, ...activeStyle} : styles
                        styles = isDragReject ? {
                                                ...styles, ...rejectStyle} : styles
                
                        return (
                        <div className="fileZone" {
                                                ...getRootProps()} style={styles}>
                            <input {...getInputProps()}/>
                            <div>Click here or {isDragAccept ? 'drop' : 'drag'} the photo...</div>
                            {isDragReject && <div>Unsupported file type...</div>}
                        </div> )
                        }}
                    </Dropzone>
                    <aside>
                        <ul>{files}</ul>
                    </aside>
                </section>);
                            }
                }

                export default Uploader;