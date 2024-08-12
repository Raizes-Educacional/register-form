import '../../../../styles/global.css';
import ClassInfo from '../../../atoms/signup/content/ClassInfo';
import DescriptionInfo from '../../../atoms/signup/content/DescriptionInfo';
import LocationInfo from '../../../atoms/signup/content/LocationInfo';

export default function HomeStep() {
  return (
    <form action="" className="w-max-screen flex flex-col items-center justify-center text-base">
      <fieldset className='m-auto flex flex-col items-center justify-center gap-14'>
        <section className='md:max-w-2xl flex flex-col items-center gap-6'>
          <DescriptionInfo />
          <ClassInfo />
          <LocationInfo />
        </section>
      </fieldset>
    </form>
  );
};
