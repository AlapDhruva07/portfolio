import React from 'react';

function Contact() {
    return(
        <div className="container">
        <h3>CONTACT ME</h3>
        <form action="https://formcarry.com/s/mCqzZ5BfE8QE" method="POST" acceptCharset="UTF-8">
                <div className="form-group">
                <label htmlFor="usr">Name:</label>
                <input type="text" className="form-control" id="usr" name="name" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" className="form-control" id="phone" name="phone"/>
                </div>
                <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" rows="5" id="message" name="message"></textarea>
                <button type="submit" className="btn btn-primary">Submit</button>

</div>
</form>
    </div>
    );
}

export default Contact;