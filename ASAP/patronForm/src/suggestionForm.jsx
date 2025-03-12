import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function SuggestionForm() {
    const [count, setCount] = useState(0);
    function submitform(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        const json = JSON.stringify(data);
        toast(json);
    }

    return (
        <>
            <form onSubmit={submitform} style={{ textAlign: "right" }}>
                <div className="form-group row">
                    <label htmlFor="barcode" className="col-4 col-form-label">Library Card</label>
                    <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-address-card"></i>
                                </div>
                            </div>
                            <input id="barcode" name="barcode" type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="pin" className="col-4 col-form-label">Pin</label>
                    <div className="col-8">
                        <input id="pin" name="pin" type="password" required="required" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="author" className="col-4 col-form-label">Author</label>
                    <div className="col-8">
                        <input id="author" name="author" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="title" className="col-4 col-form-label">Title</label>
                    <div className="col-8">
                        <input id="title" name="title" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="isbn" className="col-4 col-form-label">ISBN / ISSN</label>
                    <div className="col-8">
                        <input id="isbn" name="isbn" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="format" className="col-4 col-form-label">Format</label>
                    <div className="col-8">
                        <select id="format" name="format" className="custom-select">
                            <option value="book">Book</option>
                            <option value="ebook">eBook</option>
                            <option value="audiobookCD">Audiobook (Physical CD)</option>
                            <option value="audiobookDigital">Audiobook (Digital)</option>
                            <option value="dvd">DVD</option>
                            <option value="cd">CD</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="publication" className="col-4 col-form-label">Publication Date</label>
                    <div className="col-8">
                        <input id="publication" name="publication" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-4">Autoplace hold if purchased</label>
                    <div className="col-8" style={{ textAlign: "left" }}>
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input name="autohold" id="autohold_0" type="checkbox" className="custom-control-input" value="autohold" />
                            <label htmlFor="autohold_0" className="custom-control-label"></label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-4 col-8">
                        <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default SuggestionForm
