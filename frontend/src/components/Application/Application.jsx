import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";

const Application = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState("");
  const [applicant, setApplicant] = useState(props.applicant || null);

  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const { id } = useParams();

  // ✅ Load applicant if not passed as prop
  useEffect(() => {
    if (user && user.role === "Employer" && !applicant && id) {
      axios
        .get(`http://localhost:4000/api/v1/application/${id}`, { withCredentials: true })
        .then((res) => setApplicant(res.data.applicant))
        .catch((err) => console.error("Error loading applicant:", err));
    }
  }, [applicant, id, user]);

  // ✅ File upload validation
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileError("");
    if (!file) {
      setResume(null);
      return;
    }
    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setFileError("Please select a valid image file (PNG, JPEG, or WEBP)");
      setResume(null);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setFileError("File size should be less than 2MB");
      setResume(null);
      return;
    }
    setResume(file);
  };

  // ✅ Form submit
  const handleApplication = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address || !coverLetter) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!resume) {
      setFileError("Please upload your resume");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume(null);
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      const errorMessage = error.response?.data?.message ||
        "Something went wrong. Please try again later.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Protect unauthorized access
  useEffect(() => {
    if (!isAuthorized || (user && user.role === "Employer" && !id && !applicant)) {
      navigateTo("/");
    }
  }, [isAuthorized, user, id, applicant, navigateTo]);

  return (
    <section className="application">
      <div className="container">
        {user && user.role === "Employer" ? (
          <>
            {applicant && applicant._id ? (
              <div>
                <h3>Applicant Details</h3>
                <p><strong>Name:</strong> {applicant.name}</p>
                <p><strong>Email:</strong> {applicant.email}</p>
                <p><strong>Phone:</strong> {applicant.phone}</p>
                <p><strong>Address:</strong> {applicant.address}</p>
              </div>
            ) : (
              <p>Loading applicant information...</p>
            )}
          </>
        ) : (
          <>
            <h3>Application Form</h3>
            <form onSubmit={handleApplication}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <textarea
                placeholder="Cover Letter..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
              />
              <div>
                <label
                  style={{ textAlign: "start", display: "block", fontSize: "20px" }}
                >
                  Upload Resume
                  <p style={{ color: "red", fontSize: "12px", margin: "5px 0 0 0" }}>
                    (Supported formats: PNG, JPEG, WEBP. Max size: 2MB)
                  </p>
                </label>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.webp"
                  onChange={handleFileChange}
                  style={{ width: "100%" }}
                />
                {fileError && (
                  <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                    {fileError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Submitting..." : "Send Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Application;
