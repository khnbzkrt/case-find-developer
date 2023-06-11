import {
  Certificate,
  Education,
  Experience,
  ProfileSidebar,
  SectionTitle,
  IconTitle,
} from '@/components';

import styles from './styles.module.css';

import {
  experiences,
  abilities,
  certificates,
  educations,
  interests,
} from './data';

export default function ProfileInfoSection() {
  return (
    <section className={`container`}>
      <div className={styles.profileInfoSectionContainer}>
        <ProfileSidebar />
        <article>
          <SectionTitle title={'Profil'} fontSize={32} paddingBottom />
          <SectionTitle
            title={'Profesyonel Bakış'}
            href={'/'}
            linkText={'Düzenle'}
            border
            color="var(--border-color-blue)"
            paddingBottom
          />
          <p className={styles.profileDescriptonText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <SectionTitle
            title={'Deneyim'}
            href={'/'}
            linkText={'Düzenle'}
            border
            paddingBottom
          />
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              company={experience.company}
              content={experience.content}
              dateText={experience.dateText}
              location={experience.location}
              title={experience.title}
            />
          ))}

          <SectionTitle
            title={'Eğitim'}
            href={'/'}
            linkText={'Düzenle'}
            border
            paddingBottom
          />

          {educations.map((education) => (
            <Education
              key={education.id}
              date={education.date}
              degree={education.degree}
              section={education.section}
              university={education.university}
            />
          ))}

          <SectionTitle
            title={'Sertifikalar'}
            href={'/'}
            linkText={'Düzenle'}
            border
            paddingBottom
          />
          {certificates.map((certificate) => (
            <Certificate
              key={certificate.id}
              title={certificate.title}
              organisation={certificate.organisation}
              date={certificate.date}
            />
          ))}

          <SectionTitle
            title={'Yetenekler'}
            href={'/'}
            linkText={'Düzenle'}
            border
            paddingBottom
          />
          <div className={styles.profileInfoAbilities}>
            {abilities.map((ability) => (
              <IconTitle
                key={ability.id}
                icon={ability.icon}
                text={ability.text}
              />
            ))}
          </div>

          <SectionTitle
            title={'İlgi Alanları'}
            href={'/'}
            linkText={'Düzenle'}
            border
            paddingBottom
          />
          <div className={styles.profileInfoAbilities}>
            {interests.map((interest) => (
              <IconTitle
                key={interest.id}
                icon={interest.icon}
                text={interest.text}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
