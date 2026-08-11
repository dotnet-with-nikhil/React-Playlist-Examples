import EmployeeCard from "./EmployeeCard";
import Button from "./Button";

function LandingPage() {
  return (
    <>
      <h1>Reusable Components Demo</h1>

      <EmployeeCard
        name="Nikhil Parate"
        role="Senior React Developer"
        experience={10}
      />

      <EmployeeCard
        name="Rahul Sharma"
        role="Frontend Developer"
        experience={5}
      />

      <EmployeeCard
        name = "Rajat Sharma"
        role = "Fullstack Developer"
        experience = {15}
      />

      <EmployeeCard
        name = "Sagar Sharma"
        role = "UI Architect"
        experience = {20}
      />

      <Button text="View Profile" />

      <Button text="Edit Profile" />

      <Button text="Delete Profile" />
    </>
  );
}

export default LandingPage;