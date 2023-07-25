import { H2 } from '../Headings/Headings';
import styles from './styles.module.scss';
interface SectionProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}
interface HeadingProps {
    title: string;
    description: string;
}
interface SectionComponent extends React.FC<SectionProps> {
    Heading: React.FC<HeadingProps>;
}
const Section: SectionComponent = ({ className = null, children, ...rest }) => {
    return (
        <section className={`${styles.baseContainer} ${className}`} {...rest}>
            {children}
        </section>
    );
};

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
    return (
        <div className={styles.headingWrapper}>
            <H2>{title}</H2>
            <p>{description}</p>
        </div>
    );
};
Section.Heading = Heading;
export default Section;
