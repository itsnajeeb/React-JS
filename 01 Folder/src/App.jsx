import React from 'react'
import Card from './components/Card'

const App = () => {

 const jobs = [
  {
    logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Sr. Level",
    salary: 320,
    location: "Mumbai, India",
    jobPostDate: "2 days ago"
  },
  {
    logo: "https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png",
    company: "Meta",
    title: "Web Developer",
    tag1: "Part Time",
    tag2: "Jr. Level",
    salary: 120,
    location: "Hyderabad, India",
    jobPostDate: "1 week ago"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
    company: "Google",
    title: "Software Developer",
    tag1: "Full Time",
    tag2: "Sr. Level",
    salary: 350,
    location: "California, USA",
    jobPostDate: "1 month ago"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQwmig7sQlQOYXhfKK_AHK60gkNuot94Dkg&s",
    company: "Microsoft",
    title: "Front End Engineer",
    tag1: "Full Time",
    tag2: "Jr. Level",
    salary: 180,
    location: "Bengaluru, India",
    jobPostDate: "3 days ago"
  },
  {
    logo: "https://pngdownload.io/wp-content/uploads/2023/12/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design-jpg.webp",
    company: "Apple",
    title: "Back End Developer",
    tag1: "Full Time",
    tag2: "Sr. Level",
    salary: 400,
    location: "Cupertino, USA",
    jobPostDate: "2 weeks ago"
  },
  {
    logo: "https://images.vexels.com/media/users/3/140583/isolated/preview/905dd25934b7a05516389863f7cb9417-ibm-logo.png",
    company: "IBM",
    title: "Data Scientist",
    tag1: "Part Time",
    tag2: "Sr. Level",
    salary: 300,
    location: "New York, USA",
    jobPostDate: "1 month ago"
  },
  {
    logo: "https://brandlogos.net/wp-content/uploads/2014/10/adobe-logo-2017.png",
    company: "Adobe",
    title: "Product Manager",
    tag1: "Full Time",
    tag2: "Jr. Level",
    salary: 200,
    location: "Pune, India",
    jobPostDate: "4 days ago"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11P6VQRjUYCTA0aXaq-D0BTXUgTrELkgmgQ&s",
    company: "Intel",
    title: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Sr. Level",
    salary: 330,
    location: "Austin, USA",
    jobPostDate: "5 days ago"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt02Pvocmj2bC5dPEWVClHVw843KI_a6yNw&s",
    company: "Oracle",
    title: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Jr. Level",
    salary: 220,
    location: "Chennai, India",
    jobPostDate: "2 weeks ago"
  },
  {
    logo: "https://e7.pngegg.com/pngimages/301/258/png-clipart-logo-sap-se-businessobjects-business-intelligence-business-blue-angle.png",
    company: "SAP",
    title: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Sr. Level",
    salary: 280,
    location: "Berlin, Germany",
    jobPostDate: "3 weeks ago"
  }
];



  return (
    <div className='cardContainer'>
      {
        jobs.map((elem,index) =>
          <Card data={elem} key={index} />
        )
      }
    </div>
  )
}

export default App