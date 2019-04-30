import React, {useEffect, useState} from 'react';
import Dropzone from 'react-dropzone';
import '../css/upload.css';


class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageFiles: []
        };
    }

    onDrop(imageFiles) {
        this.setState({
            imageFiles: imageFiles
        });
        console.log(imageFiles);
        this.props.handleImageChange(imageFiles);
    }

    onCancel() {
        this.setState({files: [], empty: false});
    }

    render() {

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
                        multiple={false}
                        >
                        {({
                                getRootProps, getInputProps, isDragActive,
                                        isDragAccept, isDragReject
                        }) => {
                                        let styles = {...baseStyle};
                        styles = isDragActive ? {
                                                    ...styles, ...activeStyle
                        } : styles;
                        styles = isDragReject ? {
                                                    ...styles, ...rejectStyle
                        } : styles;
                
                        return (
                        <div className="fileZone" {
                                                         ...getRootProps()} style={styles}>
                            <input {...getInputProps()}/>
                            <div>Click here or {isDragAccept ? 'drop' : 'drag'} the photo...</div>
                            {isDragReject && <div>Unsupported file type...</div>}
                        </div>)
                        }}
                    </Dropzone>{
                        this.state.imageFiles.map((file) => <img className="preview" key={file.name} src={URL.createObjectURL(file)} />)}
                </section>);
                        }
            }

            export default Uploader;