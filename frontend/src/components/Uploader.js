import React from "react";
import ImageUploader from 'react-images-upload';
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
        // Do something with files
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
            width: 200,
            height: 200,
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
            backgroundColor : '#eee'
        };


        return (
                <section className="fileZone">
                    <Dropzone 
                        accept="image/*" 
                        onDrop={this.onDrop.bind(this)}
                        onFileDialogCancel={this.onCancel.bind(this)}
                        multiple="false"
                        >
                        {({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
                        let styles = {...baseStyle}
                        styles = isDragActive ? {...styles, ...activeStyle} : styles
                        styles = isDragReject ? {...styles, ...rejectStyle} : styles
                           
                        return (
                        <div className="fileZone" {...getRootProps()} style={styles}>
                            <input {...getInputProps()}/>
                            <div>
                                {isDragAccept ? 'Drop' : 'Drag'} files here...
                            </div>
                            {isDragReject && <div>Unsupported file type...</div>}
                        </div>
                        )
                        }}
                    </Dropzone>
                    <aside>
                        <h4>File</h4>
                        <ul>{files}</ul>
                    </aside>
                </section>);}
            }

            export default Uploader;