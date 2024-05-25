// components/Step1.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";

interface FormData {
  nickname: string;
  faceitProfile: string;
  region: string;
  discordID: string;
  email: string;
}

const Step1: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nickname: "",
    faceitProfile: "",
    region: "",
    discordID: "",
    email: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Store form data in local storage or pass it to the next page via query parameters
    localStorage.setItem("formData", JSON.stringify(formData));
    router.push("/step2");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="faceitProfile">Faceit Profile</label>
        <input
          type="text"
          id="faceitProfile"
          name="faceitProfile"
          value={formData.faceitProfile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="region">Region</label>
        <input
          type="text"
          id="region"
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="discordID">Discord ID</label>
        <input
          type="text"
          id="discordID"
          name="discordID"
          value={formData.discordID}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
