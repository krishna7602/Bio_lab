import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = ({ onClose }) => {
  const [people, setPeople] = useState([]);
  const [publications, setPublications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form states
  const [personForm, setPersonForm] = useState({
    name: "",
    role: "Professor",
    category: "PhD Scholar",
    bio: "",
    imageUrl: "",
    email: "",
    socialLinks: { linkedin: "", github: "", twitter: "" },
  });
  const [publicationForm, setPublicationForm] = useState({ title: "", authors: "", journal: "", year: "", description: "", link: "" });
  const [announcementForm, setAnnouncementForm] = useState({ title: "", date: "", link: "", important: false });
  const [linkForm, setLinkForm] = useState({ name: "", url: "", category: "" });

  const fetchData = async () => {
    try {
      const peopleRes = await axios.get("http://localhost:8001/api/v1/users/getAllStudent");
      setPeople(peopleRes.data.data);
      const pubRes = await axios.get("http://localhost:8001/api/v1/users/publications");
      setPublications(pubRes.data.data);
      const annRes = await axios.get("http://localhost:8001/api/v1/users/getAllAnnouncement");
      setAnnouncements(annRes.data.data);
      const linksRes = await axios.get("http://localhost:8001/api/v1/users/getAllUsefullLinks");
      setLinks(linksRes.data.data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e, formSetter, formState, nestedKey) => {
    const { name, value, type, checked } = e.target;
    if (nestedKey) {
      formSetter({ ...formState, [nestedKey]: { ...formState[nestedKey], [name]: value } });
    } else {
      formSetter({ ...formState, [name]: type === "checkbox" ? checked : value });
    }
  };

  const addPerson = async () => {
    try {
      await axios.post("http://localhost:8001/api/v1/users/addstudent", personForm, { withCredentials: true });
      setSuccess("Person added successfully");
      setPersonForm({
        name: "",
        role: "Professor",
        category: "PhD Scholar",
        bio: "",
        imageUrl: "",
        email: "",
        socialLinks: { linkedin: "", github: "", twitter: "" },
      });
      fetchData();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to add person");
    }
  };

  const deletePerson = async (id) => {
    try {
      await axios.post(`http://localhost:8001/api/v1/users/deletestudent/${id}`, {}, { withCredentials: true });
      setSuccess("Person deleted successfully");
      fetchData();
    } catch (err) {
      setError("Failed to delete person");
    }
  };

  const addPublication = async () => {
    try {
      await axios.post("http://localhost:8001/api/v1/users/addpublication", publicationForm, { withCredentials: true });
      setSuccess("Publication added successfully");
      setPublicationForm({ title: "", authors: "", journal: "", year: "", description: "", link: "" });
      fetchData();
    } catch (err) { setError("Failed to add publication"); }
  };

  const deletePublication = async (id) => {
    try {
      await axios.post(`http://localhost:8001/api/v1/users/publication/${id}`, {}, { withCredentials: true });
      setSuccess("Publication deleted successfully");
      fetchData();
    } catch (err) { setError("Failed to delete publication"); }
  };

  const addAnnouncement = async () => {
    try {
      await axios.post("http://localhost:8001/api/v1/users/addannouncement", announcementForm, { withCredentials: true });
      setSuccess("Announcement added successfully");
      setAnnouncementForm({ title: "", date: "", link: "", important: false });
      fetchData();
    } catch (err) { setError("Failed to add announcement"); }
  };

  const deleteAnnouncement = async (id) => {
    try {
      await axios.post(`http://localhost:8001/api/v1/users/deleteannouncement/${id}`, {}, { withCredentials: true });
      setSuccess("Announcement deleted successfully");
      fetchData();
    } catch (err) { setError("Failed to delete announcement"); }
  };

  const addLink = async () => {
    try {
      await axios.post("http://localhost:8001/api/v1/users/addlink", linkForm, { withCredentials: true });
      setSuccess("Link added successfully");
      setLinkForm({ name: "", url: "", category: "" });
      fetchData();
    } catch (err) { setError("Failed to add link"); }
  };

  const deleteLink = async (id) => {
    try {
      await axios.post(`http://localhost:8001/api/v1/users/deletelink/${id}`, {}, { withCredentials: true });
      setSuccess("Link deleted successfully");
      fetchData();
    } catch (err) { setError("Failed to delete link"); }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 overflow-auto flex justify-center items-start z-50 py-10">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">X</button>
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        {/* People */}
        {/* People */}
        <section className="mb-6 p-4 bg-gray-50 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Manage People</h2>
        <div className="flex flex-wrap gap-2 mb-2 items-center">
            <input type="text" name="name" placeholder="Name" value={personForm.name} onChange={(e) => handleChange(e, setPersonForm, personForm)} className="border p-1 rounded" required />
            <select name="role" value={personForm.role} onChange={(e) => handleChange(e, setPersonForm, personForm)} className="border p-1 rounded" required>
            <option>Professor</option>
            <option>Assistant Professor</option>
            <option>Research Associate</option>
            <option>Lab Director</option>
            </select>
            <select name="category" value={personForm.category} onChange={(e) => handleChange(e, setPersonForm, personForm)} className="border p-1 rounded" required>
            <option>PhD Scholar</option>
            <option>M.Tech Student</option>
            <option>Other</option>
            </select>
            <input type="text" name="bio" placeholder="Bio" value={personForm.bio} onChange={(e) => handleChange(e, setPersonForm, personForm)} className="border p-1 rounded" required />
            <input type="text" name="imageUrl" placeholder="Image URL" value={personForm.imageUrl} onChange={(e) => handleChange(e, setPersonForm, personForm)} className="border p-1 rounded" required />
            <input type="email" name="email" placeholder="Email" value={personForm.email} onChange={(e) => handleChange(e, setPersonForm, personForm)} className="border p-1 rounded" required />
            <input type="text" name="linkedin" placeholder="LinkedIn" value={personForm.socialLinks.linkedin} onChange={(e) => handleChange(e, setPersonForm, personForm, "socialLinks")} className="border p-1 rounded" required />
            <input type="text" name="github" placeholder="GitHub" value={personForm.socialLinks.github} onChange={(e) => handleChange(e, setPersonForm, personForm, "socialLinks")} className="border p-1 rounded" required />
            <input type="text" name="twitter" placeholder="Twitter" value={personForm.socialLinks.twitter} onChange={(e) => handleChange(e, setPersonForm, personForm, "socialLinks")} className="border p-1 rounded" required />
            <button onClick={addPerson} className="bg-sky-600 text-white px-3 rounded">Add</button>
        </div>
        <ul>
            {people.map(p => (
            <li key={p._id} className="flex justify-between border-b py-1">
                {p.name} ({p.role} - {p.category})
                <button onClick={() => deletePerson(p._id)} className="text-red-600">Delete</button>
            </li>
            ))}
        </ul>
        </section>
        {/* Publications */}
<section className="mb-6 p-4 bg-gray-50 rounded shadow">
  <h2 className="text-xl font-semibold mb-2">Manage Publications</h2>

  {/* Add Publication Form */}
  <div className="flex flex-wrap gap-2 mb-2 items-center">
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={publicationForm.title}
      onChange={(e) => handleChange(e, setPublicationForm, publicationForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="text"
      name="authors"
      placeholder="Authors"
      value={publicationForm.authors}
      onChange={(e) => handleChange(e, setPublicationForm, publicationForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="text"
      name="journal"
      placeholder="Journal"
      value={publicationForm.journal}
      onChange={(e) => handleChange(e, setPublicationForm, publicationForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="number"
      name="year"
      placeholder="Year"
      value={publicationForm.year}
      onChange={(e) => handleChange(e, setPublicationForm, publicationForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="text"
      name="description"
      placeholder="Description"
      value={publicationForm.description}
      onChange={(e) => handleChange(e, setPublicationForm, publicationForm)}
      className="border p-1 rounded"
    />
    <input
      type="text"
      name="link"
      placeholder="Link"
      value={publicationForm.link}
      onChange={(e) => handleChange(e, setPublicationForm, publicationForm)}
      className="border p-1 rounded"
    />
    <button onClick={addPublication} className="bg-sky-600 text-white px-3 rounded">Add</button>
  </div>

  {/* List of Publications */}
  <ul>
    {publications.map(pub => (
      <li key={pub._id} className="flex justify-between border-b py-1">
        {pub.title} ({pub.authors} - {pub.year})
        <button onClick={() => deletePublication(pub._id)} className="text-red-600">Delete</button>
      </li>
    ))}
  </ul>
</section>
{/* Announcements */}
<section className="mb-6 p-4 bg-gray-50 rounded shadow">
  <h2 className="text-xl font-semibold mb-2">Manage Announcements</h2>

  {/* Add Announcement Form */}
  <div className="flex flex-wrap gap-2 mb-2 items-center">
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={announcementForm.title}
      onChange={(e) => handleChange(e, setAnnouncementForm, announcementForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="date"
      name="date"
      placeholder="Date"
      value={announcementForm.date}
      onChange={(e) => handleChange(e, setAnnouncementForm, announcementForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="text"
      name="link"
      placeholder="Link"
      value={announcementForm.link}
      onChange={(e) => handleChange(e, setAnnouncementForm, announcementForm)}
      className="border p-1 rounded"
    />
    <label className="flex items-center gap-1">
      <input
        type="checkbox"
        name="important"
        checked={announcementForm.important}
        onChange={(e) => handleChange(e, setAnnouncementForm, announcementForm)}
      />
      Important
    </label>
    <button onClick={addAnnouncement} className="bg-sky-600 text-white px-3 rounded">Add</button>
  </div>

  {/* List of Announcements */}
  <ul>
    {announcements.map(a => (
      <li key={a._id} className="flex justify-between border-b py-1">
        {a.title} ({a.date}) {a.important && <span className="text-red-500 font-bold">Important</span>}
        <button onClick={() => deleteAnnouncement(a._id)} className="text-red-600">Delete</button>
      </li>
    ))}
  </ul>
</section>

{/* Useful Links */}
<section className="mb-6 p-4 bg-gray-50 rounded shadow">
  <h2 className="text-xl font-semibold mb-2">Manage Useful Links</h2>

  {/* Add Useful Link Form */}
  <div className="flex flex-wrap gap-2 mb-2 items-center">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={linkForm.name}
      onChange={(e) => handleChange(e, setLinkForm, linkForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="url"
      name="url"
      placeholder="URL"
      value={linkForm.url}
      onChange={(e) => handleChange(e, setLinkForm, linkForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="text"
      name="category"
      placeholder="Category"
      value={linkForm.category}
      onChange={(e) => handleChange(e, setLinkForm, linkForm)}
      className="border p-1 rounded"
    />
    <button onClick={addLink} className="bg-sky-600 text-white px-3 rounded">Add</button>
  </div>

  {/* List of Links */}
  <ul>
    {links.map(l => (
      <li key={l._id} className="flex justify-between border-b py-1">
        {l.name} ({l.category || "General"})
        <button onClick={() => deleteLink(l._id)} className="text-red-600">Delete</button>
      </li>
    ))}
  </ul>
</section>



        {/* Other sections (Publications, Announcements, Useful Links) remain mostly the same */}
        {/* ... */}
      </div>
    </div>
  );
};

export default AdminDashboard;
