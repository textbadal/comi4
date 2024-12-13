import React from 'react';
import './AboutUs.css';
import { Helmet } from 'react-helmet';

// Sample data for team members
const teamMembers = [
  { name: 'Mayank Jha', role: 'Software Developer', imageUrl: 'images/Mayank.WebP' },
  { name: 'Ankit Pandey', role: 'Architect', imageUrl: 'images/Ankit.jpg' },
  { name: 'Manvi Verma', role: 'Java Developer', imageUrl: 'images/manvi.WebP' },
  { name: 'Harsh Verma', role: 'Quantity Surveyor', imageUrl: 'images/Harsh.WebP' },


];

const AboutUs = () => {
  return (
    <div className="about-us">

<Helmet>
        {/* Basic Meta Tags */}
        <title>About Us - InternCourse: Your Online Learning Platform</title>
        <meta
          name="description"
          content="Learn more about InternCourse, a leading online learning platform. Discover our mission, vision, team, and how we deliver high-quality, affordable courses to students worldwide."
        />
        <meta
          name="keywords"
          content="InternCourse, online learning, e-learning, online courses, software development courses, Java development, digital learning, affordable education"
        />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content="About InternCourse - Revolutionizing Online Education" />
        <meta
          property="og:description"
          content="Discover InternCourse, the leading platform offering affordable online courses in various fields like software development, design, and more. Meet our team and learn about our vision."
        />
        <meta property="og:image" content="https://interncourse.online/images/about-image.jpg" />
        <meta property="og:url" content="https://interncourse.online/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InternCourse" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About InternCourse | Affordable Online Learning" />
        <meta
          name="twitter:description"
          content="Learn about InternCourse, an innovative platform offering top-notch online courses in software development and more."
        />
        <meta name="twitter:image" content="https://interncourse.online/images/about-image.jpg" />
        <meta name="twitter:site" content="@InternCourse" />

        {/* Canonical Link (to prevent duplicate content) */}
        <link rel="canonical" href="https://interncourse.online/about" />

        {/* Additional Structured Data (for rich snippets) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "InternCourse",
              "url": "https://interncourse.online/about",
              "logo": "https://interncourse.online/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/InternCourse",
                "https://www.instagram.com/InternCourse",
                "https://twitter.com/InternCourse",
                "https://www.linkedin.com/company/interncourse"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9771041512",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "ZIP Code",
                "addressCountry": "IN"
              }
            }
          `}
        </script>
      </Helmet>


      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          To revolutionize the way people experience e-learning, creating accessible, engaging, and
          cutting-edge educational resources that empower learners across the globe to achieve their
          goals and transform their futures.
        </p>
      </section>
      

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide affordable, high-quality education to learners at all levels. We
          are committed to delivering a range of courses, from beginner to expert, through interactive
          content, expert instructors, and community support.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={`${member.name}`} className="team-member-photo" />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
