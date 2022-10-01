import karma from '../assets/svg/icon-karma.svg';
import builder from '../assets/svg/icon-team-builder.svg';
import supervisor from '../assets/svg/icon-supervisor.svg';
import calculator from '../assets/svg/icon-calculator.svg';

const features = [
  {
    id: 1,
    name: 'Supervisor',
    about: 'Monitors activity to identify project roadblocks',
    image: supervisor,
    color: '--cyan',
  },
  {
    id: 2,
    name: 'Team Builder',
    about: 'Scans our talent network to create the optimal team for your project',
    image: builder,
    color: '--red',
  },
  {
    id: 3,
    name: 'Calculator',
    about: 'Uses data from past projects to provide better delivery estimates',
    image: calculator,
    color: '--blue',
  },
  {
    id: 4,
    name: 'Karma',
    about: 'Regularly evaluates our talent to ensure quality',
    image: karma,
    color: '--orange',
  },
];

export default features;
