export default function Cadastro() {
    return (
        <>
            <div className="container-sm bg-100">
                <form className="grid grid-cols-1 gap-5" data-bs-validate="" noValidate="">
                    <div className="grid gap-5">
                        <div className="form-field md:g-col-6">
                            <label htmlFor="validationCustom01" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                defaultValue="Mark Otto"
                                required=""
                                aria-describedby="validationCustom01Feedback"
                            />
                            <div id="validationCustom01Feedback" className="invalid-feedback">
                                Full name is required
                            </div>
                        </div>
                        <div className="form-field md:g-col-6">
                            <label htmlFor="validationCustomUsername" className="form-label">
                                Donation amount
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend">
                                    $
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    defaultValue={100}
                                    id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend validationCustomUsernameFeedback"
                                    required=""
                                />
                            </div>
                            <div id="validationCustomUsernameFeedback" className="invalid-feedback">
                                Please enter a donation amount
                            </div>
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="validationCustomAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustomAddress"
                            defaultValue="1234 Main St"
                            required=""
                            aria-describedby="validationCustomAddressFeedback"
                        />
                        <div id="validationCustomAddressFeedback" className="invalid-feedback">
                            Please enter a mailing address
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <div className="form-field md:g-col-6">
                            <label htmlFor="validationCustom03" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required=""
                                aria-describedby="validationCustom03Feedback"
                            />
                            <div id="validationCustom03Feedback" className="invalid-feedback">
                                Please provide a city
                            </div>
                        </div>
                        <div className="form-field md:g-col-4">
                            <label htmlFor="validationCustom04" className="form-label">
                                State
                            </label>
                            <select
                                className="form-control"
                                id="validationCustom04"
                                required=""
                                aria-describedby="validationCustom04Feedback"
                            >
                                <option selected="" disabled="" value="">
                                    Choose…
                                </option>
                                <option>...</option>
                            </select>
                            <div id="validationCustom04Feedback" className="invalid-feedback">
                                Please select a state
                            </div>
                        </div>
                        <div className="form-field md:g-col-2">
                            <label htmlFor="validationCustom05" className="form-label">
                                Zip
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom05"
                                required=""
                                aria-describedby="validationCustom05Feedback"
                            />
                            <div id="validationCustom05Feedback" className="invalid-feedback">
                                Required
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Shipping method</label>
                        <div className="form-field mb-1">
                            <input
                                type="radio"
                                id="validationCustomRadio1"
                                className="radio"
                                name="shipping"
                                required=""
                            />
                            <div className="form-field-content">
                                <label htmlFor="validationCustomRadio1">Standard</label>
                                <small className="form-text">Arrives in 5-7 business days.</small>
                            </div>
                        </div>
                        <div className="form-field">
                            <input
                                type="radio"
                                id="validationCustomRadio2"
                                className="radio"
                                name="shipping"
                                required=""
                            />
                            <div className="form-field-content">
                                <label htmlFor="validationCustomRadio2">Express</label>
                                <small className="form-text">Arrives in 2-3 business days.</small>
                            </div>
                        </div>
                    </div>
                    <div className="form-field">
                        <div className="switch">
                            <input
                                type="checkbox"
                                id="validationCustomSwitch"
                                role="switch"
                                switch=""
                            />
                        </div>
                        <label htmlFor="validationCustomSwitch">Subscribe to newsletter</label>
                    </div>
                    <button className="btn-solid theme-primary justify-self-start" type="submit">
                        Submit form
                    </button>
                </form>
            </div>
        </>
    );
}