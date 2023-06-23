

export default function ShowcaseApplicants(props) {

  const { applicants } = props;

  return (
    <>
      {applicants.map(applicant => {
        return (
          <div key={applicant.id}>
            <p>Applicant Name: {applicant.name}</p>
            <p>Applicant location: {applicant.location}</p>
            <p>Hackathons participated: {applicant.hackathons}</p>
          </div>
        )
      })}
    </>
  )
}
