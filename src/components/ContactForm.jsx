export default function ContactForm() {
    return (
        <form
            id="contact-form"
            action="https://public.herotofu.com/v1/31b08670-b074-11ec-9a11-4b415470ed97"
            method="post"
        >
            <h1>Say Hello!</h1>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input name="Name" id="name" type="text" required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Your Email</label>
                <input name="Email" id="email" type="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="message">Message</label>
                <input name="message" id="message" type="text" required />
            </div>
            <div>
                <button id="send-btn" type="submit">
                    Send
                </button>
            </div>
        </form>
    );
}
