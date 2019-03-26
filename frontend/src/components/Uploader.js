import React from "react";
import Dropzone from 'react-dropzone';
import '../css/upload.css';


class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            empty: true
        };
    }

    formData = {
        //name: this.state.files[0].name, // simply take the last file this.state.files[get last index].name,
        //file: this.state.files[0]
    };

    onDrop(files) {
        this.setState({files: files, empty: false});

        //this.formData.name = this.state.files[0].name;
        //this.formData.file = this.state.files[0];
        console.log("From state");
        console.log(this.state.files);

        //   const req = request.post('/upload')
        //  files.forEach(file => {
        //       req.attach(file.name, file)
        //   })
        //   req.end(callback)
        files.forEach(file => {
            console.log(file.name, file);
        })
    }

    onCancel() {
        this.setState({files: [], empty: false});
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
                    onDrop={ this.props.handleImageChange }
                    onFileDialogCancel={this.onCancel.bind(this)}
                    multiple="false"
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
                </Dropzone>
                <aside>
                    <ul>{files}</ul>
                </aside>
            </section>);
    }
}

export default Uploader;