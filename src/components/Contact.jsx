import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-extrabold text-blue-700 mb-4 border-b-2 border-blue-600 inline-block pb-1">
            Contact
          </h3>

          <h4 className="text-xl font-semibold text-blue-700 mb-3">
            Lab Address
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Department of Biotechnology <br />
            Dr. B. R. Ambedkar National Institute of Technology (NIT Jalandhar) <br />
            G.T. Road, Amritsar Bypass <br />
            Jalandhar, Punjab – 144011 <br />
            India
          </p>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            Contact Details
          </h4>
          <p className="text-gray-700">
            📧 Email:{" "}
            <a
              href="mailto:biotech@nitj.ac.in"
              className="text-blue-600 hover:underline"
            >
              biotech@nitj.ac.in
            </a>
            <br />
            ☎ Phone: +91-181-2690301, 2690453
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
