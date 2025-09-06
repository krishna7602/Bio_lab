import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = ({ onClose }) => {
  const [people, setPeople] = useState([]);
  const [publications, setPublications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [researchAreas, setResearchAreas] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [faculty, setFaculty] = useState([]);
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
  const [researchForm, setResearchForm] = useState({
    title: "",
    description: "",
    keywords: "",
  });
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    imageUrl: "",
  });
  const [facultyForm, setFacultyForm] = useState({
  name: "",
  image: "",
  designation: "",
  department: "Bio Technology",
  qualifications: "",
  bio: "",
  address: "",
  email: "",
  phone: "",
  achievements: {
    publications: 0,
    awards: "",
    projects: 0,
  },
});
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
      const researchRes = await axios.get(
        "http://localhost:8001/api/v1/users/research-areas"
      );
      setResearchAreas(researchRes.data.data);
      const galleryRes = await axios.get("http://localhost:8001/api/v1/users/gallery");
      setGallery(galleryRes.data.data);

      const facultyRes = await axios.get("http://localhost:8001/api/v1/users/faculty");
    setFaculty(facultyRes.data.data);
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

  const addResearchArea = async () => {
    try {
      const payload = {
        ...researchForm,
        keywords: researchForm.keywords
          .split(",")
          .map((k) => k.trim())
          .filter((k) => k),
      };
      await axios.post(
        "http://localhost:8001/api/v1/users/research-areas",
        payload,
        { withCredentials: true }
      );
      setSuccess("Research Area added successfully");
      setResearchForm({ title: "", description: "", keywords: "" });
      fetchData();
    } catch (err) {
      setError("Failed to add research area");
    }
  };
  const deleteResearchArea = async (id) => {
    try {
      await axios.post(
        `http://localhost:8001/api/v1/users/research-areas/${id}`,
        { withCredentials: true }
      );
      setSuccess("Research Area deleted successfully");
      fetchData();
    } catch (err) {
      setError("Failed to delete research area");
    }
  };

  const addGallery = async () => {
    try {
      await axios.post("http://localhost:8001/api/v1/users/gallery", galleryForm, { withCredentials: true });
      setSuccess("Image added successfully");
      setGalleryForm({ title: "", imageUrl: "" });
      fetchData();
    } catch (err) {
      setError("Failed to add image");
    }
  };

  const deleteGallery = async (id) => {
    try {
      await axios.post(`http://localhost:8001/api/v1/users/gallery/${id}`, {}, { withCredentials: true });
      setSuccess("Image deleted successfully");
      fetchData();
    } catch (err) {
      setError("Failed to delete image");
    }
  };
  // Fetch faculty
const addFaculty = async () => {
  try {
    const payload = {
      ...facultyForm,
      qualifications: facultyForm.qualifications
        .split(",")
        .map((q) => q.trim()),
      achievements: {
        publications: Number(facultyForm.achievements.publications),
        awards: facultyForm.achievements.awards
          .split(",")
          .map((a) => a.trim()),
        projects: Number(facultyForm.achievements.projects),
      },
    };
    await axios.post("http://localhost:8001/api/v1/users/faculty", payload, {
      withCredentials: true,
    });
    setSuccess("Faculty added successfully");
    fetchData();
    setFacultyForm({
      name: "",
      image: "",
      designation: "",
      department: "Bio Technology",
      qualifications: "",
      bio: "",
      address: "",
      email: "",
      phone: "",
      achievements: {
        publications: 0,
        awards: "",
        projects: 0,
      },
    });
  } catch (err) {
    setError("Failed to add faculty");
  }
};

const deleteFaculty = async (id) => {
  try {
    await axios.post(`http://localhost:8001/api/v1/users/faculty/${id}`, {
      withCredentials: true,
    });
    setSuccess("Faculty deleted successfully");
    fetchData();
  } catch (err) {
    setError("Failed to delete faculty");
  }
};

const updateFaculty = async (id, updatedData) => {
  try {
    await axios.put(
      `http://localhost:8001/api/v1/users/faculty/${id}`,
      updatedData,
      { withCredentials: true }
    );
    setSuccess("Faculty updated successfully");
    fetchData();
  } catch (err) {
    setError("Failed to update faculty");
  }
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

{/* Research Areas */}
<section className="mb-6 p-4 bg-gray-50 rounded shadow">
  <h2 className="text-xl font-semibold mb-2">Manage Research Areas</h2>
  <div className="flex flex-wrap gap-2 mb-2 items-center">
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={researchForm.title}
      onChange={(e) => handleChange(e, setResearchForm, researchForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="text"
      name="description"
      placeholder="Description"
      value={researchForm.description}
      onChange={(e) => handleChange(e, setResearchForm, researchForm)}
      className="border p-1 rounded w-72"
      required
    />
    <input
      type="text"
      name="keywords"
      placeholder="Keywords (comma separated)"
      value={researchForm.keywords}
      onChange={(e) => handleChange(e, setResearchForm, researchForm)}
      className="border p-1 rounded w-64"
    />
    <button
      onClick={addResearchArea}
      className="bg-sky-600 text-white px-3 rounded"
    >
      Add
    </button>
  </div>
  <ul>
    {researchAreas.map((r) => (
      <li key={r._id} className="flex justify-between border-b py-1">
        <div>
          <span className="font-medium">{r.title}</span> —{" "}
          <span className="text-sm text-gray-600">
            {r.keywords?.join(", ")}
          </span>
        </div>
        <button
          onClick={() => deleteResearchArea(r._id)}
          className="text-red-600"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</section>

{/* Gallery */}
<section className="mb-6 p-4 bg-gray-50 rounded shadow">
  <h2 className="text-xl font-semibold mb-2">Manage Gallery</h2>

  {/* Add Image Form */}
  <div className="flex flex-wrap gap-2 mb-2 items-center">
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={galleryForm.title}
      onChange={(e) => handleChange(e, setGalleryForm, galleryForm)}
      className="border p-1 rounded"
      required
    />
    <input
      type="url"
      name="imageUrl"
      placeholder="Image URL"
      value={galleryForm.imageUrl}
      onChange={(e) => handleChange(e, setGalleryForm, galleryForm)}
      className="border p-1 rounded w-72"
      required
    />
    <button onClick={addGallery} className="bg-sky-600 text-white px-3 rounded">
      Add
    </button>
  </div>

  {/* List of Gallery Images */}
  <ul className="space-y-2">
    {gallery.map((g) => (
      <li
        key={g._id}
        className="flex items-center justify-between border-b py-1"
      >
        <div className="flex items-center gap-3">
          <img
            src={g.imageUrl}
            alt={g.title}
            className="w-20 h-14 object-cover rounded border"
          />
          <span>{g.title}</span>
        </div>
        <button
          onClick={() => deleteGallery(g._id)}
          className="text-red-600"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</section>

{/* Faculty */}
{/* Faculty */}
<section className="mb-6 p-4 bg-gray-50 rounded shadow">
  <h2 className="text-xl font-semibold mb-2">Manage Faculty</h2>

  {/* Add Faculty Form */}
  <div className="flex flex-wrap gap-2 mb-2 items-center">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={facultyForm.name}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-64"
      required
    />
    <input
      type="url"
      name="image"
      placeholder="Image URL"
      value={facultyForm.image}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-64"
      required
    />
    <input
      type="text"
      name="designation"
      placeholder="Designation"
      value={facultyForm.designation}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-64"
      required
    />
    <input
      type="text"
      name="department"
      placeholder="Department"
      value={facultyForm.department}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-64"
    />
    <textarea
      name="bio"
      placeholder="Short Bio"
      value={facultyForm.bio}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-full"
      rows={2}
    />
    <textarea
      name="qualifications"
      placeholder="Qualifications (comma separated)"
      value={facultyForm.qualifications}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-full"
    />
    <textarea
      name="address"
      placeholder="Address"
      value={facultyForm.address}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-full"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={facultyForm.email}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-64"
      required
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      value={facultyForm.phone}
      onChange={(e) => handleChange(e, setFacultyForm, facultyForm)}
      className="border p-1 rounded w-64"
    />
    <input
      type="number"
      name="publications"
      placeholder="Publications"
      value={facultyForm.achievements?.publications}
      onChange={(e) =>
        setFacultyForm({
          ...facultyForm,
          achievements: {
            ...facultyForm.achievements,
            publications: e.target.value,
          },
        })
      }
      className="border p-1 rounded w-40"
    />
    <input
      type="text"
      name="awards"
      placeholder="Awards (comma separated)"
      value={facultyForm.achievements.awards}
      onChange={(e) =>
        setFacultyForm({
          ...facultyForm,
          achievements: {
            ...facultyForm.achievements,
            awards: e.target.value,
          },
        })
      }
      className="border p-1 rounded w-64"
    />
    <input
      type="number"
      name="projects"
      placeholder="Projects"
      value={facultyForm.achievements.projects}
      onChange={(e) =>
        setFacultyForm({
          ...facultyForm,
          achievements: {
            ...facultyForm.achievements,
            projects: e.target.value,
          },
        })
      }
      className="border p-1 rounded w-40"
    />

    <button
      onClick={addFaculty}
      className="bg-sky-600 text-white px-3 rounded"
    >
      Add Faculty
    </button>
  </div>

  {/* Faculty List */}
  <ul className="space-y-2">
    {faculty.map((f) => (
      <li
        key={f._id}
        className="flex items-center justify-between border-b py-2"
      >
        <div className="flex items-center gap-3">
          <img
            src={f.image}
            alt={f.name}
            className="w-16 h-16 object-cover rounded-full border"
          />
          <div>
            <p className="font-medium">{f.name}</p>
            <p className="text-sm text-gray-600">
              {f.designation}, {f.department}
            </p>
            <p className="text-xs text-gray-500">
              Publications: {f.achievements?.publications || 0} | Projects:{" "}
              {f.achievements?.projects || 0}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => updateFaculty(f._id, f)}
            className="text-blue-600"
          >
            Update
          </button>
          <button
            onClick={() => deleteFaculty(f._id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
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
