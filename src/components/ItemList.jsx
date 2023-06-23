import ShowcaseApplicants from "./ShowcaseApplicants";

export default function ItemList() {
  const applicants = [
    {
      name: 'Joe',
      work: 'freelance-developer',
      blogs: '54',
      websites: '32',
      hackathons: 'none',
      location: 'Morocco',
      id: '0',
    },
    {
      name: 'Janet',
      work: 'fullstack-developer',
      blogs: '34',
      websites: '12',
      hackathons: '6',
      location: 'Mozambique',
      id: '1',
    },
  ];

  return (
    <>
      <ShowcaseApplicants applicants={applicants} />
    </>
  )
}
