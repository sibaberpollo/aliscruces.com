import Courses from './Courses';

export default function FeaturedCourses() {
  return (
    <section style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="section-title text-center">
          <span>Enjoy some new awesome music</span>
          <h2>
            Featured <span>Courses</span>
          </h2>
          <i className="flaticon-playlist"></i>
        </div>

        <div className="authors-sec v5">
          <div className="row">
            <Courses
              imgSrc="/images/resources/author1.jpg"
              name="Nomina James"
              role="Scientist Artist"
              profileLink="https://www.patreon.com/NominaJames"
              playlistLink="#"
            />
            <Courses
              imgSrc="/images/resources/author2.jpg"
              name="Thomas James"
              role="Scientist Artist"
              profileLink="https://www.patreon.com/ThomasJames"
              playlistLink="#"
            />
            <Courses
              imgSrc="/images/resources/author3.jpg"
              name="Wilimes Doms"
              role="Scientist Artist"
              profileLink="https://www.patreon.com/WilimesDoms"
              playlistLink="#"
            />
            <Courses
              imgSrc="/images/resources/author4.jpg"
              name="Qlark Walkar"
              role="Scientist Artist"
              profileLink="https://www.patreon.com/QlarkWalkar"
              playlistLink="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
