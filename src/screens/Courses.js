import CoursesIndividual from '../CoursesIndividual';
import CoursesGroup from '../CoursesGroup';
import CoursesSmallGroup from '../CoursesSmallGroup';

export default function Home() {
    return (
        <>
            <a id="individual-course" />
            <CoursesIndividual />
            <a id="group-course" />
            <CoursesGroup />
            <a id="small-group-course" />
            <CoursesSmallGroup />
        </>
    );
}
