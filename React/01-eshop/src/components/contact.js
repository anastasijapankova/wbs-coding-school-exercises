import '../App.css'

export function Contact() {

    return (
        <div>
            <h1 className="card-title">Contact us</h1>
            <form className='form'>
                <div className='input-field' >
                    <label for="salutation">Salutation</label>
                    <select id="salutation">
                        <option value="mr">Mr.</option>
                        <option value="ms">Ms.</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label for="name">Name</label>
                    <input id="name" type="text" />
                </div>
                <div className='input-field'>
                    <label for="email">Email</label>
                    <input id="email" type="email" />
                </div>
                <div className='input-field' >
                    <label for="department">Topic</label>
                    <select id="department">
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='input-field'>
                    <label for="topic">Subject</label>
                    <input id="topic" type="text" />
                </div>
                <div className='input-field'>
                    <label for="message">Message</label>
                    <input id="message" type="textarea" />
                </div>
                <button className='send-button'>Send</button>
            </form>
        </div>
    )
}