// components/Card.js
import Image from "next/image";
import styles from "@/styles/components/CardProject.module.css";

interface CardProps {
  imageSrc: string;
  projectName: string;
  link: string;
}

const CardProject: React.FC<CardProps> = ({ imageSrc, projectName, link }) => {
  return (
    <a href={link} target="_blank" className={`${styles.card} ${styles.CardProject}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <h2 className={styles.projectName}>{projectName}</h2>
      </div>
    </a>
  );
};

export default CardProject;
