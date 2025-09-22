import { useState } from "react";

const Contact = () => {
  // IMPORTANT: Replace with your own web3forms access key
  const accessKey = "449d79f1-239c-4e92-b4ed-38b2e60c27bf";

  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("from_name", "Sochi Agricultural Website");
    formData.append("subject", `New Contact Form Submission from ${formData.get("name")}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const res = await response.json();

      if (res.success) {
        setResult("Message sent successfully! We will get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Error from web3forms", res);
        setResult(res.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResult(null);
      }, 6000); // Hide message after 6 seconds
    }
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question, a project inquiry, or just want to say hello? Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left mb-1">Your Message</label>
              <textarea name="message" id="message" rows={5} required className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <div>
              <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {result && (
            <div className={`mt-6 text-center p-3 rounded-md ${result.includes("successfully") ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default Contact;